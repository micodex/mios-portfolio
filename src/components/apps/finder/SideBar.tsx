import { type SideBarItem } from "@/data/finder";
interface SideBarProps {
  list: SideBarItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

const SideBar = ({ list, activeTab, onTabChange }: SideBarProps) => {
  return (
    <aside className="w-49 px-2 py-4">
      {list.map(({ category, items }) => (
        <div key={category} className="mb-4 px-2 select-none">
          <h3 className="mb-1 pl-3 text-[10px] text-gray-400 font-bold tracking-wide uppercase">
            {category}
          </h3>
          {items.map(({ label, id, icon: Icon, color }) => (
            <button
              key={id}
              id="item"
              onClick={() => onTabChange(id)}
              className={`
                    w-full px-3 py-1.5 flex items-center gap-2.5 text-sm transition-colors rounded-lg cursor-pointer
                    ${
                      activeTab === id
                        ? "text-white bg-sky-500"
                        : "text-gray-600 hover:bg-black/5 active:bg-black/10"
                    }
                  `}
            >
              <Icon
                size={16}
                className={activeTab === id ? "text-white" : color}
              />
              <span>{label}</span>
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default SideBar;
