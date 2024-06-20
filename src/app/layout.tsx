import Head from 'next/head'
import './globals.css'
import StyledComponentsRegistry from './lib/registry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
   <html lang="en">
      <title>Soft Vault Demo</title>
      <Head>
        <meta http-equiv="Content-Security-Policy" content="script-src 'none'" key='security' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"  key='viewport' />
        <meta name="this is a test for soft vault" content="Soft-Vault Test" />
      </Head>
      <body>
        <StyledComponentsRegistry >{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}