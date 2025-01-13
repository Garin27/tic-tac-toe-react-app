/*import { useEffect, useState } from "react";

const useSound = (url, options) => {
    const [sound, setSound] = useState(null);

    useEffect(() => {
        const audio = new Audio(url);
        audio.load();
        audio.volume = options.volume
        setSound(audio);

        return () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, [url]);

    const playSound = () => {
        if (sound) {
            sound.play();
        }
        setTimeout(() => {
            sound.pause();
            sound.currentTime = 0;
        }, options.timeout);
    };

    return playSound;
};

export default useSound;*/


import { useEffect, useState } from "react";

const useSound = (url, options) => {
    const [sound, setSound] = useState(null);

    useEffect(() => {
        const audio = new Audio(url);
        audio.load();
        audio.volume = options.volume;
        setSound(audio);

        return () => {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, [url, options.volume]);

    const playSound = () => {
        if (sound) {
            sound.play().catch(error => {
                console.error("Failed to play sound:", error);
            });

            if (options.timeout) {
                setTimeout(() => {
                    sound.pause();
                    sound.currentTime = 0;
                }, options.timeout);
            }
        }
    };

    return playSound;
};

export default useSound;