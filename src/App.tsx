import { Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  ComponentTestPage,
  ExamplesPage,
  FiberPage,
  FormPage,
  FundamentalsPage,
  HomePage,
  OpenLayer,
  PortfolioPage,
  SpellsPage,
  TestPage,
  UploadPage,
} from './containers'
import './App.css'
import { NavBar } from './components'

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/spells" element={<SpellsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/fiber" element={<FiberPage />} />
            <Route path="/openlayer" element={<OpenLayer />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/fundamentals" element={<FundamentalsPage />} />
            <Route path="/forms" element={<FormPage />} />
            <Route path="/examples" element={<ExamplesPage />} />
            <Route path="/component" element={<ComponentTestPage />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App
