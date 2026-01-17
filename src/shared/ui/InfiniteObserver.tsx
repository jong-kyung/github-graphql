import { useEffect, useRef } from 'react'
import type { LoadMoreFn } from 'react-relay/relay-hooks/useLoadMoreFunction'
import type { OperationType } from 'relay-runtime'

interface InfinityObserverProps {
  hasNext: boolean
  loadNext: LoadMoreFn<OperationType>
  isFetchingNextPage: boolean
}

const InfiniteObserver = ({
  hasNext,
  loadNext,
  isFetchingNextPage,
}: InfinityObserverProps) => {
  const observerRef = useRef<HTMLDivElement>(null)
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    if (!observerRef.current) return
    intersectionObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasNext && !isFetchingNextPage) {
            loadNext(10)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    intersectionObserverRef.current.observe(observerRef.current)
  }, [hasNext, loadNext, isFetchingNextPage])

  useEffect(() => {
    return () => {
      if (!intersectionObserverRef.current) return
      intersectionObserverRef.current.disconnect()
      intersectionObserverRef.current = null
    }
  }, [])

  return <div className="h-px w-full" ref={observerRef} />
}

InfiniteObserver.displayName = 'InfiniteObserver'

export default InfiniteObserver
