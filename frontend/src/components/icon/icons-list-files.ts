// eslint-disable-next-line simple-import-sort/imports
import { AiOutlineClose, AiOutlineWarning } from "react-icons/ai";
import { BsChevronLeft, BsLightningCharge } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaLink,
  FaRegFileAlt,
  FaJava,
} from "react-icons/fa";
import { FiCalendar, FiClock, FiCpu, FiHome } from "react-icons/fi";
import { GiHamburgerMenu, GiPlasticDuck } from "react-icons/gi";
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
import { RiCopilotFill, RiNextjsFill } from "react-icons/ri";
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCplusplus,
  SiCss3,
  SiFacebook,
  SiGit,
  SiGoland,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiKotlin,
  SiMocha,
  SiMysql,
  SiPlanetscale,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiRedux,
  SiRetool,
  SiRubyonrails,
  SiSelenium,
  SiStripe,
  SiTailwindcss,
  SiTrpc,
  SiTurborepo,
  SiTypescript,
  SiVercel,
  SiVite,
  SiWordpress,
} from "react-icons/si";
import {
  TbBrandAzure,
  TbBrandReactNative,
  TbBrandTypescript,
} from "react-icons/tb";

export const iconFileNames = {
  about: { icon: MdOutlineInfo },
  arrow: { icon: MdArrowForward },
  calendar: { icon: FiCalendar },
  check: { icon: MdCheck },
  chevron: { icon: MdChevronRight },
  chevronLeft: { icon: BsChevronLeft },
  clock: { icon: FiClock },
  close: { icon: AiOutlineClose },
  core: { icon: MdCircle },
  contact: { icon: LuContact },
  cpu: { icon: FiCpu },
  duck: { icon: GiPlasticDuck },
  faceboon: { icon: FaFacebook },
  github: { icon: FaGithub },
  hamburger: { icon: GiHamburgerMenu },
  home: { icon: FiHome },
  info: { icon: MdOutlineInfo },
  link: { icon: FaLink },
  linkedin: { icon: FaLinkedin },
  none: { icon: MdBlock },
  portfolio: { icon: LuBriefcase },
  power: { icon: BsLightningCharge },
  refresh: { icon: MdRefresh },
  remove: { icon: MdRemove },
  resume: { icon: FaRegFileAlt },
  settings: { icon: LuSettings },
  warning: { icon: AiOutlineWarning },

  // ICONS FOR TECHNOLOGIES
  azure: { icon: TbBrandAzure },
  css: { icon: SiCss3 },
  facebook: { icon: SiFacebook },
  html: { icon: SiHtml5 },
  illustrator: { icon: SiAdobeillustrator },
  indesign: { icon: SiAdobeindesign },
  javascript: { icon: SiJavascript },
  jest: { icon: SiJest },
  mochajs: { icon: SiMocha },
  mysql: { icon: SiMysql },
  nextjs: { icon: RiNextjsFill },
  photoshop: { icon: SiAdobephotoshop },
  planetscale: { icon: SiPlanetscale },
  postgresql: { icon: SiPostgresql },
  premierepro: { icon: SiAdobepremierepro },
  python: { icon: SiPython },
  react: { icon: FaReact },
  rails: { icon: SiRubyonrails },
  reactnative: { icon: TbBrandReactNative },
  redis: { icon: SiRedis },
  redux: { icon: SiRedux },
  retool: { icon: SiRetool },
  selenium: { icon: SiSelenium },
  stripe: { icon: SiStripe },
  tailwind: { icon: SiTailwindcss },
  turborepo: { icon: SiTurborepo },
  trpc: { icon: SiTrpc },
  typescript: { icon: SiTypescript },
  vercel: { icon: SiVercel },
  vite: { icon: SiVite },
  wordpress: { icon: SiWordpress },

  golang: { icon: SiGoland },
  jira: { icon: SiJira },
  copilot: { icon: RiCopilotFill },
  kotlin: { icon: SiKotlin },
  cpp: { icon: SiCplusplus },
  java: { icon: FaJava },
  git: { icon: SiGit },
  // knockout: { icon: ___knockout___ },
  // fluentui: { icon: Flue },
};

export type IconsLisType = keyof typeof iconFileNames;

export const mapIconData = {} as Record<IconsLisType, IconsLisType>;

(Object.keys(iconFileNames) as IconsLisType[]).forEach((key) => {
  mapIconData[key] = key;
});
