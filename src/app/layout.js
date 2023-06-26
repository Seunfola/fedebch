import './globals.css'
import { Inter, Poppins, Anydore } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import {ThemeProvider} from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Federal Estate Baptist Church',
  description: 'This is the homepage of federal estate Baptist church Abesan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <div className='container'>
           
            {children}
            
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
