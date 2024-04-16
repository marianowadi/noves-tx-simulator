import { Form } from './Form'
import { Table } from './Table'
import NovesLogo from 'assets/logo.svg'
import { Modal } from './Modal'
import { ErrorToast } from './ErrorToast'

export const Dashboard = () => {
  return (
    <div className="bg-gradient-to-tr from-[#333] to-[#93c]">
      <ErrorToast />
      <Modal />
      <div className="flex h-screen flex-col items-center justify-center pt-12 font-mono text-white">
        <div className="self-start pl-12">
          <img src={NovesLogo} />
        </div>
        <div className="flex h-screen flex-col items-center pt-12 ">
          <h1 className="text-3xl">tx simulator</h1>
          <Form />
          <Table />
        </div>
      </div>
    </div>
  )
}
