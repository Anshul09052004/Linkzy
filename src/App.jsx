import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Feed from "./Pages/Feed";
import ChatBox from "./Pages/ChatBox";
import Messages from "./Pages/Messages";
import Connections from "./Pages/Connections";
import Discover from "./Pages/Discover";
import Profile from "./Pages/Profile";
import CreatePost from "./Pages/CreatePost";



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route index element={<Feed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<ChatBox />} />
          <Route path="connections" element={<Connections />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />
          <Route path="create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
