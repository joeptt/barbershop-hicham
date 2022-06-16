import { useCallback, useState, useEffect } from "react";
import { client } from "./client";

export default function HeroImage() {
    const [heroImages, setHeroImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        console.log(heroImages);
        if (heroImages.length > 0) {
            setInterval(switchImage, 2000);
        }
    }, []);

    useEffect(() => {
        getHeroImages();
    }, [getHeroImages]);

    const switchImage = () => {
        if (currentImage <= heroImages.length - 1) {
            console.log("currentImgTRUE", currentImage);
            setCurrentImage(currentImage + 1);
        } else {
            console.log("currentImgFALSE", currentImage, heroImages.length);

            setCurrentImage(0);
        }
        return currentImage;
    };

    const cleanUpData = useCallback((rawData) => {
        const cleanHero = rawData.map((image) => {
            const { sys, fields } = image;
            const { id } = sys;
            const imgUrl = fields.file.url;
            const cleanObj = { id, imgUrl };
            return cleanObj;
        });
        setHeroImages(cleanHero);
    }, []);

    const getHeroImages = useCallback(async () => {
        try {
            const response = await client.getEntries({
                content_type: "heroImages",
            });
            const responseData = response.items[0].fields.heroImages;
            console.log(responseData);
            if (responseData) {
                cleanUpData(responseData);
            } else {
                setHeroImages([]);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    console.log("hero images -> ", heroImages);

    return (
        <>
            <div>
                {heroImages.length > 0 && (
                    <img src={heroImages[currentImage].imgUrl} />
                )}
            </div>
        </>
    );
}
