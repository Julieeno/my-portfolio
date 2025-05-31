import { createI18n } from 'vue-i18n'

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
        "title": "Giuliano Lazzara",
        "searchPlaceholder": "Search technology...",
        "nav": {
            "about": "ABOUT",
            "education": "EDUCATION",
            "experience": "EXPERIENCE"
        },
        "sections": {
            "about": {
                "heading": "About",
                "content": "Computer Scientist with a strong academic background and hands-on experience in full-stack development and speech processing systems. Proficient in Python, JavaScript, and several other languages. Skilled in data structures, machine learning, and collaborative software development using GitHub.",
                "skills": [
                    "Python",
                    "JavaScript",
                    "C++",
                    "C#",
                    "Java",
                    "HTML",
                    "SQL",
                    "PHP",
                    "Docker",
                    "Machine Learning",
                    "Data Visualization",
                    "Git",
                    "PyTorch"
                ]
            },
            "education": {
                "heading": "Education & Certifications",
                "items": {
                    "certificate1": {
                        "title": "BSc in Computer Science",
                        "institution": "[University of Catania](https://www.unict.it/en) – [Department of Mathematics and Computer Science](https://web.dmi.unict.it/en)",
                        "year": "2017 – 2022",
                        "description": "Graduated with a thesis on ['Conversational Agents and Their Impact'](https://drive.google.com/file/d/1uMQcFwMVPFX8c6jBy4ccR_y-vUxl5Ch2/view), exploring the use of AI-driven tools to address mental health issues such as depression and anxiety, and analyzing public perception and state-of-the-art technologies.",
                        "tags": ["AI", "NLP", "Computer Science"]
                    },
                    "certificate2": {
                        "title": "Erasmus Exchange Program",
                        "institution": "[University of Groningen (Top 100 University)](https://www.rug.nl/)",
                        "year": "Jan 2020 – July 2020",
                        "description": "Studied and collaborated in an international environment, gaining experience with online course structures and advanced coursework in computer science.",
                        "tags": ["Exchange Program", "International Experience", "Computer Science"]
                    }
                }
            },
            "experience": {
                "heading": "Work Experience",
                "items": {
                    "job0": {
                        "title": "Full-stack Developer and Software Engineer",
                        "company": "PPK Innovation",
                        "year": "Jan 2025 – Present",
                        "description": "Developed scalable and dynamic software solutions using a variety of programming languages and frameworks. Worked on database management, frontend/backend development, and deployment pipelines to meet client and internal business requirements.",
                        "tags": ["Full-stack", "JavaScript", "Backend", "Frontend", "Databases"]
                    },
                    "job1": {
                        "title": "Full-stack Developer and Software Engineer",
                        "company": "[Skillbill s.r.l. | Skill Matters](https://www.skillbill.it/)",
                        "year": "Mar 2023 – Present",
                        "description": "Developed scalable and dynamic software solutions using a variety of programming languages and frameworks. Worked on database management, frontend/backend development, and deployment pipelines to meet client and internal business requirements.",
                        "tags": ["Full-stack", "JavaScript", "Backend", "Frontend", "Databases"]
                    },
                    "job2": {
                        "title": "Internship Trainee – Speech Processing System",
                        "company": "[AUDIAS](https://audias.ii.uam.es/) at [Universidad Autónoma De Madrid](https://www.uam.es/uam/inicio)",
                        "year": "Jan 2022 – May 2022",
                        "description": "Worked on developing a speech processing system using deep learning, focusing on applying variational Bayes HMM over x-vectors for speaker diarization. Gained hands-on experience with PyTorch and machine learning pipelines.",
                        "tags": ["Speech Processing", "Deep Learning", "PyTorch", "NLP"]
                    }
                }
            }
        }
    },
    "es": {
        "title": "Giuliano Lazzara",
        "searchPlaceholder": "Buscar tecnología...",
        "nav": {
            "about": "SOBRE MÍ",
            "education": "EDUCACIÓN",
            "experience": "EXPERIENCIA"
        },
        "sections": {
            "about": {
                "heading": "Sobre Mí",
                "content": "Científico informático con una sólida formación académica y experiencia práctica en desarrollo full-stack y sistemas de procesamiento de voz. Competente en Python, JavaScript y varios otros lenguajes. Hábil en estructuras de datos, aprendizaje automático y desarrollo colaborativo de software utilizando GitHub.",
                "skills": [
                    "Python",
                    "JavaScript",
                    "C++",
                    "C#",
                    "Java",
                    "HTML",
                    "SQL",
                    "PHP",
                    "Docker",
                    "Aprendizaje Automático",
                    "Visualización de Datos",
                    "Git",
                    "PyTorch"
                ]
            },
            "education": {
                "heading": "Educación y Certificaciones",
                "items": {
                    "certificate1": {
                        "title": "Grado en Ciencias de la Computación",
                        "institution": "[Universidad de Catania](https://www.unict.it/en) – [Departamento de Matemáticas e Informática](https://web.dmi.unict.it/en)",
                        "year": "2017 – 2022",
                        "description": "Graduado con una tesis sobre ['Agentes Conversacionales y su Impacto'](https://drive.google.com/file/d/1uMQcFwMVPFX8c6jBy4ccR_y-vUxl5Ch2/view), que explora el uso de herramientas basadas en inteligencia artificial para abordar problemas de salud mental como la depresión y la ansiedad, analizando el estado del arte y la percepción pública.",
                        "tags": ["IA", "PLN", "Ciencias de la Computación"]
                    },
                    "certificate2": {
                        "title": "Programa de Intercambio Erasmus",
                        "institution": "[Universidad de Groningen (Top 100 Mundial)](https://www.rug.nl/)",
                        "year": "Ene 2020 – Jul 2020",
                        "description": "Estudié y colaboré en un entorno internacional, adquiriendo experiencia en la estructura de cursos en línea y en materias avanzadas en informática.",
                        "tags": ["Erasmus", "Experiencia Internacional", "Informática"]
                    }
                }
            },
            "experience": {
                "heading": "Experiencia Laboral",
                "items": {
                    "job0": {
                        "title": "Desarrollador Full-stack e Ingeniero de Software",
                        "company": "PPK Innovation",
                        "year": "Ene 2025 – Actualidad",
                        "description": "Desarrollo de soluciones software escalables y dinámicas utilizando diversos lenguajes de programación y frameworks. Trabajo en gestión de bases de datos, desarrollo frontend/backend y pipelines de despliegue para cumplir con los requisitos empresariales y de los clientes.",
                        "tags": ["Full-stack", "JavaScript", "Backend", "Frontend", "Bases de Datos"]
                    },
                    "job1": {
                        "title": "Desarrollador Full-stack e Ingeniero de Software",
                        "company": "[Skillbill s.r.l. | Skill Matters](https://www.skillbill.it/)",
                        "year": "Mar 2023 – Actualidad",
                        "description": "Desarrollo de soluciones software escalables y dinámicas utilizando diversos lenguajes de programación y frameworks. Trabajo en gestión de bases de datos, desarrollo frontend/backend y pipelines de despliegue para cumplir con los requisitos empresariales y de los clientes.",
                        "tags": ["Full-stack", "JavaScript", "Backend", "Frontend", "Bases de Datos"]
                    },
                    "job2": {
                        "title": "Becario – Sistema de Procesamiento de Voz",
                        "company": "[AUDIAS](https://audias.ii.uam.es/) en [Universidad Autónoma de Madrid](https://www.uam.es/uam/inicio)",
                        "year": "Ene 2022 – May 2022",
                        "description": "Desarrollé un sistema de procesamiento de voz basado en deep learning, centrándome en la aplicación de HMM bayesianos variacionales sobre x-vectors para diarización. Experiencia práctica con PyTorch y pipelines de aprendizaje automático.",
                        "tags": ["Procesamiento de Voz", "Deep Learning", "PyTorch", "PLN"]
                    }
                }
            }
        }
    },
    "it": {
        "title": "Giuliano Lazzara",
        "searchPlaceholder": "Cerca tecnologia...",
        "nav": {
            "about": "CHI SONO",
            "education": "FORMAZIONE",
            "experience": "ESPERIENZA"
        },
        "sections": {
            "about": {
                "heading": "Chi Sono",
                "content": "Informatico con una solida formazione accademica ed esperienza pratica nello sviluppo full-stack e nei sistemi di elaborazione vocale. Competente in Python, JavaScript e molti altri linguaggi. Abile nelle strutture dati, nel machine learning e nello sviluppo collaborativo di software tramite GitHub.",
                "skills": [
                    "Python",
                    "JavaScript",
                    "C++",
                    "C#",
                    "Java",
                    "HTML",
                    "SQL",
                    "PHP",
                    "Docker",
                    "Machine Learning",
                    "Visualizzazione Dati",
                    "Git",
                    "PyTorch"
                ]
            },
            "education": {
                "heading": "Formazione e Certificazioni",
                "items": {
                    "certificate1": {
                        "title": "Laurea in Informatica",
                        "institution": "[Università di Catania](https://www.unict.it/en) – [Dipartimento di Matematica e Informatica](https://web.dmi.unict.it/en)",
                        "year": "2017 – 2022",
                        "description": "Laureato con una tesi su ['Agenti Conversazionali e il Loro Impatto'](https://drive.google.com/file/d/1uMQcFwMVPFX8c6jBy4ccR_y-vUxl5Ch2/view), che esplora l'utilizzo di strumenti basati su intelligenza artificiale per affrontare problematiche legate alla salute mentale, come depressione e ansia, analizzando lo stato dell'arte e la percezione delle persone.",
                        "tags": ["AI", "NLP", "Informatica"]
                    },
                    "certificate2": {
                        "title": "Programma Erasmus",
                        "institution": "[Università di Groningen (Top 100 Università)](https://www.rug.nl/)",
                        "year": "Gen 2020 – Lug 2020",
                        "description": "Ho studiato e collaborato in un contesto internazionale, acquisendo esperienza con l'organizzazione dei corsi online e frequentando insegnamenti avanzati in informatica.",
                        "tags": ["Programma Erasmus", "Esperienza Internazionale", "Informatica"]
                    }
                }
            },
            "experience": {
                "heading": "Esperienza Lavorativa",
                "items": {
                    "job0": {
                        "title": "Sviluppatore Full-stack e Ingegnere del Software",
                        "company": "PPK Innovation",
                        "year": "Gen 2025 – Presente",
                        "description": "Sviluppo di soluzioni software scalabili e dinamiche utilizzando diversi linguaggi di programmazione e framework. Lavoro su gestione di database, sviluppo frontend/backend e pipeline di deployment per soddisfare i requisiti aziendali e dei clienti.",
                        "tags": ["Full-stack", "JavaScript", "Backend", "Frontend", "Database"]
                    },
                    "job1": {
                        "title": "Sviluppatore Full-stack e Ingegnere del Software",
                        "company": "[Skillbill s.r.l. | Skill Matters](https://www.skillbill.it/)",
                        "year": "Mar 2023 – Presente",
                        "description": "Sviluppo di soluzioni software scalabili e dinamiche utilizzando diversi linguaggi di programmazione e framework. Lavoro su gestione di database, sviluppo frontend/backend e pipeline di deployment per soddisfare i requisiti aziendali e dei clienti.",
                        "tags": ["Full-stack", "JavaScript", "Backend", "Frontend", "Database"]
                    },
                    "job2": {
                        "title": "Tirocinante – Sistema di Elaborazione del Parlato",
                        "company": "[AUDIAS](https://audias.ii.uam.es/) presso [Universidad Autónoma De Madrid](https://www.uam.es/uam/inicio)",
                        "year": "Gen 2022 – Mag 2022",
                        "description": "Sviluppo di un sistema di elaborazione vocale basato su deep learning, con particolare attenzione all'applicazione di HMM bayesiani variazionali su x-vectors per il diarization. Esperienza pratica con PyTorch e pipeline di machine learning.",
                        "tags": ["Elaborazione Vocale", "Deep Learning", "PyTorch", "NLP"]
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