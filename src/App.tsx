import RepositorySearchWrapper from '@/search/containers/RepositorySearchWrapper'

function App() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">GitHub Repository Search</h1>
      <RepositorySearchWrapper>
        <RepositorySearchWrapper.Input />
        <RepositorySearchWrapper.Result />
      </RepositorySearchWrapper>
    </main>
  )
}

export default App
