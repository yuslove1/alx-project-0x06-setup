import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the count context data
interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create the context with a default value of undefined
export const CountContext = createContext<CountContextProps | undefined>(undefined);

// Provider component for the count context
export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);  // Initialize count state to 0

  const increment = () => setCount((count) => count + 1); // Increment count
  const decrement = () => setCount((count) => count > 0 ? count - 1 : 0); // Decrement count

  // Provide the count state and update functions to consuming components
  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

// Custom hook to access the count context
export const useCount = () => {
  const context = useContext(CountContext);

  // Throw an error if the hook is used outside of a provider
  if (!context) {
    throw new Error("useCount must be used within a CountProvider");
  }

  return context;
};