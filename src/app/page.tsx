import React from "react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl underline decoration-blue-600">
        Let's start Next.js
      </h1>
      <p className="max-w-xl break-words m-4 font-semibold">
        Next.jsはtypescript,javascriptで記述できるフレームワークです。非常に単純に記述でき、様々なライブラリによって快適にコーディングできます。1月終わりくらいには開発始めたいなぁ(心の声)
      </p>
      <Link href={"https://nextjs.org/"}>
        <div className="flex justify-center items-center bg-blue-600 rounded-md p-2">
          <Image src={"/next_logo.png"} width={50} height={50} alt="logo" />
          <div className="font-bold">公式サイトはこちら</div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
