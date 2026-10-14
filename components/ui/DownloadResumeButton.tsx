import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonAnchor } from "./Button";

interface DownloadResumeButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "xs" | "sm" | "md";
  label?: string;
  className?: string;
}

export function DownloadResumeButton({
  variant = "secondary",
  size = "md",
  label = "Download resume",
  className,
}: DownloadResumeButtonProps) {
  return (
    <ButtonAnchor
      href={profile.resumeUrl}
      download={profile.resumeFileName}
      variant={variant}
      size={size}
      className={className}
    >
      {size !== "xs" && <Download className="size-4" aria-hidden="true" />}
      {label}
    </ButtonAnchor>
  );
}
