import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { CodeSnippet } from '../../shared/data/types';
import { sliceTokens, tokenize, type TokenType } from './highlight';

const TYPE_MS = 35; // delay between characters
const PAUSE_MS = 2500; // how long a finished snippet stays before the next one

const colors: Record<TokenType, string> = {
  plain: 'text-slate-200',
  keyword: 'text-primary-light',
  tag: 'text-sky-300',
  function: 'text-sky-200',
  string: 'text-emerald-300',
  number: 'text-amber-300',
  comment: 'text-slate-500',
};

// Decorative editor window that types each snippet, pauses, clears, and loops.
function CodeEditor({ snippets }: { snippets: CodeSnippet[] }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0); // which snippet
  const [count, setCount] = useState(0); // how many characters are typed

  const snippet = snippets[index];
  const tokens = useMemo(() => tokenize(snippet.code), [snippet.code]);
  const done = count >= snippet.code.length;

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setTimeout(
      () => {
        if (done) {
          // Clear and move on to the next snippet (back to the first after the last)
          setCount(0);
          setIndex((index + 1) % snippets.length);
        } else {
          setCount(count + 1);
        }
      },
      done ? PAUSE_MS : TYPE_MS,
    );
    return () => clearTimeout(timer);
  }, [count, done, index, snippets.length, reduceMotion]);

  // Reduced motion: show the first snippet fully typed, with no animation
  const visibleTokens = reduceMotion ? tokens : sliceTokens(tokens, count);

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-2xl bg-ink shadow-2xl shadow-primary/20"
    >
      {/* Title bar: window dots + file tab */}
      <div className="flex items-end gap-4 bg-white/5 px-4 pt-3">
        <div className="flex gap-2 pb-3">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-yellow-400" />
          <span className="size-3 rounded-full bg-green-400" />
        </div>
        <span className="rounded-t-lg border-t-2 border-primary bg-ink px-4 py-2 font-mono text-xs text-tint">
          {snippet.fileName}
        </span>
      </div>

      {/* Fixed min height so the window does not resize between snippets */}
      <pre className="min-h-64 overflow-x-auto p-5 font-mono text-xs leading-6 sm:text-sm">
        {visibleTokens.map((token, i) => (
          <span key={i} className={colors[token.type]}>
            {token.text}
          </span>
        ))}
        {!reduceMotion && (
          <span className="inline-block h-[1.1em] w-2 animate-pulse bg-primary-light align-middle" />
        )}
      </pre>
    </div>
  );
}

export default CodeEditor;
