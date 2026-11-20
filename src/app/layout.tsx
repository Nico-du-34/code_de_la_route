import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Code — Révision du permis B',description:'Application personnelle gratuite pour réviser le code de la route.',applicationName:'Code',manifest:'/manifest.webmanifest',appleWebApp:{capable:true,statusBarStyle:'default',title:'Code'},icons:{icon:[{url:'/icons/icon-192.png',type:'image/png',sizes:'192x192'},{url:'/icons/icon-512.png',type:'image/png',sizes:'512x512'}],apple:[{url:'/icons/icon-180.png',sizes:'180x180',type:'image/png'}]}};
export const viewport:Viewport={themeColor:'#f7f7f5',width:'device-width',initialScale:1,viewportFit:'cover'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
