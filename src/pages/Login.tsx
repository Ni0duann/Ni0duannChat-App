import { Link, useNavigate } from "react-router-dom";
import {auth} from "../firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSumbmit = async (e) => {
    e.preventDefault();
    const email: string = e.target[0].value;
    const password: string = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")
    } catch (err) {
      setErr(true)
    }
  }
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ni0duannChat App</span>
        <span className="title">Login</span>
        <form onSubmit={handleSumbmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>登陆</button>
        </form>
        <p>没有有账户? <Link to="/register">注册</Link></p>
        {err && <span>Some went wrong</span>}
      </div>
    </div>
  );
};

export default Login;