import { useEffect } from 'react';

// Module-level flag: survives re-renders and React StrictMode's double effect run,
// so each URL is requested only once per page visit.
let alreadySent = false;

// After the page has fully loaded, quietly pings sleeping free-tier backends
// so they are awake by the time a visitor opens a live demo.
export function useWakeBackends(urls: string[]) {
  useEffect(() => {
    const wake = () => {
      if (alreadySent) return;
      alreadySent = true;
      urls.forEach((url) => {
        // "no-cors": we don't need to read the response, just reach the server.
        // Errors are ignored — this is a best-effort warm-up.
        fetch(url, { mode: 'no-cors' }).catch(() => {});
      });
    };

    if (document.readyState === 'complete') {
      wake();
    } else {
      window.addEventListener('load', wake, { once: true });
      return () => window.removeEventListener('load', wake);
    }
  }, [urls]);
}
