import styled from "styled-components";

export const CellStyle = styled.button`
     background-color: ${(props) => props.theme.colors.secondary};
     color: ${(props) => props.theme.colors.primary};
     font-size: 3rem;
     border-color: none;
     border-radius:10px;
     width: 10rem;
     height: 10rem;
     box-shadow: 5px 10px ${(props) => props.theme.colors.blue};
     cursor: pointer;
     padding: 1.3rem;
     

     &:hover::before {
        content: '${(props) => (props.hoverTurn === 'X' ? 'X' : props.hoverTurn === 'O' ? 'O' : '')}';
        opacity: 0.5;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        fill: ${(props) => props.theme.colors.primary};
    }
    .Xicon {
        fill: ${(props) => props.theme.colors.primary};
    }

    .Oicon {
        fill: ${(props) => props.theme.colors.primary};
    }
`;
   