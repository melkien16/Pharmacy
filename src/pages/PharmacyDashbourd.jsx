import React from "react";

const PharmacyDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white py-6 hidden lg:block">
        <nav className="space-y-4 px-6">
          <h2 className="text-xl font-bold mb-4">Pharmacy Dashboard</h2>
          <a
            href="#inventory"
            className="block py-2 hover:bg-blue-700 rounded px-4"
          >
            Manage Inventory
          </a>
          <a
            href="#analytics"
            className="block py-2 hover:bg-blue-700 rounded px-4"
          >
            View Analytics
          </a>
          <a
            href="#settings"
            className="block py-2 hover:bg-blue-700 rounded px-4"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center pb-4 border-b border-gray-300">
          <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
          <button className="lg:hidden bg-blue-900 text-white px-4 py-2 rounded-md">
            Menu
          </button>
        </header>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold">Total Drugs Listed</h3>
            <p className="text-2xl font-bold text-blue-900">120</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold">Total Sales</h3>
            <p className="text-2xl font-bold text-blue-900">$4,500</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h3 className="text-lg font-semibold">Customer Inquiries</h3>
            <p className="text-2xl font-bold text-blue-900">5</p>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-blue-900 text-white shadow rounded-lg p-4 text-center hover:bg-blue-700">
            Add New Drug
          </button>
          <button className="bg-blue-900 text-white shadow rounded-lg p-4 text-center hover:bg-blue-700">
            View Inventory
          </button>
          <button className="bg-blue-900 text-white shadow rounded-lg p-4 text-center hover:bg-blue-700">
            Edit Profile
          </button>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-sm text-gray-600">
              You have 5 new customer inquiries this week.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="border-b border-gray-200 pb-2">
                Inquiry from John Doe about Paracetamol
              </li>
              <li className="border-b border-gray-200 pb-2">
                Updated stock for Ibuprofen
              </li>
              <li>Inquiry from Jane Smith about Aspirin</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PharmacyDashboard;
