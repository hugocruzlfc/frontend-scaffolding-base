import { describe, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SingUpForm } from '@/components/forms/SingUpForm';

describe('SingUpForm', () => {
  const mockOnSubmit = vi.fn();

  it('renders the form correctly', () => {
    render(<SingUpForm onSubmit={vi.fn()} />);

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /register/i })
    ).toBeInTheDocument();
  });

  it('displays error message when username is invalid', async () => {
    render(<SingUpForm onSubmit={mockOnSubmit} />);

    // Submit the form without entering a username
    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    expect(
      await screen.findByText(/username must be at least 3 characters/i)
    ).toBeInTheDocument();

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it('calls onSubmit with correct data when form is submitted', async () => {
    // render(<SingUpForm onSubmit={mockOnSubmit} />);

    // fireEvent.input(screen.getByPlaceholderText(/username/i), {
    //   target: { value: 'Jon Doe' },
    // });

    // fireEvent.click(screen.getByRole('button', { name: /register/i }));

    // expect(mockOnSubmit).toHaveBeenCalledWith({ username: 'Jon Doe' });

    render(<SingUpForm onSubmit={mockOnSubmit} />);

    fireEvent.input(screen.getByPlaceholderText(/username/i), {
      target: { value: 'Jon Doe' },
    });

    fireEvent.click(screen.getByRole('button', { name: /register/i }));

    await screen.findByRole('button', { name: /register/i }); // Asegurando que el botón esté en el DOM

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);

      const [callArg] = mockOnSubmit.mock.calls[0];
      expect(callArg).toEqual(expect.objectContaining({ username: 'Jon Doe' }));
    });
  });
});
