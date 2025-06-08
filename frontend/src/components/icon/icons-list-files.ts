import { AiOutlineClose } from "react-icons/ai";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaLongArrowAltRight, FaRegFileAlt } from "react-icons/fa";
import { FiClock, FiCpu } from "react-icons/fi";
import { LuBriefcase } from "react-icons/lu";
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
  core: { icon: MdCircle },
  portfolio: { icon: LuBriefcase },
  info: { icon: MdOutlineInfo },
  power: { icon: BsFillLightningChargeFill },
  cpu: { icon: FiCpu },
  none: { icon: MdBlock },
  document: { icon: FaRegFileAlt },
  arrow: { icon: MdArrowForward },
  flatArrow: { icon: FaLongArrowAltRight },
  warning: { icon: RiErrorWarningFill },
  remove: { icon: MdRemove },
  settings: { icon: MdSettings },
  home: { icon: MdHome },
  chevron: { icon: MdChevronRight },
  close: { icon: AiOutlineClose },
  check: { icon: MdCheck },
  refresh: { icon: MdRefresh },
  clock: { icon: FiClock },
};

export type IconsLisType = keyof typeof iconFileNames;

export const mapIconData = {} as Record<IconsLisType, IconsLisType>;

(Object.keys(iconFileNames) as IconsLisType[]).forEach((key) => {
  mapIconData[key] = key;
});
