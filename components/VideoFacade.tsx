"use client";

import { useState } from "react";
import Image from "next/image";

export default function VideoFacade({
  youtubeId,
  title,
  thumbnail,
}: {
  youtubeId: string;
  title: string;
  thumbnail?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative w-full aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-xl"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="relative w-full aspect-video rounded-xl overflow-hidden group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
      aria-label={`Play video: ${title}`}
    >
      {/* YouTube thumbnail via their CDN — no API key needed */}
      <Image
        src={thumbnail ?? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-ink/55 group-hover:bg-ink/45 transition-colors duration-200" aria-hidden="true" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" aria-hidden="true">
        <div className="w-20 h-20 rounded-full bg-white/95 group-hover:bg-white flex items-center justify-center shadow-xl transition-all duration-200 group-hover:scale-110">
          <svg className="w-8 h-8 text-teal-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-white/90 text-sm font-semibold tracking-wide uppercase">Watch Our Story</span>
      </div>
    </button>
  );
}
