import { create } from 'react-test-renderer';
import Button from '../components/button';

test('render correctly', () => {
  const handleClick = () => { ''; };
  const tree = create(<Button clickHandler={handleClick} name="" />).toJSON();
  expect(tree).toMatchSnapshot();
});
