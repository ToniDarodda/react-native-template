import React from 'react';
import { render } from '@testing-library/react-native';

import { Text } from '../src/components';

describe('Text Component', () => {
    it('renders correctly with default styles', () => {
        const { getByText } = render(<Text>Test Text</Text>);
        const textElement = getByText('Test Text');
        expect(textElement).toBeTruthy();
        expect(textElement).toHaveStyle({
            fontSize: 16,
            color: 'black',
            textAlign: 'center',
        });
    });

    it('applies custom styles', () => {
        const { getByText } = render(<Text style={{ color: 'red' }}>Test Text</Text>);
        const textElement = getByText('Test Text');
        expect(textElement).toHaveStyle({ color: 'red' });
    });

    it('renders children correctly', () => {
        const { getByText } = render(<Text>Children Test</Text>);
        const textElement = getByText('Children Test');
        expect(textElement).toBeTruthy();
    });
});
