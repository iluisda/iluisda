"use client";
import { motion_animations } from "@/lib/utils";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const sentence: string = `I meticulously weave clean code and best practices to craft seamless digital experiences.
  My focus on user-centric design elevates interfaces into captivating journeys of elegance and functionality.`;
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.007, delayChildren: 0.009 * i },
    }),
  };
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
        {`Hi! I'm Luis`}
      </h1>
      <h4 className="scroll-m-20 text-xl font-light tracking-tight border-b mb-2 text-muted-foreground">
        Frontend Developer
      </h4>
      <motion.div
        style={{ overflow: "hidden", display: "flex" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {sentence.split("").map((char, index) => {
            return (
              <motion.span
                variants={motion_animations}
                key={`${char}-${index}`}
              >
                {char}
              </motion.span>
            );
          })}
        </h3>
      </motion.div>
    </>
  );
};
export default Hero;
