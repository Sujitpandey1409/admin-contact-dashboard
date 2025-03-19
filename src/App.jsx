import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import ContactsPage from "./pages/ContactsPage";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
}

export default App;
