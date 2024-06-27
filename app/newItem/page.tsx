import Link from "next/link";

export default function NewItem() {
  return (
    <>
      <div className="bg-lime-200">
        <div className="flex justify-center flex-col items-center text-2xl p-24 font-bold">
          <span className="mt-10">NEW 💫</span>
          <span className="p-10 font-medium">새로운 신상품 🔥</span>
        </div>
        <div className="flex items-center gap-4 px-40 justify-center ">
          <Link href="/newdetail">
            <img src="1.png" className="w-full mb-20 min-h-28 min-w-20"></img>
          </Link>
          <Link href="/newdetail">
            <img src="1.png" className="w-full mb-20 min-h-28 min-w-20"></img>
          </Link>
          <Link href="/newdetail">
            <img src="1.png" className="w-full mb-20 min-h-28 min-w-20"></img>
          </Link>
          <Link href="/newdetail">
            <img src="1.png" className="w-full mb-20 min-h-28 min-w-20"></img>
          </Link>
          <Link href="/newdetail">
            <img src="1.png" className="w-full mb-20 min-h-28 min-w-20"></img>
          </Link>
        </div>
      </div>
    </>
  );
}
