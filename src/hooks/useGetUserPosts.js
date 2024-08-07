import { useEffect, useState } from "react";
import usePostStore from "../store/postStore";
import useShowToast from "./useShowToast";
import useUserProfileStore from "../store/userProfileStore";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export default function useGetUserPosts() {
    const [isLoading, setIsLoading] = useState(true);
    const { posts, setPosts } = usePostStore();
    const showToast = useShowToast();
    const userProfile = useUserProfileStore((state) => state.userProfile);

    useEffect(() => {
        const getPosts = async () => {
            if (!userProfile) return;
            setIsLoading(true);
            setPosts([]);

            try {
                const q = query(
                    collection(firestore, "posts"),
                    where("createdBy", "==", userProfile.uid)
                );
                const querySnapshot = await getDocs(q);

                const userPosts = [];
                querySnapshot.forEach((doc) => {
                    userPosts.push({ ...doc.data(), id: doc.id });
                });

                userPosts.sort((a, b) => b.createdAt - a.createdAt);
                setPosts(userPosts);
            } catch (error) {
                showToast("Error", error.message, "error");
                setPosts([]);
            } finally {
                setIsLoading(false);
            }
        };

        getPosts();
    }, [setPosts, userProfile, showToast]);

    return { isLoading, posts };
}
