"use client";
import Blobby from "@/app/components/ui/blobby";
import ShimmerButton from "@/components/ui/shimmerButton";
import Link from "next/link";
import { motion } from "framer-motion";
import SparklesText from "@/components/ui/sparklestxt";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { PROJECT_NAME } from "@/shared";

const Banner = () => {
  return (
    <main>
      <div className="px-6 lg:px-8">
        <Blobby className="bg-purple-500/60 top-12 left-10" />
        <Blobby className="bg-yellow-300/60 h-32  bottom-20 left-40" />
        <Blobby className="bg-green-400/60 top-12 right-10" />
        <Blobby className="bg-cyan-500/60 bottom-3 right-52" />
        <div className="mx-auto max-w-7xl pt-14 sm:pt-16 pb-20 banner-image">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -4 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-7xl font-bold tracking-tight max-w-4xl mx-auto text-navyblue sm:text-5xl lg:text-7xl md:4px">
                <span>
                  <SparklesText text={PROJECT_NAME} /> Generator
                </span>
                <br />
                Where{" "}
                <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse">
                  Creativity
                </span>{" "}
                <br />
                Meet{" "}
                <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 animate-pulse">
                  Efficiency
                </span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.5 }}
            >
              <p className="mt-6 text-lg max-w-prose text-center mx-auto leading-8 text-bluegray">
                Handling the hard part, while you take your content to the top
                chart!
              </p>
            </motion.div>
          </div>

          <div className="text-center mt-5">
            <SignedIn>
              <ShimmerButton size="lg" asChild>
                <Link href="/dashboard">
                  <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-black to-red-900 animate-pulse">
                    Started
                  </span>
                </Link>
              </ShimmerButton>
            </SignedIn>
            <SignedOut>
              <ShimmerButton size="lg" asChild>
                <Link href="/sign-in">Let started</Link>
              </ShimmerButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
