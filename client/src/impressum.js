import { useHistory } from "react-router";

export default function Impressum() {
    const history = useHistory();

    const sendHome = () => {
        history.push("/");
    };
    return (
        <>
            <div className="home-button" onClick={sendHome}>
                ←
            </div>
            <div className="impressum">
                <h1>Impressum</h1>
                <div>
                    <p>
                        Travestraße 3 <br />
                        10247 Berlin
                    </p>
                    <br />
                    <h3>Vertreten durch:</h3>
                    <p>Hisham Alhomsi</p>
                    <br />
                    <h3>Kontakt:</h3>
                    <p>Telefon: 030-62963957</p>
                    <p>E-Mail: hisham.friseur@gmail.com</p>
                    <br />
                    <h3>Haftungsausschluss:</h3>
                    <br />
                    <h3>Haftung für Links</h3>
                    <p>
                        Unser Angebot enthält Links zu externen Webseiten
                        Dritter, auf deren Inhalte wir keinen Einfluss haben.
                        Deshalb können wir für diese fremden Inhalte auch keine
                        Gewähr übernehmen. Für die Inhalte der verlinkten Seiten
                        ist stets der jeweilige Anbieter oder Betreiber der
                        Seiten verantwortlich. Die verlinkten Seiten wurden zum
                        Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                        überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                        Verlinkung nicht erkennbar. Eine permanente inhaltliche
                        Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                        Bekanntwerden von Rechtsverletzungen werden wir
                        derartige Links umgehend entfernen.
                    </p>
                </div>
            </div>
        </>
    );
}
