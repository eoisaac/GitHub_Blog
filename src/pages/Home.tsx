import { MagnifyingGlass } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Issue } from '../@types/types'
import { Loading } from '../components/Loading'

import { PostCard } from '../components/PostCard'
import { getIssues } from '../services/axios/requests/githubApi'
import { ProfileContainer } from './components/ProfileContainer'

export const Home = () => {
  const [filterSearch, setFilterSearch] = useState('')

  const {
    data: issuesList,
    isFetching,
    isError,
  } = useQuery<Issue[]>('ISSUES_LIST', getIssues)

  const USER = 'eoisaac'
  const issuesAmount = issuesList?.length
  const hasFilterSearch = filterSearch.length > 0

  const navigate = useNavigate()

  if (isError) {
    navigate('/404')
  }

  const filteredPosts = issuesList?.filter(
    (issue) =>
      issue.title.toLocaleLowerCase().includes(filterSearch) ||
      issue.body.toLocaleLowerCase().includes(filterSearch),
  )

  const handleFilterSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterSearch(event.target.value.toLowerCase())
  }

  const renderPostCards = (postsList: Issue[]) =>
    postsList?.map(
      (issue) =>
        issue.user.login === USER && (
          <PostCard key={issue.number} issue={issue} />
        ),
    )

  return (
    <>
      <ProfileContainer />

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

        {isFetching ? (
          <Loading />
        ) : (
          <ul className="grid sm:grid-cols-2  gap-4 sm:gap-8">
            {hasFilterSearch
              ? renderPostCards(filteredPosts!)
              : renderPostCards(issuesList!)}
          </ul>
        )}
      </main>
    </>
  )
}
