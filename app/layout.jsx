
import Header from './components/Header'
import './globals.css'
import { Providers } from './provider'


export default function Layout({ children }) {
  return (
    <html lang='en'>
      <Providers>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
        <body className={`flex flex-col overflow-x-hidden`}>
          <Header />
          <div className="">{children}</div>
        </body>
      </Providers>
    </html>
  )
}
