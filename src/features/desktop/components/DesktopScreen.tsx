export default function DesktopScreen() {
  return (
    <div className='desktop-wrapper' onPointerDown={(e) => e.stopPropagation()}>
      <div className='text-white'>
        <h1>test</h1>
      </div>
    </div>
  )
}
