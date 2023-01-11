import Head from "next/head";
import Image from "next/image";
import themeImg from "../public/static/skerries-windmill.jpg";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Skerries</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex"></meta>
      </Head>
      <div className="relative lg:absolute lg:h-screen lg:w-full">
        <Image
          className="z-0 absolute w-full h-screen object-cover"
          src={themeImg}
          quality={50}
          alt="Skerries Rules"
        />
        <div className="absolute z-10 rounded-md w-full h-screen bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="relative flex flex-col place-content-end w-full h-screen">
        <div className="relative flex w-full z-20 xl:px-24 xl:pb-12 2xl:px-44 2xl:pb-24">
          <div className="hidden lg:flex w-1/3 flex-col place-content-end pr-10">
            <h1 className="text-6xl 2xl:text-8xl text-slate-100">Skerries</h1>
            <p className="text-slate-100 text-3xl">A real nice place to be</p>
            <img
              className="py-4"
              src="/static/wiggle-wave.png"
              width="205"
              height="22"
              alt="Skerries Rules"
            />
            <p className="text-slate-100 text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              placerat porta sem sit amet ullamcorper. In nibh turpis, luctus ac
              urna vitae, efficitur bibendum ante
            </p>
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-slate-100 text-4xl pb-3">What's On</h2>
            <div className="grid grid-cols-4 grid-rows-6 gap-2">
              <div className="flex justify-between bg-slate-100 drop-shadow-md col-span-2 rounded-md py-2 px-3">
                <div>
                  <div className="text-base text-black pb-4">
                    Freezing Cold Swim
                  </div>
                  <div className="text-sm text-slate-500">
                    Skerries South Beach
                  </div>
                </div>
                <div>
                  <div className="text-base text-slate-500 pb-4 text-right">
                    Daily
                  </div>
                  <div className="text-sm text-slate-500 text-right">
                    6.30am
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-slate-100 drop-shadow-md col-span-2 rounded-md py-2 px-3 row-start-2 row-end-3">
                <div>
                  <div className="text-base text-black pb-4">Mad Session</div>
                  <div className="text-sm text-slate-500">
                    <p>Jack Dinan's Gaff</p>
                  </div>
                </div>
                <div>
                  <div className="text-base text-slate-500 pb-4 text-right">
                    Friday 13th Jan
                  </div>
                  <div className="text-sm text-slate-500 text-right">
                    8.30pm
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-slate-100 drop-shadow-md col-span-2 rounded-md py-2 px-3 row-start-3 row-end-4">
                <div>
                  <div className="text-base text-black pb-4">Mad Session</div>
                  <div className="text-sm text-slate-500">
                    <p>Jack Dinan's Gaff</p>
                  </div>
                </div>
                <div>
                  <div className="text-base text-slate-500 pb-4 text-right">
                    Friday 13th Jan
                  </div>
                  <div className="text-sm text-slate-500 text-right">
                    8.30pm
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-slate-100 drop-shadow-md col-span-2 rounded-md py-2 px-3 row-start-4 row-end-5">
                <div>
                  <div className="text-base text-black pb-4">Mad Session</div>
                  <div className="text-sm text-slate-500">
                    <p>Jack Dinan's Gaff</p>
                  </div>
                </div>
                <div>
                  <div className="text-base text-slate-500 pb-4 text-right">
                    Friday 13th Jan
                  </div>
                  <div className="text-sm text-slate-500 text-right">
                    8.30pm
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-slate-100 drop-shadow-md col-span-2 rounded-md py-2 px-3 row-start-5 row-end-6">
                <div>
                  <div className="text-base text-black pb-4">Mad Session</div>
                  <div className="text-sm text-slate-500">
                    <p>Jack Dinan's Gaff</p>
                  </div>
                </div>
                <div>
                  <div className="text-base text-slate-500 pb-4 text-right">
                    Friday 13th Jan
                  </div>
                  <div className="text-sm text-slate-500 text-right">
                    8.30pm
                  </div>
                </div>
              </div>
              <div className="flex justify-between bg-slate-100 drop-shadow-md col-span-2 rounded-md py-2 px-3 row-start-6">
                <div>
                  <div className="text-base text-black pb-4">Mad Session</div>
                  <div className="text-sm text-slate-500">
                    <p>Jack Dinan's Gaff</p>
                  </div>
                </div>
                <div>
                  <div className="text-base text-slate-500 pb-4 text-right">
                    Friday 13th Jan
                  </div>
                  <div className="text-sm text-slate-500 text-right">
                    8.30pm
                  </div>
                </div>
              </div>
              <div className="relative col-span-2 row-span-3 col-start-3">
                <div className="flex flex-col place-content-end relative rounded-md w-full h-full bg-slate-500">
                  <img
                    src="/static/old-skez.jpg"
                    className="absolute z-0 rounded-md w-full h-full object-cover"
                    alt="Historical Photo of Skerries"
                  />
                  <div className="absolute z-10 rounded-md w-full h-full bg-gradient-to-b from-transparent to-black"></div>
                  <div className="relative z-20 px-3 py-2">
                    <h3 className="text-2xl text-slate-100">
                      Skerries History
                    </h3>
                    <p className="text-base text-slate-100">
                      Lets learn all about old-school Skez. When things were
                      supposedly wonderful accoring to old people.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row-span-3 col-start-3 row-start-4">
                <div className="flex flex-col place-content-end relative rounded-md w-full h-full bg-slate-500"></div>
              </div>
              <div className="row-span-3 col-start-4   row-start-4">
                <div className="flex flex-col place-content-end relative rounded-md w-full h-full bg-slate-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        John the baby
        <br />
        John Doe
      </div>
    </>
  );
}
