import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Terminal as TerminalIcon, 
  CornerDownLeft, 
  Trash2, 
  Copy, 
  Check, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import { TERMINAL_COMMANDS, PERSONAL_INFO } from '../data/portfolioData';

interface HistoryItem {
  id: string;
  command: string;
  output: string;
  timestamp: string;
}

export function InteractiveTerminal() {
  const { accentStyles } = useTheme();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'srm',
      output: TERMINAL_COMMANDS.srm,
      timestamp: '10:00:15',
    },
    {
      id: 'init-2',
      command: 'help',
      output: TERMINAL_COMMANDS.help,
      timestamp: '10:00:20',
    },
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickCommands = ['help', 'about', 'srm', 'skills', 'projects', 'education', 'contact', 'stats', 'clear'];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = TERMINAL_COMMANDS[trimmed] || 
      `command not found: "${trimmed}". Type "help" to view the available commands or "srm" to inspect SRM University Ramapuram credentials.`;

    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];

    setHistory(prev => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: cmdText,
        output,
        timestamp: timeStr,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const handleCopyAll = () => {
    const fullText = history.map(h => `$ ${h.command}\n${h.output}`).join('\n\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-24 relative overflow-hidden bg-[#070b13]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide uppercase text-indigo-400">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive Developer Shell</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Kavish&apos;s <span className={`bg-gradient-to-r ${accentStyles.gradient} bg-clip-text text-transparent`}>CLI Terminal</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Direct interactive prompt into B E Kavish Karthikeyan&apos;s developer credentials, SRM Ramapuram B.Tech CSE details, and system commands.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6">
          <span className="text-xs text-slate-400 mr-1">Quick Run:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#090d16] border border-white/15 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0c1220] border-b border-white/10 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">
                kavish@srm-ramapuram-cse:~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Clear Terminal"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleCopyAll}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Copy Terminal Output"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            onClick={() => inputRef.current?.focus()}
            className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 min-h-[380px] max-h-[500px] overflow-y-auto space-y-4 cursor-text"
          >
            {/* Greeting Banner */}
            <div className="text-slate-400 border-b border-white/10 pb-3 space-y-1">
              <div className="text-indigo-400 font-bold">
                ┌──(kavish㉿srm-ramapuram)-[~/portfolio]
              </div>
              <div className="text-slate-300">
                Welcome to B E Kavish Karthikeyan&apos;s Interactive Shell.
              </div>
              <div className="text-slate-500 text-[11px]">
                SRM University Ramapuram • B.Tech CSE (2026-2030) • Type &apos;help&apos; to view commands.
              </div>
            </div>

            {/* History Output */}
            {history.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400 font-semibold">kavish@srm-cse:~$</span>
                  <span className="text-white font-medium">{item.command}</span>
                  <span className="text-[10px] text-slate-500 ml-auto font-sans">{item.timestamp}</span>
                </div>
                <pre className="text-slate-300 whitespace-pre-wrap font-mono pl-4 border-l-2 border-indigo-500/40 text-xs sm:text-[13px] py-1 bg-white/[0.01] rounded">
                  {item.output}
                </pre>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 text-white pt-2">
              <span className="text-emerald-400 font-semibold">kavish@srm-cse:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'srm', 'skills', 'projects'..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-[13px] placeholder-slate-600 focus:ring-0 p-0"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => executeCommand(inputVal)}
                className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors text-xs flex items-center gap-1 font-sans"
              >
                <span>Run</span>
                <CornerDownLeft className="w-3 h-3" />
              </button>
            </div>

            <div ref={bottomRef} />
          </div>

        </div>

      </div>
    </section>
  );
}
