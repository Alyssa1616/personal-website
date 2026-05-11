import { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14 } from "../../assets/projects/projects"

const projects = [
    {
      title: 'Dash Hypermedia Research Project',
      description: "Worked with Professor Andy van Dam's graphics research group on Dash, a web-based application sponsored by Adobe for interacting with multimedia documents. I focused on integrating learning tools by building a dynamic front end and 2 Flask APIs as well as integrating OpenAI's API.",
      imageUrl: image1,
      skills: "React/JavaScript | TypeScript | MobX | MongoDB | HTML/CSS | Flask | REST APIs | Python | Hugging Face Transformers | Fine-tuning | Librosa | Pandas | PyTorch | Speech Recognition | OCR",
      webLink: "https://brown-dash.github.io/Dash-Documentation/about/",
      githubLink: 'https://github.com/brown-dash/Dash-Documentation',
    },
    {
      title: 'Brown University WiCS Website',
      description: "Rebuilt the Brown University WiCS website using React/JavaScript, Typescript, Bootstrap, and CSS, while integrating Google Cloud APIs. Communicated with 10 WiCS E-Board members to review and incorporate feedback.",
      skills: "React | TypeScript/JavaScript | HTML/CSS | Bootstrap | Google APIs | Vercel",
      imageUrl: image2,
      webLink: "https://brown-wics.github.io/website/",
      githubLink: 'https://github.com/Brown-WiCS/website',
    },
    {
      title: 'Virtual IP/TCP Stack',
      description: "Built a virtual networking stack in Go implementing a custom IPv4 layer and an RFC-compliant TCP protocol from scratch. Implemented routing with RIP, packet forwarding, reliable data transfer, retransmissions, and connection state management over the virtual IP layer.",
      imageUrl: image12,
      skills: "Go | Wireshark | Socket Programming | Multithreading | Architecture Design",
    },
    {
      title: 'Code Models Entity Tracking Research',
      description: "Worked with Dr. Najoung Kim as a research assistant in the Dept. of Computer Science and the Dept. of Linguistics to analyze the ability of large language models to track state changes of discourse entities expressed in natural language.",
      skills: "Python | LLMs | PyTorch | Transformers | Pandas | Regex | High Performance Computing",
      imageUrl: image3,
    },
    {
      title: 'Portfolio Website',
      description: "Created this website using React, JavaScript, HTML, and CSS! Displays selected projects I have made and gives an overview of my experiences and passions.",
      skills: "React | Typescript/JavaScript | HTML/CSS | Bootstrap | Github | Vercel",
      imageUrl: image4,
      githubLink: 'https://github.com/Alyssa1616/personal-website',
    },
    {
      title: 'Dash Starter Project',
      description: "Created a web application for organizing, editing, linking, and analyzing multimedia documents and collections. I independently taught myself to use React, TypeScript, MobX, and CSS.",
      skills: "React | JavaScript/TypeScript | MobX | MongoDB | Firebase/Firestore | MUI | SCSS",
      imageUrl: image5,
      webLink: "https://dash---alyssa-feinberg.web.app/"
    },
    {
      title: 'CommunAphasia',
      description: "Created an icon-based messaging system and speech therapy tool using Swift and Firebase to help improve communication for people with aphasia; collaborated with Boston University aphasia researcher Claire Cordella. Received 1st place, 2022 Congressional App Challenge; presented app to members of Congress at the Capitol in Washington D.C.",
      skills: "iOS | Xcode | Swift | Firebase | Speech Recognition",
      imageUrl: image6,
      webLink: "https://www.congressionalappchallenge.us/22-ma04/",
      githubLink: 'https://github.com/Alyssa1616/CommunAphasia'
    },
    {
      title: 'Beat Speech',
      description: "Created an app using Swift and Firebase to help children with speech delays improve their speech production through music therapy techniques; collaborated with the Institute for Music and Neurologic Function. Winner of 2023 Technovation Girls North America Senior Division (out of 2000+ submissions).",
      imageUrl: image11,
      skills: "iOS | Xcode | Swift | Firebase",
      webLink: "https://www.technovation.org/blogs/2023-finalists-regional-winners/#:~:text=Beat%20Speech%2C%20by%20team%20Newton%C2%A0",
    },
    {
      title: 'DNS Resolver',
      description: "Created a DNS resolver in C++ capable of performing both recursive and iterative DNS queries from scratch. Implemented a UDP server to handle real DNS requests using low-level socket programming and DNS packet processing.",
      skills: "C++ | Socket Programming | Systems Programming | Protocol Design",
      imageUrl: image14,
      githubLink: "https://github.com/alyssaf16/dns-resolver.git",
    },
    {
      title: 'First Impression Evaluator',
      description: "Built a multimodal deep learning model to predict personality traits from short speaking videos. Combined a pretrained 3D CNN, custom audio CNN, and transformer encoder to learn spatiotemporal and audio relationships for predicting five personality scores, and developed a web interface for recording videos and displaying predicted personality scores.",
      skills: "Python | PyTorch | OpenCV | Flask | FFmpeg | torchaudio | torchvision | NumPy | REST APIs",
      imageUrl: image13,
      githubLink: "https://github.com/alyssaf16/personality-prediction.git",
    },
    {
      title: 'Shell',
      description: "Developed a custom Unix shell in C that parses user input, executes built-in and external commands, handles input/output redirection, and manages foreground and background processes with terminal control. Implemented signal handling to ensure the shell ignores interruptions while correctly forwarding user signals to running child processes.",
      skills: "C | Inter-process Communication | GDB",
      imageUrl: image7,
    },
    {
      title: 'Othello',
      description: "Built the Othello game in Java using JavaFX, supporting human vs. human, human vs. AI, and AI vs. AI gameplay. Designed a recursive MiniMax algorithm with three intelligence levels and implemented a graphical interface with clickable moves, adjustable player types, and visible AI turn delays.",
      skills: "Java | JavaFX | Adversarial Search",
      imageUrl: image8
    },
    {
     title: 'Blackjack',
     description: "Implemented a tabular reinforcement learning solution to model Blackjack as a Markov decision process, leveraging Monte Carlo simulations, value iteration, and Q-learning to derive optimal playing strategies.",
     skills: 'Python | Reinforcement Learning',
     imageUrl: image9,
    }, 
    {
     title: 'Answer Finder',
     description: "Designed a question answering system that uses TF-IDF to rank and retrieve the most relevant documents and passages from a text corpus in response to user queries. Implemented functions for document loading, tokenization, inverse document frequency computation, and ranking to enable efficient retrieval of accurate answers.",
     skills: 'Python | NLTK | Natural Language Processing',
     imageUrl: image10,
    },
  ];

  export default projects;