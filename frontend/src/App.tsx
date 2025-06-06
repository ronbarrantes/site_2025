import { ThemeProvider } from "@/components/theme-provider/theme-provider-provider";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider>
      <ModeToggle />
      <div className="bg-green-300">Hello</div>
      <Button>Click me</Button>
    </ThemeProvider>
  );
}

export default App;
