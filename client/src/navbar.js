import Logo from "./logo";
import { Link } from "react-router-dom";

export default function Navbar({ scroll }) {
    return (
        <header>
            <div>
                <Logo />
            </div>
            <nav>
                <h3 onClick={scroll}>über Hisham</h3>
                <h3 onClick={scroll}>Service</h3>
                <h3 onClick={scroll}>Kontakt</h3>
                <h3 onClick={scroll} className="gallery-link">
                    Galerie
                </h3>
                <a
                    className="nav-anchor"
                    href="https://instagram.com/hisham.berlin2022?igshid=YmMyMTA2M2Y="
                >
                    <img
                        className="nav-img"
                        src="https://i.ibb.co/QJmgx3b/instagram-1.png"
                    ></img>
                </a>
                <Link to="/termin">
                    <button>Termin vereinbaren</button>
                </Link>
            </nav>
        </header>
    );
}
