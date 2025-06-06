import { RouterProvider } from "react-router";

import { ThemeProvider } from "@/components/theme-provider/theme-provider-provider";
import { router } from "@/utils/router";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider>
      <ModeToggle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
