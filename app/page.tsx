// import Contact from "@/components/Contact";
import Filter from "@/components/Filter";
import FlightCard from "@/components/FlightCard";
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import { useState, useCallback } from "react";
import Head from "next/head";
import axios from "axios";
import Button from "@/components/Button";
import getFlights, { IFlightsParams } from "./actions/getFlights";
import Flights from "@/components/Flights";
import Contact from "@/components/Contact";

interface HomeParams {
  searchParams: IFlightsParams;
}

const Home = async ({ searchParams }: HomeParams) => {
  const internationalFlights = await getFlights(searchParams);
  return (
    <>
      <Head>
        <title>رزرو بیگزاده</title>
        <meta name="description" content="سایت رزور بلیط هواپیما بیگزاده" />
      </Head>
      <div className=" bg-no-repeat bg-cover bg-center max-md:h-auto">
        <div className={`flex justify-center items-center max-md:h-auto`}>
          <div className="background bg-right h-[560px] bg-cover absolute w-full top-0 -z-10"></div>
          <div className="space-y-10 p-5 w-[850px] max-md:w-full text-center">
            <div className="px-5 py-4 rounded-full shadow-lg bg-white">
              <Logo />
            </div>
            <div className="bg-white rounded-xl p-5 space-y-3 shadow-xl">
              <h2 className="text-xl">پرواز خود را جستجو کنید</h2>
              <Search />
              <hr />
              <Filter />
            </div>
            <Flights flights={internationalFlights} />
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
};
export default Home;
