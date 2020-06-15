import React, { useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => {
  const [passwordOds, setPasswordOds] = useState('password');
  const [passwordNep, setPasswordNep] = useState('abcd1234');

  async function handleSubmit() {
    const rawResponse = await fetch('http://localhost:8080/pwd', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ passwordOds, passwordNep })
    });

    const content = await rawResponse.json();
    console.log(content.status)
    if (content.status === 100) {
      console.log('11')
      window.location.href = 'http://localhost:8080/test';
    }
  }

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Set password(s) to connect
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='ODS Password' value={passwordOds}
              onChange={e => setPasswordOds(e.target.value)} />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Nep Password'
              value={passwordNep}
              onChange={e => setPasswordNep(e.target.value)} />
            <Button color='teal' fluid size='large' onClick={handleSubmit}>
              Connect
            </Button>
          </Segment>
        </Form>
        <Message>
          Support IDs to retrieve records.
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default LoginForm