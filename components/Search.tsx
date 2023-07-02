"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import Input from "./Input";
import qs from "query-string";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

const Search = ({}) => {
  const params = useSearchParams();
  const query = qs.parse(params.toString());
  const router = useRouter();
  const { register, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      origin: "",
      destination: "",
    },
  });
  const onSearch: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updatedQuery: any = {
      ...currentQuery,
      origin: data.origin,
      destination: data.destination,
    };
    const url = qs.stringifyUrl({
      url: "/",
      query: updatedQuery,
    });
    router.push(url);
  };
  return (
    <>
      <div className="w-full flex gap-5 justify-center items-center bg-white rounded-xl px-3 py-2">
        <Button
          onClick={() => {
            const url = qs.stringifyUrl({
              url: "/",
              query: { isInternational: true },
            });
            router.push(url);
          }}
          label="خارجی"
          active={query.isInternational === "true"}
        ></Button>
        <Button
          onClick={() => {
            const url = qs.stringifyUrl({
              url: "/",
              query: { isInternational: false },
            });
            router.push(url);
          }}
          active={query.isInternational === "false"}
          label="داخلی"
        ></Button>
      </div>
      <hr />
      <form onSubmit={handleSubmit(onSearch)}>
        <div className="w-full flex justify-center items-center gap-3 bg-white px-3 py-2 rounded-xl">
          <Button label="جستجو" active />
          <Input {...register("destination")} placeholder="مقصد" />
          <Input {...register("origin")} placeholder="مبدا" />
        </div>
      </form>
    </>
  );
};
export default Search;
