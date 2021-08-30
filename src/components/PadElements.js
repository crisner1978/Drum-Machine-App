import styled from "styled-components";

export const ButtonWrapper = styled.div`
    color: #fff;
    background-color: blue;
    width: 80px;
    height: 80px;
    border: solid 3px black;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 5px;
    border-radius: 10px;
    transition: ease-in 0.2s all;

    &:hover {
        transition: ease-in-out 0.3s all;
        transform: scale(1.05);

    &:active {
        transition: ease-in 0.2s all;
        transform: scale(0.95);
    }

;

    }
    

`