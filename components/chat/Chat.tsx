import type { CHAT_PROFILE_QUERYResult } from "@/sanity.types";

type ChatProps = {
  profile: CHAT_PROFILE_QUERYResult | null;
};

function Chat({ profile }: ChatProps) {
  // TODO: replace placeholder UI with real chat implementation
  return (
    <div>
      Chat
      {profile ? (
        <span className="sr-only">
          {`Profile loaded for ${profile.firstName ?? ""} ${profile.lastName ?? ""}`}
        </span>
      ) : (
        <span className="sr-only">No profile available</span>
      )}
    </div>
  );
}

export default Chat;
