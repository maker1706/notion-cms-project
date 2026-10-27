// 사이트 공통 설정 (헤더/푸터/metadata에서 함께 사용)
export const siteConfig = {
  name: "Next.js 스타터킷",
  description:
    "Next.js 16, Tailwind CSS v4, shadcn/ui로 웹 개발을 빠르게 시작하세요.",
  navItems: [
    { title: "홈", href: "/" },
    { title: "예제", href: "/examples" },
  ],
} as const;

export type NavItem = (typeof siteConfig.navItems)[number];
