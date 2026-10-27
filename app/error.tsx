"use client";

import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-4 py-24 text-center">
      <p className="text-xl font-bold">문제가 발생했습니다.</p>
      <p className="text-muted-foreground">잠시 후 다시 시도해주세요.</p>
      <Button onClick={reset}>다시 시도</Button>
    </div>
  );
}
