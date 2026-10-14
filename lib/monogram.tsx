import { profile } from "@/data/profile";

/** Text-only monogram used for the favicon and the Apple touch icon (no photo). */
export function Monogram({ size, radius }: { size: number; radius: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0c0f13",
        borderRadius: radius,
        color: "#2dd4bf",
        fontSize: Math.round(size * 0.46),
        fontWeight: 700,
        letterSpacing: "-0.04em",
      }}
    >
      {profile.initials}
    </div>
  );
}
