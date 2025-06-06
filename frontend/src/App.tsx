import { RouterProvider } from "react-router";

import { ThemeProvider } from "@/components/theme-provider/theme-provider-provider";
import { router } from "@/utils/router";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
