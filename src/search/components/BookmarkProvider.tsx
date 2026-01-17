import type { fragment_repository$data } from '@/search/model/__generated__/fragment_repository.graphql'
import { BookmarkContext } from '@/search/model/BookmarkContext'
import { useEffect, useState, type ReactNode } from 'react'

const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<fragment_repository$data[]>(() => {
    try {
      const stored = localStorage.getItem('bookmarked_repos')
      return stored ? JSON.parse(stored) : []
    } catch (e) {
      console.error('Failed to parse bookmarks', e)
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('bookmarked_repos', JSON.stringify(bookmarks))
  }, [bookmarks])

  const toggleBookmark = (repo: fragment_repository$data) => {
    setBookmarks((prev) => {
      const exists = prev.some((item) => item.id === repo.id)
      if (exists) {
        return prev.filter((item) => item.id !== repo.id)
      } else {
        return [...prev, repo]
      }
    })
  }

  const isBookmarked = (id: string) => {
    return bookmarks.some((repo) => repo.id === id)
  }

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  )
}

export default BookmarkProvider
