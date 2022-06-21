import Logo from "./logo";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header>
            <div>
                <Logo />
            </div>
            <nav>
                <h3>über Hisham</h3>
                <h3>Service</h3>
                <h3>Location</h3>
                <Link to="/termin">
                    <button>Termin vereinbaren</button>
                </Link>
            </nav>
        </header>
    );
}
