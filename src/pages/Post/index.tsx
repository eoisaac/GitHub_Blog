import { useQuery } from 'react-query'
import { PostContent } from '../../@types/types'
import { useParams, useNavigate } from 'react-router-dom'
import { getPost } from '../../services/axios/requests/githubApi'
import Markdown from 'markdown-to-jsx'
import { CodeBlock } from '../../components/CodeBlock'
import { PostInfo } from './components/PostInfo'
import { Loading } from '../../components/Loading'

export const Post = () => {
  const { number } = useParams()
  const navigate = useNavigate()

  const getPostData = () => {
    return getPost(number!)
  }

  const {
    data: post,
    isFetching,
    isError,
  } = useQuery<PostContent>('POST', getPostData)

  if (isError) {
    navigate('/404')
  }

  if (!post || isFetching) {
    return <Loading />
  }

  return (
    <>
      <PostInfo post={post} isLoading={isFetching} />
      <main className="h-full flex flex-col gap-4 sm:gap-12">
        <div
          className="DEFAULT flex-1 max-w-none px-4 sm:px-8 DEFAULT-pre:p-4 
          DEFAULT-pre:m-0 DEFAULT-pre:text-base"
        >
          <Markdown
            options={{
              overrides: {
                code: {
                  component: CodeBlock,
                },
              },
            }}
          >
            {post.body}
          </Markdown>
        </div>
      </main>
    </>
  )
}
