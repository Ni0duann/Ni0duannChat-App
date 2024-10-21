const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <span className="logo">Ni0duann Chart</span>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/28167732/pexels-photo-28167732.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
          />
          <span>John</span>
          <button>logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
