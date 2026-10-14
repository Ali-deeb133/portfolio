// Code-editor style visual for backend projects (used instead of a screenshot).
function ApiPreview({ code }: { code: string }) {
  return (
    <div aria-hidden="true" className="h-full bg-ink p-5">
      {/* Fake window buttons */}
      <div className="flex gap-2">
        <span className="size-3 rounded-full bg-red-400" />
        <span className="size-3 rounded-full bg-yellow-400" />
        <span className="size-3 rounded-full bg-green-400" />
      </div>

      <pre className="mt-5 overflow-x-auto font-mono text-sm leading-7 text-tint">
        {code.split('\n').map((line) => {
          // First word (GET, POST, ...) is highlighted, the rest keeps its spacing
          const [method, ...rest] = line.split(' ');
          return (
            <span key={line} className="block">
              <span className="font-semibold text-primary-light">{method}</span>{' '}
              {rest.join(' ')}
            </span>
          );
        })}
      </pre>
    </div>
  );
}

export default ApiPreview;
