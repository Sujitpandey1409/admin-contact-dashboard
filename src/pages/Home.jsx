// src/pages/ContactsPage.jsx
import React from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
    return (
        <div className="h-screen flex flex-col">
            <Topbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="p-6">
                    <h1 className="text-lg font-semibold text-gray-700 mb-4">Home</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
