import React from 'react';
import { shallow } from 'enzyme';
import Weapon from '../Weapon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	shallow(<Weapon />);
});

it('<Weapon />', () => {
	const wrapper = shallow(<Weapon />);
	expect(wrapper).toMatchSnapshot();
});
