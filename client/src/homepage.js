import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    Move,
    Zoom,
    ZoomIn,
} from "react-scroll-motion";
import { useRef } from "react";
import Navbar from "./navbar";
import About from "./about";
import HeroImage from "./heroImage";
import PortraitFoto from "./portraitFoto";
import Preise from "./preise";
import Gallery from "./gallery";
import Adress from "./adress";

const zoomAndFade = batch(Zoom(2.5, 1), Fade());
const slideInFade = batch(Move(1000, 0, -1000, 0));

export default function Homepage() {
    const myRefAbout = useRef(null);
    const myRefServices = useRef(null);
    const myRefLocation = useRef(null);
    const myRefGalery = useRef();

    const scroll = (e) => {
        const text = e.target.innerText;
        if (text === "über Hisham") {
            myRefAbout.current.scrollIntoView();
        } else if (text === "Service") {
            myRefServices.current.scrollIntoView();
        } else if (text === "Kontakt") {
            myRefLocation.current.scrollIntoView();
        } else if (text === "Galerie") {
            myRefGalery.current.scrollIntoView();
        }
    };

    return (
        <>
            <ScrollContainer>
                <div className="page-1-scrollpage">
                    <ScrollPage page={0}>
                        <Navbar scroll={scroll} />
                        <div className="page-1">
                            <div className="hero">
                                <HeroImage />
                                <div className="hero-text">
                                    <Animator animation={zoomAndFade}>
                                        <h1>HISHAM</h1>
                                    </Animator>
                                </div>
                            </div>
                        </div>
                    </ScrollPage>
                </div>
                <div ref={myRefAbout} className="page-2-scrollpage">
                    <ScrollPage page={1}>
                        <div className="page-2">
                            <div className="about-page2">
                                <Animator
                                    animation={batch(ZoomIn(0.7, 1), Fade())}
                                >
                                    <h1>Über Hisham</h1>
                                </Animator>
                                <Animator animation={slideInFade}>
                                    <About />
                                </Animator>
                            </div>
                        </div>
                    </ScrollPage>
                </div>
                <div className="page-3-scrollpage">
                    <ScrollPage page={2}>
                        <div className="page-3">
                            <div className="image-page2">
                                <PortraitFoto />
                            </div>
                        </div>
                    </ScrollPage>
                </div>
                <div ref={myRefServices} className="page-4-scrollpage">
                    <ScrollPage page={3}>
                        <div className="page-4">
                            <Preise />
                        </div>
                    </ScrollPage>
                </div>
                <div ref={myRefLocation} className="page-5-scrollpage">
                    <ScrollPage page={4}>
                        <div className="page-5">
                            <Adress />
                        </div>
                    </ScrollPage>
                </div>
                <div ref={myRefGalery} className="page-6-scrollpage">
                    <Gallery />
                </div>
            </ScrollContainer>
        </>
    );
}
