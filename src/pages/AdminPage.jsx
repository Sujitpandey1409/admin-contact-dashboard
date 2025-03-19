import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AdminOverview from "../components/AdminOverview";

const AdminPage = () => {
    return (
        <main className="flex-1 bg-gray-100 overflow-y-auto">
            <p className="text-2xl font-semibold text-gray-800 p-6">
                Admin Overview
            </p>
            <AdminOverview />
        </main>
    );
};

export default AdminPage;
