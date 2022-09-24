import { Table } from "@mantine/core";
import Demo from "../pages/api/tableMold"
import  styles  from  '../styles/Tables.module.css'

function MantineTable() {
    return  <div className={styles.maincontent}>

    <h1>Tabela do tipo da despesa</h1>
        <input type="text" placeholder='ID' />
        <input type="text" placeholder='Nome do tipo da despesa' />
        <input type="text" placeholder='Status (letra)' />  
    <Table>
      <thead> 
        <tr> 
          <th>ID tipo</th>
          <th>Despesa nome</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{}</tbody>
    </Table>

    <h1>Tabela central dos custos</h1>
        <input type="text" placeholder='ID' />
        <input type="text" placeholder='Centro de custos' />
        <input type="text" placeholder='Status (letra)' />
    <Table>
      <thead> 
        <tr> 
          <th>ID central</th>
          <th>Centro de custos</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{}</tbody>
    </Table>

    <h1>Forma de pagamento</h1>
        <input type="text" placeholder='ID' />
        <input type="text" placeholder='Nome' />
        <input type="text" placeholder='Status (letra)' />
    <Table>
      <thead> 
        <tr> 
          <th>ID pagamento</th>
          <th>Centro de custos</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{}</tbody>
    </Table>

    <h1>Tabela Geral do financeiro</h1>
        <input type="text" name="" placeholder='ID' />
        <input type="text" name="" placeholder='Codigo do custo' />
        <input type="text" name="" placeholder='Cod. tipo da despesa' />
        <input type="text" name="" placeholder='Cod. forma. pagamento' />
        <input type="text" name="" placeholder='Numero nota fiscal' />
        <input type="text" name="" placeholder='Numero parcelas' />
        <input type="text" name="" placeholder='Status (letra)' />
        <input type="text" name="" placeholder='Despesa' />
        <input type="text" name="" placeholder='Juros' />
        <input type="text" name="" placeholder='Total despesa' />
        <input type="text" name="" placeholder='Data de vencimento' />
    <Table>
      <thead> 
        <tr> 
          <th>ID</th>
          <th>Cod centro de custos</th>
          <th>Cod tipo despesa</th>
          <th>Cod forma pagamento</th>
          <th>Numero nota fiscal</th>
          <th>Numero parcelas</th>
          <th>Status</th>
          <th>Valor despesa</th>
          <th>Valor de juros</th>
          <th>Valor total despesa</th>
          <th>Data de vencimento</th>
        </tr>
      </thead>
      <tbody>{}</tbody>
    </Table>

    </div>;
}
export default MantineTable