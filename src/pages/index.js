import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Queue Enterprise</title>
        <meta
          name="description"
          content="Quality Computer Experiences"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-center justify-center md:flex-col mx-auto">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full mx-auto">
              <Image
                src={profilePic}
                alt=""
                className="h-auto w-3/4 mx-auto"
                sizes="10vw"
                quality={100}
                priority
              />
            </div>

            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Quality Computer Experiences"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                The perpetual disconnect between earth and our digital lives persists. 
                As we spend increasing amounts of time indoors, 
                algorithms learn from our data and perpetuate further indoor activities. 
                This represents only half of the problem;
                there is a growing challenge in accessing nature,
                Climate action & consumer based artificial intelligent product cohesion remains largely absent from our digital experiences. 
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="https://labs.queue.cx"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Lab  
                  <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>
                <Link
                  href="labs.queue.cx"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                </Link>
                <Link
                  href="https://forms.gle/vCcRPenxRFUM8Bue8"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                    capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                    dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    md:p-2 md:px-4 md:text-base ml-4
                  `}
                >
                  Waitlist
                  <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </article>
    </>
  );
}
