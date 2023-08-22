import styled, { css } from "styled-components";

interface SummaryCardProps {
    variant?: 'green'
}

export const Card = styled.div<SummaryCardProps>`
    background: ${props => props.theme["gray-600"]};
    border-radius: 8px;
    padding: 2rem;

    header {
        
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variant === 'green' && css`
        background: ${props.theme["green-700"]};
    `}
`