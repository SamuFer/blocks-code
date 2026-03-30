export const ButtonBlock = ({ label, color }: any) => (
    <div className="flex justify-center p-4">
      <button style={{ backgroundColor: color }} className="px-8 py-3 text-white rounded-lg font-bold shadow-md hover:opacity-90 transition">
        {label}
      </button>
    </div>
  );
  