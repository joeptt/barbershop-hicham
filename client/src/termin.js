import { useState, useEffect, useCallback } from "react";
import { client } from "./client";
import Navbar from "./navbar";

export default function Termin() {
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [link, setLink] = useState();
    const [whatsapp, setWhatsapp] = useState();

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
        const url = `https://wa.me/4915175052891?text=Hallo%20Hisham!%20Hast%20du%20am%20${date}%20um%20${time}Uhr%20Zeit?%F0%9F%98%80
`;
        setLink(url);
    };

    return (
        <>
            <div className="termin-tool">
                <h3>Wähle ein Datum für deine Terminanfrage!</h3>
                <input onChange={onChangeDate} type="date" />
                <input onChange={onChangeTime} type="time" step="3000" />
                <a href={link} onClick={onClick}>
                    <button>Jetzt Terminanfrage auf WhatsApp schicken</button>
                </a>
            </div>
        </>
    );
}
