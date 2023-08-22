import { ElementType } from "react"

interface SummaryIconProps {
    icon: ElementType
    color: string
}

export function SummaryIcon({icon:Icon, color}: SummaryIconProps) {
    return (
        <Icon size={32} color={color} />
    )
}