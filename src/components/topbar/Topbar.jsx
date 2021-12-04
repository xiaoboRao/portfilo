
import { Person, Mail } from "@material-ui/icons";
import "./topbar.scss";

export default function Topbar({menuOpen,setMenuOpen}) {
  
  return (
    <div className={"topbar " + (menuOpen ? "active" : "")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Bob
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>18174081813</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>731653765@qq.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburg" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
