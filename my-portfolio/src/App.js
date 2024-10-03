import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const App = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState(['Welcome to my portfolio. Type "help" for available commands.']);

  const handleCommand = (e) => {
    e.preventDefault();
    processCommand(command);
    setCommand('');
  };

  const processCommand = (cmd) => {
    switch(cmd.toLowerCase()) {
      case 'help':
        setOutput([...output, '> ' + cmd, 'Available commands: about, skills, projects, contact']);
        break;
      case 'about':
        setOutput([...output, '> ' + cmd, 'I am a cybersecurity enthusiast with a passion for ethical hacking. I hold certificates in network security engineering and software development, along with partial studies in computer science.']);
        break;
      case 'skills':
        setOutput([...output, '> ' + cmd, 'Skills: Network Security, Ethical Hacking, Software Development, Python, JavaScript, React']);
        break;
      case 'projects':
        setOutput([...output, '> ' + cmd, 'Projects: 1. Vulnerability Scanner, 2. Secure Chat Application, 3. Network Intrusion Detection System']);
        break;
      case 'contact':
        setOutput([...output, '> ' + cmd, 'Email: your.email@example.com | LinkedIn: linkedin.com/in/yourprofile | GitHub: github.com/yourusername']);
        break;
      default:
        setOutput([...output, '> ' + cmd, 'Command not recognized. Type "help" for available commands.']);
    }
  };

  useEffect(() => {
    const terminalOutput = document.getElementById('terminal-output');
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }, [output]);

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Name</h1>
        <p className="text-xl">Cybersecurity Specialist | Ethical Hacker</p>
      </header>
      <div className="border border-green-400 p-4 rounded">
        <div id="terminal-output" className="h-64 overflow-y-auto mb-4">
          {output.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <form onSubmit={handleCommand} className="flex items-center">
          <Terminal className="mr-2" />
          <span className="mr-2">$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-grow bg-transparent border-none outline-none"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default App;