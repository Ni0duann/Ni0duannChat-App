
const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ni0duannChat App</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>登陆</button>
        </form>
        <p>没有有账户? 注册</p>
      </div>
    </div>
  );
};

export default Login

