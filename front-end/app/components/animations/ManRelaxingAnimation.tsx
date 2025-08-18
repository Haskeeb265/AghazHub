import Lottie from "lottie-react";
import Animation from "@animations/ManRelaxingAnimation.json";

export default function RelaxingAnimation() {
    return (
        <div className="animation-container md:w-[450px]">
            <Lottie animationData={Animation}
             loop={true}
             autoplay
             style={{width:"100%", height:"100%"}} />
        </div>
    );
}