

export default function StrategySection() {
  return (
    <div
      className="bg-white p-6 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-xl font-bold mb-4">Deployed Strategies</h2>
      
      <div className="flex flex-col items-center justify-center py-12 text-gray-400">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076553.png"
          alt="No Strategy"
          className="w-20 mb-4 opacity-70"
        />
        <p className="mb-4">No Strategy Deployed</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          + Create Strategy
        </button>
      </div>
    </div>
  );
}
