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
  return (
    <form
      id='single-todo'
      key={todo.id}
      className={classNames(
        'w-full md:w-[45%] xl:w-[30%] p-5 rounded-md flex items-center justify-between',
        todo.completed ? 'bg-green-500 ' : 'bg-yellow-400'
      )}
    >
      <span className='p-1.5 border-none text-xl flex-1 focus:outline-none'>
        {todo.todo}
      </span>

      {/* Icons Start */}
      <div id='icons' className='flex'>
        <span className='todo-icon'>
          <AiFillEdit />
        </span>
        <span className='todo-icon'>
          <AiFillDelete />
        </span>
        <span className='todo-icon'>
          <MdDone />
        </span>
      </div>
      {/* Icons End */}
    </form>
  )
}

export default SingleTodo
