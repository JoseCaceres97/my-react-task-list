import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { SpinnerIcon, SunIcon } from '@chakra-ui/icon';

const TogglerColorMode = () => {
    const { colorMode, togglerColorMode } = useColorMode();
    return (
        <Button onClick={() => togglerColorMode()} 
            pos="absolute" 
            top="0" 
            right="0" 
            m="1rem" 
        >
        {colorMode === "dark"  ? <SunIcon /> : <SpinnerIcon />}
        </Button>
    );
}

export default TogglerColorMode;