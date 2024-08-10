import React from 'react';
import { render } from '@testing-library/react-native';

import { Separator, Text } from '../src/components';

describe('Separator Component', () => {
    it('renders correctly with default styles', () => {
        const { getByTestId } = render(<Separator />);

        // Check if the separator is rendered
        const separatorElement = getByTestId('separator');
        expect(separatorElement).toBeTruthy();

        // Check default styles
        expect(separatorElement).toHaveStyle({
            width: '100%',
            borderBottomWidth: 1,
            borderBottomColor: '#f1f5f6',
        });
    });

    it('applies custom styles', () => {
        const customStyle = {
            borderBottomColor: 'blue',
            borderBottomWidth: 2,
        };

        const { getByTestId } = render(<Separator style={customStyle} />);

        // Check if custom styles are applied
        const separatorElement = getByTestId('separator');
        expect(separatorElement).toHaveStyle(customStyle);
    });

    it('renders children correctly', () => {
        const { getByText } = render(
            <Separator>
                <Text>Child Text</Text>
            </Separator>,
        );

        // Check if children are rendered
        expect(getByText('Child Text')).toBeTruthy();
    });
});
