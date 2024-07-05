import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

import ResultsDropdown from "./ResultsDropdown";
import SearchIcon from "../assets/SearchIcon.png";

const ChannelSearch = ({ setToggleContainer }) => {
  const { client, setActiveChannel } = useChatContext();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false); // Changed to boolean
  const [teamChannels, setTeamChannels] = useState([]);
  const [directChannels, setDirectChannels] = useState([]);

  useEffect(() => {
    if (!query) {
      setTeamChannels([]);
      setDirectChannels([]);
    }
  }, [query]);

  const getChannels = async (text) => {
    try {
      const channelResponse = await client.queryChannels({
        type: "team",
        name: { $autocomplete: text },
        members: { $in: [client.userID] },
      }); // Added await

      const userResponse = await client.queryUsers({
        id: { $ne: client.userID },
        name: { $autocomplete: text },
      }); // Added await

      const [channels, { users }] = await Promise.all([
        channelResponse,
        userResponse,
      ]);

      if (channels.length) setTeamChannels(channels); // Changed to channels.length
      if (users.length) setDirectChannels(users); // Changed to users.length
    } catch (error) {
      setQuery("");
    } finally {
      setLoading(false); // Ensure loading is set to false after fetch
    }
  };

  const onSearch = (event) => {
    event.preventDefault();

    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value);
  };

  const setChannel = (channel) => {
    setQuery("");
    setActiveChannel(channel);
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <img src={SearchIcon} alt="SearchIcon" width="30" />
        </div>
        <input
          type="text"
          placeholder="Search"
          value={query} // Removed typeof="text"
          onChange={onSearch}
        />
      </div>
      {query && (
        <ResultsDropdown
          teamChannels={teamChannels}
          directChannels={directChannels}
          loading={loading}
          setChannel={setChannel}
          setQuery={setQuery}
          setToggleContainer={setToggleContainer}
        />
      )}
    </div>
  );
};

export default ChannelSearch;
