import { useTransactions } from './TransactionContext'

export const ErrorToast = () => {
  const {
    dispatch,
    state: { error }
  } = useTransactions()
  const handleCloseModal = () => dispatch({ type: 'setError', payload: '' })
  if (!error) return null
  return (
    <div className=" absolute right-12 top-12 rounded-lg bg-black/85 p-8 text-base text-white shadow-lg">
      {error}
      <button className="ml-2 rounded-md border p-1" onClick={handleCloseModal}>
        X
      </button>
    </div>
  )
}
