import  styles  from  '../styles/Tables.module.css'
import { Table } from '@mantine/core';

function Tables() {
  return <div className={styles.maincontent}>
    <div className={styles.tablesFormat}>
      <h1>Tipo da despesa</h1>
        <input type="text" placeholder='ID' />
        <input type="text" placeholder='Nome do tipo da despesa' />
        <input type="text" placeholder='Status (letra)' />  
      </div>
      
    <div className={styles.tablesFormat}>
      <h1>Centro do custo</h1>
        <input type="text" placeholder='ID' />
        <input type="text" placeholder='Centro de custos' />
        <input type="text" placeholder='Status (letra)' />
      </div>

    <div className={styles.tablesFormat}>
      <h1>Forma de pagamento</h1>
        <input type="text" placeholder='ID' />
        <input type="text" placeholder='Nome' />
        <input type="text" placeholder='Status (letra)' />
      </div>

    <div className={styles.tablesFormat}>
      <h1>Tabela Geral do financeiro</h1>
        <input type="text" name="" placeholder='ID' />
        <input type="text" name="" placeholder='Codigo do custo' />
        <input type="text" name="" placeholder='Codigo do tipo da despesa' />
        <input type="text" name="" placeholder='Codigo da forma de pagamento' />
        <input type="text" name="" placeholder='Numero nota fiscal' />
        <input type="text" name="" placeholder='Numero parcelas' />
        <input type="text" name="" placeholder='Status (letra)' />
        <input type="text" name="" placeholder='Despesa' />
        <input type="text" name="" placeholder='Juros' />
        <input type="text" name="" placeholder='Total despesa' />
        <input type="text" name="" placeholder='Data de vencimento' />
      </div>

      <Table>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>  
      
  </div>
}

export default Tables