import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

const App = ({ Component, pageProps}: AppProps) => {
    return (
        <ChakraProvider resetCSS={true}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App