import {
  ArrowSquareOut,
  CalendarBlank,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { PostContent } from '../../@types/types'
import { InfoItem } from '../../components/InfoItem'
import { NavigationLink } from '../../components/NavigationLink'
import { formateDateRelativeToNow } from '../../utils/formateDateDistanceToNow'

interface PostInfoProps {
  post: PostContent
}

export const PostInfo = ({ post }: PostInfoProps) => {
  const relativeDateDistanceToNow = formateDateRelativeToNow(
    'en-US',
    new Date(post.created_at),
  )

  return (
    <div className="flex flex-col items-start justify-between gap-4 flex-1">
      <div className="w-full flex items-center justify-between gap-4">
        <NavigationLink
          label="Posts"
          url="/"
          icon={<CaretLeft weight="bold" />}
        />

        <NavigationLink
          label="View in GitHub"
          url={post.html_url}
          icon={<ArrowSquareOut weight="bold" />}
          iconRight
          external
        />
      </div>

      <h1 className="text-2xl font-bold text-base-title">{post.title}</h1>

      <ul className="flex items-center flex-wrap gap-4">
        <InfoItem
          label={post?.user.login}
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
          label={post.comments}
          icon={<ChatCircle />}
          title="Comments"
          variant="secondary"
        />
      </ul>
    </div>
  )
}
