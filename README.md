# 개인 개발 블로그

Notion을 CMS로 사용하는 개인 기술 블로그입니다. Notion 데이터베이스에서 글을 작성하고 `Status`를 발행됨으로 바꾸면, 웹 앱이 Notion API로 목록과 본문을 읽어 보여 줍니다.

## 목표

- Notion에서 글을 쓰고 발행하면 블로그에 반영한다.
- 발행된 글만 공개하고, 초안은 웹에 올리지 않는다.
- 카테고리 필터와 제목 검색으로 글을 찾는다.

## 주요 기능

- Notion 데이터베이스에서 발행 글 목록 조회
- 글 상세 페이지 (페이지 본문 렌더링)
- 카테고리별 필터링
- 검색
- 반응형 레이아웃 (모바일 / 데스크톱)

## 기술 스택

| 구분 | 기술 |
|---|---|
| 프레임워크 | Next.js 16 (App Router, Turbopack), React 19 |
| 언어 | TypeScript |
| CMS | Notion API (`@notionhq/client`) |
| 스타일 | Tailwind CSS v4, shadcn/ui (base-nova 프리셋) |
| 아이콘 | lucide-react |
| 배포 | Vercel |

## 시작하기

Node.js 20.9 이상이 필요합니다.

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

| 명령어 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 실행 |

## Notion 연동

1. Notion에서 블로그용 데이터베이스를 만들고 Internal Integration을 연결합니다.
2. 프로젝트 루트에 `.env.local`을 만들고 아래 값을 넣습니다. 이 파일은 Git에 올리지 않습니다.

```bash
NOTION_TOKEN=secret_...
NOTION_DATABASE_ID=...
```

### 데이터베이스 속성

| 속성명 | 타입 | 설명 |
|---|---|---|
| Title | title | 글 제목 |
| Category | select | 카테고리 |
| Tags | multi_select | 태그 |
| Published | date | 발행일 |
| Status | select | `초안` / `발행됨` |
| (본문) | page content | 페이지 블록. DB 컬럼이 아님 |

웹에는 `Status`가 **발행됨**인 글만 표시합니다.

## 화면

- `/` — 최근 발행 글 목록, 카테고리 필터, 검색
- `/posts/[id]` — 글 상세
- `/categories/[category]` — 카테고리별 목록

## 폴더 구조

```
app/                  # 라우트 (랜딩, /examples, 404, 에러, 로딩)
components/
  ui/                 # shadcn/ui 컴포넌트 (CLI로 생성)
  layout/             # 헤더, 푸터, 모바일 메뉴
  examples/           # 폼, 카운터 예제
config/site.ts        # 사이트 이름, 설명, 메뉴
lib/validations/      # Zod 스키마
stores/               # Zustand 스토어
```

## shadcn/ui

```bash
npx shadcn@latest add <컴포넌트명>
```

이 프로젝트의 shadcn/ui는 Base UI 기반이므로 `asChild` 대신 `render` prop을 사용합니다.
폼은 기존 `Form` 대신 `Field` 컴포넌트와 React Hook Form `Controller`를 사용합니다.
