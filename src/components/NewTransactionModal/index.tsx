import  Modal  from 'react-modal';
import closeImg from '../../assets/fecharbtn.svg'
import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

  const [type, setType] = useState('deposit') 



  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay" 
      className="react-modal-content">

        <button 
          type='button' 
          onClick={onRequestClose} 
          className="react-modal-close">
            <img src={closeImg} alt="close modal" />
        </button>

        <Container>

          <h2>Nova Transação</h2>

          <input
            placeholder='Titulo'
          />

          <input
            type="number"
            placeholder='Valor'
          />

          <TransactionTypeContainer>
            <RadioBox
              type='button'
              onClick={()=>{setType('deposit');}}
              isActive={type === 'deposit'}
              activeColor="green"
              >
                <img src={entradasImg} alt="entrada" />
                <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type='button'
              onClick={()=>{setType('withdraw');}}
              isActive={type === 'withdraw'}
              activeColor="red"
              >
                <img src={saidasImg} alt="entrada" />
                <span>Saida</span>
            </RadioBox>
          </TransactionTypeContainer>
            
          

          <input
            placeholder='Categoria'
          />

          <button type="submit">
            Cadastrar
          </button>

          </Container>
        <Container/>
    </Modal>
  )
}