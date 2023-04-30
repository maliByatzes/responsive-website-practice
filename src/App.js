import './App.css';

function App() {
  return (
    <div className='text-gray-100 font-Poppins'>
      <nav className='fixed top-0 left-0 w-full py-6'>
        <div className='container mx-auto flex justify-between'>
          <img src='../assets/images/package.png' alt='' className='h-8 animate-bounce' />
          <ul className='text-sm tracking-wide items-center flex gap-x-8'>
            <li className='hover:scale-125 duration-300 py-1 hover:text-teal-400'>
              <a className='cursor-pointer' href='#home'>Home</a>
            </li>
            <li className='hover:scale-125 duration-300 py-1 hover:text-teal-400'>
              <a className='cursor-pointer' href='#product'>Product</a>
            </li>
            <li className='hover:scale-125 duration-300 py-1 hover:text-teal-400'>
              <a className='cursor-pointer' href='#aboutus'>About us</a>
            </li>
            <li className='hover:scale-125 duration-300 py-1 hover:text-teal-400'>
              <a className='cursor-pointer' href='#contact'>Contact</a>
            </li>
            <button className='bg-teal-600 px-7 rounded-full tracking-wide py-3 text-xs hover:scale-110 duration-300'>
              GET STARTED
            </button>
          </ul>
        </div>
      </nav>

      <div className='bg-[#23304c] h-screen flex px-[10%] py-[6%]'>
        <img 
          src='../assets/images/Ellipse.png'
          className='z-20 animate-ping w-6 absolute left-24 top-56'
          alt=''
        />
        <img 
          src='../assets/images/Ellipse.png'
          className='z-20 animate-ping w-6 absolute right-96 top-36'
          alt=''
        />
        <img 
          src='../assets/images/Ellipse.png'
          className='z-20 animate-ping w-6 absolute left-64 bottom-24'
          alt=''
        />
        <img 
          src='../assets/images/Ellipse.png'
          className='z-20 animate-ping w-6 absolute right-40 top-64'
          alt=''
        />

        <img src='../assets/images/wave3.png' alt='' className='absolute bottom-20 right-36 w-96' />
        <img 
          src='../assets/images/wave.png'
          className='absolute z-20 bottom-0 right-0 w-2/3'
          alt=''
        />
        <div className='flex-1'>
          <img src='../assets/images/loading.png' alt='' className='w-9/12' />
        </div>

        <div className='flex-1 pt-7'>
          <div className='absolute'>
            <h1 className='text-3xl leading-normal py-6'>
              Build visual <br />
              tracking systems <br />
              for your
              <span className='underline decoration-teal-500'>customers</span>
            </h1>
            <button className='bg-teal-600 px-7 rounded-full tracking-wide py-3 text-xs hover:scale-110 duration-300'>
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;