import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 16,
          background: "#635BFF",
          padding: "0 40px",
        }}
      >
        <div style={{ width: 45, height: 14, borderRadius: 8, background: "#FFFFFF" }} />
        <div style={{ width: 73, height: 14, borderRadius: 8, background: "#FFFFFF" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 101, height: 14, borderRadius: 8, background: "#FFFFFF" }} />
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#C99A3E" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
