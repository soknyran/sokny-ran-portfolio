import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonAnchor } from "./Button";

interface DownloadCVButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
  className?: string;
}

export function DownloadCVButton({ variant = "secondary", size = "md", className }: DownloadCVButtonProps) {
  return (
    <ButtonAnchor
      href={profile.resumeUrl}
      download={profile.resumeFileName}
      variant={variant}
      size={size}
      className={className}
    >
      <Download className="size-4" aria-hidden="true" />
      Download CV
    </ButtonAnchor>
  );
}
