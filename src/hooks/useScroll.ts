import { useEffect, useState, useCallback, useRef } from 'react';

export type ScrollDirection = 'down' | 'up' | 'none';

export type ScrollState = {
  scrollDirection: ScrollDirection;
  isEndOfScroll?: boolean;
  isScrollUp?: boolean;
  isScrollDown?: boolean;
  scrollHeight: number;
  scrolledPixels: number;
  scrolledPercent: number;
  scrolledMaxPercent: number;
  scrollingElementHeight: number;
};

export type ScrollData = {
  scrollData: ScrollState;
  resetScrollData: () => void;
};

export const initialScrollState: ScrollState = {
  scrollDirection: 'none',
  scrollHeight: 0,
  scrolledPixels: 0,
  scrolledPercent: 0,
  scrolledMaxPercent: 0,
  scrollingElementHeight: 0
};

export const useScroll = (): ScrollData => {
  const [scrollData, setScrollData] = useState<ScrollState>(initialScrollState);
  const prevScroll = useRef({
    scrolledPixels: 0,
    scrolledMaxPercent: 0
  });

  const resetScrollData = useCallback(() => {
    setScrollData(initialScrollState);
  }, []);

  useEffect(() => {
    const onScrollHandler = () => {
      const scrollingElement = document.scrollingElement;
      if (!scrollingElement) {
        return;
      }

      const scrollHeight = scrollingElement.scrollHeight;
      const scrollingElementHeight = scrollingElement.clientHeight;
      const scrolledPixels = scrollingElement.scrollTop;
      const prevScrollData = prevScroll.current;

      const isEndOfScroll =
        scrollHeight - scrolledPixels === scrollingElementHeight;
      const scrolledPercentValue =
        ((scrolledPixels + scrollingElementHeight) / scrollHeight) * 100;
      const scrolledPercent = Math.round(scrolledPercentValue);
      const scrolledMaxPercent =
        scrolledPercent > prevScrollData.scrolledMaxPercent
          ? scrolledPercent
          : prevScrollData.scrolledMaxPercent;

      const isScrollUp = prevScrollData.scrolledPixels > scrolledPixels;
      const isScrollDown = prevScrollData.scrolledPixels < scrolledPixels;
      const scrollDirection: ScrollDirection =
        prevScrollData.scrolledPixels < scrolledPixels ? 'down' : 'up';

      prevScroll.current = {
        scrolledPixels,
        scrolledMaxPercent
      };

      setScrollData({
        isEndOfScroll,
        isScrollUp,
        isScrollDown,
        scrollHeight,
        scrolledPixels,
        scrolledPercent,
        scrolledMaxPercent,
        scrollingElementHeight,
        scrollDirection: scrolledPixels <= 0 ? 'none' : scrollDirection
      });
    };

    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return {
    scrollData,
    resetScrollData
  };
};
