import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../libs/axios";
import { DeleteTransactionInput } from "../@types/transactions";

const deleteTransaction = async ({ id }: DeleteTransactionInput) => {
    return await api.delete(`/transactions/${id}`)
}

export function useDeleteTransaction() {
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: deleteTransaction,
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['transactions']
            })
        }
    })

    return mutate
}