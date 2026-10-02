import type { LegalSection } from "../legal";

/**
 * Englische Fassung der Furly-Rechtstexte – Übersetzung von
 * furly/legal-site/{datenschutzerklaerung,nutzungsbedingungen}.md
 * (Stand: Oktober 2026). Nur zur Information, verbindlich bleibt die deutsche
 * Fassung.
 */

export const furlyDatenschutzEn: LegalSection[] = [
  {
    heading: "Controller & legal notice",
    list: [
      "SimplyNext",
      "Owner: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Germany",
    ],
  },
  {
    heading: "Contact",
    level: 3,
    list: [
      "Phone: +49 174 3389049",
      "Email: info@simplynext.de",
    ],
  },
  {
    heading: "VAT identification number",
    level: 3,
    paragraphs: [
      "Pursuant to Section 27a of the German VAT Act (UStG): DE463824630",
    ],
  },
  {
    heading: "Professional title and professional regulations",
    level: 3,
    list: [
      "Professional title: App developer",
      "Awarded in: Germany",
    ],
  },
  {
    heading: "Data protection officer",
    level: 3,
    paragraphs: [
      "No data protection officer has been appointed, as the legal requirements for this are not met. For all data protection matters, you can reach us at the email address above.",
    ],
  },
  {
    heading: "1. Principles and overview",
    paragraphs: [
      "Furly is an app for pet owners: pet profiles, health record, reminders, daily routine, a places finder, emergency card and guide, an AI assistant, Lost & Found functions and the optional subscription Furly Pro. We process personal data exclusively in order to provide these functions.",
      "Below you will find an overview. The details of each processing operation are set out in the respective sections.",
    ],
    table: {
      head: ["Type of data", "Purpose", "Legal basis", "Recipient"],
      rows: [
        ["Email address, password hash, account ID", "Registration, sign-in, account management", "Art. 6(1)(b) GDPR (contract)", "Supabase"],
        ["Display name, profile picture", "Profile, display in the community", "Art. 6(1)(b) GDPR", "Supabase"],
        ["Pet profiles (name, species, breed, date of birth, weight, photo, description)", "Core function of the app", "Art. 6(1)(b) GDPR", "Supabase"],
        ["Health record (treatments, vaccinations, vet and clinic name, costs, notes)", "Health documentation of your pet", "Art. 6(1)(b) GDPR", "Supabase"],
        ["Reminders", "Appointment and task reminders", "Art. 6(1)(b) GDPR", "Supabase"],
        ["Vet details entered yourself", "Personal list of vets", "Art. 6(1)(b) GDPR", "Supabase"],
        ["Community posts, likes", "Voluntarily shared content", "Art. 6(1)(b) GDPR", "Supabase"],
        ["Lost & Found posts incl. contact details, location found, photo", "Reports for missing/found animals", "Art. 6(1)(a) GDPR (consent by actively publishing)", "Supabase, other users"],
        ["Furly Chat messages, chat history", "AI assistant, history across devices", "Art. 6(1)(a) GDPR (consent)", "Supabase, Google (Gemini API, USA)"],
        ["AI training plans (goal, pet profile, generated plan)", "Individual training plans", "Art. 6(1)(a) GDPR (consent)", "Supabase, Google (Gemini API, USA)"],
        ["Location data (last known position, notification radius)", "Places finder, Lost & Found radius, radius notifications", "Art. 6(1)(a) GDPR (consent via system dialog)", "Supabase, Google Maps"],
        ["Subscription data (account ID, product, term, expiry date, receipt of the store transaction)", "Furly Pro: purchase, activation, restoring", "Art. 6(1)(b) GDPR", "RevenueCat, Google Play, Supabase"],
        ["Counter of chat messages per day", "Daily quota of the free version", "Art. 6(1)(b) GDPR", "Supabase"],
        ["Device push token (FCM)", "Push notifications", "Art. 6(1)(a) GDPR (consent)", "Supabase, Google (Firebase)"],
        ["Reports of content (reason, reported content, reporter ID)", "Moderation, combating abuse", "Art. 6(1)(f) GDPR (legitimate interest)", "Supabase"],
        ["Server log data (IP address, timestamp, technical metadata)", "Operation, security, troubleshooting", "Art. 6(1)(f) GDPR", "Supabase"],
      ],
    },
  },
  {
    heading: "2. Account and sign-in",
    paragraphs: [
      "An account is required to use Furly. You can register or sign in in three ways:",
    ],
    list: [
      "Email and password: We store your email address and a cryptographic hash of your password (the password itself is never stored in plain text). To confirm your email address and for “Forgot password”, we send emails via our backend provider Supabase.",
      "Sign in with Google: If you choose this option, you are redirected to Google. Google then transmits your email address, your name and, if applicable, your profile picture to us. Google learns that you are signing in to Furly.",
      "Sign in with Apple: As with Google. Apple offers you the option of hiding your real email address and using an anonymous forwarding address instead.",
    ],
    afterList: [
      "Legal basis: Art. 6(1)(b) GDPR (performance of the user contract). Google and Apple are each independently responsible for the data processing they carry out in the context of sign-in; their privacy policies apply.",
    ],
  },
  {
    heading: "3. Pet profiles, health record and reminders",
    paragraphs: [
      "You can create profiles of your pets (name, breed, date of birth, weight, photo, free description), document health entries and set reminders.",
      "Important note on third-party data",
      "In the health record you can optionally enter names of vets and clinics, as well as in your personal list of vets. These are personal data of third parties. Please only enter such data to the extent necessary for your own documentation, and do not publish it in the community.",
      "This data is stored in our database and is assigned exclusively to your account. Other users have no access to it (technically secured by row-based access rules, “Row Level Security”).",
      "Vet folder (PDF): At your request, the app creates a PDF from the pet profile, health record, vaccinations and weight history. It is created exclusively on your device; you decide via your device's share dialog to whom you pass it on. We do not receive the PDF.",
      "Legal basis: Art. 6(1)(b) GDPR.",
    ],
  },
  {
    heading: "4. Furly Chat (AI assistant) and AI training plans",
    paragraphs: [
      "Furly Chat answers questions about keeping, feeding, caring for and the health of your pet. The function is optional.",
    ],
  },
  {
    heading: "What data is transmitted",
    level: 3,
    paragraphs: [
      "To generate an answer, we transmit the following data to Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland (Gemini API; processing also in the USA):",
    ],
    list: [
      "your current message and up to 20 previous messages of the same conversation,",
      "the profile data of the selected pet (name, breed, age, weight),",
      "for training plans additionally the training goal you have chosen.",
    ],
    afterList: [
      "Access to the AI takes place exclusively via our own server; no API key is stored in the app and your messages are not sent directly from your device to Google.",
    ],
  },
  {
    heading: "Consent",
    level: 3,
    paragraphs: [
      "Before first use, a notice is displayed in the app explaining the transmission to Google. Transmission only takes place after your confirmation. You can withdraw this consent at any time with effect for the future by no longer using the function and deleting your chat history.",
    ],
  },
  {
    heading: "No AI training with your data",
    level: 3,
    paragraphs: [
      "Under the applicable terms, Google does not use content transmitted via the API to train its AI models.",
    ],
  },
  {
    heading: "Storage and deletion",
    level: 3,
    paragraphs: [
      "Your chat history is stored in our database so that you can continue it across devices. You can permanently delete individual conversations or the entire history in the app at any time; the deletion takes place immediately in the database, and there is no restore function.",
    ],
  },
  {
    heading: "Limits of the function",
    level: 3,
    paragraphs: [
      "Furly Chat does not make diagnoses and does not replace veterinary advice, examination or treatment. If indications of an emergency are detected in your message, no AI answer is generated; instead, you are referred directly to veterinary help. You can object to AI-generated answers via the report function.",
      "Legal basis: Art. 6(1)(a) GDPR (consent); for storing the history additionally Art. 6(1)(b) GDPR.",
    ],
  },
  {
    heading: "4a. Furly Pro (subscription) and payment processing",
    paragraphs: [
      "Furly Pro is an optional subscription (see section 3 of the Terms of Use). If you do not take it out, the following processing only takes place to the extent necessary to display the offers.",
    ],
    list: [
      "Google Play (payment): The purchase is made via the Google Play billing system. Google processes your payment data under its own responsibility; we do not receive any payment data such as card numbers, only confirmation of the purchase (product, time, term, order ID).",
      "RevenueCat (subscription management): We use the RevenueCat service for purchase, renewal, cancellation and restoring. The app transmits your Furly account ID (a random identifier, not your email address), the Google Play receipts and technical information about the device and the app (e.g. operating system, app version, language, store country, IP address). RevenueCat verifies the receipts with Google and reports the subscription status to us.",
      "Our server: We store the subscription status (active yes/no, product, term, expiry date) with your account so that the Pro functions are unlocked on all your devices. For the daily quota in Furly Chat, we count the number of your messages per calendar day; the content of the messages is not evaluated for this. Emergency messages are not counted.",
    ],
    afterList: [
      "Legal basis: Art. 6(1)(b) GDPR (performance of the subscription contract). Retention obligations under tax and commercial law (Art. 6(1)(c) GDPR) concern billing at Google; insofar as receipts are held by us, section 15 applies.",
    ],
  },
  {
    heading: "5. Community and Lost & Found",
    paragraphs: [
      "In the community you can publish posts and mark posts by others with “Like”. Your display name and the content of your post are shown.",
      "Lost & Found – please decide consciously",
      "When you create a missing or found report, you actively publish the contact details you enter (e.g. phone number or email address), a location, the date and optionally a photo and location coordinates. This information is visible to all signed-in users and can be copied or passed on by them. Therefore only provide contact details whose publication you knowingly accept.",
      "You can delete your own posts at any time or mark a missing report as “resolved”. When your account is deleted, all your posts are also removed.",
      "Legal basis: Art. 6(1)(a) GDPR — publication takes place when you actively submit the post.",
    ],
  },
  {
    heading: "6. Location data",
    paragraphs: [
      "Furly processes location data for three different purposes:",
    ],
  },
  {
    heading: "a) Active use",
    level: 3,
    paragraphs: [
      "When you open the map or the radius search in Lost & Found, your current location is determined in order to show results near you and to centre the map. The Google Maps service is integrated for the map display.",
    ],
  },
  {
    heading: "b) Radius notifications",
    level: 3,
    paragraphs: [
      "If you have granted location permission, your last known position is transmitted to our server and stored there on each sign-in and session renewal (overwritten each time; no movement profile is created). We need this information in order to be able to notify you when a missing or found animal is reported in your area. The notification radius is 25 km by default.",
    ],
  },
  {
    heading: "c) Places finder",
    level: 3,
    paragraphs: [
      "When you search in the places finder, the app sends your current location and the selected categories to our server. From this, the server determines the matching map sections (grid of about 25 km) and returns the places with their distance. Your exact position is not stored; only the public place data per map section is cached.",
      "The place data comes from OpenStreetMap (© OpenStreetMap contributors, ODbL licence). If it is missing from the cache, our server requests it from the Overpass service, using only the boundaries of the map section – neither your position nor your account ID is transmitted to Overpass. Places you save are stored by the app only on your device.",
      "Before the system prompt, we explain in the app what the location is used for. You can withdraw the permission at any time in your device's settings; Furly then continues to work, only the map and radius functions and radius notifications are no longer available.",
      "No background tracking: Furly does not record your location permanently in the background. The app does not request background location permission.",
      "Legal basis: Art. 6(1)(a) GDPR (consent via the permission prompt).",
    ],
  },
  {
    heading: "7. Push and local notifications",
    paragraphs: [
      "For push notifications (e.g. Lost & Found reports near you), a device-specific token is generated via Firebase Cloud Messaging, which we assign to your account and store. This token enables notifications to be delivered to your device; Google receives technical delivery information in the process.",
      "Reminders of appointments and tasks are additionally scheduled as local notifications directly on your device. No data leaves your device for this. So that scheduled reminders survive a device restart, the app uses the permission RECEIVE_BOOT_COMPLETED.",
      "You can deactivate notifications at any time in the app or system settings.",
      "Legal basis: Art. 6(1)(a) GDPR (consent via the notification permission).",
    ],
  },
  {
    heading: "8. Photos, camera and photo library",
    paragraphs: [
      "You can upload a profile picture, photos of your pets and photos for Lost & Found reports. They are selected either from your photo library or via your device's camera. The app does not access the camera itself but starts the system camera app; selected images are processed only after your selection.",
      "The images are stored in separate storage areas that are not publicly accessible:",
    ],
    table: {
      head: ["Area", "Content", "Visibility", "Max. size"],
      rows: [
        ["avatars", "Profile pictures", "only you or display of your profile", "2 MB"],
        ["pet-images", "Pet photos", "only you", "5 MB"],
        ["lost-found-images", "Photos in missing reports", "all signed-in users", "5 MB"],
      ],
    },
    afterList: [
      "Please note that photos may contain additional technical information (e.g. the location where they were taken in the EXIF data). Check this before you publish photos in Lost & Found.",
      "Legal basis: Art. 6(1)(b) GDPR; when publishing in Lost & Found Art. 6(1)(a) GDPR.",
    ],
  },
  {
    heading: "9. Data stored locally on your device",
    paragraphs: [
      "Entries on weight, feeding and activity, the daily routine (tasks and ticks), the saved-articles list in the guide, saved places and app settings (e.g. language, design) are stored exclusively locally on your device. This data is not transmitted to our servers.",
      "The emergency card, poison hotline numbers and guide articles are built into the app and work without an internet connection; no data is transmitted when reading them. The fonts are also contained in the app; no fonts are loaded from Google Fonts or other servers.",
      "Via the function “Backup & restore” in the settings, you can export this data yourself. The export only takes place on your express action; you alone decide where you save or pass on the exported file.",
      "When you delete your account, the app removes this local data as well. It is also removed from the device when the app is uninstalled.",
    ],
  },
  {
    heading: "10. Server log data",
    paragraphs: [
      "When our server infrastructure is accessed, connection data is processed for technical reasons, in particular IP address, time of the request, endpoint called and status code. This data serves secure operation, the detection of abuse and error analysis and is only kept for a short time.",
      "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in secure and functional operation).",
    ],
  },
  {
    heading: "11. Reports of content (moderation)",
    paragraphs: [
      "You can object to community posts, Lost & Found reports and AI answers via the report function. We store the reported content, the reason given, the time and your account ID in order to detect multiple reports and abuse of the report function. Reports are not visible to other users.",
      "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in a safe platform).",
    ],
  },
  {
    heading: "12. App permissions at a glance",
    table: {
      head: ["Permission", "Purpose", "Required?"],
      rows: [
        ["Location (precise/approximate)", "Vet map, Lost & Found radius, radius notifications", "optional"],
        ["Notifications", "Reminders, Lost & Found reports", "optional"],
        ["Camera (via system app)", "Taking pet and profile photos", "optional"],
        ["Photo library (via system picker)", "Uploading existing photos", "optional"],
        ["Start after device restart", "Scheduled reminders survive a restart", "technically necessary"],
      ],
    },
    afterList: [
      "Furly does not request microphone, contacts, calendar, phone or SMS permissions or access to call logs.",
    ],
  },
  {
    heading: "13. Recipients and processors",
    table: {
      head: ["Service", "Purpose", "Provider", "Place of processing"],
      rows: [
        ["Supabase (database, authentication, file storage, server functions)", "Operation of all account data and app content", "Supabase Inc., USA", "Data centre in the EU (Frankfurt am Main)"],
        ["Google Gemini API", "Generation of AI answers in Furly Chat and for training plans — only after consent", "Google Ireland Limited, Ireland / Google LLC, USA", "USA"],
        ["Firebase Cloud Messaging", "Delivery of push notifications", "Google Ireland Ltd. / Google LLC", "EU / USA"],
        ["Google Maps Platform", "Map display for vet search and Lost & Found", "Google Ireland Ltd. / Google LLC", "EU / USA"],
        ["Google Sign-In (optional)", "Sign-in with a Google account", "Google Ireland Ltd. / Google LLC", "EU / USA"],
        ["Sign in with Apple (optional)", "Sign-in with an Apple account", "Apple Inc. / Apple Distribution International Ltd.", "EU / USA"],
        ["Google Play", "Distribution and updating of the app; payment processing for Furly Pro (Google's own responsibility)", "Google Ireland Ltd. / Google LLC", "EU / USA"],
        ["RevenueCat", "Subscription management for Furly Pro (purchase verification, status, restoring)", "RevenueCat, Inc., USA", "USA"],
        ["OpenStreetMap / Overpass API", "Source of place data in the places finder; queried only by our server using map sections, without personal data", "OpenStreetMap Foundation or operator of the Overpass instance", "EU"],
      ],
    },
    afterList: [
      "Data processing agreements pursuant to Art. 28 GDPR are in place with the providers acting as processors.",
    ],
  },
  {
    heading: "14. Transfers to third countries",
    paragraphs: [
      "Insofar as data is transferred to the USA, this takes place on the basis of appropriate safeguards under Chapter V GDPR:",
    ],
    list: [
      "Google Ireland Limited (Ireland/USA): Transfer of chat content and pet profile data on the basis of your express consent (Art. 49(1)(a) GDPR) and additionally on the basis of the EU Commission's Standard Contractual Clauses (Art. 46(2)(c) GDPR).",
      "Google LLC (USA): Transfer on the basis of the EU-US Data Privacy Framework, under which Google is certified, and additionally the Standard Contractual Clauses.",
      "RevenueCat, Inc. (USA): Transfer of subscription data (section 4a) on the basis of the EU Commission's Standard Contractual Clauses (Art. 46(2)(c) GDPR).",
      "Supabase Inc. (USA): Your data is stored in a data centre within the EU. Access from the USA (e.g. in the context of support and maintenance) cannot be ruled out and takes place on the basis of the Standard Contractual Clauses.",
    ],
    afterList: [
      "Despite these safeguards, it cannot be completely ruled out that US authorities access data on the basis of US law and that there is no legal protection against this that corresponds to the European level. If you wish to avoid this, please do not use the Furly Chat and training plan functions.",
    ],
  },
  {
    heading: "15. Retention periods",
    table: {
      head: ["Data", "Retention period"],
      rows: [
        ["Account and profile data", "until your account is deleted"],
        ["Pet profiles, health record, reminders, list of vets", "until you delete the respective entry or until the account is deleted"],
        ["Chat histories and training plans", "until you delete them or until the account is deleted"],
        ["Subscription status (Furly Pro)", "until the account is deleted; at RevenueCat until the customer account is deleted, which we arrange when you delete your account"],
        ["Counter of chat messages per day", "until the account is deleted; only the number per day, no content"],
        ["Community and Lost & Found posts incl. photos", "until you delete them or until the account is deleted"],
        ["Location", "only the most recent position is stored (overwritten); deleted with the account"],
        ["Device push token", "until notifications are revoked, the app is uninstalled or the account is deleted"],
        ["Reports of content", "until the review is completed, no longer than 12 months"],
        ["Server log data", "short term, usually a few days"],
      ],
    },
    afterList: [
      "Where statutory retention obligations exist, the data concerned is blocked instead of deleted until the respective period expires.",
    ],
  },
  {
    heading: "16. Deleting your account and data",
    list: [
      "You can delete your account yourself and completely at any time:",
      "App → Profile → Settings → Delete account",
    ],
    afterList: [
      "The following is irrevocably deleted:",
    ],
  },
  {
    list: [
      "your account including sign-in data,",
      "profile and profile picture,",
      "all pet profiles, health record and vaccination entries as well as reminders,",
      "your list of vets,",
      "all chat histories and training plans,",
      "all community posts, likes and Lost & Found reports,",
      "stored location and device push token,",
      "the subscription status and the counters of the chat quota; we arrange the deletion of your customer account at RevenueCat,",
      "all photos you have uploaded in all storage areas.",
    ],
    afterList: [
      "The deletion takes place immediately and cannot be undone. The app also deletes the data stored locally on your device (weight, feeding, activity, calendar notes, daily routine, saved articles). Deleting your account does not cancel a running subscription: please cancel Furly Pro in Google Play beforehand, otherwise Google will continue to renew it. Irrespective of this, you can remove the local data at any time by uninstalling the app.",
      "If you no longer have access to the app, you can request deletion informally by email to info@simplynext.de. We will confirm receipt and carry out the deletion without undue delay, at the latest within 30 days.",
    ],
  },
  {
    heading: "17. Your rights under the GDPR",
    paragraphs: [
      "You have the following rights:",
    ],
    list: [
      "Access to the data stored about you (Art. 15 GDPR)",
      "Rectification of inaccurate data (Art. 16 GDPR)",
      "Erasure (Art. 17 GDPR) — see section 16",
      "Restriction of processing (Art. 18 GDPR)",
      "Data portability in a common format (Art. 20 GDPR)",
      "Objection to processing based on legitimate interests (Art. 21 GDPR)",
      "Withdrawal of consent given with effect for the future (Art. 7(3) GDPR) — for example for Furly Chat, location or notifications",
    ],
    afterList: [
      "An informal email to info@simplynext.de is sufficient to exercise these rights.",
      "Irrespective of this, you have the right to lodge a complaint with a data protection supervisory authority (Art. 77 GDPR), in particular in the member state of your place of residence, your place of work or the place of the alleged infringement.",
      "The supervisory authority responsible for us is:",
      "Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg",
      "Lautenschlagerstraße 20, 70173 Stuttgart, Germany",
      "https://www.baden-wuerttemberg.datenschutz.de",
    ],
  },
  {
    heading: "18. What Furly does not do",
    list: [
      "We do not sell your data and do not pass it on for advertising purposes.",
      "Furly contains no advertising and no advertising SDKs.",
      "Furly contains no analytics or tracking tools (no analytics, no crash reporting SDK, no usage profiles).",
      "No automated decisions with legal effect or similarly significant impairment within the meaning of Art. 22 GDPR are made.",
      "Fonts are built into the app; no fonts are loaded from external servers (e.g. Google Fonts).",
      "No advertising IDs or cross-device identifiers are collected for marketing purposes.",
    ],
  },
  {
    heading: "19. Children and young people",
    paragraphs: [
      "Furly is aimed at adults and is not intended for children. In particular, the AI assistant and Lost & Found with publicly visible contact details require an adult understanding. We do not knowingly collect data from children under 16. Should we become aware that an account has been created without the required consent of the legal guardians, we will delete it.",
    ],
  },
  {
    heading: "20. Data security",
    paragraphs: [
      "Transmission between the app and the server is always encrypted (TLS/HTTPS). Access to database content is secured by row-based access rules so that each account can only access its own data. File storage areas are not publicly accessible. Passwords are stored exclusively as a cryptographic hash. The access key to the AI interface is held exclusively on the server side and is not contained in the app.",
    ],
  },
  {
    heading: "21. Changes to this policy",
    paragraphs: [
      "We adapt this policy when our data processing changes. The current version is always available at the address linked in the app. In the event of significant changes, we will also inform you in the app.",
    ],
  },
];

export const furlyAgbEn: LegalSection[] = [
  {
    heading: "Provider",
    list: [
      "SimplyNext",
      "Full provider details: see legal notice (https://www.simplynext.de/en/apps/furly/impressum)",
    ],
  },
  {
    list: [
      "Phone: +49 174 3389049",
      "Email: info@simplynext.de",
      "VAT ID pursuant to Section 27a of the German VAT Act (UStG): DE463824630",
    ],
    afterList: [
      "(hereinafter “provider”, “we” or “us”)",
    ],
  },
  {
    heading: "1. Scope",
    paragraphs: [
      "1.1 These Terms and Conditions (hereinafter “Terms”) govern the contractual relationship between the provider and the users (hereinafter “you” or “user”) of the mobile application Furly (hereinafter “app”).",
      "1.2 By registering a user account, you accept these Terms as binding.",
      "1.3 Deviating or supplementary terms of users do not become part of the contract unless we expressly agree to their validity in text form.",
      "1.4 Our privacy policy, which governs the handling of personal data, applies in addition.",
      "1.5 The app is provided via the Google Play distribution channel. For obtaining the app via this store, the terms of the respective store operator apply in addition; these Terms govern exclusively the relationship between you and us.",
    ],
  },
  {
    heading: "2. Subject matter of the contract and description of services",
    paragraphs: [
      "2.1 Furly is an application for pet owners. It includes in particular:",
    ],
    list: [
      "creating and managing pet profiles for dogs, cats, small animals, birds and other animals,",
      "documenting health and vaccination entries (digital health record) and exporting them as a PDF (“vet folder”),",
      "reminders of appointments and recurring tasks as well as a daily routine to tick off,",
      "recording weight, feeding and activity,",
      "a places finder for vets, dog parks, pet supplies and other places based on OpenStreetMap,",
      "an emergency card with first aid information and poison hotline numbers as well as a guide with a poison check (editorial content, also without an internet connection),",
      "an AI-supported assistant (“Furly Chat”) and AI-generated training plans,",
      "training guides (editorial content),",
      "a community function for exchanging with other users (currently not activated),",
      "a lost & found function for missing and found pet reports including a missing poster.",
    ],
    afterList: [
      "2.2 The app is intended for private use and personal organisation. It is not a medical device and not a veterinary advice, diagnosis or treatment service.",
      "2.3 There is no entitlement to the provision of individual functions in unchanged form. The range of functions may change in the course of further development (see section 11).",
    ],
  },
  {
    heading: "3. Free use and Furly Pro",
    paragraphs: [
      "3.1 Free use. The basic functions of the app are free of charge. Permanently free are in particular: health record and vaccination record, Lost & Found including missing poster, emergency card, poison check, reading the guide, the places finder with all categories, one pet profile, reminders, the daily routine and the training exercises.",
      "3.2 Furly Pro. For a fee, you can take out the subscription “Furly Pro”. It extends the app with:",
    ],
    list: [
      "any number of pet profiles (free: one),",
      "Furly Chat without a daily quota (free: five messages per day),",
      "any number of AI training plans (free: one to try out),",
      "the vet folder as a PDF,",
      "statistics and weight history over the entire period (free: the last 30 days),",
      "a saved-articles list in the guide.",
    ],
    afterList: [
      "Emergency functions (emergency card, poison hotline, emergency notices in the chat) are never restricted.",
      "3.3 Term and price. Furly Pro is available as a monthly subscription and as a yearly subscription. The applicable price including VAT is shown to you before purchase in the app and in the Google Play purchase dialog. A free trial period may be offered for the yearly subscription; its duration is shown before purchase.",
      "3.4 Conclusion of contract and payment. The purchase is made exclusively via the Google Play billing system. Payment is handled by Google; the Google Play terms apply in addition. You conclude the contract for the Pro services with us as soon as you confirm the purchase in the Google Play purchase dialog.",
      "3.5 Automatic renewal. The subscription renews automatically for the selected term (one month or one year) unless you cancel it at least 24 hours before the end of the current period. A free trial period automatically converts into the paid subscription unless you cancel before it ends; payment is only charged afterwards.",
      "3.6 Cancellation. You can cancel the subscription at any time in Google Play (Google Play → Profile → Payments & subscriptions → Subscriptions → Furly), also via the link “Manage subscription in Google Play” in the app. The cancellation takes effect at the end of the current period; Furly Pro remains active until then. There is no pro rata refund for partial periods unless otherwise required by law.",
      "3.7 Restoring. After changing devices or reinstalling, you can reassign an existing subscription to your account via “Restore purchases” in the app. Furly Pro is tied to your Furly account.",
      "3.8 Price changes. Price changes for existing subscriptions are announced to you via Google Play in good time before they take effect. Where Google Play requires your consent for this, the new price only applies after your consent; without consent the subscription ends at the end of the current period.",
      "3.9 You bear the costs of data transmission charged by your mobile or internet provider yourself.",
    ],
  },
  {
    heading: "4. Registration, user account and minimum age",
    paragraphs: [
      "4.1 Use requires the creation of a user account. Registration is possible with an email address and password or via the sign-in services of Google or Apple.",
      "4.2 Truthful information must be provided when registering. Changes must be updated in the profile.",
      "4.3 Minimum age: The app is aimed at persons aged 16 and over. Persons under 16 may only use the app with the consent of their legal guardians.",
      "4.4 You are obliged to keep your access data secret and to protect it from access by third parties. If misuse is suspected, please inform us without delay at info@simplynext.de.",
      "4.5 As a rule, one account is to be created per person. Passing the account on to third parties is not permitted.",
    ],
  },
  {
    heading: "5. Rights of use of the app",
    paragraphs: [
      "5.1 For the duration of the contractual relationship, we grant you a simple, non-transferable, non-sublicensable and revocable right to use the app as intended on the devices you use.",
      "5.2 In particular, the following are not permitted:",
    ],
    list: [
      "copying, editing, decompiling or reverse engineering the app, unless mandatorily permitted by law (Section 69e of the German Copyright Act, UrhG),",
      "circumventing technical protection measures or access restrictions,",
      "automated extraction of content (scraping, crawling) or the use of bots,",
      "using the app or its content to train your own or third-party AI models,",
      "any load on our servers beyond use in accordance with the contract.",
    ],
    afterList: [
      "5.3 All rights to the app, its editorial content, trademarks, logos and design elements remain with us or the respective rights holders.",
    ],
  },
  {
    heading: "6. Obligations of users",
    paragraphs: [
      "6.1 You undertake to comply with applicable law when using the app and not to post or transmit any content that",
    ],
    list: [
      "violates criminal laws,",
      "is insulting, defamatory, threatening, discriminatory, inflammatory or glorifies violence,",
      "is pornographic or violates the protection of minors,",
      "infringes the rights of third parties (in particular copyright, trademark, personality or data protection rights),",
      "shows, trivialises or instructs in cruelty to animals,",
      "is misleading or serves to deceive (e.g. false found or missing reports),",
      "contains advertising, spam, chain letters or pyramid schemes,",
      "contains malware or malicious code.",
    ],
    afterList: [
      "6.2 You ensure that you hold the necessary rights to all content you upload — in particular photos. If a photo shows identifiable persons, you need their consent.",
      "6.3 You may only enter personal data of third parties (e.g. names of vets) to the extent that this is necessary for your own documentation. Publishing such data in the community is not permitted.",
      "6.4 You are responsible for the accuracy of your own information and contributions.",
      "6.5 You indemnify us against all claims by third parties asserted against us on the basis of a culpable breach of these obligations, including reasonable costs of legal defence.",
    ],
  },
  {
    heading: "7. User-generated content and grant of rights",
    paragraphs: [
      "7.1 Content that you post in the app (posts, photos, comments, missing reports) remains your content. We do not claim ownership of it.",
      "7.2 For technical provision, you grant us a simple, free-of-charge, territorially unlimited right of use to store and reproduce this content and to display it within the app to the user groups intended for it. This right is limited to the operation of the app and ends with the deletion of the respective content, unless a statutory retention obligation prevents this.",
      "7.3 Your content is not used for advertising purposes, passed on to third parties for their own purposes or used to train AI models.",
      "7.4 You can delete your content yourself at any time. When your account is deleted, all content you have posted is removed.",
    ],
  },
  {
    heading: "8. Furly Chat and AI training plans",
    paragraphs: [
      "8.1 Furly Chat is an AI-supported assistant. The answers are generated automatically and may be incomplete, out of date or incorrect in content.",
      "Important",
      "Furly Chat does not replace veterinary advice, examination, diagnosis or treatment. If your pet has health problems, please contact a vet; in emergencies, contact a veterinary emergency clinic or the veterinary emergency service without delay.",
      "8.2 Use is optional and requires separate consent to the transmission of your inputs to our AI service provider (details in the privacy policy, section 4).",
      "8.3 If indications of an emergency are detected in a request, no AI answer on the substance is generated; instead, you are referred to veterinary help. This detection is automated and may be wrong; it does not replace your own assessment of the situation.",
      "8.4 AI-generated training plans are non-binding suggestions. You implement them at your own responsibility, taking into account the individual health and temperament of your pet.",
      "8.5 It is prohibited to use the assistant for unlawful purposes, to circumvent security mechanisms or to load the interface in an automated or abusive manner.",
      "8.6 You can object to AI-generated answers via the report function.",
    ],
  },
  {
    heading: "9. Lost & Found — special notes",
    paragraphs: [
      "9.1 In missing and found reports you yourself publish the information you enter, in particular contact details, location, date and optionally a photo and location coordinates.",
      "Important",
      "This information is visible to all signed-in users and can be copied, stored or passed on by them. Therefore only provide contact details whose publication you knowingly accept.",
      "9.2 We do not check reports for accuracy and assume no liability for their completeness, timeliness or truthfulness.",
      "9.3 Contact and any further communication between users takes place outside the app and at your own responsibility. We are not involved in any agreements concluded between users and do not become a contracting party.",
      "9.4 Please be careful when handing over animals and when dealing with strangers. Arrange meetings in public places where possible.",
      "9.5 Abusive reports — in particular invented found reports or those with fraudulent intent — lead to immediate removal and may result in the account being blocked.",
    ],
  },
  {
    heading: "10. Reporting and moderation procedure",
    paragraphs: [
      "10.1 You can object to content in the community, in Lost & Found and to answers of the AI assistant via the integrated report function.",
      "10.2 We review incoming reports within a reasonable period. In the event of violations of these Terms or applicable law, we may remove or block content.",
      "10.3 Independently of the report function, you can report violations at any time by email to info@simplynext.de.",
      "10.4 We reserve the right to block the account concerned temporarily or permanently in the event of repeated or serious violations (see section 13).",
      "10.5 We will inform you about the removal of your own content where this is possible and legally permissible. You can object to the decision by email; we will review the objection again.",
    ],
  },
  {
    heading: "11. Availability and changes to the app",
    paragraphs: [
      "11.1 We endeavour to ensure availability with as few interruptions as possible, but do not owe a specific availability rate. In particular, maintenance work, disruptions at service providers used and circumstances beyond our control may lead to temporary restrictions.",
      "11.2 Individual functions require an existing internet connection, activated system permissions and third-party services (e.g. map display, push delivery). Their failure may restrict usability.",
      "11.3 We may further develop the app and change, add or discontinue functions, insofar as this is reasonable for you. We will inform you of significant restrictions of the range of functions within a reasonable period in the app or by email.",
      "11.4 We recommend that you regularly make your own backups of your data (function “Backup & restore” in the settings).",
    ],
  },
  {
    heading: "12. Liability",
    paragraphs: [
      "12.1 We are liable without limitation",
    ],
    list: [
      "in the event of intent and gross negligence,",
      "for injury to life, body or health,",
      "under the provisions of the German Product Liability Act,",
      "to the extent of a guarantee assumed by us.",
    ],
    afterList: [
      "12.2 In the event of simple negligence, we are only liable for the breach of a material contractual obligation (cardinal obligation) — i.e. an obligation whose fulfilment makes the proper performance of the contract possible in the first place and on whose observance you may regularly rely. In this case, liability is limited to the foreseeable damage typical of the contract at the time the contract was concluded.",
      "12.3 Otherwise, liability is excluded.",
      "12.4 We are not liable for",
    ],
  },
  {
    list: [
      "the accuracy, completeness or timeliness of content of the AI assistant and the AI training plans,",
      "content posted by other users,",
      "damage arising from contact or agreements between users,",
      "the loss of data insofar as this could have been avoided by proper and regular data backup on your part.",
    ],
    afterList: [
      "12.5 The above limitations of liability also apply in favour of our legal representatives and vicarious agents.",
      "12.6 The above provisions do not involve any change in the burden of proof to your disadvantage.",
    ],
  },
  {
    heading: "13. Term of contract, termination and blocking",
    paragraphs: [
      "13.1 The user contract is concluded for an indefinite period.",
    ],
    list: [
      "13.2 You can end the contract at any time without giving reasons by deleting your account in the app:",
      "Profile → Settings → Delete account",
    ],
    afterList: [
      "With the deletion, your data is irrevocably removed in accordance with section 16 of the privacy policy.",
      "13.3 If you no longer have access to the app, an informal email to info@simplynext.de is sufficient.",
      "13.4 We may terminate the contract with 14 days' notice to the end of the month in text form. The right to extraordinary termination for good cause remains unaffected.",
      "13.5 In the event of significant or repeated violations of these Terms, we may temporarily block your account or terminate it extraordinarily. Before a permanent block, we take your interests into account appropriately; in the event of serious violations (e.g. criminal offences, attempted fraud), an immediate block without prior notice is possible.",
      "13.6 Deleting your account does not automatically end a running subscription with Google Play. Please cancel Furly Pro in Google Play beforehand (section 3.6) so that no further payments are incurred.",
    ],
  },
  {
    heading: "14. Right of withdrawal",
    paragraphs: [
      "14.1 Free use. Insofar as you as a consumer have a statutory right of withdrawal in connection with the provision of digital content in exchange for the provision of personal data, you can exercise it within 14 days of conclusion of the contract (registration) without giving reasons. A clear declaration by email to info@simplynext.de or the deletion of your account in the app is sufficient.",
      "14.2 Furly Pro. When taking out Furly Pro, you as a consumer have a statutory right of withdrawal of 14 days. The right of withdrawal expires early if we have begun providing the Pro functions after you have expressly consented to our beginning before the withdrawal period expires and have confirmed your knowledge that you thereby lose your right of withdrawal.",
      "14.3 You can also request refunds for purchases via Google Play from Google in accordance with Google Play's refund policies.",
      "14.4 Irrespective of any right of withdrawal, you can delete your account yourself at any time without notice (section 13.2) and cancel your subscription at any time to the end of the term (section 3.6).",
    ],
  },
  {
    heading: "15. Changes to these Terms",
    paragraphs: [
      "15.1 We may change these Terms if this becomes necessary due to changes in the legal situation, supreme court case law, technical developments or an extension of the range of functions and does not unreasonably disadvantage you.",
      "15.2 We will inform you of intended changes at least 30 days before they take effect in the app or by email.",
      "15.3 If you do not object within this period and continue to use the app, the changes are deemed accepted. We will point out the significance of your silence separately in the change notice.",
      "15.4 If you object, you can end the contract at any time by deleting your account; in this case we may terminate with ordinary notice.",
    ],
  },
  {
    heading: "16. Dispute resolution",
    paragraphs: [
      "16.1 The European Commission has discontinued its online dispute resolution platform (ODR platform); it is therefore no longer linked.",
      "16.2 We are not obliged and in principle not willing to participate in dispute resolution proceedings before a consumer arbitration board (Section 36(1) no. 1 of the German Consumer Dispute Resolution Act, VSBG).",
      "16.3 If you have complaints or problems, please contact us directly first at info@simplynext.de. We endeavour to find a quick and amicable solution.",
    ],
  },
  {
    heading: "17. Final provisions",
    paragraphs: [
      "17.1 The law of the Federal Republic of Germany applies, excluding the UN Convention on Contracts for the International Sale of Goods. If you have your habitual residence in another country, the mandatory consumer protection provisions of that country remain unaffected.",
      "17.2 If the user is a merchant, a legal entity under public law or a special fund under public law, the place of jurisdiction for all disputes arising from this contractual relationship is our place of business. For consumers, the statutory places of jurisdiction apply.",
      "17.3 Should individual provisions of these Terms be or become invalid or unenforceable, the validity of the remaining provisions remains unaffected. The invalid provision is replaced by the statutory provision.",
      "17.4 Amendments and additions require text form. This also applies to the waiver of this form requirement.",
    ],
  },
];
