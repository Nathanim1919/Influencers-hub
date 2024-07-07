import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import {HeaderContainer} from "../../assets/styledComponents/headerStyle";

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <Link to="/">
          <h1>Influencer<span>HUB</span></h1>
        </Link>
      </div>
      <div className="links">
        <Link to="home">HOME</Link>
        <Link to="about">ABOUT</Link>
        <Link to="services">SERVICES</Link>
        <Link to="contact">CONTACT</Link>
        <Link to="login">Get Started</Link>
      </div>
    </HeaderContainer>
  );
};
