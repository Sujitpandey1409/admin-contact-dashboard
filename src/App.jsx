import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import ContactsPage from "./pages/ContactsPage";
import Home from "./pages/Home";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
