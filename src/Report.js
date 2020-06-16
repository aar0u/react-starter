import React, { useState, useEffect } from 'react'
import { Grid, Input, Table, Dropdown } from 'semantic-ui-react'
import dropdown from './dropdown.json'

const Report = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([{}]);
  const [selected, setSelected] = useState('');

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      setIsLoading(true);
      const rawResponse = await fetch(env.API + '/trans', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type: selected, keyword: event.target.value })
      });

      const content = await rawResponse.json();
      setIsLoading(false);
      if (content.status && content.status !== 200) {
        setError(content.error);
      } else {
        if (content.length === 0)
          content.push({ 'NO DATA': '' });
        setItems(content);
      }
    }
  }

  let rowId = 0;
  let cellId = 0;
  return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <Dropdown placeholder='Select Type' fluid search selection options={dropdown} value={selected}
            onChange={(e, data) => setSelected(data.value)} />
        </Grid.Column>
        <Grid.Column>
          <Input icon='search' placeholder='Search...' loading={isLoading}
            onKeyDown={handleKeyDown} />
        </Grid.Column>
      </Grid.Row>
      {error && <div>Error: {error}</div>}
      <Grid.Column width={3}>
        <Table stackable striped>
          <Table.Header>
            <Table.Row>
              {
                Object.keys(items[0]).map(key => <Table.Cell collapsing key={cellId++}>{key}</Table.Cell>)
              }
            </Table.Row>
          </Table.Header>
          {!error &&
            <Table.Body>
              {items.map(el => {
                cellId = 0;
                return (
                  <Table.Row key={rowId++}>
                    {
                      Object.keys(el).map(function (key) {
                        return (<Table.Cell key={cellId++}>{el[key]}</Table.Cell>)
                      })
                    }
                  </Table.Row>
                );
              })}
            </Table.Body>
          }
        </Table>
      </Grid.Column>
    </Grid>
  );
}

export default Report