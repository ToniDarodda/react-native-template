// __tests__/Button.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../src/components';

describe('Button Component', () => {
  it('renders with text correctly', () => {
    const { getByText } = render(<Button text="Click me" />);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('shows ActivityIndicator when isLoading is true', () => {
    const { queryByText, getByTestId } = render(
      <Button text="Click me" isLoading={true} />
    );
    expect(queryByText('Click me')).toBeNull(); // Text should not be visible
    expect(getByTestId('activity-indicator')).toBeTruthy(); // Ensure ActivityIndicator is visible
  });

  it('calls onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button text="Click me" onPress={onPressMock} />);
    fireEvent.press(getByText('Click me'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('applies custom styles correctly', () => {
    const customContainerStyle = { backgroundColor: 'blue' };
    const customTextStyle = { color: 'yellow' };
    const { getByText } = render(
      <Button
        text="Styled Button"
        containerStyle={customContainerStyle}
        textStyle={customTextStyle}
      />
    );

    // Verify that the button has the custom styles
    const button = getByText('Styled Button').parent;
    expect(button).toHaveStyle(customContainerStyle);

    const text = getByText('Styled Button');
    expect(text).toHaveStyle(customTextStyle);
  });
});
