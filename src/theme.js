import { Input, InputGroup, InputLeftAddon, ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'

const theme = {
  config:{
    initialColorMode: 'dark',
    useSystemColorMode: true,
    Input: {
      baseStyle: {
        color: "black", // Cambia el color del texto
      },
    },
  },
}

export default theme