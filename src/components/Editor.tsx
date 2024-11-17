"use client";
import { useContext, useRef, useState } from "react";
import sounds from "./sounds.json";
import Button from "./Button";
import { TextContext } from "./Provider";

export function Editor() {
  const [text, setText] = useContext(TextContext);
  const [selected, setSelected] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onAdd = (text: string) => {
    setText((prev) => {
      if (!textareaRef.current) return prev;
      
      const startPos = textareaRef.current.selectionStart;
      const endPos = textareaRef.current.selectionEnd;
      const before = prev.substring(0, startPos);
      const after = prev.substring(endPos);

      return `${
        !before || before.endsWith("\n") ? before : `${before}\n`
      }${text}${after.startsWith("\n") ? after : `\n${after}`}`;
    });
    if (textareaRef.current)
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
  };

  return (
    <div className="flex size-full grow items-center gap-4 text-black max-md:flex-col">
      <select
        className="w-full self-stretch rounded-lg p-2 max-md:h-24"
        size={20}
        onChange={(e) => setSelected(e.target.value)}
        onDoubleClick={() => onAdd(selected)}
      >
        {sounds.map(({ category, name, sounds }) => [
          <option disabled key={category}>
            {name}
          </option>,
          sounds.map(({ path, name }) => (
            <option key={path} value={name}>
              {name}
            </option>
          )),
        ])}
      </select>
      <Button className="max-md:w-full" onClick={() => onAdd(selected)}>
        追加
      </Button>
      <textarea
        ref={textareaRef}
        className="w-full grow self-stretch rounded-lg p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
