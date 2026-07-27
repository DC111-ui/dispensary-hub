import { ImageResponse } from "next/og";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };
export const OG_IMAGE_CONTENT_TYPE = "image/png";

export function renderOgImage({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBFCFB",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "#635BFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: 6,
              padding: "0 16px",
            }}
          >
            <div style={{ width: 16, height: 5, borderRadius: 3, background: "#FFFFFF" }} />
            <div style={{ width: 26, height: 5, borderRadius: 3, background: "#FFFFFF" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 36, height: 5, borderRadius: 3, background: "#FFFFFF" }} />
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#C99A3E" }} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, fontWeight: 700, color: "#1A1D1B" }}>LeafLedger</span>
            {eyebrow ? (
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#635BFF",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {eyebrow}
              </span>
            ) : null}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#1A1D1B",
              lineHeight: 1.15,
              maxWidth: 980,
            }}
          >
            {title}
          </span>
          <span style={{ fontSize: 30, color: "#5B635E", maxWidth: 860 }}>{description}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#5B635E",
          }}
        >
          <span>leafledger.co.za</span>
          <span>Pretoria, South Africa</span>
        </div>
      </div>
    ),
    { ...OG_IMAGE_SIZE }
  );
}
