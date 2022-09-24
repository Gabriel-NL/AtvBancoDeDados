import { Table } from "@mantine/core";
import Demo from "../pages/api/tableMold"
import  styles  from  '../styles/Tables.module.css'

function MantineTable() {
    return  <div className={styles.maincontent}>
    <h1>Tabela do tipo da despesa</h1>
    <Table>
      <thead> 
        <tr> 
          <th>ID</th>
          <th>Despesa nome</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{}</tbody>
    </Table>

    <h1>Tabela central dos custos</h1>
    <Table>
      <thead> 
        <tr> 
          <th>ID</th>
          <th>Centro de custos</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{}</tbody>
    </Table>


    </div>;
}
export default MantineTable