import { useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const generateStars = () =>{
        const numberofStars = Math.floor(window.innerWidth * window.innerHeight / 10000
        );
        const newStars = [];
        for (let i = 0; i < numberofStars; i++) {
            newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.5,
                animationDelay: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);     
    }
    return (
        <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0">
                <div className="w-full h-full bg-gradient-to-b from-black to-transparent" />
                <div className="w-full h-full bg-[url('/stars.png')] bg-cover opacity-20" />
            </div>
        </div>
    );
};
