import renderMathInElement from 'katex/contrib/auto-render';
import { useEffect, useRef } from 'react';

export default function KatexSpan({ text, ...delegated }: any) {
  const katexTextRef = useRef();

  useEffect(() => {
    if (katexTextRef.current) {
      renderMathInElement(katexTextRef.current, {
        delimiters: [
          { left: '$$', right: '$$', display: false },
          { left: '$', right: '$', display: true },
        ],
      });
      let list: Array<Element> = [].slice.call(document.getElementsByClassName('katex-mathml'))
      list.forEach((e) => e.remove());
    }
  }, [text]);

  return (
    <div ref={katexTextRef} {...delegated}>
      {text}
    </div>
  );

}
