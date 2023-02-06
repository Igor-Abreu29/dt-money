import { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../libs/axios";

interface TransactionProps {
    id: number
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    startDate: string
}

interface createTransactionInput {
    description: string
    price: number
    category: string
    type: 'income' | 'outcome'
}

interface TransactionContextProps {
    transactions: TransactionProps[]
    fetchTransactions: (query?: string) => Promise<void>
    createTransactions: (data: createTransactionInput) => Promise<void>
}

interface TransactionProviderProps {
    children: ReactNode
}


export const TransactionsContext = createContext({} as TransactionContextProps)

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    const fetchTransactions = useCallback(
        async (query?: string) => {
            const response = await api.get('transactions', {
                params: {
                    _sort: 'startDate',
                    _order: 'desc',
                    q: query,
                }
            })
            setTransactions(response.data)
        }, []
    )

    const createTransactions = useCallback(
        async (data: createTransactionInput) => {

        const response = await api.post('transactions', {
           description: data.description,
           price: data.price,
           category: data.category,
           type: data.type,
           startDate: new Date(),
       })

       setTransactions(state => [ response.data, ...state])
   }, []
)
    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value=
            {
                {
                    transactions, 
                    fetchTransactions, 
                    createTransactions,
                }
            }
        >
            {children}
        </TransactionsContext.Provider>
    )
}