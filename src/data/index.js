// import as from '../assets/projects/web/01_web.png'
export const technologies = [
  {
    name: 'react',
    priority:1,
  },
  {
    name: 'redux',
    priority:1,
  },

  {
    name: 'express',
    // level: 'basics',
    priority:2, //denerian ser 1, los pongo uno peus de momento son basics
  },
  {
    name: 'sQL',
    level: 'basics',
    priority:3, //denerian ser 1
  },
  {
    name: 'mongoDB',
    // level: 'basics',
    priority:3, //denerian ser 1
  },
  {
    name: 'firebase',
    level: 'basics',
    priority:3, //denerian ser 1
  },
  {
    name: 'scikit-learn',
    priority:4, //debertia ser
  },
  {
    name: 'machine-learning',
    priority:4, //debertia ser
  },
  {
    name: 'node',
    priority:2, //debertia ser
  },
  {
    name: 'javaScript',
    priority:1,
  },
  {
    name: 'typeScript',
    priority:1,
  },
  {
    name: 'python',
    priority:4,
  },
  {
    name: 'regression',
    priority:4,
  },
  {
    name: 'classification',
    priority:4,
  },
  {
    name: 'deep learning',
    priority:4,
  },
  {
    name: 'clustering',
    priority:4,
  },
  {
    name: 'hTML',
    priority:3,
  },
  {
    name: 'cSS',
    priority:3,
  },
  {
    name: 'sass',
    priority:2,
  },
  {
    name: 'stylus',
    priority:2,
  },
  {
    name: 'less',
    priority:2,
  },
  {
    name: 'antd',
    priority:3, //deberian ser 4
  },
  {
    name: 'tailwind',
    priority:3,
  },
  {
    name: 'mui',
    priority:3,
  },
  
]

export const projectsWeb = [

  {
    categorie: "web",
    name: "cryptoVerse App",
    details: "this app displays the most important cryptos currencies information live. U can watch their stats and news live",
    important: [""],
    technologies: ["hTML", "cSS" , "javaScript", "react", "redux", "antd"],
    date: new Date("2023-06-02T00:00:00.000-06:00"),
    link: "https://crypto-verse-app-nl.netlify.app/",
    starred: true,
    image: 'images/projects/01_web.png'
  },
  {
    categorie: "web",
    name: "travel Advisor App",
    details: "in this app you can search for restaurants, hotels and attractions from any city you are interested in traveling to. The app displays these places into a map, and u can see different information of interest for each place (e.g., price, rating, contact-info, website, etc.)",
    important: [""],
    technologies: ["hTML", "cSS" , "javaScript", "react", "mui"],
    date: new Date("2023-05-02T00:00:00.000-06:00"),
    link: "https://travel-advitsor-app.netlify.app/",
    starred: true,
    image: 'images/projects/02_web.png'
  },

  {
    categorie: "web",
    name: "car Sharing App Demo",
    details: "it's a demo for a car sharing app. You can log in as a driver or passenger. As a driver u can schedule trips, and start the travel. As a passenger u can join to any existing trip. Once the trip starts, the app tracks the real time position 'till it finishes, just as Uber or In-Driver",
    important: ["designed for SMALL screens only (e.g., iPhone S6)", "To log in, you need a valid e-mail address (you don't need a password). You can log in as a driver using the e-mail, 'driver@gmail.com'; or a passenger using the e-mail, 'tester1@gmail.com'", "The Backend is hosted on a free server, so it may need some time to fetch the data. U can try to press the log in button a few times to 'wake up' the server"],
    technologies: ["hTML", "cSS" , "javaScript", "react", "mongoDB","node", "express", "sass"],
    date: new Date("2023-04-02T00:00:00.000-06:00"),
    link: "https://fisica-taller.vercel.app/",
    starred: true,
    image: 'images/projects/03_web.png'
  },
  
  {
    categorie: "web",
    name: "amazon Data Scraper API",
    details: "an API to fetch Amazon products data (i.e., query a product by its name, search its reviews, different offers, and details)",
    important: ["the Backend is hosted on a free server, so it may need some time to fetch the data. U can try by repeat the request a few times to 'wake up' the server. It also needs a scrapper -API key- to work"],
    technologies: ["hTML", "cSS" , "javaScript", "node", "expresss"],
    date: new Date("2023-03-02T00:00:00.000-06:00"),
    link: "https://rapidapi.com/ludwing/api/amazon-data-scraper133"
  },

  {
    categorie: "web",
    name: "vans Rental",
    details: "a dummy vans rental app. Builded into a React Router Dom course, taken to learn the 'new' V6.4 Data layer APIs",
    important: ["designed for SMALL screens only. To log in, use the following credentials, email: 'b@b.com', password: 'p123'"],
    technologies: ["hTML", "cSS" , "javaScript", "react", "firebase"],
    date: new Date("2023-02-02T00:00:00.000-06:00"),
    link: "https://vanlife-app-ppr-nl.netlify.app/"
  },


  {
    categorie: "web",
    name: "shopi e-commerce app",
    details: "a dummy e-commerce app",
    important: ["designed for large screens only"],
    technologies: ["hTML", "cSS" , "javaScript", "tailwind", "react"],
    date: new Date("2023-01-02T00:00:00.000-06:00"),
    link: "https://creative-narwhal-78faec.netlify.app/"
  },

  {
    categorie: "web",
    name: "simple UI test",
    details: "a dummy web app to test some UI ideas I had and the redux essentials",
    important: ["designed for large screens only"],
    technologies: ["hTML", "cSS" , "javaScript", "redux", "react"],
    date: new Date("2022-02-02T00:00:00.000-06:00"),
    link: "https://master--dashing-parfait-e884c0.netlify.app/"
  },

  {
    categorie: "web",
    name: "1st gen pokemons App",
    details: "a pokemon web app showing 1st gen Pokemons basic info. Builded to test my Redux Toolkit knowledge",
    important: ["designed for large screens only"],
    technologies: ["hTML", "cSS" , "javaScript", "redux", "react", "antd"],
    date: new Date("2022-04-02T00:00:00.000-06:00"),
    link: "https://platzi-react-07-pro-react-redux.vercel.app/"
  },

  {
    categorie: "web",
    name: "redux Shopping App",
    details: "a pretty simple e-commer dummy web app. Builded into a Redux course",
    important: ["u don't need any info to log in, just press the log in button"],
    technologies: ["hTML", "cSS" , "javaScript", "redux", "react", "firebase", "mui"],
    date: new Date("2022-03-02T00:00:00.000-06:00"),
    link: "https://redux-01-beginner-to-advanced-mqhk6ad6t-nicolevenachi.vercel.app/"
  },

  {
    categorie: "web",
    name: "ioT crop monitoring project",
    details: "an IoT application to monitor crops' live, view its historical data, and automate its irrigation",
    important: ["the Backend is hosted on a free server, so it may need some time to fetch the data. U can try by refreshing the page a few times to 'wake up' the server"],
    technologies: ["hTML", "cSS", "javaScript", "node", "firebase", "express"],
    date: new Date("2022-05-03T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Instrumentaci-n-Fend/index.html",
    starred: true,
    image: 'images/projects/04_web.png'
  },

  {
    categorie: "web",
    name: "preprocessors demo - Sass 01",
    details: "a dummy static web app to test the preprocessor Sass",
    important: ["designed for large screens only"],
    technologies: ["hTML", "cSS", "sass"],
    date: new Date("2022-01-06T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Platzi_Estilos_02_Preprocesadores/03_sass/html/ejercicio-sass.html"
  },

  {
    categorie: "web",
    name: "preprocessors demo - Sass 02",
    details: "a dummy static web app to test the preprocessor Sass",
    important: ["designed for large screens only"],
    technologies: ["hTML", "cSS", "sass"],
    date: new Date("2022-01-05T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Platzi_Estilos_02_Preprocesadores/05_proyecto/html/pagina-principal.html"
  },
  
  {
    categorie: "web",
    name: "preprocessors demo - Less",
    details: "a dummy static web app to test the preprocessor Less",
    important: ["designed for large screens only"],
    technologies: ["hTML", "cSS", "less"],
    date: new Date("2022-01-04T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Platzi_Estilos_02_Preprocesadores/02_less/html/articulo.html"
  },
  
  {
    categorie: "web",
    name: "preprocessors demo - Styluss",
    details: "a dummy static web app to test the preprocessor Stylus",
    important: ["designed for large screens only"],
    technologies: ["hTML", "cSS", "stylus"],
    date: new Date("2022-01-03T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Platzi_Estilos_02_Preprocesadores/05_proyecto/html/resultados-busqueda.html"
  },

  {
    categorie: "web",
    name: "react To-Do list",
    details: "a simple to-do list project builded using react",
    important: [""],
    technologies: ["hTML", "cSS", "javaScript", "react"],
    date: new Date("2021-02-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/01_introduccion-a-react/"
  },

  {
    categorie: "web",
    name: "grid layout demo",
    details: "a dummy static web app to test my grid layout knowledge",
    important: [""],
    technologies: ["hTML", "cSS"],
    date: new Date("2021-01-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Platzi_Estilos_01_GridBasico/03_Proyecto/"
  },

  {
    categorie: "web",
    name: "aESS web page",
    details: "aESS -Aerospace and Electronic Systems Society- Popayán web page v.1  ",
    important: [""],
    technologies: ["hTML", "cSS" , "javaScript"],
    date: new Date("2020-02-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/AESS_Development/"
  },

  {
    categorie: "web",
    name: "simple UI test",
    details: "a dummy static web app to test some UI ideas i had",
    important: ["designed for large screens only"],
    technologies: ["hTML", "cSS" , "sass"],
    date: new Date("2020-03-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Platzi_Frontend_Developer/maquetacion.html"
  },

  {
    categorie: "web",
    name: "simple UI test",
    details: "a dummy static web app to test some UI ideas i had",
    important: [""],
    technologies: ["hTML", "cSS" , "sass"],
    date: new Date("2020-04-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Curso_Practico_JS//03_ForkedProject/index.html"
  },

  {
    categorie: "web",
    name: "personal website V1",
    details: "a pretty old portfolio builded to test my CSS basic knowledge back then",
    important: [""],
    technologies: ["hTML", "cSS"],
    date: new Date("2019-11-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Desarrollo_Web_Online/"
  },

  {
    categorie: "web",
    name: "cSS Course",
    details: "a portfolio idea builded into a CSS responsive design course",
    important: [""],
    technologies: ["hTML", "cSS"],
    date: new Date("2019-10-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/Responsive-Design/"
  },

  {
    categorie: "web",
    name: "bootsrap Course",
    details: "a dummy static web page builded into a Bootstrap course",
    important: [""],
    technologies: ["hTML", "cSS"],
    date: new Date("2019-09-02T00:00:00.000-06:00"),
    link: "https://nicolevenachi.github.io/curso_bootstrap_4/"
  },
  
]

export const projectsMl = [

  {
    categorie: "ml",
    name: "perovskite microstructure prediction",
    details: "this research project aims to quickly and efficiently predict perovskite microstructure according to easily measurable macroscopic and microscopic physical parameters. I've applied different ML algorithms in microstructure prediction, looking for two optimal models: a regression model to predict the size of the lattice parameter; and a classification model to predict the type of crystal structure formed. A paper that compiles the research results is being written",
    important: ["the project was developed following the CRISP-ML methodology", "the entire project is split into different files, each implementing a different part of the methodology or, failing that, a different part of the ML modeling and data processing"],
    technologies: ["machine-learning", "python", "classification", "regression"],
    date: new Date("2023-05-02T00:00:00.000-06:00"),
    link: "https://drive.google.com/drive/folders/1fT56TOCLxakq9uhjbboi7cY4iVaEmwn9?usp=sharing",
    starred: true,
    image: 'images/projects/01_ml.png'
  },
  {
    categorie: "ml",
    name: "stellar classification",
    details: "this research project aims to classify stars based on their spectral characteristics and physical parameters. It uses different configurations for Logistic Regression, Random Forest, and Neural Networks algorithms looking for an optimal classification model",
    important: ["the entire project is split into different files, each implementing a different part of the ML modeling and data processing"],
    technologies: ["machine-learning", "python", "classification", "deep learning"],
    date: new Date("2023-04-02T00:00:00.000-06:00"),
    link: "https://drive.google.com/drive/folders/1iYBxX9yezhcOeWA67vLJdxSL5UCfSEwi?usp=sharing",
    starred: true,
    image: 'images/projects/02_ml.png'
  },

  {
    categorie: "ml",
    name: "cars Clustering",
    details: "an ML business clustering system to segment car models, looking for potential competitors for a new line of cars",
    important: [""],
    technologies: ["machine-learning", "python", "clustering"],
    date: new Date("2023-03-03T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/1zFWN8Dj5pNZUN7qUXqp9Y2VRSpJXnYoo?usp=sharing",
  },
  {
    categorie: "ml",
    name: "customers Segmentation",
    details: "an ML business clustering system to segment customers regarding their demographics and economics, looking for those to target for product advertising",
    important: [""],
    technologies: ["machine-learning", "python", "clustering"],
    date: new Date("2023-03-02T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/1TdwuccJMifSHe3VwA-M8mdAxRidL5sM7?usp=sharing",
  },

  {
    categorie: "ml",
    name: "breast cancer prediction",
    details: "an ML binomial classification system to classify breast cancer scans as benign or malignant. The prediction relies on the Stochastic Gradient Descent (SGD) classifier algorithm. This project also uses cross-validation in the model evaluation to improve the performance improvement through hyperparameter tunning",
    important: [""],
    technologies: ["machine-learning", "python", "classification"],
    date: new Date("2023-02-06T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/10MAfnGkozwddQBYe_ixtEhHqaczXZMqd?usp=sharing",
  },
  {
    categorie: "ml",
    name: "cancer Cell Samples classifictaion",
    details: "an ML binomial classification system to classify cells to determine whether the samples are benign or malignant using human cell records. The prediction relies on the Support Vector Machine algorithm",
    important: [""],
    technologies: ["machine-learning", "python", "classification"],
    date: new Date("2023-02-05T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/16BQ84izYCJs7e1cFrigo9nFgpXKLCPaP?usp=sharing",
  },
  {
    categorie: "ml",
    name: "telecom company customer churn",
    details: "an ML multinomial classification system to predict which customers will or will not churn the company. The prediction relies on Logistic Regressio algorithm",
    important: [""],
    technologies: ["machine-learning", "python", "classification"],
    date: new Date("2023-02-04T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/1knWsYQcHKjghJreosNqyy538G2XlmlFW?usp=sharing",
  },
  {
    categorie: "ml",
    name: "medicine consumption",
    details: "an ML multinomial classification system to predict patients drug consumption. The prediction relies on Decission Tree algorithm",
    important: [""],
    technologies: ["machine-learning", "python", "classification"],
    date: new Date("2023-02-03T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/14WUoKn8Du9aEeri5rugbT8qDHr0Stg2O?usp=sharing",
  },
  {
    categorie: "ml",
    name: "fruits Classification",
    details: "an ML multinomial classification system to predict/label fruits using physical features. The prediction relies on KNN algorithm",
    important: [""],
    technologies: ["machine-learning", "python", "classification"],
    date: new Date("2023-02-02T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/10CZvdzpnfYkZ90xN8gyaS5eo0eSj289Z?usp=sharing",
  },

  {
    categorie: "ml",
    name: "colombia housing price",
    details: "an ML regression system to predict housing price on Colombia",
    important: [""],
    technologies: ["machine-learning", "python", "regression"],
    date: new Date("2023-01-03T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/1Px3r__OT3jgOLO2un9MO1s2kTgni8wOe?usp=sharing",
  },
  {
    categorie: "ml",
    name: "cO2 cars emissions prediction",
    details: "an ML regression system to predict cars CO2 emissions regarding engine and car brand features",
    important: [""],
    technologies: ["machine-learning", "python", "regression"],
    date: new Date("2023-01-02T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/1zEe_hjtH0D5fUHUH27JGsdILkT9aJ75N?usp=sharing",
  },


  {
    categorie: "ml",
    name: "countries Clustering",
    details: "an ML clustering system to categorize the countries using the overall development of the country (i.e., some socio-economic and health factors). As this project uses a large data set, it also implements PCA to reduce its dimensionality",
    important: [""],
    technologies: ["machine-learning", "python", "clustering"],
    date: new Date("2022-07-02T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/1-MuFMp81r1nn2gt2tECb3H0KwtyIAes8?usp=sharing",
    starred: true,
    image: 'images/projects/03_ml.png'
  },
  {
    categorie: "ml",
    name: "clustering dummy data - DBSCAN",
    details: "an ML clustering system to group dummy test data. This project was developed to test DBSCAN essentials, the model evaluation, and its performance improvement (hyperparameters tunning)",
    important: [""],
    technologies: ["machine-learning", "python", "clustering"],
    date: new Date("2022-06-04T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/1D8t2QFr0i028FFd8geKdNddQf6yteKjl?usp=sharing",
  },
  {
    categorie: "ml",
    name: "clustering dummy data - hierarchical clustering",
    details: "an ML clustering system to group dummy test data. This project was developed to test hierarchical clustering essentials, the model evaluation, and its performance improvement (hyperparameters tunning)",
    important: [""],
    technologies: ["machine-learning", "python", "clustering"],
    date: new Date("2022-06-03T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/1yPt8Eg-Mm8YuQFJFj_a1wo5PWA75JbCH?usp=sharing",
  },
  {
    categorie: "ml",
    name: "clustering dummy data - K-means",
    details: "an ML clustering system to group dummy test data. This project was developed to test K-means essentials, the model evaluation, and its performance improvement (hyperparameters tunning)",
    important: [""],
    technologies: ["machine-learning", "python", "clustering"],
    date: new Date("2022-06-02T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/1OwGdiJC_hAaVxn9xGjYdH3KHGEt2-cgG?usp=sharing",
  },

  {
    categorie: "ml",
    name: "medical Insurance Payout",
    details: "an ML regression system to predict the annual medical expenditure for USA customers regarding demographic information and health habits",
    important: [""],
    technologies: ["machine-learning", "python", "regression"],
    date: new Date("2022-05-02T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/1ZSEVRZpqMikfFcYFEN-bgDGxXBwOnFf_",
    starred: true,
    image: 'images/projects/04_ml.png'
  },

  {
    categorie: "ml",
    name: "boston housing prices",
    details: "an ML regression system to predict housing price on boston",
    important: [""],
    technologies: ["machine-learning", "python", "regression"],
    date: new Date("2022-04-02T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/1CdbyeMWncpo1pwolLzGOxczVZDjbe2qt",
  },

  {
    categorie: "ml",
    name: "dry beans classification",
    details: "an ML multinomial classification system to classify dry beans varieties from its morphological features",
    important: [""],
    technologies: ["machine-learning", "python", "classification"],
    date: new Date("2022-03-02T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/12RX-OXb41UOdhFNqfNv2vdBmwbjTZ3Za?usp=sharing",
  },
  {
    categorie: "ml",
    name: "telecom company customer churn",
    details: "an ML multinomial classification system to predict which customers will or will not churn the company",
    important: [""],
    technologies: ["machine-learning", "python", "classification"],
    date: new Date("2022-02-02T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/11pI_RN3bZ0Y4Pr2AySA-IznGhyMyZss7?usp=sharing",
  },
  {
    categorie: "ml",
    name: "hand-written digits classification",
    details: "an ML binomial classification system to perform optical recognition of handwritten digits (from 0-9)",
    important: [""],
    technologies: ["machine-learning", "python", "classification"],
    date: new Date("2022-01-02T00:00:00.000-06:00"),
    link: "https://colab.research.google.com/drive/1Swa8l8oquOIGQ-bAxKsJv4noCmltF9iO?usp=sharing",
    
  },

]
