import { ReactNode, useState } from "react";
import { createContext } from "use-context-selector";

interface TransactionContextProps {
    updateSearch: (text: string) => void
    search: string
}

interface TransactionProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextProps)

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [search, setSearch] = useState<string>('')

    const updateSearch = (text: string) => {
        setSearch(text)
    }

    return (
        <TransactionsContext.Provider value=
            {
                {
                    search,
                    updateSearch
                }
            }
        >
            {children}
        </TransactionsContext.Provider>
    )
}