import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { CloseModal, ContentModal, Overlay, TransactionsTypes, TransactionsTypesButton } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller } from 'react-hook-form'
import { useCreateTransaction } from '../../hooks/useCreateTransaction'

const NewTransactionFormModalSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionsFormInput = z.infer<typeof NewTransactionFormModalSchema>

export function NewTransactionModal() {
    const { mutate } = useCreateTransaction()

    const { 
        control,
        register, 
        handleSubmit, 
        formState: {isSubmitting},
        reset
    } = useForm<NewTransactionsFormInput>({
        resolver: zodResolver(NewTransactionFormModalSchema), 
        defaultValues: {
            description: '',
            price: 0,
            category: '',
            type: 'income'
        }
    })

    async function handleCreateNewTransactions(data: NewTransactionsFormInput) {
        const { category, description, price, type } = data

        mutate({
            category,
            description,
            price,
            type
        })
        reset()
    }

    return (
    <Dialog.Portal>
            <Overlay />
            
            <ContentModal>
                <CloseModal>
                    <X />
                </CloseModal>

                <Dialog.Title>Nova Transação</Dialog.Title>

                <form onSubmit={handleSubmit(handleCreateNewTransactions)}>
                    <input 
                        type="text" 
                        placeholder='Descrição' 
                        required 
                        {...register('description')}
                        autoComplete='off'
                    />

                    <input 
                    type="number" 
                    placeholder='Preço' 
                    required 
                    {...register('price', {valueAsNumber: true})}
                    autoComplete='off'
                    />

                    <input 
                    type="text" 
                    placeholder='Categoria' 
                    required 
                    {...register('category')}
                    autoComplete='off'
                    />

                    <Controller 
                        control={control}
                        name="type"
                        render={({field}) => {
                            return (
                                <TransactionsTypes onValueChange={field.onChange} value={field.value}>
                                    <TransactionsTypesButton variant="income" value='income'>
                                        <ArrowCircleUp size={24}/>
                                        Entrada
                                    </TransactionsTypesButton>
            
                                    <TransactionsTypesButton variant="outcome" value='outcome'>
                                        <ArrowCircleDown size={24}/>
                                        Saída
                                    </TransactionsTypesButton>
                                </TransactionsTypes>
                            )
                        }}
                    />

                    <button disabled={isSubmitting} type='submit'>Cadastrar</button>
                </form> 
            </ContentModal>
    </Dialog.Portal>
    )
}