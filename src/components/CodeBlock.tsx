import { useContext } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015, vs } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { ThemeContext } from '../contexts/ThemeContext'
interface CodeBlockProps {
  children: string
  language: string
}

export const CodeBlock = ({ children, language }: CodeBlockProps) => {
  // atomOneDark

  const { isDark } = useContext(ThemeContext)

  const theme = isDark ? vs2015 : vs
  return (
    <SyntaxHighlighter
      style={theme}
      language={language}
      showLineNumbers={true}
      showInlineLineNumbers={false}
      customStyle={{ background: 'transparent' }}
    >
      {children}
    </SyntaxHighlighter>
  )
}
