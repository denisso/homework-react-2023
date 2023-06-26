import getAbout from "../api/getAbout";
import BlockWrapper from "@/components/BlockWrapper";

const Page = () => {
  const about = getAbout();
  return <BlockWrapper>{about}</BlockWrapper>;
};

export default Page;
