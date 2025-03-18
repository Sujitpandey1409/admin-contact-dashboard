import { Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
}

export default App;
