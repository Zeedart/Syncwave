export default function BlinkingDot({
  width,
  height
}: {
  width: number,
  height: number
}) {
  return (
    <div 
      className="border-transparent rounded-xl bg-green-500 animate-blink"
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  )
}