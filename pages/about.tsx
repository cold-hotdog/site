import { NextPage } from "next";
import Head from "next/head";
import { FunctionComponent } from "react";

import Bink from "../components/Bink";
import GitHub from "../components/icons/GitHub";
import LinkedIn from "../components/icons/LinkedIn";
import Twitter from "../components/icons/Twitter";
import {
  AUTHOR_FIRST_NAME,
  AUTHOR_FULL_NAME,
  AUTHOR_TWITTER_HANDLE,
} from "../lib/constants";

const TITLE = `About ${AUTHOR_FULL_NAME}`;
const DESCRIPTION = `Know more about ${AUTHOR_FULL_NAME}.`;

const ExternalLinks: FunctionComponent = () => {
  return (
    <>
      <Bink
        href="https://www.github.com/makkoncept"
        className="button button-text"
        isExternal={true}
      >
        <GitHub className="w-5 h-5 md:w-7 md:h-7" />
      </Bink>
      <Bink
        href="https://www.linkedin.com/in/makkoncept/"
        className="button button-text"
        isExternal={true}
      >
        <LinkedIn className="w-5 h-5 md:w-7 md:h-7" />
      </Bink>
      <Bink
        href="https://www.twitter.com/mayankNader"
        className="button button-text"
        isExternal={true}
      >
        <Twitter className="w-5 h-5 md:w-7 md:h-7" />
      </Bink>
    </>
  );
};

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://mayanknader.com/about"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={AUTHOR_TWITTER_HANDLE} />
        <meta name="twitter:creator" content={AUTHOR_TWITTER_HANDLE} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Head>
      <section className="flex flex-col-reverse space-y-8 space-y-reverse md:justify-between md:flex-row md:space-y-0">
        <section className="flex flex-col justify-between space-y-6 md:space-y-8">
          <section className="space-y-1 md:space-y-2">
            <p className="text-2xl font-bold text-gray-900 md:text-4xl dark:text-gray-50">
              Hi 👋
            </p>
            <h1 className="space-x-2 text-xl font-semibold text-gray-500 md:text-2xl dark:text-gray-400">
              I am {AUTHOR_FIRST_NAME}, a Software Engineer at HackerRank.
            </h1>
          </section>
          <section className="flex flex-row space-x-4">
            <ExternalLinks />
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
