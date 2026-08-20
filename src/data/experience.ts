export type Project = { title: string; domain: string; description?: string; bullets: string[]; technologies: string[] };
export type Experience = {
  company: string; role: string; period: string; description: string; bullets?: string[];
  technologies: string[]; current?: boolean; compact?: boolean; confidentiality?: string;
  projects?: Project[]; mentoring?: string[]; featured?: Project;
};

export const experience: Experience[] = [
  {
    company: 'DualSOFT', role: 'Senior Software Engineer', period: 'Nov 2025 – Present', current: true,
    description: 'Working on an enterprise iGaming platform covering sportsbook, online casino and betting, including integrations with third-party analytics and other external services. My primary focus is software architecture, system modernization and designing solutions for gradually evolving a large-scale monolithic platform into more modular, scalable and maintainable systems.',
    bullets: [
      'Contribute to architecture and system design, with a focus on scalability, performance, throughput and long-term maintainability.',
      'Drive the decoupling of a large monolithic system by extracting and modernizing logical domains and business capabilities.',
      'Migrate selected business logic from Oracle stored procedures into Java-based services, reducing database-centric coupling and improving maintainability.',
      'Modernize CRUD-oriented domains towards Domain-Driven Design, Event-Driven Architecture and Event Sourcing.',
      'Design and develop high-throughput event-driven services using Kafka, Redis and Cassandra.',
      'Design integrations with third-party platforms and services, including analytics-related systems.',
      'Contribute to performance optimization, scalability improvements, refactoring and architectural evolution.',
      'Participate in architectural decisions and technical direction within a ~10-person engineering team.',
    ],
    technologies: ['Java 25', 'Spring Boot', 'jOOQ', 'Kafka', 'Oracle', 'Cassandra', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'OCI'],
  },
  {
    company: 'HTEC Group', role: 'Senior Software Engineer', period: 'Apr 2022 – Nov 2025',
    description: 'Worked across multiple enterprise software projects spanning media technology, identity verification, telecommunications and healthcare.',
    confidentiality: 'Project-specific details are intentionally generalized due to client confidentiality and ongoing NDA obligations.',
    projects: [
      { title: 'Legacy Platform Modernization', domain: 'Media Technology', description: 'Worked on an enterprise media technology platform for rights and royalty processing.', bullets: ['Contributed to modernization of a legacy monolithic application built around Google Guice.', 'Helped migrate the application towards Spring Boot and Maven.', 'Simplified parts of an architecture that had accumulated significant accidental complexity.', 'Developed new product capabilities, including threaded user comments.', 'Worked with PostgreSQL and an established enterprise data model.'], technologies: ['Java', 'Spring Boot', 'Maven', 'PostgreSQL'] },
      { title: 'Greenfield Identity Platform', domain: 'Biometrics & Identity Assurance', bullets: ['Contributed to designing and building the platform from scratch.', 'Developed microservices using Java and Spring Boot.', 'Worked on service boundaries and distributed system design.', 'Implemented new business capabilities throughout the platform lifecycle.', 'Worked with AWS-based infrastructure.', 'Worked with BPMN and Activity workflow orchestration.', 'Contributed to architectural and technical decisions as the platform evolved.'], technologies: ['Java', 'Spring Boot', 'Microservices', 'AWS', 'BPMN', 'Activity'] },
      { title: 'Domain-Driven Telecommunications Platform', domain: 'Telecommunications', bullets: ['Developed and extended domain capabilities using Domain-Driven Design.', 'Worked with CQRS and Event Sourcing.', 'Contributed to architectural decisions and system evolution.', 'Implemented new business functionality while maintaining domain boundaries.', 'Helped model complex business domains and translate them into software architecture.'], technologies: ['Go', 'DDD', 'CQRS', 'Event Sourcing'] },
      { title: 'Enterprise Legacy Modernization', domain: 'Medical Insurance', description: 'Worked on an enterprise medical insurance platform processing millions of medical invoices and coordinating with payment services.', bullets: ['Analyzed and modernized components of a 20+ year-old enterprise platform.', 'Optimized database queries and data-access patterns for large-volume workloads.', 'Improved performance of critical invoice-processing flows.', 'Modernized selected parts of the application using Spring Boot and REST APIs.', 'Contributed to architectural evolution while maintaining compatibility with existing enterprise systems.', 'Worked on integration with payment-related services.'], technologies: ['Java', 'Spring Boot', 'Maven', 'REST APIs', 'SQL'] },
    ],
    mentoring: ['Co-organized three internship programs for early-career software engineers.', 'Contributed to technical test design and candidate interviews.', 'Mentored interns throughout their projects.', 'Provided architectural and DevOps support.'],
    technologies: [],
  },
  {
    company: 'TransPerfect', role: 'Software Engineer', period: 'Feb 2020 – Apr 2022',
    description: 'Continued working on the Project Director enterprise platform for managing translation-related workflows, taking ownership of increasingly complex backend functionality.',
    bullets: ['Designed and implemented REST APIs and webhook-based integrations.', 'Worked on document encryption and secure document-processing workflows.', 'Investigated and resolved production issues across backend services and integrations.', 'Contributed to evolving an established enterprise platform while maintaining compatibility with existing functionality.', 'Worked on increasingly complex backend features and integrations.'],
    technologies: ['Java', 'Spring', 'REST APIs', 'MySQL'],
  },
  {
    company: 'enjoy.ing', role: 'Software Engineer', period: 'Apr 2019 – Feb 2020',
    description: 'Worked on a financial trading platform built around a microservices architecture.', technologies: [],
    featured: { title: 'Configurable Market Data Reporting', domain: 'Financial Trading', description: 'Developed a backend service for processing market data received through the FIX protocol and generating configurable reports.', bullets: ['Processed market data received through FIX.', 'Designed configurable report generation and delivery workflows.', 'Supported multiple delivery mechanisms including email, FTP and SFTP.', 'Built configuration-driven behavior allowing reporting workflows to change without modifying core processing logic.', 'Worked within a Java/Spring Boot microservices environment.', 'Contributed to systems using Elasticsearch and Microsoft Azure.'], technologies: ['Java', 'Spring Boot', 'Microservices', 'FIX Protocol', 'Elasticsearch', 'Azure'] },
  },
  {
    company: 'Emisia Consulting', role: 'Software Developer', period: 'Mar 2017 – Apr 2019', compact: true,
    description: 'Worked on the Project Director enterprise platform for managing translation-related workflows.',
    bullets: ['Developed and maintained backend features.', 'Implemented database changes and data migrations supporting new product capabilities.', 'Worked on evolving an established enterprise application and its data model.', 'Built experience working with existing codebases and safely introducing new functionality.'],
    technologies: ['Java', 'Spring', 'MySQL', 'Maven'],
  },
  {
    company: 'Asseco South Eastern Europe', role: 'Software Developer', period: 'May 2016 – Oct 2016', compact: true,
    description: 'Worked on enterprise banking software based on the Documentum platform, supporting applications used by banking and public-sector organizations.',
    bullets: ['Built a configurable batch-processing tool for identifying and removing empty documents from Documentum while minimizing the impact on production system performance.'],
    technologies: ['Java', 'Documentum'],
  },
];
