import type { LegalSection } from "../legal";

/**
 * Englische Übersetzung der Werkflow-Rechtstexte (werkflow.ts, Stand
 * 14.09.2026) – nur zur Information, verbindlich ist die deutsche Fassung.
 * Aufbau und Reihenfolge entsprechen der deutschen Datei 1:1. Deutsche
 * Fachbegriffe ohne englische Entsprechung (GoBD, ZUGFeRD, XRechnung,
 * Leitweg-ID) bleiben stehen und werden beim ersten Vorkommen erklärt;
 * Menüpfade nutzen die englischen Bezeichnungen der App (app_en.arb).
 */

export const werkflowDatenschutzEn: LegalSection[] = [
  {
    heading: "1. Controller",
    paragraphs: ["The controller responsible for data processing within the meaning of the General Data Protection Regulation (GDPR) is:"],
    list: [
      "SimplyNext",
      "Owner: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Germany",
      "E-Mail: info@simplynext.de",
      "Phone: +49 1743389049",
    ],
    afterList: [
      "(Details identical to the legal notice)",
      "No company data protection officer has been appointed, as the statutory requirements under Art. 37 GDPR / § 38 of the German Federal Data Protection Act (BDSG) are not met (sole proprietorship without at least 20 persons permanently engaged in the automated processing of personal data).",
    ],
  },
  {
    heading: "2. General Information on Data Processing",
    paragraphs: [
      "WerkFlow is an app for trade businesses for creating quotes and invoices (including e-invoices), managing customers and managing material lists. Personal data is processed when the app is used. Personal data is any data that can be related to you personally, e.g. name, address, e-mail address or user behaviour.",
      "We only process your data insofar as this is necessary to provide a functional app and our content and services, or insofar as you have given your consent.",
    ],
  },
  { heading: "3. What Data We Process" },
  {
    heading: "3.1 Account and Authentication Data",
    level: 3,
    paragraphs: ["When you register, we collect:"],
    list: [
      "E-mail address",
      "Password (stored in encrypted form, not visible to us)",
      "Time of registration, login history, session token",
    ],
    afterList: [
      "We only send account e-mails to your e-mail address: the confirmation upon registration and the link to reset your password (sent via Resend, see section 4.5).",
      "Legal basis: Art. 6(1)(b) GDPR (performance of a contract – provision of the user account)",
    ],
  },
  {
    heading: "3.2 Company Profile Data",
    level: 3,
    paragraphs: [
      "To create legally compliant quotes, invoices and PDFs, we collect and store the information you enter about your business:",
    ],
    list: [
      "Company name, legal form",
      "Address (street, postcode, city)",
      "Tax number / VAT ID",
      "Phone number, company e-mail, website",
      "Contact person, managing director",
      "Registered office, registry court, commercial register number",
      "Company logo (image file)",
      "Name and position of the authorised signatory",
      "Digital signature (as an image file)",
      "If you use the DATEV export: chart of accounts, adviser and client number at your tax advisor, debtor and revenue accounts",
    ],
    afterList: [
      "Legal basis: Art. 6(1)(b) GDPR (performance of a contract) and Art. 6(1)(c) GDPR (legal obligation, insofar as mandatory information for invoices/quotes is required under § 14 of the German VAT Act (UStG))",
    ],
  },
  {
    heading: "3.3 Bank Details (Particularly Sensitive Financial Data)",
    level: 3,
    paragraphs: [
      "You can store the following data for display on your quotes and invoices:",
    ],
    list: ["Bank name", "IBAN", "BIC"],
    afterList: [
      "This data is stored exclusively for the purpose of display on your own quotes and invoices. On invoices, it also appears as payment information in the embedded e-invoice (ZUGFeRD or XRechnung, the German e-invoice formats). It is not used for payment processing within the app.",
      "Legal basis: Art. 6(1)(b) GDPR (performance of a contract)",
    ],
  },
  {
    heading: "3.4 Customer Data",
    level: 3,
    paragraphs: [
      "When you create customers in the app, we process the data you enter about your end customers:",
    ],
    list: [
      "First and last name, company if applicable",
      "Address (street, house number, postcode, city, country)",
      "Phone number (optional)",
      "E-mail address (optional)",
      "Customer number",
      "VAT identification number (optional; required if the reverse-charge procedure under § 13b UStG applies)",
      "Classification as a private or business customer (controls the legally required notices on the invoice)",
      "Leitweg-ID (optional; only for public-sector clients. The authority provides this routing ID so that the invoice is assigned to the correct office on its receiving platform.)",
    ],
    afterList: [
      "Note: As a user, you are yourself the controller under data protection law with regard to your customers' data (Art. 4(7) GDPR). We process this data on your behalf as a processor within the meaning of Art. 28 GDPR. A corresponding data processing agreement (DPA) can be provided on request.",
      "Legal basis (from your perspective as a user): Art. 6(1)(b) or (f) GDPR, depending on the customer relationship",
    ],
  },
  {
    heading: "3.5 Quote, Invoice and Material Data",
    level: 3,
    paragraphs: [
      "An invoice can be created in the app from an accepted quote. The following is processed:",
    ],
    list: [
      "Quote number, date, subject, validity period",
      "Line items, quantities, unit prices, totals, VAT",
      "Payment terms, delivery/performance period",
      "Status (draft, sent, accepted, rejected, replaced by a new version)",
      "For sent quotes: time of sending, the sent PDF as your customer received it, and its checksum (SHA-256)",
      "Material list with descriptions, prices, units",
      "For invoices, additionally the information required under § 14 UStG: sequential invoice number, invoice type (invoice, partial, final or cancellation invoice) and invoice date",
      "Date or period of performance, due date and payment term",
      "Split into labour and material costs (§ 35a of the German Income Tax Act (EStG)) and the indicators for § 13b, § 14b and § 19 UStG",
      "A frozen copy of the customer data at the time of the invoice. If the customer moves later, the archived invoice must still show the address valid at the time.",
      "The generated PDF with its checksum (SHA-256) and the e-invoice embedded in it in the ZUGFeRD 2.3 / Factur-X format (profile EN 16931). This XML file contains the same invoice information again in machine-readable form so that your customer's accounting can import it automatically.",
      "For invoices to public-sector clients, the same file is instead created in the XRechnung 3.0 format. It additionally contains the Leitweg-ID and a contact person at your business with phone number and e-mail address, because the authority's invoice receiving platform requires this information.",
    ],
    afterList: [
      "Legal basis: Art. 6(1)(b) GDPR (performance of a contract), for the mandatory information additionally Art. 6(1)(c) GDPR (legal obligation under § 14 UStG).",
      "Immutability: A sent invoice can neither be changed in the app nor deleted before the end of the retention period (German principles for the proper keeping and storage of books, records and documents in electronic form, GoBD). A correction is only possible via a cancellation invoice that refers to the original invoice. The same applies to sent quotes: a change creates a new version with a new quote number, and the old version is retained.",
    ],
  },
  {
    heading: "Retention Obligations",
    level: 3,
    paragraphs: [
      "The statutory retention obligations for your business records apply to you as a business owner. In particular:",
    ],
    list: [
      "Invoices, partial, final and cancellation invoices including the embedded e-invoice (XML), as well as quotes that led to an order: 8 years (§ 147(1) no. 4, (3) of the German Fiscal Code (AO), § 257(1) no. 4, (4) of the German Commercial Code (HGB), § 14b UStG)",
      "Quotes without a subsequent order: 6 years (§ 147(1) nos. 2, 3, (3) AO, § 257(1) nos. 2, 3, (4) HGB)",
    ],
    afterList: [
      "The period does not begin on the day of creation but at the end of the calendar year in which the document was created (§ 147(4) AO, § 257(5) HGB). Example: an invoice dated 15 May 2026 must be retained until 31 December 2034. The period is extended as long as the documents are relevant for a tax assessment that has not yet been completed (§ 147(3) sentence 5 AO).",
    ],
  },
  {
    heading: "Storage and Deletion by Us",
    level: 3,
    paragraphs: [
      "We store your sent quotes and invoices, including PDF and e-invoice, until the end of the retention period. Before then, they cannot be deleted, not even by you, so that your retention obligation remains fulfilled. You can delete drafts at any time.",
      "After the period has expired, we delete the documents automatically, because we may not store personal data for longer than necessary (Art. 5(1)(e), Art. 17(1)(a) GDPR):",
    ],
    list: [
      "From 1 October of the last retention year, we show you in the app which documents are affected and offer them for download (section 7). We do not send an e-mail about this.",
      "On 31 March of the following year, we delete the record, PDF and e-invoice of these documents, even if you have not opened the app in the meantime.",
      "If you need documents for longer, for example because a tax audit, an objection or other proceedings are ongoing (§ 147(3) sentence 5 AO), you can extend retention in the app by one year at a time.",
      "Between the end of the period and the deletion date, you can also delete documents yourself in the app.",
    ],
    afterList: [
      "Example: an invoice dated 15 May 2026 must be retained until 31 December 2034. From 1 October 2034, the app points out the upcoming deletion; it is deleted on 31 March 2035.",
      "If you delete your account, all data including quotes and invoices is deleted immediately and permanently, even if the retention period is still running. The app therefore offers you the option of downloading the archive for all years beforehand (section 7).",
    ],
  },
  {
    heading: "3.6 Photos and Voice Recordings (AI Analysis)",
    level: 3,
    paragraphs: [
      "To enable automatic quote creation using AI, you can:",
    ],
    list: [
      "take photos of construction sites/damage using the device camera",
      "record voice notes using the microphone",
      "upload photos of handwritten or printed material lists",
    ],
    afterList: [
      "This content is only transmitted to our servers (Supabase, see section 4.1) via a secure connection after your express consent (consent dialog in the app) and forwarded from there to an AI service for automated analysis.",
      "Primary AI service: Google Gemini (paid plan with billing enabled) processes photos, voice recordings and text descriptions for quote creation as well as photos of material lists by default.",
      "Fallback service: If Google Gemini is temporarily unavailable (e.g. due to a technical fault), the request is automatically forwarded to OpenAI (GPT-4o, including Whisper transcription for voice recordings where applicable) so that your request can still be processed. The fallback is only used in exceptional cases.",
      "The raw data (photos, audio files) is not stored permanently on our servers after the AI analysis has been completed, but is only transmitted for the duration of processing.",
      "As we use a paid plan with billing enabled for Google Gemini, the Gemini API terms of use expressly provide that Google does not use your input (prompts, images, audio files) or the generated responses to improve Google products. Input is only logged there for a limited time for abuse detection and for security reasons (source: Gemini API – terms of use for paid services).",
      "Legal basis: Art. 6(1)(a) GDPR (consent). Consent can be withdrawn at any time with effect for the future in the app settings (toggle “Use AI Analysis”).",
      "Important note: When photographing construction sites/customers' homes, make sure that no people or sensitive private documents are recognisable in the picture, as you as the user are responsible for this.",
      "Dictation (speech to text): In quotes, invoices and notes, you can dictate text instead of typing. Unlike the quote analysis, the spoken content is not analysed but only converted into text. The app chooses the method when you tap the microphone and shows it in the recording dialog. If the server is reachable (“Online” indicator), the recording is transmitted to our server – only with your consent under this section – and converted into text there by Google Gemini or, as a substitute, OpenAI Whisper; the audio file is not stored permanently after conversion and is deleted from your device immediately. Without reception or without consent (“Offline” indicator), your operating system's speech recognition is used; nothing is transmitted to us, and the device manufacturer's terms apply to its processing. Dictation does not use up any of your analysis quotas.",
    ],
  },
  {
    heading: "3.7 Free-Form Notes",
    level: 3,
    paragraphs: [
      "In the app, you can create free-form notes (typed or dictated). Their content is stored on our servers (Supabase, see section 4.1) and is assigned exclusively to your account. You alone decide what information a note contains; it can be deleted in the app at any time.",
      "Legal basis: Art. 6(1)(b) GDPR (performance of a contract)",
    ],
  },
  {
    heading: "3.8 Subscription and Payment Data",
    level: 3,
    paragraphs: [
      "For the use of paid features (subscription plans “Solo”, “Small Business”, “Pro”), we process:",
    ],
    list: [
      "your user ID (to assign the subscription to your account)",
      "subscription status, plan booked, expiry date",
      "purchase history (managed via RevenueCat, see section 4.3)",
    ],
    afterList: [
      "The actual payment processing takes place entirely via Google Play Billing. At no time do we collect, store or view credit card or other payment data.",
      "Legal basis: Art. 6(1)(b) GDPR (performance of a contract)",
    ],
  },
  {
    heading: "3.9 Technical Data / Usage Data",
    level: 3,
    paragraphs: ["When the app is used, the following is processed automatically for technical reasons:"],
    list: [
      "Device information (operating system, app version)",
      "Error logs (for troubleshooting)",
      "Local settings (theme, language setting – stored only locally on the device)",
    ],
    afterList: [
      "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in the functionality and security of the app)",
    ],
  },
  {
    heading: "3.10 Change Log of Documents",
    level: 3,
    paragraphs: [
      "So that it remains traceable when a quote or invoice was created, sent or changed, the app keeps a log for each document. The following is stored:",
    ],
    list: [
      "time and type of the operation (created, changed, issued, status change, PDF archived, shared, exported, retention extended, deleted)",
      "document type and document number",
      "the names of the changed fields, and for documents already sent, additionally the old and new values of the changed fields (e.g. payment status and payment date); for a deletion, the document number, date and amount",
      "whether the operation was triggered by you or automatically by the system",
      "checksums (SHA-256) that chain each entry to the previous one so that subsequent changes to the log are detectable",
    ],
    afterList: [
      "Complete documents or customer data are not included in the log. The log cannot be edited in the app; you receive it with the export for your tax advisor and with the data export (section 7).",
      "Purpose: proof that bookings and records have not been changed unnoticed (§ 146(4) AO, GoBD).",
      "Legal basis: Art. 6(1)(b) GDPR (performance of a contract – GoBD-compliant record keeping) and Art. 6(1)(c) GDPR (your recording obligation under § 146(4) AO)",
      "Storage period: the same as the associated document. If a document is deleted after the period has expired, we remove the document reference, document number, field names and values from its log entries. Only the time, type of operation and checksums remain, so that the chain remains verifiable. These remnants are deleted together with the account.",
    ],
  },
  {
    heading: "4. Recipients of Data / Processors",
    paragraphs: [
      "We use carefully selected service providers who process your data exclusively on our instructions. Where necessary, data processing agreements (Art. 28 GDPR) are in place with all providers.",
    ],
  },
  {
    heading: "4.1 Supabase (Backend, Database, Authentication, File Storage)",
    level: 3,
    paragraphs: [
      "Supabase Inc., USA. The data is stored on servers in the EU (data centre in Ireland).",
      "Data transmitted: all data listed in sections 3.1–3.10 (account, profile, customer, quote, invoice and material data, free-form notes, generated PDF and ZUGFeRD files, change log, company logo, signature image file).",
      "Transfer to third countries: As Supabase is a company based in the USA, access from the USA (e.g. in the context of maintenance and support) cannot be ruled out. This is safeguarded by the data processing agreement with EU Standard Contractual Clauses (Art. 46(2)(c) GDPR).",
      "Privacy policy: supabase.com/privacy",
    ],
  },
  {
    heading: "4.2 AI Analysis Services (Google Gemini Primary, OpenAI GPT-4o as Fallback)",
    level: 3,
    paragraphs: [
      "For the automated evaluation of photos, voice recordings and text descriptions and for converting dictation into text (see section 3.6), we use:",
    ],
    list: [
      "Google Gemini (Google Ireland Limited / Google LLC, USA) – primary and regularly used AI service, paid plan without your data being used for training. Privacy policy: policies.google.com/privacy · Terms of use: ai.google.dev/gemini-api/terms#paid-services",
      "OpenAI GPT-4o (contracting party for customers in the EEA: OpenAI Ireland Ltd., Dublin, Ireland; affiliated with OpenAI, L.L.C., USA) – exclusively as a technical fallback if Google Gemini is temporarily unavailable. This is based on OpenAI's Data Processing Addendum. Privacy policy: openai.com/policies/eu-privacy-policy",
    ],
    afterList: [
      "Transfer to third countries: As these providers also operate servers in the USA, personal data may be transferred to a country outside the EU/EEA. We ensure an adequate level of data protection by concluding EU Standard Contractual Clauses (Art. 46(2)(c) GDPR) with the respective providers.",
      "The transfer takes place only after your active consent (section 3.6) and is limited in time to the duration of the analysis.",
    ],
  },
  {
    heading: "4.3 RevenueCat (Subscription Management)",
    level: 3,
    paragraphs: [
      "RevenueCat, Inc., San Francisco, USA",
      "Data transmitted: user ID, purchase and subscription status, device-side purchase confirmations.",
      "Privacy policy: www.revenuecat.com/privacy",
      "Transfer to third countries: USA, safeguarded by EU Standard Contractual Clauses.",
    ],
  },
  {
    heading: "4.4 Google Play Billing / Google Play Services",
    level: 3,
    paragraphs: [
      "Google Ireland Limited / Google LLC",
      "Payment for subscriptions is processed entirely via Google Play. Google's privacy policy also applies: policies.google.com/privacy",
    ],
  },
  {
    heading: "4.5 Resend (Sending Account E-Mails)",
    level: 3,
    paragraphs: [
      "Resend, Inc., San Francisco, USA",
      "Purpose: sending the confirmation e-mail upon registration and the password reset e-mail (section 3.1).",
      "Data transmitted: your e-mail address, the content of the respective account e-mail, time of sending and delivery status.",
      "Privacy policy: resend.com/legal/privacy-policy",
      "Transfer to third countries: USA, safeguarded by EU Standard Contractual Clauses.",
      "Legal basis: Art. 6(1)(b) GDPR (performance of a contract – provision of the user account)",
    ],
  },
  {
    heading: "5. App Permissions",
    paragraphs: ["The app requests the following system permissions:"],
    table: {
      head: ["Permission", "Purpose", "Mandatory"],
      rows: [
        ["Camera", "Taking photos for AI-supported quote creation", "Only when actively using the photo feature"],
        ["Microphone", "Recording voice notes for quote creation and dictating text", "Only when actively using the voice feature"],
        ["Internet access", "Communication with our servers (Supabase, RevenueCat)", "Required for basic functions"],
      ],
    },
    afterList: [
      "The app does not request access to location, contacts, SMS, call log or other apps.",
      "Permissions are requested at runtime and can be revoked at any time in the Android system settings. Without camera/microphone access, the affected individual functions (photo analysis, voice recording) cannot be used; the rest of the app remains fully functional.",
    ],
  },
  {
    heading: "6. Storage Period",
    table: {
      head: ["Data category", "Storage period"],
      rows: [
        ["Account data", "Until the user account is deleted"],
        [
          "Quotes and invoices including PDF and e-invoice (ZUGFeRD/XRechnung)",
          "Drafts until deleted by you. Sent documents until the end of the retention period (8 or 6 years from the end of the calendar year); automatic deletion on the following 31 March, notice in the app from 1 October, extension possible (section 3.5). Immediately upon account deletion.",
        ],
        ["Change log of documents", "The same as the associated document; afterwards only redacted entries without document reference until the account is deleted (section 3.10)"],
        ["Customer data", "Until deleted by the user or the account is deleted. The copy of the customer data in a sent invoice is retained for as long as the invoice."],
        ["Photos/voice recordings for AI analysis and dictation", "Only temporarily during processing, no permanent storage"],
        ["Free-form notes", "Until deleted by the user or the account is deleted"],
        ["Company logo, signature", "Until deleted by the user or the account is deleted"],
        ["Subscription/purchase data", "In accordance with statutory retention obligations and the terms of RevenueCat/Google Play"],
      ],
    },
  },
  {
    heading: "7. Your Rights as a Data Subject",
    paragraphs: ["You have the right at any time to:"],
    list: [
      "access to the personal data processed by us (Art. 15 GDPR)",
      "rectification of inaccurate data (Art. 16 GDPR)",
      "erasure of your data (Art. 17 GDPR)",
      "restriction of processing (Art. 18 GDPR)",
      "data portability (Art. 20 GDPR)",
      "object to processing (Art. 21 GDPR)",
      "withdraw consent given, with effect for the future (Art. 7(3) GDPR)",
      "lodge a complaint with a supervisory authority (Art. 77 GDPR)",
    ],
  },
  {
    heading: "Functions Available Directly in the App",
    level: 3,
    list: [
      "Data export: Under Settings → “Export My Data”, you can download all stored data as a JSON file, including your invoices with the e-invoice data and the change log.",
      "Export for tax advisor: Under Settings → “Export for tax advisor”, you receive your quotes and invoices for a period as a ZIP archive (PDF, e-invoice, tables, change log) and, if desired, a DATEV posting batch. The file is created on your device; you decide where to store it and to whom to pass it on.",
      "Account deletion: Under Settings → “Delete Account”, you can have your account and all associated data irrevocably deleted. This also deletes your quotes and invoices; the app offers you the option of downloading the archive for all years beforehand (section 3.5).",
      "Withdrawal of AI consent: You can deactivate the AI-supported analysis in the settings at any time.",
    ],
    afterList: ["For all other requests, please contact: info@simplynext.de"],
  },
  {
    heading: "8. Data Security",
    paragraphs: [
      "We use technical and organisational measures to protect your data against loss, misuse and unauthorised access:",
    ],
    list: [
      "Encrypted transmission of all data via TLS/HTTPS",
      "Access control at database level (Row Level Security) – each user can only access their own data",
      "Secure, PKCE-based authentication with automatic token expiry and renewal",
      "Third-party API keys (e.g. RevenueCat) are not stored in the app code but provided securely server-side",
      "Passwords are stored exclusively in encrypted (hashed) form",
      "Sent documents and their archived PDFs are locked against modification and premature deletion at database and storage level; checksums and a chained change log make changes detectable",
    ],
  },
  {
    heading: "9. No Automated Decision-Making",
    paragraphs: [
      "No automated decision-making within the meaning of Art. 22 GDPR that produces legal effects concerning you takes place. The AI-supported recognition of materials and working hours serves only as a suggestion; you check and confirm all AI-generated information yourself before it is adopted into a quote (see the confirmation requirement in the app: “I have reviewed the AI-generated data and confirm its accuracy”).",
    ],
  },
  {
    heading: "10. Changes to This Privacy Policy",
    paragraphs: [
      "We reserve the right to amend this privacy policy to adapt it to changes in the legal situation or in the event of changes to the app or to data processing. The new privacy policy will then apply to your next visit or next use of the app. We will inform you separately in the app of any significant changes.",
    ],
  },
  {
    heading: "11. Contact",
    paragraphs: ["If you have any questions about data protection, please contact:"],
    list: [
      "SimplyNext",
      "Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "E-Mail: info@simplynext.de",
      "Phone: +49 1743389049",
    ],
  },
];

export const werkflowAgbEn: LegalSection[] = [
  {
    heading: "§ 1 Scope, Provider",
    paragraphs: [
      "(1) These General Terms and Conditions (hereinafter “Terms”) apply to the use of the mobile application “WerkFlow” (hereinafter “App”) and the associated services, which are operated by",
    ],
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
    afterList: [
      "(hereinafter “Provider”).",
      "(2) The App is aimed exclusively at businesses within the meaning of § 14 of the German Civil Code (BGB), in particular trade businesses and self-employed persons who use the App to create quotes and invoices, manage customers and manage material lists in the course of their commercial or self-employed professional activity (B2B). Use by consumers within the meaning of § 13 BGB is not intended.",
      "(3) Deviating, conflicting or supplementary general terms and conditions of the user are hereby rejected; they do not become part of the contract unless the Provider expressly agrees to their validity in writing.",
    ],
  },
  {
    heading: "§ 2 Subject Matter and Description of Services",
    paragraphs: [
      "(1) The Provider makes the App available to the user via the Google Play Store. The App offers in particular the following functions:",
    ],
    list: [
      "Creation, management and export (PDF) of quotes",
      "Creation of invoices, partial, final and cancellation invoices with sequential invoice numbers, as a PDF with an embedded e-invoice (ZUGFeRD / Factur-X, profile EN 16931) or as an XRechnung for public-sector clients",
      "Management of customer data",
      "Management of a material price list",
      "AI-supported analysis of photos, voice recordings and text descriptions for the automated creation of quote suggestions",
      "Digital signature capture",
      "Free-form notes and dictation",
      "Export of the user's own data",
      "Support for a GoBD-compliant way of working (German principles for proper electronic bookkeeping): immutable archiving of sent quotes and invoices, change log, export for tax advisors and tax audits (ZIP archive according to the description standard for data provision, DATEV posting batch) and a template for the process documentation",
    ],
    afterList: [
      "(2) The App is offered as a free trial version (3 free AI-supported quotes, no credit card required) and in paid subscription plans (“Solo”, “Small Business”, “Pro”). The range of functions of each plan is as shown in the App at the time the contract is concluded.",
      "(3) The suggestions created by the App with AI support (material recognition, working time estimates) are non-binding suggestions. The user is obliged to check all automatically generated information for accuracy and completeness before using it in a quote or invoice. The Provider gives no guarantee for the accuracy of AI-generated content.",
      "(4) The Provider is entitled to adapt, extend or restrict the range of functions of the App in the course of technical development, provided this is reasonable for the user and the contractually agreed core scope of the respective service booked is maintained.",
      "(5) The App supports a GoBD-compliant way of working; it is not a certified accounting system and replaces neither bookkeeping nor tax advice. Responsibility for the correctness of the records, for complete process documentation and for the account assignment in the DATEV export agreed with the tax advisor lies with the user.",
    ],
  },
  {
    heading: "§ 3 Conclusion of Contract, Registration",
    paragraphs: [
      "(1) Registration with a valid e-mail address and a self-chosen password is required to use the App.",
      "(2) Upon completion of registration, a usage agreement for the free trial version is concluded between the user and the Provider.",
      "(3) A paid subscription is taken out by selecting a plan within the App and confirming the purchase via Google Play Billing. Upon completion of the purchase via Google Play, the subscription contract is concluded between the user and the Provider. The Google Play Terms of Service apply in addition.",
      "(4) The user is obliged to provide truthful information when registering and to update it without delay in the event of a change.",
    ],
  },
  {
    heading: "§ 4 Prices, Payment, Subscription, Cancellation",
    paragraphs: [
      "(1) The prices displayed in the App at the time the contract is concluded apply. All prices include statutory VAT, where applicable.",
      "(2) Automatic renewal: Paid subscriptions renew automatically for the selected billing period (monthly) unless they are cancelled via the Google Play account settings at least 24 hours before the end of the current period.",
      "(3) Cancellation: A subscription can only be cancelled via Google Play subscription management (Google Play Store → Subscriptions). The Provider itself has no direct access to the cancellation of the Google Play subscription.",
      "(4) Payment processing: All payment processing takes place via Google Play Billing. At no time does the Provider obtain knowledge of the user's payment details (e.g. credit card numbers).",
      "(5) In the event of non-payment or a chargeback of a subscription amount due, the Provider is entitled to block access to the paid functions until the outstanding amount has been paid.",
      "(6) As the user is not a consumer (§ 1(2)), there is generally no statutory right of withdrawal under § 355 BGB. Any withdrawal or refund claims against Google Play are governed exclusively by the Google Play terms.",
    ],
  },
  {
    heading: "§ 5 User Obligations",
    paragraphs: [
      "(1) The user is solely responsible for all data entered in the App or processed via the App (in particular customer data, quote and invoice data, photos).",
      "(2) When processing personal data of third parties (in particular their own customers) via the App, the user undertakes to comply with the applicable data protection regulations, in particular the GDPR. In relation to their own customers, the user is the controller under data protection law within the meaning of Art. 4(7) GDPR.",
      "(3) When taking photos as part of the AI analysis function (e.g. on construction sites or in customers' homes), the user undertakes to ensure that no people or sensitive private documents are recognisably depicted, unless this is necessary for the provision of services and legally permissible.",
      "(4) The user undertakes to keep their access data (e-mail, password) secret and to protect it from access by third parties. The Provider must be informed without delay if misuse is suspected.",
      "(5) It is prohibited to use the App to create, store or distribute unlawful, offensive, discriminatory content or content that infringes the rights of third parties.",
      "(6) The user is solely responsible for the accuracy of the content of the quotes and invoices they create and send to their customers (including prices, tax information and the mandatory information under § 14 of the German VAT Act (UStG)). The Provider does not check the content. The App supports compliance with the mandatory information but does not replace tax advice.",
      "(7) The statutory retention obligations for invoices, quotes and other business records (in particular § 147 of the German Fiscal Code (AO), § 257 of the German Commercial Code (HGB), § 14b UStG) apply to the user. Invoices and quotes that led to an order must be retained for 8 years, quotes without a subsequent order for 6 years; in each case, the period begins at the end of the calendar year in which the document was created. Until the end of the retention period, the App stores sent quotes and invoices in an immutable form: corrections are only possible via a cancellation invoice or a new quote version with a new number, and a sent document can only be deleted after the period has expired.",
      "(8) After the retention period has expired, the Provider automatically deletes the affected documents, including PDF and e-invoice, on 31 March of the following year. From 1 October of the last retention year, the App points this out and offers the documents for download. If the retention period is extended in an individual case, for example due to a tax audit or an objection (§ 147(3) sentence 5 AO), the user must extend retention in the App in good time or back up the documents themselves beforehand. The Provider recommends additionally backing up the documents on a separate storage medium at least once a year via the export for tax advisors. Before cancellation or account deletion, the user must back up their records subject to retention themselves.",
    ],
  },
  {
    heading: "§ 6 AI-Supported Functions",
    paragraphs: [
      "(1) The AI-supported analysis of photos, voice recordings and text descriptions is primarily provided via Google Gemini (paid plan). If Google Gemini is temporarily unavailable, the request is automatically forwarded to OpenAI (GPT-4o) as a technical fallback so that the function can continue to be used. Use of this function requires the separate consent of the user pursuant to Art. 6(1)(a) GDPR, which can be withdrawn at any time in the App settings.",
      "(2) The results of the AI analysis are non-binding suggestions. The Provider accepts no liability for the accuracy, completeness or suitability of the AI-generated suggestions for the individual case.",
      "(3) Further information on data transfer in the context of the AI analysis can be found in the App's privacy policy.",
    ],
  },
  {
    heading: "§ 7 Rights of Use",
    paragraphs: [
      "(1) For the duration of the usage agreement, the Provider grants the user a simple, non-transferable and non-sublicensable right to use the App in accordance with its intended function.",
      "(2) All rights to the App itself (software, source code, design, trademarks) remain with the Provider or the respective rights holders. Reproduction, decompilation, modification or other use beyond the contractually agreed purpose is not permitted unless mandatorily permitted by law (e.g. § 69e of the German Copyright Act (UrhG)).",
      "(3) Data entered into the App by the user (quotes, invoices, customer data, material lists, logos) remains the property of the user. The Provider processes this data exclusively to provide the contractually owed service.",
    ],
  },
  {
    heading: "§ 8 Availability, Changes, Maintenance",
    paragraphs: [
      "(1) The Provider strives to ensure that the App is available with as few interruptions as possible but cannot guarantee 100% availability. Maintenance work, technical faults or outages at third-party providers used (in particular Supabase, Google, OpenAI, RevenueCat, Resend) may lead to temporary restrictions.",
      "(2) The Provider reserves the right to make technical adjustments to the App in the course of further development, provided this is reasonable for the user.",
      "(3) In the event of significant changes to these Terms, the Provider will inform the user in text form (e.g. by e-mail or in-app notice) within a reasonable period before they take effect. If the user does not object within 6 weeks of receiving the notice of change, the amended Terms are deemed accepted. The user will be expressly informed of this effect in the notice of change.",
    ],
  },
  {
    heading: "§ 9 Liability",
    paragraphs: [
      "(1) The Provider is liable without limitation for intent and gross negligence, in accordance with the provisions of the German Product Liability Act and in the event of injury to life, body or health.",
      "(2) In the event of a slightly negligent breach of an essential contractual obligation (cardinal obligation), the fulfilment of which makes the proper performance of the contract possible in the first place and on the observance of which the user may regularly rely, the Provider's liability is limited in amount to the foreseeable damage typical for the contract at the time the contract was concluded.",
      "(3) Otherwise, the Provider's liability for slight negligence is excluded.",
      "(4) The above limitations of liability do not apply to claims arising from the breach of data protection regulations insofar as these are mandatory under the GDPR.",
      "(5) The Provider accepts no liability for the accuracy of AI-generated content (§ 6(2)) or for content that the user enters into the App or sends to third parties via the App.",
      "(6) For damage caused by disruptions, outages or data loss at third-party providers used (Supabase, Google, OpenAI, RevenueCat, Resend, Google Play), the Provider is only liable insofar as it is at fault in selecting or monitoring these service providers.",
    ],
  },
  {
    heading: "§ 10 Data Protection",
    paragraphs: [
      "Information on the processing of personal data in connection with the use of the App can be found in the separate privacy policy, which is available in the App under “Settings → Privacy Policy” and online.",
    ],
  },
  {
    heading: "§ 11 Term, Termination of the Usage Agreement, Account Deletion",
    paragraphs: [
      "(1) The usage agreement for the free trial version is concluded for an indefinite period and can be terminated by either party at any time without notice.",
      "(2) Paid subscriptions run for the selected contract term (monthly) and renew automatically in accordance with § 4(2).",
      "(3) The user can have their user account irrevocably deleted at any time via the “Delete Account” function in the App settings. Deletion permanently removes all associated data, including quotes and invoices. The user must back up records subject to retention themselves beforehand (§ 5(7) and (8)); for this purpose, the App offers an export of all years before deletion.",
      "(4) The right of both parties to extraordinary termination for good cause remains unaffected. For the Provider, good cause exists in particular in the event of serious or repeated violations of these Terms by the user, in particular of § 5.",
    ],
  },
  {
    heading: "§ 12 Final Provisions",
    paragraphs: [
      "(1) The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).",
      "(2) If the user is a merchant within the meaning of the German Commercial Code, a legal entity under public law or a special fund under public law, the exclusive place of jurisdiction for all disputes arising from or in connection with this contract is the Provider's registered office (Isny im Allgäu).",
      "(3) Should individual provisions of these Terms be or become invalid, the validity of the remaining provisions shall remain unaffected. The invalid provision shall be replaced by the statutory provision.",
      "(4) Amendments or supplements to these Terms require text form, unless the procedure under § 8(3) applies.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: ["If you have any questions about these Terms, please contact:"],
    list: [
      "SimplyNext",
      "Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "E-Mail: info@simplynext.de",
      "Phone: +49 1743389049",
    ],
  },
];
