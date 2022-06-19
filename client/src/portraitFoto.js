import { useCallback, useState, useEffect } from "react";
import { client } from "./client";

export default function PortraitFoto() {
    const [portraitFoto, setPortraitFoto] = useState();

    useEffect(() => {
        getPortraitFoto();
    }, [getPortraitFoto]);

    const cleanUpData = useCallback((rawData) => {
        const { sys, fields } = rawData;
        const { id } = sys;
        const imgUrl = fields.file.url;
        const cleanPortrait = { id, imgUrl };

        setPortraitFoto(cleanPortrait);
    }, []);

    const getPortraitFoto = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: "hishamImage",
            });
            const responseData = response.items[0].fields.hishamFoto;

            if (responseData) {
                cleanUpData(responseData);
            } else {
                setPortraitFoto([]);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div>
            {portraitFoto && (
                <div
                    className="image-bg"
                    style={{ backgroundImage: `url(${portraitFoto.imgUrl})` }}
                ></div>
            )}
        </div>
    );
}
