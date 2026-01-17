import type { fragment_repository$data } from '@/search/model/__generated__/fragment_repository.graphql'

interface RepositoryLanguageInfoProps {
  primaryLanguage: fragment_repository$data['primaryLanguage']
}

const RepositoryLanguageInfo = ({
  primaryLanguage,
}: RepositoryLanguageInfoProps) => {
  if (!primaryLanguage) return null

  return (
    <div className="flex items-center">
      <span
        className="mr-1.5 inline-block h-3 w-3 rounded-full"
        style={{
          backgroundColor: primaryLanguage.color ?? '#ccc',
        }}
      />
      <span>{primaryLanguage.name}</span>
    </div>
  )
}

export default RepositoryLanguageInfo
