import { create } from "zustand";

const usePostStore = create((set) => ({
    post: [],
    createPost: (post) => set((state) => ({ post: [post, ...state.post] })),
}));

export default usePostStore;
