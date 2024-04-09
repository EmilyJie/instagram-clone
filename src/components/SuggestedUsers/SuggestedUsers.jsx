import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

export default function SuggestedUsers() {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />

            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                w={"full"}
            >
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                    Suggested for you
                </Text>
                <Text
                    fontSize={12}
                    fontWeight={"bold"}
                    _hover={{ color: "gray.400" }}
                    cursor={"pointer"}
                >
                    See all
                </Text>
            </Flex>

            <SuggestedUser
                name="Dan Abramov"
                followers={100}
                avatar="https://bit.ly/dan-abramov"
            />
            <SuggestedUser
                name="Ryan Florence"
                followers={100}
                avatar="https://bit.ly/ryan-florence"
            />
            <SuggestedUser
                name="Code Artistry"
                followers={100}
                avatar="https://bit.ly/code-beast"
            />

            <Box
                fontSize={12}
                color={"gray.500"}
                mt={5}
                alignSelf={"flex-start"}
            >
                © 2024 Built By{" "}
                <Link
                    href="https://www.youtube.com/"
                    target="_blank"
                    color={"blue.500"}
                    fontSize={14}
                >
                    As a Programmer
                </Link>
            </Box>
        </VStack>
    );
}
