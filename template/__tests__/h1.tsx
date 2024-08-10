import React from 'react';
import { render } from '@testing-library/react-native';

import { H1 } from '../src/components';

describe('H1Component', () => {
  it('renders correctly with default styles', () => {
    const { getByText } = render(<H1>Hello, World!</H1>);
    const textElement = getByText('Hello, World!');

    // Assert that the text is rendered
    expect(textElement).toBeTruthy();

    // Assert that the text has the correct default style
    expect(textElement).toHaveStyle({
      fontSize: 40,
      color: 'black',
      textAlign: 'center',
    });
  });

  it('applies custom styles', () => {
    const customStyle = { color: 'red' };
    const { getByText } = render(<H1 style={customStyle}>Styled Text</H1>);
    const textElement = getByText('Styled Text');

    // Assert that the custom style is applied
    expect(textElement).toHaveStyle(customStyle);

    // Ensure that other styles are still applied
    expect(textElement).toHaveStyle({
      fontSize: 40,
      textAlign: 'center',
    });
  });

  it('renders children correctly', () => {
    const { getByText } = render(<H1>Test Children</H1>);
    const textElement = getByText('Test Children');

    // Assert that the children text is rendered
    expect(textElement).toBeTruthy();
  });
});
