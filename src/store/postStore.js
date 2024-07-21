import { create } from "zustand";

const usePostStore = create((set) => ({
    post: [],
    createPost: (post) => set((state) => ({ post: [post, ...state.post] })),
    setPosts: (posts) => set({ posts }),
    deletePost: (id) =>
        set((state) => ({ post: state.post.filter((post) => post.id !== id) })),
}));

export default usePostStore;
