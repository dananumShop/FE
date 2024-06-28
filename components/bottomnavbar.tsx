export default function BottomNavBar() {
  return (
    <>
      <nav className="bg-gray-800 p-4 text-white fixed bottom-0 left-0 right-0 z-10 sm:hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Bottom Navbar</div>
          {/* 추가적인 Navbar 메뉴나 로고 등 */}
        </div>
      </nav>
    </>
  );
}
