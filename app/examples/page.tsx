import type { Metadata } from "next";

import { ContactForm } from "@/components/examples/contact-form";
import { CounterDemo } from "@/components/examples/counter-demo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "예제",
};

export default function ExamplesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">컴포넌트 예제</h1>
        <p className="mt-2 text-muted-foreground">
          스타터킷에 포함된 UI, 폼, 상태 관리 예제입니다.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>버튼 · 배지</CardTitle>
            <CardDescription>shadcn/ui 기본 컴포넌트입니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Button>기본</Button>
            <Button variant="secondary">보조</Button>
            <Button variant="outline">외곽선</Button>
            <Button variant="ghost">고스트</Button>
            <Button variant="destructive">삭제</Button>
            <Badge>Badge</Badge>
            <Badge variant="outline">Outline</Badge>
          </CardContent>
        </Card>

        <CounterDemo />
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
