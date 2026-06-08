const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN!;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
const endpoint = `https://${domain}/api/2024-01/graphql.json`;

async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
  revalidate = 60
): Promise<T> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate },
  });

  if (!res.ok) throw new Error(`Shopify API error: ${res.status}`);

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);

  return json.data as T;
}

export interface GiftCardVariant {
  id: string;
  title: string;
  price: { amount: string; currencyCode: string };
  compareAtPrice: { amount: string; currencyCode: string } | null;
  availableForSale: boolean;
}

export interface GiftCardImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface GiftCard {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  featuredImage: GiftCardImage | null;
  variants: GiftCardVariant[];
}

const GIFT_CARD_FIELDS = `
  id
  title
  handle
  description
  descriptionHtml
  featuredImage {
    url
    altText
    width
    height
  }
  variants(first: 10) {
    edges {
      node {
        id
        title
        price { amount currencyCode }
        compareAtPrice { amount currencyCode }
        availableForSale
      }
    }
  }
`;

export async function getGiftCards(): Promise<GiftCard[]> {
  const data = await shopifyFetch<{
    products: { edges: { node: RawProduct }[] };
  }>(`query GiftCards { products(first: 20, query: "product_type:giftcard") { edges { node { ${GIFT_CARD_FIELDS} } } } }`);

  return data.products.edges.map(({ node }) => normalizeProduct(node));
}

export async function getGiftCardByHandle(handle: string): Promise<GiftCard | null> {
  const data = await shopifyFetch<{ product: RawProduct | null }>(
    `query GiftCardByHandle($handle: String!) { product(handle: $handle) { ${GIFT_CARD_FIELDS} } }`,
    { handle }
  );

  return data.product ? normalizeProduct(data.product) : null;
}

interface RawProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  featuredImage: GiftCardImage | null;
  variants: { edges: { node: GiftCardVariant }[] };
}

function normalizeProduct(node: RawProduct): GiftCard {
  return {
    id: node.id,
    title: node.title,
    handle: node.handle,
    description: node.description,
    descriptionHtml: node.descriptionHtml,
    featuredImage: node.featuredImage,
    variants: node.variants.edges.map(({ node: v }) => ({
      id: v.id,
      title: v.title,
      price: v.price,
      compareAtPrice: v.compareAtPrice,
      availableForSale: v.availableForSale,
    })),
  };
}

export interface CartLine {
  variantId: string;
  quantity: number;
}

const CREATE_CART_MUTATION = `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart { checkoutUrl }
      userErrors { field message }
    }
  }
`;

export async function createCartCheckout(lines: CartLine[]): Promise<string> {
  const data = await shopifyFetch<{
    cartCreate: {
      cart: { checkoutUrl: string } | null;
      userErrors: { field: string; message: string }[];
    };
  }>(
    CREATE_CART_MUTATION,
    { lines: lines.map((l) => ({ merchandiseId: l.variantId, quantity: l.quantity })) },
    0
  );

  if (data.cartCreate.userErrors.length > 0) {
    throw new Error(data.cartCreate.userErrors[0].message);
  }
  if (!data.cartCreate.cart) throw new Error("Failed to create cart");

  return data.cartCreate.cart.checkoutUrl;
}
