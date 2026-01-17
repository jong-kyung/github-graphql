## GitHub Repository Search with Relay
GitHub GraphQL API와 Relay를 활용하여 개발한 레포지토리 검색 서비스입니다.

### 🚀 프로젝트 실행 방법
이 프로젝트는 `GitHub Personal Access Token`이 필요합니다.

**1. 패키지 설치**
```bash
pnpm install
```

**2. 환경 변수 설정**

최상위 루트에 `.env.example` 파일을 생성하고, GitHub Access Token을 입력해주세요.

```text
VITE_GITHUB_TOKEN=your_token
VITE_GRAPHQL_API_URL=https://api.github.com/graphql
```

**3. Relay Compiler 실행 & 개발 서버 시작**

```bash
# Relay 컴파일러 실행
pnpm relay

# GitHub GraphQL의 최신 스키마 다운로드
pnpm update-schema

# 개발 서버 실행
pnpm run dev
```

### 🛠 사용 기술 스택
*   **Core**: React, TypeScript, Vite
*   **Data Fetching**: Relay (GraphQL)
*   **Styling**: Tailwind CSS, Shadcn UI
*   **Form Management & Validation**:
    *   React Hook Form
    *   Zod

### ✨ 구현 기능 목록
*   **레포지토리 검색**
    *   GitHub GraphQL `search` 쿼리를 활용한 레포지토리 검색
    *   검색어 입력 시 Relay Query Fetching
*   **무한 스크롤**
    *   `usePaginationFragment`와 `IntersectionObserver`를 결합하여 구현
    *   Cursor-based Pagination 적용
*   **Star 토글 기능**
    *   `addStar`, `removeStar` 뮤테이션 구현
    *   Optimistic Update 적용: 서버 응답을 기다리지 않고 UI를 즉시 업데이트하여 사용자 경험 향상
*   **로컬 북마크**
    *   API와 무관하게 로컬 스토리지(LocalStorage)를 활용한 북마크 기능
    *   Context API를 사용하여 앱 전역 상태 동기화

### 📝 어려웠던 점과 해결 과정
1.  **Relay와 GraphQL 스키마에 대한 이해 부족**
    *   **문제**: REST API와 달리, Relay는 컴파일러가 미리 데이터 의존성을 분석해야 하며, 이를 위해 정확한 GraphQL 스키마 파일(`schema.graphql`)이 로컬에 필요했습니다. 초기 설정 단계에서 스키마를 다운로드하고 환경을 구성하는 데 어려움이 많았습니다. 특히 `relayjs`의 사용법과 `graphQL` 스키마 자체에 대한 이해가 부족하여 시작에 난항을 겪었습니다.
    *   **해결**: GitHub GraphQL 스키마를 다운로드하는 스크립트(`updateSchema.ts`)를 작성하여 최신 스키마를 동기화했습니다. 또한, Relay의 핵심인 Fragment을 이해하고, 컴포넌트별로 필요한 데이터를 Fragment로 쪼개어 관리함으로써 유지보수성을 높였습니다. `relayjs` 공식 문서를 통해 개념을 학습하고, 다양한 예제를 참고하여 스키마 정의 및 쿼리 작성에 익숙해지는 시간을 가졌습니다.

2.  **Suspense 동작과 디버깅의 어려움**
    *   **문제**: 데이터를 불러오는 동안 화면이 갑자기 사라지거나 레이아웃이 깨지는 현상이 발생했습니다. 개발자 도구로 확인해보니 컴포넌트가 렌더링되지 않는 것처럼 보여, CSS `display: none` 문제인지 로직 에러인지 파악하는 데 시간을 많이 소요했습니다. 특히 `relayjs`의 `Suspense` 동작 방식에 대한 이해 부족으로 디버깅이 어려웠습니다.
    *   **해결**: Relay의 `useLazyLoadQuery`가 React `Suspense`를 트리거한다는 점을 파악했습니다. 데이터가 로딩되는 동안 상위 `Suspense`의 `fallback`이 보여져야 하는데, `Suspense` 경계 설정이 적절하지 않아 발생한 문제였습니다. 이를 해결하기 위해 `Suspense`를 컴포넌트 외부로 분리하여 로딩 상태를 명시적으로 제어하고 응집도를 높였습니다.

3.  **무한 스크롤(Pagination) 중복 호출 이슈**
    *   **문제**: `InfiniteObserver`가 화면 하단에 닿았을 때, 다음 데이터를 불러오는 API 요청이 수십 번씩 중복으로 발생하는 Infinite Fetching 현상이 발생했습니다. `usePaginationFragment`의 올바른 사용법을 숙지하지 못했고, `IntersectionObserver`와의 연동 과정에서 발생한 문제였습니다.
    *   **해결**:
        *   **상태 체크 추가**: `isLoadingNext` 상태를 Observer 로직에 추가하여, 이미 로딩 중일 때는 `loadNext`를 호출하지 않도록 막았습니다.
        *   **Cleanup 처리**: `useEffect` 내에서 `Observer.disconnect()`를 제대로 처리하지 않아 이벤트 리스너가 중첩되는 문제를 수정했습니다.