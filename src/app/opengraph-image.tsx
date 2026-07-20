import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "MIROLIC ENTERPRISE — Software Development, Cloud Services & Intranet Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 20% 20%, #1a1a1a 0%, #000000 60%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #f97316 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 800,
              color: "#000",
            }}>
            M
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              color: "#fbbf24",
            }}>
            MIROLIC ENTERPRISE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}>
            Custom Software,{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #f59e0b, #fbbf24, #f97316)",
                backgroundClip: "text",
                color: "transparent",
              }}>
              Built to Last.
            </span>
          </div>
          <div
            style={{
              fontSize: "30px",
              color: "#d4d4d8",
              lineHeight: 1.3,
              maxWidth: "1000px",
            }}>
            Web & mobile apps, SaaS platforms, APIs, cloud, DevOps and intranet
            systems for businesses that need reliable, scalable technology.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            color: "#a1a1aa",
            borderTop: "1px solid rgba(251, 191, 36, 0.25)",
            paddingTop: "24px",
          }}>
          <div>mirolic.com</div>
          <div>contact@mirolic.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
