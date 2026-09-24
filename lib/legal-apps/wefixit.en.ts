import type { LegalSection } from "../legal";

/**
 * Englische Fassung der WeFixIt-Rechtstexte – übernommen aus dem englischen
 * Teil von wefixit/legal-pages/{privacy,terms}.md (Stand: September 2026).
 * Nur zur Information, verbindlich bleibt die deutsche Fassung.
 */

export const wefixitDatenschutzEn: LegalSection[] = [
  {
    heading: "1. Data Controller",
    paragraphs: [
      "SimplyNext",
      "Owner: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Germany",
      "Phone: +49 174 3389049",
      "Email: info@simplynext.de",
      "Due to the size of the business, a data protection officer is not legally required and has not been appointed. The controller named above is directly responsible for all data protection inquiries.",
    ],
  },
  {
    heading: "2. Your Rights at a Glance",
    paragraphs: [
      "Under the General Data Protection Regulation (GDPR) you have the following rights regarding your personal data:",
    ],
    list: [
      "Right of access (Art. 15 GDPR)",
      "Right to rectification (Art. 16 GDPR)",
      "Right to erasure (Art. 17 GDPR)",
      "Right to restriction of processing (Art. 18 GDPR)",
      "Right to data portability (Art. 20 GDPR)",
      "Right to object to processing (Art. 21 GDPR)",
      "Right to withdraw consent (Art. 7(3) GDPR) with future effect",
      "Right to lodge a complaint with a supervisory authority (Art. 77 GDPR) — the competent authority is the State Commissioner for Data Protection and Freedom of Information Baden-Württemberg",
    ],
    afterList: [
      "To exercise these rights, simply email info@simplynext.de. For account deletion, a direct in-app option is also available (see Section 18).",
    ],
  },
  {
    heading: "3. General Information on Data Processing",
    paragraphs: [
      "We only process personal data of our users to the extent necessary to provide a functioning app and our content and services. The legal basis is generally Art. 6(1)(b) GDPR (performance of a contract or pre-contractual measures); for optional AI features, additionally Art. 6(1)(a) GDPR (consent), which you grant in a separate consent dialog before first using an AI feature and may withdraw at any time with future effect (see Section 7).",
    ],
  },
  {
    heading: "4. Registration and Account",
    paragraphs: [
      "Using the app requires creating an account. We collect:",
    ],
    list: [
      "Email address",
      "Password (stored only in encrypted/hashed form, never in plain text)",
    ],
    afterList: [
      "Authentication is handled via our backend provider Supabase (see Section 14). You may optionally add a display name and profile picture. We send confirmation emails, password reset emails and other account-related system emails via the email delivery service Resend (Resend, Inc., USA) as a data processor; this involves processing your email address and the content of the respective email.",
    ],
  },
  {
    heading: "5. Vehicle, Cost, and Maintenance Data You Enter",
    paragraphs: [
      "The app's core functionality involves the voluntary entry of the following data by you:",
    ],
    list: [
      "Vehicle data: manufacturer key number (HSN), type key number (TSN), vehicle identification number (VIN), mileage",
      "Diagnostic data: scanned OBD2 error codes and their history",
      "Cost data: maintenance and repair costs you record, including category",
      "Maintenance reminders: appointments you create (e.g., next oil change)",
      "Feedback data: voluntary feedback on repair guides or error code analyses",
    ],
    afterList: [
      "This data is visible only to you (technically enforced via row-level security in our database) and is never shared with other users or displayed publicly.",
    ],
  },
  {
    heading: "6. Photos and File Uploads",
    paragraphs: [
      "You may optionally upload vehicle photos and a profile picture and attach a photo in Ask Toni. You select vehicle and profile pictures from your photo gallery. In Ask Toni you can also take a photo directly with the camera; the camera only opens when you actively choose \"Take photo\", and only with the camera permission you grant in the operating system. Vehicle and profile pictures are stored encrypted in a private cloud storage (Supabase Storage) accessible only to your own account. Photos in Ask Toni are sent to the AI services to answer your question (see Section 7) and stored with the chat history in your account until you delete the chat, but no longer than six months.",
    ],
  },
  {
    heading: "7. AI Features (Ask Toni, AI Diagnosis, Parts Lookup)",
    paragraphs: [
      "The app offers AI-powered diagnostic features and a chat assistant (\"Ask Toni\"). When you use these features, the following data is sent for analysis to external AI providers: error codes, your chat text, technical vehicle data (e.g., make, model, engine, mileage and vehicle identification number/VIN — if you have allowed sharing for your vehicle) and — if you attach or take one — the photo.",
    ],
    table: {
      head: ["Provider", "Function", "Data Transmitted"],
      rows: [
        ["Google Gemini API", "Primary AI for diagnosis & chat (incl. image analysis)", "Error codes, vehicle data, chat text, optionally images"],
        ["OpenAI (GPT models)", "Fallback AI if Gemini does not respond", "Error codes, vehicle data, chat text, optionally images"],
        ["Perplexity AI", "Parts number research on your request in Ask Toni", "Component/vehicle context of your request"],
      ],
    },
    afterList: [
      "For parts research, Gemini additionally uses Google Search (\"Grounding with Google Search\"). A search query derived from your request (e.g., vehicle model and component) is sent to Google.",
      "No directly identifying data such as name, address, or email is transmitted to these AI services. The vehicle identification number (VIN) may, however, allow identification; it is only transmitted if you have allowed vehicle data sharing for your vehicle. According to the providers, data submitted via their paid application programming interfaces (APIs) is not used to train their AI models.",
      "Consent and withdrawal: We only use the AI features on the basis of your explicit consent (Art. 6(1)(a) GDPR), which you give in a separate dialog before first using an AI feature. We store the time and version of your consent in your account so that we can demonstrate it (Art. 7(1) GDPR). You can withdraw your consent at any time under Settings → Privacy & Consents → AI processing. Ask Toni, the AI diagnosis and AI repair guides are then no longer available until you turn them back on; all other features of the app remain usable. The lawfulness of processing carried out before the withdrawal remains unaffected.",
      "Note: Responses from the AI features are generated automatically and may contain errors (flagged accordingly in the app). For safety-relevant repairs, we recommend also consulting a professional. Part numbers are shown without guarantee.",
    ],
  },
  {
    heading: "8. Caching Infrastructure",
    paragraphs: [
      "To speed up repeated diagnostic requests, we use a cache (Upstash Redis). Diagnostic results are cached solely under the key \"error code + language\" — with no link whatsoever to your account or identity. It is not possible to identify individual users via this cache.",
    ],
  },
  {
    heading: "9. Payments, Subscriptions, and Credits",
    paragraphs: [
      "For paid subscriptions and credit purchases we use RevenueCat to manage purchase transactions and Google Play Billing for the actual payment processing. Only a pseudonymous, randomly generated account ID is transmitted to RevenueCat — no email address and no payment data. Your actual payment details (credit card, Google account, etc.) remain entirely with Google and are never seen or stored by us.",
    ],
  },
  {
    heading: "10. Advertising (Google AdMob)",
    paragraphs: [
      "The app offers optional, voluntary rewarded video ads via Google AdMob (Google Ireland Limited), through which you can earn additional credits. Ads are only loaded when you actively choose to watch an ad video. Where legally required (e.g., in the European Economic Area), we first obtain your consent via Google's consent platform (User Messaging Platform based on the IAB Transparency & Consent Framework), where you also decide whether ads may be personalised. AdMob may process a device-level advertising identifier (Android Advertising ID or Apple IDFA) and ad interaction data to serve, measure and bill for advertising. The legal basis is your consent (Art. 6(1)(a) GDPR, Section 25(1) TDDDG). You can change or withdraw your choice at any time under Settings → Privacy & Consents → Privacy options for ads. Use of the advertising feature is voluntary.",
    ],
  },
  {
    heading: "11. Push Notifications and Reminders",
    paragraphs: [
      "Maintenance reminders are scheduled and displayed solely locally on your device (via the Android/iOS system notification scheduling features). No external push service such as Firebase Cloud Messaging is used; your reminder data never leaves your device for this purpose. We only ask for notification permission when you create a reminder or turn on notifications in the settings; you can revoke it at any time in your device's system settings.",
    ],
  },
  {
    heading: "12. Bluetooth and Location Permission",
    paragraphs: [
      "To connect to your OBD2 diagnostic adapter, the app requires Bluetooth permissions. Older Android versions additionally require the \"Location\" permission for technical/system reasons before a Bluetooth device scan can be performed at all. Your actual location is never read, stored, or transmitted — the permission serves solely to technically unlock Bluetooth scanning at the operating-system level. The permissions are only requested when you start searching for an adapter.",
    ],
  },
  {
    heading: "13. Camera, Microphone, Tracking, and Analytics Tools",
    list: [
      "Camera: only used when you actively choose \"Take photo\" in Ask Toni (see Section 6); the operating system asks for permission on first use",
      "Microphone: not used or requested by the app",
      "Tracking/analytics tools: we do not use analytics or tracking services such as Firebase Analytics, Firebase Crashlytics, Google Analytics, Meta/Facebook SDK, Mixpanel, or Amplitude",
      "Cookies: as a native mobile application, the app does not use cookies",
    ],
  },
  {
    heading: "14. All Service Providers at a Glance",
    table: {
      head: ["Provider", "Purpose", "Category", "Location / Region"],
      rows: [
        ["Supabase (Supabase Pte. Ltd., Singapore)", "Database, authentication, file storage, server functions (backend infrastructure for the entire app)", "Data processor (Art. 28 GDPR), data processing agreement in place", "Data stored in the EU (Frankfurt); sub-processors incl. in the USA"],
        ["Google Gemini API", "AI-powered diagnosis & chat", "Data processor", "USA"],
        ["OpenAI", "AI fallback for diagnosis & chat", "Data processor", "USA"],
        ["Perplexity AI", "Parts number research", "Data processor", "USA"],
        ["Upstash (Redis)", "Anonymous cache for diagnostic results", "Data processor", "USA/EU (edge infrastructure)"],
        ["RevenueCat", "Subscription & purchase management (pseudonymous account ID)", "Data processor", "USA"],
        ["Resend (Resend, Inc.)", "Sending system emails (confirmation, password reset)", "Data processor", "USA"],
        ["Google Play Billing", "Payment processing for subscriptions/credits", "Independent controller (Google)", "USA/global"],
        ["Google AdMob (Google Ireland Limited)", "Optional rewarded video advertising incl. consent management (User Messaging Platform)", "Independent controller (Google) or processor depending on configuration", "EU/USA"],
      ],
    },
  },
  {
    heading: "15. International Data Transfers",
    paragraphs: [
      "Some of the above providers (Google, OpenAI, Perplexity, RevenueCat, Resend) are based in or operate servers in the USA, a third country under the GDPR. Our backend provider Supabase is based in Singapore and uses sub-processors including in the USA; your data is stored in the EU (Frankfurt). Transfers of personal data there are based on EU Standard Contractual Clauses (Art. 46(2)(c) GDPR) and/or, where the respective provider is certified, an adequacy decision under the EU-US Data Privacy Framework. You can check the current certification status of each provider on their respective website.",
    ],
  },
  {
    heading: "16. Retention Period and Statutory Retention Obligations",
    paragraphs: [
      "Your data is generally stored as long as your account exists. Upon account deletion, all personal data is removed immediately and irrevocably (see Section 18).",
      "Exempt from this are data we must retain beyond account deletion due to statutory retention obligations (e.g., German tax and commercial law requirements under § 147 AO, § 257 HGB for billing-relevant purchase records, typically 6–10 years). Such data is stored under access restriction solely for this purpose and is not otherwise processed.",
    ],
  },
  {
    heading: "17. Data Security",
    paragraphs: [
      "All data transfers between the app and our servers are encrypted (TLS). Access to your data in our database is technically restricted to your own account via row-level access controls (Row Level Security).",
    ],
  },
  {
    heading: "18. Account and Data Deletion",
    paragraphs: [
      "You can permanently delete your account at any time directly in the app under Settings → Delete Account & Data. This removes all data linked to your account: vehicles, cost data, maintenance appointments, chat history, error code history, photos, and profile data.",
      "If you have already uninstalled the app, you can also request deletion here: Request account deletion online (www.simplynext.de/en/apps/wefixit/konto-loeschen)",
    ],
  },
  {
    heading: "19. Minors",
    paragraphs: [
      "The app is not specifically directed at children in content or function. Users under 16 should only use the app with the consent of a legal guardian.",
    ],
  },
  {
    heading: "20. Changes to This Policy",
    paragraphs: [
      "We update this privacy policy whenever our data processing, the service providers used, or the legal situation changes. The current version is always available at this URL and within the app.",
    ],
  },
  {
    heading: "21. Contact",
    paragraphs: [
      "For privacy-related questions, reach us at info@simplynext.de or by phone at +49 174 3389049.",
    ],
  },
];

export const wefixitAgbEn: LegalSection[] = [
  {
    heading: "1. Provider and Scope",
    paragraphs: [
      "SimplyNext",
      "Owner: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Germany",
      "Phone: +49 174 3389049",
      "Email: info@simplynext.de",
      "These Terms and Conditions (\"Terms\") apply to the use of the \"WeFixIt\" mobile application (the \"App\") by consumers within the meaning of § 13 BGB (German Civil Code). By registering a user account and/or using paid add-on features, you accept these Terms.",
    ],
  },
  {
    heading: "2. Description of Services",
    paragraphs: [
      "The App provides the following functions:",
    ],
    list: [
      "Reading and managing OBD2 error codes via a Bluetooth adapter",
      "AI-powered error diagnosis and chat assistant (\"Ask Toni\")",
      "Management of vehicle, cost, and maintenance data",
      "Creation of local maintenance reminders",
    ],
    afterList: [
      "A basic scope of the App is usable free of charge. Extended features and additional AI requests (credits) are paid and unlocked via subscriptions or one-time purchases (see Section 4).",
    ],
  },
  {
    heading: "3. Registration and User Account",
    paragraphs: [
      "Using the App requires creating a user account with an email address and password. You are required to provide truthful information during registration and to keep your credentials confidential. Use of the App is permitted for persons aged 16 and over; younger users require the consent of a legal guardian.",
    ],
  },
  {
    heading: "4. Paid Services (Subscriptions & Credits)",
    paragraphs: [
      "The following paid services are offered:",
    ],
    table: {
      head: ["Service", "Type", "Term / Scope"],
      rows: [
        ["WeFixIt Pro (monthly)", "Subscription, auto-renewing", "1 month, auto-renews until cancelled"],
        ["WeFixIt Pro (yearly)", "Subscription, auto-renewing", "12 months, auto-renews until cancelled"],
        ["WeFixIt Lifetime", "One-time purchase, unlimited", "One-time, no auto-renewal"],
        ["Credit packages (5 / 10 / 25 credits)", "One-time purchase", "Consumption-based, credited amounts do not expire"],
      ],
    },
    afterList: [
      "Current prices are shown to you transparently via the Google Play purchase interface before completing a purchase. Subscriptions renew automatically for the respective period unless cancelled in time before expiry. Cancellation is done directly via your device's Google Play account settings, not within the app itself.",
    ],
  },
  {
    heading: "5. Payment Processing via Google Play",
    paragraphs: [
      "All payments are processed exclusively via Google Play Billing. We never receive or store your payment data (credit card, account details, etc.). Google Play's own terms of use additionally apply to payment processing. We use RevenueCat to manage subscription and purchase status, to which only a pseudonymous account ID is transmitted for this purpose (see Privacy Policy).",
    ],
  },
  {
    heading: "6. Right of Withdrawal for Digital Content",
    paragraphs: [
      "Consumers generally have a 14-day right of withdrawal under § 355 BGB. For digital content not supplied on a physical medium (such as subscriptions and credits), the right of withdrawal expires prematurely once you have expressly agreed that we begin performance of the contract before expiry of the withdrawal period, and you have simultaneously confirmed that you thereby lose your right of withdrawal (§ 356(5) BGB). This confirmation takes place as part of the purchase process via Google Play. Independently of this, Google Play's own refund policies apply, which you can view via your Google account.",
    ],
  },
  {
    heading: "7. Optional Advertising Feature (Rewarded Ads)",
    paragraphs: [
      "The App offers the voluntary option to earn additional credits by watching advertising videos (Google AdMob). Use of this feature is optional and does not create any contractual relationship beyond regular account use.",
    ],
  },
  {
    heading: "8. Important Liability Notice Regarding AI Features",
    paragraphs: [
      "The AI-powered features of the App (\"Ask Toni\", \"AI Diagnosis\", parts number suggestions) do not replace diagnosis or advice from a qualified automotive repair shop. Responses are automatically generated by language models and may be incomplete, outdated, or incorrect. Suggested part numbers are shown without guarantee and must be cross-checked against your vehicle's data and/or a qualified repair shop before purchase or installation. For safety-relevant repairs (e.g., brakes, steering, airbags), a qualified repair shop must always be consulted. Liability for damages arising from unverified implementation of AI-generated suggestions is excluded to the extent permitted by law (see Section 12).",
    ],
  },
  {
    heading: "9. User Obligations",
    paragraphs: [
      "You agree to:",
    ],
    list: [
      "not misuse the App or use it for unlawful purposes,",
      "not use automated processes (bots, scraping) to access the App,",
      "not reverse-engineer, decompile, or unlawfully reproduce the App or its content, except as permitted by law,",
      "not upload content that violates applicable law or third-party rights.",
    ],
  },
  {
    heading: "10. Usage Rights",
    paragraphs: [
      "We grant you a simple, non-transferable, personal right to use the App for the duration of your user account, limited to private, non-commercial use. All rights to the App, its software, and its content (excluding your own entered data) remain with SimplyNext or the respective rights holders.",
    ],
  },
  {
    heading: "11. Availability and Changes to the Service",
    paragraphs: [
      "We strive to keep the App available as continuously as possible but do not guarantee uninterrupted availability. Maintenance work, outages at third-party providers used (e.g., Supabase, Google, OpenAI), or force majeure may cause temporary limitations. We reserve the right to adjust, expand, or discontinue individual App features within reasonable limits.",
    ],
  },
  {
    heading: "12. Liability",
    paragraphs: [
      "We are liable without limitation for intent and gross negligence, and under the Product Liability Act. For slight negligence, we are only liable for breach of a material contractual obligation (cardinal obligation) whose fulfillment enables proper use of the App in the first place and on whose observance you may regularly rely; in this case liability is limited to the foreseeable, typical damage. Liability for damages resulting from injury to life, body, or health remains unaffected. Otherwise, liability is excluded, in particular for damages arising from implementing AI-generated suggestions without professional verification (see Section 8).",
    ],
  },
  {
    heading: "13. Termination and Account Suspension",
    paragraphs: [
      "You may delete your user account at any time without giving reasons, directly in the App (Settings → Delete Account & Data) or by requesting it online. We reserve the right to suspend or terminate user accounts upon reasonable suspicion of misuse, violation of these Terms, or applicable law.",
    ],
  },
  {
    heading: "14. Privacy",
    paragraphs: [
      "Information on the processing of your personal data can be found in our separate Privacy Policy (www.simplynext.de/en/apps/wefixit/datenschutz).",
    ],
  },
  {
    heading: "15. Consumer Dispute Resolution",
    paragraphs: [
      "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
    ],
  },
  {
    heading: "16. Changes to These Terms",
    paragraphs: [
      "We reserve the right to amend these Terms with future effect where necessary due to changed legal requirements, new features, or other objective reasons. You will be informed of material changes within the App.",
    ],
  },
  {
    heading: "17. Governing Law and Final Provisions",
    paragraphs: [
      "The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods. Mandatory consumer protection provisions of the country in which you have your habitual residence remain unaffected, provided you act as a consumer within the EU. Should any provision of these Terms be invalid, the validity of the remaining provisions shall remain unaffected.",
    ],
  },
  {
    heading: "18. Contact",
    paragraphs: [
      "For questions regarding these Terms, reach us at info@simplynext.de or by phone at +49 174 3389049.",
    ],
  },
];
