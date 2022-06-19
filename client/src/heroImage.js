import { useCallback, useState, useEffect } from "react";
import { client } from "./client";

export default function HeroImage() {
    const [heroImages, setHeroImages] = useState([]);
    let [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (heroImages.length > 0) {
            setInterval(switchImage, 5000);
        }
    }, [heroImages]);

    useEffect(() => {
        getHeroImages();
    }, [getHeroImages]);

    let counter = 0;
    const switchImage = () => {
        counter++;
        console.log(counter);

        if (currentImage < heroImages.length) {
            setCurrentImage(currentImage++);
        } else {
            setCurrentImage((currentImage = 0));
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

    return (
        <>
            <div>
                {heroImages.length > 0 && (
                    <img
                        style={{
                            animationName: "image-appear",
                            animationDuration: "2s",
                        }}
                        className="current-hero"
                        src={heroImages[currentImage].imgUrl}
                    />
                )}
            </div>
        </>
    );
}
