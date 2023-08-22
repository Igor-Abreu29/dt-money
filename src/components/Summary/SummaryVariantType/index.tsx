import { NumberFormater } from "../../../utils/formater"

interface SummaryVariant {
    variantType: number
}

export function SummaryVariantType({variantType}: SummaryVariant) {
    return <strong>{NumberFormater.format(variantType)}</strong>
}