import React from "react";
import Chatbox from "./Components/Chatbox";
import Sidebar from "./Components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Community from "./Pages/Community";
import Credits from "./Pages/Credits";

function App() {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 shadow-md hidden md:block">
        <div className="h-full p-4">
          <Sidebar />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6 min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Chatbox />} />
            <Route path="/community" element={<Community />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
