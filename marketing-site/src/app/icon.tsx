import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          gap: 3,
          background: "#635BFF",
          borderRadius: 7,
          padding: "0 7px",
        }}
      >
        <div style={{ width: 8, height: 2.6, borderRadius: 2, background: "#FFFFFF" }} />
        <div style={{ width: 13, height: 2.6, borderRadius: 2, background: "#FFFFFF" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
          <div style={{ width: 18, height: 2.6, borderRadius: 2, background: "#FFFFFF" }} />
          <div style={{ width: 3.5, height: 3.5, borderRadius: "50%", background: "#C99A3E" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
