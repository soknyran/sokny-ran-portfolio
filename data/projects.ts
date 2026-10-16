import type { Project } from "@/types";

/**
 * Projects shown on the homepage and as case studies at /projects/[slug].
 * Content is kept to a high-level, public description of each project.
 */
export const projects: Project[] = [
  {
    slug: "wecms",
    name: "WeCMS",
    subtitle: "Integrated Cash Management System (legacy platform)",
    type: "Enterprise financial platform",
    status: "Production · Active Maintenance",
    role: "Software Engineer / Project Lead",
    featured: true,
    summary:
      "A cash management platform that gives mid-sized and large enterprises in Vietnam one place to manage bank accounts, payments, and cash positions across multiple banks. The production version runs on JexFrame, with PostgreSQL as its application database, and remains in active maintenance.",
    overview:
      "WeCMS is an enterprise Cash Management System for mid-sized and large companies in Vietnam. It brings a company's bank accounts, payments, ERP data, and tax and e-invoice data into one platform for treasury operations, payment approval workflows, and cash monitoring. The legacy version described here is in production use by enterprise customers and runs in separate customer deployment environments. It uses PostgreSQL as the primary application database, with Oracle used as an external enterprise/ERP datasource for SimpleBatch-based data synchronization. WeCMS Legacy remains in active production support and maintenance: I continue to develop requested features, fix defects, troubleshoot production issues, and support urgent Product Owner requests driven by enterprise customer needs. Its modernization is a separate case study.",
    context:
      "Finance teams at larger companies hold accounts at several banks, in several currencies, often across subsidiaries, while key business data lives in their own ERP systems. Without a central system, balances are checked bank by bank, payments are prepared by hand, and reporting depends on spreadsheets.",
    problem:
      "Customers needed one permission-controlled system to see cash positions across banks, prepare and approve payments through defined approval lines, and reconcile banking data with ERP records, reliably and with an audit trail.",
    solution:
      "A JexFrame web application on Java 11, with JSP pages and a TypeScript/jQuery front end calling action-based JSON services, and XML-defined SQL against PostgreSQL. JEX SimpleBatch runs the scheduled work: some flows read required enterprise/ERP data from Oracle and synchronize it into WeCMS PostgreSQL tables, and bank-facing jobs handle real-time interbank transfers, bulk transfer files exchanged over SFTP, and result checking. Shared settings such as API and bank-module configuration come from JexAdmin.",
    responsibilities: [
      "Lead development and maintenance across the JSP/TypeScript front end, JexFrame services, and PostgreSQL.",
      "Translate Product Owner and customer requirements into technical designs.",
      "Implement features across payments, banking inquiry, reporting, and settings.",
      "Maintain SimpleBatch processing, including Oracle-to-PostgreSQL data synchronization and bank transfer and result jobs.",
      "Integrate with banking interfaces, ERP data, and e-invoice services.",
      "Support deployment, maintenance, and troubleshooting across separate customer deployment environments.",
      "Develop requested features, fix defects, and support urgent Product Owner requests driven by enterprise customer needs.",
      "Trace and resolve production issues from screen to service to SQL.",
      "Coordinate with Product, QA, infrastructure, and database engineers across Korea, Vietnam, and Cambodia.",
    ],
    stacks: [
      {
        label: "Backend & batch",
        items: [
          "Java 11",
          "JexFrame 0.3",
          "JEX action-based services",
          "XML-defined SQL",
          "JEX SimpleBatch (scheduled jobs)",
        ],
      },
      {
        label: "Frontend",
        items: ["JSP / JSTL", "TypeScript", "JavaScript", "jQuery / jQuery UI", "jexGrid", "HTML / CSS"],
      },
      {
        label: "Database",
        items: ["PostgreSQL — primary application database", "Oracle — external ERP datasource (via SimpleBatch)"],
      },
      { label: "Runtime & delivery", items: ["JBoss / WildFly", "Eclipse", "SVN", "Jex Studio deployment"] },
      {
        label: "Integration",
        items: [
          "Firm banking / bank integrations",
          "REST / JSON bank APIs",
          "SFTP (JSch)",
          "Oracle → PostgreSQL data sync",
          "ERP integration",
          "Tax & e-invoice",
          "Notifications",
          "Excel & PDF (Apache POI, iText, PDFBox)",
        ],
      },
    ],
    achievements: [
      "Legacy platform in production use by enterprise customers in Vietnam.",
      "Delivered features across payments, banking inquiry, reporting, and settings.",
      "Supports multi-bank, multi-currency, multi-tenant, and multi-language operation.",
      "Kept production stable across multiple deployment environments through structured issue tracing and per-screen documentation.",
    ],
    challenges: [
      {
        title: "Bank-by-bank variation",
        detail:
          "Each bank has its own formats, cut-off times, and processing rules. Payment logic has to respect them without fragmenting the codebase.",
      },
      {
        title: "Enterprise data from another database",
        detail:
          "Customer ERP data lives in Oracle, outside WeCMS. It has to be read, transformed, and kept in sync with PostgreSQL without blocking the application.",
      },
      {
        title: "Multiple deployment environments",
        detail:
          "WeCMS runs in separate customer deployment environments, so releases and fixes are deployed and verified in each one.",
      },
      {
        title: "Production reliability",
        detail:
          "Financial operations leave little room for error. Every fix needs careful tracing and regression checks before release.",
      },
    ],
    decisions: [
      {
        title: "PostgreSQL as the single application database",
        detail:
          "SimpleBatch synchronizes the required ERP data from Oracle into PostgreSQL, so screens and services work against one database instead of querying the ERP directly.",
      },
      {
        title: "Approval workflows as a core concept",
        detail:
          "Payments move through configurable approval lines with action-level permissions rather than ad-hoc checks per screen.",
      },
      {
        title: "Scheduled work in SimpleBatch",
        detail:
          "Data synchronization, transfers, bulk transfer files, and result checks run as scheduled SimpleBatch jobs, isolated from user-facing screens.",
      },
      {
        title: "Trace before changing",
        detail:
          "Every fix starts by tracing the real source and data flow, and the findings are documented against the screen they affect.",
      },
    ],
    lessons: [
      "In financial software, correctness and traceability matter more than delivery speed.",
      "Documenting where behaviour lives, screen by screen, pays off on every later investigation.",
      "Working with Product and QA teams in another country rewards precise written communication.",
    ],
    architecture: {
      caption:
        "Simplified view of three flows: the application on PostgreSQL, ERP data synchronized from Oracle by SimpleBatch, and bank-facing integrations. Internal details are intentionally omitted.",
      layers: [
        { name: "Browser", items: ["JSP pages", "TypeScript / jQuery"] },
        { name: "Application", items: ["JEX action services", "Approval workflow", "Settings from JexAdmin"] },
        { name: "Primary DB", items: ["PostgreSQL", "XML-defined SQL"] },
        { name: "ERP sync", items: ["Oracle / ERP database", "→ JEX SimpleBatch", "→ PostgreSQL"] },
        { name: "Banking", items: ["Firm banking & bank APIs", "Bulk transfer files (SFTP)", "Result checking"] },
      ],
    },
  },
  {
    slug: "wecms-modernization",
    name: "WeCMS Modernization",
    subtitle: "Legacy JexFrame to Spring Boot + Next.js",
    type: "Legacy modernization",
    status: "UAT · Active Development",
    role: "Project Lead / Full-Stack Developer",
    featured: true,
    summary:
      "End-to-end modernization of WeCMS and WeCMS Batch from JexFrame, JSP, and jQuery to a Spring Boot REST API and a Next.js front end, while keeping the data model compatible with the live system. Currently deployed to UAT and under active development.",
    overview:
      "WeCMS Modernization is currently under active development and deployed to UAT; it is not yet in production. I lead the modernization from the legacy JexFrame architecture to Spring Boot and Next.js, using Claude Code and other AI-assisted development tools for analysis, planning, implementation, debugging, testing, refactoring, and documentation. The modernization rebuilds WeCMS on a Java 21 / Spring Boot 3.5 REST API and a Next.js 16 / React 19 front end, and moves the legacy batch jobs into the new backend. The goal is not a redesign: the new system reproduces the behaviour customers rely on today, on a stack that is easier to test, extend, and hire for.",
    context:
      "The legacy WeCMS web and batch applications run on JexFrame, a proprietary Java framework, with server-rendered JSP pages, a TypeScript/jQuery front end, XML-defined SQL on PostgreSQL, JEX SimpleBatch jobs that also synchronize ERP data from Oracle, and file-based deployment. They serve customers well, but limit tooling, automated testing, UI modernization, and onboarding.",
    problem:
      "Rewrite without breaking anything. The new system must match existing business behaviour exactly, and customer data must move from the legacy database with little or no transformation. A schema that looks cleaner but drifts from legacy makes migration risky.",
    solution:
      "A legacy-first refactor. The JexFrame source is treated as the functional specification: each screen and service is traced end to end, covering UI, service, SQL, and tables, before it is rebuilt as a Spring Boot REST endpoint and a Next.js page. Results are then verified against legacy output through parity audits.",
    responsibilities: [
      "Legacy system analysis",
      "Modernization planning",
      "Architecture design",
      "Backend refactoring (Spring Boot)",
      "Frontend modernization (Next.js)",
      "Database migration support",
      "Batch system modernization",
      "REST API design",
      "Testing and refactoring",
      "Deployment support and infrastructure collaboration",
      "AI-assisted development using Claude Code",
    ],
    stacks: [
      {
        label: "Legacy (from)",
        items: [
          "JexFrame 0.3",
          "Java 11",
          "JSP",
          "TypeScript / jQuery",
          "XML-defined SQL",
          "PostgreSQL",
          "JEX SimpleBatch",
          "Oracle integration via SimpleBatch",
          "JBoss / WildFly",
          "SVN / Jex Studio deployment",
        ],
      },
      {
        label: "Modern backend",
        items: [
          "Java 21",
          "Spring Boot 3.5",
          "Spring Web (REST)",
          "Spring Security + JWT",
          "Bean Validation",
          "Spring Data JPA / Hibernate",
          "JdbcTemplate",
          "PostgreSQL",
          "Oracle ERP datasource (optional)",
          "@Scheduled jobs + ShedLock",
          "Spring RestClient",
          "SFTP (JSch)",
          "Apache POI / OpenPDF",
          "Spring Boot Actuator",
          "Gradle · WAR on Tomcat",
        ],
      },
      {
        label: "Modern frontend",
        items: [
          "Next.js 16 (App Router)",
          "React 19",
          "TypeScript (strict)",
          "Tailwind CSS v4",
          "shadcn/ui (Radix)",
          "Axios",
          "React Hook Form + Zod",
          "SheetJS · jsPDF",
        ],
      },
      {
        label: "Quality & delivery",
        items: ["JUnit 5", "Mockito", "MockMvc", "Vitest", "Testing Library", "ESLint", "Git", "GitLab CI/CD"],
      },
    ],
    achievements: [
      "Rebuilt modules across Banking, Payments, Add-on Services, and Settings on the new stack.",
      "Rebuilt batch processing as scheduled jobs inside the Spring Boot application, including transfer dispatch over SFTP, result checking, exchange-rate updates, and ERP data synchronization from Oracle where applicable.",
      "Backed the API with an automated test suite (JUnit 5, Mockito, MockMvc) and the front end with Vitest.",
      "Deployed the modernized application to UAT through GitLab CI pipelines set up with the infrastructure team.",
    ],
    challenges: [
      {
        title: "Undocumented legacy behaviour",
        detail:
          "Much of the business logic lives only in JSP actions and XML-defined SQL. It has to be discovered and written down before it can be rebuilt.",
      },
      {
        title: "Output parity",
        detail:
          "Exports, number formats, and date and time handling must match the legacy system field for field.",
      },
      {
        title: "Coexistence with live data",
        detail:
          "The new system has to work against the same data model as production, so schema changes are tightly controlled.",
      },
      {
        title: "Batch modernization",
        detail:
          "Scheduled transfer dispatch, result checking, and ERP data synchronization had to move from JEX SimpleBatch into the new backend without changing what they produce.",
      },
    ],
    decisions: [
      {
        title: "Legacy schema as source of truth",
        detail:
          "JPA entities map to the existing tables and columns, and Hibernate only validates the schema at startup. Nothing is renamed or normalized, so data migrates without transformation.",
      },
      {
        title: "Manual, reviewed schema changes",
        detail:
          "No migration tool runs DDL at startup. Any schema change ships as a reviewed SQL script executed by a DBA.",
      },
      {
        title: "Legacy-compatible key generation",
        detail:
          "Identifiers come from the same database key-generation routine as the legacy system, keeping key formats identical.",
      },
      {
        title: "Batch inside the API, coordinated by a lock",
        detail:
          "Jobs run as @Scheduled tasks in the Spring Boot application, with ShedLock storing locks in PostgreSQL, so no extra scheduler or infrastructure is needed.",
      },
      {
        title: "Integrations mocked by default",
        detail:
          "SFTP, bank, ERP, and messaging clients are switched by configuration, so development and test environments never reach real external systems.",
      },
      {
        title: "Parity audits per screen",
        detail:
          "Behaviour, exports, and date and time handling are compared with legacy screen by screen before a module is called done.",
      },
    ],
    lessons: [
      "The legacy code is the specification. Read it fully before designing anything.",
      "Migration safety beats a cleaner schema.",
      "AI is most useful with precise context and rules, and its output still has to be verified against the source.",
    ],
    workflow: ["Legacy Analysis", "Planning", "Architecture", "Implementation", "Testing", "Refactoring", "Deployment"],
    architecture: {
      caption: "Simplified target architecture. API and batch run in one Spring Boot application.",
      layers: [
        { name: "Browser", items: ["Next.js App Router", "React 19 / TypeScript", "Tailwind CSS / shadcn/ui"] },
        { name: "API", items: ["Spring Boot REST API", "Spring Security + JWT", "Validation"] },
        { name: "Domain", items: ["Feature services", "JPA / Hibernate", "JdbcTemplate"] },
        { name: "Batch", items: ["@Scheduled jobs", "ShedLock", "Transfer dispatch & result checks"] },
        { name: "Data", items: ["PostgreSQL (legacy-compatible schema)", "Oracle (customer ERP, optional)"] },
        { name: "Integration", items: ["Bank gateway", "Firm banking over SFTP", "E-invoice", "Notifications"] },
      ],
    },
  },
  {
    slug: "wabooks",
    name: "WABOOKS",
    subtitle: "Business & Accounting Platform · WABOOKS / WABOOKS TA",
    type: "Enterprise business platform",
    status: "Production · Previous Responsibility",
    role: "Full-Stack Developer",
    featured: false,
    summary:
      "A business and accounting platform for companies and accounting offices in Cambodia and Vietnam: WABOOKS for companies, and WABOOKS TA for tax accountants who manage client companies. Built on the same JexFrame platform as the legacy WeCMS. In production; I developed and maintained it before transitioning to WeCMS.",
    overview:
      "WABOOKS is a business and accounting platform serving Cambodia and Vietnam, with two sides in one application. WABOOKS is the company-facing product, offered in several editions, covering sales, purchases, e-invoices, financial statements, reports, payroll, and settings. WABOOKS TA (\"WABOOKS for Tax Accountant\") is the accounting-office side: tax accountants manage their client companies, assign staff, invite clients to WABOOKS, communicate with them, and work in a linked client's WABOOKS. Both sides run from one JexFrame codebase, separated by product type, menus, and access rules. WABOOKS is a separate product from WeCMS, but both are built on the same JexFrame-based enterprise platform. WABOOKS and WABOOKS TA are in production. I developed and maintained both before transitioning to primary ownership of WeCMS, and they are no longer my main development focus.",
    context:
      "Companies need day-to-day business and accounting tools, and many of them rely on an external tax accountant who looks after several client companies at once.",
    problem:
      "Serve two audiences, companies and the accounting offices that support them, in two countries, with local requirements, banking data brought in reliably, and a clear boundary between what each type of user can see and do.",
    solution:
      "One JexFrame application with product-type-based menus and access control: JSP pages with a TypeScript/jQuery front end, action-based services with XML-defined SQL on PostgreSQL, an API layer for external and mobile clients, bank-data integration, and scheduled batch tasks. Tax accountants use dedicated TA screens and can move into a linked client's WABOOKS when they need to work with that client's data.",
    responsibilities: [
      "Full-stack development across the WABOOKS (company) and WABOOKS TA (accounting office) sides",
      "Backend service and API development",
      "Frontend development (JSP, TypeScript, jQuery)",
      "Financial and accounting features",
      "Banking integration",
      "Production maintenance and bug investigation",
      "Performance improvement",
      "Customer requirement implementation",
    ],
    stacks: [
      {
        label: "Product sides",
        items: [
          "WABOOKS — company business & accounting",
          "WABOOKS TA — tax accountants & accounting offices",
          "One codebase, separated by product type & access rules",
        ],
      },
      {
        label: "Platform (shared)",
        items: [
          "Java 11",
          "JexFrame 0.3",
          "JSP",
          "TypeScript",
          "JavaScript / jQuery",
          "Action-based JSON services",
          "XML-defined SQL",
          "PostgreSQL",
          "JBoss / WildFly",
        ],
      },
      {
        label: "Integration & batch",
        items: [
          "Open API layer",
          "Bank data gateway",
          "Mobile module",
          "SMS & push notifications",
          "Messaging-app integration (TA, Vietnam)",
          "JEX batch tasks",
          "Configuration from JexAdmin",
        ],
      },
      { label: "Delivery", items: ["SVN", "Jex Studio file-based deployment"] },
    ],
    achievements: [
      "Delivered financial and accounting features for customers in Cambodia and Vietnam.",
      "Integrated banking data into accounting workflows.",
      "Resolved production issues and improved performance of existing features.",
    ],
    challenges: [
      {
        title: "Two audiences, one codebase",
        detail:
          "Company users and tax accountants share one application. Access rules keep accountants on their own screens while still letting them work in a linked client's WABOOKS.",
      },
      {
        title: "Two markets, one product",
        detail: "Features have to fit the accounting practices and requirements of both Cambodia and Vietnam.",
      },
      {
        title: "Changing a live system",
        detail: "Enhancements land in a product customers use daily, so each change is scoped and regression-checked.",
      },
    ],
    decisions: [
      {
        title: "Product types instead of separate applications",
        detail:
          "WABOOKS editions and WABOOKS TA are product and channel types of one platform, so features, fixes, and integrations are shared rather than duplicated.",
      },
      {
        title: "Requirement-driven changes",
        detail: "Features are scoped from customer requirements and verified with the people who requested them.",
      },
      {
        title: "Fix root causes",
        detail: "Production issues are traced to their source rather than patched at the screen where they appear.",
      },
    ],
    lessons: [
      "Accounting features need domain understanding as much as code.",
      "Clear access boundaries matter most when different kinds of users share one system.",
      "Small, well-understood changes keep a live system stable.",
    ],
    architecture: {
      caption: "Simplified view. WABOOKS and WABOOKS TA are two sides of one application. Internal details are intentionally omitted.",
      layers: [
        { name: "Users", items: ["WABOOKS (companies)", "WABOOKS TA (accounting offices)", "Mobile & API clients"] },
        { name: "Application", items: ["JexFrame action services", "Product-type menus & access", "Open API layer"] },
        { name: "Data", items: ["XML-defined SQL", "PostgreSQL"] },
        { name: "Integration", items: ["Bank data gateway", "SMS, push & messaging", "Settings from JexAdmin"] },
        { name: "Batch", items: ["JEX batch tasks"] },
      ],
    },
  },
  {
    slug: "jexadmin",
    name: "JexAdmin",
    subtitle: "Shared Administration & Configuration Platform",
    type: "Administration platform",
    status: "Production · Previous Responsibility",
    role: "Software Engineer",
    featured: false,
    summary:
      "An internal administration and configuration platform for legacy JEX-based applications, used by both WABOOKS and legacy WeCMS. In production; I developed and maintained it before transitioning to WeCMS.",
    overview:
      "JexAdmin is an internal administration and configuration platform used by legacy JEX-based applications, including WABOOKS (with its WABOOKS TA side) and WeCMS. Built on the JEX Admin / Studio console, it holds the settings those applications depend on: API connections, bank and module configuration, country and currency settings, system and operational configuration. The applications read this configuration through an authenticated API, so operators can change it without a release. JexAdmin is in production; I developed and maintained it before transitioning to primary ownership of WeCMS.",
    context:
      "WABOOKS and WeCMS connect to many banks and external services across several countries. That configuration has to live somewhere shared and controlled rather than being hard-coded in each application.",
    problem:
      "API connections, bank modules, and country settings must be changed safely by operators, consistently for every application that uses them, without redeploying those applications, and with a clear view of connection activity.",
    solution:
      "A JexFrame administration platform with configuration screens and data grids backed by XML-defined SQL, plus an authenticated configuration API that WABOOKS and WeCMS call at runtime.",
    responsibilities: [
      "API configuration",
      "Bank and module configuration",
      "Country and module settings",
      "Shared application and system settings",
      "Operational administration",
      "Integration configuration used by WABOOKS and WeCMS",
      "Backend maintenance and production support",
    ],
    stacks: [
      {
        label: "Platform",
        items: [
          "Java",
          "JexFrame (JEX Admin / Studio console)",
          "JSP",
          "JavaScript / jQuery",
          "jQuery DataTables",
          "XML-defined SQL",
          "PostgreSQL",
        ],
      },
      {
        label: "Used by",
        items: ["WABOOKS", "WABOOKS TA", "WeCMS (legacy)", "Authenticated configuration API"],
      },
    ],
    achievements: [
      "Maintained the shared configuration platform behind WABOOKS and legacy WeCMS.",
      "Supported bank-integration setup and production operations.",
    ],
    challenges: [
      {
        title: "Configuration as a production change",
        detail:
          "A wrong setting can affect live bank integrations in more than one application, so administration features need validation and care.",
      },
    ],
    decisions: [
      {
        title: "One place for shared configuration",
        detail:
          "API, bank-module, and country settings live in JexAdmin and are served over an API, so WABOOKS and WeCMS stay consistent and operational changes do not need a release.",
      },
    ],
    lessons: ["Good admin tooling is what keeps integration-heavy systems operable."],
    architecture: {
      caption: "Simplified view. Internal details are intentionally omitted.",
      layers: [
        { name: "Operators", items: ["Admin web UI (JSP / jQuery)"] },
        { name: "Platform", items: ["JEX Admin console", "Configuration services", "Configuration API"] },
        { name: "Data", items: ["XML-defined SQL", "PostgreSQL"] },
        { name: "Used by", items: ["WABOOKS", "WABOOKS TA", "WeCMS (legacy)"] },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
