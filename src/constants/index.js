import Pub1 from "../assets/Pub/project-1b.jpg";
import Pub2 from "../assets/Pub/sbir.jpg";
import Pub3 from "../assets/Pub/SR.jpg";
import Pub4 from "../assets/Pub/color.jpg";



export const HERO_CONTENT = `I'm a machine learning researcher that specializes on creating robust and interpretable AI systems
With 3+ years of hands-on experience, I have worked on multi-modal data fusion, few-shot/ zero-shot learning, domain adaptation, cross-modal information retrieval etc.
I have expertise in working with PyTorch and TensorFlow, and have experience with distributed training, mixed-precision, language models, and generative models for image/video synthesis.
My goal is to leverage my expertise to create novel solutions that drive business growth and deliver exceptional user experiences.`;


export const ABOUT_TEXT = `I'm a machine learning researcher with a passion for creating interpretable and robust AI systems.
Over a period of 3+ years, I have worked with PyTorch, Tensorflow, Distributed Data parallel, SQLite, Mixed-precision on the model development and optimization side.
My modelling expertise spans across multimodal-data fusion, few-shot/ zero-shot learning, domain adaptation, cross-modal information retrieval and generative algorithms.
Having build numerous models like transformers, GANs, VAEs, Deep fusion architectures, Siamese networks etc, I have grasped the working of various models and its failure modes.
Additionally I understand that signals largely are noisy, due to the nature of sampling or modelling and I'm curious about understanding uncertainty quantification in higher dimension spaces.
In my free time, you might find me playing badminton, cycling or relaxing in the nature.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Team Lead - GenAI",
    company: "IHU, Strasbourg",
    description: `Led a 5+ team of researchers, research interns and clinicians in developing and maintaining text based image/video generation models using generative algorithms. Additionally led the team on identification of intraoperative adverse event detection in limited label scenario`,
    technologies: ["Transformers", "PyTorch", "DDP", "Mixed-precision", "LLMs", "DDPM"],
  },
  {
    year: "2022 - 2022",
    role: "Machine Learning Scientist",
    company: "Microsoft [EU]",
    description: `Contributed to distributed training of conditional denoising model for speech enhancement for low frequency and high frequency lanhuages. Conducted spectral analysis based on personal vocal signatures for Fourier DL models`,
    technologies: ["PyTorch", "DDP", "TorchAudio"],
  },
  
];

export const PUBLICATIONS = [
  {
    title: "Hyperspectral-LiDAR Data fusion using convolutional transformers",
    image: Pub1,
    description:
      "Two headed dragons: Multimodal fusion and cross modal transactions | IEEE International Conference on Image Processing (2021)",
    technologies: ["HSI", "LiDAR", "TensorFlow", "LULC"],
  },
  {
    title: "Cross modal retrieval with limited annotations | Sketch - MS - SAR - Text",
    image: Pub2,
    description:
      "Zero-shot cross-modal retrieval for remote sensing images with minimal supervision | IEEE Transactions on Geoscience and Remote Sensing",
    technologies: ["Sentinel1", "Sentinel2", "Text", "Cross modal Retrieval"],
  },
  {
    title: "Image Super-Resolution at EO scale for 4x compression",
    image: Pub3,
    description:
      "Zero-shot remote sensing image super-resolution based on image continuity and self tessellations | DAGM German Conference on Pattern Recognition",
    technologies: ["Sentinel1", "Sentinel2", "Text", "Cross modal Retrieval"],
  },
  {
    title: "LULC based satellite image colorisation based on dual scale attention mechanism",
    image: Pub4,
    description:
      "DARK: Few-shot remote sensing colorization using label conditioned color injection | IEEE Geoscience and Remote Sensing Letters",
    technologies: ["Sentinel1", "Sentinel2", "Text", "Cross modal Retrieval"],
  },
  
];

export const PROJECTS = [
  {
    title: "Hyperspectral-LiDAR Data fusion using convolutional transformers",
    image: Pub1,
    description:
      "Two headed dragons: Multimodal fusion and cross modal transactions | IEEE International Conference on Image Processing (2021)",
    technologies: ["HSI", "LiDAR", "TensorFlow", "LULC"],
  },
  
];

export const CONTACT = {
  address: "Strasbourg, France",
  phoneNo: "+33 7 4942 9034",
  email: "boserupak1@gmail.com",
};
