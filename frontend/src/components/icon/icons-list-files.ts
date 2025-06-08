import { AiOutlineClose, AiOutlineWarning } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { FiClock, FiCpu, FiHome } from "react-icons/fi";
import { LuBriefcase, LuContact, LuSettings } from "react-icons/lu";
import {
  MdArrowForward,
  MdBlock,
  MdCheck,
  MdChevronRight,
  MdCircle,
  MdOutlineInfo,
  MdRefresh,
  MdRemove,
} from "react-icons/md";

export const iconFileNames = {
  about: { icon: MdOutlineInfo },
  arrow: { icon: MdArrowForward },
  check: { icon: MdCheck },
  chevron: { icon: MdChevronRight },
  clock: { icon: FiClock },
  close: { icon: AiOutlineClose },
  core: { icon: MdCircle },
  contact: { icon: LuContact },
  cpu: { icon: FiCpu },
  home: { icon: FiHome },
  info: { icon: MdOutlineInfo },
  none: { icon: MdBlock },
  portfolio: { icon: LuBriefcase },
  power: { icon: BsLightningCharge },
  refresh: { icon: MdRefresh },
  remove: { icon: MdRemove },
  resume: { icon: FaRegFileAlt },
  settings: { icon: LuSettings },
  warning: { icon: AiOutlineWarning },
};

export type IconsLisType = keyof typeof iconFileNames;

export const mapIconData = {} as Record<IconsLisType, IconsLisType>;

(Object.keys(iconFileNames) as IconsLisType[]).forEach((key) => {
  mapIconData[key] = key;
});
