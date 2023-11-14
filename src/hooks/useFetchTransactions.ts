import { useQuery } from '@tanstack/react-query'
import { api } from '../libs/axios'
import { TransactionResponse } from '../@types/transactions'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

const fetchTransactions = async (search?: string): Promise<TransactionResponse> => {
    if (search) {
        const response = await api.get<TransactionResponse>('/transactions/search', {
            params: {
                _sort: 'startDate',
                _order: 'desc',
                q: search
            }
        })
        
        return response.data
    }

    const response = await api.get<TransactionResponse>('/transactions', {
        params: {
            _sort: 'startDate',
            _order: 'desc',
        }
    }) 

    return response.data
}

export function useFetchTransactions() {
    const { search } = useContextSelector(TransactionsContext, context => {
        return context
    })

    const query = useQuery({
        queryFn: () => fetchTransactions(search),
        queryKey: ['transactions', search],
    })

    return {
        ...query,
        data: query.data?.transactions
    }
}