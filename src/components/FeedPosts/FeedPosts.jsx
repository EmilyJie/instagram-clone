import {
    Box,
    Container,
    Flex,
    Skeleton,
    SkeletonCircle,
    Text,
    VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

export default function FeedPosts() {
    const { isLoading, posts } = useGetFeedPosts();

    return (
        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoading &&
                [0, 1, 2].map((_, index) => (
                    <VStack
                        key={index}
                        gap={4}
                        alignItems={"flex-start"}
                        mb={10}
                    >
                        <Flex gap={2}>
                            <SkeletonCircle size="10" />

                            <VStack alignItems={"flex-start"} gap={2}>
                                <Skeleton height="10px" width="200px" />
                                <Skeleton height="10px" width="200px" />
                            </VStack>
                        </Flex>
                        <Skeleton w={"full"}>
                            <Box h={"400px"}>contents wrapped</Box>
                        </Skeleton>
                    </VStack>
                ))}

            {!isLoading && posts.length > 0
                ? posts.map((post) => <FeedPost key={post.id} post={post} />)
                : posts.length === 0 && (
                      <Flex direction={"column"} alignItems={"center"} gap={2}>
                          <Text fontSize={"md"} color={"red.400"}>
                              Dayuum... Looks like you don't have any friends
                              yet.
                          </Text>
                          <Text color={"red.400"}>
                              Stop being a loner and make some friends!
                          </Text>
                      </Flex>
                  )}
        </Container>
    );
}
