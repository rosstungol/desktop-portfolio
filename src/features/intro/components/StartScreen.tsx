import { startTransition } from 'react'

export default function StartScreen({ onStart }: { onStart: () => void }) {
  const start = () => {
    startTransition(onStart)
  }

  return (
    <div
      className='col-center bg-stone-900/30 border border-stone-500 text-stone-200 
      rounded py-6 px-8 font-roboto font-bold'
    >
      <div className='mb-4'>
        <p>rosstungol.com</p>
      </div>
      <button
        type='button'
        onClick={start}
        className='border-2 border-stone-300 px-8 w-full py-2 cursor-pointer rounded
         hover:bg-stone-300 hover:text-black transition-colors'
      >
        enter
      </button>
    </div>
  )
}
