import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
/**
 * This is the root React component, it gets rendered by ReactDOM.
 * All
 *
 * @component
 */

const App = () => (
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
);

export default App;
