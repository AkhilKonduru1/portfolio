'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PROXIMITY_THRESHOLD = 150;
const THROTTLE_MS = 80;

export default function ProximityPrefetcher() {
  const router = useRouter();

  useEffect(() => {
    const prefetched = new Set<string>();
    let lastCheck = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastCheck < THROTTLE_MS) return;
      lastCheck = now;

      const links = document.querySelectorAll<HTMLAnchorElement>('a[href]');

      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('/') || prefetched.has(href)) return;

        const rect = link.getBoundingClientRect();

        // Find the closest point on the element's bounding box to the cursor
        const closestX = Math.max(rect.left, Math.min(e.clientX, rect.right));
        const closestY = Math.max(rect.top, Math.min(e.clientY, rect.bottom));

        const distance = Math.sqrt(
          Math.pow(e.clientX - closestX, 2) +
            Math.pow(e.clientY - closestY, 2)
        );

        if (distance < PROXIMITY_THRESHOLD) {
          router.prefetch(href);
          prefetched.add(href);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [router]);

  return null;
}
