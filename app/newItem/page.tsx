import Link from "next/link";

export default function NewItem() {
  return (
    <>
      <div className="bg-white">
        <div className="flex justify-center flex-col items-center text-2xl p-24 font-bold">
          <span className="mt-10">NEW 💫</span>
          <span className="p-10 font-medium">새로운 신상품 🔥</span>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-10">
            <Link href="/newdetail" className="sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img src="1.png" className="w-full h-auto rounded-lg"></img>
            </Link>
            <Link href="/newdetail" className="sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img src="1.png" className="w-full h-auto rounded-lg"></img>
            </Link>
            <Link href="/newdetail" className="sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img src="1.png" className="w-full h-auto rounded-lg"></img>
            </Link>
            <Link href="/newdetail" className="sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img src="1.png" className="w-full h-auto rounded-lg"></img>
            </Link>
            <Link href="/newdetail" className="sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img src="1.png" className="w-full h-auto rounded-lg"></img>
            </Link>
            <Link href="/newdetail" className="sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img src="1.png" className="w-full h-auto rounded-lg"></img>
            </Link>
            <Link href="/newdetail" className="sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img src="1.png" className="w-full h-auto rounded-lg"></img>
            </Link>
            <Link href="/newdetail" className="sm:w-1/2 md:w-1/3 lg:w-1/5">
              <img src="1.png" className="w-full h-auto rounded-lg"></img>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
