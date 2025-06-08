import { useQuery } from '@tanstack/react-query'
import request from 'graphql-request'
import { graphql } from '@/query/gql'

export const FilmFragment = graphql(`
  fragment FilmItem on Film {
    id
    title
    releaseDate
    producers
  }
`)

export const fetchFilms = () => {
  const allFilmsWithVariablesQueryDocument = graphql(`
    query allFilmsWithVariablesQuery($first: Int!) {
      allFilms(first: $first) {
        edges {
          node {
            ...FilmItem
          }
        }
      }
    }
  `)

  return useQuery({
    queryKey: ['films'],
    queryFn: () =>
      request(
        'https://graphql.org/graphql/',
        allFilmsWithVariablesQueryDocument,
        {
          first: 10,
        },
      ),
  })
}
