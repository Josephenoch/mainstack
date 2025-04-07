import "@/styles/globals.css";
import localFont from "next/font/local";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const degular = localFont({
  src: [
    {
      path: "../public/fonts/DegularDemo-Thin.otf",
      weight: "100",
      style: "normal"
    },{
      path: "../public/fonts/DegularDemo-ThinItalic.otf",
      weight: "100",
      style: "italic"
    },{
      path: "../public/fonts/DegularDemo-Light.otf",
      weight: "300",
      style: "normal"
    },{
      path: "../public/fonts/DegularDemo-LightItalic.otf",
      weight: "300",
      style: "italic"
    },{
      path: "../public/fonts/DegularDemo-Regular.otf",
      weight: "400",
      style: "normal"
    },{
      path: "../public/fonts/DegularDemo-Italic.otf",
      weight: "400",
      style: "italic"
    },{
      path: "../public/fonts/DegularDemo-Medium.otf",
      weight: "500",
      style: "normal"
    },{
      path: "../public/fonts/DegularDemo-MediumItalic.otf",
      weight: "500",
      style: "italic"
    },{
      path: "../public/fonts/DegularDemo-Semibold.otf",
      weight: "600",
      style: "normal"
    },{
      path: "../public/fonts/DegularDemo-SemiboldItalic.otf",
      weight: "600",
      style: "italic"
    },{
      path: "../public/fonts/DegularDemo-Bold.otf",
      weight: "700",
      style: "normal"
    },{
      path: "../public/fonts/DegularDemo-BoldItalic.otf",
      weight: "700",
      style: "italic"
    },{
      path: "../public/fonts/DegularDemo-Black.otf",
      weight: "900",
      style: "normal"
    },{
      path: "../public/fonts/DegularDemo-BlackItalic.otf",
      weight: "900",
      style: "italic"
    },

  ],
  variable: "--font-degular"
})

const queryClient = new QueryClient()


export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${degular.variable} font-degular`}>
        <Component {...pageProps} />
        <div id="modal-portal"/>

      </main>
    </QueryClientProvider>
  )
 

}
