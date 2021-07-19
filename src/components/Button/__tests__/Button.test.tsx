import React from 'react';
import { screen, render } from '@testing-library/react';
import { Button } from '../index';
import {
  Large,
  Medium,
  Primary,
  Secondary,
  Small,
  SmallSecondary,
  SmallSecondaryWithCustomClass,
} from '../Button.stories';

describe('<Button /> component', () => {
  test('renders the button component correctly', () => {
    const { asFragment } = render(<Button label='Perfect Button' />);

    expect(
      screen.getByRole('button', { name: 'Perfect Button' }),
    ).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders the primary button by default', () => {
    render(<Primary {...Primary.args} />);

    expect(screen.getByRole('button', { name: 'Primary Button' })).toHaveClass(
      'button--primary',
    );
  });

  test('renders the secondary button', () => {
    render(<Secondary {...Secondary.args} />);

    expect(
      screen.getByRole('button', { name: 'Secondary Button' }),
    ).toHaveClass('button--secondary');
  });

  test('renders the large button', () => {
    render(<Large {...Large.args} />);

    expect(screen.getByRole('button', { name: 'Large Button' })).toHaveClass(
      'button--large',
    );
  });

  test('renders the medium button', () => {
    render(<Medium {...Medium.args} />);

    expect(screen.getByRole('button', { name: 'Medium Button' })).toHaveClass(
      'button--medium',
    );
  });

  test('renders the small button', () => {
    render(<Small {...Small.args} />);

    expect(screen.getByRole('button', { name: 'Small Button' })).toHaveClass(
      'button--small',
    );
  });

  test('renders the small secondary button', () => {
    render(<SmallSecondary {...SmallSecondary.args} />);

    expect(
      screen.getByRole('button', { name: 'Small Secondary Button' }),
    ).toHaveClass('button--secondary button--small');
  });

  test('renders the small secondary button with custom className', () => {
    render(
      <SmallSecondaryWithCustomClass {...SmallSecondaryWithCustomClass.args} />,
    );

    expect(screen.getByRole('button', { name: 'Custom Button' })).toHaveClass(
      'button--secondary button--small custom',
    );
  });
});
