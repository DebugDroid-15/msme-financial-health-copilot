"use client";

import MessageBubble from "./MessageBubble";
import SuggestionChips from "./SuggestionChips";
import { ChatMessage } from "./ChatWindow";

interface Props {
  messages: ChatMessage[];
  bottomRef: React.RefObject<HTMLDivElement | null>;
}

export default function MessageList({
  messages,
  bottomRef,
}: Props) {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-6">

      {messages.length === 1 && (
        <div className="mb-8">

          <SuggestionChips />

        </div>
      )}

      <div className="space-y-8">

        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            sender={msg.sender}
            message={msg.message}
          />
        ))}

      </div>

      <div ref={bottomRef} />

    </div>
  );
}