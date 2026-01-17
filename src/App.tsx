import { Suspense } from 'react'

import RepositorySearchWrapper from '@/search/containers/RepositorySearchWrapper'
import Loading from '@/shared/ui/Loading'

function App() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">GitHub Repository Search</h1>
      <Suspense fallback={<Loading />}>
        <RepositorySearchWrapper>
          <RepositorySearchWrapper.Input />
          <RepositorySearchWrapper.Result />
        </RepositorySearchWrapper>
      </Suspense>
    </main>
  )
}

export default App
