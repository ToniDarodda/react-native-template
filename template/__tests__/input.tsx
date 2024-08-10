import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { Input } from '../src/components';

describe('Input Component', () => {
    it('renders correctly with default styles', () => {
        const { getByTestId } = render(<Input placeHolder="Enter text" />);
        const inputElement = getByTestId('input-component');

        // Assert that the Input component is rendered
        expect(inputElement).toBeTruthy();

        // Check placeholder text
        expect(inputElement.props.placeholder).toBe('Enter text');
    });

    it('applies custom styles', () => {
        const customStyle = { borderColor: 'blue' };
        const { getByTestId } = render(<Input placeHolder="Enter text" style={customStyle} />);
        const inputElement = getByTestId('input-component');

        // Assert that custom styles are applied
        expect(inputElement).toHaveStyle({
            borderColor: 'blue',
        });
    });

    it('handles text input correctly', () => {
        const onChangeMock = jest.fn();
        const { getByPlaceholderText } = render(
            <Input placeHolder="Enter text" onChange={onChangeMock} />
        );
        const inputElement = getByPlaceholderText('Enter text');

        // Simulate text input
        fireEvent.changeText(inputElement, 'New text');

        // Assert that the onChange callback is called with the correct text
        expect(onChangeMock).toHaveBeenCalledWith('New text');
    });
});
