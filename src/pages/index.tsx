import Image from "next/image";
import localFont from "next/font/local";

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="w-auto h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          src="/forrest.jpg"
          alt="forrest"
          width={1944}
          height={2592}
          priority
        />
      </main>
    </div>
  );
}
