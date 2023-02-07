import { MenuItem } from "./types";

const SideBarMenuItem: React.FC<MenuItem> = (item) => {
  const { icon, name, gate } = item;
  return (
    <>
      <div className="p-2 focus:border-2 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
        <div className="bg-red-500">
          <p className="p-1">{name}</p>
        </div>
        {item.submenu?.map((item) => (
          <p className="text-center">{item.name}</p>
        ))}
        <div></div>
      </div>
    </>
  );
};

export default SideBarMenuItem;
