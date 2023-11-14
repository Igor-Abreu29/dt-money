import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateTransactionInput } from "../@types/transactions";
import { api } from "../libs/axios";

const createTransaction = async ({category, description, price, type}: CreateTransactionInput) => {
    return await api.post('/transactions', {
        category,
        description,
        price,
        type
    })
}

export function useCreateTransaction() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: createTransaction,
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['transactions']
            })
        }
    })

    return mutate
}