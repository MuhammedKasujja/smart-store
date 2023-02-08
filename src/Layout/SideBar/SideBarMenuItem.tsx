import { useEffect, useState } from "react";
import { MenuItem } from "./types";

const SideBarMenuItem: React.FC<MenuItem> = (item) => {
  const { icon, name, gate, selected } = item;
  const [active, setActive] = useState(selected);
  const [selectedMenu, setSelectedMenu] = useState<string | undefined>();

  useEffect(() => {
    setSelectedMenu(undefined);
    if (!selected) setActive(false);
  }, [selected]);

  return (
    <>
      <div
        className={`p-2 cursor-pointer  mt-1 ${
          selected
            ? "border-solid ring-[1px] ring-[#464d5c] border-r-3 mb-2 rounded-md bg-[#1a233a]"
            : ""
        }`}
      >
        <div
          className={`flex justify-between ${selected ? "text-[#5A8DEE]" : ""}`}
          onClick={() => setActive((prev) => !prev)}
        >
          <p className="p-1">{name}</p>
          {item.submenu && <span>{active ? "v" : "^"}</span>}
        </div>
        {active && (
          <div>
            {item.submenu && <hr className="border-1 border-[#464d5c]" />}
            {item.submenu?.map((menu) => (
              <p
                className={`text-left cursor-pointer ml-1 py-2 ${
                  selectedMenu === menu.name
                    ? "bg-[#464d5c] text-[#5A8DEE]" //"bg-[#5a8dee] text-[#5A8DEE] opacity-10"
                    : ""
                }`}
                key={menu.name}
                onClick={() => setSelectedMenu(menu.name)}
              >
                <span className="pr-2">{"->"}</span>
                {menu.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SideBarMenuItem;
