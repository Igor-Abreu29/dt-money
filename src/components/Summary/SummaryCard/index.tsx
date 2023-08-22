import { ReactNode } from "react";
import { Card } from "./styles";

interface SummaryCardProps {
    variant?: 'green'
    children: ReactNode
}

export function SummaryCard({variant, children}: SummaryCardProps) {
    return (
        <Card variant={variant}>
            {children}
        </Card> 
    )
}