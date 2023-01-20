import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import  Modal  from 'react-modal';
import { useState } from 'react';

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
    <>
      <Header onOpenNewTransactionModal={clickOpenNewTransaction} />
      <Dashboard/>
      <Modal 
        isOpen={newTransactionModal} 
        onRequestClose={clickCloseNewTransaction}>
          <h2>Nova Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
