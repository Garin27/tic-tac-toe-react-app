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
`