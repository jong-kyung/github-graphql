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
      className="size-fit cursor-pointer"
      variant="ghost"
      size="icon"
      onClick={handleBookmarkClick}>
      <Bookmark
        className={isActive ? 'text-yellow-500' : ''}
        fill={isActive ? 'currentColor' : 'none'}
      />
    </Button>
  )
}

export default BookmarkButton
