import { BsTwitter } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import { sidebarIcons } from '@/assets/sidebaricons';
import { sideicon } from '@home/nexttypes';

const SideBar = () => {
  return (
    <>
      <div className="flex flex-col h-full justify-between pb-5 max-mobile:fixed max-mobile:top-0 max-mobile:left-0">
        <div className="flex flex-col gap-4 p-2">
          <div className="pb-6 px-2">
            <BsTwitter size={40} />
          </div>
          {sidebarIcons.map((icon: sideicon) => (
            <div
              key={icon.name}
              className="flex text-lg font-bold gap-3 p-2 rounded-full items-center dark:hover:bg-white/20 hover:cursor-pointer hover:bg-black/25"
            >
              <div>
                <icon.icon size={30} />
              </div>
              <div className="max-tablet:hidden">{icon.name}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-2 hover:bg-black/25 dark:hover:bg-white/20 px-2 rounded-full hover:cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-slate-200"></div>
          <div className="flex flex-col gap-0 max-tablet:hidden">
            <div className="font-bold">Sumanth</div>
            <div className="dark:text-white/40 text-black/70">
              @coder_sumanth
            </div>
          </div>
          <div className="max-tablet:hidden">
            <BsThreeDots />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
