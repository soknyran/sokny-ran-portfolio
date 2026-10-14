import { ImageResponse } from "next/og";
import { Monogram } from "@/lib/monogram";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  // iOS applies its own rounded mask, so the tile is square.
  return new ImageResponse(<Monogram size={180} radius={0} />, size);
}
