export const FormItem = ({
  name,
  id,
  value,
  onChange
}: {
  id: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <div className="my-2 flex flex-row items-center">
    <label htmlFor={id} className="mx-2 ">
      {name}
    </label>
    <input
      id={id}
      type="text"
      name={id}
      value={value}
      onChange={onChange}
      className="grow border bg-transparent text-xl"
    />
  </div>
)
