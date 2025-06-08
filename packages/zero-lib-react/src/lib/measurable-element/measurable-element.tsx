import { useRef, useEffect } from 'react'

type Dimensions = { [key in 'width' | 'height']: number }

export const MeasurableElement = ({
  children,
  onResize,
}: {
  children: React.ReactNode
  onResize: (dimensions: Dimensions) => void
}) => {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    if (ref.current) {
      onResize({
        width: ref.current.offsetWidth - 1,
        height: ref.current.offsetHeight - 1,
      })
      window.addEventListener(
        'resize',
        () =>
          ref.current &&
          onResize({
            width: ref.current.offsetWidth - 1,
            height: ref.current.offsetHeight - 1,
          }),
      )
    }
  }, [onResize])
  return <span ref={ref}>{children}</span>
}
