"use client";

import { Minus, Plus, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCounterStore } from "@/stores/counter-store";

// Zustand 상태 관리 예제
export function CounterDemo() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Zustand 카운터</CardTitle>
        <CardDescription>전역 상태를 간단하게 관리합니다.</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center gap-3">
        <Button variant="outline" size="icon" onClick={decrement} aria-label="감소">
          <Minus className="size-4" />
        </Button>
        <span className="min-w-12 text-center text-2xl font-bold tabular-nums">
          {count}
        </span>
        <Button variant="outline" size="icon" onClick={increment} aria-label="증가">
          <Plus className="size-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={reset} aria-label="초기화">
          <RotateCcw className="size-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
