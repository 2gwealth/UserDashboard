
import { FaHome, FaChartLine, FaClipboardList, FaHistory, FaHeadset, FaWhatsapp } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg flex flex-col p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">Sensible Algo</h2>
      
      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        <NavItem icon={<FaHome />} text="Home" />
        <NavItem icon={<FaChartLine />} text="Brokers" />
        <NavItem icon={<FaClipboardList />} text="Strategies" />
        
        <NavItem icon={<FaClipboardList />} text="Reports" />
      </nav>

      {/* 📈 Live Market Data (Static) */}
      <div className="mt-8 bg-gray-50 p-3 rounded-xl shadow-sm">
        <h3 className="text-sm font-semibold text-gray-600 mb-2">Live Market</h3>
        
        <div className="flex justify-between items-center py-1">
          <span className="text-gray-700 font-medium">NIFTY</span>
          <div className="text-right">
            <p className="text-gray-800 text-sm font-semibold">22,350.55</p>
            <p className="text-xs font-medium text-green-600">+125.35</p>
          </div>
        </div>

        <div className="flex justify-between items-center py-1">
          <span className="text-gray-700 font-medium">BANKNIFTY</span>
          <div className="text-right">
            <p className="text-gray-800 text-sm font-semibold">48,120.20</p>
            <p className="text-xs font-medium text-red-600">-85.10</p>
          </div>
        </div>

        <div className="flex justify-between items-center py-1">
          <span className="text-gray-700 font-medium">FINNIFTY</span>
          <div className="text-right">
            <p className="text-gray-800 text-sm font-semibold">19,500.80</p>
            <p className="text-xs font-medium text-green-600">+45.60</p>
          </div>
        </div>
      </div>

      {/* Help Desk */}
      <div className="mt-auto pt-6 border-t">
        <p className="text-sm text-gray-500">Help Desk</p>
        <button className="flex items-center gap-2 text-blue-500 mt-2">
          <FaHeadset /> Call Us
          <FaWhatsapp /> Whatsapp Us
        </button>
      </div>
    </div>
  );
}

function NavItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 cursor-pointer transition">
      <div className="text-blue-500 text-lg">{icon}</div>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}
