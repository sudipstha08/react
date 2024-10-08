import renderer from 'react-test-renderer'
// cypress and jest both declares types for expect. Inorder to avoid conflict import expect manually
import { expect } from '@jest/globals'
import { LinkComponent } from '../Link'

it('changes the class when hovered', () => {
  const component = renderer.create(
    <LinkComponent page="http://www.facebook.com">Facebook</LinkComponent>,
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseEnter()
  })
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  renderer.act(() => {
    tree.props.onMouseLeave()
  })
  // re-rendering
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
