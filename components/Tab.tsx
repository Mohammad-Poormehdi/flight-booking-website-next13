import { useCallback, useState } from "react";
import Button from "./Button";

const Tabs = ({}) => {
  const [activeTab, setActiveTab] = useState<string | undefined>();
  return (
    <div className="w-full flex gap-5 justify-center items-center bg-white rounded-xl px-3 py-2">
      <Button label="خارجی"></Button>
      <Button label="داخلی"></Button>
    </div>
  );
};
export default Tabs;
