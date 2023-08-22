interface SummaryTitleProps {
    text: string
}

export function SummaryTitle({text}: SummaryTitleProps) {
    return (
        <h1>{text}</h1>
    )
}