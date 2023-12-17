import { ChakraProvider } from '@chakra-ui/react';
import { colorModeScript } from '@chakra-ui/color-mode';
import React from 'react';
import ReactDOM from 'react-dom';
import theme from './theme';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
       <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} /> 
            <App />
      </ChakraProvider>
    </React.StrictMode>,
    document.getElemntById("root")
);