import React from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import "./Layout.css";
import TopAlbum from "./components/topAlbum/TopAlbum";
import NewAlbum from "./components/newAlbum/NewAlbum";
import Faqs from "./components/Faqs/Faqs";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Songs from "./components/Songs/Songs";

/**
 * Represents the layout component of the application.
 * Renders the navigation bar and various sections/components.
 * @returns {JSX.Element} The rendered layout component.
 */
const Layout = () => {
  return (
    <div className="layout">
      {/* Render the navigation bar */}
      <NavBar />

      {/* Render the hero section */}
      <HeroSection />

      {/* Render the top albums section */}
      <TopAlbum />

      {/* Render the new albums section */}
      <NewAlbum />
      {/* Songs Section */}
      <Songs/>
      {/* Render the FAQs section */}
      <Faqs />
      {/* Render the Audio Player */}
      <AudioPlayer />
    </div>
  );
};

export default Layout;