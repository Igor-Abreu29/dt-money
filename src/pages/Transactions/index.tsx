import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { DateFormater, NumberFormater } from "../../utils/formater";
import { SearchForm } from "./SearchForm";
import { TransactionsContainer, TransactionsTable, HighLight } from "./style";
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    })

    const deleteTransactions = useContextSelector(TransactionsContext, (context) => {
        return context.deleteTransactions
    })

    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
            <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
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
                                        <button onClick={() => deleteTransactions(transaction.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}