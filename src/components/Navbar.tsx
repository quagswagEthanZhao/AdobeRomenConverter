import React from "react";
import { Flex, Heading, Switch, View, ActionButton, Tooltip, TooltipTrigger } from "@adobe/react-spectrum";
import User from "@spectrum-icons/workflow/User";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  console.log("isDarkMode:", isDarkMode); // Debugging the theme state

  return (
    <View
      paddingX="size-300"
      paddingY="size-200"
      borderBottomWidth="thin"
      borderBottomColor={isDarkMode ? "gray-800" : "gray-300"}
      UNSAFE_style={{
        backgroundColor: isDarkMode ? "#121212" : "#f5f5f5", // Force dynamic background color
        color: isDarkMode ? "white" : "black", // Dynamic text color
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left Section: Logo or Title */}
      <Heading level={3} margin="size-0">
        Roman Converter
      </Heading>

      {/* Right Section: Dark Mode Switch and Account Icon */}
      <Flex alignItems="center" gap="size-200">
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
    </View>
  );
};

export default Navbar;
