import React from 'react'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'

export const Header: React.FC = async () => {
  return (
    <header className="fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div>
        <a href="/">
          <IconLogo className={cn('w-5 h-5')} />
          <span className="sr-only">Patooworld</span>
        </a>
      </div>
      <script async src="https://cse.google.com/cse.js?cx=b25bfdb1d1f084216">
</script>
<div class="gcse-search"></div>
      </div>
    </header>
  )
}

export default Header
