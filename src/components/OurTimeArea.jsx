import { useState, useEffect } from "react";

export default function OurTimeArea() {
  const [theTime, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>The current time is {theTime}.</p>;
}
