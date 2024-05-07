import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { QueryClientProvider } from '@tanstack/react-query'
import { SpellsPage } from './containers'
import { queryClient } from './lib'
import './App.css'

const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap"
        rel="stylesheet"
      ></link>
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={SpellsPage} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
