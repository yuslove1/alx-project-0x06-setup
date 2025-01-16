import { ReactNode } from "react";

//interface for the route?path for the page
export interface PageRouteProps {
    pageRoute: string;
  }

  // Define the properties that the Button component accepts
  export interface ButtonProps {
    buttonLabel: string; //the text to be displayed on the button
    buttonSize?: string; //optional size of the button.
    buttonBackgroundColor?: "red" | "blue" | "orange" | "green"; //optional background color of the button
    action?: () => void; // Optional function to be executed when the button is clicked
  }

// Defines the properties for the Layout component.
export interface LayoutProps {
    children: ReactNode; // Children to be rendered within the layout (the main content of the page).
  }