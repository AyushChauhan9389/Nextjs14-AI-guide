import Heroults from "@/components/Heroult";
import Pageult from "@/components/Pageult";
import Navult from "@/components/navult";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const landingPage = () => {
  return (
    <>
      <Navult />
      <Heroults />
      <Pageult />
    </>
  );
};

export default landingPage;