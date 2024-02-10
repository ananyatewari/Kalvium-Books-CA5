import React, { useEffect, useState } from "react";
import "./Quote.css";

export default function Footer() {
  const [index, setIndex] = useState(0);
  // this is a simple random quote display component

  const quotes = [
    '"Show me a family of readers, and I will show you the people who move the world." – Napoleon Bonaparte',
    '"When I look back, I am so impressed again with the life-giving power of literature. If I were a young person today, trying to gain a sense of myself in the world, I would do that again by reading, just as I did when I was young." – Maya Angelou',
    '"I think books are like people, in the sense that they’ll turn up in your life when you most need them." – Emma Thompson',
    '"Reading makes immigrants of us all. It takes us away from home, but more important, it finds homes for us everywhere." – Jean Rhys',
    "“Books should go where they will be most appreciated, and not sit unread, gathering dust on a forgotten shelf, don’t you agree?” — Christopher Paolini",
    "“You know you’ve read a good book when you turn the last page and feel a little as if you have lost a friend.” — Paul Sweeney.",
  ];

  const gallery = () => {
    if (index < 5) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    return index;
  };

  useEffect(() => {
    const next = setInterval(gallery, 5500);
    return () => clearInterval(next);
  });

  return (
    <>
      <section>
        <div>{quotes[index]}</div>
      </section>
    </>
  );
}
