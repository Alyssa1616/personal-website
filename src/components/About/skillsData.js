import { Icon } from '@iconify/react';
import { reactIcon, pythonIcon, javascriptIcon, typescriptIcon, mobxIcon,
    mongodbIcon, htmlIcon, cssIcon, bootstrapIcon, javaIcon, cplusIcon,
    cIcon, swiftIcon, googleIcon, pandasIcon, pytorchIcon, firebaseIcon,
    gitIcon, flaskIcon, hfIcon, ApiIcon, TuneIcon, MicIcon, TextFieldsIcon,
    MemoryIcon, CodeIcon }
    from './skillsLogos';
import LibrosaIcon from '../../assets/librosa.png';

const skills = [
    { name: 'Python', icon: <Icon icon={pythonIcon} /> },
    { name: 'React', icon: <Icon icon={reactIcon} /> },
    { name: 'JavaScript', icon: <Icon icon={javascriptIcon} />},
    { name: 'TypeScript', icon: <Icon icon={typescriptIcon} /> },
    { name: 'MobX', icon:<Icon icon={mobxIcon} /> },
    { name: 'MongoDB', icon: <Icon icon={mongodbIcon} /> },
    { name: 'HTML', icon: <Icon icon={htmlIcon} /> },
    { name: 'CSS/SCSS', icon: <Icon icon={cssIcon} /> },
    { name: 'Bootstrap', icon: <Icon icon={bootstrapIcon} /> },
    { name: 'Java', icon: <Icon icon={javaIcon} /> },
    { name: 'C', icon: <Icon icon={cIcon} /> },
    { name: 'C++', icon: <Icon icon={cplusIcon} /> },
    { name: 'Swift', icon: <Icon icon={swiftIcon} /> },
    { name: 'Flask', icon: <Icon icon={flaskIcon} /> },
    { name: 'REST APIs', icon: <ApiIcon style={{ fontSize: 20, color: '#007bff' }} /> },
    { name: 'Google APIs', icon: <Icon icon={googleIcon} /> },
    { name: 'Hugging Face Transformers', icon: <Icon icon={hfIcon} />},
    { name: 'Fine-tuning', icon: <TuneIcon style={{ fontSize: 20, color: '#007bff' }} /> },
    { name: 'Librosa', icon: <img src={LibrosaIcon} alt="Librosa" style={{ width: 20, height: 20 }} /> },
    { name: 'Pandas', icon: <Icon icon={pandasIcon} /> },
    { name: 'PyTorch', icon: <Icon icon={pytorchIcon} /> },
    { name: 'Regex', icon: <CodeIcon style={{ fontSize: 20, color: '#000080' }} /> },
    { name: 'High Performance Computing', icon: <MemoryIcon style={{ fontSize: 20, color: '#A9A9A9' }} /> },
    { name: 'Firebase', icon: <Icon icon={firebaseIcon} /> },
    { name: 'Speech Recognition', icon: <MicIcon style={{ fontSize: 20, color: '#000000' }} /> },
    { name: 'OCR', icon: <TextFieldsIcon style={{ fontSize: 20, color: '#007bff' }} /> },
    { name: 'Git', icon: <Icon icon={gitIcon} /> },
  ];

  export default skills;