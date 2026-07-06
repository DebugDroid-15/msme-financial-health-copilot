"use client";

import { useEffect, useRef, useState } from "react";

import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export interface ChatMessage {
  id: number;
  sender: "user" | "ai";
  message: string;
}

export default function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "ai",
      message:
        "Hello Rajesh 👋\n\nI'm your MSME Financial Copilot. Ask me anything about your business finances.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  function sendMessage(text: string) {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "user",
        message: text,
      },
      {
        id: Date.now() + 1,
        sender: "ai",
        message:
          "This is a placeholder AI response. Backend integration comes next.",
      },
    ]);
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-[#111827]">

      <div className="border-b border-slate-200 dark:border-slate-700 px-6 py-5">

        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          AI Financial Copilot
        </h1>

      </div>

      <MessageList
        messages={messages}
        bottomRef={bottomRef}
      />

      <ChatInput
        onSend={sendMessage}
      />

    </div>
  );
}