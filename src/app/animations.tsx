'use client';
import React, { PropsWithChildren } from 'react';

/**
 * Locomotive Scroll was removed: a default `new LocomotiveScroll()` instance
 * hijacks/transforms scroll without a configured `el` + scrollerProxy, which
 * fights GSAP ScrollTrigger (about page) and Framer `useScroll` (template /
 * footer) and can produce black frames or jank while scrolling.
 */
export default function Animations({ children }: PropsWithChildren<object>) {
  return <div className="main">{children}</div>;
}
