"use client";
import { Editor } from "@/components/Editor";
import Player from "@/components/Player";
import Provider from "@/components/Provider";

export default function Home() {
  return (
    <div className="container mx-auto h-full px-4 py-8">
      <main className="flex min-h-full flex-col items-center gap-8">
        <h1 className="text-stroke-3 text-center font-[family-name:var(--font-mochiy)] text-2xl font-bold text-[#f11f12] md:text-4xl">
          まいばすけっと
          <br />
          セルフレジシミュレーター
        </h1>
        <p>スマホは消音モードをオフにしてください</p>
        <Provider>
          <Editor />
          <Player />
        </Provider>
      </main>
      <footer className="flex flex-wrap items-center justify-center gap-6"></footer>
    </div>
  );
}
