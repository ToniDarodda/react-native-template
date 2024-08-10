import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';

import { Button } from '../src/components';


describe('Button Component', () => {
    it('renders correctly with default styles', () => {
        const { getByText } = render(<Button text="Click Me" />);
        const buttonText = getByText('Click Me');

        // Assert that the button text is rendered
        expect(buttonText).toBeTruthy();

        // Check the button container's default style if needed
    });

    it('shows loading indicator when isLoading is true', () => {
        const { getByTestId } = render(<Button text="Click Me" isLoading={true} />);
        const activityIndicator = getByTestId('activity-indicator');

        // Assert that the activity indicator is rendered
        expect(activityIndicator).toBeTruthy();
    });

    it('renders text and children correctly', () => {
        const { getByText, getByTestId } = render(
            <Button text="Click Me">
                <Text testID="child-element">Child Element</Text>
            </Button>
        );

        const buttonText = getByText('Click Me');
        const childElement = getByTestId('child-element');

        // Assert that the button text and children are rendered
        expect(buttonText).toBeTruthy();
        expect(childElement).toBeTruthy();
    });

    it('triggers onPress callback when pressed', () => {
        const onPressMock = jest.fn();
        const { getByText } = render(<Button text="Click Me" onPress={onPressMock} />);

        const button = getByText('Click Me');

        // Simulate press
        fireEvent.press(button);

        // Assert that the onPress callback is called
        expect(onPressMock).toHaveBeenCalled();
    });

    it('changes style when pressed', () => {
        const { getByText } = render(<Button text="Click Me" />);
        const button = getByText('Click Me');

        fireEvent.press(button);
    });
});
