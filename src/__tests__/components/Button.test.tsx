// src/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import {Button} from '../../components/atoms/Button';

/**
 * Unit testing
 * 
 */
test('renders Button with correct label', () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn();
  render(<Button label="Click Me" onClick={handleClick} />);
  fireEvent.click(screen.getByText('Click Me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

/**
 * Snapshot testing
 * Snapshot testing is generally performed for the testing purposes of the user interface. While running the Snapshot test, Jest creates a series of components compared with the previously saved snapshot. If the snapshot matches the previous one, the test passes otherwise, the test fails. 
 */
test('renders correctly', () => {
  const handleClick = jest.fn();
  const component = renderer.create(<Button label='Click me' onClick={handleClick} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  });