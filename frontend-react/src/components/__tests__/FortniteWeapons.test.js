import React from 'react';
import { shallow } from 'enzyme';
import FortniteWeapons from '../FortniteWeapons';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	shallow(<FortniteWeapons />);
});

it('<FortniteWeapons />', () => {
	const wrapper = shallow(<FortniteWeapons />);
	expect(wrapper).toMatchSnapshot();
});
