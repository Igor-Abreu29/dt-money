import { SummaryCard, SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { NumberFormater } from "../../utils/formater";
import { UseSummary } from "../../hooks/useSummary";

export function Summary() {
    const summary = UseSummary()

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b373" />
                </header>

                <strong>{NumberFormater.format(summary.income)}</strong>
            </SummaryCard> 

            <SummaryCard>

                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>

                <strong>{NumberFormater.format(summary.outcome)}</strong>
            </SummaryCard> 

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>

                <strong>{NumberFormater.format(summary.total)}</strong>
            </SummaryCard> 
        </SummaryContainer>
    )
}