import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('should call the callback with {foo: 123, bar: 456}', () => {
  let result;
  let cb = r => {result = r};
  shallow(<App cb={cb} />);
  expect(result).toEqual({foo: 123, bar: 456});
});
