// File app.js
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import AchievementsSection from "./components/AchievementsSection";
import Footer from "./components/Footer";
import { Sora } from "next/font/google";
import ParticlesComponent from "./components/ParticlesComponent";

const sora = Sora({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col bg-fixed"
      // style={{
      //   backgroundImage: 'url("/bg-all.jpg")',
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
        <ParticlesComponent />
      <div className={sora.className}>
        <Navbar />
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
