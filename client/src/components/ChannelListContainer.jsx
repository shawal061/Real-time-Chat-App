import React from "react";

import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";

import ChannelSearch from "./ChannelSearch";
import TeamChannelList from "./TeamChannelList";
import TeamChannelPreview from "./TeamChannelPreview";

import ChatIcon from "../assets/ChatIcon.png";
import LogoutIcon from "../assets/LogoutIcon.png";

const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={ChatIcon} alt="ChatIcon" width="30" />
      </div>
    </div>

    <div className="channel-list__sidebar__icon2">
      <div className="icon2__inner">
        <img src={LogoutIcon} alt="LogoutIcon" width="30" />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Real-time Chat App</p>
  </div>
);

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
