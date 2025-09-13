export const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-chat-bot border border-chat-bot-border px-4 py-3 rounded-2xl rounded-bl-lg shadow-message max-w-[80%]">
        <div className="flex items-center gap-2 text-chat-bot-foreground">
          <span className="text-sm">CampusBot is typing</span>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 bg-current rounded-full typing-indicator animation-delay-0"></div>
            <div className="w-1.5 h-1.5 bg-current rounded-full typing-indicator animation-delay-75"></div>
            <div className="w-1.5 h-1.5 bg-current rounded-full typing-indicator animation-delay-150"></div>
          </div>
        </div>
      </div>
    </div>
  );
};