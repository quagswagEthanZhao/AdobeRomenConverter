import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { useTheme } from '../../lib/hooks/useTheme';

// Mock the useTheme hook to control theme state in tests
jest.mock('../../lib/hooks/useTheme');

describe('Navbar - Dark Mode Switch', () => {
  const toggleThemeMock = jest.fn();

  beforeEach(() => {
    // Clear all mock calls before each test
    jest.clearAllMocks();
  });

  it('shows "Light Mode" when dark mode is disabled', () => {
    // Arrange: Set isDarkMode to false
    (useTheme as jest.Mock).mockReturnValue({
      isDarkMode: false,
      toggleTheme: toggleThemeMock,
    });

    // Act: Render the Navbar component
    render(<Navbar />);

    // Assert: Verify the switch displays "Light Mode" and is not active
    const switchElement = screen.getByRole('switch', {
      name: /Toggle dark mode/i,
    });
    expect(switchElement).toBeInTheDocument();
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
    expect(switchElement).not.toHaveAttribute('aria-pressed', 'true');
  });

  it('shows "Dark Mode" when dark mode is enabled', () => {
    // Arrange: Set isDarkMode to true
    (useTheme as jest.Mock).mockReturnValue({
      isDarkMode: true,
      toggleTheme: toggleThemeMock,
    });

    // Act: Render the Navbar component
    render(<Navbar />);

    // Assert: Verify the switch is checked and displays "Dark Mode"
    const switchElement = screen.getByRole('switch', {
      name: /Toggle dark mode/i,
    });
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toBeChecked();

    // Since "Dark Mode" is displayed inside the Switch, check for its presence
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  it('calls toggleTheme when the switch is clicked', () => {
    // Arrange: Set isDarkMode to false
    (useTheme as jest.Mock).mockReturnValue({
      isDarkMode: false,
      toggleTheme: toggleThemeMock,
    });

    // Act: Render the Navbar and click the switch
    render(<Navbar />);
    const switchElement = screen.getByRole('switch', {
      name: /Toggle dark mode/i,
    });
    fireEvent.click(switchElement);

    // Assert: Ensure toggleTheme is called once
    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });
});
