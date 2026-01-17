import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card'
import { Star, GitFork } from 'lucide-react'
import { formatDate } from '@/shared/utils/date'
import { useFragment } from 'react-relay'
import { repositoryCardFragment } from '@/search/model/fragment'
import type { fragment_repository$key } from '@/search/model/__generated__/fragment_repository.graphql'
import BookMarkButton from '@/search/components/BookmarkButton'
import RepositoryTopicList from '@/search/components/RepositoryTopicList'
import RepositoryLanguageInfo from '@/search/components/RepositoryLanguageInfo'
import RepositoryLicenseInfo from '@/search/components/RepositoryLicenseInfo'

interface RepositoryCardProps {
  repository: fragment_repository$key
}

const RepositoryCard = ({ repository }: RepositoryCardProps) => {
  const repositoryInfo = useFragment(repositoryCardFragment, repository)

  return (
    <Card className="transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle>
            <a
              href={repositoryInfo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline">
              {repositoryInfo.owner?.login}/{repositoryInfo.name}
            </a>
          </CardTitle>
          <BookMarkButton bookMarkData={repositoryInfo} />
        </div>
        <CardDescription className="pt-2">
          {repositoryInfo.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <RepositoryTopicList
          nodeList={repositoryInfo.repositoryTopics?.nodes}
        />
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <RepositoryLanguageInfo
            primaryLanguage={repositoryInfo.primaryLanguage}
          />
          <div className="flex items-center">
            <Star className="mr-1.5 h-4 w-4" />
            <span>{repositoryInfo.stargazerCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center">
            <GitFork className="mr-1.5 h-4 w-4" />
            <span>{repositoryInfo.forkCount?.toLocaleString()}</span>
          </div>
          <RepositoryLicenseInfo licenseInfo={repositoryInfo.licenseInfo} />
          <span>Updated {formatDate(repositoryInfo.updatedAt)}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default RepositoryCard
