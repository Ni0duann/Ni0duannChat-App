import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div>
      <div className="navbar">
        <span className="logo">Ni0duann Chat</span>
        <div className="user">
          <img
            src={currentUser?.photoURL}
            alt=""
          />
          <span>{currentUser.displayName}</span>
          <button onClick={()=>signOut(auth)}>logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
