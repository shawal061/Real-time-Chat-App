import React, { useState, useEffect } from "react";
import { useChatContext } from "stream-chat-react";

import SearchIcon from "../assets/SearchIcon.png";

const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState("");

  const getChannels = async (text) => {
    try {
    } catch (error) {
      setQuery("");
    }
  };

  const onSearch = (event) => {
    event.preventDefault();

    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value);
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
          typeof="text"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
