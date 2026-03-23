import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Sidebar from "./sidebar/Sidebar";
export default function Layout() {
  return (
    <main className="fixed top-0 left-0 w-full h-full flex">
      <Sidebar />
      <div className="w-[calc(100%_-_220px)] flex flex-col px-[120px] py-[10px]">
        <Navigation />
        <Outlet />
      </div>
    </main>
  );
}
