import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      class: 'is-inview',
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, []);

  return { scrollRef, locomotiveScroll: locomotiveScrollRef.current };
};