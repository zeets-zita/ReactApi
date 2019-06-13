import React from 'react';
import Form from '../Components/Form';
import renderer from 'react-test-renderer';


test('renders correctly', () => {
    const tree = renderer
    .create(<Form/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
    });

