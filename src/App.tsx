import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import tailwindLogo from './assets/tailwind.icon.svg';
import tsLogo from './assets/ts-logo.svg';
import zodLogo from './assets/zod-logo.svg';
import vitestLogo from './assets/vitest-logo.svg';
import rhfLogo from './assets/react-hook-form-logo.svg';
import { SingUpForm } from '@/components/forms/SingUpForm';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState<string | null>(null);

  const handleOnSubmit = (data: { username: string }) => {
    setUserName(data.username);
  };
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a
            href="https://vitest.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={vitestLogo} alt="Vitest logo" className="w-12 h-12" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tsLogo} alt="TS logo" className="w-12 h-12" />
          </a>
          <a
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tailwindLogo} alt="Tailwind logo" className="w-14 h-14" />
          </a>
          <a
            href="https://react-hook-form.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={rhfLogo}
              alt="React Hook Form logo"
              className="w-12 h-12"
            />
          </a>
          <a href="https://zod.dev/" target="_blank" rel="noopener noreferrer">
            <img src={zodLogo} alt="Zod logo" className="w-12 h-12" />
          </a>
        </div>
        <h1>
          Vite + Vitest + React + Typescript + Tailwind CSS + React Hook Form +
          Zod
        </h1>
        <p>
          Hugo Cruz&apos;s personal scaffolding template for frontend projects.
        </p>
        <SingUpForm onSubmit={handleOnSubmit} />
        {userName && (
          <p className="py-5"> Hi 👋 ! {userName} happy coding 👨🏻‍💻</p>
        )}
      </div>
    </main>
  );
}

export default App;
