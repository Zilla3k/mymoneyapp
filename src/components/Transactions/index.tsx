import { Container } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";

export function TransactionsTable(){
  useEffect(()=>{
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
            <tr>
              <td>Hidrovacuo</td>
              <td className="withdraw">- R$350</td>
              <td>Carro</td>
              <td>19/01/2023</td>
            </tr>

            <tr>              
              <td>Aluguel</td>
              <td className="withdraw">- R$950</td>
              <td>Casa</td>
              <td>15/01/2023</td>
            </tr>

            <tr>
              <td>MMagalhaes</td>
              <td className="deposit">R$650</td>
              <td>Desenvolvimento</td>
              <td>12/01/2023</td>
            </tr>
          </tbody>
      </table>
    </Container>
  )
}