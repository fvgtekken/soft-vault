import './globals.css'
import StyledComponentsRegistry from './lib/registry'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html>
      <title>Soft Vault Example</title>
      <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self'"  key="seciruty" />
      <body>
        <StyledComponentsRegistry >{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}