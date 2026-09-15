import type { LegalSection } from "../legal";

/**
 * Englische Übersetzung der ShrinkIt-Rechtstexte (shrinkit.ts, Datenschutz
 * Stand 05.08.2026, AGB Stand 15.09.2026) – nur zur Information, verbindlich
 * ist die deutsche Fassung.
 * Aufbau und Reihenfolge entsprechen der deutschen Datei 1:1; Menüpfade
 * nutzen die englischen Bezeichnungen der App (app_en.arb).
 */

export const shrinkitDatenschutzEn: LegalSection[] = [
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
      "VAT ID: DE463824630",
    ],
    afterList: [
      "(Details identical to the legal notice)",
      "No company data protection officer has been appointed, as the requirements under Art. 37 GDPR / § 38 of the German Federal Data Protection Act (BDSG) are not met (sole proprietorship without at least 20 persons permanently engaged in the automated processing of personal data).",
    ],
  },
  {
    heading: "2. The Key Points in Brief",
    paragraphs: [
      "ShrinkIt compresses photos, videos and audio files entirely on your device. Your images, videos and audio files are not transferred to any server – neither to us nor to third parties. We do not operate our own server, user accounts or database for ShrinkIt. We therefore have no technical access to your media files.",
      "Personal data is nevertheless processed in three areas, which this policy explains:",
    ],
    ordered: true,
    list: [
      "advertising in the free version (only with your consent),",
      "purchase processing for the one-time purchase of the Pro version,",
      "technical connections of the app (font download, crash reports via Google Play).",
    ],
  },
  { heading: "3. Processing on Your Device (No Transfer)" },
  {
    heading: "3.1 Photos, Videos, Audio Files and Their Metadata",
    level: 3,
    paragraphs: ["When you select files for compression, the app reads:"],
    list: [
      "the selected image, video and audio files,",
      "their file size, pixel dimensions or duration, bit rate, sample rate and modification date,",
      "the device-internal media identifier (asset ID), so that a file can be deleted from the gallery at your request.",
    ],
    afterList: [
      "Compression takes place exclusively locally using the image, video and audio codecs of your operating system or the MP3 encoder (LAME) supplied with the app. There is no upload, no cloud processing and no analysis by us or third parties. In particular, we do not analyse image content or sound recordings.",
      "The resulting files are stored in the app's own storage area on your device, which is not accessible to other apps, and listed in the app under “Chronology”. At your request, the app saves a copy to your gallery.",
      "Legal basis: Art. 6(1)(b) GDPR (performance of the usage agreement). No data is transferred to us; to that extent, there is no processing by us.",
      "Note on the “Replace All” function: This function saves the compressed files to your gallery and then deletes the originals. This process cannot be undone and must be expressly confirmed before it is carried out. Please make backup copies beforehand.",
    ],
  },
  {
    heading: "3.2 App Settings",
    level: 3,
    paragraphs: ["We store the following locally on the device (in Android's app settings, “SharedPreferences”):"],
    list: [
      "selected language and colour scheme (light/dark),",
      "whether the onboarding has already been shown,",
      "the cached Pro status,",
      "a counter of successful compressions and a flag indicating whether the rating request has already appeared.",
    ],
    afterList: [
      "This information does not leave your device and is removed when the app is uninstalled.",
      "Legal basis: Art. 6(1)(b) GDPR.",
    ],
  },
  { heading: "4. Advertising (Free Version Only)" },
  {
    heading: "4.1 Google AdMob",
    level: 3,
    paragraphs: [
      "In the free version, ShrinkIt occasionally shows full-screen ads via Google AdMob.",
      "Provider: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland; for processing in the USA: Google LLC.",
      "The following data may be processed:",
    ],
    list: [
      "your device's advertising ID (Advertising ID, AAID),",
      "IP address and the approximate location derived from it (country/region),",
      "device and software characteristics (model, operating system version, language setting, app version),",
      "interactions with ads (impressions, clicks, dismissals).",
    ],
    afterList: [
      "Google also processes this data for its own purposes and is independently responsible for doing so. Further information: policies.google.com/technologies/partner-sites and the list of advertising partners at support.google.com/admob/answer/9012903.",
    ],
  },
  {
    heading: "4.2 Consent and Withdrawal",
    level: 3,
    paragraphs: ["Before ads are shown for the first time, a consent dialog appears via Google's User Messaging Platform (UMP)."],
    list: [
      "Without your consent, no personalised ads are shown, and no ads are loaded as long as consent has not been given or has been refused; in the latter case, only non-personalised ads may appear.",
      "You can change your decision at any time: Settings → Legal → Ad settings.",
    ],
    afterList: [
      "Legal basis: Art. 6(1)(a) GDPR (consent) and § 25(1) of the German Telecommunications Digital Services Data Protection Act (TDDDG) for access to information on your device. Consent can be withdrawn at any time with effect for the future (Art. 7(3) GDPR).",
      "Transfer to third countries: Google LLC also processes data in the USA. Google is certified under the EU-US Data Privacy Framework (adequacy decision of the EU Commission of 10 July 2023); EU Standard Contractual Clauses (Art. 46(2)(c) GDPR) apply in addition. Access by US authorities cannot be completely ruled out despite these measures.",
    ],
  },
  {
    heading: "4.3 Ad-Free Use",
    level: 3,
    paragraphs: [
      "The one-time purchase of the Pro version permanently disables advertising. For Pro users, the advertising SDK is not initialised and no consent dialog appears.",
    ],
  },
  { heading: "5. Purchase of the Pro Version" },
  {
    heading: "5.1 Google Play Billing",
    level: 3,
    paragraphs: [
      "Payment is processed entirely via Google Play. At no time do we collect, store or see payment details (credit card, bank or PayPal details). Google is independently responsible for payment processing; Google's privacy policy applies (policies.google.com/privacy).",
      "Legal basis: Art. 6(1)(b) GDPR.",
    ],
  },
  {
    heading: "5.2 RevenueCat (Management of Purchase Status)",
    level: 3,
    paragraphs: [
      "We use RevenueCat to check whether the Pro version has been unlocked.",
      "Provider: RevenueCat, Inc., 748 Market St, San Francisco, CA 94102, USA.",
      "Data processed:",
    ],
    list: [
      "an anonymous app user ID generated by RevenueCat (no name, no e-mail address),",
      "purchase token and purchase status from Google Play,",
      "store country, device model, operating system version, app version.",
    ],
    afterList: [
      "RevenueCat processes this data as a processor on our instructions; a data processing agreement pursuant to Art. 28 GDPR is in place. Privacy policy: www.revenuecat.com/privacy.",
      "Transfer to third countries: USA, safeguarded by EU Standard Contractual Clauses (Art. 46(2)(c) GDPR).",
      "Legal basis: Art. 6(1)(b) GDPR (performance of the purchase agreement and provision of the purchased features).",
    ],
  },
  {
    heading: "5.3 Restoring Purchases",
    level: 3,
    paragraphs: [
      "The “Restore Purchases” function queries your purchase status again from Google Play and RevenueCat. No additional categories of data are processed in the process.",
    ],
  },
  { heading: "6. Further Processing" },
  {
    heading: "6.1 Rating Request via Google Play",
    level: 3,
    paragraphs: [
      "After several successful compressions, Google Play's built-in rating dialog may appear once. It is provided entirely by Google; we do not learn whether or how you rate the app. Whether you leave a rating is entirely up to you.",
      "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in feedback on the app).",
    ],
  },
  {
    heading: "6.2 Sharing Files",
    level: 3,
    paragraphs: [
      "When you share a compressed file, ShrinkIt passes it to the app you select (e.g. messenger, e-mail). From that point on, the privacy policy of the respective provider applies. We have no influence on this transfer.",
      "Legal basis: Art. 6(1)(a) GDPR (your active choice of destination).",
    ],
  },
  {
    heading: "6.3 Font Download (Google Fonts)",
    level: 3,
    paragraphs: [
      "The app uses the “Inter” font. It is loaded from Google's servers (fonts.gstatic.com) on first launch and then cached locally. In the process, your IP address is transmitted to Google.",
      "Provider: Google Ireland Limited / Google LLC, USA. Privacy policy: policies.google.com/privacy.",
      "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in a consistent, accessible presentation of the app).",
    ],
  },
  {
    heading: "6.4 Crash and Performance Reports via Google Play",
    level: 3,
    paragraphs: [
      "If the app crashes or stops responding, your Android device may send a technical report to Google Play (including device model, operating system version, crash history/stack trace). From this, we only receive aggregated evaluations in the Google Play Console that cannot be attributed to you (“Android vitals”).",
      "You control whether such reports are sent in the Android settings under “Google → Usage & diagnostics”.",
      "Legal basis: Art. 6(1)(f) GDPR (legitimate interest in stability and troubleshooting).",
    ],
  },
  {
    heading: "6.5 Opening External Pages",
    level: 3,
    paragraphs: [
      "The “Privacy policy” and “Legal notice” links in the settings open your browser. When the page is accessed, the website operator (hosting provider) processes the usual connection data. The privacy policy of the website accessed applies.",
    ],
  },
  {
    heading: "6.6 What We Do Not Do",
    level: 3,
    list: [
      "No analytics or tracking tools (no Firebase Analytics, no Crashlytics, no Sentry, no Facebook SDK).",
      "No user account, no registration, no sign-in.",
      "No own servers and no own database for ShrinkIt.",
      "No analysis, disclosure or storage of your photos, videos and audio files by us.",
      "No sale of data to third parties.",
      "No access to location, contacts, SMS, call log or other apps.",
    ],
  },
  {
    heading: "7. App Permissions",
    table: {
      head: ["Permission", "Purpose", "Required"],
      rows: [
        ["Access to photos and videos (READ_MEDIA_IMAGES, READ_MEDIA_VIDEO, from Android 14 additionally READ_MEDIA_VISUAL_USER_SELECTED; up to Android 12 READ_EXTERNAL_STORAGE)", "Selecting the image and video files to be compressed; optionally deleting the original at your request", "Yes, for the core function"],
        ["Access to audio files (READ_MEDIA_AUDIO, from Android 13; up to Android 12 READ_EXTERNAL_STORAGE)", "Selecting the audio files to be compressed; optionally deleting the original at your request", "Only for audio compression"],
        ["Saving to the gallery (WRITE_EXTERNAL_STORAGE, only up to Android 9)", "Storing the resulting file in your gallery", "Only when saving"],
        ["Internet access (INTERNET, ACCESS_NETWORK_STATE)", "Advertising, purchase verification, font download", "Not required for compression itself"],
        ["Advertising ID (com.google.android.gms.permission.AD_ID)", "Delivery of ads in the free version", "Only if consent has been given"],
      ],
    },
    afterList: [
      "The respective media permission is only requested when you tap “Select image”, “Select video” or “Select audio” – not when the app starts. Anyone who only compresses images will never be asked for access to audio files. From Android 14, you can also grant access to individual photos and videos only; the app then works exclusively with the files you have released.",
      "You can revoke all permissions at any time in the Android system settings. Without media access, compression cannot be used; the app points this out and offers a shortcut to the settings.",
    ],
  },
  {
    heading: "8. Storage Period",
    table: {
      head: ["Data category", "Storage period"],
      rows: [
        ["Compressed result files", "Indefinitely in the app's own storage until you delete them individually or collectively in the “Chronology”; at the latest when the app is uninstalled"],
        ["Intermediate files of the target size search", "Deleted immediately after the process and additionally each time the app starts"],
        ["Local settings", "Until the app data is cleared or the app is uninstalled"],
        ["Advertising data (AdMob)", "According to Google's retention periods, see policies.google.com/technologies/ads"],
        ["Purchase and subscription data (RevenueCat, Google Play)", "According to the providers' retention periods and statutory retention obligations (generally 10 years for tax-relevant records, § 147 of the German Fiscal Code (AO), § 257 of the German Commercial Code (HGB) – these are held by Google)"],
        ["Crash reports (Android vitals)", "According to Google's retention periods"],
      ],
    },
  },
  {
    heading: "9. Your Rights",
    paragraphs: ["You have the right at any time to:"],
    list: [
      "access to the personal data processed (Art. 15 GDPR)",
      "rectification of inaccurate data (Art. 16 GDPR)",
      "erasure (Art. 17 GDPR)",
      "restriction of processing (Art. 18 GDPR)",
      "data portability (Art. 20 GDPR)",
      "object to processing based on legitimate interests (Art. 21 GDPR)",
      "withdraw consent given, with effect for the future (Art. 7(3) GDPR)",
      "lodge a complaint with a supervisory authority (Art. 77 GDPR)",
    ],
    afterList: [
      "Supervisory authority responsible for us: Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg (State Commissioner for Data Protection and Freedom of Information Baden-Württemberg), Lautenschlagerstraße 20, 70173 Stuttgart, Germany, www.baden-wuerttemberg.datenschutz.de",
    ],
  },
  {
    paragraphs: [
      "Important practical note: As ShrinkIt works without a user account and we do not operate our own database, we generally hold no data that can be attributed to a specific person. A request for access addressed to us will therefore usually be unsuccessful. For data held by the providers named in sections 4–6, please contact them directly:",
    ],
    list: [
      "Google (advertising, Play, fonts, crash reports): policies.google.com/privacy",
      "RevenueCat (purchase status): www.revenuecat.com/privacy",
    ],
  },
  {
    paragraphs: ["We will help you forward your request on request. This is how you exercise your rights directly in the app:"],
    list: [
      "Delete result files: Chronology → delete individually or “Delete All”",
      "Change or withdraw advertising consent: Settings → Legal → Ad settings",
      "Remove all local data: uninstall the app or Android settings → Apps → ShrinkIt → Storage → Clear data",
    ],
    afterList: ["Contact for data protection enquiries: info@simplynext.de"],
  },
  {
    heading: "10. Data Security",
    list: [
      "Your media files do not leave the device; the level of security results from the protection of your device (screen lock, encryption, current system updates).",
      "Result files are stored in the app's private storage area, which other apps cannot access under the Android permission model.",
      "All network connections (advertising, purchase verification, font) are exclusively encrypted via TLS/HTTPS.",
      "The app contains no credentials for third-party systems other than the public SDK keys provided for this purpose by the respective provider.",
      "For release, the program code is obfuscated and stripped of unused components (R8).",
    ],
  },
  {
    heading: "11. Children and Adolescents",
    paragraphs: [
      "ShrinkIt is not aimed at children. The app is not part of the Google Play “Designed for Families” programme. Users under 16 should only use the app with the consent of their parents or guardians; in this case, consent to advertising processing (section 4) must be given by the parents or guardians (Art. 8 GDPR).",
    ],
  },
  {
    heading: "12. No Automated Decision-Making",
    paragraphs: [
      "No automated decision-making, including profiling within the meaning of Art. 22 GDPR, that produces legal effects concerning you takes place.",
    ],
  },
  {
    heading: "13. Changes to This Privacy Policy",
    paragraphs: [
      "We adapt this policy when the legal situation, the app or the services used change. The version available at the time of your use applies. In the event of significant changes – in particular new data recipients – we will inform you separately in the app and obtain any necessary consent again.",
      "The German version of this policy is authoritative.",
    ],
  },
  {
    heading: "14. Contact",
    list: [
      "SimplyNext",
      "Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Germany",
      "E-Mail: info@simplynext.de",
      "Phone: +49 1743389049",
    ],
  },
];

export const shrinkitAgbEn: LegalSection[] = [
  {
    heading: "§ 1 Scope, Provider, Contracting Party",
    paragraphs: [
      "(1) These General Terms and Conditions (“Terms”) apply to the use of the mobile application ShrinkIt (“App”) and the paid additional features offered within it (“Pro version”), which are provided by",
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
      "(“Provider”, “we”).",
      "(2) The App is aimed at consumers (§ 13 of the German Civil Code (BGB)) and at businesses (§ 14 BGB). Provisions that expressly apply to only one of these groups are marked accordingly.",
      "(3) Two separate contractual relationships: The contract for the use of the App (licence and usage agreement) is concluded between you and us. The App is obtained and the Pro version is purchased via the Google Play Store; for the purchase and payment process, Google acts as the seller in accordance with the Google Play terms. In this respect, the Google Play Terms of Service also apply (play.google.com/intl/de_de/about/play-terms/). These Terms do not govern the relationship between you and Google.",
      "(4) Conflicting or supplementary terms of the user are hereby rejected unless we expressly agree to their validity in text form.",
      "(5) You must be at least 16 years old to use the App. Younger users require the consent of a parent or guardian, who in this case becomes the contracting party.",
    ],
  },
  {
    heading: "§ 2 Subject Matter and Description of Services",
    paragraphs: [
      "(1) ShrinkIt compresses photos, videos and audio files. Compression takes place entirely on your device; your media files are not transferred to us or to third parties.",
      "(2) The range of functions includes in particular:",
    ],
    list: [
      "compressing images using a selectable quality level,",
      "compressing images to a desired target file size,",
      "compressing images using a freely selectable target resolution (width/height),",
      "compressing videos using selectable quality levels,",
      "compressing audio files using selectable quality levels as well as bit rate, sample rate and number of channels,",
      "choice of output format for audio files (M4A/AAC or MP3),",
      "processing multiple files in one run,",
      "overview of the files created (“Chronology”) with opening, sharing and deleting,",
      "saving the results to the gallery and optionally replacing the originals,",
      "user interface in seven languages, light/dark.",
    ],
  },
  {
    paragraphs: [
      "(3) Free version. The App can be used free of charge without registration and without a user account. The free version is subject to the following restrictions and conditions:",
    ],
    list: [
      "a maximum of 5 files per batch,",
      "files above the following sizes require the Pro version: images 5 MB, videos 60 MB, audio files 10 MB,",
      "if a selection contains even one file above these limits, processing the entire selection requires the Pro version,",
      "advertising is displayed (§ 6).",
    ],
  },
  {
    paragraphs: ["(4) Pro version. A one-time purchase permanently unlocks:"],
    list: [
      "processing of up to 100 files per batch,",
      "no file size limit for images, videos and audio files,",
      "ad-free use.",
    ],
    afterList: [
      "This is not a subscription. There are no recurring costs and no need to cancel. The applicable price and range of functions are those shown in the App at the time of purchase.",
      "(5) Lossy compression. The compression of images, videos and audio files is lossy. A loss of quality or sound quality is inherent in the process and does not constitute a defect. The extent of the savings depends on the source material, the settings selected and the codecs of your device; the values displayed in the App before processing are estimates and not a warranted characteristic.",
      "(6) The Provider may adapt, extend or restrict the range of functions in the course of technical development, provided this is reasonable for the user and the contractually agreed core scope – for Pro users, the scope acquired under paragraph 4 – is maintained.",
    ],
  },
  {
    heading: "§ 3 Conclusion of Contract",
    paragraphs: [
      "(1) The usage agreement for the free version is concluded upon installation and first use of the App. No registration takes place.",
      "(2) The Pro version is purchased by selecting the offer in the App and confirming the purchase in the Google Play payment dialog. Before the purchase is completed, the name and price of the service are displayed to you.",
      "(3) After the purchase, the Pro version is unlocked immediately. Google Play provides you with a receipt.",
    ],
  },
  {
    heading: "§ 4 Prices, Payment, Restoration",
    paragraphs: [
      "(1) The price displayed in the App at the time of purchase applies. All prices are final prices and include statutory VAT.",
      "(2) Payment is processed exclusively via Google Play using the payment method stored in your Google account. We do not receive or store any payment details.",
      "(3) Refunds are governed by the Google Play terms and must be requested from Google. Statutory rights under § 5 and § 10 remain unaffected.",
      "(4) The Pro version is linked to your Google account. After reinstalling the App or on another device with the same account, you can unlock it again via “Settings → Restore Purchases” without paying again.",
      "(5) The link to the Google account also means: if you lose access to this account, the Pro version cannot be restored. We have no way of assigning purchases independently of the account, as we do not keep user accounts.",
    ],
  },
  {
    heading: "§ 5 Right of Withdrawal (for Consumers)",
    paragraphs: [
      "(1) Consumers generally have a fourteen-day right of withdrawal for distance contracts. As the purchase of the Pro version is processed via Google Play in accordance with § 1(3), withdrawal must be declared to Google; Google provides a procedure for this in the Google Play Store.",
      "(2) Insofar as a revocable contract for digital content is concluded with us, the following applies:",
    ],
  },
  {
    heading: "Withdrawal Policy",
    level: 3,
    paragraphs: [
      "Right of withdrawal. You have the right to withdraw from this contract within fourteen days without giving any reason, starting from the day the contract is concluded.",
      "To exercise your right of withdrawal, you must inform us of your decision to withdraw from this contract by means of a clear statement (e.g. by letter or e-mail): SimplyNext, Nuri Toker, Mechenseerstr. 12, 88316 Isny im Allgäu, Germany, E-Mail: info@simplynext.de",
      "To meet the withdrawal deadline, it is sufficient for you to send your communication concerning your exercise of the right of withdrawal before the withdrawal period has expired.",
      "Effects of withdrawal. If you withdraw from this contract, we shall reimburse to you all payments received from you without undue delay and in any event not later than fourteen days from the day on which we are informed about your decision to withdraw from this contract. We will carry out such reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of such reimbursement.",
      "Early expiry of the right of withdrawal. In the case of a contract for the supply of digital content not supplied on a tangible medium, the right of withdrawal expires once we have begun performance of the contract after you have",
    ],
    ordered: true,
    list: [
      "expressly consented to our beginning performance of the contract before the end of the withdrawal period, and",
      "acknowledged that by giving your consent you lose your right of withdrawal once performance of the contract has begun,",
    ],
    afterList: [
      "and we have provided you with a confirmation of this (§ 356(5) BGB).",
      "As the Pro version is unlocked immediately after purchase, the right of withdrawal generally expires upon this unlocking.",
      "(3) Businesses (§ 14 BGB) have no statutory right of withdrawal.",
    ],
  },
  {
    heading: "§ 6 Advertising in the Free Version",
    paragraphs: [
      "(1) The free version is financed by advertising. Full-screen ads are displayed occasionally, at the earliest after several successful compressions.",
      "(2) Personalised advertising requires your consent, which is obtained via a dialog before the first ad and can be withdrawn or changed at any time under “Settings → Legal → Ad settings”. Details can be found in the privacy policy.",
      "(3) Purchasing the Pro version permanently removes advertising.",
      "(4) The respective advertisers are responsible for the content, accuracy and lawfulness of third-party advertising displayed. We do not select individual ads.",
    ],
  },
  {
    heading: "§ 7 User Obligations and Responsibility",
    paragraphs: [
      "(1) Backup copies. You are responsible for backing up your data. Make backup copies of your original files before processing – in particular before using the “Replace All” function.",
      "(2) Deletion functions. The “Replace All”, “Delete original” and “Delete All” functions permanently remove files from your gallery or from the App. These processes cannot be undone and must be expressly confirmed before they are carried out. We accept no liability for the consequences of a deletion confirmed by you, unless otherwise provided in § 11.",
      "(3) Rights to the content. You warrant that you hold the rights required to process the photos, videos and audio files you select and that you do not infringe any third-party rights (copyrights, related rights, personality rights, data protection rights of persons depicted or recorded).",
      "(4) Responsibility under data protection law. If you use the App to process personal data of third parties – such as photos in which other people are recognisable or recordings in which other people can be heard – you are yourself responsible for this under data protection law (Art. 4(7) GDPR). As processing takes place exclusively locally on your device and we have no access to your files, no data processing relationship with us arises in this respect.",
      "(5) Prohibited use. It is prohibited to use the App to process or distribute unlawful content, or to decompile or modify the App or circumvent protective mechanisms – in particular the restrictions of the free version. Acts that are mandatorily permitted by law (e.g. § 69e of the German Copyright Act (UrhG)) remain unaffected.",
    ],
  },
  {
    heading: "§ 8 Rights of Use",
    paragraphs: [
      "(1) We grant you a simple, non-transferable, non-sublicensable right to use the App as intended on the devices attributable to you. For the Pro version, this right is unlimited in time.",
      "(2) All rights to the App itself (software, source code, design, name, logo) remain with us or the respective rights holders.",
      "(3) We acquire no rights whatsoever to your own content – original files and the compressed files created from them. They remain exclusively yours.",
    ],
  },
  {
    heading: "§ 9 Availability and Updates",
    paragraphs: [
      "(1) The core function of the App – compression – works without an internet connection. A connection is required for advertising, purchase verification and restoring purchases.",
      "(2) Disruptions or outages at third-party providers used (Google Play, Google AdMob, RevenueCat) may temporarily impair individual functions. We cannot guarantee any particular availability of these third-party services.",
      "(3) Obligation to provide updates (§ 327f BGB). For the Pro version, we provide updates necessary to maintain conformity with the contract – in particular security updates and adaptations to new Android versions – for a period you can reasonably expect given the type and purpose of the digital product. The Google Play Store informs you about available updates.",
      "(4) If you do not install updates provided within a reasonable period, we are not liable for defects resulting solely from the absence of this update, provided we have informed you about the update and the consequences of not installing it (§ 327f(2) BGB).",
    ],
  },
  {
    heading: "§ 10 Liability for Defects",
    paragraphs: [
      "(1) The statutory provisions on the supply of digital products (§§ 327 et seq. BGB) apply to the Pro version acquired for payment, in particular the claims to subsequent performance, price reduction and termination of the contract in the event of defects. The limitation period is two years from provision.",
      "(2) Pursuant to § 327(3) BGB, these provisions also apply to the free, advertising-financed version insofar as you provide personal data as consideration.",
      "(3) In particular, there is no defect in the case of:",
    ],
    list: [
      "loss of quality inherent in compression (§ 2(5)),",
      "deviations of the actual file size from the estimated file size,",
      "restrictions due to the peculiarities, age or configuration of your device, its codecs or its operating system,",
      "impairments due to disruptions at third-party providers (§ 9(2)),",
      "missing functions that are expressly assigned to the Pro version while the free version is being used.",
    ],
    afterList: [
      "(4) Please report defects to info@simplynext.de, stating the device model, Android version, App version and a description of how the error can be reproduced.",
    ],
  },
  {
    heading: "§ 11 Liability",
    paragraphs: [
      "(1) We are liable without limitation for intent and gross negligence, for injury to life, body or health, where a guarantee has been given and in accordance with the provisions of the German Product Liability Act.",
      "(2) In the event of a slightly negligent breach of an essential contractual obligation, the fulfilment of which makes the proper performance of the contract possible in the first place and on the observance of which you may rely, our liability is limited to the foreseeable damage typical for the contract at the time the contract was concluded.",
      "(3) Otherwise, liability for slight negligence is excluded.",
      "(4) Loss of data. Liability for the loss of data is limited to the typical recovery effort that would have been incurred had you backed up the data properly and regularly (§ 7(1)). Paragraphs 1 and 2 remain unaffected.",
      "(5) We are not liable for content that you process with the App or pass on to third parties, nor for the infringement of third-party rights by content you have selected (§ 7(3)).",
      "(6) The above limitations do not apply to claims for breach of data protection regulations insofar as these are mandatory under the GDPR, nor to statutory rights under § 10.",
      "(7) The above provisions do not change the burden of proof to your detriment.",
    ],
  },
  {
    heading: "§ 12 Term and Termination",
    paragraphs: [
      "(1) The usage agreement is concluded for an indefinite period. You can terminate it at any time without notice by uninstalling the App.",
      "(2) The one-time purchase of the Pro version is not reversed by uninstalling; the unlock remains assigned to your Google account and can be restored in accordance with § 4(4).",
      "(3) We may terminate the usage agreement with 30 days' notice in text form if we permanently discontinue the App. Pro features already acquired remain usable until the termination takes effect; you will be informed about the discontinuation in good time in the App.",
      "(4) The right of both parties to extraordinary termination for good cause remains unaffected. For us, good cause exists in particular in the event of serious or repeated violations of § 7(5).",
      "(5) Upon termination, the right of use under § 8(1) ends. Your locally stored files remain unaffected; they are removed from the App's own storage when the App is uninstalled, unless you have previously saved them to your gallery.",
    ],
  },
  {
    heading: "§ 13 Changes to These Terms",
    paragraphs: [
      "(1) We may change these Terms if this is necessary due to a change in the legal situation, a change in case law, technical development or a change in the scope of services and you are not unreasonably disadvantaged as a result.",
      "(2) We will inform you of changes in text form at least six weeks before they take effect (an in-app notice is sufficient). If you do not object before they take effect, the changes are deemed accepted; we will point out this effect and your right to object separately in the notification.",
      "(3) If you object, you may terminate the usage agreement with effect from the date the change takes effect; in this case, we are also entitled to terminate. In this case, we will refund payments already made for the Pro version on a pro rata basis, insofar as a one-time purchase has not yet been used up according to common understanding.",
    ],
  },
  {
    heading: "§ 14 Data Protection",
    paragraphs: [
      "Information on the processing of personal data can be found in the privacy policy, available in the App under “Settings → Legal → Privacy policy” and online.",
    ],
  },
  {
    heading: "§ 15 Consumer Dispute Resolution",
    paragraphs: [
      "We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board (§ 36(1) no. 1 of the German Consumer Dispute Resolution Act (VSBG)). You can contact us directly at any time: info@simplynext.de",
    ],
  },
  {
    heading: "§ 16 Final Provisions",
    paragraphs: [
      "(1) The law of the Federal Republic of Germany applies. If you are a consumer with habitual residence in another country, mandatory consumer protection provisions of that country remain unaffected (Art. 6(2) Rome I Regulation).",
      "(2) The statutory places of jurisdiction apply to consumers. If you are a merchant within the meaning of the German Commercial Code, a legal entity under public law or a special fund under public law, the exclusive place of jurisdiction for all disputes arising from this contract is our registered office (Isny im Allgäu).",
      "(3) Should individual provisions of these Terms be or become invalid, the validity of the remaining provisions shall remain unaffected. The invalid provision shall be replaced by the statutory provision.",
      "(4) Amendments and supplements to these Terms require text form, unless the procedure under § 13 applies.",
      "(5) The German version of these Terms is authoritative.",
    ],
  },
  {
    heading: "Contact",
    list: [
      "SimplyNext",
      "Nuri Toker",
      "Mechenseerstr. 12",
      "88316 Isny im Allgäu",
      "Germany",
      "E-Mail: info@simplynext.de",
      "Phone: +49 1743389049",
    ],
  },
];
