import type {Metadata} from 'next';
import '@fontsource/space-grotesk/latin-500.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-600.css';
import './globals.css';
import './editorial.css';
export const metadata:Metadata={title:'Williams B&R GmbH | Bau & Rückbau in Hamburg',description:'Entkernung, Abbruch, Hochbau und Tiefbau. Williams B&R GmbH – Ihr Ansprechpartner in Hamburg und deutschlandweit.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="de"><body>{children}</body></html>}
