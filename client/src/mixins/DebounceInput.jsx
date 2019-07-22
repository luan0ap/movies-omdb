import { useState, useEffect } from 'react'

function DebounceInput (value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)

      return () => {
        clearTimeout(handler)
      }
    }
  )

  return debouncedValue
}

export default DebounceInput
