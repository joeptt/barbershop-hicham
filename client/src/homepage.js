import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    FadeOut,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    StickyOut,
    Zoom,
    ZoomIn,
    ZoomOut,
} from "react-scroll-motion";
import Navbar from "./navbar";
import About from "./about";
import HeroImage from "./heroImage";
import PortraitFoto from "./portraitFoto";
import Preise from "./preise";

const zoomAndFade = batch(Zoom(2.5, 1), Fade());
const slideInFade = batch(Move(1000, 0, -1000, 0));

export default function Homepage() {
    return (
        <>
            <ScrollContainer>
                <div className="page-1-scrollpage">
                    <ScrollPage page={0}>
                        <Navbar />
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
                <div className="page-2-scrollpage">
                    <ScrollPage page={1}>
                        <div className="page-2">
                            <div className="about-page2">
                                <Animator animation={ZoomIn(0.7, 1)}>
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
                <ScrollPage page={3}>
                    <div className="page-4">
                        <Preise />
                    </div>
                </ScrollPage>
                <ScrollPage page={4}>
                    <div className="page-5">
                        <p>TEST TEST TEST TEST TEST</p>
                    </div>
                </ScrollPage>
            </ScrollContainer>
        </>
    );
}
