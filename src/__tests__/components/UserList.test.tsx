import { render, screen } from '@testing-library/react'
import { UserList } from '../../components/molecules'
import userEvent from "@testing-library/user-event";

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
  render(<UserList data={mockData} handleClick={()=>{}}/>)
  expect(screen.getByText(/fletcher/i)).toBeInTheDocument()
  expect(screen.getByText(/Clarice/i)).toBeInTheDocument()
  expect(screen.getByPlaceholderText(/testing/i)).toBeInTheDocument()
})

test("Email link click handler called", async () => {
  const mockHandleClick = jest.fn();
  render(<UserList 
              data={mockData} 
              handleClick = {mockHandleClick}
        />)
  await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i));
  expect(mockHandleClick).toHaveBeenCalled();

  const submitButton = screen.getByRole('button', { name: /submit/i });

  expect(submitButton).toBeInTheDocument()
})