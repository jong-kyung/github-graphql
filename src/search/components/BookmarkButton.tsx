import type { fragment_repository$data } from '@/search/model/__generated__/fragment_repository.graphql'
import { useBookmarkContext } from '@/search/model/BookmarkContext'
import { Button } from '@/shared/ui/button'
import { Bookmark } from 'lucide-react'
import type { MouseEvent } from 'react'

interface BookmarkButtonProps {
  bookMarkData: fragment_repository$data
}

const BookmarkButton = ({ bookMarkData }: BookmarkButtonProps) => {
  const { isBookmarked, toggleBookmark } = useBookmarkContext()

  const isActive = isBookmarked(bookMarkData.id)

  const handleBookmarkClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    toggleBookmark(bookMarkData)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleBookmarkClick}
      className="text-gray-500 hover:text-gray-700">
      <Bookmark
        className={isActive ? 'text-yellow-500' : ''}
        fill={isActive ? 'currentColor' : 'none'}
      />
    </Button>
  )
}

export default BookmarkButton
