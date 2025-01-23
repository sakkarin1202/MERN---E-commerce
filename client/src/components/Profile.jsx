import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"></div>
          )}
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <button
            onClick={() => navigate("/profile")}
            className="text-blue-500 hover:underline"
          >
            Profile
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/setting")}
            className="text-blue-500 hover:underline"
          >
            Settings
          </button>
        </li>
        <li>
          <a
            onClick={() => logout()}
            className="hover:pointer bg-red-500 hover:text-red p-2 rounded transition-all"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
