import React from 'react';
import { render } from '@testing-library/react-native';

import { Spacer } from '../src/components';

describe('Spacer Component', () => {
    it('renders correctly with default styles', () => {
        const { getByTestId } = render(<Spacer />);

        // Check if the spacer is rendered
        const spacerElement = getByTestId('spacer');
        expect(spacerElement).toBeTruthy();

        // Check default styles
        expect(spacerElement).toHaveStyle({
            flex: 1,
        });
    });
});
