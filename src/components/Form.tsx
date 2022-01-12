import React, { useRef } from 'react'

interface IFormProps {
  onAdd(title: string): void
}

const Form: React.FC<IFormProps> = (props): JSX.Element => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value)
      ref.current!.value = ''
      // console.log(title)
      // setTitle('')
    }
  }

  return (
    <div className="mb-3 mt-3">
      <label htmlFor="title" className="form-label">Введите название дела</label>
      <input
        // value={title}
        // onChange={changeHandler}
        ref={ref}
        onKeyPress={keyPressHandler}
        type="text"
        className="form-control"
        id="title"
        placeholder='Надо сделать...'
      />
    </div>
  )
}

export default Form
