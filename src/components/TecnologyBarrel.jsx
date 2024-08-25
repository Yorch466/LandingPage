import ios from "../assets/svg/ios.svg";
import android from "../assets/svg/android.svg";
import angular from "../assets/svg/angular.svg";
import flutter from "../assets/svg/flutter.svg";
import net from "../assets/svg/NET.svg";
import php from "../assets/svg/php.svg";
import python from "../assets/svg/python.svg";
import react from "../assets/svg/react.svg";
import { useState } from "react";
import {TecnologyCard} from "./cards/TecnologyCard"
import "./styles/barrel styles/TecnologyBarrel.css"

export const TecnologyBarrel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const tecData = [
        { image: ios, tecnology: "iOS" },
        { image: android, tecnology: "Android" },
        { image: angular, tecnology: "Angular" },
        { image: react, tecnology: "React" },
        { image: flutter, tecnology: "Flutter" },
        { image: php, tecnology: "PHP" },
        { image: python, tecnology: "Python" },
        { image: net, tecnology: ".NET" },
    ];

    const next = () => {
        if (currentIndex < tecData.length - itemsPerPage) {
            setCurrentIndex(currentIndex + itemsPerPage);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - itemsPerPage);
        }
    };

    return (
        <div className="carousel-container">
            <button onClick={prev} className="carousel-btn prev">
                {"<"}
            </button>
            <div className="tecs">
                {tecData
                    .slice(currentIndex, currentIndex + itemsPerPage)
                    .map((tec, index) => (
                        <TecnologyCard
                            key={index}
                            image={tec.image}
                            tecnology={tec.tecnology}
                        />
                    ))
                }
            </div>
            <button onClick={next} className="carousel-btn next">
                {">"}
            </button>
        </div>
    )
}