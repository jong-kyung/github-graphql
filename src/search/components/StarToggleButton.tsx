// @/search/components/StarToggleButton.tsx
import { Button } from '@/shared/ui/button'
import { Star } from 'lucide-react'

interface StarToggleButtonProps {
  isStarred: boolean
  onClick: (e: React.MouseEvent) => void
  className?: string
}

const StarToggleButton = ({
  isStarred,
  onClick,
  className,
}: StarToggleButtonProps) => {
  return (
    <Button
      size="sm"
      variant={isStarred ? 'default' : 'outline'}
      onClick={onClick}
      className={className}>
      <Star
        className="mr-2 h-4 w-4"
        fill={isStarred ? 'currentColor' : 'none'}
      />
      {isStarred ? 'Unstar' : 'Star'}
    </Button>
  )
}

export default StarToggleButton
