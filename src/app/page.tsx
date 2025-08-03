import { GetAppointment } from "@/components/GetAppointment";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Instagram, Twitter, Facebook, ScissorsIcon, HeartPlus, BottleWine } from "lucide-react"

export default function Home() {

  // Define the routes for the header
  const headerRoutes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Define the social media links
  const socialLinks = [
    { icon: <Instagram />, link: "https://instagram.com" },
    { icon: <Twitter />, link: "https://twitter.com" },
    { icon: <Facebook />, link: "https://facebook.com" },
  ];

  // Define the services offered
  const services = [
    { icon: <ScissorsIcon />, title: "Haircut" },
    { icon: <BottleWine />, title: "Beard Care" },
    { icon: <HeartPlus />, title: "Styling" }
  ];

  return (
    <div className="">
      <Header brandName="YarrakBerber" routes={headerRoutes} />
      <Hero
        videoSrc="/heroVideo.mp4"
        title="Yarakoğlu berber'e Hoş Geldiniz"
        socials={socialLinks}
        services={services}
      />
      <GetAppointment />
    </div>
  );
}
