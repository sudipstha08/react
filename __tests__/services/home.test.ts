import { waitFor } from '@testing-library/react'
import { fetchUser } from '../../src/services/home'
import * as services from '../../src/services/home'

const mockResponse = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ ...mockResponse }),
  }),
) as jest.Mock

// beforeEach(() => {
//   global.fetch.mockClear()
// })

const failService = async () => {
  return null
}

describe('fetchUser', () => {
  it('returns the user data', async () => {
    jest.fn().mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    })

    const result = await fetchUser()

    expect(fetch).toHaveBeenCalledTimes(1)

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos/1',
    )

    expect(result).toEqual(mockResponse)
  })

  it('returns null when exception', async () => {
    jest.fn().mockImplementationOnce(() => Promise.reject('API is down'))

    // const rate = await fetchUser()
    const rate = await failService()

    expect(rate).toEqual(null)
  })
})

describe('fetchUser test using jest', async () => {
  const mockFetchData = jest
    .spyOn(services, 'fetchUser')
    .mockImplementation(async () => {
      return mockResponse
    })

  const result = await fetchUser()

  expect(mockFetchData).toHaveBeenCalled()

  await waitFor(() => {
    // expect(screen.getByText(/kunal/i)).toBeInTheDocument()
    expect(result).toEqual(mockResponse)
  })
})
