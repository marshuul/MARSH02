import { ClockIcon, FolderIcon } from "../../../assets/icons";

export default function Navigation() {
  return (
    <>
      <nav className="w-full h-auto bg-[var(--solid)] border border-[var(--border)] items-center justify-between flex rounded-full p-[4px]">
        <div className="h-full items-center flex">
          <div className="h-full items-center flex gap-[6px] px-[8px]">
            <ClockIcon
              color="var(--gray)"
              width={16}
              height={16}
              className="mt-[1px]"
            />
            <p className="text-[12px] text-[var(--gray)] font-[500]">
              Latest Posted Project: 3/21/2026
            </p>
          </div>
          <div className="w-[4px] h-[4px] bg-[var(--white)] rounded-full mx-[10px]"></div>
          <div className="w-auto h-full items-center flex gap-[6px]">
            <button
              type="button"
              className="w-auto h-[30px] items-center flex gap-[8px] rounded-full px-[10px] hover:bg-[var(--focus)]"
            >
              <FolderIcon color="var(--gray)" width={16} height={16} />
              <p className="text-[12px] text-[var(--white)] font-[500]">
                React & Tailwind & Typescript
              </p>
            </button>
            <button
              type="button"
              className="w-auto h-[30px] items-center flex gap-[8px] rounded-full px-[10px] hover:bg-[var(--focus)]"
            >
              <FolderIcon color="var(--gray)" width={16} height={16} />
              <p className="text-[12px] text-[var(--white)] font-[500]">
                HTML & CSS & JS
              </p>
            </button>
          </div>
        </div>
        <div className="h-full items-center flex gap-[6px]">
          <button
            type="button"
            className="w-auto h-[30px] rounded-full px-[10px] bg-[var(--hover)] border border-[var(--focus)] hover:bg-[var(--focus)]"
          >
            <p className="text-[13px] text-[var(--white)] font-[500]">Login</p>
          </button>
          <button
            type="button"
            className="w-auto h-[30px] rounded-full px-[8px] bg-[var(--primary)] hover:bg-[var(--primary-shade)] hover:bg-[var(--focus)]"
          >
            <p className="text-[13px] text-[var(--black)] font-[500]">
              Create Account
            </p>
          </button>
        </div>
      </nav>
    </>
  );
}
