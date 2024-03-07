'use client'

import { FaMoon, FaSun } from 'react-icons/fa6'
import { useTheme } from '@/lib/hooks/useTheme'

export const ThemeButton = () => {
  const { toggle, isDark } = useTheme()

  return (
    <button onClick={toggle} className="flex items-center gap-2">
      {isDark === 'dark' ? <FaSun /> : <FaMoon />}
      <p className="text-sm font-semibold dark:text-white">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </p>
    </button>
  )
}
