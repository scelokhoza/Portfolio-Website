import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import './index.css';


const App = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState(['<span class="font-bold">Welcome to my portfolio. Type "help" for available commands.']);

  const handleCommand = (e) => {
    e.preventDefault();
    processCommand(command);
    setCommand('');
  };

  const processCommand = (cmd) => {
    const newCommand = `<span class="text-lime-500 font-bold">scelo@kali-linux:~$ ${cmd}</span>`
    switch(cmd.toLowerCase()) {
      case 'help':
        setOutput([...output, newCommand, 'Available commands: <span class="text-red-400 font-bold">about, <span class="text-blue-400 font-bold">skills, <span class="text-orange-400 font-bold">projects, <span class="text-lime-400 font-bold">contact, <span class="text-purple-400 font-bold">education']);
        break;
      case 'about':
        setOutput([...output, newCommand, 'I am a  Full Stack Software Developer with a strong focus on backend development and self-taught expertise in network security and penetration testing. I hold certificates in network security engineering and software development, along with partial studies in computer science.']);
        break;
      case 'education':
        setOutput([...output, newCommand, 'NSC [Noordwyk Secondary School - 2020, <span class="text-blue-400 font-bold">https://www.noordwyksec.co.za/], <span class="text-green-400 font-bold">Bsc with Chemistry & Computer Science [North West University - 2022-2023(Did not finish), <span class="text-blue-400 font-bold">https://www.nwu.ac.za/], <span class="text-green-400 font-bold">NQF5 [WeThinkCode_], <span class="text-blue-400 font-bold">https://wethinkcode.co.za/']);
        break;
      case 'skills':
        setOutput([...output, newCommand, 'Network Security, Software Development, Python, JavaScript(HTML, CSS), Java, Shell-Scripting, React, Flask, Angular, MYQSL']);
        break;
      case 'projects':
        setOutput([...output, newCommand, '1. VPN <span class="text-blue-400 font-bold">[https://github.com/scelokhoza/Digital-Shield-VPN], <span class="text-green-400 font-bold">2. Digital Safe <span class="text-blue-400 font-bold">[https://github.com/scelokhoza/Digital-Safe], <span class="text-green-400 font-bold">3. Basic Encryption & Decryption <span class="text-blue-400 font-bold">[https://github.com/scelokhoza/Encryption_Decryption] <span class="text-green-400 font-bold">4. Wifi QR code Generator <span class="text-blue-400 font-bold">[https://github.com/scelokhoza/Wifi-QRcode]']);
        break;
      case 'contact':
        setOutput([...output, newCommand, 'Phone: <span class="text-blue-400 font-bold">068 516 9822 | <span class="text-green-400 font-bold">Email: <span class="text-blue-400 font-bold">sceloprince749@gmail.com | <span class="text-green-400 font-bold">LinkedIn: <span class="text-blue-400 font-bold">www.linkedin.com/in/scelo-khoza-b56662287 | <span class="text-green-400 font-bold">GitHub: <span class="text-blue-400 font-bold">https://github.com/scelokhoza/']);
        break;
      default:
        setOutput([...output, newCommand, '<span class="text-red-400 font-bold">Command not recognized. Type <span class="text-green-400 font-bold">"help" <span class="text-red-400 font-bold">for available commands.']);
    }
  };

  useEffect(() => {
    const terminalOutput = document.getElementById('terminal-output');
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }, [output]);

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-bold">
      <header className="flex justify-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-lime-400">Scelo Khoza</h1>
      </header>
      <p className="text-xl text-lime-400">Full Stack Software Developer | Network Security Engineer | AI Developer | Ethical Hacking</p>
      <div className="border border-green-400 p-4 rounded">
        <div id="terminal-output" className="h-116 overflow-y-auto mb-4">
        {output.map((line, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: line }}></p>
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