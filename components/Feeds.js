import React, { useEffect, useState } from "react";
import Input from "./Input";
import { SparklesIcon } from "@heroicons/react/outline";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";

const Feeds = () => {
  const [posts, setPosts] = useState([]);

  // MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamps", "decs")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);

  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
  }, [db]);

  return (
    <div className="grow max-w-2xl border-r border-l border-gray-700 h-[200vh] xl:ml-[300px] sm:ml-[78px]">
      <div className="flex justify-between items-center px-4 py-1  backdrop-blur-xl sticky top-0">
        <h2 className="text-lg font-bold">Home</h2>
        <div className="hoverAnimation">
          <SparklesIcon className="h-6 " />
        </div>
      </div>
      <Input />
      <div className="pb-72">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
