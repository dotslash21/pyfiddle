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

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-4">
        <Editor onRun={onRun} />
        <Output value={"Hello, World!"} />
      </div>
    </div>
  );
};

export default Home;
