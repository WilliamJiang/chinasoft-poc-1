import React from 'react';
import About from './About';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const rendered = renderer.create(<About />).toJSON();
    expect(rendered).toBeTruthy();
});
