import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 48,
            height: 48,
            borderRadius: 8,
            background: "#FAFAF9",
            color: "#0A0A0A",
            fontSize: 20,
            fontWeight: 700,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          AP
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 56, color: "#FAFAF9", fontWeight: 600 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 32, color: "#A5ADFA", marginTop: 16 }}>
            {siteConfig.title}
          </div>
          <div style={{ fontSize: 26, color: "#8A8A8A", marginTop: 24, maxWidth: 900 }}>
            {siteConfig.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
