import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  MagnifyingGlass,
  Users,
} from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'
import { Issue, Profile } from '../@types/types'
import { Header } from '../components/Header'
import { InfoItem } from '../components/InfoItem'
import { NavigationLink } from '../components/NavigationLink'
import { PostCard } from '../components/PostCard'
import { getIssues, getUserProfile } from '../services/axios/requests/githubApi'

export const Home = () => {
  const { data: profile } = useQuery<Profile>('PROFILE', getUserProfile)
  const { data: issuesList } = useQuery<Issue[]>('ISSUES_LIST', getIssues)

  const [filterSearch, setFilterSearch] = useState('')
  const hasFilterSearch = filterSearch.length > 0

  const filteredPosts = issuesList?.filter(
    (issue) =>
      issue.title.toLocaleLowerCase().includes(filterSearch) ||
      issue.body.toLocaleLowerCase().includes(filterSearch),
  )

  const issuesAmount = issuesList?.length

  const handleFilterSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterSearch(event.target.value.toLowerCase())
  }

  return (
    <>
      <Header>
        <img
          src={profile?.avatar_url}
          alt="Isaac Santiago"
          className="w-36 h-36 rounded-lg"
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

      <main className="flex flex-col gap-4 sm:gap-12">
        <div
          className="w-full flex flex-col gap-3 sticky top-0 inset-x-0 
        bg-base-background py-4"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-base-subtitle text-lg font-bold">Posts</h2>
            <span className="text-base-span text-sm">
              {`${issuesAmount} posts`}
            </span>
          </div>
          <label className="w-full">
            <span className="sr-only">Search post</span>

            <div
              className="flex gap-4 px-4 py-3 rounded-md bg-base-input 
              text-base-label border border-base-border 
              focus-within:border-primary focus-within:text-primary transition 
              ease-in-out duration-200"
            >
              <span
                className="flex items-center text-inherit"
                title="Search post"
              >
                <MagnifyingGlass size={20} />
              </span>
              <input
                type="text"
                placeholder="Search post"
                className="w-full text-base-text placeholder-base-label 
                bg-transparent focus:shadow-none"
                onChange={handleFilterSearch}
              />
            </div>
          </label>
        </div>

        <ul className="grid sm:grid-cols-2  gap-4 sm:gap-8">
          {hasFilterSearch
            ? filteredPosts?.map((issue) => (
                <PostCard key={issue.number} issue={issue} />
              ))
            : issuesList?.map((issue) => (
                <PostCard key={issue.number} issue={issue} />
              ))}
        </ul>
      </main>
    </>
  )
}
