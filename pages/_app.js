import { ChakraProvider, Text } from "@chakra-ui/react";
// import theme from "@styles/theme";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
