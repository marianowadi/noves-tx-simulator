import { shortAddress } from 'utils'
import { useTransactions } from './TransactionContext'
import RightArrow from 'assets/right-arrow-svgrepo-com.svg'

export const Modal = () => {
  const {
    dispatch,
    state: { openedTransaction }
  } = useTransactions()
  const handleCloseModal = () =>
    dispatch({ type: 'setOpenedTx', payload: null })
  if (!openedTransaction) return null
  return (
    <div className=" absolute left-1/2 top-1/2 m-auto size-4/6 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-black/85 p-4  text-base text-white shadow-lg">
      <button
        className="absolute right-8 top-8 rounded-lg border p-2"
        onClick={handleCloseModal}
      >
        Close
      </button>
      <div className="flex flex-row items-center">
        <div className="flex flex-col bg-[#ccc] p-4">
          <p className="text-black">From</p>
          <span title={openedTransaction.rawTx.from}>
            {shortAddress(openedTransaction.rawTx.from)}
          </span>
        </div>
        <div className="mx-8">
          <img
            src={RightArrow}
            className="size-8 fill-white  text-white"
            alt="View transaction"
          />
        </div>
        <div className="flex flex-col bg-[#ccc] p-4">
          <p className="text-black">To</p>
          <span title={openedTransaction.rawTx.to}>
            {shortAddress(openedTransaction.rawTx.to)}
          </span>
        </div>
      </div>
      <div className="mt-8 flex flex-row">
        <div className="mr-4 flex flex-col bg-[#ccc] p-4">
          <p className="text-black">Expected gas</p>
          {openedTransaction.rawTx.gas}
        </div>

        <div className="flex flex-col bg-[#ccc] p-4">
          <p className="text-black">Simulated gas</p>
          {openedTransaction.txReceipt.gas}
        </div>
      </div>
      <div className="mt-4">
        <p>Tx steps: {openedTransaction.txReceipt.logs.length}</p>
      </div>
      <div className="flex flex-row flex-wrap">
        {openedTransaction.txReceipt.logs.map((log) => (
          <div className="m-2 flex flex-col bg-[#ccc] p-2" key={log.address}>
            <p className="text-black">Step {log.logIndex}</p>
            <span title={log.topics[0]}>{shortAddress(log.topics[0])}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
