import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from "../../../contexts/TransactionsContext";

const FilterFormSchema = z.object({
    query: z.string()
})

type FilterFormInputs = z.infer<typeof FilterFormSchema>

export function SearchForm() {
    const fetchTransactions  = useContextSelector(TransactionsContext, (context) => {
        return context.fetchTransactions
    })

    const { 
        register, 
        handleSubmit,
        formState: {isSubmitting}
    } = useForm<FilterFormInputs>({
        resolver: zodResolver(FilterFormSchema)
    })

    async function handleFilterTransactions(data: FilterFormInputs) {
        await fetchTransactions(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleFilterTransactions)}>
            <input 
            type="text" 
            placeholder="Busque por transações"
            {...register('query')}
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Procurar
            </button>
        </SearchFormContainer>
    )
}