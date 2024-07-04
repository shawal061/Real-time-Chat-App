// import React from "react";

// import { Avatar, ChannelPreview, useChatContext } from "stream-chat-react";

// const TeamChannelPreview = ({ channel, type }) => {
//   const { channel: activeChannel, client } = useChatContext();

//   const channelPreview = () => (
//     <p className="channel-preview__item">
//       # {channel?.data?.name || channel?.data?.id}
//     </p>
//   );

//   const DirectPreview = () => {
//     const members = Object.values(channel.state.members).filter(
//       ({ user }) => user.id !== client.userID
//     );

//     return (
//       <div className="channel-preview__item single">
//         <Avatar
//           image={members[0]?.user?.image}
//           name={members[0]?.user?.fullName}
//           size={24}
//         />
//         <p>{members[0]?.user?.fullName}</p>
//       </div>
//     );
//   };

//   return (
//     <div
//       className={
//         channel?.id === activeChannel?.id
//           ? "channel-preview__wrapper__selected"
//           : "channel-preview__wrapper"
//       }
//       onClick={() => {
//         console.log(channel);
//       }}
//     >
//       {type === "team" ? <ChannelPreview /> : <DirectPreview />}
//     </div>
//   );
// };

// export default TeamChannelPreview;

// import React from "react";
// import { Avatar, ChannelPreview, useChatContext } from "stream-chat-react";

// const TeamChannelPreview = ({
//   channel,
//   type,
//   setActiveChannel,
//   setIsCreating,
//   setIsEditing,
//   setToggleContainer,
// }) => {
//   const { channel: activeChannel, client } = useChatContext();

//   const channelPreview = () => (
//     <p className="channel-preview__item">
//       {/* Added fallback value to prevent undefined data issues */}#{" "}
//       {channel?.data?.name || channel?.data?.id || "Unnamed Channel"}
//     </p>
//   );

//   const DirectPreview = () => {
//     // Filtering out the current user from the members array
//     const members = Object.values(channel.state.members).filter(
//       ({ user }) => user.id !== client.userID
//     );

//     // Check if members array is empty and handle it
//     if (members.length === 0) {
//       return (
//         <div className="channel-preview__item single">
//           {/* Display a default avatar and message when no members are found */}
//           <Avatar size={24} />
//           <p>No members</p>
//         </div>
//       );
//     }

//     return (
//       <div className="channel-preview__item single">
//         {/* Ensure image and name properties are defined */}
//         <Avatar
//           image={members[0]?.user?.image || ""}
//           name={members[0]?.user?.fullName || members[0]?.user?.id}
//           size={24}
//         />
//         <p>{members[0]?.user?.fullName || members[0]?.user?.id}</p>
//       </div>
//     );
//   };

//   return (
//     <div
//       className={
//         channel?.id === activeChannel?.id
//           ? "channel-preview__wrapper__selected"
//           : "channel-preview__wrapper"
//       }
//       onClick={() => {
//         setIsCreating = { setIsCreating };
//         setIsEditing = { setIsEditing };
//         setActiveChannel = { channel };
//         if (setToggleContainer) {
//           setToggleContainer((prevState) => !prevState);
//         }
//       }}
//     >
//       {type === "team" ? channelPreview() : DirectPreview()}
//     </div>
//   );
// };

// export default TeamChannelPreview;

import React from "react";
import { Avatar, useChatContext } from "stream-chat-react";

const TeamChannelPreview = ({
  channel,
  type,
  setActiveChannel,
  setIsCreating,
  setIsEditing,
  setToggleContainer,
}) => {
  const { channel: activeChannel, client } = useChatContext();

  const channelPreview = () => (
    <p className="channel-preview__item">
      {/* Added fallback value to prevent undefined data issues */}#{" "}
      {channel?.data?.name || channel?.data?.id || "Unnamed Channel"}
    </p>
  );

  const DirectPreview = () => {
    // Filtering out the current user from the members array
    const members = Object.values(channel.state.members).filter(
      ({ user }) => user.id !== client.userID
    );

    // Check if members array is empty and handle it
    if (members.length === 0) {
      return (
        <div className="channel-preview__item single">
          {/* Display a default avatar and message when no members are found */}
          <Avatar size={24} />
          <p>No members</p>
        </div>
      );
    }

    return (
      <div className="channel-preview__item single">
        {/* Ensure image and name properties are defined */}
        <Avatar
          image={members[0]?.user?.image || ""}
          name={members[0]?.user?.fullName || members[0]?.user?.id}
          size={24}
        />
        <p>{members[0]?.user?.fullName || members[0]?.user?.id}</p>
      </div>
    );
  };

  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? "channel-preview__wrapper__selected"
          : "channel-preview__wrapper"
      }
      onClick={() => {
        setIsCreating(false);
        setIsEditing(false);
        setActiveChannel(channel);
        if (setToggleContainer) {
          setToggleContainer((prevState) => !prevState);
        }
      }}
    >
      {type === "team" ? channelPreview() : DirectPreview()}
    </div>
  );
};

export default TeamChannelPreview;
