import Link from "next/link";
import { Layers, Palette, ShieldCheck, Zap, type LucideIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

// 랜딩 페이지에 노출할 기술 스택 소개
const features: Feature[] = [
  {
    icon: Zap,
    title: "Next.js 16 App Router",
    description: "Turbopack 기반의 빠른 개발 환경과 React 19를 제공합니다.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "설정 파일 없이 CSS만으로 테마를 관리합니다.",
  },
  {
    icon: Layers,
    title: "shadcn/ui + lucide",
    description: "복사해서 쓰는 컴포넌트와 아이콘을 바로 사용할 수 있습니다.",
  },
  {
    icon: ShieldCheck,
    title: "Zustand · RHF · Zod",
    description: "상태 관리와 타입 안전한 폼 검증 예제를 포함합니다.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-2xl text-muted-foreground sm:text-lg">
          {siteConfig.description}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/examples" className={cn(buttonVariants({ size: "lg" }))}>
            예제 보기
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, description }) => (
          <Card key={title}>
            <CardHeader>
              <Icon className="mb-2 size-6" />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
