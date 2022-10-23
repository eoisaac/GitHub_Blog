export interface Profile {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: string
}

export interface Issue {
  number: number
  created_at: string
  title: string
  body: string
}

export interface PostContent extends Issue {
  user: {
    login: string
  }
  html_url: string
  comments: string
}
