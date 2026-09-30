import type { LegalSection } from "../legal";

/**
 * Englische Fassung der Fabula-Rechtstexte – Übersetzung von
 * vory/docs/{datenschutzerklaerung,agb}.md (Stand: 15.09.2026).
 * Nur zur Information, verbindlich bleibt die deutsche Fassung.
 */

export const fabulaDatenschutzEn: LegalSection[] = [
  {
    heading: "1. Controller",
    paragraphs: [
      "The controller responsible for data processing within the meaning of the General Data Protection Regulation (GDPR) is:",
    ],
    list: [
      "SimplyNext",
      "Owner: Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Germany",
    ],
  },
  {
    list: [
      "Email: info@simplynext.de",
      "Phone: +49 1743389049",
      "VAT ID: DE463824630",
    ],
    afterList: [
      "(Details identical to the legal notice)",
      "No company data protection officer has been appointed, as the requirements of Art. 37 GDPR / Section 38 of the German Federal Data Protection Act (BDSG) are not met (sole proprietorship without at least 20 persons permanently engaged in the automated processing of personal data; no large-scale processing of special categories of personal data as a core activity).",
    ],
  },
  {
    heading: "2. The essentials in brief",
    paragraphs: [
      "Fabula invents audio stories for children. As a parent, you create characters (for example your child under their first name or a nickname), choose a genre and, if you like, a few keywords. From this, an artificial intelligence from OpenAI generates a story in five chapters and reads it aloud with a synthetic voice. New stories, characters and purchases are protected by a parent PIN; children only listen and do not enter anything.",
      "For this, personal data has to leave your device – unlike with a purely offline app:",
    ],
    list: [
      "Your user account (email address, password) is held by our hosting provider Supabase on servers in Frankfurt am Main.",
      "Characters, keywords, stories and audio versions are stored there as well, so that you can find them on every device.",
      "To write a story, our servers transmit the age, gender and role of the characters, genre, keywords and language to OpenAI – in doing so we replace the characters' names with placeholders and only insert them again on our server. Only for reading aloud does OpenAI receive the finished chapter text including the names. Your email address and user ID are never transmitted. OpenAI does not use the data to train its models.",
      "Purchases of credits are made via Google Play; we manage the purchase status with RevenueCat. We never see payment data.",
      "We send emails (confirmation of registration, purchase confirmation, confirmation of a withdrawal) via Resend.",
    ],
    ordered: true,
    afterList: [
      "What Fabula does not do: no advertising, no advertising ID, no analytics or tracking tools, no location data, no photos, no microphone recordings, no sharing of stories with other users, no selling of data.",
    ],
  },
  {
    heading: "3. User account",
  },
  {
    heading: "3.1 Registration and sign-in",
    level: 3,
    paragraphs: [
      "Fabula requires a user account because stories are generated and stored on our servers and charged against your balance. The account is intended for adults – usually a parent; children listen to the stories via their parents' account (see section 13).",
      "When you register, we process:",
    ],
    list: [
      "your email address,",
      "your password – exclusively as a cryptographic hash; we cannot see the password in plain text,",
      "a randomly generated user ID (UUID) to which your characters, stories and balance are linked,",
      "the times of registration, email confirmation and last sign-in,",
      "the version of the Terms and Conditions you accepted when registering, and the time of acceptance,",
      "your setting for the narrator voice (if you choose one).",
    ],
    afterList: [
      "Providing an email address and password is required to conclude the contract. Without them, Fabula cannot be used.",
      "Legal basis: Art. 6(1)(b) GDPR (performance of the user contract); for evidence of acceptance of the Terms and Conditions Art. 6(1)(f) GDPR (legitimate interest in being able to prove the content of the contract).",
    ],
  },
  {
    heading: "3.2 Emails",
    level: 3,
    paragraphs: [
      "We send only those emails to your email address that are necessary for the account or the contract:",
    ],
    list: [
      "the confirmation of registration and – at your request – a link to reset your password,",
      "after each purchase a contract confirmation with product, price, time, order number and the wording of your consent (section 5.4) – we are required to do this by law (Section 312f(3) of the German Civil Code, BGB),",
      "after a withdrawal an acknowledgement of receipt with content, date and time (Section 356a BGB).",
    ],
    afterList: [
      "Emails are sent via Resend (section 9.3). We do not send promotional emails or newsletters.",
      "Legal basis: Art. 6(1)(b) GDPR; for contract and withdrawal confirmations Art. 6(1)(c) GDPR (legal obligation).",
    ],
  },
  {
    heading: "3.3 Security logs of sign-in",
    level: 3,
    paragraphs: [
      "On sign-in, registration, password change and sign-out, the authentication service logs the event with the time, the type of operation and the IP address used. These entries serve to detect and defend against attacks on accounts (e.g. mass sign-in attempts). We delete them no later than 30 days after they are created.",
      "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in the security of user accounts) and Art. 32 GDPR.",
    ],
  },
  {
    heading: "4. Characters, stories and audio versions",
  },
  {
    heading: "4.1 Characters",
    level: 3,
    paragraphs: [
      "You can create characters that appear in stories. The following are stored:",
    ],
    list: [
      "the name of the character (entered freely, 1–60 characters),",
      "the age of the character,",
      "a gender (female, male or neutral) – this serves solely to ensure that the story uses the correct pronouns,",
      "the chosen illustration (from predefined drawings; photos cannot be uploaded),",
      "the role (main or supporting character).",
    ],
    afterList: [
      "If you name a character after your child or another real person, these details are personal data of that person. We receive them from you, not from the person concerned (Art. 14 GDPR). Fabula does not need a real name for this: a first name or nickname is enough, and we ask you not to enter a surname (the app points this out at the name field).",
      "Creating and editing characters is only possible after entering the parent PIN (section 13).",
      "Character details are voluntary. Stories can also be generated without your own characters; the AI then invents the main characters.",
      "Legal basis: for your own details Art. 6(1)(b) GDPR; where characters concern real third parties – in particular your child – Art. 6(1)(f) GDPR. The legitimate interest lies in generating the personal story for your child that you as a parent have requested. The interests of the child do not override this, because only a few details chosen by you yourself are processed, and these are not shown to anyone but you, are not analysed and are not used for advertising purposes.",
    ],
  },
  {
    heading: "4.2 Stories and keywords",
    level: 3,
    paragraphs: [
      "When you create a story, we store:",
    ],
    list: [
      "the chosen genre and language,",
      "your keywords (free text, optional),",
      "which characters appear,",
      "the title and text of the five chapters generated by the AI,",
      "technical details of the story (generation status, chosen narrator voice, time of generation, for sequels the link to the previous parts and the plot form last used, so that two consecutive stories are not structured in the same way).",
    ],
    afterList: [
      "Please do not enter any sensitive information in keywords – such as illnesses, religion, origin or full names and addresses of real persons. The keywords are transmitted to the AI (section 4.4); if they contain the names of your characters, we replace these with placeholders beforehand. Before generation, an automatic content filter checks whether the keywords are suitable for a children's story (section 4.4). We do not evaluate the keywords for sensitive content and do not need such information; for a good story, “the first day of school” is enough rather than a detailed description.",
      "Legal basis: Art. 6(1)(b) GDPR; where third parties are concerned, Art. 6(1)(f) GDPR (as in section 4.1).",
    ],
  },
  {
    heading: "4.3 Audio versions and offline storage",
    level: 3,
    paragraphs: [
      "Each chapter is given a voice-over with a synthetic voice from OpenAI (section 4.4). In the app, every story is labelled “Written and read by AI”. The audio files are held in a non-public storage area at Supabase in Frankfurt. For playback, the app generates a link that becomes invalid after one hour; without being signed in as the owner of the account, no access is possible.",
      "If you choose “Save for offline”, the app downloads the audio files to the app's own storage area on your device. This is not accessible to other apps. The files remain there until you remove them under “Settings → Delete downloads”, delete the app data or uninstall the app.",
      "So that the app can also be used without an internet connection, it additionally stores a copy of your story list and of the text of every story you have opened in the same app-owned storage area. This copy does not leave your device. It is removed when you sign out, via “Delete downloads”, when the account is deleted, when the app data is deleted and when the app is uninstalled.",
      "Voice samples (“Listen to voice”) are the same for all users and contain no personal data.",
      "Legal basis: Art. 6(1)(b) GDPR.",
    ],
  },
  {
    heading: "4.4 Generation by artificial intelligence (OpenAI)",
    level: 3,
    paragraphs: [
      "The text and voice-over of the stories are generated by AI models from OpenAI. The app itself does not connect to OpenAI for this; the request is made exclusively by our server (Supabase Edge Functions).",
      "Names stay with us (pseudonymisation). Before we make a request to write a story, our server replaces the names of your characters with neutral placeholders such as “[[F1]]”. The AI writes the story with these placeholders; our server only inserts the real names after the response. This also applies to keywords and – for sequels – to the title and text of the previous part.",
      "The following is transmitted to OpenAI:",
    ],
    list: [
      "for writing: genre, language, keywords, and the age, gender and role of the characters appearing (without names); for a sequel additionally the title and text of the previous part (without names);",
      "for content review: the keywords and the title and text of the finished story (in each case without names) to OpenAI's moderation service; it assesses whether the content is suitable for children;",
      "for reading aloud: the text of the respective chapter – here including the characters' names, because the voice has to pronounce them – and the chosen voice.",
    ],
    afterList: [
      "Not transmitted: your email address, your user ID, your IP address or device data. OpenAI recognises only our server as the sender.",
      "We use the paid OpenAI API (not consumer services such as ChatGPT). Inputs and outputs are not used there to train AI models. We instruct OpenAI not to store responses for later retrieval. OpenAI stores requests and responses for no more than 30 days exclusively in order to detect abuse and violations of its usage policies, and deletes them afterwards.",
      "OpenAI processes the data as a processor on our behalf on the basis of OpenAI's Data Processing Addendum (Art. 28 GDPR). Processing may take place on servers outside the EU, in particular in the USA (section 9.6).",
      "Children's stories are subject to their own content requirements (no frightening content, a happy ending) and to the content review: keywords that are not suitable for a children's story are rejected before a credit is used; a story that does not pass the review is rewritten and otherwise not delivered – the credit is then refunded. With AI-generated content there can be no complete guarantee that every story is suitable; that is why you can report any story (section 6).",
      "No decision is made about you; the AI exclusively writes the story you have requested (section 17).",
      "Legal basis: Art. 6(1)(b) GDPR (generation of the story ordered); where third parties are concerned, Art. 6(1)(f) GDPR (as in section 4.1).",
    ],
  },
  {
    heading: "4.5 Deleting individual content",
    level: 3,
    paragraphs: [
      "You can delete characters and stories individually in the app at any time. When a story is deleted, its chapters and audio files on the server are deleted as well. The text copy of the story stored on your device is removed at the same time; you remove audio files saved offline via “Delete downloads”.",
    ],
  },
  {
    heading: "5. Credits and purchases",
  },
  {
    heading: "5.1 Google Play (purchase and payment)",
    level: 3,
    paragraphs: [
      "You buy credits via the Google Play billing system. The purchase contract, payment, invoice and refunds are handled by Google in accordance with the Google Play Terms of Service. We do not receive or store payment method data (credit card, bank details, PayPal etc.) at any time. Google is independently responsible for this processing; Google's privacy policy applies (https://policies.google.com/privacy).",
      "Legal basis: Art. 6(1)(b) GDPR.",
    ],
  },
  {
    heading: "5.2 RevenueCat (purchase verification)",
    level: 3,
    paragraphs: [
      "To determine which package you have bought and to credit the credits to your account, we use RevenueCat.",
      "Provider: RevenueCat, Inc., 1032 E Brandon Blvd #3003, Brandon, FL 33511, USA.",
      "Data processed:",
    ],
    list: [
      "your Fabula user ID (the random UUID from section 3.1 – not your email address); before the first sign-in a random identifier generated by RevenueCat,",
      "product, time of purchase, purchase token and transaction identifier from Google Play,",
      "store country, currency and price of the purchase,",
      "technical details such as device model, operating system and app version, language and the IP address of the connection.",
    ],
    afterList: [
      "RevenueCat acts as a processor under our instructions; the basis is RevenueCat's Data Processing Addendum (Art. 28 GDPR), which incorporates the EU Standard Contractual Clauses. The data is processed in the USA (section 9.6). Privacy policy: https://www.revenuecat.com/privacy.",
      "Legal basis: Art. 6(1)(b) GDPR (crediting of the purchased credits).",
    ],
  },
  {
    heading: "5.3 Balance account",
    level: 3,
    paragraphs: [
      "We store the proof of purchase (product, number of credits, price and currency, Google Play order number, transaction identifier, platform, time) and every booking on your balance account (credit from a purchase, use for a story, automatic refund in the event of a technical error, manual credit by us, debit after a refund by Google Play). Your balance results from this.",
      "Legal basis: Art. 6(1)(b) GDPR.",
    ],
  },
  {
    heading: "5.4 Consent before purchase",
    level: 3,
    paragraphs: [
      "We provide credits immediately after purchase. To make this possible, we ask you before every purchase for your express consent and for confirmation that your right of withdrawal thereby expires (Section 356(5) BGB). For this we store your user ID, the chosen product, the version of the text displayed and the time. The wording of your consent is included in the purchase confirmation we send you by email.",
      "Legal basis: Art. 6(1)(c) GDPR (obligations to provide evidence and confirmation under Section 312f(3) and Section 356(5) BGB) and Art. 6(1)(f) GDPR (legitimate interest in being able to prove, in the event of a dispute, that consent was given).",
    ],
  },
  {
    heading: "5.5 Withdrawal",
    level: 3,
    paragraphs: [
      "Via “Withdraw from contract” (in the settings under “Legal” and in the dialog for entering the parent PIN) you can withdraw from a purchase made in the last 14 days. For this we store your user ID, the purchase concerned (product, order number, time of purchase), the time of the withdrawal, an optional note and the processing status, and we immediately send you an acknowledgement of receipt by email. The refund is made via Google Play.",
      "Legal basis: Art. 6(1)(c) GDPR (Section 356a BGB) and Art. 6(1)(b) GDPR.",
      "Retention of consents and withdrawals: three years from the end of the year in which they were given or declared (standard limitation period, Section 195 BGB); after that we delete them automatically. If you delete your account earlier, we remove the link to your account from them: only the product, the Google Play order number and the times remain.",
    ],
  },
  {
    heading: "6. Reporting content",
    paragraphs: [
      "In every story you can (after entering the parent PIN) use “Report content” to tell us that something is not right. The following are stored: the story concerned and its title, the reason chosen, your optional description (no more than 2000 characters), your user ID, the time and the processing status. We are notified of every new report by email (via Resend, section 9.3); the message goes only to us. We look at the reported story in order to improve our requirements and filters and – if the story was unusable – to credit the credit back.",
      "Please do not include any details about your child in the description that go beyond the reason for the report.",
      "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in child-appropriate content and in compliance with Google Play's policies on AI-generated content) and Art. 6(1)(b) GDPR where a credit is concerned.",
    ],
  },
  {
    heading: "7. Operation, security and protection against abuse",
  },
  {
    heading: "7.1 Connection data",
    level: 3,
    paragraphs: [
      "Each time the app connects to our server, Supabase processes technically necessary connection data: IP address, time, interface called, status code, app or software version. These logs serve operation, troubleshooting and defence against attacks and are automatically deleted by Supabase after 7 days at the latest.",
      "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in secure and stable operation).",
    ],
  },
  {
    heading: "7.2 Request limits",
    level: 3,
    paragraphs: [
      "So that a single account does not overload the service, the number of stories per account and period is limited (currently 20 requests per 10 minutes). For this we store the user ID, type of request and time for each request. Entries older than 100 minutes are deleted with the next request, all others at the latest together with the account.",
      "Legal basis: Art. 6(1)(f) GDPR (protection against abuse and overload).",
    ],
  },
  {
    heading: "7.3 AI cost and usage log",
    level: 3,
    paragraphs: [
      "For each generation we store the user ID, the story, the AI model used, the number of units processed (“tokens”) and the estimated costs. We use this information to monitor the costs of the service, to calculate prices and to detect abuse. This log does not contain any content of the story.",
      "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in economically viable operation that is secure against abuse).",
    ],
  },
  {
    heading: "7.4 Contact by email",
    level: 3,
    paragraphs: [
      "If you write to us, we process your email address, your name (if provided) and the content of your message in order to answer your enquiry. We delete the correspondence once the enquiry has been dealt with, unless statutory retention obligations (e.g. for commercial letters, six years under Section 257 of the German Commercial Code, HGB) prevent this.",
      "Legal basis: Art. 6(1)(b) GDPR where your enquiry concerns the contract, otherwise Art. 6(1)(f) GDPR.",
    ],
  },
  {
    heading: "8. Data stored on your device",
    paragraphs: [
      "The app stores on your device:",
    ],
    table: {
      head: ["Item", "Purpose"],
      rows: [
        ["Sign-in session (access and refresh token)", "staying signed in without entering the password every time"],
        ["Parent PIN", "protection of new stories, characters, purchases and settings; encrypted in the Android Keystore, never transmitted to our server"],
        ["Flag that you have seen the notice about the privacy information and Terms and Conditions on first launch", "not showing the notice again on every launch"],
        ["App language, colour scheme, font size", "display"],
        ["Reading speed, automatic continuation, sleep timer", "playback"],
        ["“Download via Wi-Fi only”", "downloads"],
        ["Audio files saved offline, copy of the story list and of the texts of opened stories", "use without internet (section 4.3)"],
      ],
    },
    afterList: [
      "This information does not leave your device – with the exception of the sign-in session, which is sent along with every request to our server in order to identify you as the account holder. It is removed when you delete your account in the app (section 15), delete the app data or uninstall the app.",
      "Storing this information on your device is strictly necessary to provide the app you have expressly requested; consent is not required for this (Section 25(2) no. 2 of the German Telecommunications Digital Services Data Protection Act, TDDDG). Legal basis of the subsequent processing: Art. 6(1)(b) GDPR.",
    ],
  },
  {
    heading: "9. Recipients and processors",
    paragraphs: [
      "We pass personal data only to the following service providers, who process it on our behalf and under our instructions (Art. 28 GDPR), and to Google Play as an independent controller for the purchase.",
    ],
  },
  {
    heading: "9.1 Supabase (hosting, database, sign-in, file storage, server functions)",
    level: 3,
    list: [
      "Contracting party: Supabase Pte. Ltd., 65 Chulia Street #38-02/03, OCBC Centre, Singapore 049513.",
      "Server location: Frankfurt am Main, Germany (Amazon Web Services data centre, region eu-central-1).",
      "Sub-processors include: Amazon Web Services (Frankfurt data centre), Supabase, Inc. (USA; support and maintenance).",
      "Data processed: all data mentioned in sections 3 to 7.",
      "Basis: data processing agreement (Data Processing Addendum) with Supabase under Art. 28 GDPR.",
      "Privacy policy: https://supabase.com/privacy.",
    ],
    afterList: [
      "The data is stored in Frankfurt. Access by Supabase from third countries (in particular for maintenance and support purposes) cannot be ruled out; it is safeguarded by EU Standard Contractual Clauses (section 9.6).",
    ],
  },
  {
    heading: "9.2 OpenAI (text, narrator voice, content review)",
    level: 3,
    list: [
      "Contracting party in the EEA: OpenAI Ireland Ltd., 1st Floor, The Liffey Trust Centre, 117–126 Sheriff Street Upper, Dublin 1, D01 YC43, Ireland; sub-processors include OpenAI, L.L.C. and affiliated companies in the USA and their data centre operators.",
      "Data processed: see section 4.4.",
      "Basis: OpenAI's Data Processing Addendum (Art. 28 GDPR).",
      "Privacy policy: https://openai.com/policies/privacy-policy.",
    ],
  },
  {
    heading: "9.3 Resend (email delivery)",
    level: 3,
    list: [
      "Provider: Plus Five Five, Inc. (“Resend”), 2261 Market Street #5039, San Francisco, CA 94114, USA.",
      "Data processed: your email address, content of the email (section 3.2, for reports the details from section 6), time and delivery status.",
      "Basis: Resend's Data Processing Addendum (Art. 28 GDPR).",
      "Privacy policy: https://resend.com/legal/privacy-policy.",
    ],
  },
  {
    heading: "9.4 RevenueCat (purchase verification)",
    level: 3,
    paragraphs: [
      "See section 5.2. If you delete your account, we also delete the purchase data stored at RevenueCat under your user ID.",
    ],
  },
  {
    heading: "9.5 Google Play (distribution, purchase, payment)",
    level: 3,
    paragraphs: [
      "Google Play is independently responsible for providing the app, handling purchases and payment. Provider in the EEA: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland; for purchases Google Commerce Limited, same address. Privacy policy: https://policies.google.com/privacy.",
      "If the app crashes, your Android device may – depending on your settings under “Google → Usage & diagnostics” – send a technical report to Google. From this we only see aggregated evaluations in the Google Play Console that do not relate to you personally. Legal basis for our use of these evaluations: Art. 6(1)(f) GDPR (legitimate interest in a stable app).",
    ],
  },
  {
    heading: "9.6 Transfers to third countries",
    level: 3,
    table: {
      head: ["Recipient", "Country", "Safeguard"],
      rows: [
        ["OpenAI, L.L.C. and affiliated companies", "USA", "EU Standard Contractual Clauses (Art. 46(2)(c) GDPR), agreed in OpenAI's Data Processing Addendum"],
        ["Plus Five Five, Inc. (Resend)", "USA", "Adequacy decision of the EU Commission of 10 July 2023 (EU-US Data Privacy Framework), Resend is certified; additionally EU Standard Contractual Clauses"],
        ["RevenueCat, Inc.", "USA", "EU Standard Contractual Clauses (Art. 46(2)(c) GDPR)"],
        ["Supabase Pte. Ltd. / Supabase, Inc. (access only, storage in Frankfurt)", "Singapore, USA", "EU Standard Contractual Clauses (Art. 46(2)(c) GDPR)"],
      ],
    },
    afterList: [
      "In the USA, access by authorities cannot be completely ruled out despite these measures. We have assessed the transfers and taken additional measures; the most important is that the text AI does not receive the names of your characters (section 4.4). You can request a copy of the Standard Contractual Clauses from us at info@simplynext.de.",
    ],
  },
  {
    heading: "9.7 Opening external pages",
    level: 3,
    paragraphs: [
      "The links “Privacy policy”, “Terms and Conditions” and “Legal notice” open your browser. When a page is opened, the operator of the website processes the usual connection data; the privacy policy of the website opened applies.",
    ],
  },
  {
    heading: "10. What we do not do",
    list: [
      "No advertising and no advertising SDKs; the app does not query the device's advertising ID.",
      "No analytics or tracking tools (no Google Analytics, no Firebase, no Facebook SDK). A tool for crash reports (Sentry) is contained in the program code but is not activated; it does not transmit any data. Should we activate it, we will adapt this policy beforehand.",
      "No access to location, contacts, camera, microphone, photos or files outside the app.",
      "No passing on of stories to other users, no public profiles, no chat or comment function.",
      "No profiling, no automated decisions about you.",
      "No selling and no renting of data.",
      "No use of your inputs or stories to train AI models – neither by us nor by OpenAI.",
    ],
  },
  {
    heading: "11. App permissions",
    table: {
      head: ["Permission", "Purpose", "Required"],
      rows: [
        ["Internet access (INTERNET)", "sign-in, generating and loading stories, purchases", "Yes"],
        ["Network state (ACCESS_NETWORK_STATE)", "detecting whether there is a connection and whether it is Wi-Fi (setting “Download via Wi-Fi only”)", "Yes"],
        ["Billing via Google Play (com.android.vending.BILLING)", "purchase of credits", "Only for purchases"],
      ],
    },
    afterList: [
      "Fabula does not request any further permissions – such as for camera, microphone, location, contacts or media files.",
    ],
  },
  {
    heading: "12. Retention periods",
    table: {
      head: ["Data category", "Retention period"],
      rows: [
        ["Account (email address, password hash, user ID, settings)", "Until the account is deleted"],
        ["Characters", "Until you delete the character or the account"],
        ["Stories, keywords, audio files on the server", "Until you delete the story or the account"],
        ["Audio files saved offline and text copies on the device", "Until “Delete downloads”, sign-out (text copies only), deletion of the account in the app, deletion of the app data or uninstallation"],
        ["Proofs of purchase and balance bookings held by us", "Until the account is deleted. Tax-relevant records of your purchase are kept by Google Play as the seller"],
        ["Content reports", "Until you delete the reported story or the account"],
        ["AI cost and usage log", "Until the account is deleted; when a story is deleted, the link to it is removed"],
        ["Entries for request limits", "100 minutes, at the latest until the account is deleted"],
        ["Security logs of sign-in", "30 days"],
        ["Connection logs at Supabase", "No more than 7 days"],
        ["Requests and responses at OpenAI", "No more than 30 days, then deletion by OpenAI"],
        ["Consents before purchase, withdrawals", "3 years from the end of the year; if the account is deleted earlier, without a link to the account (section 5.5)"],
        ["Emails at Resend (delivery log)", "According to Resend's deletion periods for delivery logs"],
        ["Purchase data at RevenueCat", "Until your account is deleted; in doing so we also delete the customer record at RevenueCat"],
        ["Purchase data at Google Play", "According to Google's periods, including statutory retention obligations"],
        ["Email correspondence with us", "Until dealt with, for commercial letters six years (Section 257 HGB)"],
        ["Data on the device (section 8)", "Until the account is deleted in the app, the app data is deleted or the app is uninstalled"],
      ],
    },
  },
  {
    heading: "13. Children",
    paragraphs: [
      "Fabula is made for children aged about 6 to 8 and takes part in Google Play's “Designed for Families” programme. However, the app is built so that adults hold the account:",
    ],
    list: [
      "Account for adults only. Only persons of legal age may register. The email address is that of a parent or another person with parental responsibility, not that of the child. The contracting party and the “user” for data protection purposes is the adult.",
      "Few details about the child. About your child we only process what you enter in a character: a name (a nickname is enough), the age, a gender and a drawn illustration. We do not collect photos, voice, location or contact details of the child.",
      "No advertising, no tracking. Children do not see any advertising in Fabula; no advertising IDs or usage profiles are collected.",
      "No outside contact. Children cannot communicate with anyone or publish anything in Fabula.",
      "Parent mode: children only listen. Everything that requires input or uses balance – new stories and sequels, creating and editing characters, keywords, purchases, reports, settings – is protected by a parent PIN that is stored only on the device. A child can therefore not enter any data in Fabula; they listen to the stories you have created.",
      "Purchases. Purchases are protected by the parent PIN and are made via Google Play and the Google account stored there. We additionally recommend turning on authentication for every purchase in Google Play (Google Play → Settings → Authentication).",
      "Child-appropriate content. Keywords and finished stories pass through an automatic content review (section 4.4); every story is labelled as AI-generated and can be reported (section 6).",
    ],
    afterList: [
      "Processing is not based on the child's consent; Art. 8 GDPR therefore does not apply. The legal bases are the contract with you and your and our legitimate interest in generating the story you want for your child (section 4.1).",
      "As parents, you can assert your child's rights under section 14 on their behalf – most easily by deleting the character or story concerned.",
    ],
  },
  {
    heading: "14. Your rights",
    paragraphs: [
      "You have the right to:",
    ],
    list: [
      "access to the personal data processed (Art. 15 GDPR)",
      "rectification of inaccurate data (Art. 16 GDPR)",
      "erasure (Art. 17 GDPR)",
      "restriction of processing (Art. 18 GDPR)",
      "data portability (Art. 20 GDPR)",
      "object to processing based on legitimate interests (Art. 21 GDPR, see below)",
      "lodge a complaint with a supervisory authority (Art. 77 GDPR)",
    ],
    afterList: [
      "Right to object under Art. 21 GDPR",
      "Where we process data on the basis of Art. 6(1)(f) GDPR (section 3.1 for evidence of acceptance of the Terms and Conditions, 3.3, 4.1, 4.2, 4.4 for third-party data, 5.4, 6, 7 and 9.5), you may object to this processing at any time on grounds relating to your particular situation. We will then no longer process the data unless we can demonstrate compelling legitimate grounds that override your interests, rights and freedoms, or the processing serves the establishment, exercise or defence of legal claims. The objection can be made informally, e.g. by email to info@simplynext.de.",
    ],
  },
  {
    list: [
      "Supervisory authority responsible for us:",
      "Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart, Germany, https://www.baden-wuerttemberg.datenschutz.de",
    ],
    afterList: [
      "You can also contact the supervisory authority of your place of residence.",
      "This is how you exercise your rights directly in the app:",
    ],
  },
  {
    list: [
      "Correct or delete characters and stories: in the app at the respective character or story",
      "Delete offline files: Settings → Delete downloads",
      "Delete the account and all data: Settings → Delete account (section 15)",
    ],
    afterList: [
      "For all other matters – in particular access and data portability – please write from the email address of your account to info@simplynext.de. So that we do not disclose data to unauthorised persons, we only answer enquiries about an account to that address. We respond within one month (Art. 12(3) GDPR).",
    ],
  },
  {
    heading: "15. Deleting your account",
    paragraphs: [
      "In the app: Settings → Delete account. The settings are protected by the parent PIN.",
      "Without the app (e.g. if the app has already been uninstalled): write from the email address of your account to info@simplynext.de with the subject “Delete account”. We delete the account within one month and confirm the deletion to you.",
      "What is deleted: your account with email address and password hash, all characters, stories, chapters and audio files on the server, proofs of purchase and balance bookings held by us, the cost and usage log, content reports, entries for request limits and the customer record at RevenueCat. On the device on which you trigger the deletion, the app also removes the stories saved offline, the parent PIN and the settings. The deletion is final and cannot be undone.",
      "What is not deleted automatically:",
    ],
    list: [
      "Consents before purchase and withdrawals: they are kept without a link to your account until the period in section 5.5 expires.",
      "Audio files saved offline and settings on other devices on which you were signed in – remove these by uninstalling the app or via Android Settings → Apps → Fabula → Storage → Clear data.",
      "Data that Google Play has stored about your purchase as an independent controller (section 9.5).",
      "Logs that are deleted at short notice anyway in accordance with section 12.",
    ],
    afterList: [
      "Unused credits expire on deletion, because they can no longer be assigned to an account afterwards. Please contact us before deletion if you would like a refund for purchased, unused credits (Section 14(3) of the Terms and Conditions).",
    ],
  },
  {
    heading: "16. Data security",
    list: [
      "All connections between the app, our servers and our service providers are encrypted via TLS (HTTPS).",
      "The database is set up so that each account can only read its own characters, stories and bookings (Row Level Security). The app cannot change balances and purchases itself; only our server functions may do so.",
      "Audio files are held in a non-public storage area and can only be retrieved via time-limited links (one hour).",
      "Passwords are stored exclusively as a hash.",
      "The access key to the OpenAI API and all other secret keys are held only on the server, not in the app.",
      "The text AI does not receive the names of characters (pseudonymisation, section 4.4).",
      "The parent PIN is stored encrypted in the Android Keystore and is not transmitted.",
      "The security of the data on your device also depends on the protection of the device (screen lock, current system updates).",
    ],
  },
  {
    heading: "17. No automated decision-making",
    paragraphs: [
      "No automated decision-making including profiling within the meaning of Art. 22 GDPR takes place. The AI exclusively generates the story you have requested; it does not make any decisions about you or your child.",
    ],
  },
  {
    heading: "18. Changes to this privacy policy",
    paragraphs: [
      "We adapt this policy when the legal situation, the app or the services used change. The version available at the time of your use applies. In the event of material changes – in particular new recipients or new purposes – we will inform you in advance in the app and, where required, obtain your consent.",
      "The German version of this policy is authoritative.",
    ],
  },
  {
    heading: "19. Contact",
    paragraphs: [
      "SimplyNext",
    ],
    list: [
      "Email: info@simplynext.de",
      "Phone: +49 1743389049",
    ],
  },
];

export const fabulaAgbEn: LegalSection[] = [
  {
    heading: "§ 1 Scope, provider, contracting parties",
    paragraphs: [
      "(1) These Terms and Conditions (“Terms”) apply to the use of the mobile application Fabula (“app”) and the associated server services, in particular to the generation of audio stories with credits. The provider is",
    ],
    list: [
      "SimplyNext",
      "Full provider details: see legal notice",
      "Email: info@simplynext.de",
      "Phone: +49 1743389049",
      "VAT ID: DE463824630",
    ],
    afterList: [
      "(“provider”, “we”).",
      "(2) The app is intended for private use by consumers (Section 13 of the German Civil Code, BGB).",
      "(3) Two separate contractual relationships: The contract for the use of the app and the generation of stories (“user contract”) is concluded between you and us. The app is obtained and credits are purchased via the Google Play Store; for the purchase and payment process, Google acts as the seller in accordance with the Google Play provisions. In this respect the Google Play Terms of Service apply in addition (https://play.google.com/intl/de_de/about/play-terms/). We owe the services you receive in the app with the credits under the user contract. These Terms do not govern the relationship between you and Google.",
      "(4) Deviating terms of the user are rejected unless we expressly agree to their validity in text form.",
    ],
  },
  {
    heading: "§ 2 Who may hold an account; use by children",
    paragraphs: [
      "(1) Only persons of legal age with full legal capacity may create a user account. The contracting party is always the adult who created the account.",
      "(2) The stories are made for children. Children use Fabula via the account of a parent or another person with parental responsibility or supervising them and under that person's responsibility. This person decides which stories a child listens to and accompanies the use in a manner appropriate to the child's age.",
      "(3) Parent mode. Everything that requires input or uses credits – new stories and sequels, creating and editing characters, keywords, purchases, reports and settings – is protected by a parent PIN that you set the first time it is called up. Without the PIN, children can only listen to stories that have already been created. You are responsible for choosing a PIN that children do not know and for additionally securing purchases in the Google account (purchase authentication in Google Play). The withdrawal function (§ 7) is deliberately also accessible without the PIN.",
    ],
  },
  {
    heading: "§ 3 Description of services",
    paragraphs: [
      "(1) Fabula uses artificial intelligence to generate personalised audio stories. The range of functions includes in particular:",
    ],
    list: [
      "creating characters with name, age, gender, role (main or supporting character) and a predefined illustration,",
      "choosing from ten genres for children's stories and entering optional keywords,",
      "generating a story in five chapters with a title, in the language set in the app (German, English, Spanish, French, Italian or Portuguese),",
      "voice-over of the chapters with a synthetic voice; choice of several voices with a sample,",
      "playback with text to read along, adjustable speed, automatic continuation and sleep timer,",
      "saving stories on the device for playback without an internet connection,",
      "sequels to an existing story (“Part 2”, “Part 3” etc.),",
      "reporting stories that are not right,",
      "parent mode with parent PIN for new stories, characters, purchases, reports and settings (§ 2(3)),",
      "labelling of every story as AI-generated.",
    ],
    afterList: [
      "(2) A story is designed for a reading time of usually about 7 to 10 minutes. Each story is generated anew for each request. Plot, length, choice of words and style result from your specifications and from the way the AI works; they are not predictable and not repeatable. We do not owe any particular content. Details of the nature of AI-generated content are governed by § 8.",
      "(3) Generating stories, the voice samples and loading stories require an internet connection. Stories saved on the device can be played without a connection.",
      "(4) Installing the app and creating an account are free of charge. Generating a story costs one credit (§ 5). Voice samples, replaying and saving stories already generated are free of charge.",
      "(5) We may change the app where this is necessary for a valid reason – for example to adapt it to new Android versions, to changed interfaces of our service providers, to new legal provisions, for reasons of security or for further development. You will not incur any additional costs, and we will inform you clearly and comprehensibly about the change. If a change impairs your access to the app or its usability more than merely insignificantly, we will inform you in good time beforehand on a durable medium (e.g. by email) about the features and time of the change and about your right to terminate the contract free of charge within 30 days; in that case we will refund unused, purchased credits in accordance with § 14(3) (Section 327r BGB).",
    ],
  },
  {
    heading: "§ 4 Registration and conclusion of contract",
    paragraphs: [
      "(1) These Terms and the privacy policy are linked in the app on first launch, in the registration form and under “Settings → Legal”. In the registration form you confirm by ticking a box that you are of legal age and accept these Terms; registration is not possible without this tick.",
      "(2) The user contract is concluded when you register with an email address and password and confirm your email address via the link sent to you.",
      "(3) The details you provide when registering must be correct. Your email address must be reachable, because we use it to send password links and information about changes to the contract.",
      "(4) Keep your password secret. If there is a suspicion that a third party knows it, change it via “Forgot password” and inform us.",
      "(5) We store which version of these Terms you accepted when registering and when. We do not keep the contract text itself available for you to retrieve; you can retrieve, save and print the currently valid Terms at any time in the app under “Settings → Legal” and online. The contract language is German.",
    ],
  },
  {
    heading: "§ 5 Credits",
    paragraphs: [
      "(1) What a credit is. Credits are a balance in your account with which you generate stories. One credit is used for one story (five chapters with voice-over) or one sequel. Credits are not a currency, not e-money and not a means of payment.",
      "(2) Purchase. Credits are bought in packages via Google Play. The app shows before the purchase which packages are available and what they cost. Before the purchase we ask you for your express consent to our providing the credits immediately, and for confirmation that your right of withdrawal thereby expires (§ 7(3)); without this consent a purchase in the app is not possible. After Google has confirmed the purchase, the credits are credited to your account; this can take a few seconds. You then receive a contract confirmation by email with product, price, time, order number and the wording of your consent. These are one-off purchases, not a subscription; there are no recurring costs.",
      "(3) Use. The credit is used when you start generating a story. If generation fails for technical reasons for which you are not responsible, the credit is automatically refunded. If the voice-over of individual chapters cannot be created, it is attempted again on replay at no further cost.",
      "(4) No expiry. Credits do not expire as long as the user contract exists. What applies at the end of the contract is governed by § 14.",
      "(5) Tied to the account. Credits are tied to the account to which they were credited. They cannot be transferred to other accounts, sold or exchanged for money; the refund under § 14(3) remains unaffected.",
      "(6) Free credits. Credits that we credit without a purchase – for example as compensation for a reported, unusable story or as part of a promotion – are not refunded in money.",
      "(7) Reversal of a purchase. If a purchase is reversed – for example by withdrawal, refund by Google or chargeback of the payment – we may debit the credits credited from it again, to the extent that they have not yet been used.",
    ],
  },
  {
    heading: "§ 6 Prices and payment",
    paragraphs: [
      "(1) The price displayed in the Google Play payment dialog at the time of purchase applies. All prices are final prices including statutory value added tax.",
      "(2) Payment is made exclusively via Google Play with the payment method stored in your Google account. We do not receive or store any payment method data. Google Play provides you with the purchase receipt.",
      "(3) Refunds by Google are governed by the Google Play provisions and are requested from Google. Your statutory rights under § 7 and § 12 and refunds under § 14(3) remain unaffected.",
    ],
  },
  {
    heading: "§ 7 Right of withdrawal for consumers",
    paragraphs: [
      "(1) Consumers generally have a right of withdrawal for distance contracts. Since the purchase of credits is handled via Google Play in accordance with § 1(3), withdrawal from the purchase can also be declared to Google; Google provides a procedure for this in the Google Play Store.",
      "(2) Where a contract subject to withdrawal is concluded with us, the following applies:",
    ],
  },
  {
    heading: "Withdrawal instruction",
    level: 3,
    paragraphs: [
      "Right of withdrawal",
      "You have the right to withdraw from this contract within fourteen days without giving any reason.",
      "The withdrawal period is fourteen days from the day of the conclusion of the contract.",
      "To exercise your right of withdrawal, you must inform us (SimplyNext, Nuri Toker, Mechenseerstr. 12, 88316 Isny im Allgäu, Germany, phone: +49 1743389049, email: info@simplynext.de) of your decision to withdraw from this contract by means of a clear statement (e.g. a letter sent by post or an email). You may use the attached model withdrawal form for this, but it is not mandatory.",
      "You can also exercise your right of withdrawal via the withdrawal function in the app: “Withdraw from contract” under “Settings → Legal” and in the dialog for entering the parent PIN (there without a PIN). We will confirm receipt of your withdrawal to you without delay by email with content, date and time.",
      "To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.",
      "Consequences of withdrawal",
      "If you withdraw from this contract, we shall reimburse to you all payments received from you, including the costs of delivery (with the exception of the supplementary costs resulting from your choice of a type of delivery other than the least expensive type of standard delivery offered by us), without undue delay and in any event not later than fourteen days from the day on which we are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.",
      "End of the withdrawal instruction",
      "(3) Early expiry. In the case of a contract for the supply of digital content that is not supplied on a tangible medium, the right of withdrawal expires when we have begun performance of the contract after you",
    ],
    list: [
      "have expressly consented to our beginning performance of the contract before the withdrawal period expires,",
      "have confirmed your knowledge that by giving your consent you lose your right of withdrawal when performance of the contract begins, and",
      "we have provided you with a confirmation of the contract in which your consent and acknowledgement are recorded (Section 356(5) BGB).",
    ],
    ordered: true,
    afterList: [
      "In the app we obtain consent and confirmation before every purchase by means of a box that you have to tick yourself; you receive the confirmation under no. 3 by email (§ 5(2)). If these conditions are not met, the right of withdrawal continues to exist for the entire period.",
    ],
  },
  {
    heading: "§ 8 AI-generated content",
    paragraphs: [
      "(1) How the stories are created. The text and voice-over of the stories are generated automatically from your specifications by the AI of a third-party provider (currently OpenAI). The text AI does not receive the names of your characters; we only insert them afterwards (see privacy policy). We do not read the stories before playback and do not select them.",
      "(2) What we do. Keywords and finished stories pass through an automatic content review. We reject keywords that are not suitable for a children's story before a credit is used; a story that does not pass the review is rewritten or – if that does not succeed – not delivered and the credit refunded. In addition, we give the AI binding content rules: suitable for children aged about 6 to 8, nothing frightening, no violence, no danger to the characters, a happy ending. We continuously review and improve these requirements, in particular on the basis of reports.",
      "(3) What we cannot promise. AI systems work with probabilities. We therefore do not warrant that every story",
    ],
    list: [
      "is coherent in content, complete or free of repetition,",
      "is factually correct – this also applies to stories in the “Learning” genre, which do not replace teaching material,",
      "takes up your keywords in the way you imagined,",
      "has the same quality in every language.",
    ],
    afterList: [
      "(4) Accompaniment by adults. We recommend that you first listen to new stories yourself or listen along, especially with sensitive children.",
      "(5) Reporting. If a story is not right – for example frightening, not age-appropriate, hurtful or factually wrong – please report it via “Report content” in the story. We look at every report. If the story is unusable, we credit the credit used back to you; further statutory rights (§ 12) remain unaffected.",
      "(6) Labelling. The narrator voices are synthetically generated and are not recordings of real speakers. Stories and voices are AI-generated content; the app labels every story as “Written and read by AI”.",
    ],
  },
  {
    heading: "§ 9 Rights to content",
    paragraphs: [
      "(1) Your inputs. We do not acquire any rights to your inputs – character names, keywords, report texts. You merely grant us the right to store these inputs and to transmit them to our service providers to the extent necessary to provide the service. They are not used to train AI models.",
      "(2) Generated stories. We do not claim any rights to the stories and audio versions generated for you. To the extent that rights to them nevertheless arise with us, we grant you a non-exclusive right of private use, unlimited in time and territory and free of charge – including reading and playing them aloud among family and friends.",
      "(3) Publication. Publication or commercial exploitation of the stories is not the subject of this contract. If you do so nevertheless, this is at your own responsibility: AI-generated content may not enjoy copyright protection, and we cannot warrant that it is free of third-party rights.",
      "(4) The app itself. For the duration of the user contract we grant you a non-exclusive, non-transferable right to use the app on your devices as intended. All rights to the app – software, design, illustrations, name and logo – remain with us or the respective rights holders.",
    ],
  },
  {
    heading: "§ 10 Obligations of the user",
    paragraphs: [
      "(1) Details about third parties. If you name characters after real persons, use only details that you are entitled to use – for example about your own child. A first name or nickname is enough; do not enter surnames, addresses or other identifying details.",
      "(2) No sensitive details. Do not enter any health data, details of religion, origin or comparably sensitive information about yourself or others in keywords and reports. The inputs are transmitted to the AI provider (see privacy policy).",
      "(3) Prohibited use. It is prohibited in particular",
    ],
    list: [
      "to make inputs aimed at unlawful, violence-glorifying, discriminatory, sexual or other content unsuitable for children,",
      "to circumvent content filters, usage limits, the parent PIN or other protective mechanisms,",
      "to use the app or our server interfaces in an automated manner (e.g. by scripts or bots),",
      "to sell accounts or credits or to make them available to third parties for a fee,",
      "to decompile or modify the app; acts that are mandatorily permitted by law (e.g. Section 69e of the German Copyright Act, UrhG) remain unaffected.",
    ],
    afterList: [
      "(4) Access data and PIN. You keep the password and parent PIN secret and ensure that children cannot make settings and purchases without you.",
    ],
  },
  {
    heading: "§ 11 Availability and updates",
    paragraphs: [
      "(1) We endeavour to ensure availability with as few interruptions as possible. Maintenance work, disruptions at service providers (Supabase, OpenAI, RevenueCat, Google Play) and overloads can temporarily prevent the generation and loading of stories. We do not warrant any particular availability. Saved stories remain playable regardless.",
      "(2) To protect against abuse and overload, the number of requests per account and period is limited. The limit is far above normal private use.",
      "(3) Updates (Section 327f BGB). During the term of the contract we provide updates that are necessary to maintain conformity with the contract – in particular security updates and adaptations to new Android versions. The Google Play Store informs you about available updates.",
      "(4) If you do not install an update provided within a reasonable period, we are not liable for defects that are due solely to the absence of this update, provided that we have informed you about the update and the consequences of failing to install it and the failure to install is not due to defective installation instructions (Section 327f(2) BGB).",
    ],
  },
  {
    heading: "§ 12 Liability for defects",
    paragraphs: [
      "(1) The statutory provisions on the supply of digital products apply (Sections 327 et seq. BGB), in particular the claims to subsequent performance, price reduction, termination of the contract and damages in accordance with § 13.",
      "(2) The nature of AI-generated content is governed by § 3(2) and § 8. The fact that a story turns out differently than expected, repeats itself in details or occasionally contains minor linguistic errors is not in itself a defect. Nor are restrictions a defect that are due solely to the age, configuration or operating system of your device, if the device does not meet the minimum requirements stated in the Google Play Store.",
      "(3) If a story is defective, we may, by way of subsequent performance, at our choice enable a new story without the use of a credit or credit the credit back.",
      "(4) Please report defects via “Report content” or to info@simplynext.de – for technical errors with the device model, Android version, app version and a description of how the error occurs.",
    ],
  },
  {
    heading: "§ 13 Liability",
    paragraphs: [
      "(1) We are liable without limitation for intent and gross negligence, for injury to life, body or health, where we have assumed a guarantee, for fraudulent concealment of a defect, and under the German Product Liability Act.",
      "(2) In the event of a slightly negligent breach of a material contractual obligation – an obligation whose fulfilment makes the proper performance of the contract possible in the first place and on whose observance you may regularly rely – our liability is limited to the foreseeable damage typical of the contract at the time the contract was concluded.",
      "(3) Otherwise our liability for slight negligence is excluded.",
      "(4) The above limitations also apply in favour of our legal representatives and vicarious agents. They do not apply to claims arising from the breach of data protection provisions to the extent that the GDPR does not permit a limitation, and they do not affect your rights under § 12.",
      "(5) The above provisions do not involve any change in the burden of proof to your disadvantage.",
    ],
  },
  {
    heading: "§ 14 Term, termination, account deletion",
    paragraphs: [
      "(1) The user contract runs for an indefinite period.",
      "(2) Termination by you. You can end the contract at any time without notice by deleting your account in the app under “Settings → Delete account” or by notifying us of the termination from the email address of your account to info@simplynext.de. Merely uninstalling the app does not end the contract; your account and your balance then continue to exist.",
      "(3) Unused credits at the end of the contract. If the contract ends, we will on request refund you the pro rata purchase price of the purchased credits not yet used; the price per credit you paid for the respective package is decisive. Credits credited free of charge (§ 5(6)) are deemed to have been used first. Please make the request before deleting your account, as we can no longer assign the credits to a purchase afterwards. If we terminate the contract under paragraph 4 or discontinue the service, we will refund of our own accord. If we terminate the contract for good cause under paragraph 5 because of a breach for which you are responsible, mutual statutory claims remain unaffected.",
      "(4) Ordinary termination by us. We may terminate the contract with two months' notice in text form (email is sufficient), for example if we discontinue the service. Until the termination takes effect you can continue to use your credits and save stories on your device.",
      "(5) Termination for good cause. The right of both parties to terminate for good cause remains unaffected. Good cause exists for us in particular in the case of serious breaches of § 10(3) or breaches repeated despite a warning, or if an account was created by a minor contrary to § 2(1).",
      "(6) Consequences. At the end of the contract your account and the data associated with it are deleted in accordance with the privacy policy. If you delete your account in the app, the app at the same time removes the saved stories, the parent PIN and the settings on that device; before deletion it shows you your remaining balance. Audio files saved on other devices remain there until the app is uninstalled; you may continue to use them privately within the scope of § 9(2).",
    ],
  },
  {
    heading: "§ 15 Changes to these Terms",
    paragraphs: [
      "(1) We may change these Terms with effect for the future if this is necessary because of a change in the legal situation or case law, because of new or changed functions of the app or for comparable objective reasons.",
      "(2) We will notify you of the changed Terms at least six weeks before they take effect, in the app and by email, and highlight the changes. The changed Terms become part of the contract only with your express consent, which you can give in the app. Your silence or mere continued use does not count as consent.",
      "(3) If you do not consent, the previous Terms continue to apply. In that case we may terminate the contract under § 14(4); we will then refund unused, purchased credits in accordance with § 14(3).",
      "(4) Changes to the prices for future purchases of credits are not a change to these Terms; the price displayed at the time of purchase applies (§ 6(1)). Credits already purchased retain their value of one credit per story.",
    ],
  },
  {
    heading: "§ 16 Data protection",
    paragraphs: [
      "Information on the processing of personal data can be found in the privacy policy, available in the app under “Settings → Legal → Privacy policy” and online.",
    ],
  },
  {
    heading: "§ 17 Consumer dispute resolution",
    paragraphs: [
      "We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board (Section 36(1) no. 1 of the German Consumer Dispute Resolution Act, VSBG). You can contact us directly at any time: info@simplynext.de",
    ],
  },
  {
    heading: "§ 18 Final provisions",
    paragraphs: [
      "(1) The law of the Federal Republic of Germany applies. If you as a consumer have your habitual residence in another country, you retain the protection of the mandatory consumer protection provisions of that country (Art. 6(2) Rome I Regulation).",
      "(2) The statutory places of jurisdiction apply to consumers.",
      "(3) Should individual provisions of these Terms be or become invalid, the validity of the remaining provisions remains unaffected. The invalid provision is replaced by the statutory provisions (Section 306(2) BGB).",
      "(4) The German version of these Terms is authoritative. Translations are for information only.",
    ],
  },
  {
    heading: "Annex: Model withdrawal form",
    paragraphs: [
      "(If you wish to withdraw from the contract, please complete this form and send it back.)",
      "To SimplyNext, Nuri Toker, Mechenseerstr. 12, 88316 Isny im Allgäu, Germany, email: info@simplynext.de:",
      "I/We (*) hereby give notice that I/we (*) withdraw from my/our (*) contract of sale of the following goods (*)/for the provision of the following service (*)",
      "– Ordered on (*)/received on (*)",
      "– Name of consumer(s)",
      "– Address of consumer(s)",
      "– Signature of consumer(s) (only if this form is notified on paper)",
      "– Date",
      "(*) Delete as appropriate.",
    ],
  },
  {
    heading: "Contact",
    paragraphs: [
      "SimplyNext",
    ],
    list: [
      "Email: info@simplynext.de",
      "Phone: +49 1743389049",
    ],
  },
];
