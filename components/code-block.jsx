export default function CodeBlock({code, className}) {

  return (
    <pre
      className={`
        inline-block
        absolute
        ${className}
      `}
    >
      {code}
    </pre>
  )
}