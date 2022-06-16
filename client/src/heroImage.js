import { useCallback, useState, useEffect } from "react";
import { client } from "./client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroImage() {
    const [heroImages, setHeroImages] = useState([]);

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

    useEffect(() => {
        getHeroImages();
    }, [getHeroImages]);

    console.log("hero images -> ", heroImages);

    return <div>Test</div>;
}
