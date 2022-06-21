import { useCallback, useState, useEffect } from "react";
import { client } from "./client";
import { Link } from "react-router-dom";

export default function Preise() {
    const [preise, setPreise] = useState();

    useEffect(() => {
        getPrices();
    }, [getPrices]);

    const getPrices = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: "preise",
            });
            const responseData = response.items[0].fields.prices;
            if (responseData) {
                setPreise(responseData);
            } else {
                setPreise({});
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    const mappingHairLength = (obj) => {
        return (
            <ul className="hairlength-lists">
                {Object.entries(obj).map(([keyName, value], index) => {
                    return (
                        <li key={index}>
                            {keyName}: {value}
                        </li>
                    );
                })}
            </ul>
        );
    };

    const mappingObjects = (obj) => {
        return Object.entries(obj).map(([keyName, value], index) => {
            return (
                <div key={index}>
                    <p>{keyName}: </p>
                    <p>{value}</p>
                </div>
            );
        });
    };

    return (
        <div>
            {preise && (
                <div className="prices">
                    <div className="preise preise-columns">
                        <h1>Damen:</h1>
                        <div>
                            <p>Schneiden: </p>
                            <p>{preise.damen.Schneiden}</p>
                        </div>
                        <div>
                            <p>Waschen + Schneiden: </p>
                            <p>{preise.damen.WaschenPlusSchneiden}</p>
                        </div>
                        <div>
                            <p>Waschen + Stylen: </p>
                            {mappingHairLength(preise.damen.WaschenPlusStylen)}
                        </div>
                        <div>
                            <p>Waschen + Schneiden + Stylen: </p>
                            {mappingHairLength(
                                preise.damen.WaschenPlusSchneidenPlusStylen
                            )}
                        </div>
                        <p>
                            <strong>Farbe:</strong>
                        </p>
                        <div>
                            <p>Ansatz: </p>
                            <p>{preise.damen.Farbe.Ansatz}</p>
                        </div>
                        <div>
                            <p>Komplett: </p>
                            {mappingHairLength(preise.damen.Farbe.Komplett)}
                        </div>
                        <div>
                            <p>Ombré: </p>
                            <p>{preise.damen.Farbe.Ombre}</p>
                        </div>
                        <div>
                            <p>Intensivtönung: </p>
                            <p>{preise.damen.Farbe.Intensivtoenung}</p>
                        </div>
                        <div>
                            <p>Strähnen Oberkopf: </p>
                            <p>{preise.damen.Farbe.StraehnenOberkopf}</p>
                        </div>
                        <div>
                            <p>Strähnen Komplett: </p>
                            <p>{preise.damen.Farbe.StraehnenKomplett}</p>
                        </div>
                        <br></br>
                        <div>
                            <p>Haarverlängerung: </p>
                            <p>{preise.damen.Haarverlaengerung}</p>
                        </div>
                        <div>
                            <p>Hochsteckfrisur: </p>
                            <p>{preise.damen.Hochsteckfrisur}</p>
                        </div>
                    </div>
                    <div className="preise-columns">
                        <div className="preise">
                            <h1>Herren:</h1>
                            {mappingObjects(preise.herren)}
                        </div>
                        <div className="preise">
                            <h1>Kinder:</h1>
                            {mappingObjects(preise.kids)}
                        </div>
                    </div>
                    <div className="preise-columns">
                        <div className="preise">
                            <h1>Sonstige Leistungen:</h1>
                            {mappingObjects(preise.sonstigeLeistungen)}
                            <Link to="/termin">
                                <button id="termin-button">
                                    Jetzt Termin vereinbaren
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
