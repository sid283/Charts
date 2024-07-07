import cn from "classnames";
import { SIDE_BAR_LINKS } from "../../constants";
import s from "./Sidebar.module.scss";

interface SidebarProps {
  show: boolean;
  onHide: () => void;
}

const Sidebar = ({ show, onHide }: SidebarProps) => {
  return (
    <div className={cn(s.root, { [s.show]: show })}>
      <div
        className={s.cross}
        onClick={() => {
          onHide();
        }}
      >
        <p>&#8249;</p>
      </div>
      <div className={s.list}>
        {SIDE_BAR_LINKS?.map((item) => (
          <p className={s.link}>{show ? item?.title : item?.shortName}</p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
