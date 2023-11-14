import { Header } from "../../components/Header";
import { SummaryComposition } from "../../components/Summary/SummaryComposition";
import { useDeleteTransaction } from "../../hooks/useDeleteTransaction";
import { useFetchTransactions } from "../../hooks/useFetchTransactions";
import { DateFormater, NumberFormater } from "../../utils/formater";
import { SearchForm } from "./SearchForm";
import { TransactionsContainer, TransactionsTable, HighLight } from "./style";

export function Transactions() {
    const { data, isLoading } = useFetchTransactions()
    const { mutate } = useDeleteTransaction()

    return (
        <div>
            <Header />

            <SummaryComposition />

            <TransactionsContainer>
            <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {isLoading && (
                            <tr>
                                <td>loading...</td>
                            </tr>
                        )}
                        {!isLoading && (
                            data?.map(transaction => {
                                return (
                                    <tr key={transaction.id}>
                                        <td width="50%">{transaction.description}</td>
                                        <td>
                                            <HighLight variant={transaction.type}>
                                                {transaction.type === 'outcome' && '- '}
                                                {NumberFormater.format(transaction.price)}
                                            </HighLight>
                                        </td>
                                        <td>{transaction.category}</td>
                                        <td>{DateFormater.format(new Date(transaction.startDate))}</td>
                                        <td>
                                            <button onClick={() => mutate({
                                                id: transaction.id
                                            })}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}