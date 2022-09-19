import React from "react";
import Container from "../HOC";
import Post from "../components/Post";
import { useStore } from "../store/store";
import { PostsType } from "../types/store";

const App = () => {
  const posts: PostsType[] = useStore((state: any) => state.posts);
  console.log({ posts });
  return (
    <Container>
      <main className="my-3 flex justify-center">
        <div className="shadow drop-shadow-xl p-5 w-2/4">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
    </Container>
  );
};

export default App;
