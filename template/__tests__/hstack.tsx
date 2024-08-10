import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';

import { HStack } from '../src/components';

describe('HStack Component', () => {
    it('renders correctly with default styles', () => {
        const { getByTestId } = render(
            <HStack testID="hstack-component">
                <Text>Test</Text>
            </HStack>
        );
        const hstackElement = getByTestId('hstack-component');

        // Assert that the HStack component is rendered
        expect(hstackElement).toBeTruthy();

    });

    it('renders children correctly', () => {
        const { getByText } = render(
            <HStack>
                <Text>Child Text</Text>
            </HStack>
        );

        const childText = getByText('Child Text');

        // Assert that children are rendered
        expect(childText).toBeTruthy();
    });
});
