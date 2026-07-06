"use client";

import { useState } from "react";
import {
  Mic,
  Paperclip,
  SendHorizontal,
} from "lucide-react";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({
  onSend,
}: Props) {
  const [text, setText] = useState("");

  function send() {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  }

  return (
    <div className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111827] p-5">

      <div className="flex items-center gap-4 rounded-2xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 px-5 py-4">

        <Paperclip
          size={20}
          className="text-slate-500"
        />

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              send();
            }
          }}
          className="flex-1 bg-transparent outline-none text-slate-900 dark:text-white"
          placeholder="Ask anything about your business..."
        />

        <Mic
          size={20}
          className="text-slate-500"
        />

        <button
          onClick={send}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white hover:bg-emerald-500"
        >
          <SendHorizontal size={18} />
        </button>

      </div>

    </div>
  );
}