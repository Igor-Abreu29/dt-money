import { UseSummary } from "../../../hooks/useSummary"
import { SummaryContainer } from "./styles"
import { ReactNode } from "react"

export function SummaryRoot({children}: {children: ReactNode}) {
    return (
        <SummaryContainer>
            {children}
        </SummaryContainer>
    )
}