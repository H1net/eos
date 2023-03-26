// components/TextDisplay.tsx
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import gfm from 'remark-gfm'; // import the remark-gfm package

import Embed from './Embed.client';

interface TextDisplayProps {
  markdownText: string;
}

const linkRenderer: FunctionComponent = (props) => {
  const { href, children } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
  const isUrlPreview = href?.startsWith('http://') || href?.startsWith('https://');

  return isUrlPreview && href ? (
    <Embed url={href} />
  ) : (
    <Link href={href || ''}>{children}</Link>
  );
};

const components: Components = {
  a: linkRenderer,
};

const TextDisplay: React.FC<TextDisplayProps> = ({ markdownText }) => {
  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[gfm]} // Pass the gfm plugin to the ReactMarkdown component
      className="markdown-body"
    >
      {markdownText}
    </ReactMarkdown>
  );
};

export default TextDisplay;
