import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import React, { useRef, useState } from "react";
import { db, storage } from "../firebase";

const Input = () => {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(false);
  const filePickerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      //   id: session.user.uid,
      //   username: session.user.name,
      //   userImg: session.user.image,
      //   tag: session.user.tag,
      text: input,
      timestamp: serverTimestamp(),
    });

    console.log(docRef);

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (selectedFile) {
      await uploadString(imageRef, selectedFile, "data_url").then(async () => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      });
    }

    setLoading(false);
    setInput("");
    setSelectedFile(null);
  };

  return (
    <div
      className={`border-b border-gray-700 px-4 py-2 flex space-x-4 overflow-y-auto ${
        loading && "opacity-60"
      }`}
    >
      <img
        src="https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top"
        alt=""
        className="h-11 w-11 rounded-full object-cover cursor-pointer"
      />

      <div className="w-full divide-y divide-gray-700">
        <div>
          <textarea
            value={input}
            rows="2"
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's happening?"
            className="w-full bg-transparent outline-none placeholder-gray-500 text-lg tracking-wide min-h-[50px]"
          />
        </div>

        {selectedFile && (
          <div className="relative my-4 border rounded-2xl w-fit">
            <div
              className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full grid place-items-center top-1 left-1 cursor-pointer"
              onClick={() => setSelectedFile(null)}
            >
              <XIcon className="h-5" />
            </div>
            <img
              src={selectedFile}
              className="rounded-2xl h-full max-h-80 object-contain p-2"
              alt=""
            />
          </div>
        )}

        {!loading && (
          <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center space-x-1">
              <div
                className="icon"
                onClick={() => filePickerRef.current.click()}
              >
                <PhotographIcon className="h-5 text-[#1d9bf0]" />
                <input
                  type="file"
                  hidden
                  onChange={addImageToPost}
                  ref={filePickerRef}
                />
              </div>
              <div className="icon">
                <EmojiHappyIcon
                  className="h-5 text-[#1d9bf0]"
                  onClick={() => setShowEmojis(!showEmojis)}
                />
              </div>
              <div className="icon">
                <ChartBarIcon className="h-5 text-[#1d9bf0]" />
              </div>
              <div className="icon">
                <CalendarIcon className="h-5 text-[#1d9bf0]" />
              </div>
            </div>
            <button
              className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-opacity-90 disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default cursor-pointer"
              disabled={!input.trim() && !selectedFile}
              onClick={sendPost}
            >
              Tweet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
