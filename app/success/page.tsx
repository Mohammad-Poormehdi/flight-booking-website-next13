"use client";

import Button from "@/components/Button";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { IoTicketOutline } from "react-icons/io5";

const Success = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>پرداخت موفق</title>
        <meta name="description" content="پرداخت موفق بود" />
      </Head>
      <div className="absolute inset-0 flex justify-center items-center bg-gray-200">
        <div className="space-y-6">
          <IoTicketOutline size={100} className="mx-auto" />
          <h1 className="text-2xl font-bold">بلیط شما با موفقیت خریداری شد</h1>
          <Button
            label="بازگشت به صفحه اصلی"
            onClick={() => {
              router.push("/");
            }}
            active
          />
        </div>
      </div>
    </>
  );
};
export default Success;
