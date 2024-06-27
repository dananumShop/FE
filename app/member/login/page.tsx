import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col items-center px-20">
      <div className=" flex flex-col items-center *:font-medium gap-6 mt-36">
        <span className="text-5xl">LOGIN</span>
        <h1 className="text-2xl">글~~</h1>
      </div>
      <div className="flex justify-between items-center w-2/4">
        {/* 회원로그인 div */}
        <div className="w-2/3">
          <h3 className="flex flex-col items-center">회원 로그인</h3>
          <form className="">
            <div className="flex flex-col gap-3 py-3">
              <input
                className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-slate-400 ring-1"
                type="text"
                placeholder=" 아이디"
                required
              ></input>
              <input
                className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-slate-400 ring-1"
                type="text"
                placeholder=" 비밀번호"
                required
              ></input>
              {/* 체크박스 */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-slate-400 focus:ring-slate-400 ring-1"
                />
                <label htmlFor="remember-me" className="ml-2 text-gray-600">
                  아이디 저장
                </label>

                <input
                  id="auto-login"
                  type="checkbox"
                  className="ml-8 h-4 w-4 text-slate-400 focus:ring-slate-400 ring-1"
                />
                <label htmlFor="auto-login" className="ml-2 text-gray-600">
                  자동 로그인
                </label>
              </div>
              <button className="h-10 bg-slate-400 rounded-md">로그인</button>
              <div className="flex text-xs justify-between">
                <button className="h-10 bg-white rounded-md">
                  아이디/비밀번호 찾기
                </button>
                <button className="h-10 bg-white rounded-md">회원가입</button>
              </div>
              <button className="h-10 bg-slate-400 rounded-md">
                소셜로그인
              </button>
            </div>
          </form>
        </div>
        <div className="border-r border-slate-200 h-72 mx-7 mt-6"></div>
        {/* 비회원로그인 div */}
        <div className="w-2/3">
          <h3 className="flex flex-col items-center">비회원 주문조회</h3>
          <form>
            <div className="flex flex-col gap-3 py-3">
              <input
                className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-slate-400 ring-1"
                type="text"
                placeholder=" 이름"
                required
              ></input>
              <input
                className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-slate-400 ring-1"
                type="text"
                placeholder=" 주문번호"
                required
              ></input>
              <input
                className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-slate-400 ring-1"
                type="text"
                placeholder=" 비밀번호"
                required
              ></input>
              <button className="h-10 bg-slate-400 rounded-md">주문조회</button>
              <button className="h-10 bg-slate-400 rounded-md">
                주문번호/비밀번호 찾기
              </button>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
