"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

const SIZES = {
  xs: { box: "size-6", px: 24, initials: "text-[9px]" },
  sm: { box: "size-8", px: 32, initials: "text-[11px]" },
  lg: { box: "size-14", px: 56, initials: "text-base" },
} as const;

interface ProfileAvatarProps {
  size?: keyof typeof SIZES;
  /** Load immediately; use for avatars visible on first paint. */
  eager?: boolean;
  className?: string;
}

/**
 * Circular profile photo from `profile.photo`, cropped with object-cover.
 * Falls back to the initials monogram if no photo is set or it fails to load.
 */
export function ProfileAvatar({ size = "lg", eager = false, className }: ProfileAvatarProps) {
  const [failed, setFailed] = useState(false);
  const { photo } = profile;
  const s = SIZES[size];

  return (
    <span
      className={cn(
        "relative block shrink-0 overflow-hidden rounded-full border border-border bg-surface-2",
        s.box,
        className,
      )}
    >
      {photo && !failed ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          // The zoom enlarges the image inside the circle, so request enough pixels for it.
          sizes={`${Math.ceil(s.px * photo.zoom)}px`}
          loading={eager ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="object-cover"
          style={{ objectPosition: photo.position, transform: `scale(${photo.zoom})` }}
        />
      ) : (
        <span
          role="img"
          aria-label={profile.name}
          className={cn("flex size-full items-center justify-center font-mono font-semibold text-muted", s.initials)}
        >
          {profile.initials}
        </span>
      )}
    </span>
  );
}
