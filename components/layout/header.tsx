import Link from "next/link"
import { Rocket } from "lucide-react"

import { MobileNav } from "@/components/layout/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { siteConfig } from "@/config/site"

// 상단 고정 헤더 (데스크톱: 가로 메뉴, 모바일: 햄버거 메뉴)
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
        <MobileNav />
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Rocket className="size-5" />
          <span>{siteConfig.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
