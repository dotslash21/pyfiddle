import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Output from "../components/output/output";

const Editor = dynamic(() => import("../components/editor/editor"), {
  ssr: false,
});

const Home: NextPage = () => {
  const onRun = (code: string) => {
    console.log(code);
  };

  return <Editor onRun={onRun} />;
};

export default Home;
