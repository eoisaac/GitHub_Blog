import { useNavigate } from 'react-router-dom'
import { Issue } from '../@types/types'

interface PostCartProps {
  issue: Issue
}

export const PostCard = ({ issue }: PostCartProps) => {
  const navigate = useNavigate()

  const handleNavigateToPostPage = () => {
    navigate(`posts/${issue.id}`)
  }

  return (
    <li
      className="w-full h-[260px] cursor-pointer overflow-hidden 
      border-base-post border-2 hover:border-base-label
      hover:transition hover:ease-in-out hover:duration-200 rounded-xl"
      onClick={handleNavigateToPostPage}
    >
      <article
        className="w-full h-full flex flex-col gap-4 sm:gap-8 
        p-4 sm:p-8 bg-base-post"
      >
        <header className="w-full flex items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-base-title">{issue.title}</h3>
          <div className="whitespace-nowrap">Há 1 dia</div>
        </header>
        <p className="flex-1 overflow-hidden text-ellipsis">{issue.body}</p>
      </article>
    </li>
  )
}
