// ParticlesComponent.jsx
"use client";
import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Handle particle movement based on mouse position or other events
      console.log("Mouse coordinates:", event.clientX, event.clientY);
    };

    // Check if window is defined to ensure we are in a client-side context
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="z-[-1]"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#121212",
          },
          // Set the background to be static (not moving)
          position: "absolute",
          repeat: "no-repeat",
          size: "cover",
          zIndex: 0,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false, // Disable onClick event
            },
            onHover: {
              enable: false, // Disable onHover event
            },
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#956436",
          },
          links: {
            color: "#956436",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1, // Adjust the speed of particle movement
            outModes: {
              default: "bounce",
            },
            random: false,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
