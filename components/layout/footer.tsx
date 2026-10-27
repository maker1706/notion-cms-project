import { siteConfig } from "@/config/site"

// 하단 푸터
export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-muted-foreground">
        {siteConfig.name} · Next.js, Tailwind CSS, shadcn/ui
      </div>
    </footer>
  )
}
