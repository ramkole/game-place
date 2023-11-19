import { ThemeConfig, extendTheme, theme } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark'
}

extendTheme({config})

export default theme