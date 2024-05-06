import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { SpellsPage } from './containers'
import { queryClient } from './lib'
import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'

const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <Switch>
            <Route exact path="/upload" component={SpellsPage} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
