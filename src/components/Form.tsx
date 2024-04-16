import React, { useState } from 'react'
import { SimulatorPayload, Transaction } from 'simulator'
import { useTransactions } from './TransactionContext'
import { API_URL } from './constants'
import axios, { AxiosError } from 'axios'
import { toHex } from 'utils'
import { FormItem } from './FormItem'

const initialFormState = {
  to: '',
  blockReference: '',
  gas: '',
  gasPrice: '',
  value: ''
}

export const Form = () => {
  const {
    dispatch,
    state: { isLoading }
  } = useTransactions()
  const [formState, setFormState] = useState(initialFormState)

  const isFormValid = Boolean(formState.to) && Boolean(formState.blockReference)

  const handleInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/[^A-Za-z0-9]+/)) return
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const submitForm = async (
    payload: SimulatorPayload
  ): Promise<Transaction | void> => {
    dispatch({ type: 'setLoading', payload: true })
    try {
      const parsedPayload = {
        unsignedTransaction: {
          to: payload.to,
          gas: payload.gas ? `0x${toHex(payload.gas)} ` : null,
          gasPrice: payload.gasPrice ? `0x${toHex(payload.gasPrice)}` : null
        },
        blockReference: `0x${toHex(payload.blockReference)}`,
        stateOverrides: {}
      }
      const { data } = await axios.post(API_URL, parsedPayload)

      dispatch({ type: 'addTx', payload: data })
      setFormState(initialFormState)
      dispatch({ type: 'setOpenedTx', payload: data })
    } catch (err) {
      const error = err as AxiosError
      console.log(error)
      dispatch({ type: 'setError', payload: error.message })
    } finally {
      dispatch({ type: 'setLoading', payload: false })
    }
  }

  const handleSubmit = async () => {
    if (!formState.to || !formState.blockReference) return //handle error
    const { to: address, ...restOfForm } = formState
    await submitForm({ ...restOfForm, to: address })
  }

  return (
    <div className="mt-4 h-3/6 w-full rounded-lg  bg-black/25 p-4 text-base shadow-lg ">
      <div className="flex flex-col">
        <FormItem
          id="to"
          name="Address"
          value={formState.to}
          onChange={handleInputEvent}
        />

        <FormItem
          id="blockReference"
          name="Block Reference"
          value={formState.blockReference}
          onChange={handleInputEvent}
        />
        <FormItem
          id="value"
          name="Value"
          value={formState.value}
          onChange={handleInputEvent}
        />

        <div className="mb-8 flex flex-row">
          <FormItem
            id="gas"
            name="Gas"
            value={formState.gas}
            onChange={handleInputEvent}
          />
          <FormItem
            id="gasPrice"
            name="Gas Price"
            value={formState.gasPrice}
            onChange={handleInputEvent}
          />
        </div>
        <button
          disabled={!isFormValid}
          title={!isFormValid ? 'Fill in required data' : ''}
          onClick={handleSubmit}
          className="mt-2 flex items-center justify-center border bg-white p-2 text-black disabled:cursor-not-allowed disabled:bg-[#ccc] disabled:text-white"
        >
          {isLoading ? (
            <div
              className=" inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent  dark:text-[#93c]"
              role="status"
              aria-label="loading"
            ></div>
          ) : (
            'Simulate'
          )}
        </button>
      </div>
    </div>
  )
}
