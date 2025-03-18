// src/pages/ContactsPage.jsx
import React from "react";
import ContactListTable from "../components/Table/ContactListTable";
import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";

const ContactsPage = () => {
    return (
        <div className="h-screen flex flex-col">
            <Topbar />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="p-6">
                    <h1 className="text-lg font-semibold text-gray-700 mb-4">Contact List</h1>

                    {/* Tabs */}
                    <div className="flex border-b mb-4">
                        <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium">Active</button>
                        <button className="px-4 py-2 text-gray-500 hover:text-blue-600">Deleted</button>
                    </div>

                    {/* Search + Add Button */}
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                placeholder="Contact Name"
                                className="border px-3 py-1.5 text-sm rounded"
                            />
                            <input
                                type="text"
                                placeholder="Search Active Contacts..."
                                className="border px-3 py-1.5 text-sm rounded"
                            />
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-blue-500 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-600">+ Add</button>
                            <button className="bg-blue-200 text-blue-700 px-3 py-1.5 rounded text-sm">⚙</button>
                        </div>
                    </div>

                    {/* Table */}
                    <ContactListTable />

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-4 text-sm">
                        <div className="space-x-1">
                            <button className="border px-2 py-1 rounded hover:bg-gray-100">&lt;</button>
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <button
                                    key={num}
                                    className={`border px-2 py-1 rounded ${num === 4 ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
                                >
                                    {num}
                                </button>
                            ))}
                            <span className="px-2">…</span>
                            <button className="border px-2 py-1 rounded">572</button>
                            <button className="border px-2 py-1 rounded hover:bg-gray-100">&gt;</button>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span>Go to</span>
                            <input type="text" className="border px-2 py-1 w-14 rounded text-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsPage;
