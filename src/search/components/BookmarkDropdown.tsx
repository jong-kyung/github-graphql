import { Button } from '@/shared/ui/button'
import { Bookmark } from 'lucide-react'
import { useBookmarkContext } from '@/search/model/BookmarkContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'

export const BookmarkDropdown = () => {
  const { bookmarks } = useBookmarkContext()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-gray-500 hover:text-gray-700">
          <Bookmark />
          Bookmark
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        {bookmarks.length === 0 && (
          <DropdownMenuItem disabled>No bookmarks yet.</DropdownMenuItem>
        )}
        {bookmarks.map((repo) => {
          return (
            <DropdownMenuItem key={repo.id}>
              <a href={repo.url} target="_blank" rel="noopener noreferrer">
                {repo.owner?.login}/{repo.name}
              </a>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
