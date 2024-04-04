import { auth } from "@/auth";
import Logo from "./section/Logo";
import MoreDropDown from "./section/MoreDropDown";
import Navlinks from "./section/Navlinks";
import Profile from "./section/Profile";

async function Sidenav() {
  const session = await auth();
  const user = session?.user;
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div
        className="border-t -ml-3 md:ml-0 bg-white dark:bg-neutral-950 h-16 justify-evenly 
                  fixed z-50  flex-1 w-full md:relative md:h-full bottom-0 md:border-none flex flex-row
                   md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-2"
      >
        <Logo />
        <Navlinks />
        {/*If user is logged in*/}
        {user && <Profile user={user} />}
        <div className="hidden md:flex relative md:mt-auto flex-1 items-end w-full">
          <MoreDropDown />
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
