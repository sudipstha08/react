import { QueryCache, QueryClient } from '@tanstack/react-query'
export const queryCache = new QueryCache()

/**
 * Create a new query client instance
 */
const queryClient = new QueryClient({
  queryCache: queryCache,
  mutationCache: undefined,
  defaultOptions: {
    queries: {
      staleTime: 4 * 60 * 1000,
    },
    mutations: {
      onError(error, _, __) {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log('Mutation Error: ', error)
        }
      },
    },
  },
})

export { queryClient }
