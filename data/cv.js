export const cv = {
  navigation: [
    { label: 'Habilidades', href: '#skills' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Educación', href: '#education' },
    { label: 'Idiomas', href: '#languages' },
    { label: 'IA & Automatización', href: '#ia' },
    { label: 'Referencias', href: '#references' },
    { label: 'Contacto', href: '#contact' },
  ],

  personal: {
    name: 'Edwin Giraldo Soto',
    title: 'Ingeniero de Sistemas',
    specialization: 'Especialista en gestión de Software',
    location: 'Medellín, Colombia',
    phone: '(+57) 3173508606',
    email: 'edwingiraldosoto@gmail.com',
    linkedin: 'https://www.linkedin.com/in/edwingiraldosoto/',
    profileImage: '/profile.jpg',
  },

  skillsHeader: 'Backend Developer | Full Stack | Node.js | .NET | Java | SQL Server | Oracle PL/SQL | React | REST APIs | Microservices | Automatización con IA | Python | Scrum',

  about: 'Ingeniero de Sistemas con Especialización en Gestión de Software y +20 años desarrollando soluciones empresariales para energía, telecomunicaciones, finanzas y sector público. Desarrollo full-stack, arquitectura de bases de datos (SQL Server, Oracle), integración de sistemas y soporte técnico N2/N3. Actualmente aplicando IA generativa y automatización inteligente con n8n y LLMs para modernizar procesos empresariales, con entrega bajo metodologías ágiles (Scrum, SDLC).',

  sectors: [
   { name: 'Retail & Distribución', companies: 'CARMEL/PACIFIKA (Linea Directa) , Auteco, Dismerca, Distribuidores Yamaha, Productos alimenticios la Fresita ' },
    { name: 'Energía', companies: 'EPM, XM/Grupo ISA' },
    { name: 'Telecomunicaciones', companies: 'Intersat,Tigo UNE' },
    { name: 'Finanzas', companies: 'Bancolombia, Alianza Valores, Casa de Bolsa' },
    { name: 'Sector Público', companies: 'INDER' },    
    { name: 'IT & Software', companies: 'Softland, Alcuadrado, SPI , Sysman' },
  ],

  availability: ['Remoto', 'Híbrido', 'Presencial'],

  experience: [
    {
      title: 'Desarrollador Freelance',
      company: 'Proyectos Personales con IA',
      period: 'Ene 2026 - Presente',
      description: 'Automatización de flujos con n8n, integración de APIs REST y exploración de soluciones con IA.',
      icon: 'Zap',
      bgColor: 'bg-orange-500',
    },
    {
      title: 'Desarrollador Full Stack',
      company: 'Alcaldía de Medellín - INDER',
      period: 'Abr 2025 - Dic 2025',
      description: 'Estabilicé portal institucional Simón con 50,000+ usuarios, reduciendo incidencias críticas en 70%.',
      icon: 'Code',
      bgColor: 'bg-blue-500',
    },
    {
      title: 'Desarrollador de Software',
      company: 'Sysman (Convenio Global Hitss) - Proyecto Fénix EPM',
      period: 'Mar 2024 - Feb 2025',
      description: 'Desarrollo de software para el sector energético con Oracle PL/SQL y .NET Core. en la parte de procesos operativos de EPM',
      icon: 'Briefcase',
      bgColor: 'bg-emerald-500',
    },
    {
      title: 'Gerente de TI',
      company: 'SPI Soluciones Puntuales en Informática',
      period: 'Oct 2023 - Mar 2024',
      description: 'Lideré equipo de 10 personas, mejorando tiempos de respuesta 80%. en proceso criticos de ayencion de soporte, participe en proyectos de desarrollo de Software',
      icon: 'Users',
      bgColor: 'bg-purple-500',
    },
    {
      title: 'Analista de Desarrollo',
      company: 'Alcuadrado S.A.S',
      period: 'Ago 2023 - Oct 2023',
      description: 'Trabaje en desarrollo de Software en el sector bursátil, desarrollando Consultas T-SQL complejas para sector bursátil (Bancolombia, Alianza Valores, Casa de Bolsa), soluciones analíticas para procesos financieros.',
      icon: 'TrendingUp',
      bgColor: 'bg-yellow-500',
    },
      
    {
      title: 'Ingeniero Senior de Infraestructura',
      company: 'Indra',
      period: 'Jun 2018 - Jul 2023',
      description: 'Participe en el desarrollo del Plan Nacional de Marcación Tigo UNE: desarrollé soluciones Java y PL/SQL para telecomunicaciones. Gestioné procesos críticos de facturación y diseñé migraciones ETL.',
      icon: 'Briefcase',
      bgColor: 'bg-cyan-500',
    },
    {
      title: 'Ingeniero de Desarrollo Medium',
      company: 'Axede S.A.',
      period: 'Jun 2009 - May 2018',
      description: 'Soporte N2 XM (Grupo ISA): desarrollé aplicaciones críticas de despacho energético. Tigo UNE: portal de gestión de desempeño y sistemas de facturación. CARMEL/PACIFIKA: sistemas de ventas y despacho.',
      icon: 'Code',
      bgColor: 'bg-indigo-500',
    },
	{
      title: 'Analista Desarrollador N3',
      company: 'MVM Ingeniería de Software',
      period: 'Feb 2009 - May 2009',
      description: 'Soporte técnico avanzado N3 para XM: resolví incidentes complejos en aplicativos comerciales de energía, desarrollando mejoras y optimizando consultas para asegurar continuidad operativa',
      icon: 'ShieldCheck',
	  bgColor: 'bg-amber-600',
    },
    {
      title: 'Ingeniero de Desarrollo & Soporte',
      company: 'Softland',
      period: 'Dic 2003 - Feb 2009',
      description: 'Administración de infraestructura con Windows Server y MS Exchange. DBA SQL Server 2005 para 10 bases de datos productivas. Desarrollo de soluciones a la medida con VB6, VB.NET y SQL Server. para la solucion corporativa ERP',
      icon: 'Briefcase',
      bgColor: 'bg-rose-500',
    },
    {
      title: 'Ingeniero de Sistemas',
      company: 'Intersat LTDA',
      period: 'Abr 2003 - Dic 2003',
      description: 'Implementación de red LAN (Windows NT Server) con acceso Internet y proxy. Soporte y mantenimiento preventivo/correctivo de servidores.',
      icon: 'Users',
      bgColor: 'bg-teal-500',
    },
  ],

  skills: {
    'Lenguajes': {
      items: ['C#', '.NET Core', 'Java', 'JavaScript', 'Node.js', 'PL/SQL', 'T-SQL', 'Python', 'VB6', 'VB.NET'],
      color: 'blue'
    },
    'Backend': {
      items: ['Node.js (Express)', '.NET Core', 'ASP.NET', 'APIs REST', 'Web Services', 'SOAP'],
      color: 'blue'
    },
    'Frontend': {
      items: ['React (Hooks, Context API)', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design'],
      color: 'cyan'
    },
    'Bases de Datos': {
      items: ['SQL Server (SSMS, T-SQL, índices, procedimientos almacenados)', 'Oracle 19c (PL/SQL)',  'Backup & Recovery','Jobs'],
      color: 'cyan'
    },
    'Integración y Datos': {
      items: ['REST API', 'JSON', 'XML', 'Web Services', 'ETL'],
      color: 'purple'
    },
    'Automatización-IA': {
      items: ['n8n (webhooks, workflows, orquestación)', 'Google Sheets Automation', 'Claude API', 'Gemini API'],
      color: 'purple'
    },
    'Reportes': {
      items: ['SQL Server Reporting Services (SSRS)', 'Reportes analíticos'],
      color: 'amber'
    },
    'Infraestructura': {
       items: ['Windows Server', 'MS Exchange', 'Administración de servidores', 'Redes', 'ISA Server/Proxy', 'Docker', 'Redis'],
      color: 'emerald'
    },
    'Metodologías': {
      items: ['Kanban', 'Scrum', 'Agile', 'SDLC', 'Desarrollo full-cycle', 'Gestión de proyectos de software'],
      color: 'orange'
    },
    'Dev/Procesos': {
      items: ['Git', 'GitHub', 'CI/CD', 'Control de versiones', 'Despliegue continuo', 'SonarQube', 'Jenkins'],
      color: 'green'
    },
  },

  degrees: [
    {
      title: 'Especialización en Gestión de Software',
      institution: 'Universidad Católica de Oriente',
      period: '2014',
      description: 'Especialización avanzada en gestión de proyectos y desarrollo de software empresarial.',
      icon: 'GraduationCap',
      bgColor: 'bg-blue-500',
    },
    {
      title: 'Ingeniería de Sistemas',
      institution: 'Institución Universitaria de Envigado',
      period: '2002',
      description: 'Formación profesional en sistemas computacionales y software engineering.',
      icon: 'BookOpen',
      bgColor: 'bg-indigo-500',
    },
  ],

  certifications: [
    {
      title: 'Scrum Foundation Professional Certificate',
      issuer: 'CertiProf',
      date: 'Agosto 2020',
      year: 2020,
      category: 'Agile & Project Management',
    },
    {
      title: 'Scrum Developer',
      issuer: 'Scrum Agile Institute',
      date: 'Enero 2016',
      year: 2016,
      category: 'Agile & Development',
    },
  ],

  courses: [
    {
      title: 'Inteligencia Artificial',
      issuer: 'Beca Ser Andi - Universidad EAFIT',
      date: 'Marzo 2026',
      year: 2026,
      category: 'IA & Automatización',
    },
    {
      title: 'Gen AI Fundamentos',
      issuer: 'AWS Entrena Latam',
      date: 'Marzo 2026',
      year: 2026,
      category: 'IA & Cloud',
    },
    {
      title: 'Como usar la IA Prompts',
      issuer: 'AWS Entrena Latam',
      date: 'Febrero 2026',
      year: 2026,
      category: 'IA & Prompts',
    },
    {
      title: 'Automatizaciones con IA',
      issuer: 'Claseflix',
      date: 'Febrero 2026',
      year: 2026,
      category: 'IA & Automatización',
    },
    {
      title: 'Aws Cloud Practitiones Essentials',
      issuer: 'AWS',
      date: 'Enero 2026',
      year: 2026,
      category: 'Cloud Computing',
    },
    {
      title: 'Acelerador de Carrera con Power BI',
      issuer: 'Zakidata',
      date: 'Enero 2025',
      year: 2025,
      category: 'Business Analytics',
    },
    {
      title: 'Diplomado en Programación en Java',
      issuer: 'Politecnico de Colombia',
      date: 'Enero 2024',
      year: 2024,
      category: 'Programming',
    },
    {
      title: 'Lenguaje de programación Python',
      issuer: 'MinTIC - Universidad Distrital',
      date: 'Mayo 2024',
      year: 2024,
      category: 'Programming',
    },
    {
      title: 'Fundamentos en Gestion de proyectos',
      issuer: 'Soy Líder',
      date: 'Agosto 2023',
      year: 2023,
      category: 'Project Management',
    },
    {
      title: 'Curso HTML5 desde Cero',
      issuer: 'Udemy',
      date: 'Julio 2023',
      year: 2023,
      category: 'Web Development',
    },
    {
      title: 'Java a Profundidad',
      issuer: 'Udemy',
      date: 'Julio 2023',
      year: 2023,
      category: 'Programming',
    },
    {
      title: 'Principios SOLID y Clean Code',
      issuer: 'Udemy',
      date: 'Julio 2023',
      year: 2023,
      category: 'Software Architecture',
    },
    {
      title: 'Optimizacion de Consultas con Sql Server',
      issuer: 'Udemy',
      date: 'Junio 2023',
      year: 2023,
      category: 'Databases',
    },
    {
      title: 'Trabajo en Equipo',
      issuer: 'Udemy',
      date: 'Junio 2023',
      year: 2023,
      category: 'Soft Skills',
    },
    {
      title: 'Desarrollo de aplicaciones en windows c# .NET',
      issuer: 'Universidad de Medellin',
      date: 'Noviembre 2007',
      year: 2007,
      category: 'Programming',
    },
    {
      title: 'Mantenimiento de una base de datos Microsoft SQL server',
      issuer: 'Universidad EAFIT',
      date: 'Noviembre 2007',
      year: 2007,
      category: 'Databases',
    },
    {
      title: 'Desarrollo de aplicaciones para dispositivos moviles android',
      issuer: 'Universidad de Medellin',
      date: 'Marzo 2016',
      year: 2016,
      category: 'Mobile Development',
    },
    {
      title: 'Introduction to Visual basic .net Programing',
      issuer: 'Microsoft',
      date: 'Septiembre 2004',
      year: 2004,
      category: 'Programming',
    },
    {
      title: 'English Course (Niveles 6) 354 Horas',
      issuer: 'Institución Universitaria de Envigado',
      date: 'Marzo 2002',
      year: 2002,
      category: 'Languages',
    },
  ],

  languages: [
    { name: 'Español', level: 'Nativo', proficiency: 100 },
    { name: 'Inglés', level: 'Intermedio - En proceso de mejora activa', proficiency: 30 },
  ],

  aiSection: {
    title: 'IA & Automatización',
    description: 'Actualmente en un viaje intenso de aprendizaje y exploración de IA Generativa y automatización inteligente. Integrando modelos de lenguaje avanzados como Claude con arquitecturas de automatización empresarial para crear soluciones innovadoras.',
    studying: '📚 Estudiando activamente: Claude API, Prompt Engineering, Automatización con IA, Azure AI Foundry, n8n, AWS Rekognition',
    programs: [
      {
        emoji: '🎓',
        text: 'Becario',
        highlight: 'Programa Ser Andi',
        detail: 'con Universidad EAFIT',
      },
      {
        emoji: '🏆',
        text: 'Participante',
        highlight: 'Reto de Innovación Grupo Argos Fase 3',
        detail: '',
      },
    ],
  },

  ai: [
    {
      icon: 'Brain',
      title: 'IA Generativa',
      skills: ['Claude API', 'Gemini Vision', 'Prompt Engineering', 'n8n + LLMs', 'RAG'],
      description: 'Integración de LLMs en pipelines reales: análisis de imágenes con visión artificial, automatización de flujos con n8n y desarrollo de soluciones con Claude y Gemini.'
    },
    {
  icon: 'Workflow',
  title: 'Automatización con IA',
  skills: ['n8n Workflows', 'Google Sheets Integration', 'Webhooks', 'Socrata API'],
  description: 'Construcción de flujos automatizados end-to-end: pipelines de datos desde APIs públicas, deduplicación por NIT, geocodificación y salida a Google Sheets.',
},
  ],

  references: [
    {
      name: 'Giovanny Velez Bolivar',
      company: 'Grupo Bios',
      role: 'Analista Bases de Datos',
      phone: '3174783429',
    },
    {
      name: 'Julieth Maritza Delgado',
      company: 'INDER',
      role: 'Coordinador de Desarrollo',
      phone: '3136469060',
    },
  ],

  contact: {
    heading: 'Vamos a Trabajar Juntos',
    description: 'Disponible para proyectos remotos, híbridos o presenciales. Contacta para discutir cómo puedo ayudarte a llevar tus ideas al siguiente nivel con soluciones inteligentes y automatización.',
  },
};
