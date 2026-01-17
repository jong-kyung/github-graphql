import { formatDistanceToNow } from 'date-fns'

export const formatDate = (dateString: string | undefined | null) => {
  if (!dateString) return 'N/A'
  try {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true })
  } catch (error) {
    console.error('Invalid date:', dateString, error)
    return 'Invalid date'
  }
}
