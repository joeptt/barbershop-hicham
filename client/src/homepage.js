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

const zoomAndFade = batch(Zoom(2.5, 1), Fade());
const slideInFade = batch(MoveIn(1000, 0));

export default function Homepage() {
    return (
        <>
            <ScrollContainer>
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
                <ScrollPage page={1}>
                    <div className="page-2">
                        <div className="termin-page2">
                            JETZT TERMIN VEREINBAREN
                        </div>
                        <div className="about-page2">
                            <Animator animation={FadeIn()}>
                                <h1>Über Hisham</h1>
                            </Animator>
                            <Animator animation={slideInFade}>
                                <About />
                            </Animator>
                        </div>
                    </div>
                </ScrollPage>
                <ScrollPage page={2}>
                    <div className="page-3">
                        <Animator animation={Move()}>
                            <img src="https://geheimtippaugsburg.de/content/uploads/2020/10/classicbarber37.jpg"></img>
                        </Animator>
                    </div>
                </ScrollPage>
                <ScrollPage page={3}>
                    <div className="page-4">
                        <p>TEST TEST TEST TEST TEST</p>
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
