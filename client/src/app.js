import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./homepage";
import WrongPage from "./wrongPage";

export default function App() {
    return (
        <BrowserRouter>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="*">
                <WrongPage />
            </Route>
        </BrowserRouter>
    );
}
