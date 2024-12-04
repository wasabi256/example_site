import React from "react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1>Let's start Next.js</h1>
      <p>
        Next.jsはtypescript,javascriptで記述できるフレームワークです。非常に単純に記述でき、様々なライブラリによって快適にコーディングできます。1月終わりくらいには開発始めたいなぁ(心の声)
      </p>
      <Link href={"https://nextjs.org/"}>
        <div className="">
          <Image src={"/src/next_logo.png"} width={50} height={50} alt="logo" />
          <div>公式サイトはこちら</div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
