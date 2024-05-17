import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  FiberPage,
  HomePage,
  PortfolioPage,
  SpellsPage,
  UploadPage,
} from './containers'
import './App.css'

const queryClient = new QueryClient()
const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/upload" component={UploadPage} />
            <Route exact path="/spells" component={SpellsPage} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path="/fiber" component={FiberPage} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App
