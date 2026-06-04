import { gql } from '@apollo/client'

export const GET_PAGES = gql`
  query GetPages($language: String) {
    cpPages(language: $language) {
      _id
      name
      slug
      content
      status
    }
  }
`

export const GET_PAGE = gql`
  query GetPage($slug: String!, $language: String) {
    cpPage(slug: $slug, language: $language) {
      _id
      name
      slug
      content
      status
    }
  }
`

export const GET_POSTS = gql`
  query GetPosts($language: String, $status: String) {
    cpPosts(language: $language, status: $status) {
      _id
      title
      slug
      excerpt
      content
      status
      publishedDate
    }
  }
`

export const GET_MENUS = gql`
  query GetMenus($language: String, $kind: String) {
    cpMenus(language: $language, kind: $kind) {
      _id
      label
      url
      order
      kind
    }
  }
`
