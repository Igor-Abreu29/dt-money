import { ButtonTransactions, HeaderContainer, HeaderContent } from "./style";
import LogoDt from '../../assets/logo-money.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoDt} alt="" />
                
                <Dialog.Root>
                    <NewTransactionModal />
                    
                    <Dialog.Trigger asChild>
                        <ButtonTransactions>Nova Transação</ButtonTransactions>
                    </Dialog.Trigger>

                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}