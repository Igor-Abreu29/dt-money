import styled from "styled-components";

export const TransactionsContainer = styled.main`
    max-width: 1120px;
    width: 100%;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1rem;
    
    td {
        padding: 1.25rem 2rem;
        background: ${props => props.theme["gray-700"]};

        &:first-child {
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
        }

        &:last-child {
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
        }

        button {
            background-color: ${props => props.theme["red-700"]};
            color: ${props => props.theme["gray-100"]};
            
            border: 0;
            padding: 0.5rem 1.25rem;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
                background-color: ${props => props.theme["red-500"]};
                color: ${props => props.theme["gray-300"]};
                transition: all 0.2s;
            }
        }
    }
`

interface HighLightProps {
    variant: 'income' | 'outcome'
}

export const HighLight = styled.span<HighLightProps>`
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
`