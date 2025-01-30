import { useRef, useEffect } from 'react'

function InputFocus() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus() // Устанавливаем фокус при загрузке
  }, [])

  return <input ref={inputRef} placeholder="Фокус на мне" />
}

export default InputFocus
