import {
  HomeIcon,
  MenuIcon,
  SearchIcon,
  YoutubeIcon,
} from "../../../assets/icons";
import ProjectIcon from "../../../assets/icons/project/ProjectIcon";
import LogoComponent from "../../logo/LogoComponent";

export default function Sidebar() {
  return (
    <>
      <aside className="w-[220px] h-full bg-[var(--solid)] border-r border-[var(--border)] py-[10px] flex flex-col gap-y-[10px]">
        <header className="w-full h-[36px] items-center justify-between flex px-[10px]">
          <div className="items-center flex gap-[10px]">
            <LogoComponent width="24px" height="24px" />
            <div className="flex flex-col">
              <h1 className="text-[12px] text-[var(--white)] font-[600] uppercase">
                MARSH02
              </h1>
              <p className="text-[10px] text-[var(--white)] font-[500] mt-[-4px]">
                Created For Users
              </p>
            </div>
          </div>
          <button
            type="button"
            className="w-[32px] h-[32px] items-center justify-center flex rounded-[6px] hover:bg-[var(--focus)]"
          >
            <MenuIcon color="var(--white)" width={18} height={18} />
          </button>
        </header>
        <div className="w-full h-auto flex flex-col mt-[30px]">
          <header className="w-full h-auto px-[14px] py-[4px]">
            <p className="text-[12px] text-[var(--white)] font-[500] uppercase">
              General
            </p>
          </header>
          <button
            type="button"
            className="w-full h-[38px] items-center justify-between flex px-[12px] hover:bg-[var(--focus)]"
          >
            <div className="items-center flex gap-[12px]">
              <HomeIcon color="var(--gray)" width={18} height={18} />
              <p className="text-[14px] text-[var(--white)] font-[500]">Home</p>
            </div>
          </button>
          <button
            type="button"
            className="w-full h-[38px] items-center justify-between flex px-[12px] hover:bg-[var(--focus)]"
          >
            <div className="items-center flex gap-[12px]">
              <SearchIcon color="var(--gray)" width={18} height={18} />
              <p className="text-[14px] text-[var(--white)] font-[500]">
                Search
              </p>
            </div>
            <span className="text-[10px] text-[var(--gray)] font-[600] uppercase">
              CTRL + K
            </span>
          </button>
          <button
            type="button"
            className="w-full h-[38px] items-center justify-between flex px-[12px] hover:bg-[var(--focus)]"
          >
            <div className="items-center flex gap-[12px]">
              <YoutubeIcon
                color="var(--gray)"
                width={16}
                height={16}
                className="ml-[2px]"
              />
              <p className="text-[14px] text-[var(--white)] font-[500]">
                Youtube
              </p>
            </div>
            <span className="text-[10px] text-[var(--gray)] font-[600] uppercase">
              CTRL + Y
            </span>
          </button>
        </div>
        <div className="w-full h-auto flex flex-col gap-y-[6px] mt-[20px]">
          <header className="w-full h-auto px-[14px] py-[4px]">
            <p className="text-[12px] text-[var(--white)] font-[500] uppercase">
              Projects
            </p>
          </header>
          <button
            type="button"
            className="w-full h-[38px] items-center justify-between flex px-[12px] hover:bg-[var(--focus)]"
          >
            <div className="items-center flex gap-[12px]">
              <ProjectIcon color="var(--gray)" width={18} height={18} />
              <p className="text-[14px] text-[var(--white)] font-[500]">Home</p>
            </div>
          </button>
        </div>
      </aside>
    </>
  );
}
