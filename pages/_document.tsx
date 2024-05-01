import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html style={{scrollBehavior: "smooth"}}>
      <Head />
      <body style={{margin: 0}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
