import Logo from "./logo";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Navbar() {
    const history = useHistory();

    const sendToGallery = () => {
        history.push("/galerie");
    };

    return (
        <header>
            <div>
                <Logo />
            </div>
            <nav>
                <h3>über Hisham</h3>
                <h3 className="gallery-link" onClick={sendToGallery}>
                    Galerie
                </h3>
                <h3>Service</h3>
                <h3>Location</h3>
                <Link to="/termin">
                    <button>Termin vereinbaren</button>
                </Link>
            </nav>
        </header>
    );
}
