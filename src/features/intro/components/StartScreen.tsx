import { startTransition } from 'react'

export default function StartScreen({ onStart }: { onStart: () => void }) {
  const onStartTransition = () => {
    startTransition(onStart)
  }

  return (
    <div className='card-container col-center px-8 py-6'>
      <div className='mb-4'>
        <p>rosstungol.com</p>
      </div>
      <button
        type='button'
        onClick={onStartTransition}
        className='w-full cursor-pointer rounded border-2 border-stone-300 px-8 py-2 transition-colors hover:bg-stone-300 hover:text-black'
      >
        enter
      </button>
    </div>
  )
}
