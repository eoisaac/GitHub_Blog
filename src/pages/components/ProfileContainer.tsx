import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useQuery } from 'react-query'
import { Profile } from '../../@types/types'
import { InfoItem } from '../../components/InfoItem'
import { NavigationLink } from '../../components/NavigationLink'
import { getUserProfile } from '../../services/axios/requests/githubApi'
import { Header } from './Header'

export const ProfileContainer = () => {
  const { data: profile, isFetching } = useQuery<Profile>(
    'PROFILE',
    getUserProfile,
  )

  return (
    <Header isLoading={isFetching}>
      <img
        src={profile?.avatar_url}
        alt="Isaac Santiago"
        className="w-36 h-36 rounded-lg"
        loading="lazy"
      />

      <div className="h-full w-full flex flex-col items-start justify-between gap-4">
        <div className="w-full flex items-center justify-between gap-4">
          <h1 className="text-base-title text-2xl font-bold">
            {profile?.name}
          </h1>

          <NavigationLink
            label="GitHub"
            url={profile?.html_url!}
            icon={<ArrowSquareOut weight="bold" />}
            iconRight
            external
          />
        </div>

        <p className="text-base-subtitle">{profile?.bio}</p>

        <ul className="flex items-center flex-wrap gap-4 overflow-y-auto">
          <InfoItem
            label={profile?.login!}
            icon={<GithubLogo />}
            title="GitHub"
          />
          {profile?.company && (
            <InfoItem
              label={profile.company}
              icon={<Buildings />}
              title="Company"
            />
          )}
          <InfoItem
            label={`${profile?.followers} followers`}
            icon={<Users />}
            title="Followers"
          />
        </ul>
      </div>
    </Header>
  )
}
