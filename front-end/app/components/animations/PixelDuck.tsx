import Lottie from "lottie-react";
import Animation from "@animations/PixelDuck.json";

export default function PixelDuck() {
    return (
        <div className="animation-container">
            <Lottie animationData={Animation}
             loop={true}
             autoplay
             style={{width:"60px", height:"60px"}} />
        </div>
    );
}