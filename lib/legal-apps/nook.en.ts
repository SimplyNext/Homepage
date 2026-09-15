import type { LegalSection } from "../legal";

/**
 * Englische Übersetzung der NOOK-Rechtstexte (nook.ts, Stand Juli 2026) –
 * nur zur Information, verbindlich ist die deutsche Fassung. Aufbau und
 * Reihenfolge entsprechen der deutschen Datei 1:1.
 */

export const nookDatenschutzEn: LegalSection[] = [
  {
    heading: "§ 1 Controller",
    list: [
      "SimplyNext",
      "Owner: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Germany",
      "Phone: +49 1743 389049",
      "E-Mail: info@simplynext.de",
      "Website: simplynext.de",
      "VAT ID: DE463824630",
    ],
    afterList: [
      "A data protection officer is not required by law, as extensive processing of personal data is not a core activity. If you have any data protection questions, please contact the e-mail address above directly.",
      "Competent supervisory authority: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (State Commissioner for Data Protection and Freedom of Information Baden-Württemberg, LfDI BW), Lautenschlagerstraße 20, 70173 Stuttgart, Germany.",
    ],
  },
  {
    heading: "§ 2 Overview of the Data Processed",
    table: {
      head: ["Data category", "Examples", "Legal basis", "Mandatory"],
      rows: [
        ["Account data", "E-mail, display name, language", "Art. 6(1)(b) GDPR (contract)", "Yes"],
        ["Travel data", "Destination, dates, interests, daily plan", "Art. 6(1)(b) GDPR (contract)", "For AI feature"],
        ["Subscription status", "Subscription expiry, unlocked content", "Art. 6(1)(b) GDPR (contract)", "Yes"],
        ["Location data", "GPS position, anonymous presence report", "Art. 6(1)(a) GDPR (consent)", "No (opt-in)"],
        ["Camera data", "Live view for text recognition (local)", "Art. 6(1)(b) GDPR (contract)", "No (opt-in)"],
        ["Stampbook / gamification", "Places visited (place ID + timestamp)", "Art. 6(1)(b) GDPR (contract)", "No"],
        ["Group expenses", "Amount, description, payer ID", "Art. 6(1)(b) GDPR (contract)", "No"],
        ["Crash data (Sentry)", "Device data, stack trace, app version", "Art. 6(1)(f) GDPR (legitimate interest)", "No (can be disabled)"],
      ],
    },
    afterList: [
      "Not collected: microphone recordings, stored photos, contacts, calendars, biometric data, advertising IDs. Data is not passed on to advertisers.",
    ],
  },
  {
    heading: "§ 3 Registration & Account",
    paragraphs: [
      "Registration is required to use the NOOK app. The following data is collected and stored in the database of our service provider Supabase:",
    ],
    list: [
      "E-mail address – for login and account communication",
      "Password – exclusively as a cryptographic hash (bcrypt), never in plain text",
      "Display name – freely chosen by you",
      "Preferred language – taken automatically from the device settings, can be changed",
      "Subscription status – activation, expiry date and unlocked content",
    ],
    afterList: [
      "Alternatively, you can sign in via Google Sign-In or Apple Sign-In (Sign in with Apple). In this case, the respective provider transmits your name and e-mail address. We do not receive access to your Google or Apple password.",
    ],
  },
  {
    heading: "Storage Period",
    level: 3,
    paragraphs: [
      "Account data is stored until the account is deleted. You can delete your account at any time under Settings → Profile → Delete account or request deletion by e-mail to info@simplynext.de. After deletion, all personal data is irrevocably removed within 30 days.",
    ],
  },
  {
    heading: "§ 4 Location Data",
    paragraphs: [
      "The app only accesses your location after your express consent (opt-in on first launch). You can withdraw your consent at any time in your profile or in the Android system settings.",
      "Your location is used for the following purposes:",
    ],
    list: [
      "Map display: Your position is processed locally on the device and is not transmitted to or stored on our servers.",
      "Stampbook (collecting stamps): To redeem a stamp, your GPS position is compared once with the coordinates of the place (radius: 50 m). This check takes place on the device; your exact position is not stored permanently.",
      "Anonymous crowd reporting: With your consent, the fact that you are near a sight is transmitted – in the form of place ID + day of the week + time, without a user ID. This report cannot technically be traced back to you and is therefore anonymous within the meaning of the GDPR.",
    ],
    afterList: [
      "Legal basis: Art. 6(1)(a) GDPR (consent). Withdrawal: at any time without giving reasons via the app's profile screen or the system settings.",
    ],
  },
  {
    heading: "§ 5 Camera & Smart Scanner",
    paragraphs: [
      "The camera is used exclusively for the Smart Scanner, which recognises menus and signs. Access takes place as a live view; photos or videos are neither stored nor uploaded.",
      "Text recognition takes place entirely on the device (Google ML Kit Text Recognition – no server call). Only the recognised text is then transmitted to our server-side AI interface (Supabase Edge Function → Google Gemini API) for content analysis. No personal data is sent in the process.",
    ],
  },
  {
    heading: "§ 6 Third-Party Providers & Data Processing",
  },
  {
    heading: "6.1 Supabase (Database, Auth, File Storage)",
    level: 3,
    paragraphs: [
      "Core infrastructure of the app. All account data, travel plans, expenses and stampbook entries are stored in the Supabase database. Audio guides are stored in Supabase Storage.",
    ],
    table: {
      head: ["Item", "Value"],
      rows: [
        ["Provider", "Supabase Inc., 970 Trestle Glen Rd, Oakland, CA 94610, USA"],
        ["Server location", "EU (Frankfurt / AWS eu-central-1)"],
        ["Privacy", "supabase.com/privacy"],
        ["DPA", "Required; available from Supabase as a DPA"],
        ["Third-country transfer", "Standard Contractual Clauses (SCC) pursuant to Art. 46 GDPR"],
      ],
    },
  },
  {
    heading: "6.2 Google LLC (Maps, AI, ML Kit, Directions)",
    level: 3,
    paragraphs: [
      "The Google Maps SDK for Android is used for the interactive map in the Explorer screen. Device identifiers and map tile requests may be transmitted to Google in the process.",
      "The Google Gemini API is called exclusively server-side via Supabase Edge Functions – never directly from the device. Content processed: destination and travel dates (route planning), guide script texts (text-to-speech), recognised menu text (scanner), shared social post text (Zazu assistant). No user ID is transmitted to Google in the process.",
      "Google ML Kit Text Recognition runs entirely on the device; no data leaves the device.",
      "The Google Maps Directions API is used server-side for public transport connections; only anonymous start/destination coordinates are transmitted.",
    ],
    table: {
      head: ["Item", "Value"],
      rows: [
        ["Provider", "Google LLC, 1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"],
        ["Privacy", "policies.google.com/privacy"],
        ["Third-country transfer", "SCC / Google Cloud DPA pursuant to Art. 46 GDPR"],
      ],
    },
  },
  {
    heading: "6.3 BestTime API (Visitor Numbers)",
    level: 3,
    paragraphs: [
      "To display live visitor numbers for sights, we use the BestTime API server-side. Only anonymous place IDs are transmitted; there is no personal reference.",
    ],
    table: {
      head: ["Item", "Value"],
      rows: [
        ["Provider", "BestTime.app B.V., Netherlands"],
        ["Privacy", "besttime.app/privacy"],
      ],
    },
  },
  {
    heading: "6.4 In-App Purchases (Google Play & Apple App Store)",
    level: 3,
    paragraphs: [
      "Purchases and subscriptions are processed entirely via Google Play Billing or the Apple App Store. NOOK does not process any payment data directly. Purchase receipts are submitted to Google or Apple for verification exclusively server-side (Supabase Edge Function). The privacy policies of the respective stores apply.",
    ],
  },
  {
    heading: "6.5 Sentry (Crash Reporting, Optional)",
    level: 3,
    paragraphs: [
      "To improve app stability, we optionally use Sentry. Sentry is only active if a DSN key is provided via the build configuration. In the event of a crash, the following data is transmitted: device manufacturer and model, operating system version, app version and stack trace. No personally identifiable data is knowingly collected.",
    ],
    table: {
      head: ["Item", "Value"],
      rows: [
        ["Provider", "Functional Software Inc. (Sentry), 132 Hawthorne St, San Francisco, CA 94107, USA"],
        ["Privacy", "sentry.io/privacy"],
        ["Storage period", "90 days"],
        ["DPA", "Required; available from Sentry"],
        ["Third-country transfer", "SCC pursuant to Art. 46 GDPR"],
      ],
    },
    afterList: [
      "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in stability and troubleshooting).",
    ],
  },
  {
    heading: "§ 7 Transfer of Data to Third Countries",
    paragraphs: [
      "Some of the service providers mentioned (Supabase, Google, Sentry) are based in the USA. For transfers to third countries without an adequate level of data protection, we rely on Standard Contractual Clauses (SCC) pursuant to Art. 46(2)(c) GDPR. Copies of the clauses are available on request.",
      "Insofar as Supabase is operated on EU servers (Frankfurt), no transfer to a third country takes place for the data stored in the database.",
    ],
  },
  {
    heading: "§ 8 Your Rights",
    table: {
      head: ["Right", "Basis", "Description"],
      rows: [
        ["Access", "Art. 15 GDPR", "You can request information about the data stored about you at any time."],
        ["Rectification", "Art. 16 GDPR", "Inaccurate or incomplete data will be corrected at your request."],
        ["Erasure", "Art. 17 GDPR", "You can request the erasure of your personal data unless statutory retention obligations prevent this."],
        ["Restriction", "Art. 18 GDPR", "You can request the restriction of processing, e.g. while you dispute the accuracy of the data."],
        ["Data portability", "Art. 20 GDPR", "You have the right to receive your data in a machine-readable format or to have it transferred to another provider."],
        ["Objection", "Art. 21 GDPR", "You can object to processing based on legitimate interests (e.g. Sentry)."],
        ["Withdrawal", "Art. 7(3) GDPR", "Consent (location data) can be withdrawn at any time with effect for the future, without affecting previous processing."],
        ["Complaint", "Art. 77 GDPR", "You have the right to lodge a complaint with a data protection supervisory authority, in particular in the EU member state of your residence."],
      ],
    },
    afterList: [
      "To exercise your rights, please contact: info@simplynext.de. We will process your request within 30 days.",
      "Supervisory authority responsible for SimplyNext (registered in Baden-Württemberg): Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg (LfDI BW), Lautenschlagerstraße 20, 70173 Stuttgart, Germany. A list of all EU supervisory authorities can be found at edpb.europa.eu.",
    ],
  },
  {
    heading: "§ 9 Changes to This Policy",
    paragraphs: [
      "We reserve the right to adapt this privacy policy in the event of significant changes to the app or the legal situation. You will be informed of significant changes via the app or by e-mail. The date of the last update is shown above.",
    ],
  },
];

export const nookAgbEn: LegalSection[] = [
  {
    heading: "§ 1 Scope",
    ordered: true,
    list: [
      "These General Terms and Conditions (Terms) apply to the use of the mobile application NOOK (hereinafter “App”), which is provided by SimplyNext, owner Nuri Toker, Mechenseerstr. 12, 88316 Isny im Allgäu, Germany (hereinafter “Provider”).",
      "By registering or using the App for the first time, the user agrees to these Terms.",
      "Deviating terms of the user are not recognised unless the Provider expressly agrees to their validity in writing.",
    ],
  },
  {
    heading: "§ 2 Description of Services",
    paragraphs: ["NOOK is a digital travel companion for European cities. Among other things, the App offers the following functions:"],
    list: [
      "AI-supported travel planning (daily routes, sights)",
      "Explorer with interactive map and real-time visitor numbers",
      "Audio guides for sights",
      "Smart Scanner for text recognition of menus and signs",
      "Public transport assistant for local connections",
      "Group budget management",
      "Stampbook (gamification/stamp collecting)",
      "Zazu assistant for social media analysis",
    ],
    afterList: [
      "The Provider reserves the right to extend, restrict or change the range of functions of the App at any time, provided this is reasonable for the user.",
      "A stable internet connection is required for use. Some content can be used offline if it has been downloaded beforehand.",
    ],
  },
  {
    heading: "§ 3 Registration & User Account",
    ordered: true,
    list: [
      "Use of the App requires registration with a valid e-mail address and password. Alternatively, you can sign in via Google Sign-In or Sign in with Apple.",
      "The user is obliged to provide truthful information when registering and to keep their access data confidential.",
      "Only one user account is permitted per person.",
      "The user is responsible for all activities that take place under their account.",
      "The user can delete their account at any time under Settings → Profile → Delete account or by e-mail to info@simplynext.de. After deletion, all personal data is removed within 30 days.",
    ],
  },
  {
    heading: "§ 4 Rights of Use & Licence",
    paragraphs: [
      "The Provider grants the user a non-exclusive, non-transferable, revocable right to use the App for private, non-commercial purposes.",
      "It is not permitted to:",
    ],
    list: [
      "decompile, disassemble or reverse engineer the App",
      "reproduce, distribute or make publicly available content of the App, unless expressly permitted",
      "use the App for the commercial purposes of third parties",
      "circumvent measures that restrict access to paid content",
    ],
    afterList: [
      "All rights to the App, its content and the underlying code remain with the Provider or the respective licensors.",
    ],
  },
  {
    heading: "§ 5 In-App Purchases & Subscriptions",
    ordered: true,
    list: [
      "Certain functions of the App are only accessible with a paid subscription (NOOK Premium).",
      "Subscriptions are concluded and billed via Google Play Billing (Android) or the Apple App Store (iOS). The payment terms of the respective store operator apply.",
      "Subscriptions renew automatically for the agreed period unless they are cancelled in the respective store account at least 24 hours before the end of the term.",
      "Right of withdrawal: For digital content that is provided immediately after purchase and whose provision the user has expressly confirmed before the end of the withdrawal period, the right of withdrawal expires pursuant to § 356(5) of the German Civil Code (BGB).",
      "Price changes will be communicated to the user at least 30 days before they take effect via app notification or e-mail. Continued use after they take effect is deemed consent.",
    ],
  },
  {
    heading: "§ 6 User Obligations",
    paragraphs: [
      "The user undertakes to use the App only in accordance with these Terms and applicable law.",
      "In particular, it is prohibited to:",
    ],
    list: [
      "enter false or misleading information",
      "use the App to distribute illegal, offensive or harmful content",
      "carry out automated queries (bots, scrapers) without express permission",
      "impair the technical infrastructure of the App",
    ],
    afterList: [
      "In the event of violations, the Provider is entitled to block or delete the user account without prior notice.",
    ],
  },
  {
    heading: "§ 7 Availability & Warranty",
    ordered: true,
    list: [
      "The Provider strives for high availability of the App but cannot guarantee uninterrupted availability. Planned maintenance work will be announced in advance where possible.",
      "The App is provided in its current version. The user is responsible for installing available updates.",
      "AI-generated content (travel plans, audio guides, recommendations) consists of suggestions without any guarantee of accuracy, completeness or timeliness. The user makes their travel decisions on their own responsibility.",
      "Real-time information (visitor numbers, public transport connections) is obtained from third-party providers and may differ from the actual situation.",
    ],
  },
  {
    heading: "§ 8 Limitation of Liability",
    ordered: true,
    list: [
      "The Provider is liable without limitation for damage resulting from injury to life, body or health and for intentional or grossly negligent breaches of duty.",
      "Otherwise, the Provider's liability is limited to foreseeable damage typical for the contract if an essential contractual obligation (cardinal obligation) has been breached.",
      "The Provider is not liable for slightly negligent breaches of secondary obligations.",
      "The Provider is not liable for damage caused by improper use of the App, incorrect device configuration or third-party services (Google Maps, Supabase, etc.).",
      "The Provider accepts no liability for travel decisions the user makes on the basis of the App's recommendations.",
    ],
  },
  {
    heading: "§ 9 Term & Termination",
    ordered: true,
    list: [
      "The usage relationship for free basic use runs for an indefinite period and can be terminated by the user at any time by deleting the account.",
      "Subscriptions run for the selected period (monthly/yearly) and renew automatically unless cancelled in good time (see § 5).",
      "The Provider may terminate the usage relationship extraordinarily if the user violates these Terms.",
      "Upon termination of the usage relationship, the right of use granted in § 4 expires.",
    ],
  },
  {
    heading: "§ 10 Changes to the Terms",
    ordered: true,
    list: [
      "The Provider reserves the right to adapt these Terms for objective reasons (e.g. changes in the law, new functions, price changes).",
      "Significant changes will be communicated to the user at least 30 days before they take effect via app notification or e-mail.",
      "If the user does not object to the amended Terms within 30 days of notification, the new Terms are deemed accepted. The Provider will point out this right to object separately in the notification.",
      "In the event of an objection, the Provider is entitled to terminate the usage relationship as of the date the amended Terms take effect.",
    ],
  },
  {
    heading: "§ 11 Data Protection",
    paragraphs: [
      "Personal data is processed in accordance with the separate privacy policy, which is available on the Provider's website. The privacy policy forms part of these Terms.",
    ],
  },
  {
    heading: "§ 12 Applicable Law & Place of Jurisdiction",
    ordered: true,
    list: [
      "The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).",
      "If the user is a consumer resident in the EU, the mandatory consumer protection provisions of their country of residence remain unaffected.",
      "The place of jurisdiction for disputes with merchants or legal entities under public law is Isny im Allgäu.",
    ],
  },
  {
    heading: "§ 13 Dispute Resolution",
    paragraphs: [
      "The Provider is neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board unless required by law.",
    ],
  },
  {
    heading: "§ 14 Final Provisions",
    ordered: true,
    list: [
      "Should individual provisions of these Terms be invalid or unenforceable, the validity of the remaining provisions shall remain unaffected. The invalid provision shall be replaced by a valid one that comes closest to the economic purpose of the invalid provision.",
      "Side agreements, amendments and supplements to these Terms must be made in writing.",
    ],
  },
];
