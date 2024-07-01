import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import cookies from "universal-cookie";

import "./App.css";

import ChannelContainer from "./components/ChannelContainer";
import ChannelListContainer from "./components/ChannelListContainer";
import Auth from "./components/Auth";

const apiKey = "qzrrmqdkdpte";

const client = StreamChat.getInstance(apiKey);

const authToken = false;

const App = () => {
  if (!authToken) return <Auth />;

  return (
    <div className="app___wrapper" theme="team light">
      <Chat client={client}>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
