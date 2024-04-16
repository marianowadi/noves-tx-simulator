import { TransactionProvider } from './TransactionContext'
import { Dashboard } from './Dashboard'

function App() {
  return (
    <TransactionProvider>
      <Dashboard />
    </TransactionProvider>
  )
}

export default App
