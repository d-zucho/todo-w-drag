import './App.css'
import Header from './components/Header'
import InputField from './components/InputField'

const App: React.FC = () => {
  return (
    <div className='App w-screen h-screen bg-[#2f74c0] flex flex-col mx-auto'>
      <Header />
      <div className='max-w-screen-xl w-full px-4 md:px-8 mx-auto'>
        <InputField />
      </div>
    </div>
  )
}

export default App
