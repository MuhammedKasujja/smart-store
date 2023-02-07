import SideBarMenuItem from "./SideBarMenuItem";
import menus from "./Menus";
import { useMemo } from "react";

const SideBar: React.FC = () => {
  const menuContent = useMemo(() => {
    return menus.map((item) => {
      if (item.navheader)
        return <p className="bg-slate-700 px-2 py-2 mx-2 text-left">{item.navheader}</p>;
      else {
        return (
          <SideBarMenuItem
            name={item.name!}
            submenu={item.submenu}
            url={item.url!}
            icon={item.icon}
            gate={item.gate}
          />
        );
      }
    });
  }, [menus]);
  return (
    <>
      <div className="w-80 bg-slate-50 p-4 rounded-lg overflow-y-auto hover:overflow-y-auto">
        {menuContent}
      </div>
    </>
  );
};

export default SideBar;
