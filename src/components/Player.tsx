"use client";

import { useContext } from "react";
import Button from "./Button";
import { TextContext } from "./Provider";
import sounds from "./sounds.json";

export default function Player() {
  const [text, setText] = useContext(TextContext);

  const flatSounds = sounds.map(({ sounds }) => sounds).flat();

  const onPlay = async () => {
    const audioContext = new AudioContext();
    const textArray = text.split("\n").filter(Boolean);
    const soundsArray = textArray.map((soundName) =>
      flatSounds.find(({ name }) => soundName === name)
    );

    if (soundsArray.includes(undefined))
      alert(
        "文章の解析に失敗しました。間違った文章が入力されていないか確認してください。"
      );

    const soundBufferArray = await Promise.all(
      soundsArray
        .filter((v) => !!v)
        .map(
          async (sound) =>
            await audioContext.decodeAudioData(
              await (await fetch(`/sounds/${sound.path}`)).arrayBuffer()
            )
        )
    );

    const playNextSound = (index: number) => {
      if (!soundBufferArray[index]) {
        audioContext.close();
        return;
      }
      const bufferSource = audioContext.createBufferSource();
      bufferSource.buffer = soundBufferArray[index];

      const onEnded = () => {
        bufferSource.disconnect();
        playNextSound(index + 1);
      };

      bufferSource.onended = onEnded;

      bufferSource.connect(audioContext.destination);
      bufferSource.start();
    };

    playNextSound(0);
  };

  return (
    <div className="flex gap-4">
      <Button onClick={onPlay}>再生</Button>
      <Button className="bg-white/20" onClick={() => setText("")}>
        リセット
      </Button>
    </div>
  );
}
