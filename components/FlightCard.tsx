"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";
import Tag from "./Tag";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import clsx from "clsx";
interface FlightCardProps {
  id: string;
  airline: string;
  take_off: string;
  land: string;
  origin: string;
  dest: string;
  price: number;
  seats: number;
}
const FlightCard: React.FC<FlightCardProps> = ({
  id,
  airline,
  take_off,
  land,
  origin,
  dest,
  price,
  seats,
}) => {
  const router = useRouter();
  const number = price;
  const formattedPrice = number
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className="w-full shadow-md bg-white p-5 rounded-xl grid gap-6 grid-cols-4 odd:bg-yellow-300 even:bg-cyan-300">
      {/* price and seats */}
      <div className="space-y-4 text-center px-2 max-md:text-sm max-md:col-span-4 max-md:order-3">
        <div className="flex justify-center items-center gap-2">
          <p>ریال</p>
          <p className="text-2xl font-bold text-blue-600 max-md:text-sm">
            {formattedPrice}
          </p>
        </div>
        <Button
          disable={seats === 0}
          label="خرید بلیط"
          className={clsx(seats === 0 && "cursor-not-allowed opacity-75")}
          active
          onClick={() => {
            axios.post("/api/buy-ticket", { id: id }).then(() => {
              router.push("/success");
            });
          }}
        />
        <div className="flex gap-2 text-sm items-center justify-center">
          {seats === 0 ? (
            <p className="text-rose-600">ظرفیت تکمیل</p>
          ) : (
            <>
              <p>صندلی باقی مانده</p>
              <p>{seats}</p>
            </>
          )}
        </div>
      </div>
      {/* flight info */}
      <div className="space-y-4 col-span-2 max-md:col-span-3 max-md:order-1 ">
        <div className="flex gap-5 justify-end items-center">
          <Tag label="اکونومی" />
          <Tag label="سیستمی" />
        </div>
        <div className="flex gap-3 justify-between items-center">
          <div className="flex gap-2 justify-center items-center">
            <p className="text-xl font-bold">{land}</p>
            <p>{dest}</p>
          </div>

          <div className="w-full h-1 bg-gray-500 rounded-full"></div>
          <div className="flex gap-2 justify-center items-center">
            <p className="text-xl font-bold">{take_off}</p>
            <p>{origin}</p>
          </div>
        </div>
      </div>
      {/* logo and airline */}
      <div className="flex justify-center items-center max-md:order-2 ">
        <div className="space-y-3">
          <Image
            src={
              airline === "قشم ایر"
                ? "/images/qeshm.png"
                : airline === "ایران ایر"
                ? "/images/iran.png"
                : airline === "ساها"
                ? "/images/saha.png"
                : airline === "ماهان"
                ? "/images/mahan.png"
                : airline === "آسمان"
                ? "/images/aseman.png"
                : airline === "کیش ایر"
                ? "/images/kish.png"
                : airline === "flydubai"
                ? "/images/flydubai.png"
                : airline === "Qatar Airways"
                ? "/images/qatar.png"
                : ""
            }
            alt="qeshm air log"
            width={50}
            height={50}
            className="rounded-full bg-white border mx-auto"
          />
          <p>{airline}</p>
        </div>
      </div>
    </div>
  );
};
export default FlightCard;
