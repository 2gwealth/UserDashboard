import React from "react";
import Sidebar from "./sidebar";
import Header from "./Header";
import StrategySection from "./StrategySection";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Header />
        <StrategySection />
      </div>
    </div>
  );
}
