import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Switch } from '../src/components';

describe('Switch Component', () => {
    it('renders correctly with default styles', () => {
        const { getByRole } = render(<Switch />);

        // Check if the switch is rendered
        const switchElement = getByRole('switch');
        expect(switchElement).toBeTruthy();
    });

    it('toggles state correctly when pressed', () => {
        const { getByRole, rerender } = render(<Switch />);
        const switchElement = getByRole('switch');

        // Initial state should be false
        expect(switchElement.props.value).toBe(false);

        // Simulate switch toggle
        fireEvent(switchElement, 'valueChange', true);

        // Re-render to update the component
        rerender(<Switch />);

        // Check if the state is toggled to true
        expect(switchElement.props.value).toBe(true);

        // Simulate switch toggle again
        fireEvent(switchElement, 'valueChange', false);

        // Re-render to update the component
        rerender(<Switch />);

        // Check if the state is toggled back to false
        expect(switchElement.props.value).toBe(false);
    });

    it('applies custom styles', () => {
        const { getByRole } = render(<Switch style={{ padding: 24 }} />);
        const switchElement = getByRole('switch');

        // Check if custom styles are applied
        expect(switchElement).toHaveStyle({ padding: 24 });
    });
});
