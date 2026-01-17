import RepositorySearchWrapper from '@/search/containers/RepositorySearchWrapper'
import { BookmarkDropdown } from './search/components/BookmarkDropdown'
import BookmarkProvider from '@/search/components/BookmarkProvider'
import { Suspense } from 'react'
import Loading from '@/shared/ui/Loading'

function App() {
  return (
    <BookmarkProvider>
      <main className="container mx-auto p-4">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">GitHub Repository Search</h1>
          <BookmarkDropdown />
        </div>
        <RepositorySearchWrapper>
          <RepositorySearchWrapper.Input />
          <Suspense fallback={<Loading />}>
            <RepositorySearchWrapper.Result />
          </Suspense>
        </RepositorySearchWrapper>
      </main>
    </BookmarkProvider>
  )
}

export default App
