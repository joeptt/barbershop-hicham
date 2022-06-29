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
                <h3 onClick={scroll}>Location</h3>
                <h3 onClick={scroll} className="gallery-link">
                    Galerie
                </h3>
                <Link to="/termin">
                    <button>Termin vereinbaren</button>
                </Link>
            </nav>
        </header>
    );
}
