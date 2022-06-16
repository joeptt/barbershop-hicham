import { useState, useEffect, useCallback } from "react";
import { client } from "./client";

export default function Navbar() {
    const [logo, setLogo] = useState([]);

    const cleanUpData = useCallback((rawData) => {
        const cleanLogo = rawData.map((item) => {
            const { sys, fields } = item;
            const { id } = sys;
            const imgUrl = fields.logoImage.fields.file.url;
            const cleanObj = { id, imgUrl };
            return cleanObj;
        });
        console.log("cleaned ->", cleanLogo);
        setLogo(cleanLogo);
        console.log(logo);
    }, []);

    const getLogo = useCallback(async () => {
        try {
            const response = await client.getEntries({ content_type: "logo" });
            const responseData = response.items;
            console.log(responseData);
            if (responseData) {
                cleanUpData(responseData);
            } else {
                setLogo([]);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getLogo();
    }, [getLogo]);

    return (
        <header>
            {logo &&
                logo.map((item) => {
                    return <img key={item.id} src={item.imgUrl}></img>;
                })}
            <nav>
                <p>über Hisham</p>
                <p>Service</p>
                <p>Location</p>
                <p>Reservation</p>
            </nav>
        </header>
    );
}
