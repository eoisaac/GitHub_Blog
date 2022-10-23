import {
  ArrowSquareOut,
  Buildings,
  GithubLogo,
  MagnifyingGlass,
  Users,
} from 'phosphor-react'
import { Header } from '../components/Header'
import { InfoItem } from '../components/InfoItem'
import { Link } from '../components/Link'

export const Home = () => {
  return (
    <div>
      <Header>
        <img
          src="https://github.com/eoisaac.png"
          alt="Isaac Santiago"
          className="w-36 h-36 rounded-lg"
        />

        <div className="flex flex-col items-start justify-between gap-4">
          <div className="w-full flex items-center justify-between gap-4">
            <h1 className="text-base-title text-2xl font-bold">
              Isaac Santiago
            </h1>

            <Link
              label="GitHub"
              url="https://github.com/eoisaac"
              icon={<ArrowSquareOut weight="bold" />}
              iconRight
            />
          </div>

          <p className="text-base-subtitle">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            eos? Voluptatem eius.
          </p>

          <ul className="flex items-center flex-wrap gap-4">
            <InfoItem label="eoisaac" icon={<GithubLogo />} title="GitHub" />
            <InfoItem label="@Zumpy" icon={<Buildings />} title="Company" />
            <InfoItem label="69 followers" icon={<Users />} title="Followers" />
          </ul>
        </div>
      </Header>

      <main className="h-full">
        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h2 className="text-base-subtitle text-lg font-bold">Posts</h2>
            <span className="text-base-span text-sm">10 posts</span>
          </div>
          <label className="w-full">
            <span className="sr-only">Search post</span>

            <div
              className="flex gap-4 px-4 py-3 rounded-md bg-base-input 
              focus-within border border-base-border focus-within:border-primary
              focus-within:text-primary"
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
              />
            </div>
          </label>
        </div>

        <ul>
          <li>
            <article></article>
          </li>
        </ul>
      </main>
    </div>
  )
}
