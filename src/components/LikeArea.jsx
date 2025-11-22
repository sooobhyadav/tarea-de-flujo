import { useState } from "react";

export default function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);

  function increaseLikeHand() {
    setLikeCount(prev => prev + 1);
  }

  function decreaseLikeHand() {
    setLikeCount(prev => prev > 0 ? prev - 1 : 0);
  }

  return (
    <>
      <button onClick={increaseLikeHand}>Increase likes</button>
      <button onClick={decreaseLikeHand}>Decrease likes</button>
      <h2>This page has been liked {likeCount} times</h2>
    </>
  );
}
