import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config.js";
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <div className="backgroundParticles">
      <h1 className="like">Hi</h1>
      <Particles init={particlesInit} options={particlesConfig} />
    </div>
  );
};

export default ParticlesBackground;
