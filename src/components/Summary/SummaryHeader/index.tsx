import { ReactNode } from "react";
import { Header } from "./styles";

export function SummaryHeader({children}: {children: ReactNode}) {
    return (
        <Header>{children}</Header>
    )
}