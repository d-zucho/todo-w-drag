import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import InputField from './components/InputField'
import { Todo } from './model'
import TodoList from './components/TodoList'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todoList, setTodoList] = useState<Todo[]>([])

  //* Add new todo
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodoList([...todoList, { id: Date.now(), todo, completed: false }])

      setTodo('')
    }
  }

  return (
    <div className='App w-screen h-screen bg-[#2f74c0] flex flex-col mx-auto'>
      <Header />
      <div className='max-w-screen-xl relative w-full px-4 md:px-8 mx-auto'>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAddTask={handleAddTask}
        />
        <div className='mx-auto'>
          <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
      </div>
    </div>
  )
}

export default App
