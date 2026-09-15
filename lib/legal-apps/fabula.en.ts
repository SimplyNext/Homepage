import type { LegalSection } from "../legal";

/**
 * Englische Übersetzung der Fabula-Rechtstexte (fabula.ts, Stand Juli 2026) –
 * nur zur Information, verbindlich ist die deutsche Fassung. Aufbau und
 * Reihenfolge entsprechen der deutschen Datei 1:1.
 */

export const fabulaDatenschutzEn: LegalSection[] = [
  {
    heading: "1. Controller",
    list: [
      "SimplyNext",
      "Owner: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Germany",
      "E-Mail: info@simplynext.de",
      "Phone: +49 1743389049",
      "VAT ID: DE463824630",
    ],
  },
  {
    heading: "2. What Data We Collect",
    paragraphs: ["Fabula only collects the data necessary to operate the app:"],
    table: {
      head: ["Data category", "Examples", "Purpose"],
      rows: [
        ["Account data", "E-mail address, user ID", "Registration & login"],
        ["App activity", "stories and characters created, language setting", "Operation of features"],
        ["Purchase history", "story credits purchased, transaction ID", "Invoicing & fraud prevention"],
        ["Audio files", "AI-generated audio files", "Playback & offline cache"],
        ["Crash logs", "error messages, app version", "Troubleshooting (only if Sentry is active)"],
      ],
    },
    afterList: ["We do not collect location data, photos or biometric data."],
  },
  {
    heading: "3. Purpose of Processing",
    list: [
      "Provision and improvement of the app's services",
      "Authentication and account management",
      "Processing of in-app purchases and credit management",
      "AI-supported generation of personalised audio stories",
      "Error analysis and stability improvement",
    ],
  },
  {
    heading: "4. Legal Basis (GDPR)",
    list: [
      "Art. 6(1)(b) GDPR – performance of a contract (login, story generation, purchases)",
      "Art. 6(1)(f) GDPR – legitimate interests (crash logging, security)",
      "Art. 6(1)(a) GDPR – consent (optional services, consent gate in the app)",
    ],
  },
  {
    heading: "5. Third-Party Providers & Data Transfer",
  },
  {
    heading: "Supabase (Backend & Database)",
    level: 3,
    paragraphs: [
      "Storage of user data, stories and audio files. All data is transmitted in encrypted form (TLS/HTTPS).",
    ],
    table: {
      head: ["Item", "Value"],
      rows: [
        ["Provider", "Supabase Inc."],
        ["Server location", "EU (Frankfurt)"],
        ["Privacy", "supabase.com/privacy"],
      ],
    },
  },
  {
    heading: "Google (Gemini AI / Play Store)",
    level: 3,
    paragraphs: [
      "AI-supported text and audio generation via the Gemini API; in-app purchase validation via Google Play.",
    ],
    table: {
      head: ["Item", "Value"],
      rows: [
        ["Provider", "Google LLC"],
        ["Privacy", "policies.google.com/privacy"],
      ],
    },
  },
  {
    heading: "Sentry (Crash Reporting, Optional)",
    level: 3,
    paragraphs: [
      "Anonymised crash logs for troubleshooting. Only activated if you have consented in the app settings.",
    ],
    table: {
      head: ["Item", "Value"],
      rows: [
        ["Provider", "Functional Software Inc. (Sentry)"],
        ["Privacy", "sentry.io/privacy"],
      ],
    },
    afterList: ["Data is not passed on to any other third parties or sold."],
  },
  {
    heading: "6. Children (Under 16)",
    paragraphs: [
      "Fabula is aimed, among others, at children aged 6 and over. In doing so, we only process the minimum data necessary (e-mail address of the parent or guardian and account ID). No photos of children are stored; characters are represented exclusively by pre-made avatars.",
      "Parents or guardians can request the deletion of all of their child's data at any time (see section 8).",
    ],
  },
  {
    heading: "7. Storage Period",
    paragraphs: [
      "Data is stored as long as the account is active. After the account is deleted, all personal data is irrevocably deleted within 30 days, unless there is a statutory retention obligation (e.g. invoice data: 10 years pursuant to § 147 of the German Fiscal Code (AO)).",
    ],
  },
  {
    heading: "8. Your Rights",
    paragraphs: ["As a data subject, you have the following rights with respect to us:"],
    list: [
      "Access (Art. 15 GDPR): which data we have stored about you",
      "Rectification (Art. 16 GDPR): correction of inaccurate data",
      "Erasure (Art. 17 GDPR): deletion of your account and all data – directly in the app under Settings → Delete account or by e-mail",
      "Restriction (Art. 18 GDPR): restriction of processing",
      "Data portability (Art. 20 GDPR): export of your data in a machine-readable format",
      "Objection (Art. 21 GDPR): objection to processing based on legitimate interests",
      "Complaint: you have the right to lodge a complaint with a data protection supervisory authority",
    ],
    afterList: ["Please send requests by e-mail to: info@simplynext.de"],
  },
  {
    heading: "9. Data Security",
    paragraphs: [
      "All data transfers are encrypted via HTTPS/TLS. Audio files are accessed exclusively via time-limited, signed URLs. Passwords are not stored in plain text.",
    ],
  },
  {
    heading: "10. Changes to This Privacy Policy",
    paragraphs: [
      "We reserve the right to update this privacy policy in the event of significant changes. Users will be informed via the app or by e-mail. The date of the last change is shown above.",
    ],
  },
];

export const fabulaAgbEn: LegalSection[] = [
  {
    heading: "1. Scope",
    paragraphs: [
      "These terms of use apply to the use of the mobile app Fabula (Android/iOS), offered by:",
    ],
    list: [
      "SimplyNext",
      "Owner: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Germany",
      "E-Mail: info@simplynext.de",
    ],
    afterList: ["By using the app, you agree to these terms."],
  },
  {
    heading: "2. Services",
    paragraphs: [
      "Fabula is an app for the AI-supported generation of personalised audio stories for children and adults. The content is created automatically by AI services from Google (Gemini) on the basis of user input (characters, genre, language).",
      "The app enables:",
    ],
    list: [
      "creation of individual audio stories using AI",
      "management of story characters",
      "playback and offline storage of stories",
      "purchase of story credits as in-app purchases",
    ],
  },
  {
    heading: "3. Requirements for Use",
    list: [
      "An account with a valid e-mail address is required for use.",
      "Use by children under 16 requires the consent of a parent or guardian.",
      "The user is obliged to provide truthful information and to protect their account against unauthorised access.",
    ],
  },
  {
    heading: "4. AI-Generated Content",
    paragraphs: [
      "Fabula uses AI services from Google (Gemini) to generate text and audio. The following applies:",
    ],
    list: [
      "The generated stories and audio files are provided to the user for personal, non-commercial use.",
      "The content produced is generated automatically – we give no guarantee for accuracy of content, linguistic quality or completeness.",
      "Redistribution, publication or commercial use of the generated content is not permitted without express permission.",
      "The user is responsible for the input they use for generation. Input that violates applicable law or the rights of third parties is prohibited.",
    ],
  },
  {
    heading: "5. In-App Purchases & Credits",
    list: [
      "Story credits are consumables and cannot be refunded once a story has been successfully generated.",
      "Credits do not expire and are tied to the user account.",
      "In the event of technical errors during generation (no story produced), credits are not deducted or are refunded on request (e-mail to info@simplynext.de).",
      "Purchases are processed via Google Play or the Apple App Store. The terms of use of the respective store operator also apply.",
      "Minors may not make in-app purchases without the consent of a parent or guardian.",
    ],
  },
  {
    heading: "6. Prohibited Use",
    paragraphs: ["The following is expressly prohibited:"],
    list: [
      "use of the app for unlawful purposes",
      "generation of content that glorifies violence, is discriminatory or defames third parties",
      "automated access to the app or its backend (scraping, bots)",
      "circumvention of security mechanisms or access restrictions",
      "sharing access data with third parties",
    ],
  },
  {
    heading: "7. Availability & Liability",
    list: [
      "We strive for high availability of the app but give no guarantee of uninterrupted operation.",
      "We are not liable for damage caused by AI-generated content.",
      "Liability for loss of data is limited to compensation for the typical recovery effort.",
      "Statutory liability for intent and gross negligence remains unaffected.",
    ],
  },
  {
    heading: "8. Term & Termination",
    list: [
      "The usage agreement applies for an indefinite period and can be terminated at any time by deleting the account.",
      "The account can be deleted directly in the app under Settings → Delete account.",
      "We reserve the right to block or delete accounts without prior notice in the event of serious violations of these terms of use.",
    ],
  },
  {
    heading: "9. Changes to the Terms of Use",
    paragraphs: [
      "We may adapt these terms of use in the event of significant changes to the service. Users will be informed at least 14 days before the changes take effect. Right to object: if no objection is raised to the amended terms within this period, they are deemed accepted.",
    ],
  },
  {
    heading: "10. Applicable Law & Place of Jurisdiction",
    paragraphs: [
      "German law applies, excluding the UN Convention on Contracts for the International Sale of Goods. The place of jurisdiction for disputes with traders is Isny im Allgäu.",
    ],
  },
  {
    heading: "11. Contact",
    paragraphs: ["If you have any questions about these terms of use: info@simplynext.de"],
  },
];
