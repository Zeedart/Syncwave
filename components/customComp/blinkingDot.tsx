export default function BlinkingDot({
  width,
  height,
  color,
  className
}: {
  width: number,
  height: number,
  color: string
  className?: string
}) {
  return (
    <div 
      className={`border-transparent  rounded-xl ${color} ${className} animate-blink`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  )
}