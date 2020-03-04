export type PostType = {
    id: number | string;
    title: string;
    body: string;
};

export type LayoutProps = {
    title: string;
};

export type PostsPageProps = {
    postList: Array<PostType>;
};

export type CurrentPostProps = {
    currentPost: PostType;
};
