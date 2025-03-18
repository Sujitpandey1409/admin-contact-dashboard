import React from 'react';
const Sidebar = () => {
    return (
      <div className="w-64 bg-white border-r text-sm">
        <div className="p-4 font-semibold">Admin</div>
        <ul className="space-y-2 pl-4 text-gray-700">
          <li className="font-medium text-blue-600">Overview</li>
          <li className="mt-4 font-semibold">Administrator</li>
          <li className="pl-2">User Permissions</li>
          <li className="pl-2">Data Access</li>
          <li className="mt-4 font-semibold">System Settings</li>
          <li className="pl-2">Smart Tag Setup</li>
          <li className="pl-2">Lookup List</li>
          <li className="mt-4 font-semibold">Company</li>
          <li className="pl-2">Company</li>
          <li className="pl-2">Customer Fee Schedule</li>
          <li className="mt-4 font-semibold">Users</li>
          <li className="pl-2">User List</li>
          <li className="pl-2">Task Groups</li>
          <li className="pl-2">User Non-Availability</li>
          <li className="pl-2">User Task Reassign</li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  