import { GetAppointment } from "@/components/GetAppointment";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Instagram, Twitter, Facebook } from "lucide-react"

export default function Home() {

  // Define the routes for the header
  const headerRoutes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="">
      <Header brandName="YarrakBerber" routes={headerRoutes} />
      <Hero videoSrc="/heroVideo.mp4" title="Welcome to Our Barber Shop"
        socials={[
          { icon: <Instagram />, link: "https://instagram.com" },
          { icon: <Facebook />, link: "https://facebook.com" },
        ]} />
      <GetAppointment />
    </div>
  );
}
