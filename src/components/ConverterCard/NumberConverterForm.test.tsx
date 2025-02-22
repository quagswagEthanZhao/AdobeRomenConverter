import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from '../../context/ThemeContext';
import NumberConverterForm from './NumberConverterForm';
import userEvent from '@testing-library/user-event';

// Mock hooks
const mockFetchRomanNumeral = jest.fn();
jest.mock('../../lib/hooks/useRomanNumeralConverter', () => ({
  __esModule: true,
  default: () => ({
    result: 'x',
    loading: false,
    error: null,
    fetchRomanNumeral: mockFetchRomanNumeral,
  }),
}));

jest.mock('../../lib/hooks/useTheme', () => ({
  __esModule: true,
  useTheme: () => ({
    isDarkMode: false,
    toggleTheme: jest.fn(),
  }),
}));

describe('NumberConverterForm Component', () => {
  beforeEach(() => {
    // Clear all mock calls before each test
    jest.clearAllMocks();
  });

  const renderWithProvider = () => {
    render(
      <ThemeProvider>
        <NumberConverterForm />
      </ThemeProvider>
    );
  };

  it('renders correctly', () => {
    renderWithProvider();
    expect(screen.getByText('Roman numeral converter')).toBeInTheDocument();
    expect(screen.getByLabelText('Enter a number')).toBeInTheDocument();
    expect(screen.getByText('Convert to Roman Numeral')).toBeInTheDocument();
  });

  it('displays validation errors for invalid input', async () => {
    renderWithProvider();
    const input = screen.getByLabelText('Enter a number') as HTMLInputElement;

    // Try to type a mix of valid and invalid characters
    await userEvent.clear(input);
    await userEvent.type(input, '123abc!@#');

    // Assert that only numeric characters are allowed
    expect(input.value).toBe('123');

    // Enter a number out of range
    await userEvent.clear(input);
    await userEvent.type(input, '5000');
    // Assert that correct error message are displayed
    expect(
      screen.getByText('Input must be an integer between 1 and 3999.')
    ).toBeInTheDocument();
  });

  it('disable the submit button for invalid input', async () => {
    renderWithProvider();
    const input = screen.getByLabelText('Enter a number') as HTMLInputElement;
    // Find the button by its role
    const button = screen.getByRole('button', {
      name: 'Convert to Roman Numeral',
    });

    // type in invalid data
    await userEvent.clear(input);
    await userEvent.type(input, '8000');

    // assert button disabled
    // Wait for the DOM to update
    expect(button).toHaveClass('ntVziG_is-disabled');
  });

  it('calls fetchRomanNumeral on valid form submission', async () => {
    renderWithProvider();
    const input = screen.getByLabelText('Enter a number') as HTMLInputElement;
    const button = screen.getByRole('button', {
      name: 'Convert to Roman Numeral',
    });

    // Input valid data
    await userEvent.clear(input);
    await userEvent.type(input, '10');
    await userEvent.click(button);

    expect(mockFetchRomanNumeral).toBeCalledWith(10);
  });

  it('display a loading indicaor when loading', () => {});

  it('does not call fetchRomanNumeral for invalid input', async () => {
    renderWithProvider();
    const input = screen.getByLabelText('Enter a number') as HTMLInputElement;
    const button = screen.getByRole('button', {
      name: 'Convert to Roman Numeral',
    });

    // Type invalid data
    await userEvent.clear(input);
    await userEvent.type(input, '5000');
    await userEvent.click(button);

    // Assert fetchRomanNumeral was not called
    expect(mockFetchRomanNumeral).not.toHaveBeenCalled();
  });

  it('No leading 0 are allowed in the input', async () => {
    renderWithProvider();

    const input = screen.getByLabelText('Enter a number') as HTMLInputElement;

    // Type in a number with leading 0
    await userEvent.clear(input);
    await userEvent.type(input, '00123');

    // assert that leading 0 are deleted
    expect(input.value).toBe('123');

    // clear input and type in something with no leading 0
    await userEvent.clear(input);
    await userEvent.type(input, '1230');

    // assert that 0 will not be remved when its not a leading 0
    expect(input.value).toBe('1230');
  });

  it('displays the Roman numeral result when available', () => {
    renderWithProvider();

    // Assert res display
    expect(screen.getByText('Roman numeral: x')).toBeInTheDocument();
  });
});
