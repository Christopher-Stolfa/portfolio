import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
/**
 * This is the root React component.
 * All
 *
 * @component
 */

const App = () => (
  <React.StrictMode>
    <ChakraProvider>
      <header>The Header</header>
      <main>
        <div>
          <h1>Hello world</h1>
          <p>Have a wonderful day</p>
        </div>
      </main>
      <footer>The Footer</footer>
    </ChakraProvider>
  </React.StrictMode>
);

export default App;
