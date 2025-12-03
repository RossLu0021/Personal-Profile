'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MatrixRain from '@/components/ui/matrix-rain';

type FileSystem = {
  [key: string]: string | FileSystem;
};

const initialFileSystem: FileSystem = {
  'about.txt':
    'I am a software engineer passionate about building great things.',
  'contact.info':
    'Email: royaltross.lr@gmail.com\nLinkedIn: linkedin.com/in/lughan-ross',
  projects: {
    'portfolio.md': 'This website! Built with Next.js and Tailwind CSS.',
    'more.txt': 'Check out my GitHub for more projects: github.com/RossLu0021',
  },
  'skills.json': '["React", "Next.js", "TypeScript", "Tailwind CSS"]',
};

function TerminalWidget() {
  const router = useRouter();
  const [history, setHistory] = useState<string[]>([
    'Welcome to the terminal.',
    'Type "help" to see available commands.',
  ]);
  const [input, setInput] = useState('');
  const [cwd, setCwd] = useState<string[]>([]); // Current working directory path
  const endRef = useRef<HTMLDivElement>(null);

  const getDir = (path: string[]): FileSystem => {
    let current: FileSystem | string = initialFileSystem;
    for (const p of path) {
      if (
        typeof current === 'object' &&
        current !== null &&
        p in current &&
        typeof current[p] === 'object'
      ) {
        current = current[p] as FileSystem;
      } else {
        return {};
      }
    }
    return current as FileSystem;
  };

  const handleCommand = (cmdStr: string) => {
    const args = cmdStr.trim().split(/\s+/);
    const cmd = args[0].toLowerCase();
    const arg1 = args[1];

    switch (cmd) {
      case 'help':
        return [
          'Available commands:',
          '  ls              List directory contents',
          '  cd <dir>        Change directory',
          '  cat <file>      Display file content',
          '  clear           Clear terminal history',
          '  whoami          Display current user',
          '  date            Display current date and time',
          '  open <page>     Navigate to a page (home, about, resume, contact)',
          '  stop            Go back to home',
        ];
      case 'ls': {
        const dir = getDir(cwd);
        return Object.keys(dir).map((key) => {
          const isDir = typeof dir[key] === 'object';
          return isDir ? `${key}/` : key;
        });
      }
      case 'cd': {
        if (!arg1) return ['Usage: cd <directory>'];
        if (arg1 === '..') {
          setCwd((prev) => prev.slice(0, -1));
          return [];
        }
        const dir = getDir(cwd);
        if (dir[arg1] && typeof dir[arg1] === 'object') {
          setCwd((prev) => [...prev, arg1]);
          return [];
        }
        return [`cd: ${arg1}: No such directory`];
      }
      case 'cat': {
        if (!arg1) return ['Usage: cat <filename>'];
        const dir = getDir(cwd);
        if (dir[arg1] && typeof dir[arg1] === 'string') {
          return [dir[arg1] as string];
        }
        return [`cat: ${arg1}: No such file`];
      }
      case 'clear':
        setHistory([]);
        return null; // Special case to not append to history
      case 'whoami':
        return ['guest'];
      case 'date':
        return [new Date().toString()];
      case 'open':
        if (!arg1) return ['Usage: open <page> (home, about, resume, contact)'];
        const pages: { [key: string]: string } = {
          home: '/',
          about: '/about-me',
          resume: '/resume',
          contact: '/contact',
        };
        if (pages[arg1]) {
          router.push(pages[arg1]);
          return [`Opening ${arg1}...`];
        }
        return [`Page not found: ${arg1}`];
      case 'stop':
        router.push('/');
        return ['Stopping terminal...'];
      default:
        return [`Command not found: ${cmd}`];
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const cmdStr = input; // Keep original case for arguments if needed, but we lowercased cmd
      if (!cmdStr.trim()) return;

      const newHistory = [
        ...history,
        `${cwd.length > 0 ? '~/' + cwd.join('/') : '~'} $ ${cmdStr}`,
      ];
      const output = handleCommand(cmdStr);

      if (output !== null) {
        setHistory([...newHistory, ...output]);
      } else {
        // Clear command was run
      }
      setInput('');
    }
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="w-full max-w-2xl h-[500px] bg-black/90 border border-green-500 rounded-lg shadow-2xl font-mono text-green-400 flex flex-col p-4 overflow-hidden backdrop-blur-sm">
      {/* History */}
      <div className="flex-1 overflow-y-auto mb-2 scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-transparent">
        {history.map((line, idx) => (
          <div
            key={idx}
            className="whitespace-pre-wrap break-words leading-relaxed"
          >
            {line}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="flex items-center border-t border-green-500/30 pt-2">
        <span className="text-green-500 mr-2 font-bold">
          {cwd.length > 0 ? '~/' + cwd.join('/') : '~'} $
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent flex-1 focus:outline-none text-green-100 placeholder-green-800"
          placeholder="Type 'help'..."
          autoFocus
          spellCheck={false}
        />
      </div>
    </div>
  );
}

export default function TerminalPage() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Matrix rain background */}
      <div className="absolute inset-0">
        <MatrixRain />
      </div>

      {/* terminal widget */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <TerminalWidget />
      </div>
    </div>
  );
}
