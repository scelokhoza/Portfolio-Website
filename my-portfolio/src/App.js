import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import './index.css';
import './App.css';


const App = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState(['<span class="welcome-message">Welcome to my portfolio. Type "help" for available commands.</span>']);

  const handleCommand = (e) => {
    e.preventDefault();
    processCommand(command);
    setCommand('');
  };

  const handleOpenPDF = () => {
    window.open('/scelo_resume.pdf', '_blank');
  };

  const processCommand = (cmd) => {
    const newCommand = `<span class="command-prompt">scelo@kali-linux:~$ ${cmd}</span>`
    switch(cmd.toLowerCase()) {
      case 'help':
        setOutput([...output, newCommand, 'Available commands: <span class="command-help">about | skills | projects | contact | education | resume</span>']);
        break;
      case 'about':
        setOutput([...output, newCommand, 'I am a Full Stack Software Developer with a strong focus on backend development and self-taught expertise in network security and penetration testing. I hold certificates in network security engineering and software development, along with partial studies in computer science.']);
        break;
      case 'education':
        setOutput([...output, newCommand, 'NSC [Noordwyk Secondary School - 2020, <span class="link">https://www.noordwyksec.co.za/</span>] | <span class="education-item">Bsc with Chemistry & Computer Science [North West University - 2022-2023(Did not finish), <span class="link">https://www.nwu.ac.za/</span>] | <span class="education-item">NQF5 [WeThinkCode_], <span class="link">https://wethinkcode.co.za/</span></span>']);
        break;
      case 'skills':
        setOutput([...output, newCommand, 'Network Security | Software Development | Python | JavaScript(HTML, CSS) | Java | Shell-Scripting | React | Flask | Angular | MYQSL']);
        break;
      case 'projects':
        setOutput([...output, newCommand, 'VPN <span class="link">[https://github.com/scelokhoza/Digital-Shield-VPN]</span> <span class="project-item"> | Digital Safe <span class="link">[https://github.com/scelokhoza/Digital-Safe]</span> <span class="project-item"> | Basic Encryption & Decryption <span class="link">[https://github.com/scelokhoza/Encryption_Decryption]</span> <span class="project-item"> | Wifi QR code Generator <span class="link">[https://github.com/scelokhoza/Wifi-QRcode]</span></span>']);
        break;
      case 'contact':
        setOutput([...output, newCommand, 'Phone: <span class="link">068 516 9822</span> | <span class="contact-item">Email: <span class="link">sceloprince749@gmail.com</span> | <span class="contact-item">LinkedIn: <span class="link">www.linkedin.com/in/scelo-khoza-b56662287</span> | <span class="contact-item">GitHub: <span class="link">https://github.com/scelokhoza/</span></span>']);
        break;
      case 'resume':
        setOutput([...output, newCommand, '<span class="resume-message">My resume is opened in your browser!!</span>']);
        handleOpenPDF();
        break;
      default:
        setOutput([...output, newCommand, '<span class="error-message">Command not recognized. Type <span class="command-help">"help"</span> for available commands.</span>']);
    }
  };

  useEffect(() => {
    const terminalOutput = document.getElementById('terminal-output');
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }, [output]);

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1 className="portfolio-title">Scelo Khoza</h1>
      </header>
      <p className="portfolio-subtitle">Full Stack Software Developer | Network Security Engineer | AI Developer | Cloud Developer</p>
      <div className="terminal-container">
        <div id="terminal-output" className="terminal-output">
        {output.map((line, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: line }}></p>
        ))}
        </div>
        <form onSubmit={handleCommand} className="terminal-form">
          <Terminal className="terminal-icon" />
          <span className="prompt-symbol">$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="terminal-input"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default App;