import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "./assets/tailwind.icon.svg";
import tsLogo from "./assets/ts-logo.svg";

function App() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={viteLogo}
              className="logo"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={reactLogo}
              className="logo react"
              alt="React logo"
            />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={tsLogo}
              alt="TS logo"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={tailwindLogo}
              alt="Tailwind logo"
            />
          </a>
        </div>
        <h1>Vite + React + Typescript + Tailwind CSS</h1>
        <p>Hugo Cruz's personal template for frontend projects.</p>
      </div>
    </main>
  );
}

export default App;
