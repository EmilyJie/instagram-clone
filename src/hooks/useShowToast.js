import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export default function useShowToast() {
    const toast = useToast();

    // useCallback is used to prevent infinite loop, by caching the function
    const showToast = useCallback(
        (title, description, status) => {
            toast({
                title,
                description,
                status,
                duration: 3000,
                isClosable: true,
            });
        },
        [toast]
    );

    return showToast;
}
