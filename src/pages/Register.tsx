const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Ni0duannChat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="昵称" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" />
          <button>注册</button>
        </form>
        <p>已经有账户? 登陆</p>
      </div>
    </div>
  );
};

export default Register;
