import styled from "styled-components";

export const Card = styled.div`
    margin: 12px;
    border-radius: 10px;
    background-color: #374e83;
    max-width: max-content;
    padding: 13px 19px;

    h1 {
        width: 296px;
        color: #fff;
        font-family: "RobotoSlab";
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 0px;
    }
    ul {
        display: flex;
        li {
            color: rgb(204, 204, 204);
            list-style-type: disc;
            margin: 4px 16px;
            font-size: 1rem;
            text-transform: lowercase;
            letter-spacing: 0.9px;
            font-family: "Raleway";
        }
    }
`;
