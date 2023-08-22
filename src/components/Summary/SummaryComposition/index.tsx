import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react"

import { Summary } from "..";
import { UseSummary } from "../../../hooks/useSummary";

export function SummaryComposition() {
    const summary = UseSummary()

    return (
        <Summary.Root>
            <Summary.Card>
                <Summary.Header>
                    <Summary.Title text="Entrada" />
                    <Summary.Icon icon={ArrowCircleUp} color="#00b373" />
                </Summary.Header>
                <Summary.VariantType variantType={summary.income} />
            </Summary.Card>
        
            <Summary.Card>
                <Summary.Header>
                    <Summary.Title text="Saída" />
                    <Summary.Icon icon={ArrowCircleDown} color="#f75a68" />
                </Summary.Header>
                <Summary.VariantType variantType={summary.outcome} />
            </Summary.Card>

            <Summary.Card variant="green">
                <Summary.Header>
                    <Summary.Title text="Total" />
                    <Summary.Icon icon={CurrencyDollar} color="#fff" />
                </Summary.Header>
                <Summary.VariantType variantType={summary.income} />
            </Summary.Card>
        </Summary.Root>
    )
}