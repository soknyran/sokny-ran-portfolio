import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, Software Engineer, Full-Stack Developer, AI-Assisted Development`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const roles = ["Software Engineer", "Full-Stack Developer", "AI-Assisted Development"];
const stack = ["Java", "Spring Boot", "Next.js", "PostgreSQL"];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#09090b",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#f4f4f5",
              color: "#09090b",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ display: "flex", width: 10, height: 10, borderRadius: 10, background: "#818cf8" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: "-0.03em" }}>{profile.name}</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 20, fontSize: 34, color: "#a1a1aa" }}>
            {roles.map((role) => (
              <div key={role} style={{ display: "flex" }}>
                {role}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {stack.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "10px 18px",
                borderRadius: 10,
                border: "1px solid #33333b",
                background: "#111114",
                fontSize: 24,
                color: "#e4e4e7",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
