import styled from "styled-components";

export const PlayerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 6rem;

    ${(props) => props.theme.media.mobile} {
    flex-direction: row;
    margin: 4rem;
    }
    `
