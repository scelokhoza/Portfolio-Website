import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import './index.css';


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
        setOutput([...output, '> ' + cmd, 'Available commands: about, skills, projects, contact, education']);
        break;
      case 'about':
        setOutput([...output, '> ' + cmd, 'I am a  Full Stack Software Developer with a strong focus on backend development and self-taught expertise in network security and penetration testing. I hold certificates in network security engineering and software development, along with partial studies in computer science.']);
        break;
      case 'education':
        setOutput([...output, '> ' + cmd, 'Education: NSC [Noordwyk Secondary School - 2020, https://www.noordwyksec.co.za/], Bsc with Chemistry & Computer Science [North West University - 2022-2023(Did not finish), https://www.nwu.ac.za/], NQF5 [WeThinkCode_], https://wethinkcode.co.za/']);
        break;
      case 'skills':
        setOutput([...output, '> ' + cmd, 'Skills: Network Security, Software Development, Python, JavaScript(HTML, CSS), Java, Shell-Scripting, React, Flask, Angular, MYQSL']);
        break;
      case 'projects':
        setOutput([...output, '> ' + cmd, 'Projects: 1. VPN [https://github.com/scelokhoza/Digital-Shield-VPN], 2. Digital Safe [https://github.com/scelokhoza/Digital-Safe], 3. Basic Encryption & Decryption [https://github.com/scelokhoza/Encryption_Decryption] 4. Wifi QR code Generator [https://github.com/scelokhoza/Wifi-QRcode]']);
        break;
      case 'contact':
        setOutput([...output, '> ' + cmd, 'Phone: 068 516 9822 | Email: sceloprince749@gmail.com | LinkedIn: www.linkedin.com/in/scelo-khoza-b56662287 | GitHub: https://github.com/scelokhoza/']);
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
        <h1 className="text-3xl font-bold mb-2">Scelo Khoza</h1>
        <p className="text-xl">Full Stack Software Developer | Network Security Engineer | AI Developer | Ethical Hacking</p>
      </header>
      <div className="border border-green-400 p-4 rounded">
        <div id="terminal-output" className="min-h-[500px] overflow-y-auto mb-4">
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