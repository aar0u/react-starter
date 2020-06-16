import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => {
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  let history = useHistory();

  async function handleSubmit() {
    const rawResponse = await fetch(window.env.API + '/pwd', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password1, password2 })
    });

    const content = await rawResponse.json();
    console.log(content.status)
    if (content.status === 100) {
      history.replace("/report");
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
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password 1' value={password1}
              onChange={e => setPassword1(e.target.value)} />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password 2' value={password2}
              onChange={e => setPassword2(e.target.value)} />
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