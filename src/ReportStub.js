import React from 'react'
import { Table } from 'semantic-ui-react'
import stub from './stub.json'

const Report = () => (
  <Table>
    <Table.Body>
      {stub.data.map(el => {
        return (
          <Table.Row key={el.id}>
            <Table.Cell>{el.id}</Table.Cell>
            <Table.Cell>
              {el.firstname} {el.lastname}
            </Table.Cell>
            <Table.Cell>{el.phone}</Table.Cell>
            <Table.Cell>{el.email}</Table.Cell>
          </Table.Row>
        );
      })}
    </Table.Body>
  </Table>
)

export default Report