import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
interface CodeBlockProps {
  children: string
  language: string
}

export const CodeBlock = ({ children, language }: CodeBlockProps) => {
  // atomOneDark
  return (
    <SyntaxHighlighter
      style={vs2015}
      language={language}
      showLineNumbers={true}
      showInlineLineNumbers={false}
      customStyle={{ background: 'transparent' }}
    >
      {children}
    </SyntaxHighlighter>
  )
}
