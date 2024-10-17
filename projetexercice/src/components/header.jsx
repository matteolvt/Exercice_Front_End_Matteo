import "./css/header.css";

const Header = ({ onCartToggle }) => {
  return (
    <section className="navbar">
      <div className="navbar-center">
        <h1>Product Gallery</h1>
      </div>
      <div className="navbar-right">
        <div className="icons" onClick={onCartToggle}> 
          <span className="material-icons-outlined">shopping_bag</span>
        </div>
      </div>
    </section>
  );
};

export default Header;
