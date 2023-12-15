import { Todo } from '../model'
interface Props {
  todoList: Todo[]
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {
  return (
    <section className='todos flex'>
      {todoList.map((t: Todo) => (
        <li key={Date.now()} className=''>
          {t.todo}
        </li>
      ))}
    </section>
  )
}

export default TodoList
