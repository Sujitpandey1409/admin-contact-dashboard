const AdminCard = ({ title, items }) => {
    return (
        <div className="bg-white border rounded-md pb-2 shadow-sm w-full sm:w-80">
            <div className="p-2 pl-4  rounded bg-blue-200 flex gap-2">
                ℹ<h3 className="font-semibold mb-3 text-sm text-gray-700">{title}</h3>
            </div>
            <ul className="space-y-1 text-sm text-blue-600">
                {items.map((item, idx) => (
                    <li key={idx} className="hover:bg-blue-300 cursor-pointer border-x-amber-700 border-b-1 p-2 pl-4 flex">
                        <p>{item}</p>
                        <span className="ml-auto">👉</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminCard;
