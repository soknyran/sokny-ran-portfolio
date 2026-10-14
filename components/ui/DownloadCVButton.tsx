import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonAnchor } from "./Button";

interface DownloadCVButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "xs" | "sm" | "md";
  label?: string;
  className?: string;
}

export function DownloadCVButton({
  variant = "secondary",
  size = "md",
  label = "Download CV",
  className,
}: DownloadCVButtonProps) {
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
