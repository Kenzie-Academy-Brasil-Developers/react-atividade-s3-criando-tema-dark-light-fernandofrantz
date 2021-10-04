import { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { AppContainer, MainSection } from "./components/app.style";
import { Button } from "./components/button.style";
import { themes } from "./themes";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );

  return (
    <div className="App">
      <ThemeProvider theme={themes[currentTheme]}>
        <AppContainer>
          <MainSection>
            <h1>You're in the {currentTheme} mode!</h1>
            <Button onClick={() => setCurrentTheme(getOpositeTheme())}>
              Switch to {getOpositeTheme()} mode.
            </Button>
          </MainSection>
        </AppContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
