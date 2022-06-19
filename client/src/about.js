import { useCallback, useState, useEffect } from "react";
import { client } from "./client";

export default function About() {
    const [aboutText, setAboutText] = useState();

    useEffect(() => {
        getAboutText();
    }, [getAboutText]);

    const cleanUpData = useCallback((rawData) => {
        const { sys, fields } = rawData;
        const { id } = sys;
        const { hishamAboutText } = fields;
        const cleanPortrait = { id, hishamAboutText };

        setAboutText(cleanPortrait);
    }, []);

    const getAboutText = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: "hishamAbout",
            });
            const responseData = response.items[0];
            if (responseData) {
                cleanUpData(responseData);
            } else {
                setAboutText([]);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    return <div>{aboutText && <p>{aboutText.hishamAboutText}</p>}</div>;
}
