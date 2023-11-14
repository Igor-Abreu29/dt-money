export interface TransactionProps {
    id: string
    description: string
    type: 'income' | 'outcome'
    price: number
    category: string
    startDate: string
}

export interface TransactionResponse {
    transactions: TransactionProps[]
}

export interface CreateTransactionInput {
    description: string
    price: number
    category: string
    type: 'income' | 'outcome'
}

export interface DeleteTransactionInput {
    id: string
}