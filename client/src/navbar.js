import { useState, useEffect, useCallback } from "react";
import { client } from "./client";
import { Link } from "react-router-dom";

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
        setLogo(cleanLogo);
    }, []);

    const getLogo = useCallback(async () => {
        try {
            const response = await client.getEntries({ content_type: "logo" });
            const responseData = response.items;
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
