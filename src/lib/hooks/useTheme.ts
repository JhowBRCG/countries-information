import { useEffect, useState } from 'react'

export function useTheme() {
  const storedTheme = localStorage.getItem('isDark')
  const [isDark, setIsDark] = useState(storedTheme || 'light')

  useEffect(() => {
    if (isDark === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('isDark', isDark)
  }, [isDark])

  const toggle = () => {
    setIsDark((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { isDark, setIsDark, toggle }
}
