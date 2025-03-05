import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
