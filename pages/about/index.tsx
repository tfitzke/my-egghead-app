import NextLink from "next/link";
import { Heading, Link, Flex } from "@chakra-ui/react";
const AboutPage = () => {
    return (
        <Flex flexDirection="column" alignItems="center" margin={4}>
            <Heading as="h1" size="2xl" marginY="2rem">This is our about page</Heading>
            <NextLink href='/'><Link>Go to back home</Link></NextLink>
        </Flex>
    )
}

export default AboutPage