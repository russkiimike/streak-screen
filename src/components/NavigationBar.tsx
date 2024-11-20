import { FaRegCompass, FaHome } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1b3b] from-40% to-bg-[#1a1b3b] p-4">
      <div className="max-w-md mx-auto flex justify-between items-center">
        <button className="p-4 rounded-full bg-[#4a4c8c]">
          <FaHome className="w-6 h-6" />
        </button>
        <button className="p-6 rounded-full bg-[#0083fc] -mt-8">
          <div className="text-4xl">👀
          </div>
        </button>
        <button className="p-4 rounded-full bg-[#4a4c8c]">
          <FaRegCompass className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;