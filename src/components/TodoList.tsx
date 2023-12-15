import { Todo } from '../model'
import SingleTodo from './SingleTodo'

interface Props {
  todoList: Todo[]
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todoList, setTodoList }: Props) => {
  return (
    <section className='todos flex flex-wrap justify-evenly w-[90%]'>
      {todoList.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </section>
  )
}

export default TodoList
