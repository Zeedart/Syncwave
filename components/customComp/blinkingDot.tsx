export default function BlinkingDot({
  width,
  height,
  color
}: {
  width: number,
  height: number,
  color: string
}) {
  return (
    <div 
      className={`border-transparent rounded-xl ${color} animate-blink`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  )
}