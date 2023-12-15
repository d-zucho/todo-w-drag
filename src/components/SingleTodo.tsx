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
      key={todo.id}
      className={classNames(
        'flex rounded-md p-5 mt-4 items-center bg-yellow-400',
        todo.completed && 'bg-green-500'
      )}
    >
      <span className='p-1.5 border-none text-xl flex-1 mr-5'>{todo.todo}</span>

      {/* Icons Start */}
      <div id='icons' className='flex'>
        <span>
          <AiFillEdit />
        </span>
        <span>
          <AiFillDelete />
        </span>
        <span>
          <MdDone />
        </span>
      </div>
      {/* Icons End */}
      <input type='checkbox' name='compelted' id='completed' />
    </form>
  )
}

export default SingleTodo
