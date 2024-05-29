import { useState } from 'react'
import { Button, TextField } from '@mui/material'
import styled from 'styled-components'
import { ItemsAccordion } from '../../components'

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;

  .header {
    margin-bottom: 20px;
  }

  .input {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: white;
  }
`

const items = [
  {
    summary: 'Step 1) Get Form',
    details: `First, we need to get the form`,
    id: '1',
  },
  {
    summary: 'Step 2) Type In Form',
    details: `cy.type('words')`,
    id: '2',
  },
  {
    summary: 'Step 3) Subscribe',
    details: `cy.click()`,
    id: '3',
  },
  {
    summary: 'Step 4) Test success/fail',
    details: `NOTE: Waiting/Retriability *docs`,
    id: '4',
  },
  {
    summary: 'Step 5) Test validation',
    details: ``,
    id: '5',
  },
]

export function FormPage() {
  const [inputValue, setInputValue] = useState('')
  const [subMessage, setSubMessage] = useState('')
  return (
    <StyledMain>
      <h1 className={'header'}>Testing Forms</h1>
      <ItemsAccordion items={items} />
      <TextField
        className={'input'}
        label="Email"
        variant="filled"
        data-test="subscribe-form"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <Button
        data-test="subscribe-button"
        onClick={() => {
          if (inputValue && !inputValue.includes('.com')) {
            setSubMessage(`Invalid email: ${inputValue}!`)
          } else if (inputValue.length) {
            setSubMessage(`Successfully subbed: ${inputValue}!`)
          } else {
            setSubMessage('fail!')
          }

          setTimeout(() => {
            setSubMessage('')
            setInputValue('')
          }, 3000)
        }}
      >
        Subscribe
      </Button>
      {subMessage && <p style={{ fontSize: 16, color: 'red' }}>{subMessage}</p>}
    </StyledMain>
  )
}
