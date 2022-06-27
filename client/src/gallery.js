import { useCallback, useState, useEffect } from "react";
import { client } from "./client";
import Navbar from "./navbar";

export default function Gallery() {
    const [images, setImages] = useState();

    useEffect(() => {
        getImages();
    }, [getImages]);

    const cleanUpData = useCallback((rawData) => {
        const cleanHero = rawData.map((image) => {
            const { sys, fields } = image;
            const { id } = sys;
            const imgUrl = fields.file.url;
            const cleanObj = { id, imgUrl };
            return cleanObj;
        });
        console.log(cleanHero);
        setImages(cleanHero);
    }, []);

    const getImages = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: "galerie",
            });
            const responseData = response.items[0].fields.imagesGallery;
            console.log(responseData);
            if (responseData) {
                cleanUpData(responseData);
            } else {
                setImages({});
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <>
            <Navbar />
            <div className="galery-page">
                {images &&
                    images.map((image) => {
                        return (
                            <div className="image-gallery" key={image.id}>
                                <img src={image.imgUrl}></img>
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
