import { useCallback, useState, useEffect } from "react";
import { client } from "./client";

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

    console.log("preise", preise);

    return (
        <div className="prices">
            <div>
                <h1>Damen:</h1>
                <ul className="damen-preise">
                    {preise &&
                        Object.entries(preise.damen).map(
                            ([keyName, value], index) => {
                                console.log(preise);
                                return (
                                    <>
                                        {typeof value === "string" ? (
                                            <li key={index}>
                                                <p>{keyName}:</p>
                                                <p>{value}</p>
                                            </li>
                                        ) : (
                                            <li key={index}>
                                                <p>{keyName}:</p>
                                                <ul>
                                                    {Object.entries(
                                                        keyName
                                                    ).map(
                                                        ([
                                                            keyName1,
                                                            value1,
                                                        ]) => {
                                                            <li>Test</li>;
                                                        }
                                                    )}
                                                </ul>
                                            </li>
                                        )}
                                    </>
                                );
                            }
                        )}
                </ul>
            </div>
            <div>
                <div>
                    <h1>Herren:</h1>
                </div>
                <div>
                    <h1>Kinder:</h1>
                </div>
            </div>
            <div>
                <div>
                    <h1>Sonstiges:</h1>
                    <button>Jetzt Termin vereinbaren</button>
                </div>
            </div>
        </div>
    );
}
