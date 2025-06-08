import { create } from "zustand";
import { devtools } from "zustand/middleware";

import type { IconList } from "@/components/types/links";

type LinksState = {
  currentIconListLink: IconList;
};

type LinksActions = {
  setIcon: (icon: IconList) => void;
};

export type LinksStore = LinksActions & LinksState;

export const useLinksStore = create<LinksStore>()(
  devtools(
    (set) => ({
      currentIconListLink: "home",
      setIcon: (icon) => set({ currentIconListLink: icon }),
    }),
    { name: "TEST_STORE" }
  )
);

// export function useIsComplete() {
//   return useTestStore(
//     (state) => state.userAnswers.length >= state.questions.length - 1
//   );
// }
