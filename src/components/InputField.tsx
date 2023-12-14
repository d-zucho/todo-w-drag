const InputField = () => {
  return (
    <form className='flex relative w-[90%] items-center mx-auto max-w-4xl'>
      {/* <div clas> */}
      <input
        id='task'
        type='text'
        placeholder='Enter a task'
        className='w-full px-4 text-2xl py-3 shadow-inner border-none outline-slate-200 rounded-full focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.3)] focus:outline-none'
      />
      <button
        type='submit'
        className='absolute w-[50px] h-[50px] m-3 bg-[#2f74c0] text-white border-none transition-all rounded-full font-black text-lg active:scale-105 active:shadow-md -right-1'
      >
        Go
      </button>
      {/* </div> */}
    </form>
  )
}

export default InputField
