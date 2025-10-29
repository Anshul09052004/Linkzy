import React, { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { dummyChats, dummyUserData } from "../assets/assets.js"

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const Navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState(null);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const fetchUser = async () => {
        setUser(dummyUserData)
    }
    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUsersChats = async () => {
        setChats(dummyChats);
        setSelectedChat(dummyChats[0]);
    }
    useEffect(() => {
        if (user) {
            fetchUsersChats();
        } else {
            setChats([]);
            setSelectedChat(null);
        }
    }, [user]);
    const value = {
        user,
        setUser,
        chats,
        setChats,
        selectedChat,
        setSelectedChat,
        theme,
        setTheme,
        Navigate,
        fetchUser
    };
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
export const useAppContext = () => useContext(AppContext);
