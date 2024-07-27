import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";
import Navbar from "../../components/Navbar/Navbar";

export default function PageLayout({ children }) {
    const { pathname } = useLocation();
    const [user, loading] = useAuthState(auth);
    const canRenderSidebar = pathname !== "/auth" && user;
    const canRenderNavbar = !user && !loading && pathname !== "/auth";

    const checkingUserIsAuth = !user && loading;
    if (checkingUserIsAuth) return <PageLayoutSpinner />;

    return (
        <Flex flexDir={canRenderNavbar ? "column" : "row"}>
            {/* sidebar on the left*/}
            {canRenderSidebar && (
                <Box w={{ base: "70px", md: "240px" }}>
                    <Sidebar />
                </Box>
            )}

            {canRenderNavbar && <Navbar />}

            {/* the page content on the right*/}
            <Box
                flex={1}
                w={{ base: "calc(100% - 70px)", md: "calc(100% - 240px)" }}
                mx={"auto"}
            >
                {children}
            </Box>
        </Flex>
    );
}

const PageLayoutSpinner = () => {
    return (
        <Flex
            flexDir="column"
            height={"100vh"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Spinner size={"xl"} />
        </Flex>
    );
};
