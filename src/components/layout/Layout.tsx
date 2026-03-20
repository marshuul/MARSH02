import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";
import Sidebar from "./sidebar/Sidebar";
export default function Layout() {
  return (
    <main className="fixed top-0 left-0 w-full h-full items-center justify-center flex">
      <Sidebar />
      <div className="flex flex-col">
        <Navigation />
        <Outlet />
      </div>
    </main>
  );
}
