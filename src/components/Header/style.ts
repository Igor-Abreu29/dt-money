import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;

`

export const HeaderContent = styled.div`
    max-width: 1120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 1.5rem;
`

export const ButtonTransactions = styled.button`
    padding: 0.8rem 2rem;
    border: 0;
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme["green-700"]};
        transition: background-color 0.3s;
    }
`