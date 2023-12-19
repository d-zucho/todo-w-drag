import { useRef, useState, useEffect } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { classNames } from '../classNames'

interface Props {
  todo: Todo
  todoList: Todo[]
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todoList, setTodoList }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [todoString, setTodoString] = useState<string>(todo.todo)

  const inputRef = useRef<HTMLInputElement>(null)

  //* Handle edit todo
  const handleSubmitEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()
    // if id matches, update todo to what is in todoString
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, todo: todoString } : todo
      )
    )
    // set editTodo back to false
    setEdit(false)
  }

  //* Handle complete todo
  const handleComplete = (id: number) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    )
  }

  //* Handle delete todo
  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <form
      id='single-todo'
      className={classNames(
        'w-full md:w-[45%] xl:w-[30%] p-5 rounded-md flex items-center justify-between transition-all ease-in-out duration-500',
        todo.completed ? 'bg-green-500 ' : 'bg-yellow-400'
      )}
      onSubmit={(e) => handleSubmitEdit(e, todo.id as number)}
    >
      {/*******************
       *   Edit Start
       ****************** */}
      {edit ? (
        <input
          ref={inputRef}
          type='text'
          className='p-1.5 border-none text-xl flex-1 focus:outline-none rounded-lg'
          value={todoString}
          onChange={(e) => {
            setTodoString(e.target.value)
          }}
        />
      ) : todo.completed ? (
        <s className='p-1.5 border-none text-xl flex-1 focus:outline-none'>
          {todo.todo}
        </s>
      ) : (
        <span className='p-1.5 border-none text-xl flex-1 focus:outline-none'>
          {todo.todo}
        </span>
      )}

      {/*******************
       *   Icons Start
       ****************** */}
      <div id='icons' className='flex'>
        <span className='todo-icon'>
          <AiFillEdit
            onClick={() => {
              if (!edit && !todo.completed) {
                setEdit(!edit)
              }
            }}
          />
        </span>
        <span className='todo-icon'>
          <AiFillDelete onClick={() => handleDelete(todo.id as number)} />
        </span>
        <span className='todo-icon'>
          <MdDone onClick={() => handleComplete(todo.id as number)} />
        </span>
      </div>
      {/* Icons End */}
    </form>
  )
}

export default SingleTodo
