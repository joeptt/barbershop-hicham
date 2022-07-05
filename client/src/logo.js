import { useState, useEffect, useCallback } from "react";
import { client } from "./client";

export default function Logo() {
    const [logo, setLogo] = useState([]);

    const cleanUpData = useCallback((rawData) => {
        const cleanLogo = rawData.map((item) => {
            const { sys, fields } = item;
            const { id } = sys;
            const imgUrl = fields.logoImage.fields.file.url;
            const cleanObj = { id, imgUrl };
            console.log("clean", cleanObj);
            return cleanObj;
        });
        setLogo(cleanLogo);
    }, []);

    const getLogo = useCallback(async () => {
        try {
            const response = await client.getEntries({ content_type: "logo" });
            console.log("response", response);
            const responseData = response.items;
            console.log("responseData", responseData);
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
        <div className="logo">
            {logo &&
                logo.map((item) => {
                    return <img key={item.id} src={item.imgUrl}></img>;
                })}
        </div>
    );
}
