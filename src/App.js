import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
/**
 * This is the root React component.
 *
 * @component
 */

const App = () => (
  <React.StrictMode>
    <ChakraProvider>
      <header>The Header</header>
      <main>
        <h1>Hello world</h1>
        <p>Have a wonderful day</p>
      </main>
      <footer>The Footer</footer>
    </ChakraProvider>
  </React.StrictMode>
);

export default App;
