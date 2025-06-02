import {createI18n} from 'vue-i18n'

export const supported_lang = ['en', 'es', 'it'] as const

const getBrowserLanguage = (): 'en' | 'es' | 'it' => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return 'en'
    }

    const browser_lang = navigator.language.split('-')[0]
    if (supported_lang.includes(browser_lang as any)) {
        return browser_lang as 'en' | 'es' | 'it'
    }
    return 'en'
}

const getSavedLanguage = (): 'en' | 'es' | 'it' | null => {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return null
    }

    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage && supported_lang.includes(savedLanguage as any)) {
        return savedLanguage as 'en' | 'es' | 'it'
    }
    return null
}

const getInitialLocale = (): 'en' | 'es' | 'it' => {
    const savedLanguage = getSavedLanguage()
    if (savedLanguage) return savedLanguage
    return getBrowserLanguage()
}

const messages = {
    "en": {
        "occupation": "Full-stack Developer and \nSoftware Engineer",
        "heading": "Computer scientist passionate about data, graphs, and clean code. Chasing insights and squashing bugs along the way. \nLooking for a language, tool, or framework I’ve used? Just start typing!",
        "searchPlaceholder": "Search...",
        "nav": {
            "about": "ABOUT",
            "education": "EDUCATION",
            "experience": "EXPERIENCE",
            "projects": "PROJECTS"
        },
        "sections": {
            "about": {
                "heading": "About",
                "content": "I’m a computer scientist with a passion for data, graphs, and writing clean, efficient code. After earning my Bachelor's degree in Computer Science from the University of Catania I began working as a full-stack developer.\n \n Alongside my work, I’ve started studying software testing to improve code quality and reliability, and I’m also planning to deepen my skills in data science, a field that perfectly blends my interest in statistics and real-world problem solving.\n \n I speak Italian, English, and Spanish, and I enjoy international and collaborative environments."
            },
            "education": {
                "heading": "Education & Certifications",
                "items": {
                    "certificate0": {
                        "title": "Introduction to Software Testing",
                        "institution": "University of Minnesota via [Coursera](https://www.coursera.org/)",
                        "year": "Feb 2025",
                        "description": "This course provided an introduction to key software testing concepts, including test case design, test automation, and defect detection. It helped me build a deeper understanding of how to ensure software reliability and quality throughout the development lifecycle. [View credential](https://www.coursera.org/account/accomplishments/verify/I6FY31KY628G)",
                        "tags": ["JUnit", "JaCoCo", "Eclipse", "Mockito", "Black/White Box Testing"]
                    },
                    "certificate1": {
                        "title": "BSc in Computer Science",
                        "institution": "[University of Catania](https://www.unict.it/en) – [Department of Mathematics and Computer Science](https://web.dmi.unict.it/en)",
                        "year": "2017 – 2022",
                        "description": "I completed my Bachelor's studies, where I developed a strong interest in programming and learned the fundamentals of software development. Here it is possible to find my training path with the relevant [study plan](https://drive.google.com/file/d/1Ba2nP0jmu24l6Ig46W_l9mU97wanaKK4/view) for each subject.",
                        "tags": ["C++", "C", "Java", "Python", "PHP", "Docker", "Red-Black Trees", "Binary Trees", "Unidirectional Graphs", "Directed Graphs", "NLP", "Adjacency Matrix", "Adjacency List", "Heap", "Hash Tables", "Sorting Algorithms", "Probability", "Statistics", "Discrete Mathematics", "Machine Learning", "Computer Graphics", "Software Engineering", "REST APIs"]
                    },
                    "certificate2": {
                        "title": "Erasmus Semester",
                        "institution": "[University of Groningen (Top 100 University)](https://www.rug.nl/)",
                        "year": "Jan 2020 – July 2020",
                        "description": "I spent a semester abroad through the Erasmus+ program, an enriching experience that allowed me to study in an international environment, improve my language skills, and broaden my academic and cultural perspective.",
                        "tags": ["AI", "ProLog", "Python", "Linear Algebra", "Calculus", "Cognitive Psychology", "MatLab"]
                    }
                }
            },
            "experience": {
                "heading": "Work Experience",
                "items": {
                    "job0": {
                        "title": "Full-stack Developer and Software Engineer",
                        "company": "[PPK Innovation](https://ppkinnovation.com/)",
                        "year": "Jan 2025 – Present",
                        "description": "I focus on designing and building dynamic, user-focused software solutions that meet evolving business needs. My work spans backend and frontend development, database integration, and application deployment using AWS services, with an emphasis on performance, reliability, and clean, maintainable code.",
                        "tags": ["Python", "JavaScript", "TypeScript", "OpenSearch", "HTML", "CSS", "Vue 2", "Vue 3", "Tailwind CSS", "Vuetify", "SQL", "PostgreSQL", "Redis", "Databases", "Liquibase", "AWS", "S3", "Lambda", "API Gateway", "CloudWatch", "Docker", "Git", "GitHub", "Jenkis", "CI/CD"]
                    },
                    "job1": {
                        "title": "Full-stack Developer and Software Engineer",
                        "company": "[Skillbill s.r.l. | Skill Matters](https://www.skillbill.it/)",
                        "year": "Mar 2023 – Present",
                        "description": "I contribute to the development of multiple projects in parallel, building scalable and intuitive web applications using modern technologies, frameworks, and database systems. I take part in the full software development lifecycle, including design, implementation, and deployment to cloud systems like AWS Cloud. Working closely with a cross-functional team, I help deliver reliable, high-quality solutions aligned with business goals.",
                        "tags": ["JavaScript", "Python", "SQL", "PostgreSQL", "Databases", "Liquibase", "TypeScript", "Redis", "AWS", "Jenkis", "Vue 2", "Vue 3", "Tailwind CSS", "Docker", "Git", "GitHub", "Vuetify", "CloudWatch", "S3", "Lambda", "API Gateway", "CI/CD", "HTML", "CSS", "OpenSearch"]
                    },
                    "job2": {
                        "title": "Internship Trainee",
                        "company": "[AUDIAS](https://audias.ii.uam.es/) at [Universidad Autónoma De Madrid](https://www.uam.es/uam/inicio)",
                        "year": "Jan 2022 – May 2022",
                        "description": "Worked on developing a speech processing system using deep learning, focusing on applying variational Bayes HMM over x-vectors for speaker diarization. Gained hands-on experience with PyTorch and machine learning pipelines.",
                        "tags": ["Speech Processing", "Deep Learning", "PyTorch", "NLP", "Pearl", "VBx", "HMM", "Speaker Diarization", "kaldi"]
                    }
                }
            },
            "projects": {
                "heading": "Selected Projects",
                "viewAllButton": "View All Projects",
                "allProjectsTitle": "All Projects",
                "allProjectsSubtitle": "Complete list of my projects and work",
                "backToHome": "Back to Home",
                "noResults": "No projects found matching your search.",
                "tableHeaders": {
                    "name": "Name",
                    "year": "Year",
                    "description": "Description",
                    "technologies": "Technologies",
                    "links": "Links"
                },
                "items": {
                    "project1": {
                        "name": "Portfolio Website",
                        "year": "2025",
                        "description": "A responsive portfolio website built with Vue.js and Tailwind CSS. Exactly what you are looking at right now!",
                        "documentLink": null,
                        "githubLink": "https://github.com/Julieeno/my-portfolio",
                        "tags": ["Vue.js", "TypeScript", "Tailwind CSS", "i18n", "Vite", "Vue 3"]
                    },
                    "project2": {
                        "name": "Conversational Agents and Their Impact",
                        "year": "2022",
                        "description": "My bachelor thesis that aims to propose conversational agents as tools to deal with mental issues like depression or anxiety problems, discussing their current state-of-the-art and people’s perception.",
                        "documentLink": "https://drive.google.com/file/d/1uMQcFwMVPFX8c6jBy4ccR_y-vUxl5Ch2/view",
                        "githubLink": null,
                        "tags": ["NPL", "Rasa", "Deep Learning", "Speech Processing", "Dialogflow"]
                    },
                    "project3": {
                        "name": "Stocks Analysis & Prediction",
                        "year": "2021",
                        "description": "A Dockerizing with the purpose to predict the prices of the stock market, considering their real prices.",
                        "documentLink": "https://drive.google.com/file/d/1OOZs_FtW55Df04YJST7rrgDUh3J57ZPv/view",
                        "githubLink": "https://github.com/Julieeno/Stock-Analysis-and-Prediction",
                        "tags": ["Machine Learning", "Docker", "ElasticSearch", "Kafka", "Python", "Finnhub", "Logstash", "Apache", "Kibana", "PHP", "JavaScript", "Linear Regression"]
                    },
                    "project4": {
                        "name": "Song's Popularity",
                        "year": "2021",
                        "description": "This project aims to find the technical features of a song that could determine its popularity. Has been used the Spotify API to collect the data, and different typesm of Regressions to analyze these.",
                        "documentLink": "https://drive.google.com/file/d/1vpIf2ja3o9geU0bg_G_72i9QgvfSNXDN/view",
                        "githubLink": "https://github.com/Julieeno/Song-s-Popularity",
                        "tags": ["Machine Learning", "Linear Regression", "Polynomial Regression", "Python"]
                    },
                    "project5": {
                        "name": "Cartesian Tree",
                        "year": "2021",
                        "description": "An essay where is discussed the data structure Cartesian Tree, illustrating its properties and the way to manage it.",
                        "documentLink": "https://drive.google.com/file/d/1zI0yfJgn3STWpigmjpdaMCmc7tICj0DV/view",
                        "githubLink": null,
                        "tags": ["Cartesian Tree", "C++"]
                    }
                }
            }
        }
    },
    "es": {
        "occupation": "Full-stack Developer y \nSoftware Engineer",
        "heading": "informático apasionado por los datos, los gráficos y el código limpio. en busca de insight y cazando bugs. \n¿Buscas un lenguaje, tecnología o framework que haya usado? ¡Escríbelo aquí!",
        "searchPlaceholder": "Buscar...",
        "nav": {
            "about": "SOBRE MÍ",
            "education": "EDUCACIÓN",
            "experience": "EXPERIENCIA",
            "projects": "PROYECTOS"
        },
        "sections": {
            "about": {
                "heading": "Sobre Mí",
                "content": "Soy un científico informático con pasión por los datos, los gráficos y escribir código limpio y eficiente. Después de obtener mi título de grado en Ciencias de la Computación en la University of Catania, comencé a trabajar como programador full-stack.\n \n Junto con mi trabajo, he empezado a estudiar software testing para mejorar la calidad y fiabilidad del código, y también planeo profundizar mis habilidades en ciencia de datos, un campo que combina perfectamente mi interés por la estadística y la resolución de problemas del mundo real.\n \n Hablo italiano, inglés y español, y disfruto de ambientes internacionales y colaborativos."
            },
            "education": {
                "heading": "Educación y Certificaciones",
                "items": {
                    "certificate0": {
                        "title": "Introducción a el Software Testing",
                        "institution": "University of Minnesota a través de [Coursera](https://www.coursera.org/)",
                        "year": "Feb 2025",
                        "description": "Este curso ofreció una introducción a los conceptos clave del software testing, incluyendo el diseño de casos de prueba, la automatización de pruebas y la detección de errores. Me permitió profundizar en la comprensión de cómo garantizar la confiabilidad y calidad del software a lo largo del ciclo de desarrollo. [Ver credencial](https://www.coursera.org/account/accomplishments/verify/I6FY31KY628G)",
                        "tags": ["Software Testing", "Quality Assurance", "Coursera"]
                    },

                    "certificate1": {
                        "title": "Grado en Ciencias de la Computación",
                        "institution": "[University of Catania](https://www.unict.it/en) – [Departamento de Matemáticas e Informática](https://web.dmi.unict.it/en)",
                        "year": "2017 – 2022",
                        "description": "Completé mis estudios de grado, durante los cuales desarrollé un gran interés por la programación y aprendí los fundamentos del desarrollo de software. Aquí es posible consultar mi trayectoria formativa con el correspondiente [plan de estudios](https://drive.google.com/file/d/1Ba2nP0jmu24l6Ig46W_l9mU97wanaKK4/view) para cada asignatura.",
                        "tags": ["IA", "PLN", "Ciencias de la Computación"]
                    },
                    "certificate2": {
                        "title": "Semestre Erasmus",
                        "institution": "[Universidad de Groningen (Top 100 Mundial)](https://www.rug.nl/)",
                        "year": "Ene 2020 – Jul 2020",
                        "description": "Realicé un semestre en el extranjero a través del programa Erasmus+, una experiencia enriquecedora que me permitió estudiar en un entorno internacional, mejorar mis competencias lingüísticas y ampliar mi perspectiva académica y cultural.",
                        "tags": ["Erasmus", "Experiencia Internacional", "Informática"]
                    }
                }
            },
            "experience": {
                "heading": "Experiencia Laboral",
                "items": {
                    "job0": {
                        "title": "Programador Full-stack e Ingeniero de Software",
                        "company": "[PPK Innovation](https://ppkinnovation.com/)",
                        "year": "Ene 2025 – Actualidad",
                        "description": "Me enfoco en diseñar y desarrollar soluciones de software dinámicas y centradas en el usuario que respondan a las necesidades empresariales en constante evolución. Mi trabajo abarca tanto el desarrollo backend como frontend, la integración de bases de datos y el despliegue de aplicaciones utilizando servicios de AWS, con énfasis en el rendimiento, la fiabilidad y un código limpio y mantenible.",
                        "tags": ["Full-stack", "JavaScript", "Backend", "Frontend", "Bases de Datos"]
                    },
                    "job1": {
                        "title": "Programador Full-stack e Ingeniero de Software",
                        "company": "[Skillbill s.r.l. | Skill Matters](https://www.skillbill.it/)",
                        "year": "Mar 2023 – Actualidad",
                        "description": "Contribuyo al desarrollo de múltiples proyectos en paralelo, creando aplicaciones web escalables e intuitivas mediante tecnologías modernas, frameworks y sistemas de gestión de bases de datos. Participo en todo el ciclo de vida del desarrollo de software, desde el diseño y la implementación hasta el despliegue en sistemas como AWS Cloud. Trabajando en estrecha colaboración con un equipo multidisciplinario, ayudo a entregar soluciones confiables y de alta calidad alineadas con los objetivos del negocio.",
                        "tags": ["Full-stack", "JavaScript", "Backend", "Frontend", "Bases de Datos"]
                    },
                    "job2": {
                        "title": "Becario",
                        "company": "[AUDIAS](https://audias.ii.uam.es/) en [Universidad Autónoma de Madrid](https://www.uam.es/uam/inicio)",
                        "year": "Ene 2022 – May 2022",
                        "description": "Trabajé en el desarrollo de un sistema de procesamiento de voz utilizando deep learning, centrado en la aplicación de modelos HMM con Bayesiana Variacional sobre x-vectores para la 'speaker diaeization'. Adquirí experiencia práctica con PyTorch y flujos de trabajo de machine learning.",
                        "tags": ["Procesamiento de Voz", "Deep Learning", "PyTorch", "PLN"]
                    }
                }
            },
            "projects": {
                "heading": "Proyectos Seleccionados",
                "viewAllButton": "Ver Todos los Proyectos",
                "allProjectsTitle": "Todos los Proyectos",
                "allProjectsSubtitle": "Lista completa de mis proyectos y trabajo",
                "backToHome": "Volver al Inicio",
                "noResults": "No se encontraron proyectos que coincidan con tu búsqueda.",
                "tableHeaders": {
                    "name": "Nombre",
                    "year": "Año",
                    "description": "Descripción",
                    "technologies": "Tecnologías",
                    "links": "Enlaces"
                },
                "items": {
                    "project1": {
                        "name": "Sitio Web Portfolio",
                        "year": "2025",
                        "description": "Un sitio web portfolio responsivo construido con Vue.js y Tailwind CSS. ¡Exactamente lo que estás viendo ahora mismo!",
                        "documentLink": null,
                        "githubLink": "https://github.com/Julieeno/my-portfolio",
                        "tags": ["Vue.js", "TypeScript", "Tailwind CSS", "i18n"]
                    },
                    "project2": {
                        "name": "Agentes Conversacionales y su Impacto",
                        "year": "2022",
                        "description": "Mi tesis de grado que propone agentes conversacionales como medio para tratar trastornos mentales como la depresión o la ansiedad, discutiendo el estado del arte actual y la percepción de las personas.",
                        "documentLink": "https://drive.google.com/file/d/1uMQcFwMVPFX8c6jBy4ccR_y-vUxl5Ch2/view",
                        "githubLink": null,
                        "tags": ["Python", "PyTorch", "Deep Learning", "Procesamiento del Lenguaje"]
                    },
                    "project3": {
                        "name": "Análisis y Predicción de Acciones",
                        "year": "2021",
                        "description": "Un proyecto de containerización con Docker con el propósito de predecir los precios del mercado bursátil, considerando sus precios reales.",
                        "documentLink": "https://drive.google.com/file/d/1OOZs_FtW55Df04YJST7rrgDUh3J57ZPv/view",
                        "githubLink": "https://github.com/Julieeno/Stock-Analysis-and-Prediction",
                        "tags": ["AI", "NLP", "Investigación", "Salud Mental"]
                    },
                    "project4": {
                        "name": "Popularidad de una Canción",
                        "year": "2021",
                        "description": "Este proyecto tiene como objetivo identificar las características técnicas de una canción que podrían determinar su popularidad. Se utilizó la API de Spotify para recopilar los datos y se aplicaron diferentes tipos de regresión para analizarlos.",
                        "documentLink": "https://drive.google.com/file/d/1vpIf2ja3o9geU0bg_G_72i9QgvfSNXDN/view",
                        "githubLink": "https://github.com/Julieeno/Song-s-Popularity",
                        "tags": ["React", "Node.js", "PostgreSQL", "Stripe", "Express"]
                    },
                    "project5": {
                        "name": "Árbol Cartesiano",
                        "year": "2021",
                        "description": "Un ensayo en el que se analiza la estructura de datos Árbol Cartesiano, ilustrando sus propiedades y cómo gestionarla.",
                        "documentLink": "https://drive.google.com/file/d/1zI0yfJgn3STWpigmjpdaMCmc7tICj0DV/view",
                        "githubLink": null,
                        "tags": ["Vue.js", "D3.js", "JavaScript", "Gráficos", "Analítica"]
                    }
                }
            }
        }
    },
    "it": {
        "occupation": "Full-stack Developer e \nSoftware Engineer",
        "heading": "Informatico appassionato di dati, grafici e codice pulito. Sempre a caccia di insight e bug da eliminare. \nCerchi un linguaggio, uno strumento o un framework che ho usato? Scrivilo qui!",
        "searchPlaceholder": "Cerca...",
        "nav": {
            "about": "CHI SONO",
            "education": "FORMAZIONE",
            "experience": "ESPERIENZA",
            "projects": "PROGETTI"
        },
        "sections": {
            "about": {
                "heading": "Chi Sono",
                "content": "Sono un informatico con la passione per i dati, i grafici e la scrittura di codice pulito ed efficiente. Dopo aver conseguito la laurea triennale in Informatica presso l'Università degli Studi di Catania, ho iniziato a lavorare come sviluppatore full-stack.\n \n Parallelamente al mio lavoro, ho iniziato a studiare il software testing per migliorare la qualità e l'affidabilità del codice, e sto anche pianificando di approfondire le mie competenze in data science, un campo che combina perfettamente il mio interesse per la statistica e la risoluzione di problemi concreti.\n \n Parlo italiano, inglese e spagnolo, e mi piace trovarmi in ambienti internazionali e collaborativi."
            },
            "education": {
                "heading": "Formazione e Certificazioni",
                "items": {
                    "certificate0": {
                        "title": "Introduzione al Software Testing",
                        "institution": "University of Minnesota via [Coursera](https://www.coursera.org/)",
                        "year": "Feb 2025",
                        "description": "Questo corso ha fornito un'introduzione ai principali concetti del software testing, inclusi la progettazione dei casi di test, l'automazione dei test e l'identificazione dei difetti. Mi ha permesso di approfondire la comprensione di come garantire l'affidabilità e la qualità del software durante tutto il ciclo di sviluppo. [Visualizza credenziale](https://www.coursera.org/account/accomplishments/verify/I6FY31KY628G)",
                        "tags": ["Software Testing", "Quality Assurance", "Coursera"]
                    },

                    "certificate1": {
                        "title": "Laurea Triennale in Informatica",
                        "institution": "[Università degli Studi di Catania](https://www.unict.it/en) – [Dipartimento di Matematica e Informatica](https://web.dmi.unict.it/en)",
                        "year": "2017 – 2022",
                        "description": "Ho completato gli studi triennali, durante i quali ho sviluppato un forte interesse per la programmazione e appreso le basi dello sviluppo software. Qui è possibile consultare il mio percorso formativo con il relativo [piano di studi](https://drive.google.com/file/d/1Ba2nP0jmu24l6Ig46W_l9mU97wanaKK4/view) per ciascuna materia.",
                        "tags": ["AI", "NLP", "Informatica"]
                    },
                    "certificate2": {
                        "title": "Semestre Erasmus",
                        "institution": "[Università di Groningen (Top 100 Università)](https://www.rug.nl/)",
                        "year": "Gen 2020 – Lug 2020",
                        "description": "Ho trascorso un semestre all’estero grazie al programma Erasmus+, un’esperienza formativa che mi ha permesso di studiare in un contesto internazionale, migliorare le competenze linguistiche e ampliare la mia prospettiva accademica e culturale.",
                        "tags": ["Programma Erasmus", "Esperienza Internazionale", "Informatica"]
                    }
                }
            },
            "experience": {
                "heading": "Esperienza Lavorativa",
                "items": {
                    "job0": {
                        "title": "Sviluppatore Full-stack e Ingegnere del Software",
                        "company": "[PPK Innovation](https://ppkinnovation.com/)",
                        "year": "Gen 2025 – Presente",
                        "description": "Mi concentro sulla progettazione e lo sviluppo di soluzioni software dinamiche e orientate all’utente, in grado di soddisfare esigenze aziendali in continua evoluzione. Il mio lavoro spazia dallo sviluppo backend e frontend all'integrazione dei database e al deployment delle applicazioni tramite i servizi AWS, con particolare attenzione a prestazioni, affidabilità e scrittura di codice pulito e manutenibile.",
                        "tags": ["Full-stack", "JavaScript", "Backend", "Frontend", "Database"]
                    },
                    "job1": {
                        "title": "Sviluppatore Full-stack e Ingegnere del Software",
                        "company": "[Skillbill s.r.l. | Skill Matters](https://www.skillbill.it/)",
                        "year": "Mar 2023 – Presente",
                        "description": "Contribuisco allo sviluppo di più progetti in parallelo, realizzando applicazioni web scalabili e intuitive utilizzando tecnologie moderne, framework e sistemi di gestione dei database. Partecipo all’intero ciclo di vita dello sviluppo software, dalla progettazione all’implementazione fino al deployment su sistemi come AWS Cloud. Lavorando a stretto contatto con un team multidisciplinare, aiuto a fornire soluzioni affidabili e di alta qualità, in linea con gli obiettivi aziendali.",
                        "tags": ["Full-stack", "JavaScript", "Backend", "Frontend", "Database"]
                    },
                    "job2": {
                        "title": "Tirocinio",
                        "company": "[AUDIAS](https://audias.ii.uam.es/) presso [Universidad Autónoma De Madrid](https://www.uam.es/uam/inicio)",
                        "year": "Gen 2022 – Mag 2022",
                        "description": "Ho lavorato allo sviluppo di un sistema di elaborazione vocale basato su deep learning, concentrandomi sull'applicazione di modelli HMM con Bayesiana Variazionale su x-vector per la 'speaker diarization'. Ho acquisito esperienza pratica con PyTorch e pipeline di machine learning.",
                        "tags": ["Elaborazione Vocale", "Deep Learning", "PyTorch", "NLP"]
                    }
                }
            },
            "projects": {
                "heading": "Progetti Selezionati",
                "viewAllButton": "Vedi Tutti i Progetti",
                "allProjectsTitle": "Tutti i Progetti",
                "allProjectsSubtitle": "Lista completa dei miei progetti e lavori",
                "backToHome": "Torna alla Home",
                "noResults": "Nessun progetto trovato che corrisponda alla tua ricerca.",
                "tableHeaders": {
                    "name": "Nome",
                    "year": "Anno",
                    "description": "Descrizione",
                    "technologies": "Tecnologie",
                    "links": "Collegamenti"
                },
                "items": {
                    "project1": {
                        "name": "Sito Web Portfolio",
                        "year": "2025",
                        "description": "Un sito web portfolio responsive realizzato con Vue.js e Tailwind CSS. Proprio quello che stai guardando in questo momento!",
                        "documentLink": null,
                        "githubLink": "https://github.com/Julieeno/my-portfolio",
                        "tags": ["Vue.js", "TypeScript", "Tailwind CSS", "i18n"]
                    },
                    "project2": {
                        "name": "Agenti Conversazionali e il loro Impatto",
                        "year": "2022",
                        "description": "La mia tesi triennale che propone gli agenti conversazionali come strumenti per affrontare disturbi mentali come depressione o ansia, discutendo lo stato dell’arte attuale e la percezione delle persone.",
                        "documentLink": "https://drive.google.com/file/d/1uMQcFwMVPFX8c6jBy4ccR_y-vUxl5Ch2/view",
                        "githubLink": null,
                        "tags": ["Python", "PyTorch", "Deep Learning", "Elaborazione del Linguaggio"]
                    },
                    "project3": {
                        "name": "Analisi e Predizione dei Titoli Azionari",
                        "year": "2021",
                        "description": "Un progetto di containerizzazione con Docker volto a prevedere i prezzi del mercato azionario, basandosi sui prezzi reali.",
                        "documentLink": "https://drive.google.com/file/d/1OOZs_FtW55Df04YJST7rrgDUh3J57ZPv/view",
                        "githubLink": "https://github.com/Julieeno/Stock-Analysis-and-Prediction",
                        "tags": ["AI", "NLP", "Ricerca", "Salute Mentale"]
                    },
                    "project4": {
                        "name": "Popolarità di una Canzone",
                        "year": "2021",
                        "description": "Questo progetto mira a individuare le caratteristiche tecniche di una canzone che possono determinarne la popolarità. È stata utilizzata l'API di Spotify per raccogliere i dati e sono stati applicati diversi tipi di regressione per analizzarli.",
                        "documentLink": "https://drive.google.com/file/d/1vpIf2ja3o9geU0bg_G_72i9QgvfSNXDN/view",
                        "githubLink": "https://github.com/Julieeno/Song-s-Popularity",
                        "tags": ["React", "Node.js", "PostgreSQL", "Stripe", "Express"]
                    },
                    "project5": {
                        "name": "Albero Cartesiano",
                        "year": "2021",
                        "description": "Un saggio in cui viene discussa la struttura dati Albero Cartesiano, illustrandone le proprietà e il modo in cui gestirla.",
                        "documentLink": "https://drive.google.com/file/d/1zI0yfJgn3STWpigmjpdaMCmc7tICj0DV/view",
                        "githubLink": null,
                        "tags": ["Vue.js", "D3.js", "JavaScript", "Grafici", "Analisi"]
                    }
                }
            }
        }
    }
}

const i18n = createI18n({
    legacy: false,
    locale: getInitialLocale(),
    fallbackLocale: 'en',
    messages
})

export const changeLanguage = (newLocale: string) => {
    if (supported_lang.includes(newLocale as any)) {
        i18n.global.locale.value = newLocale as 'en' | 'es' | 'it'

        if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
            localStorage.setItem('language', newLocale)
        }
    }
}

export default i18n