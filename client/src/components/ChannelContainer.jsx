import React from "react";
import { Channel, useChatContext, MessageSimple } from "stream-chat-react";

import ChannelInner from "./ChannelInner";
import CreateChannel from "./CreateChannel";
import EditChannel from "./EditChannel";

const ChannelContainer = ({
  isCreating,
  setIsCreating,
  createType,
  isEditing,
  setIsEditing,
}) => {
  const channel = useChatContext();

  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    );
  }

  const EmptyState = () => {
    <div className="channel-empty__container">
      <p className="channel-empty__first">
        This is the beginning of your conversation!
      </p>
      <p className="channel-empty__second">
        Send messages, attachments, links, emojis, and many more!!!
      </p>
    </div>;
  };

  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => (
          <MessageSimple key={i} {...messageProps} />
        )}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  );
};

export default ChannelContainer;
