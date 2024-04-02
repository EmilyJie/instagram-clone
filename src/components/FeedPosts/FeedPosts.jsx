import {
    Box,
    Container,
    Flex,
    Skeleton,
    SkeletonCircle,
    VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

export default function FeedPosts() {
    const [isLoaindg, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoaindg ? (
                [0, 1, 2, 3].map((_, index) => (
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
                            <Box h={"500px"}>contents wrapped</Box>
                        </Skeleton>
                    </VStack>
                ))
            ) : (
                <>
                    <FeedPost
                        img="/img1.png"
                        username="asaprogrammer_"
                        avatar="/img1.png"
                    />
                    <FeedPost
                        img="/img2.png"
                        username="john_doe"
                        avatar="/img2.png"
                    />
                    <FeedPost
                        img="/img3.png"
                        username="josie_wales"
                        avatar="/img3.png"
                    />
                    <FeedPost
                        img="/img4.png"
                        username="emily_jones"
                        avatar="/img4.png"
                    />
                </>
            )}
        </Container>
    );
}
