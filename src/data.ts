export const contact = {
  email: "dnodadoshopify@gmail.com",
  linkedin: "https://www.linkedin.com/in/diego-nodado-2a4786326",
}

export const strip = [
  { title: "Executive Support", note: "Inbox, calendar, travel, docs" },
  { title: "AI & Automation", note: "n8n, AI agents, webhooks, APIs" },
  { title: "CRM Systems", note: "HubSpot, Salesforce, GoHighLevel" },
  { title: "Aviation Background", note: "Safety compliance & audits" },
]

export const disciplines = [
  {
    id: "exec",
    label: "Executive Support",
    summary:
      "Calendar and multi-timezone scheduling, inbox management and triage, travel planning, meeting prep and minutes. I keep the day organized so you can focus on decisions, not logistics.",
    skills: [
      "Multi-timezone calendar management and meeting prep",
      "Inbox triage, filtering, and zero-inbox systems",
      "Travel planning and itinerary coordination",
      "Expense tracking and reporting",
      "Document prep, proofreading, and light bookkeeping",
      "Meeting notes, minutes, and follow-up tracking",
      "Vendor and contractor coordination",
      "Confidentiality and discretion with sensitive data",
    ],
  },
  {
    id: "auto",
    label: "AI & Workflow Automation",
    summary:
      "n8n workflow design, webhook triggers, API integrations, and AI agent integration for chatbots and lead routing. I build form-to-CRM and appointment-booking automations that cut down manual work.",
    skills: [
      "Workflow mapping and SOP documentation",
      "REST API and webhook integration, including OAuth",
      "Prompt engineering and multi-agent orchestration",
      "Data mapping and transformation across JSON and CSV",
      "Custom logic scripting in JavaScript and Python",
      "Spreadsheet and database logic: lookups, filters, joins",
      "Error handling, retries, and monitoring and alerting design",
      "Git version control for workflow and config backups",
      "Testing and QA before anything reaches production",
      "Light UX for internal tools, forms, and dashboards",
    ],
  },
  {
    id: "crm",
    label: "CRM & Pipeline",
    summary:
      "HubSpot, Salesforce, Zoho, GoHighLevel, Pipedrive, and Brivity (certified): data entry, deduplication, lead segmentation, and pipeline and deal tracking.",
    skills: [
      "Pipeline and deal tracking",
      "Lead segmentation and routing rules",
      "Duplicate checks and data cleanup",
      "Form-to-CRM and appointment-booking automations",
    ],
  },
]

export type Shot = { src: string; alt: string; caption: string }
export type Project = {
  id: string
  name: string
  tagline: string
  intro: string
  body: string
  demo?: { href: string; note: string }
  shots: Shot[]
  problems: { title: string; text: string }[]
  stack: string[]
  built: { title: string; text: string }[]
}

export const projects: Project[] = [
  {
    id: "trusvana",
    name: "Trusvana",
    tagline: "Real estate CRM",
    intro: "A real estate CRM I built",
    body:
      "A working CRM for real estate teams, designed and coded from scratch. Screenshots use placeholder data. People inquire about buying, renting or selling through a public form, and agents work each lead through a pipeline from New to Closed. It handles lead routing (first to claim or round robin), follow-up dates, tasks assigned to teammates, a closing checklist for every deal, saved filters, a timeline on each lead, reports and a calendar. It also exposes a read-only API that n8n workflows use for speed-to-lead alerts and a daily digest.",
    shots: [
      { src: "/img/trusvana-leads.png", alt: "Trusvana leads board with the pipeline stages New, Contacted, Viewing, Offer and Closed, plus filters and Export CSV", caption: "Leads pipeline" },
      { src: "/img/trusvana-today.png", alt: "Trusvana Today page", caption: "Today: what needs action" },
      { src: "/img/trusvana-transactions.png", alt: "Trusvana transactions list", caption: "Transactions: closing checklists" },
      { src: "/img/trusvana-reports.png", alt: "Trusvana reports page", caption: "Reports: funnel and sources" },
      { src: "/img/trusvana-landing.png", alt: "Trusvana public inquiry page", caption: "Public inquiry form" },
    ],
    problems: [
      { title: "Customer information gathering", text: "Instead of typing customer details into an Excel sheet by hand, people fill in a public inquiry form: name, contact details, buy, rent or sell, budget, area and the property they like. It goes straight into the CRM as a new lead and is routed to an agent, with a spam check built in." },
      { title: "Duplicate leads", text: "When a new lead has the same email or phone as an existing one, both are tagged \"check duplicate\" and a note is added to their timelines, so a person can review them instead of two agents chasing the same client. Nothing is deleted automatically." },
      { title: "Exporting leads", text: "An Export CSV button downloads leads for a date range, a pipeline stage, a teammate or follow-ups due. The file opens cleanly in Excel, and cells that could run as spreadsheet formulas are neutralized." },
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Python", "Flask", "SQLite", "GitHub Actions", "PythonAnywhere", "n8n"],
    built: [
      { title: "Front end", text: "React and TypeScript, built with Vite. Styled with Tailwind CSS and shadcn/ui components, routed with React Router, set in the Geist typeface." },
      { title: "Back end", text: "Python and Flask serving a JSON API. Password logins with hashed passwords, CSRF protection, login lockout, a spam check on the public form and strict security headers." },
      { title: "Database", text: "SQLite, queried with plain parameterized SQL and no ORM. Tables cover leads, properties, tasks, transactions, tags, saved views and a timeline of every change." },
      { title: "Hosting and deploys", text: "Runs on PythonAnywhere. A push to GitHub starts a GitHub Actions build and smoke test, then uploads the app and reloads the site automatically." },
      { title: "Automation", text: "Token-protected read-only endpoints feed importable n8n workflows: a speed-to-lead alert for new inquiries and a daily digest of follow-ups due." },
    ],
  },
  {
    id: "automation-hub",
    name: "Automation Hub",
    tagline: "Automations that fail loudly",
    intro: "Automations that fail loudly",
    body:
      "A run board for webhook automations. Runs on my machine for now, and the screenshots show seeded demo data. Most automations only get tested for the day everything works. This one is built for the day it doesn't. Apps and n8n flows send it signed webhooks, it queues each one, retries the ones that fail, and gives up cleanly with a plain-language reason when retries run out. Every run keeps its payload, every try and a history of who did what, so a failure never disappears.",
    shots: [
      { src: "/img/hub-runs-board.png", alt: "Automation Hub runs board with 19 demo runs: 12 done, 3 retrying and 4 that gave up", caption: "Runs board" },
      { src: "/img/hub-needs-attention.png", alt: "Automation Hub needs attention view", caption: "Needs attention: only the problems" },
      { src: "/img/hub-runs-board-mobile.png", alt: "Automation Hub runs board on a phone", caption: "Works on a phone" },
    ],
    problems: [
      { title: "Silent failures", text: "A failed run lands in a Needs attention view with the exact error, so a lost order or missed lead gets noticed the same day. Alerts for runs that give up are built and tested, and not connected to a live Telegram bot yet." },
      { title: "Duplicates and bad requests", text: "Every event carries a unique key, so the same event never runs twice. Requests are signed with a shared secret and expire after 5 minutes, so an old request can't be replayed." },
      { title: "Temporary problems", text: "Retries back off with a bit of randomness, up to a limit set per source. After the last try the run is marked Gave up, and an admin can retry it with one click." },
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Vite", "Docker", "nginx", "n8n"],
    built: [
      { title: "Back end", text: "Python and FastAPI take in the webhooks. A separate worker process runs the jobs, so slow work never blocks incoming requests." },
      { title: "Database and queue", text: "PostgreSQL 16 stores everything and is also the job queue. Workers claim jobs with FOR UPDATE SKIP LOCKED, so two workers never take the same job. No Redis needed." },
      { title: "Dashboard", text: "React and TypeScript, served by nginx in Docker. Login with admin and viewer roles, lockout after repeated failed logins, and times shown in Philippine time." },
      { title: "Safety and testing", text: "The app connects to the database with a limited role that can't alter or rewrite the audit log, and the log blocks edits and deletes at the database level. The dashboard has a strict content security policy, and 374 automated API tests run against a real Postgres at 97% coverage, plus tests for the dashboard." },
    ],
  },
  {
    id: "veliora-stock",
    name: "Veliora Stock",
    tagline: "Inventory for a spirits distributor",
    intro: "Inventory for a spirits distributor",
    body:
      "Inventory and order management built for a whiskey and spirits distributor. The brands and retail prices are real, and the costs, B2B prices and customers are made up. Stock is never typed in by hand. Every bottle in or out is a row in a ledger that can't be edited, and the database itself refuses to sell a bottle that isn't there. Orders move from draft to confirmed to fulfilled, profit is worked out per order, and any order prints as an invoice.",
    demo: { href: "https://veliora-stock.onrender.com/", note: "Free hosting, so the first load can take about 20 seconds." },
    shots: [
      { src: "/img/veliora-dashboard.png", alt: "Veliora Stock dashboard showing stock value, low stock count, orders to fulfill and recent orders", caption: "Dashboard" },
      { src: "/img/veliora-orders.png", alt: "Veliora Stock orders list", caption: "Orders: draft to fulfilled" },
      { src: "/img/veliora-order-detail.png", alt: "Veliora Stock order detail with profit", caption: "Order with profit" },
    ],
    problems: [
      { title: "Counts that drift", text: "Stock on hand is calculated from the ledger by the database, not typed in. A mistake is fixed with a new entry, so there is always a trail of what changed and why." },
      { title: "Overselling", text: "Negative stock is impossible, even from a raw SQL insert. When two orders race for the last bottle, exactly one wins. This is tested with real concurrent requests." },
      { title: "Not knowing the margin", text: "Profit per order uses the average cost at the moment the bottles shipped. Retail and B2B customers get their own prices, and reports cover each month and each product." },
    ],
    stack: ["PostgreSQL", "Python", "Flask", "React", "TypeScript", "Vite", "Tailwind CSS", "Docker", "n8n"],
    built: [
      { title: "Front end", text: "React and TypeScript with Vite and Tailwind. A root error boundary keeps one bad response from blanking the whole app." },
      { title: "Back end", text: "Python and Flask serving a JSON API. Admin and staff roles, a read-only demo login, CSRF protection and lockout after 5 bad passwords." },
      { title: "Database", text: "PostgreSQL 16 with plain SQL and no ORM. Triggers keep stock and average cost correct, and a second trigger blocks edits to the ledger. 69 tests run against a real Postgres." },
      { title: "Automation and exports", text: "A token-protected low-stock feed plugs into n8n for reorder messages. Products, orders, stock movements and sales reports export to CSV, with cells neutralized so a spreadsheet never runs one as a formula." },
    ],
  },
]

export const n8nWork = [
  { title: "Facebook Chatbot with AI Agent", text: "Webhook handles GET verification and POST messages; an AI Agent (Groq, with memory and tool access) pulls a knowledge base doc and replies via the Facebook Graph API." },
  { title: "Lead Router & Notifier", text: "Reads leads from Google Sheets, branches them through conditional checks, sends Gmail notifications, and updates row status once processed." },
  { title: "Lead Enrichment & CRM Sync", text: "Webhook captures new form submissions, enriches contact data via a third-party API, dedupes, and pushes clean records into HubSpot or Airtable." },
  { title: "Meeting Notes & Action Item Extractor", text: "An AI Agent summarizes an uploaded meeting transcript, extracts action items into a project management tool, and emails a summary to attendees." },
  { title: "Job Application Tracker & Resume Checker", text: "Parses incoming resumes on submission, scores candidates against role criteria, updates a tracking sheet, and auto-sends acknowledgment emails." },
  { title: "Invoice Processing Automation", text: "Extracts key data from incoming invoices via OCR and AI parsing, validates against budget, and routes for Slack or email approval before logging to accounting." },
]

export const recentWork = [
  { title: "Web Research & Scraping Automation", text: "Built a Firecrawl-powered scraping system for pulling clean content, screenshots, and structured data off any site, used for market research, competitor analysis, and content sourcing." },
  { title: "Trigger.dev Automation Builder", text: "Design and deploy scheduled and event-driven TypeScript automations on Trigger.dev, connecting APIs to ClickUp, email, and Slack for hands-off task execution." },
  { title: "Newsletter Automation (WAT Framework)", text: "Built an AI-agent-orchestrated newsletter pipeline that separates reasoning from execution: deterministic Python tools handle sends and formatting while the agent handles content decisions, keeping the system reliable at scale." },
  { title: "Personal AI Skills Library", text: "Authored and maintain a version-controlled library of reusable AI agent skills and SOPs, published globally so any project can call on the same tested workflows." },
]

export const proofShots: Shot[] = [
  { src: "/img/trigger-dev-tasks-list.png", alt: "Trigger.dev dashboard showing the dental-leads automation tasks", caption: "Trigger.dev tasks" },
  { src: "/img/trigger-dev-run-output.png", alt: "Completed automation run: 171 dentists scanned, 85 no-website leads found, 20 tasks created", caption: "A finished run: 171 scanned, 85 leads, 20 tasks" },
  { src: "/img/clickup-dental-leads-list.png", alt: "Auto-generated ClickUp task list from the lead-gen run", caption: "The ClickUp list it created" },
]

export const stacks = [
  { title: "Business web apps", text: "Dashboards and internal tools that people use every day: logins, roles, forms, reports and exports.", tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Python", "Flask", "PostgreSQL"], used: "Used in Veliora Stock" },
  { title: "Reliable automation backends", text: "Services that take in webhooks, queue the work, retry failures and report what went wrong.", tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "nginx"], used: "Used in Automation Hub" },
  { title: "Scheduled and scraping automation", text: "Hands-off jobs that pull data from the web, create tasks and send updates on a schedule.", tags: ["TypeScript", "Trigger.dev", "Firecrawl", "ClickUp"], used: "Used in the lead-gen and research automations" },
]

export const toolGroups = [
  { group: "Executive operations", tools: ["Google Workspace", "Microsoft 365", "Calendly"] },
  { group: "Automation platforms", tools: ["n8n", "Zapier", "Make"] },
  { group: "AI & LLM engineering", tools: ["Claude", "OpenAI Assistants", "LangChain", "Pinecone"] },
  { group: "Data & dev tools", tools: ["Firecrawl", "Postman", "BigQuery"] },
  { group: "CRM & sales", tools: ["HubSpot", "Salesforce", "GoHighLevel", "Brivity (Certified)"] },
  { group: "Comms & meetings", tools: ["Slack", "Zoom", "Microsoft Teams"] },
  { group: "Dev & infrastructure", tools: ["GitHub", "Trigger.dev"] },
  { group: "Project management & docs", tools: ["Notion", "ClickUp", "DocuSign"] },
]

export const associated = [
  { name: "PriMed", note: "Online pharmacy for medical and aesthetic clinics", src: "/img/assoc-primed-pharmacy.jpg" },
  { name: "Mill Point Medical", note: "GP clinic website", src: "/img/assoc-mill-point-medical.jpg" },
  { name: "RaceChip", note: "Chip tuning e-commerce and companion app", src: "/img/assoc-racechip.jpg" },
  { name: "humNET", note: "Shared presence app", src: "/img/assoc-humnet.jpg" },
  { name: "Kinoora", note: "Indie cinema streaming platform", src: "/img/assoc-kinoora.jpg" },
  { name: "MentalFit", note: "Mental wellness app", src: "/img/assoc-mentalfit.jpg" },
  { name: "supplemented.co.uk", note: "UK supplement store on Shopify", src: "/img/assoc-supplemented.jpg" },
]
