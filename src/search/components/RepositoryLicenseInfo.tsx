import type { fragment_repository$data } from '@/search/model/__generated__/fragment_repository.graphql'
import { Scale } from 'lucide-react'

interface RepositoryLicenseInfoProps {
  licenseInfo: fragment_repository$data['licenseInfo']
}

const RepositoryLicenseInfo = ({ licenseInfo }: RepositoryLicenseInfoProps) => {
  if (!licenseInfo) return null

  return (
    <div className="flex items-center">
      <Scale className="mr-1.5 h-4 w-4" />
      <span>{licenseInfo.name}</span>
    </div>
  )
}

export default RepositoryLicenseInfo
