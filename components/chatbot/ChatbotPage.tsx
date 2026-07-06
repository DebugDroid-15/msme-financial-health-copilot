import ChatWindow from "./ChatWindow";
import RightPanel from "./RightPanel";

export default function ChatbotPage() {
  return (
    <div className="h-[calc(100vh-120px)]">
      <div className="grid h-full grid-cols-12 gap-6">

        {/* Chat */}

        <div className="col-span-12 xl:col-span-8 min-h-0">
          <ChatWindow />
        </div>

        {/* Right Panel */}

        <div className="hidden xl:block xl:col-span-4 min-h-0">
          <RightPanel />
        </div>

      </div>
    </div>
  );
}