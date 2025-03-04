import React from 'react'
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);


  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8, // Adjust scrolling speed
     // Delay before scrolling starts in milliseconds
      // Animation class
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <>
        <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
    </>
  )
}

export default SmoothScroll
