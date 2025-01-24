import React from 'react';
import {
  Flex,
  Heading,
  Switch,
  View,
  ActionButton,
  Tooltip,
  TooltipTrigger,
} from '@adobe/react-spectrum';
import User from '@spectrum-icons/workflow/User';
import { useTheme } from '../lib/hooks/useTheme';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View
      paddingX="size-300"
      paddingY="size-200"
      borderBottomWidth="thin"
      borderBottomColor="gray-300"
      backgroundColor="gray-50"
    >
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between" // Space out the logo and icons
        gap="size-200"
      >
        {/* Left Section: Title */}
        <Heading level={3} margin="size-0">
          Roman Converter
        </Heading>

        {/* Right Section: Dark Mode Switch and Account Icon */}
        <Flex direction="row" alignItems="center" gap="size-200">
          {/* Dark Mode Toggle */}
          <Switch
            isSelected={isDarkMode}
            onChange={toggleTheme}
            aria-label="Toggle dark mode"
          >
            Dark Mode
          </Switch>

          {/* Account Icon */}
          <TooltipTrigger>
            <ActionButton aria-label="Account">
              <User size="S" />
            </ActionButton>
            <Tooltip>Account</Tooltip>
          </TooltipTrigger>
        </Flex>
      </Flex>
    </View>
  );
};

export default Navbar;
