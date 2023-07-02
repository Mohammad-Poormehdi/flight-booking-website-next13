"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import qs from "query-string";

const Filter = ({}) => {
  const router = useRouter();
  const params = useSearchParams();
  const onFilter = (data: any) => {
    let currentQuery: any = {};
    if (params) {
      [(currentQuery = qs.parse(params.toString()))];
    }
    if (data.mostExpensive) {
      delete currentQuery.earliest;
    }
    if (data.earliest) {
      delete currentQuery.mostExpensive;
    }
    const updatedQuery = {
      ...currentQuery,
      ...data,
    };
    const url = qs.stringifyUrl({
      url: "/",
      query: updatedQuery,
    });
    router.push(url);
  };
  return (
    <div className="w-full px-3 py-2 gap-3 flex items-center justify-between max-md:text-xs">
      <Button
        onClick={() => onFilter({ mostExpensive: false })}
        label="ارزان ترین"
        className="border"
      />
      <Button
        onClick={() => onFilter({ mostExpensive: true })}
        label="گران ترین"
        className="border"
      />
      <Button
        onClick={() => onFilter({ earliest: false })}
        label="دیر ترین"
        className="border"
      />
      <Button
        onClick={() => onFilter({ earliest: true })}
        label="زود ترین"
        className="border"
      />
      <p className="w-full">مرتب سازی</p>
    </div>
  );
};
export default Filter;
