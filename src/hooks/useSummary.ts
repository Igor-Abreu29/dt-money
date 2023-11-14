import { useMemo } from "react"
import { useFetchTransactions } from "./useFetchTransactions"

export function UseSummary() {
    const { data } = useFetchTransactions()
    
    const summary = useMemo(() => {
        return data?.reduce((acc, transaction) => {
            if (transaction.type === 'income') {
                acc.income += transaction.price
                acc.total += transaction.price
            } else {
                acc.outcome += transaction.price
                acc.total -= transaction.price
            }
            return acc
        }, 
        {
            income: 0,
            outcome: 0,
            total: 0
        })
        
    }, [data])
    
    return summary
}