import { createContext } from 'react';
import useSound from '../hooks/useSound'; // Correct import

export const SfxContext = createContext({});

export function SfxContextProvider({ children }) {
    const options = {
        volume: 0.05,
        timeout: 200
    };

    const hoverPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
    const clickPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/click.wav";
    const winnerPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/winner.wav";
    const completedPath = "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/completed.wav";
    
    const hoverSfx = useSound(hoverPath, options);
    const clickSfx = useSound(clickPath, options);
    const winnerSfx = useSound(winnerPath, {...options, timeout: 500});
    const completedSfx = useSound(completedPath, {...options, timeout: 2500});

    return (
        <SfxContext.Provider value={{ hoverSfx, clickSfx, winnerSfx, completedSfx }}>
            {children}
        </SfxContext.Provider>
    );
}