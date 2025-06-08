import { AiOutlineClose } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaLongArrowAltRight, FaRegFileAlt } from "react-icons/fa";
import { FiClock, FiCpu } from "react-icons/fi";
import { LuBriefcase, LuContact } from "react-icons/lu";
import {
  MdArrowForward,
  MdBlock,
  MdCheck,
  MdChevronRight,
  MdCircle,
  MdHome,
  MdOutlineInfo,
  MdRefresh,
  MdRemove,
  MdSettings,
} from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";

export const iconFileNames = {
  arrow: { icon: MdArrowForward },
  check: { icon: MdCheck },
  chevron: { icon: MdChevronRight },
  clock: { icon: FiClock },
  close: { icon: AiOutlineClose },
  core: { icon: MdCircle },
  contact: { icon: LuContact },
  cpu: { icon: FiCpu },
  document: { icon: FaRegFileAlt },
  flatArrow: { icon: FaLongArrowAltRight },
  home: { icon: MdHome },
  info: { icon: MdOutlineInfo },
  none: { icon: MdBlock },
  portfolio: { icon: LuBriefcase },
  power: { icon: BsFillLightningChargeFill },
  refresh: { icon: MdRefresh },
  remove: { icon: MdRemove },
  settings: { icon: MdSettings },
  warning: { icon: RiErrorWarningFill },
};

export type IconsLisType = keyof typeof iconFileNames;

export const mapIconData = {} as Record<IconsLisType, IconsLisType>;

(Object.keys(iconFileNames) as IconsLisType[]).forEach((key) => {
  mapIconData[key] = key;
});
