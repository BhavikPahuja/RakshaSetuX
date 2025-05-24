import { FaTachometerAlt, FaUserShield, FaCog, FaSignOutAlt } from "react-icons/fa";
import { SiPrivateinternetaccess } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SideBar = (props) => {
  const navigate = useNavigate();
  const tab = props.tab;
  const setTab = props.setTab;
  const navItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Activity", icon: <FaUserShield /> },
    { name: "Access Control", icon: <SiPrivateinternetaccess /> },
    { name: "Settings", icon: <FaCog /> },
  ];
  const setIsLoggedIn = props.setIsLoggedIn;

  const clickHandler = (event) => {
    event.preventDefault();
    toast.success("Logged out successfully");
    navigate("/login");
    setIsLoggedIn(false);
  }

  return (
    <div className="w-12/12 lg:w-3/12 h-full flex flex-col justify-between text-[#0f172a] p-6 shadow-xl">
      <div>
        <div className="flex items-center space-x-3 mb-16">
          <div className="bg-indigo-500 w-3 h-3 rounded-full animate-pulse"></div>
          <h2 className="text-2xl font-bold tracking-wide">RakshaSetuX</h2>
        </div>

        <ul className="space-y-4">
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setTab(item.name)}
              className={`flex items-center gap-3 text-lg cursor-pointer px-4 py-3 rounded-xl transition-all duration-300
                ${
                  tab === item.name
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "hover:bg-gray-800 hover:text-white hover:scale-110"
                }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={clickHandler} className="flex items-center gap-3 px-4 py-3 w-full text-left text-lg rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;