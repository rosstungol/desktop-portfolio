import { startTransition } from 'react'

export default function StartScreen({ onStart }: { onStart: () => void }) {
  const onStartTransition = () => {
    startTransition(onStart)
  }

  return (
    <div className='col-center py-6 px-8 card-container'>
      <div className='mb-4'>
        <p>rosstungol.com</p>
      </div>
      <button
        type='button'
        onClick={onStartTransition}
        className='border-2 border-stone-300 px-8 w-full py-2 cursor-pointer rounded
         hover:bg-stone-300 hover:text-black transition-colors'
      >
        enter
      </button>
    </div>
  )
}
