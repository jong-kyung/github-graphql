import type { fragment_repository$data } from '@/search/model/__generated__/fragment_repository.graphql'
import { createContext, useContext } from 'react'

interface BookmarkContextType {
  bookmarks: fragment_repository$data[]
  toggleBookmark: (repo: fragment_repository$data) => void
  isBookmarked: (id: string) => boolean
}

export const BookmarkContext = createContext<BookmarkContextType | null>(null)

export const useBookmarkContext = () => {
  const context = useContext(BookmarkContext)
  if (!context) {
    throw new Error('useBookmarkContext must be used within BookmarkProvider')
  }
  return context
}
