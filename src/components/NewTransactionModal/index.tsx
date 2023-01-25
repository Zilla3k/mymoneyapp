import { FormEvent, useState, useContext } from 'react';
import  Modal  from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext';

import entradasImg from '../../assets/entradas.svg'
import saidasImg from '../../assets/saidas.svg'
import closeImg from '../../assets/fecharbtn.svg'

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const {createTransaction} = useContext(TransactionsContext)

  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState(0)
  const [category,setCategory] = useState('')
  const [type, setType] = useState('deposit') 

  async function clickCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

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

        <Container onSubmit={clickCreateNewTransaction}>
          <h2>Nova Transação</h2>

          <input
            placeholder='Titulo'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input
            type="number"
            placeholder='Valor'
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
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
            value={category}
            onChange={event => setCategory(event.target.value)}
          />

          <button type="submit">
            Cadastrar
          </button>

          </Container>
        <Container/>
    </Modal>
  )
}