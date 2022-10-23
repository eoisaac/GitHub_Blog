import { useNavigate } from 'react-router-dom'

export const PostCard = () => {
  const navigate = useNavigate()

  const handleNavigateToPostPage = () => {
    navigate('posts/postID')
  }

  return (
    <li
      className="w-full h-[260px] cursor-pointer overflow-hidden 
      border-transparent border-2 hover:border-base-label
      hover:transition hover:ease-in-out hover:duration-200 rounded-xl"
      onClick={handleNavigateToPostPage}
    >
      <article
        className="w-full h-full flex flex-col gap-4 sm:gap-8 
        p-4 sm:p-8 bg-base-post"
      >
        <header className="w-full flex items-center justify-between gap-4">
          <h3 className="text-xl font-bold text-base-title">
            JavaScript data types and data structures
          </h3>
          <div className="whitespace-nowrap">Há 1 dia</div>
        </header>
        <p className="flex-1 overflow-hidden text-ellipsis">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types: let foo = 42; // foo is now a number
          foo = bar; // foo is now a string foo = true; // foo is now a boolean
        </p>
      </article>
    </li>
  )
}
