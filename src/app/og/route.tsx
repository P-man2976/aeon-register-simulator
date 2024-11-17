import { ImageResponse } from "next/og";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function GET() {
  const text = "まいばすけっとセルフレジシミュレーター";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#218963",
          color: "#f11f12",
          fontSize: 90,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textShadow:
              "-2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white",
          }}
        >
          <span>まいばすけっと</span>
          <span>セルフレジシミュレーター</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Mochiy Pop One",
          data: await loadGoogleFont("Mochiy Pop One", text),
          style: "normal",
        },
      ],
    }
  );
}
