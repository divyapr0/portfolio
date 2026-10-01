import React, { useState } from 'react';
import { Terminal, ChevronUp, ChevronDown } from 'lucide-react';

interface ConsoleDrawerProps {
  onExecuteCommand?: (cmd: string) => void;
}

export const ConsoleDrawer: React.FC<ConsoleDrawerProps> = ({ onExecuteCommand }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [inputVal, setInputVal] = useState<string>('');
  const [logs, setLogs] = useState<Array<{ type: string; text: string }>>([
    { type: 'info', text: 'restoring the board — notes, shapes, what is open' },
    { type: 'success', text: 'workspace live — it carries on without you' },
    { type: 'command', text: 'open system' },
    { type: 'info', text: 'opening the design system' },
    { type: 'arrow', text: 'Tokens to components to docs, in one pass.' },
    { type: 'info', text: 'restoring the board — notes, shapes, what is open' },
    { type: 'success', text: 'workspace live — it carries on without you' },
  ]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setLogs([]);
      setInputVal('');
      return;
    }

    if (trimmed.toLowerCase() === 'help') {
      setLogs((prev) => [
        ...prev,
        { type: 'command', text: 'help' },
        { type: 'info', text: 'Available commands: open system, open ai, open product, clear, help' },
      ]);
      setInputVal('');
      return;
    }

    setLogs((prev) => [
      ...prev,
      { type: 'command', text: trimmed },
      { type: 'arrow', text: `Dispatched: ${trimmed}` },
    ]);
    if (onExecuteCommand) onExecuteCommand(trimmed);
    setInputVal('');
  };

  return (
    <div className="console-drawer">
      <div className="console-header-bar" onClick={() => setIsOpen(!isOpen)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Terminal size={14} color="var(--accent-amber)" />
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.06em' }}>
            TERMINAL // RUNTIME CONSOLE
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span style={{ fontSize: '0.7rem', color: '#888' }}>
            {isOpen ? 'COLLAPSE' : 'EXPAND'}
          </span>
          {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </div>
      </div>

      {isOpen && (
        <>
          <div className="console-logs-content">
            {logs.map((log, i) => (
              <div key={i} className="console-log-row">
                {log.type === 'command' && <span style={{ color: 'var(--accent-amber)' }}>&gt;</span>}
                {log.type === 'success' && <span style={{ color: '#4ADE80' }}>✓</span>}
                {log.type === 'info' && <span style={{ color: '#888' }}>·</span>}
                {log.type === 'arrow' && <span style={{ color: '#A3A3A3' }}>↳</span>}
                <span
                  style={{
                    color: log.type === 'command' ? '#FFFFFF' : '#D0CDC0',
                  }}
                >
                  {log.text}
                </span>
              </div>
            ))}
          </div>

          <div className="console-prompt-row">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(inputVal);
              }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}
            >
              <span style={{ color: 'var(--accent-amber)', fontWeight: 600 }}>&gt;</span>
              <input
                type="text"
                placeholder="try: open system (or help)"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: '#FFFFFF',
                  fontFamily: 'inherit',
                  fontSize: '0.8rem',
                  flex: 1,
                }}
              />
            </form>

            <div className="console-actions-group">
              <button
                type="button"
                className="console-btn"
                onClick={() => handleCommand('open system')}
              >
                NEXT
              </button>
              <button
                type="button"
                className="console-btn"
                onClick={() => handleCommand('help')}
              >
                HELP
              </button>
              <button
                type="button"
                className="console-btn"
                onClick={() => handleCommand('clear')}
              >
                CLEAR
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
