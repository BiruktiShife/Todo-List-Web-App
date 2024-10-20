"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export function TopicsComponent() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    async function getLidts() {
      const res = await fetch("http://localhost:3000/api/topics");
      const topics = await res.json();
      setTopics(topics?.topics);
    }

    getLidts();
  }, []);

  return (
    <>
      <div>
        {topics.length &&
          topics.map((t) => (
            <div
              key={t._id}
              className="p-4 border-2 border-orange-500 my-3 flex justify-between gap-5 items-center"
            >
              <div>
                <h2 className="font-bold text-2xl">{t.title}</h2>
                <div>{t.description}</div>
              </div>
              <div className="flex gap-2">
                <RemoveBtn id={t._id} />
                <Link href={`/editTopic/${t._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
