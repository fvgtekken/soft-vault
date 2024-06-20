import './globals.css'
import StyledComponentsRegistry from './lib/registry'
import Head from 'next/head'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html>
    <Head>
        <title>Soft Vault Example</title>
    </Head>
      <Head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'"  key="seciruty" />
      </Head>
      <body>
        <StyledComponentsRegistry >{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}