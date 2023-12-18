import { useRef } from 'react'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAddTask: (e: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTask }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={(e) => {
        handleAddTask(e)
        inputRef.current?.blur()
      }}
      className='flex relative w-[95%] lg:w-[80%] items-center mx-auto max-w-4xl'
    >
      {/* <div clas> */}
      <input
        id='task'
        type='text'
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter a task'
        className='px-4 m-auto text-2xl py-3.5 shadow-inner border-none outline-slate-200 rounded-full focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.3)] focus:outline-none w-[95%]'
      />
      <button
        type='submit'
        id='sub-btn'
        className='absolute w-[50px] h-[50px] m-3 bg-[#2f74c0] text-white border-none transition-all rounded-full font-black text-lg  hover:bg-[#388ae2] active:scale-95 duration-200 active:shadow-none shadow-[0_0_4px_3px_rgba(0,0,0,0.3)] right-2 md:right-4'
      >
        Go
      </button>
      {/* </div> */}
    </form>
  )
}

export default InputField
