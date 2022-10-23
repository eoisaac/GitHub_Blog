import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { InfoItem } from '../components/InfoItem'
import { NavigationLink } from '../components/NavigationLink'

export const Post = () => {
  const { id } = useParams()

  return (
    <>
      <Header>
        <div className="flex flex-col items-start justify-between gap-4 flex-1">
          <div className="w-full flex items-center justify-between gap-4">
            <NavigationLink
              label="Posts"
              url="/"
              icon={<CaretLeft weight="bold" />}
            />

            <NavigationLink
              label="View in GitHub"
              url="https://github.com/eoisaac"
              icon={<ArrowSquareOut weight="bold" />}
              iconRight
              external
            />
          </div>

          <h1 className="text-2xl font-bold text-base-title">
            JavaScript data types and data structures - {id?.toUpperCase()}
          </h1>

          <ul className="flex items-center flex-wrap gap-4">
            <InfoItem
              label="eoisaac"
              icon={<GithubLogo />}
              title="GitHub"
              variant="secondary"
            />
            <InfoItem
              label="Há 1 dia"
              icon={<CalendarBlank />}
              title="Posted"
              variant="secondary"
            />
            <InfoItem
              label="5 comments"
              icon={<ChatCircle />}
              title="Comments"
              variant="secondary"
            />
          </ul>
        </div>
      </Header>

      <main className="h-full flex flex-col gap-4 sm:gap-12"></main>
    </>
  )
}
