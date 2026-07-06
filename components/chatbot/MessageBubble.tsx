"use client";

import { Bot, User } from "lucide-react";

interface Props {
  sender: "user" | "ai";
  message: string;
}

export default function MessageBubble({
  sender,
  message,
}: Props) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex items-end gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
          <Bot size={18} />
        </div>
      )}

      <div
        className={`rounded-3xl px-6 py-5 leading-8 whitespace-pre-line shadow-sm transition-all

        ${
          isUser
            ? "max-w-[70%] bg-emerald-600 text-white rounded-br-lg"
            : "max-w-[85%] bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 rounded-bl-lg"
        }`}
      >
        {message}
      </div>

      {isUser && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-700 text-white">
          <User size={18} />
        </div>
      )}
    </div>
  );
}