import { useCallback, useState, useEffect } from "react";
import { client } from "./client";

export default function HeroImage() {
    const [heroImages, setHeroImages] = useState([]);
    let [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        console.log("TEST");
        if (heroImages.length > 0) {
            setInterval(switchImage, 3000);
        }
    }, [heroImages]);

    useEffect(() => {
        getHeroImages();
    }, [getHeroImages]);

    const switchImage = () => {
        if (currentImage < heroImages.length) {
            console.log("currentImgTRUE", currentImage);
            setCurrentImage(currentImage++);
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
