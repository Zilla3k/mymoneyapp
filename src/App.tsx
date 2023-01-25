import { useState } from 'react';
import  Modal  from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';

Modal.setAppElement("#root")

export function App() {
  const [newTransactionModal, setNewTransactionModal] = useState(false)

  

  function clickOpenNewTransaction(){
    setNewTransactionModal(true)
  }
  function clickCloseNewTransaction(){
    setNewTransactionModal(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={clickOpenNewTransaction} />
      <Dashboard/>
      <NewTransactionModal
        isOpen={newTransactionModal}
        onRequestClose={clickCloseNewTransaction}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
