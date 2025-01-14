import styled from "styled-components";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { MdSkipNext } from "react-icons/md";

export const MusicPlayerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    margin-bottom: 2rem;
    position: fixed;
    bottom: 0;
    width: 100vw;
    `

export const PlayIcon = styled(IoMdPlay)`
     color: ${(props) => props.theme.colors.secondary};
     font-size: 2rem;
     cursor: pointer;

`
export const PauseIcon = styled(IoMdPause)`
        color: ${(props) => props.theme.colors.secondary};
        font-size: 2rem;
        cursor: pointer;

`

export const NextIcon = styled(MdSkipNext)`
    color: ${(props) => props.theme.colors.secondary};
    font-size: 3rem;
    cursor: pointer;
    margin-left: 1rem;
`