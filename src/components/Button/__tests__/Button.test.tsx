import React from 'react';
import { screen, render } from '@testing-library/react';
import { Button } from '../index';

describe('<Button /> component', () => {
  test('renders the button component correctly', () => {
    const { asFragment } = render(<Button label='Perfect Button' />);

    expect(
      screen.getByRole('button', { name: 'Perfect Button' }),
    ).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  test('renders the primary button by default', () => {
    render(<Button label='Perfect Button' />);

    expect(screen.getByRole('button', { name: 'Perfect Button' })).toHaveClass(
      'button--primary',
    );
  });

  test('renders the secondary button', () => {
    render(<Button label='Perfect Button' variant='secondary' />);

    expect(screen.getByRole('button', { name: 'Perfect Button' })).toHaveClass(
      'button--secondary',
    );
  });

  test('renders the large button', () => {
    render(<Button size='large' label='Perfect Button' variant='secondary' />);

    expect(screen.getByRole('button', { name: 'Perfect Button' })).toHaveClass(
      'button--large',
    );
  });

  test('renders the medium button', () => {
    render(<Button size='medium' label='Perfect Button' />);

    expect(screen.getByRole('button', { name: 'Perfect Button' })).toHaveClass(
      'button--medium',
    );
  });

  test('renders the small button', () => {
    render(<Button size='small' label='Perfect Button' />);

    expect(screen.getByRole('button', { name: 'Perfect Button' })).toHaveClass(
      'button--small',
    );
  });

  test('renders the small secondary button', () => {
    render(<Button size='small' label='Perfect Button' variant='secondary' />);

    expect(screen.getByRole('button', { name: 'Perfect Button' })).toHaveClass(
      'button--secondary button--small',
    );
  });

  test('renders the small secondary button with custom className', () => {
    render(
      <Button
        size='small'
        label='Perfect Button'
        variant='secondary'
        className='custom'
      />,
    );

    expect(screen.getByRole('button', { name: 'Perfect Button' })).toHaveClass(
      'button--secondary button--small custom',
    );
  });
});
