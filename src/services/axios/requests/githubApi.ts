import { github } from '../instances'

const GITHUB = {
  USER: 'eoisaac',
  REPOSITORY: 'GitHub_Blog',
}

export const getUserProfile = async () => {
  const response = await github.get(`/users/${GITHUB.USER}`)

  return response.data
}

export const getAllIssues = async () => {
  const response = await github.get(
    `/repos/${GITHUB.USER}/${GITHUB.REPOSITORY}/issues`,
  )

  return response.data
}

export const getIssue = async (id: string) => {
  const response = await github.get(
    `/repos/${GITHUB.USER}/${GITHUB.REPOSITORY}/issues/${id}`,
  )

  return response.data
}
