import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const pageFromPath = location.pathname.split('/')[1]; // get the route after '/'
    setCurrentPage(pageFromPath);
  }, [location.pathname]);

  const handlePageChange = (page) => {
    navigate(`/${page.toLowerCase()}`);
  };

  const getNavItemClasses = (page) => {
    const base = "cursor-pointer px-2 py-1";
    const active = "text-blue-600 border-b-2 border-blue-600";
    return `${base} ${currentPage === page ? active : "text-gray-600 hover:text-blue-500"}`;
  };

  return (
    <div className="flex justify-between items-center px-6 py-3 border-b bg-white">
      <div className="flex space-x-6 text-sm font-medium">
        <span className="cursor-pointer">Dashboard</span>
        <span className="cursor-pointer">Orders</span>
        <span className="cursor-pointer">Tasks</span>
        <span className="cursor-pointer">Reports</span>
        <span className="cursor-pointer">Accounting</span>
        <span
          onClick={() => handlePageChange('contacts')}
          className={getNavItemClasses('contacts')}
        >
          Contacts
        </span>
        <span
          onClick={() => handlePageChange('admin')}
          className={getNavItemClasses('admin')}
        >
          Admin
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="relative">
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">99+</span>
          🛎️
        </span>
        <div className="w-8 h-8 bg-gray-400 rounded-full text-white text-center leading-8">DK</div>
      </div>
    </div>
  );
};

export default Topbar;
