# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev     # 개발 서버 (Turbopack, http://localhost:3000)
npm run build   # 프로덕션 빌드 (타입 체크 포함)
npm run start   # 프로덕션 서버
npm run lint    # ESLint (eslint-config-next)
```

- 테스트 러너는 설정되어 있지 않습니다.
- Node.js 20.9 이상이 필요합니다.

## Next.js 버전 주의

이 프로젝트는 **Next.js 16 + React 19**이며 기존 지식과 다른 breaking change가 있습니다. 코드를 작성하기 전에 `node_modules/next/dist/docs/`(`01-app` 등)의 관련 가이드를 먼저 읽으세요. (`AGENTS.md`는 `next dev`가 자동으로 다시 생성합니다.)

- `next.config.ts`에서 `cacheComponents: true`, `partialPrefetching: true`가 켜져 있습니다. 데이터 페칭/캐싱/동적 API 사용 방식이 기존 App Router와 다르므로 관련 문서를 확인하세요.
- 레이아웃/페이지 props 타입은 전역 헬퍼를 사용합니다 (예: `LayoutProps<"/">`, `app/layout.tsx`).

## 아키텍처

App Router 기반 스타터킷이며, `@/*` 경로 별칭은 프로젝트 루트(`./*`)를 가리킵니다.

- `app/layout.tsx`: 루트 레이아웃. `ThemeProvider`(next-themes, class 방식, 기본값 system) → `Header` / `main` / `Footer` / `Toaster` 순으로 구성하며 `metadata`는 `config/site.ts`의 `siteConfig`에서 가져옵니다.
- `config/site.ts`: 사이트 이름, 설명, `navItems`의 단일 출처. 헤더, 모바일 메뉴, 푸터, metadata가 함께 참조하므로 메뉴 추가는 여기서 합니다.
- `components/ui/`: shadcn/ui가 생성한 컴포넌트 (직접 수정보다 CLI로 추가/갱신).
- `components/layout/`, `components/examples/`: 레이아웃 및 예제 컴포넌트. `/examples` 페이지(`app/examples/page.tsx`)가 UI, Zustand, 폼 예제를 모아서 보여줍니다.
- `lib/validations/`: Zod 스키마와 `z.infer` 타입. 폼 컴포넌트가 `zodResolver`로 연결합니다.
- `stores/`: Zustand 스토어 (클라이언트 컴포넌트에서만 사용).
- 라우트 보조 파일: `app/error.tsx`, `app/loading.tsx`, `app/not-found.tsx`.

## shadcn/ui 규칙 (base-nova 프리셋)

- 컴포넌트 추가: `npx shadcn@latest add <컴포넌트명>`
- **Radix가 아닌 Base UI(`@base-ui/react`) 기반**이므로 `asChild` 대신 `render` prop을 사용합니다.
- 폼은 기존 `Form` 컴포넌트가 아니라 `Field`/`FieldGroup`/`FieldLabel`/`FieldError`와 React Hook Form의 `Controller`를 조합합니다 (`components/examples/contact-form.tsx` 참고).
- Tailwind CSS v4: `tailwind.config` 파일이 없으며 테마 토큰은 `app/globals.css`의 `@theme inline`과 CSS 변수로 관리합니다. 다크 모드는 `.dark` 클래스 기반 (`@custom-variant dark`).

## 프로젝트 컨벤션

- 코드 주석, 커밋 메시지, 문서는 한국어로 작성하고 변수명/함수명은 영어를 사용합니다.
- 들여쓰기 2칸, 변수/함수는 camelCase, 컴포넌트는 PascalCase.
- `any` 타입 사용 금지, 컴포넌트는 분리하여 재사용, 반응형 필수.
- 파일명은 kebab-case (`contact-form.tsx`, `counter-store.ts`).
