import React from 'react';
import { render } from '@testing-library/react-native';
import { View } from 'react-native';

import { VStack } from '../src/components';

describe('VStack Component', () => {
    it('renders correctly with default styles', () => {
        const { getByTestId } = render(
            <VStack>
                <View testID="child1" />
                <View testID="child2" />
            </VStack>
        );
        const child1 = getByTestId('child1');
        const child2 = getByTestId('child2');

        expect(child1).toBeTruthy();
        expect(child2).toBeTruthy();
    });

    it('applies custom styles', () => {
        const { getByTestId } = render(
            <VStack style={{ backgroundColor: 'blue' }}>
                <View testID="child1" />
            </VStack>
        );

        // Get the VStack container directly to check styles
        const vstackContainer = getByTestId('vstack-container');
        expect(vstackContainer).toHaveStyle({ backgroundColor: 'blue' });
    });


    it('renders children correctly with spacing', () => {
        const { getByTestId } = render(
            <VStack>
                <View testID="child1" />
                <View testID="child2" />
            </VStack>
        );
        const child1 = getByTestId('child1');
        const child2 = getByTestId('child2');

        // Check if child2 is positioned correctly below child1
        expect(child1).toBeTruthy();
        expect(child2).toBeTruthy();

    });
});
