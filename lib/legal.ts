/**
 * Vorlagen für die Rechtstexte – KEINE Rechtsberatung.
 * Vor Livegang: Platzhalter in site.ts und hier ausfüllen, genutzte Dienste
 * ergänzen und fachkundig prüfen lassen.
 */
import { site } from "./site";
import type { AppData } from "./apps";

export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[]; afterList?: string[] };

const address = [
  site.legal.companyName,
  site.legal.responsible,
  site.legal.street,
  `${site.legal.zip} ${site.legal.city}`,
  site.legal.country,
];

export function impressumWebsiteSections(locale: string): LegalSection[] {
  if (locale === "en") {
    return [
      {
        heading: "Legal Notice",
        list: [
          "Nuri Toker",
          "App and Web Development",
          "Mechenseerstr. 12",
          "88316 Isny im Allgäu",
        ],
      },
      {
        heading: "Contact",
        list: [
          "Phone: 01743389049",
          "E-Mail: info@simplynext.de",
        ],
      },
      {
        heading: "Professional Title and Professional Regulations",
        list: [
          "Professional title: App Developer",
          "Awarded in: Germany",
        ],
      },
      {
        heading: "Consumer Dispute Resolution / Universal Arbitration Board",
        paragraphs: [
          "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
        ],
      },
      {
        heading: "Source",
        paragraphs: ["e-recht24.de"],
      },
    ];
  }

  return [
    {
      heading: "Impressum",
      list: [
        "Nuri Toker",
        "App und Web Entwicklung",
        "Mechenseerstr. 12",
        "88316 Isny im Allgäu",
      ],
    },
    {
      heading: "Kontakt",
      list: [
        "Telefon: 01743389049",
        "E-Mail: info@simplynext.de",
      ],
    },
    {
      heading: "Berufsbezeichnung und berufsrechtliche Regelungen",
      list: [
        "Berufsbezeichnung: App Entwickler",
        "Verliehen in: Deutschland",
      ],
    },
    {
      heading: "Verbraucherstreitbeilegung/Universalschlichtungsstelle",
      paragraphs: [
        "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      ],
    },
    {
      heading: "Quelle",
      paragraphs: ["e-recht24.de"],
    },
  ];
}

export function impressumSections(appName?: string): LegalSection[] {
  return [
    { heading: "Angaben gemäß § 5 DDG", list: address },
    { heading: "Kontakt", list: [`Telefon: ${site.legal.phone}`, `E-Mail: ${site.legal.email}`] },
    {
      heading: "Umsatzsteuer-ID",
      paragraphs: [`Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: ${site.legal.vatId}`],
    },
    { heading: "Handelsregister", paragraphs: [site.legal.register] },
    {
      heading: "Verantwortlich nach § 18 Abs. 2 MStV",
      list: [site.legal.responsible, site.legal.street, `${site.legal.zip} ${site.legal.city}`],
    },
    {
      heading: "Haftung für Inhalte",
      paragraphs: [
        "Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.",
        "Bei Bekanntwerden konkreter Rechtsverletzungen entfernen wir entsprechende Inhalte umgehend.",
      ],
    },
    {
      heading: "Urheberrecht",
      paragraphs: [
        `Die durch ${site.legal.companyName} erstellten Inhalte${appName ? ` der App ${appName}` : ""} unterliegen dem deutschen Urheberrecht. Vervielfältigung und Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.`,
      ],
    },
  ];
}

export function datenschutzSections(app?: AppData): LegalSection[] {
  const subject = app ? `der App „${app.name}“` : "dieser Website";
  return [
    {
      heading: "1. Verantwortlicher",
      paragraphs: [`Verantwortlich für die Datenverarbeitung im Zusammenhang mit ${subject}:`],
      list: [site.legal.companyName, site.legal.responsible, site.legal.street, `${site.legal.zip} ${site.legal.city}`, `E-Mail: ${site.legal.email}`],
    },
    {
      heading: "2. Überblick",
      paragraphs: [
        `Der Schutz deiner Daten ist uns wichtig. Wir verarbeiten Daten ausschließlich nach den gesetzlichen Bestimmungen (DSGVO, BDSG, DDG). Diese Erklärung informiert über Art, Umfang und Zweck im Zusammenhang mit ${subject}.`,
      ],
    },
    app
      ? {
          heading: "3. Verarbeitung in der App",
          paragraphs: [
            "Soweit die App ohne Konto funktioniert, verbleiben deine Inhalte grundsätzlich lokal auf dem Gerät. Eine Übertragung erfolgt nur, soweit für eine Funktion erforderlich.",
            "[PLATZHALTER: konkret beschreiben, welche Daten die App verarbeitet – z. B. Standort, Kamera, Push-Token, anonyme Statistiken.]",
          ],
        }
      : {
          heading: "3. Server-Logs",
          paragraphs: [
            "Beim Aufruf werden durch den Hosting-Provider automatisch Daten in Logfiles gespeichert (z. B. IP-Adresse, Zeitpunkt, abgerufene Seite). Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
          ],
        },
    app
      ? {
          heading: "4. Drittanbieter & App-Stores",
          paragraphs: [
            "Der Bezug erfolgt über Apple App Store bzw. Google Play; diese verarbeiten eigenverantwortlich Daten nach ihren Bestimmungen.",
            "[PLATZHALTER: eingesetzte SDKs/Dienste nennen, z. B. Firebase, Sentry, RevenueCat – mit Zweck und Rechtsgrundlage.]",
          ],
        }
      : {
          heading: "4. Hosting & Cookies",
          paragraphs: [
            "Diese Website wird bei Vercel gehostet und bindet keine externen Schriftarten oder Tracker ein. Es werden keine Marketing-Cookies gesetzt.",
          ],
        },
    {
      heading: "5. Deine Rechte",
      paragraphs: [
        "Dir stehen nach DSGVO zu: Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Eine Einwilligung kannst du jederzeit widerrufen.",
      ],
    },
    {
      heading: "6. Beschwerderecht & Kontakt",
      paragraphs: [
        `Du kannst dich bei einer Datenschutz-Aufsichtsbehörde beschweren. Bei Fragen erreichst du uns unter ${site.legal.email}.`,
      ],
    },
  ];
}

export function datenschutzWebsiteSections(locale: string): LegalSection[] {
  if (locale === "en") {
    return [
      {
        heading: "1. Privacy at a Glance",
      },
      {
        heading: "General Information",
        paragraphs: [
          "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data by which you can be personally identified. For detailed information on the subject of data protection, please refer to our privacy policy listed below this text.",
        ],
      },
      {
        heading: "Data Collection on This Website",
      },
      {
        heading: "Who is responsible for data collection on this website?",
        paragraphs: [
          "Data processing on this website is carried out by the website operator. You can find their contact details in the section \"Notice on the Responsible Party\" in this privacy policy.",
        ],
      },
      {
        heading: "How do we collect your data?",
        paragraphs: [
          "Your data is collected in part when you provide it to us. This may, for example, be data you enter in a contact form.",
          "Other data is collected automatically or with your consent when you visit the website by our IT systems. This is primarily technical data (e.g. internet browser, operating system or time of page visit). This data is collected automatically as soon as you enter this website.",
        ],
      },
      {
        heading: "What do we use your data for?",
        paragraphs: [
          "Part of the data is collected to ensure the error-free provision of the website. Other data may be used to analyse your user behaviour. If contracts can be concluded or initiated via the website, the transmitted data will also be processed for contract offers, orders or other contract enquiries.",
        ],
      },
      {
        heading: "What rights do you have regarding your data?",
        paragraphs: [
          "You have the right at any time to receive free information about the origin, recipient and purpose of your stored personal data. You also have the right to request the correction or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.",
          "For this and other questions on the subject of data protection, you can contact us at any time.",
        ],
      },
      {
        heading: "2. Hosting",
        paragraphs: ["We host the content of our website with the following provider:"],
      },
      {
        heading: "External Hosting",
        paragraphs: [
          "This website is hosted externally. The personal data collected on this website is stored on the servers of the hoster(s). This may include, in particular, IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses and other data generated via a website.",
          "External hosting is carried out for the purpose of fulfilling contracts with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of a secure, fast and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f GDPR). If a corresponding consent has been requested, the processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG, insofar as the consent includes the storage of cookies or access to information in the user's terminal device (e.g. device fingerprinting) within the meaning of the TDDDG. The consent can be revoked at any time.",
          "Our hoster(s) will only process your data to the extent necessary to fulfil their service obligations and follow our instructions regarding this data.",
          "We use the following hoster(s):",
        ],
        list: ["Vercel.com"],
      },
      {
        heading: "Order Processing",
        paragraphs: [
          "We have concluded a data processing agreement (DPA) for the use of the above-mentioned service. This is a contract required by data protection law, which ensures that the hoster processes the personal data of our website visitors only according to our instructions and in compliance with the GDPR.",
        ],
      },
      {
        heading: "3. General Information and Mandatory Notices",
      },
      {
        heading: "Data Protection",
        paragraphs: [
          "The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.",
          "When you use this website, various personal data is collected. Personal data is data by which you can be personally identified. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.",
          "We would like to point out that data transmission over the internet (e.g. when communicating by e-mail) may have security gaps. A complete protection of data against access by third parties is not possible.",
        ],
      },
      {
        heading: "Notice on the Responsible Party",
        paragraphs: ["The responsible party for data processing on this website is:"],
        list: ["SimplyNext", "Phone: +49 1743389049", "E-Mail: info@simplynext.de"],
        afterList: [
          "The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, e-mail addresses, etc.).",
        ],
      },
      {
        heading: "Storage Duration",
        paragraphs: [
          "Unless a more specific storage period has been specified within this privacy policy, your personal data will remain with us until the purpose for data processing ceases to apply. If you assert a justified request for deletion or revoke your consent to data processing, your data will be deleted, unless we have other legally permissible reasons for storing your personal data (e.g. retention periods under tax or commercial law); in the latter case, the deletion will take place after these reasons cease to apply.",
        ],
      },
      {
        heading: "General Information on the Legal Basis for Data Processing on This Website",
        paragraphs: [
          "If you have consented to data processing, we process your personal data on the basis of Art. 6 para. 1 lit. a GDPR or Art. 9 para. 2 lit. a GDPR, if special categories of data pursuant to Art. 9 para. 1 GDPR are processed. In the case of explicit consent to the transfer of personal data to third countries, data processing is also carried out on the basis of Art. 49 para. 1 lit. a GDPR. If you have consented to the storage of cookies or to the access of information in your terminal device (e.g. via device fingerprinting), data processing is additionally carried out on the basis of § 25 para. 1 TDDDG. The consent can be revoked at any time. If your data is necessary for the performance of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6 para. 1 lit. b GDPR. Furthermore, we process your data if it is necessary to fulfil a legal obligation on the basis of Art. 6 para. 1 lit. c GDPR.",
          "Data processing may also be carried out on the basis of our legitimate interest pursuant to Art. 6 para. 1 lit. f GDPR. Information on the relevant legal basis in each individual case is provided in the following paragraphs of this privacy policy.",
        ],
      },
      {
        heading: "Recipients of Personal Data",
        paragraphs: [
          "In the course of our business activities, we work with various external parties. In some cases, this also requires the transfer of personal data to these external parties. We only pass on personal data to external parties if this is necessary within the framework of contract fulfilment, if we are legally obliged to do so (e.g. passing on data to tax authorities), if we have a legitimate interest pursuant to Art. 6 para. 1 lit. f GDPR in the transfer, or if another legal basis permits the transfer of data. When using processors, we only pass on personal data of our customers on the basis of a valid contract for order processing. In the case of joint processing, a joint processing agreement is concluded.",
        ],
      },
      {
        heading: "Revocation of Your Consent to Data Processing",
        paragraphs: [
          "Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The lawfulness of the data processing carried out prior to the revocation remains unaffected by the revocation.",
        ],
      },
      {
        heading: "Right to Object to Data Collection in Special Cases and to Direct Marketing (Art. 21 GDPR)",
        paragraphs: [
          "IF DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA ON GROUNDS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS, OR THE PROCESSING SERVES THE ASSERTION, EXERCISE OR DEFENCE OF LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21 PARA. 1 GDPR).",
          "IF YOUR PERSONAL DATA IS PROCESSED FOR THE PURPOSE OF DIRECT MARKETING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR THE PURPOSE OF SUCH MARKETING; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS ASSOCIATED WITH SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR THE PURPOSE OF DIRECT MARKETING (OBJECTION PURSUANT TO ART. 21 PARA. 2 GDPR).",
        ],
      },
      {
        heading: "Right to Lodge a Complaint with the Competent Supervisory Authority",
        paragraphs: [
          "In the event of breaches of the GDPR, data subjects shall have a right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, their place of work or the place of the alleged breach. The right to lodge a complaint is without prejudice to any other administrative or judicial remedy.",
        ],
      },
      {
        heading: "Right to Data Portability",
        paragraphs: [
          "You have the right to have data which we process automatically on the basis of your consent or in fulfilment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another responsible party, this will only be done insofar as it is technically feasible.",
        ],
      },
      {
        heading: "Information, Correction and Deletion",
        paragraphs: [
          "Within the scope of the applicable legal provisions, you have the right at any time to free information about your stored personal data, its origin and recipient and the purpose of data processing and, if applicable, a right to correction or deletion of this data. For this and other questions on the subject of personal data, you can contact us at any time.",
        ],
      },
      {
        heading: "Right to Restriction of Processing",
        paragraphs: [
          "You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this purpose. The right to restriction of processing exists in the following cases:",
        ],
        list: [
          "If you dispute the accuracy of your personal data stored with us, we generally need time to verify this. For the duration of the review, you have the right to request the restriction of the processing of your personal data.",
          "If the processing of your personal data was/is carried out unlawfully, you can request the restriction of data processing instead of deletion.",
          "If we no longer need your personal data, but you need it to exercise, defend or assert legal claims, you have the right to request restriction of the processing of your personal data instead of deletion.",
          "If you have lodged an objection pursuant to Art. 21 para. 1 GDPR, a balance must be struck between your interests and ours. As long as it has not yet been determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.",
        ],
        afterList: [
          "If you have restricted the processing of your personal data, this data – apart from its storage – may only be processed with your consent or for the purpose of asserting, exercising or defending legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or a Member State.",
        ],
      },
      {
        heading: "SSL and TLS Encryption",
        paragraphs: [
          "This site uses SSL or TLS encryption for security reasons and to protect the transmission of confidential content, such as orders or enquiries that you send to us as the site operator. You can recognise an encrypted connection by the fact that the address line of the browser changes from \"http://\" to \"https://\" and by the lock symbol in your browser line.",
          "If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.",
        ],
      },
      {
        heading: "4. Data Collection on This Website",
      },
      {
        heading: "Contact Form",
        paragraphs: [
          "If you send us enquiries via the contact form, your details from the enquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the enquiry and in case of follow-up questions. We do not pass on this data without your consent.",
          "The processing of this data is carried out on the basis of Art. 6 para. 1 lit. b GDPR, if your enquiry is related to the performance of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the enquiries directed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; the consent can be revoked at any time.",
          "The data you enter in the contact form will remain with us until you request us to delete it, revoke your consent to storage or the purpose for data storage ceases to apply (e.g. after completion of processing your enquiry). Mandatory statutory provisions – in particular retention periods – remain unaffected.",
        ],
      },
      {
        heading: "Source",
        paragraphs: ["https://www.e-recht24.de"],
      },
    ];
  }

  return [
    {
      heading: "1. Datenschutz auf einen Blick",
    },
    {
      heading: "Allgemeine Hinweise",
      paragraphs: [
        "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.",
      ],
    },
    {
      heading: "Datenerfassung auf dieser Website",
    },
    {
      heading: "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
      paragraphs: [
        "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.",
      ],
    },
    {
      heading: "Wie erfassen wir Ihre Daten?",
      paragraphs: [
        "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
        "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.",
      ],
    },
    {
      heading: "Wofür nutzen wir Ihre Daten?",
      paragraphs: [
        "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen verarbeitet.",
      ],
    },
    {
      heading: "Welche Rechte haben Sie bezüglich Ihrer Daten?",
      paragraphs: [
        "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
        "Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.",
      ],
    },
    {
      heading: "2. Hosting",
      paragraphs: ["Wir hosten die Inhalte unserer Website bei folgendem Anbieter:"],
    },
    {
      heading: "Externes Hosting",
      paragraphs: [
        "Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.",
        "Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.",
        "Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.",
        "Wir setzen folgende(n) Hoster ein:",
      ],
      list: ["Vercel.com"],
    },
    {
      heading: "Auftragsverarbeitung",
      paragraphs: [
        "Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.",
      ],
    },
    {
      heading: "3. Allgemeine Hinweise und Pflichtinformationen",
    },
    {
      heading: "Datenschutz",
      paragraphs: [
        "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
        "Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.",
        "Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
      ],
    },
    {
      heading: "Hinweis zur verantwortlichen Stelle",
      paragraphs: ["Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:"],
      list: ["SimplyNext", "Telefon: +49 1743389049", "E-Mail: info@simplynext.de"],
      afterList: [
        "Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.",
      ],
    },
    {
      heading: "Speicherdauer",
      paragraphs: [
        "Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.",
      ],
    },
    {
      heading: "Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website",
      paragraphs: [
        "Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind, auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.",
        "Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.",
      ],
    },
    {
      heading: "Empfänger von personenbezogenen Daten",
      paragraphs: [
        "Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.",
      ],
    },
    {
      heading: "Widerruf Ihrer Einwilligung zur Datenverarbeitung",
      paragraphs: [
        "Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.",
      ],
    },
    {
      heading: "Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)",
      paragraphs: [
        "WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).",
        "WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).",
      ],
    },
    {
      heading: "Beschwerderecht bei der zuständigen Aufsichtsbehörde",
      paragraphs: [
        "Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.",
      ],
    },
    {
      heading: "Recht auf Datenübertragbarkeit",
      paragraphs: [
        "Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.",
      ],
    },
    {
      heading: "Auskunft, Berichtigung und Löschung",
      paragraphs: [
        "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.",
      ],
    },
    {
      heading: "Recht auf Einschränkung der Verarbeitung",
      paragraphs: [
        "Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:",
      ],
      list: [
        "Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
        "Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.",
        "Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
        "Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.",
      ],
      afterList: [
        "Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.",
      ],
    },
    {
      heading: "SSL- bzw. TLS-Verschlüsselung",
      paragraphs: [
        "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.",
        "Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.",
      ],
    },
    {
      heading: "4. Datenerfassung auf dieser Website",
    },
    {
      heading: "Kontaktformular",
      paragraphs: [
        "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
        "Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.",
        "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.",
      ],
    },
    {
      heading: "Quelle",
      paragraphs: ["https://www.e-recht24.de"],
    },
  ];
}

export function agbSections(app?: AppData): LegalSection[] {
  const product = app ? `die App „${app.name}“` : "die angebotenen Apps und Leistungen";
  return [
    {
      heading: "§ 1 Geltungsbereich",
      paragraphs: [`Diese AGB gelten für die Nutzung von ${product}, bereitgestellt durch ${site.legal.companyName} („Anbieter“).`],
    },
    {
      heading: "§ 2 Leistungsbeschreibung",
      paragraphs: [
        "Der Anbieter stellt die App in der jeweils aktuellen Version bereit. Funktionsumfang und Verfügbarkeit ergeben sich aus der Produktbeschreibung. Ein Anspruch auf ununterbrochene Verfügbarkeit besteht nicht.",
      ],
    },
    {
      heading: "§ 3 Nutzungsrechte",
      paragraphs: [
        "Der Anbieter räumt ein einfaches, nicht übertragbares Nutzungsrecht ein. Bearbeitung, Dekompilierung oder Weiterverbreitung über den gesetzlich zulässigen Rahmen hinaus sind nicht gestattet.",
      ],
    },
    {
      heading: "§ 4 Pflichten des Nutzers",
      paragraphs: ["Die App darf nicht missbräuchlich oder rechtswidrig verwendet werden; Sicherheitsmechanismen dürfen nicht umgangen werden."],
    },
    {
      heading: "§ 5 Haftung",
      paragraphs: [
        "Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben, Körper oder Gesundheit. Bei einfacher Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten, begrenzt auf den vorhersehbaren, vertragstypischen Schaden.",
      ],
    },
    {
      heading: "§ 6 Preise & Käufe",
      paragraphs: ["[PLATZHALTER: Falls kostenpflichtig oder mit In-App-Käufen/Abos – Preise, Abrechnung über den App-Store, Laufzeiten und Kündigung beschreiben. Sonst entfernen.]"],
    },
    {
      heading: "§ 7 Schlussbestimmungen",
      paragraphs: ["Es gilt deutsches Recht. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen unberührt."],
    },
  ];
}
