type StringOrNull = string | null

export type SimulatorPayload = {
  from?: string | null
  to: StringOrNull
  gas: StringOrNull
  gasPrice: StringOrNull
  value: StringOrNull
  data?: StringOrNull
  maxFeePerGas?: StringOrNull
  blockReference: string
  maxPriorityFeePerGas?: StringOrNull
}

export type SimulatorFormState = {
  address: string | undefined
  to: string | undefined
  gas: string | undefined
  gasPrice: string | undefined
  value: string | undefined
  blockNumber: string | undefined
}

type RawTx = {
  type: string
  from: string
  to: string
  gas: number
  gasPrice: StringOrNull
  value: number
  input: string
}

type TxReceipt = {
  status: number
  gas: number
  gasUsed: number
  logs: Array<Log>
}

type Log = {
  logIndex: number
  address: string
  data: string
  topics: Array<string>
}

export type Transaction = {
  rawTx: RawTx
  txReceipt: TxReceipt
}
