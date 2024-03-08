import { useEffect, useState } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggle = () => {
    setIsDark((prev) => !prev)
  }

  return { isDark, setIsDark, toggle }
}
