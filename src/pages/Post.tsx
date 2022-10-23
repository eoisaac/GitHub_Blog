import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useQuery } from 'react-query'
import { PostContent } from '../@types/types'
import { useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { InfoItem } from '../components/InfoItem'
import { NavigationLink } from '../components/NavigationLink'
import { getPost } from '../services/axios/requests/githubApi'
import { formateDateRelativeToNow } from '../utils/formateDateDistanceToNow'
import Markdown from 'markdown-to-jsx'
import { CodeBlock } from '../components/CodeBlock'

export const Post = () => {
  const { number } = useParams()

  const getPostData = () => {
    return getPost(number!)
  }

  const { data: post, isLoading } = useQuery<PostContent>('POST', getPostData)

  const relativeDateDistanceToNow = formateDateRelativeToNow(
    'en-US',
    new Date(),
  )

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
              url={post?.html_url!}
              icon={<ArrowSquareOut weight="bold" />}
              iconRight
              external
            />
          </div>

          <h1 className="text-2xl font-bold text-base-title">{post?.title!}</h1>

          <ul className="flex items-center flex-wrap gap-4">
            <InfoItem
              label={post?.user.login!}
              icon={<GithubLogo />}
              title="GitHub"
              variant="secondary"
            />
            <InfoItem
              label={relativeDateDistanceToNow}
              icon={<CalendarBlank />}
              title="Posted"
              variant="secondary"
            />
            <InfoItem
              label={post?.comments!}
              icon={<ChatCircle />}
              title="Comments"
              variant="secondary"
            />
          </ul>
        </div>
      </Header>
      {/*  prose prose-base   */}
      <main className="h-full flex flex-col gap-4 sm:gap-12">
        <div
          className="DEFAULT flex-1 max-w-none px-4 sm:px-8 DEFAULT-pre:p-4 
        DEFAULT-pre:m-0 DEFAULT-pre:text-base"
        >
          {!isLoading && (
            <Markdown
              options={{
                overrides: {
                  code: {
                    component: CodeBlock,
                  },
                },
              }}
            >
              {post?.body!}
            </Markdown>
          )}
        </div>
      </main>
    </>
  )
}
