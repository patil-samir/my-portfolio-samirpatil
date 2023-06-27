import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MyName(props: { finishedLoading: boolean }) {
  const router = useRouter();
  return (
    <div
      
      className="h-full flex flex-col justify-center
      px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52  "
    >
      
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 4.4, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 4.4, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-AAsecondary font-mono"
        >
          Hi, my name is
        </motion.span>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 4.5, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 4.5, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-300 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
        >
          Samir Patil.
        </motion.h1>
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 4.6, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 4.6, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-400 font-bold text-3xl lg:text-7xl sm:text-5xl md:text-6xl mt-4"
        >
          Driving Innovation through Web Development
        </motion.h2>

        <motion.h3
          initial={{ y: 4, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 4.7, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 4.7, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="text-gray-400 font-Header text-sm md:text-lg sm:text-md mt-10 tracking-wider"
        >
          I&apos;m a <span className="text-AAsecondary">web developer</span> proficient in PHP, NodeJS, JavaScript, and frameworks such as ReactJS. Passionate about creating innovative and user-friendly solutions.
          <br className="md:block hidden" />
        </motion.h3>
        <motion.div
          initial={{ y: 4, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: props.finishedLoading ? 0 : 4.8, duration: props.finishedLoading ? 0 : 0.2 },
            y: { delay: props.finishedLoading ? 0 : 4.8, duration: props.finishedLoading ? 0 : 0.2 },
          }}
          className="mt-12"
        >
          <a href={"/Resume_Samir_Patil_Web_Developer.pdf"} target={"_blank"} rel="noreferrer">

          <button
            className="bg-AAprimary text-AAsecondary border rounded px-4 sm:px-8 py-3 sm:py-4 border-AAsecondary"
          >
            Check out my resume!
          </button>
          </a>
        </motion.div>
      
    </div>
  );
}
