import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        border: 0;
        border-radius: 8px;
        padding: 1rem;
        background: ${props => props.theme["gray-900"]};
        color: ${props => props.theme["gray-300"]};

        &::placeholder {
            ${props => props.theme["gray-500"]};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border: 1px solid ${props => props.theme["green-300"]};
        background: transparent;
        color: ${props => props.theme["green-300"]};
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            border-color: ${props => props.theme["green-500"]};
            background: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }
    }
`