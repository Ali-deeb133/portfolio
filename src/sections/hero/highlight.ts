// A tiny syntax highlighter: splits code into colored pieces ("tokens").
// It only knows the few things our short snippets need — it is not a real parser.

export type TokenType =
  | 'comment'
  | 'string'
  | 'keyword'
  | 'tag'
  | 'number'
  | 'function'
  | 'plain';

export interface Token {
  text: string;
  type: TokenType;
}

// One capture group per token type, in the same order as `groupTypes` below.
const pattern = new RegExp(
  [
    /(\/\/.*)/, // comment: // until end of line
    /('[^'\n]*'|"[^"\n]*")/, // string in single or double quotes
    /(\b(?:import|from|export|default|function|return|const|async|await)\b|=>)/, // keyword
    /(<\/?[A-Za-z]\w*|\/?>)/, // JSX tag: <div, </div, >, />
    /(\b\d+\b)/, // number
    /(\b[A-Za-z_]\w*(?=\())/, // function name: a word followed by "("
  ]
    .map((part) => part.source)
    .join('|'),
  'g',
);

const groupTypes: TokenType[] = ['comment', 'string', 'keyword', 'tag', 'number', 'function'];

export function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  let lastEnd = 0;

  for (const match of code.matchAll(pattern)) {
    // Text between two matches has no special color
    if (match.index > lastEnd) {
      tokens.push({ text: code.slice(lastEnd, match.index), type: 'plain' });
    }
    // match[1..6] are the groups; exactly one of them is filled
    const groupIndex = match.slice(1).findIndex((group) => group !== undefined);
    tokens.push({ text: match[0], type: groupTypes[groupIndex] });
    lastEnd = match.index + match[0].length;
  }

  if (lastEnd < code.length) {
    tokens.push({ text: code.slice(lastEnd), type: 'plain' });
  }
  return tokens;
}

// Keeps only the first `count` characters, cutting the last token if needed.
// This is how the typing effect shows half-typed code with the right colors.
export function sliceTokens(tokens: Token[], count: number): Token[] {
  const result: Token[] = [];
  let remaining = count;

  for (const token of tokens) {
    if (remaining <= 0) break;
    result.push({ ...token, text: token.text.slice(0, remaining) });
    remaining -= token.text.length;
  }
  return result;
}
