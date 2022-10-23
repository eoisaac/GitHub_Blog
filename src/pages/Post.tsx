import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { Header } from '../components/Header'
import { InfoItem } from '../components/InfoItem'
import { NavigationLink } from '../components/NavigationLink'

export const Post = () => {
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

          <p className="text-base-subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            eos? Voluptatem eius.
          </p>

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
