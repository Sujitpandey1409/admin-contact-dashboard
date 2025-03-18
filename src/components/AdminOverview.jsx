import AdminCard from "./AdminCard";

const AdminOverview = () => {
  const sections = [
    { title: "Administrator", items: ["User Permissions", "Data Access", "Allowed IP Address"] },
    { title: "System Settings", items: ["Smart Tag Setup", "Lookup List"] },
    { title: "Company", items: ["Company", "Order Number", "Invoice Number", "Customer Fee Schedule"] },
    { title: "Users", items: ["User List", "Lite User List", "Permission Groups", "Task Groups", "User Non-Availability", "User Task Reassign"] },
    { title: "Workflow", items: ["Workflow Groups"] },
    { title: "Order Settings", items: ["Transaction Types", "Order Templates", "Custom Documents", "Email Template", "SQSearch Bot"] },
    { title: "Defaults", items: ["Contact Fee Schedule", "Contact Workflow Groups", "Contact Guidance"] }
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
      {sections.map((section, idx) => (
        <AdminCard key={idx} title={section.title} items={section.items} />
      ))}
    </div>
  );
};

export default AdminOverview;
