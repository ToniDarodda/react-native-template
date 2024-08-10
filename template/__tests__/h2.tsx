import React from 'react';
import { render } from '@testing-library/react-native';

import { H2 } from '../src/components';

describe('H2Component', () => {
    it('renders correctly with default styles', () => {
        const { getByText } = render(<H2>Hello, World!</H2>);
        const textElement = getByText('Hello, World!');

        // Assert that the text is rendered
        expect(textElement).toBeTruthy();

        // Assert that the text has the correct default style
        expect(textElement).toHaveStyle({
            fontSize: 28,
            color: 'black',
        });
    });

    it('applies custom styles', () => {
        const customStyle = { color: 'red', fontSize: 32 };
        const { getByText } = render(<H2 style={customStyle}>Styled Text</H2>);
        const textElement = getByText('Styled Text');

        // Assert that the custom style is applied
        expect(textElement).toHaveStyle(customStyle);

        // Ensure that other default styles are still applied
        // Here we only check for the applied custom styles
        expect(textElement).toHaveStyle({
            fontSize: 32,
            color: 'red',
        });
    });

    it('renders children correctly', () => {
        const { getByText } = render(<H2>Test Children</H2>);
        const textElement = getByText('Test Children');

        // Assert that the children text is rendered
        expect(textElement).toBeTruthy();
    });
});
