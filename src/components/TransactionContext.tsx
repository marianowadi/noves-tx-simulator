import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { Transaction } from 'simulator'

const TransactionContext = createContext<
  { state: AppState; dispatch: Dispatch } | undefined
>(undefined)

type AppState = {
  transactions: Transaction[]
  openedTransaction: Transaction | null
  error: string | null
  isLoading: boolean
}
type Dispatch = (action: Action) => void

type Action =
  | { type: 'addTx'; payload: Transaction }
  | { type: 'setLoading'; payload: boolean }
  | { type: 'setError'; payload: string }
  | { type: 'setOpenedTx'; payload: Transaction | null }

function transactionReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'addTx': {
      return { ...state, transactions: [...state.transactions, action.payload] }
    }
    case 'setLoading': {
      return { ...state, isLoading: action.payload }
    }
    case 'setError': {
      return { ...state, error: action.payload }
    }
    case 'setOpenedTx': {
      return { ...state, openedTransaction: action.payload }
    }
    default: {
      throw new Error('Unhandled action type')
    }
  }
}

const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(transactionReducer, {
    transactions: JSON.parse(localStorage.getItem('NOVES_SIMULATOR') ?? '[]'),
    openedTransaction: null,
    error: null,
    isLoading: false
  })

  useEffect(() => {
    if (
      JSON.stringify(state.transactions) !==
        localStorage.getItem('NOVES_SIMULATOR') ??
      '[]'
    ) {
      localStorage.setItem(
        'NOVES_SIMULATOR',
        JSON.stringify(state.transactions)
      )
    }
  }, [state.transactions])
  const values = { state, dispatch }
  return (
    <TransactionContext.Provider value={values}>
      {children}
    </TransactionContext.Provider>
  )
}

const useTransactions = () => {
  const context = useContext(TransactionContext)
  if (context === undefined) {
    throw new Error('useTransactions must be used within a TransactionProvider')
  }
  return context
}

export { TransactionProvider, useTransactions }
