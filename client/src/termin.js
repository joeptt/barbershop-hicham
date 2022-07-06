import { useState, useEffect, useCallback } from "react";
import { client } from "./client";
import { useHistory } from "react-router";

export default function Termin() {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [link, setLink] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const history = useHistory();

    useEffect(() => {
        getWhatsapp();
    }, [getWhatsapp]);

    const getWhatsapp = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: "whatsappNumber",
            });
            const responseData = response.items[0].fields.whtasappNumber;
            if (responseData) {
                setWhatsapp(responseData);
            } else {
                setWhatsapp({});
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    const onChangeDate = (event) => {
        setDate(event.target.value);
    };
    const onChangeTime = (event) => {
        setTime(event.target.value);
    };

    const onClick = () => {
        const url = `https://wa.me/${whatsapp}?text=Hallo%20Hisham!%20Hast%20du%20am%20${date}%20um%20${time}%20Uhr%20Zeit?
`;
        setLink(url);
    };

    const sendHome = () => {
        history.push("/");
    };

    return (
        <>
            <div className="home-button" onClick={sendHome}>
                ←
            </div>
            <div className="termin-page">
                <div className="termin-text">
                    <div>
                        <h3>
                            Fülle ganz einfach das Formular aus und klicke dann
                            den grünen Button
                        </h3>
                        <h1>Vereinbare jetzt deinen Termin über WhatsApp!</h1>
                        <br></br>
                        <h3>
                            Anschließend wird sich WhatsApp, mit einer
                            vorgefertigten Nachricht, auf deinem Gerät öffnen.
                            Dort musst du nur noch absenden klicken!
                        </h3>
                        <h3>
                            Nun wird Hisham deine Nachricht bekommen und sich
                            schnellstmöglich bei dir zurück melden!
                        </h3>
                    </div>
                </div>
                <div className="termin-tool">
                    <h3>Wähle ein Datum für deine Terminanfrage!</h3>
                    <input onChange={onChangeDate} type="date" />
                    <input onChange={onChangeTime} type="time" />
                    {date != undefined && time != undefined ? (
                        <a href={link} onClick={onClick}>
                            <button>
                                Jetzt Terminanfrage auf WhatsApp schicken
                            </button>
                        </a>
                    ) : (
                        <a
                            href="https://wa.me/4917665844344?text=Hallo%20Hisham!%20Ich%20würde%20gerne%20einen%20Termin%20machen!%20Wann%20hast%20du%20Zeit?"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button>
                                Jetzt Terminanfrage auf WhatsApp schicken
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}
