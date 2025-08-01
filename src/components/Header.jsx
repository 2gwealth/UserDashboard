import React from "react";

export default function Header() {
  return (
    <div className="mb-6">
      
      {/* 👤 Profile & Subscription Bar (Outside Top) */}
      <div className="flex justify-between items-center bg-white shadow p-3 rounded-xl mb-3">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-200"
          />
          <div>
            <p className="text-sm text-gray-500">Welcome</p>
            <p className="font-semibold text-lg text-gray-800">2G WEALTH CREATION</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">Subscription</p>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Active
          </span>
        </div>
      </div>

      {/* 🔔 Important Message (Outside Blue Box) */}
      <div className="bg-yellow-300 text-gray-900 p-3 rounded-lg mb-4 font-medium text-sm shadow">
        📢 Important: Your trial period ends in 3 days. Upgrade to continue using premium features.
      </div>

      {/* 🔷 Blue Box with Broker & P&L */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">Broker</h1>
            <p className="text-lg font-semibold">Angel (AASHISH)</p>
          </div>
          <div className="text-right">
            <h1 className="text-xl font-bold">Total P&L</h1>
            <p className="text-3xl font-bold">₹ 0.00</p>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex gap-6 mt-6">
          <Toggle label="Terminal" />
          <Toggle label="Trading Engine" />
        </div>
      </div>
    </div>
  );
}

function Toggle({ label }) {
  return (
    <div className="flex items-center gap-2 bg-white/20 p-2 rounded-full">
      <span className="text-sm">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only" />
        <span className="w-10 h-5 bg-gray-400 rounded-full peer-checked:bg-green-400 transition"></span>
        <span className="absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></span>
      </label>
    </div>
  );
}
