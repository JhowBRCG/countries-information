'use client'

import { FaMoon, FaSun } from 'react-icons/fa6'
import { useTheme } from '@/lib/hooks/useTheme'

export const ThemeButton = () => {
  const { setIsDark, isDark } = useTheme()

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="flex items-center gap-2"
    >
      {isDark ? <FaSun /> : <FaMoon />}
      <p className="text-sm font-semibold dark:text-white">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </p>
    </button>
  )
}
