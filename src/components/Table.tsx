import { Transaction } from 'simulator'
import { useTransactions } from './TransactionContext'
import View from 'assets/eye.svg'
import { shortAddress } from 'utils'

export const Table = () => {
  const {
    dispatch,
    state: { transactions }
  } = useTransactions()

  const handleViewClick = (tx: Transaction) => {
    dispatch({ type: 'setOpenedTx', payload: tx })
  }
  return (
    <div className="mt-4 h-2/6 w-full overflow-scroll  rounded-lg bg-black/25 p-4 text-base shadow-lg ">
      {transactions.length > 0 ? (
        <div className="flex flex-col">
          <div className="flex flex-row justify-around border-b border-white/15">
            <div className="flex flex-row items-center text-center">To</div>
            <div className="flex flex-row items-center text-center">From</div>
            <div className="flex flex-row items-center">Gas</div>
            <div className="flex flex-row items-center">Gas price</div>
            <div className="flex flex-row items-center"></div>
          </div>

          {transactions.map((tx, i) => (
            <div key={`${tx}-${i}`} className="flex flex-row justify-around">
              <div title={tx.rawTx.to} className="flex flex-row items-center">
                {shortAddress(tx.rawTx.to)}
              </div>

              <div title={tx.rawTx.from} className="flex flex-row items-center">
                {shortAddress(tx.rawTx.from)}
              </div>
              <div className="flex flex-row ">{tx.txReceipt.gas}</div>
              <div className="flex flex-row">{tx.txReceipt.gasUsed}</div>
              <div className="flex flex-row">
                <button onClick={() => handleViewClick(tx)}>
                  <img src={View} className="size-8  " alt="View transaction" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        'No tx simulations history'
      )}
    </div>
  )
}
