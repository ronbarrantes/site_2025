import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { IconLink } from "@/components/types/links";

type LinksState = {
  iconLink: IconLink;
};

type LinksActions = {
  setIcon: (icon: IconLink) => void;
};

export type LinksStore = LinksActions & LinksState;

export const useLinksStore = create<LinksStore>()(
  devtools(
    (set) => ({
      iconLink: "home",
      setIcon: (icon) => set({ iconLink: icon }),
    }),
    { name: "LINKS_STORE" }
  )
);

// export function useIsComplete() {
//   return useTestStore(
//     (state) => state.userAnswers.length >= state.questions.length - 1
//   );
// }
