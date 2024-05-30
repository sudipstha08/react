import styled from 'styled-components'
import { GrudgeList, ItemsAccordion, PostButton } from '../../components'

const items = [
  {
    summary: 'Example 1) Multi-page testing',
    details: `You can quite easily write tests across pages to better test
    entire user workflows. You can click on navigation buttons or use cy.visit().
    You can also use cy.location("pathname").should("equal", "/some-path") to assert 
    you're in the correct location`,
    id: '1',
  },
  {
    summary: 'Example 2) Intercepts',
    details: `Cypress provides different ways of working with
    network requests. One way is by using intercepts *docs & example`,
    id: '2',
  },
  {
    summary: 'Example 3) Helpful methods',
    details: `Cypress provides a ton of methods. It's not really feasible to try
    to learn every single one. A popular ones include cy.its(), cy.invoke(), cy.request(),
    cy.within() -- *docs`,
    id: '3',
  },
  {
    summary: 'Example 4) Grudge list',
    details: `Let's test some actual state changes`,
    id: '4',
  },
]

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

  .postButton {
    margin-top: 20px;
  }

  .postButton button {
    background-color: white;
  }
`

export function ExamplesPage() {
  return (
    <>
      <StyledMain>
        <h1 className="header">Examples</h1>
        <ItemsAccordion items={items} />
        <div className="postButton">
          <PostButton className="postButton" />
        </div>
        <GrudgeList />
      </StyledMain>
    </>
  )
}
