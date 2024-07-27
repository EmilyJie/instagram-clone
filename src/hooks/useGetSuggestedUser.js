import { useEffect, useState } from "react";
import useAuthStore from "../store/authStore";
import useShowToast from "./useShowToast";
import {
    collection,
    getDocs,
    limit,
    orderBy,
    query,
    where,
} from "firebase/firestore";
import { firestore } from "../firebase/firebase";

export default function useGetSuggestedUser() {
    const [isLoading, setIsLoading] = useState(false);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const authUser = useAuthStore((state) => state.user);
    const showToasts = useShowToast();

    useEffect(() => {
        const getSuggestedUsers = async () => {
            setIsLoading(true);

            try {
                const usersRef = collection(firestore, "users");
                const q = query(
                    usersRef,
                    where("uid", "not-in", [
                        authUser.uid,
                        ...authUser.following,
                    ]),
                    orderBy("uid"),
                    limit(3)
                );

                const querySnapshot = await getDocs(q);
                const users = [];
                querySnapshot.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id });
                });

                setSuggestedUsers(users);
            } catch (error) {
                showToasts("Error", error.message, "error");
            } finally {
                setIsLoading(false);
            }
        };

        if (authUser) getSuggestedUsers();
    }, [authUser, showToasts]);

    return { isLoading, suggestedUsers };
}
