import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./homepage";
import WrongPage from "./wrongPage";
import Termin from "./termin";
import Gallery from "./gallery";

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/termin">
                <Termin />
            </Route>
            <Route exact path="/galerie">
                <Gallery />
            </Route>
            <Route exact path="*">
                <WrongPage />
            </Route>
        </BrowserRouter>
    );
}
