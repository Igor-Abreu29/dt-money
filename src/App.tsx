import { ThemeProvider } from "styled-components";
import { TransactionProvider } from "./contexts/TransactionsContext";
import { Transactions } from "./pages/Transactions";
import { Global } from "./styles/global";
import { defaultTheme } from "./styles/Theme/defaultTheme";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Global />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}