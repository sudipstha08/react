import { render, screen } from '@testing-library/react'
import { UserList } from '../../components/molecules'

const mockData = [
  {
    id: 1,
    first_name: 'Fletcher',
    last_name: 'McVanamy',
    email: 'mmcvanamy0@e-recht24.de',
    age: 30,
  },
  {
    id: 2,
    first_name: 'Clarice',
    last_name: 'Harrild',
    email: 'charrild1@dion.ne.jp',
    age: 35,
  },
]

test('List renders successfully', () => {
  render(<UserList data={mockData} />)
  expect(screen.getByText(/fletcher/i)).toBeInTheDocument()
  expect(screen.getByText(/Harrild/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/testing/i)).toBeInTheDocument()
})
