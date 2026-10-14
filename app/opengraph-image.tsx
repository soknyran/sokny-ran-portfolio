import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, Software Engineer, Full-Stack Developer, AI-Assisted Development`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const roles = ["Software Engineer", "Full-Stack Developer", "AI-Assisted Development"];
const stack = ["Java", "Spring Boot", "Next.js", "PostgreSQL"];

/** Text-only social preview: monogram, name, roles and core stack. No photo. */
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
          background: "#0c0f13",
          borderTop: "12px solid #2dd4bf",
          color: "#e9ebee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              borderRadius: 10,
              background: "#e9ebee",
              color: "#0c0f13",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a1a8b2" }}>{profile.location}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: "-0.03em" }}>{profile.name}</div>
          <div style={{ display: "flex", marginTop: 18, fontSize: 34, color: "#a1a8b2" }}>
            {roles.map((role, index) => (
              <div key={role} style={{ display: "flex" }}>
                {index > 0 && <div style={{ display: "flex", color: "#2dd4bf", padding: "0 18px" }}>/</div>}
                <div style={{ display: "flex" }}>{role}</div>
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
                padding: "8px 16px",
                borderRadius: 6,
                border: "1px solid #353d4a",
                background: "#12161c",
                fontSize: 24,
                color: "#e9ebee",
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
