import { useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export default function useLikePost(post) {
    const authUser = useAuthStore((state) => state.user);
    const [isUpdating, setIsUpdating] = useState(false);
    const [likes, setLikes] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid));
    const showToast = useShowToast();

    const handleLikePost = async () => {
        if (isUpdating) return;
        if (!authUser)
            throw new Error("You need to be logged in to like a post");

        setIsUpdating(true);

        try {
            const postRef = doc(firestore, "posts", post.id);
            await updateDoc(postRef, {
                likes: isLiked
                    ? arrayRemove(authUser.uid)
                    : arrayUnion(authUser.uid),
            });

            setIsLiked(!isLiked);
            setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
        } catch (error) {
            showToast("Error", error.message, "error");
        } finally {
            setIsUpdating(false);
        }
    };

    return { isLiked, likes, handleLikePost, isUpdating };
}
