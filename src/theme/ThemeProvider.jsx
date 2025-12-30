import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                primary: {
                    DEFAULT: {
                        value: "#1B619A"
                    },
                    hover: {
                        value: "#195B8D"
                    }
                },
                secondary: {
                    DEFAULT: {
                        value: "#8d9a1bff"
                    },
                    hover: {
                        value: "#195B8D"
                    }
                },
                danger: {
                    DEFAULT: {
                        value: "#DC2626"
                    },
                    hover: {
                        value: "#FC2525"
                    }
                },

                background: {
                    DEFAULT: {
                        value: "#FFF"
                    },
                    hover: {

                        value: "#F5F5F5"
                    }
                },
                font: {
                    DEFAULT: {
                        value: "#000"
                    },
                    secondary: {
                        value: "#FFF"
                    }
                }
            }
        }
    }
})



const ThemeProvider = ({ children }) => {
    return (
        <ChakraProvider value={system}>
            {children}
        </ChakraProvider>
    );
}

export default ThemeProvider;
