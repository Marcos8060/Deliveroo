import React,{useState} from "react";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="top-0 right-0 w-[30vw] bg-black  p-10 pl-20 text-white fixed h-full ">
      <h2 className="mt-20 text-4xl font-semibold text-white">
        I am a sidebar
      </h2>
    </div>
  );
};

export default Sidebar;
