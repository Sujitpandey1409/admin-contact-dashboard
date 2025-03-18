// src/components/Table/ContactListTable.jsx
import React from "react";
import { contactsData } from "../../data/contactsData";

const ContactListTable = () => {
  return (
    <div className="bg-white shadow border rounded-lg mt-4 overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="bg-blue-50 text-left text-sm text-gray-600">
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Type</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">Phone Number</th>
            <th className="px-4 py-2 border">Email Address</th>
            <th className="px-4 py-2 border">Invoice Terms</th>
            <th className="px-4 py-2 border">Created By</th>
            <th className="px-4 py-2 border">Created On</th>
          </tr>
        </thead>
        <tbody>
          {contactsData.map((item, idx) => (
            <tr
              key={idx}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-4 py-2 border text-blue-600 underline cursor-pointer">
                {item.name}
              </td>
              <td className="px-4 py-2 border">{item.type}</td>
              <td className="px-4 py-2 border">{item.address || "-"}</td>
              <td className="px-4 py-2 border">{item.phone || "-"}</td>
              <td className="px-4 py-2 border">{item.email || "-"}</td>
              <td className="px-4 py-2 border">{item.invoiceTerms}</td>
              <td className="px-4 py-2 border">{item.createdBy}</td>
              <td className="px-4 py-2 border">{item.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactListTable;
