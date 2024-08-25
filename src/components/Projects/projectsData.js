import { image1, image2, image3, image4, image5, image6 } from "../../assets/projects/projects"

const projects = [
    {
      title: 'Dash Hypermedia Research Project',
      description: "Working with Professor Andy van Dam's graphics research group on Dash, a web-based application sponsored by Adobe for interacting with multimedia documents. I focused on integrating learning tools by building a dynamic front end and 2 Flask APIs as well as integrating OpenAI's API.",
      imageUrl: image1,
      skills: "React/JavaScript | TypeScript | MobX | MongoDB | HTML/CSS | Flask | REST APIs | Python | Hugging Face Transformers | Fine-tuning | Librosa | Pandas | PyTorch | Speech Recognition | OCR",
      webLink: "https://brown-dash.github.io/Dash-Documentation/about/",
      githubLink: 'https://github.com/brown-dash/Dash-Documentation',
    },
    {
      title: 'Brown University WiCS Website',
      description: "Rebuilding the Brown University in Computer Science Website using React, particularly working to integrate resources into the website to increase user traffic. I'm also spearheading a blog page to empower women in tech through sharing experiences.",
      skills: "React/JavaScript | HTML/CSS | Bootstrap | Google APIs | Vercel",
      imageUrl: image2,
      webLink: "https://brown-wics.github.io/website/",
      githubLink: 'https://github.com/Brown-WiCS/website',
    },
    {
      title: 'Code Models Entity Tracking Research',
      description: "Working with Dr. Najoung Kim as a research assistant in the Dept. of Computer Science and the Dept. of Linguistics to analyze the ability of large language models to track state changes of discourse entities expressed in natural language.",
      skills: "Python | LLMs | PyTorch | Transformers | Pandas | Regex | High Performance Computing",
      imageUrl: image3,
      githubLink: 'https://github.com/Alyssa1616/code-model-entity-tracking',
    },
    {
      title: 'Portfolio Website',
      description: "Created this website using React, JavaScript, HTML, and CSS! Displays selected projects I have made and gives an overview of my experiences and passions.",
      skills: "React/JavaScript | HTML/CSS | Bootstrap | Vercel",
      imageUrl: image4,
      // webLink: "https://brown-wics.github.io/website/"
      githubLink: 'https://github.com/Alyssa1616/personal-website',
    },
    {
      title: 'Dash Starter Project',
      description: "For the application of my current research position at Brown, I created a web-based application built for organizing, editing, linking, and analyzing multimedia documents and collections. I independently taught myself to use React, TypeScript, MobX, and CSS.",
      skills: "React/JavaScript | TypeScript | MobX | MongoDB | Firebase/Firestore | MUI | SCSS",
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
    // {
    //   title: 'Othello',
    //   description: "",
    //   imageUrl: image7
    // },
  ];

  export default projects;