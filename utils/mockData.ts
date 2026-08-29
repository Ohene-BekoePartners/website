import { getInsightImage, getPracticeAreaImage } from "@/utils/images";
import type { InsightSection } from "@/utils/insightsNav";

export interface PracticeSubArea {
  id: string;
  title: string;
  description: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  /** Short label beside the gold accent bar (publication-style card) */
  category: string;
  /** Brief text for cards on home and listing; full copy lives on the detail page */
  excerpt: string;
  /** Full narrative on /practice-areas/[slug] */
  description: string | string[];
  image: string;
  /** e.g. Family Dispute: Wills, Divorce, Estates, Adoption */
  subsections?: PracticeSubArea[];
}

export interface LawyerPublication {
  title: string;
  citation?: string;
  year?: string;
}

export interface LawyerCareer {
  firm: string;
  role?: string;
  /** Case caption or party names — rendered in italics after `role` when set. */
  caseName?: string;
  /** Trailing punctuation in regular weight after the italic case name (e.g. full stop). */
  caseSuffix?: string;
}

export interface LawyerContact {
  email?: string;
  phone?: string;
  linkedIn?: string;
}

export interface Lawyer {
  id: string;
  name: string;
  slug: string;
  title: string;
  practiceAreas: string[];
  image: string;
  /** Personal quote or headline (e.g. "I take great pride in helping my clients...") */
  quote?: string;
  /** One-line intro (e.g. "X is a business lawyer specialising in...") */
  intro?: string;
  /** Bio: single paragraph (string) or multiple paragraphs (string[]) */
  bio?: string | string[];
  qualifications?: string[];
  memberships?: string[];
  jurisdictions?: string[];
  specialisms?: string[];
  career?: LawyerCareer[];
  publications?: LawyerPublication[];
  contact?: LawyerContact;
}

/** One block within an insight article (optional heading + paragraphs). */
export interface InsightContentSection {
  heading?: string;
  paragraphs: string[];
}

export interface Insight {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  /** Listing bucket: Firm News, Client Update, or Publications */
  section: InsightSection;
  featured?: boolean;
  /** Image path (public) or URL for card and detail views */
  image?: string;
  /** Byline for authored articles, rendered under the hero. */
  author?: string;
  /** Full article content: sections with optional heading and paragraphs */
  content?: InsightContentSection[];
  /**
   * Numbered notes for authored articles. Body text references them with a
   * `[^n]` marker, rendered as a superscript link to the list at the foot of
   * the article. Index 0 is note 1.
   */
  footnotes?: string[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "1",
    title: "Litigation, Arbitration & Dispute Resolution",
    slug: "litigation-arbitration-dispute-resolution",
    category: "Dispute resolution",
    image: getPracticeAreaImage("litigation-arbitration-dispute-resolution"),
    excerpt:
      "Experienced advocates in litigation and arbitration across anti-corruption, constitutional law, banking, human rights, and family matters—with sensitivity and a drive for the best outcome.",
    description: [
      "Litigation is our main forte. The firm boasts of attorneys with experience to represent clients and provide litigation and advocacy services in areas such as anti-corruption and bribery, constitutional and administrative law, banking and finance, human rights law, and family law.",
      "Our attorneys approach every case with sensitivity, professionalism, and a commitment to achieving the most favourable outcome possible whether pursuing or defending a lawsuit or resolving matters through dispute resolution mechanisms such as arbitration.",
    ],
  },
  {
    id: "2",
    title: "Maritime, Shipping, & International Trade",
    slug: "maritime-shipping-international-trade",
    category: "Maritime & trade",
    image: getPracticeAreaImage("maritime-shipping-international-trade"),
    excerpt:
      "Shipping and maritime law in Ghana: financing, vessel arrest, cargo, charter parties, ports, registration, and representation for owners, insurers, and financiers.",
    description: [
      "We provide shipping and maritime law practices in Ghana and oversee a complex portfolio of shipping projects including ship financing. We handle legal issues related to vessel arrest, cargo-claims, liability issues, maritime liens, ship charter party disputes, vessel collision and salvage and marine insurance.",
      "We also handle legal matters relating to ports and harbours, warehousing, freight forwarding, sale and purchase of ships, and ship registration.",
      "We provide legal representation to clients in the shipping and maritime industry such as ship owners, operators and charterers; governments and government-owned carriers; marine insurers and reinsurers; freight forwarders and other shipping agents; cargo interests; lending banks and other financial institutions.",
    ],
  },
  {
    id: "4",
    title: "Legal Advisory, Company Secretarial & Regulatory Compliance",
    slug: "legal-advisory-company-secretarial-regulatory-compliance",
    category: "Regulatory",
    image: getPracticeAreaImage(
      "legal-advisory-company-secretarial-regulatory-compliance",
    ),
    excerpt:
      "Company formation, statutory compliance, and day-to-day secretarial support, including engagement with GSA, FDA, ORC, GRA, DPC, and other regulators.",
    description: [
      "Our firm’s secretarial team are there to assist you with all your legal and regulatory matters. Our team of attorneys advise companies on their ongoing obligations in a world where businesses are increasingly accountable to all stakeholders.",
      "We help with formation and registration of companies; licensing and permit; filing of annual returns; maintaining statutory registers; liaising with in-house lawyers to oversee stakeholders-company obligations and settlements.",
      "In addition to the above, we interface with the appropriate regulatory agencies like Ghana Standards Authority (GSA), Food and Drug Authority (FDA), Office of the Registrar of Companies (ORC), Ghana Revenue Authority (GRA) and Data Protection Commission (DPC) – inter alia, to ensure our clients comply with the applicable regulations and to enforce compliance for regulatory bodies.",
    ],
  },
  {
    id: "3",
    title: "Criminal Law",
    slug: "criminal-law",
    category: "Criminal defence",
    image: getPracticeAreaImage("criminal-law"),
    excerpt:
      "Defence lawyers with prosecutorial insight, handling the full range of Ghanaian criminal matters—from high-profile and narcotics cases to white-collar crime.",
    description: [
      "Our attorneys bring together experienced criminal defence lawyers, including those with prosecutorial experience, to help you navigate the maze of criminal justice.",
      "Our attorneys work in close-knit, multi-disciplinary teams tailored to each client’s needs. We are a “go to” firm for the entire range of offenses in Ghanaian criminal law including high-profile cases, narcotics related offenses, and white-collar crimes.",
      "No matter what stage your case is in, we can protect your rights and fight for the fair outcome you deserve.",
    ],
  },
  {
    id: "5",
    title: "Family Dispute & Resolution",
    slug: "family-dispute-resolution",
    category: "Family Dispute & Resolution",
    image: getPracticeAreaImage("family-dispute-resolution"),
    excerpt:
      "Sensitive support for wills and trusts, divorce and matrimonial property, deceased estates, and adoption & guardianship—so you can make confident decisions.",
    description:
      "We approach all family matters with sensitivity and care to all parties concerned and ultimately assisting in making confident decisions.",
    subsections: [
      {
        id: "wills-trust",
        title: "Wills & Trust",
        description:
          "The peace that one enjoys during and after life is when the future is planned properly. With guidance of our experienced attorneys, we assist clients with creating wills and setting up trusts.",
      },
      {
        id: "divorce-matrimonial",
        title: "Divorce & Matrimonial Property",
        description:
          "Inter-human relationships are indubitably one of the most difficult yet inevitable qualities of human. We assist with amicable dissolution of marriages that have irretrievably broken down with no chance of reconciling. Our attorneys help clients know their rights and achieve fair outcomes in divorce matters relating to matrimonial property settlement.",
      },
      {
        id: "deceased-estates",
        title: "Deceased Estates",
        description:
          "With a compassionate approach and proper legal guidance, we obtain the necessary documentation to administer the deceased estate. Our attorneys also offer legal assistance in addressing any disputes or claims against the deceased’s estate to resolve issues efficiently.",
      },
      {
        id: "adoption-guardianship",
        title: "Adoption & Guardianship",
        description:
          "Adoption and guardianship can be extremely emotional family matters. We offer legal guidance with child adoption in Ghana. We also handle guardianship for children, who are at risk and there is no concern for their future well-being, because the parents are struggling in their ability to provide for their children.",
      },
    ],
  },
  {
    id: "6",
    title: "Labour, Employment and Immigration",
    slug: "labour-employment-immigration",
    category: "Employment",
    image: getPracticeAreaImage("labour-employment-immigration"),
    excerpt:
      "Advice for public and private sectors on policies, discipline, redundancy, harassment, compensation, recruitment, dismissal, and HR documentation.",
    description:
      "Our team offer assistance to both public and private sectors with employment policies, and disciplinary procedures. We provide legal advice on various labour and employment issues namely redundancy, workplace harassment, workmen’s compensation, recruitment and dismissal of employees, drafting and review of human resource policies and manuals.",
  },
  {
    id: "7",
    title: "Debt Recovery",
    slug: "debt-recovery",
    category: "Recovery",
    image: getPracticeAreaImage("debt-recovery"),
    excerpt:
      "Practical support to recover what you are owed—moving claims forward quickly so unpaid bills and lost income do not further harm your position.",
    description: [
      "Our experienced attorneys help you recover money faster.",
      "We understand that your bills begin to add up and your lost income hurts your credit, we work quickly to get your claims moving.",
    ],
  },
  {
    id: "8",
    title: "Intellectual Property & Technology",
    slug: "intellectual-property-technology-law",
    category: "Intellectual Property & Technology",
    image: getPracticeAreaImage("intellectual-property-technology-law"),
    excerpt:
      "Protection and enforcement of intellectual property rights, software licensing, data protection, and technology-related contracts.",
    description: [
      "We assist clients in protecting and managing their intellectual property within Ghana's growing innovation and technology pace. Our team provides clear and effective legal solution to safeguard ideas, brands, and digital assets.",
      "Our services include: registration and protection of trademarks, copyrights, and other intellectual property rights, licensing and technology agreements, as well as data protection, and privacy compliance in line with applicable laws.",
      "We work closely with clients to protect their innovations, encure regulatory compliance, and support growth in increasingly digital economy.",
    ],
  },
];

export function getPracticeAreaBySlug(slug: string): PracticeArea | undefined {
  return practiceAreas.find((a) => a.slug === slug);
}

export function getAllPracticeAreaSlugs(): string[] {
  return practiceAreas.map((a) => a.slug);
}

export const lawyers: Lawyer[] = [
  {
    id: "1",
    name: "Daniel Arthur Ohene-Bekoe",
    slug: "daniel-ohene-bekoe",
    title: "Founding & Managing Partner",
    practiceAreas: [
      "Litigation, Arbitration & Dispute Resolution",
      "Maritime, Shipping & International Trade",
      "Taxation",
      "Human Rights & Constitutional matters",
      "Family Dispute Settlement",
      "Labour & Employment",
    ],
    image: "daniel-ohene-bekoe",
    intro:
      "Daniel Arthur Ohene-Bekoe is a distinguished Lawyer, Maritime Consultant, Chartered Arbitrator and Chartered Tax Consultant.",
    bio: [
      "Prior to establishing the firm in 2026, Mr. Ohene-Bekoe began his legal career at the Office of the Attorney-General and Ministry of Justice (OAGMoJ), where he served as an Assistant State Attorney. He joined the OAGMoJ in 2021 as Special Assistant to the Deputy Attorney-General and Minister for Justice, after undertaking his internship and national service in 2020 and his pupillage in 2021.",
      "An accomplished and dynamic litigator, Mr. Ohene-Bekoe has successfully handled a wide range of cases and appeared before all Superior Courts of Ghana. Over the years, he has provided strategic legal advisory services and expert opinions to clients both within and outside the shores of Ghana.",
      "He is a Drafting Team Member of the Republic of Ghana for the Seventh National Report to the Convention on Biological Diversity (CBD) and the First National Report on the Implementation of the Nagoya Protocol on Access to Genetic Resources and the Fair and Equitable Sharing of Benefits arising from their Utilization.",
      "Beyond legal practice, Mr. Ohene-Bekoe maintains a strong commitment to academia. With over seven years' experience as a lecturer, he has taught at Renvoi. He is currently a lecturer at the Central University and adjunct lecturer at Regional Maritime University. He has authored and published several scholarly articles in reputable journals, reflecting his dedication to research and academic excellence.",
      "Currently expanding his professional expertise, Mr. Ohene-Bekoe is pursuing advanced professional qualifications with the Chartered Institute of Taxation, Ghana and the Institute of Chartered Accountants Ghana, further strengthening his proficiency in taxation and accounting.",
      "Outside his professional and academic pursuits, he enjoys travelling, swimming, hiking, attending stage productions including plays by Uncle Ebo Whyte and spending quality time with his family. His multi-faceted interests reflect a balanced and purposeful approach to personal and professional growth.",
    ],
    qualifications: [
      "Master of Laws (LL.M.) – Maritime Law, University of Ghana",
      "Master of Arts (M.A.) – Ports and Shipping Administration, Regional Maritime University",
      "Qualifying Certificate in Law (B.L. – Barrister at Law) – Ghana School of Law",
      "Bachelor of Laws (LL.B.) – University of Ghana",
      "St. James Seminary and Senior High School, Sunyani",
    ],
    memberships: [
      "Ghana Bar Association",
      "African Bar Association",
      "Chartered Institute of Taxation, Ghana",
      "Young International Council for Commercial Arbitration",
    ],
    jurisdictions: ["Ghana"],
    specialisms: [
      "Litigation, Arbitration & Dispute Resolution",
      "Maritime, Shipping & International Trade",
      "Taxation",
      "Human Rights & Constitutional matters",
      "Family Dispute Settlement",
      "Labour & Employment",
    ],
    career: [
      {
        // firm: "ICC arbitration (Republic of Ghana)",
        firm: "",
        role: "Part of the legal team represented the Republic of Ghana in an ICC arbitration involving a dispute of US$12.5 million branch profit tax brought by an investor company",
      },
      {
        // firm: "Supreme Court of Ghana",
        firm: "",
        role: "Supreme Court case which …, ",
        caseName:
          "Shafic Osman vs Board of Governors Wesley Girls Senior High, Ghana Education Service & Attorney-General",
      },
      {
        // firm: "Supreme Court of Ghana",
        firm: "",
        role: "Supreme Court case which …., ",
        caseName: "Benjamin Yaw Osei vs Attorney-General",
      },
      {
        // firm: "Supreme Court of Ghana",
        firm: "",
        role: "Supreme Court case which clarified the proper procedure, scope and conditions under which Civil Form 6 may be issued in appeal proceedings, ",
        caseName:
          "Thomas Odei Boafo vs The Judicial Service & Attorney-General",
      },
      {
        // firm: "Corporate Insolvency and Restructuring Act, 2020 (Act 1015)",
        firm: "",
        role: "Conducted the first two cases under the Corporate Insolvency and Restructuring Act, 2020 (Act 1015), ",
        caseName: "Attorney-General vs Q-Net Investment Company and",
        caseSuffix: ".",
      },
    ],
    contact: {
      email: "daohene-bekoe@obpgh.com",
      phone: "+233 20 588 2007",
    },
  },
  {
    id: "2",
    name: "Irene Ofori-Ani",
    slug: "irene-ofori-ani",
    title: "Partner",
    practiceAreas: [
      "Corporate & Commercial Law",
      "Legal Advisory, Company Secretarial & Regulatory Compliance",
      "Intellectual Property & Technology Law",
      "Mining, Oil & Gas",
    ],
    image: "irene-ofori-ani",
    intro:
      "Irene is a Founding Partner of the firm. She leads the Corporate & Commercial Law practice and the Intellectual Property and Technology, and Legal Advisory, Company Secretarial & Regulatory Compliance practice groups.",
    bio: [
      "She is a Ghana-qualified Barrister and Solicitor with experience in corporate, regulatory, and energy-related litigation matters. She advises local and international clients on company establishment and regulatory compliance in Ghana across regulated sectors, and has experience supporting complex disputes, including international oil and gas litigation. She is adept at bringing these disputes in at a realistic cost.",
      "Irene was previously an Associate of Equator Law. This position afforded her exposure to more varied aspects of drafting, complex national transactions, and regulatory frameworks. She left private practice in 2023 and joined a company in United Kingdom as Legal Administrator.",
      "Irene brings strong legal insight, commercial awareness, meticulous approach, and cross-jurisdictional experience gained from working in both Ghana and the United Kingdom.",
    ],
    qualifications: [
      "Qualifying Certificate in Law (B.L. – Barrister at Law) – Ghana School of Law",
      "Bachelor of Laws (LL.B.) – University of Ghana, Legon",
      "WASSCE – Akosombo International School, Akosombo",
    ],
    memberships: ["Ghana Bar Association"],
    jurisdictions: ["Ghana", "United Kingdom"],
    specialisms: [
      "Corporate & Commercial Law",
      "Legal Advisory, Company Secretarial & Regulatory Compliance",
      "Intellectual Property & Technology Law",
      "Mining, Oil & Gas",
    ],
    contact: {
      email: "irene.ofori-ani@obpgh.com",
      phone: "+233 20 588 2007",
    },
  },
  {
    id: "3",
    name: "Lauda-Lois Williams",
    slug: "lauda-lois-williams",
    title: "Of Counsel",
    practiceAreas: [
      "Litigation, Arbitration & Dispute Resolution",
      "Family Dispute Settlement",
      "Construction & Real Estate",
      "Corporate & Commercial Law",
      "Legal Advisory, Company Secretarial & Regulatory Compliance",
      "Human Rights, Gender Law & Civil Justice",
    ],
    image: "lauda-lois-williams",
    intro:
      "Lauda-Lois Williams is a Ghanaian-trained lawyer and Juris Doctor candidate at the University of Iowa College of Law with experience spanning criminal prosecution, international legal cooperation, family law, estate planning, corporate governance, and real estate transactions across Ghana and the United States.",
    bio: [
      "She previously served as a pupil with the Office of the Attorney General and Ministry of Justice, where she advised on serious criminal matters, supported extradition and mutual legal assistance proceedings, negotiated plea agreements, and prepared cases for trial. Her experience also includes private practice in the United States, where she assisted with family law litigation and estate planning.",
      "She brings strong legal research and drafting skills, courtroom preparation experience, cross-cultural competence, and a demonstrated commitment to justice and international legal collaboration.",
    ],
    qualifications: [
      "Juris Doctor Candidate – University of Iowa College of Law, Iowa, USA",
      "Qualifying Certificate in Law (B.L. – Barrister at Law) – Ghana School of Law, 2023",
      "Bachelor of Laws (LL.B.) – University of Ghana, Legon, 2021",
    ],
    memberships: [
      "Ghana Bar Association",
      "Black Law Students Association (BLSA)",
    ],
    jurisdictions: ["Ghana", "United States"],
    specialisms: [
      "Litigation, Arbitration & Dispute Resolution",
      "Family Dispute Settlement",
      "Construction & Real Estate",
      "Corporate & Commercial Law",
      "Legal Advisory, Company Secretarial & Regulatory Compliance",
      "Human Rights, Gender Law & Civil Justice",
    ],

    contact: {
      email: "lauda-lois.williams@obpgh.com",
      phone: "+233 20 588 2007",
    },
  },
  {
    id: "4",
    name: "Emmanuel Opoku Somuah",
    slug: "emmanuel-opoku-somuah",
    title: "Consultant",
    practiceAreas: [
      "Litigation",
      "Criminal Law",
      "Immigration",
      "Human Rights and Constitutional Matters",
      "Family Law",
    ],
    image: "emmanuel-opoku-somuah",
    intro:
      "Emmanuel Opoku Somuah is a highly skilled legal professional licensed to practice law in both New York and Ghana. He possesses extensive experience in criminal practice, having served as a public defender at the Legal Aid Commission.",
    bio: [
      "In his role at the Legal Aid Commission, he was involved in high-profile criminal cases, directly honing his advocacy and litigation skills. Currently, as an Associate Attorney at Raju Law Firm, Emmanuel is dedicated to helping individuals, families, and organizations navigate the complexities of the U.S. immigration system with clarity, empathy, and confidence.",
      "He brings on board a trans-jurisdictional expertise, which allows him to seamlessly integrate knowledge of both Ghanaian and U.S. legal systems, providing clients with strategic, well-rounded, and practical legal solutions.",
    ],
    qualifications: [
      "Master of Laws (LL.M.) – Pennsylvania State University",
      "Qualifying Certificate in Law (B.L. – Barrister at Law) – Ghana School of Law",
      "Bachelor of Laws (LL.B.) – University of Ghana",
      "Presbyterian Boys' Senior High School, Legon",
      "Certified Information Privacy Professional/US",
      "Certified Information Systems Auditor",
    ],
    memberships: ["New York State Bar Association", "Ghana Bar Association"],
    jurisdictions: ["New York", "Ghana"],
    specialisms: [
      "Litigation",
      "Criminal Law",
      "Immigration",
      "Human Rights & Constitutional Matters",
      "Family Dispute Settlement",
    ],

    contact: {
      email: "emmanuel.opoku-somuah@obpgh.com",
      phone: "+233 20 588 2007",
    },
  },
  {
    id: "5",
    name: "Gillian Adjoa Acheampong",
    slug: "gillian-adjoa-acheampong",
    title: "Candidate Attorney",
    // Candidate Attorneys are not assigned practice areas.
    practiceAreas: [],
    image: "gillian-adjoa-acheampong",
    intro:
      "Ms. Acheampong is a Candidate Attorney in the firm’s Litigation, Arbitration and Dispute Resolution, and Corporate and Commercial Law practice groups.",
    bio: [
      "With a meticulous eye for detail, she delivers exceptional results through dedicated professionalism.",
      "Ms. Acheampong served as an Intern and Paralegal at Kwame Gyan & Associates, where she gained practical experience in legal research, drafting legal documents, litigation support, and client advisory.",
      "Her interests include Corporate and Commercial Law, Contract Law, Property Law, and Alternative Dispute Resolution.",
    ],
    qualifications: [
      "Bachelor of Laws (LLB) – Central University",
      "Bachelor of Science in Marketing (BSc) – Ghana Communication Technology University",
    ],
    contact: {
      phone: "+233 20 588 2007",
    },
  },
  {
    id: "6",
    name: "Samuel Bennett Owusu",
    slug: "samuel-bennett-owusu",
    title: "Candidate Attorney",
    // Candidate Attorneys are not assigned practice areas.
    practiceAreas: [],
    image: "samuel-bennett-owusu",
    intro:
      "Samuel is an LL.B. candidate with background in Nursing. He serves as a Candidate Attorney in the law firm as he supports the Litigation, Arbitration and Dispute Resolution, and Criminal Law practice groups.",
    bio: [
      "He values professionalism, efficiency and continuous learning in his career. His lifestyle reflects his discipline, passion for growth and appreciation for balance between work and personal life.",
    ],
    qualifications: [
      "Bachelor of Laws (LL.B.) – Greenfield University College",
      "Bachelor of Science in Nursing (BSN) – University of Ghana",
      "St. James Seminary and Senior High School",
    ],
    contact: {
      phone: "+233 20 588 2007",
    },
  },
];

/**
 * Professional staff are listed by role while their names, photographs, and
 * profiles are still being gathered. Cards are deliberately not links until
 * there is a profile to open.
 */
export interface ProfessionalStaffRole {
  id: string;
  title: string;
  /** What the role does. Replaced by an individual profile once names are supplied. */
  description: string;
}

export const professionalStaff: ProfessionalStaffRole[] = [
  {
    id: "1",
    title: "Office Manager",
    description:
      "Runs the day-to-day operations of the chambers — client reception and scheduling, file and records management, billing support, procurement, and correspondence — so that matters progress without administrative delay.",
  },
  {
    id: "2",
    title: "Clerk",
    description:
      "Handles the firm’s court and registry work — filing and serving processes, monitoring cause lists and hearing dates, retrieving records, and liaising with the court registries so that every deadline and procedural requirement is met.",
  },
];

export const insights: Insight[] = [
  {
    id: "6",
    title:
      "GUILTY BUT TOO BIG TO BE BEHIND BARS? THE CASE OF PATRICIA ASIEDUAA ALIAS NANA AGRADAA VS THE REPUBLIC",
    slug: "guilty-but-too-big-to-be-behind-bars-agradaa",
    image: getInsightImage("guilty-but-too-big-to-be-behind-bars-agradaa"),
    author: "DANIEL ARTHUR OHENE-BEKOE ESQ.[^1]",
    excerpt:
      "On Tuesday, 3rd March, 2026, reports on social media and online news portals appeared to show that one Evangelist Patricia Asieduaa had been released from prison. The news of her release has caused mixed reactions from the public. Whilst her followers celebrated her release, many discerning Ghanaians have reacted to the news of her release with strong criticism, and their reason is simply that the judicial system appears to have enabled her “celebrity status” to influence the outcome of the case.",
    date: "2026-08-29",
    category: "Criminal Law",
    section: "publications",
    featured: true,
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "On Tuesday, 3rd March, 2026, reports on social media and online news portals appeared to show that one Evangelist Patricia Asieduaa had been released from prison. The news of her release has caused mixed reactions from the public. Whilst her followers celebrated her release, many discerning Ghanaians have reacted to the news of her release with strong criticism, and their reason is simply that the judicial system appears to have enabled her “celebrity status” to influence the outcome of the case.",
          "Cases involving high profile personalities in general and this case in particular, have fuelled negative public perception that, some individuals have become too powerful in the country that when they go against the law, they are not held accountable for their actions. These individuals are well-known personalities who were propelled into the public limelight through their contributions to politics, sports, business, entertainment or religion.",
          "It would appear as though the catchphrase, “do not do the crime if you cannot do the time” to a large extent, is not applicable to these well-known personalities because for some technical or other reasons, they tend to get away with crimes or get little more than a slap on the wrist even when they are found liable. In those few instances when they are actually prosecuted, they are generally sentenced more leniently than citizens who faced similar charges. They receive prison sentences less frequently and serve less prison time than citizens facing similar charges for crimes.",
          "Based on the existing perception, the recent judgment of the High Court in the case of Patricia Asieduaa alias Nana Agradaa vs The Republic[^2] (The Agradaa case) has unleashed more criticism by a public suspicious that there is a judicial bias in favour of well-known personalities. This begs the question of whether there is indeed judicial bias in favour of well-known personalities and whether there is a double standard at which well-known personalities and the citizens are subjected to when they find themselves before the Courts.",
        ],
      },
      {
        heading: "Is There A “Too Big to Be Behind Bars” Problem?",
        paragraphs: [
          "To put it quite bluntly, the popular narrative that well-known personalities usually avoid prison is alien to the Ghanaian system of justice. The category of person, be rich or poor, popular or unpopular, privileged or underprivileged, young or old, is not an exception to the equal application of the law.[^3]",
          "There is a litany of cases where well-known personalities were found guilty and thrown behind bars. Eugene Baffoe-Bonnie and William Tetteh Tevie, former Board Chairman and Director-General respectively of National Communication Authority, found themselves serving a term of five years imprisonment after being convicted for wilfully causing financial loss to the State.[^4] Abuga Pele, a former Member of Parliament, was sentenced to six years in prison, facing the full force of the law after his conviction.[^5] Victor Selormey, a former Deputy Minister for Finance was convicted and sentenced to eight years imprisonment.[^6] Mallam Ali Yusuf Issah, a former Minister for Youth and Sports was convicted in 2001 and sentenced to concurrent terms of four years imprisonment in respect of stealing and fraudulently causing financial loss to the State.[^7] William Ato Essien, a former CEO of defunct Capital Bank, was sentenced to 15 years imprisonment.[^8] Sedina Tamakloe, former CEO of Microfinance and Small Loans Centre (MASLOC), was convicted in absentia and sentenced to 10 years imprisonment.[^9] Ibrahim Sima, former CEO of a modelling agency, was convicted in 2011 for possession and attempt to export narcotics and sentenced to a 15-year jail term.[^10] Nana Akwasi Agyeman alias Geeman, then musician and dancer, and Abeiku Nyame alias Jaggerpee, then actor, were sentenced to death by hanging and sentenced for life respectively. On appeal, the Court of Appeal convicted Jaggerpee of assault, quashing the initial conviction of abetment of murder, and he was sentenced to a two-year jail term, while Geeman’s conviction was affirmed.[^11]",
          "Admittedly, well-known personalities possess privileges unavailable to others. However, if the above-cited cases are anything to go by, they tend to prove that the legal system treats them no differently; rather, significant expectations are placed upon them for the privileged status they occupy. They inspire and influence the younger generation who hold them in high regard. It is only right, therefore, that when people in positions of authority, respect, influence, or favourable circumstances fail the nation, it is treated with all the seriousness it requires.",
        ],
      },
      {
        heading: "Is The Sentence in Agradaa’s Case Common?",
        paragraphs: [
          "When a person is found to be criminally liable for the commission of a criminal act, that person is convicted of the offense and sentenced accordingly.",
          "Section 132 of Criminal Offences Act, 1960 (Act 29) articulates the definition of defrauding by false pretences. It states that:",
          "“A person is guilty of defrauding by false pretences if, by means of any false pretences, or by personation he obtains the consent of another person to part with or transfer the ownership of anything.”",
          "In determining whether the sentence imposed in the Agradaa case is consistent with the law or she received some preferential treatment as a well-known personality, recourse is made to section 131 of Act 29 and section 296(5) of the Criminal Procedure Act, 1960 (Act 30).",
          "Section 131 of Act 29 states that:",
          "“(1) A person who defrauds any other person by a false pretence commits a second degree felony”.",
          "Section 296(5) of Act 30 states that:",
          "“A person convicted of a criminal offence under any of the following sections of the Criminal Offences Act, 1960 (Act 29), that is to say, sections 124, 128, 131, 138, 145, 151, 152, 154, 158, 165, 239, 252, 253 and 260 is liable to a term of imprisonment not exceeding twenty-five years”",
          "In The Agradaa case, the learned trial judge clearly had the discretion to impose any sentence which is not more than twenty-five (25) years. The sentence imposed was clearly within the confines of the law. It is mandatory for a trial judge to impose a custodial sentence and the judge may decide to sentence the convicted person to a fine in addition to the prison sentence.[^12]",
        ],
      },
      {
        heading: "Facts of The Agradaa Case",
        paragraphs: [
          "The Circuit Court on 5th July, 2025, convicted and sentenced Agradaa of 25 penalty units or in default of payment serve three months imprisonment for charlatanic advertisement in newspapers. She was convicted and sentenced to 15 years imprisonment with hard labour for defrauding by false pretences. Agradaa then appealed against her conviction and sentence. On the back of the appeal, the High Court affirmed her convictions and sentence of 25 penalty units or in default of payment serve three months imprisonment for charlatanic advertisement in newspapers. Nonetheless, the High Court substituted the sentence imposed by the Circuit Court with a sentence of 12 calendar months’ imprisonment for defrauding by false pretences.",
        ],
      },
      {
        heading:
          "How different is The Agradaa case from other defrauding by false pretence cases?",
        paragraphs: [
          "It is convenient at this point to consider briefly some decided cases on defrauding by false pretences and the sentences imposed on the convicts therein.",
          "Earlier, in the case of Blay vs The Republic,[^13] the appellant represented to the complainant that he could multiply an amount of money. The complainant paid G2,000.00 to the appellant. He was convicted of defrauding by false pretences and handed a sentence of three years’ imprisonment with hard labour. On appeal, the High Court reduced the sentence of three years to eighteen (18) months in prison.",
          "In the case of Darkurugu vs The Republic,[^14] the accused person was arraigned before the trial court on charges of fraud by false pretences and deceit of public officer. He was convicted and sentenced to twelve months’ imprisonment. On appeal, the court substituted the twelve months’ imprisonment for the offence of defrauding by false pretences with a fine of GHS 1,000.00 and in default three months’ imprisonment.",
          "In the case of Republic vs Appiah,[^15] the accused person, an Aviation Security Officer, who took an amount of GHS 20,000.00 from the complainant, was found guilty of defrauding by false pretences. The accused person was sentenced to serve a term of imprisonment of twelve (12) months in hard labour.",
          "In the case of Republic vs Damian,[^16] the accused person, a national of Cameroon, was charged with defrauding the complainant of GHS 36,000.00 by false pretences. The accused person was convicted and sentenced to six (6) months in prison custody and a fine of 700 penalty units, in default another six (6) months in prison custody.",
          "Also, in the case of Republic vs Mills,[^17] the accused person was convicted for defrauding the first complainant of USD $4,500.00 and GHS 10,000.00 and the second complainant of GHS 42,000.00. The accused person was sentenced to pay a fine of 3000 penalty units or, in default, eight (8) months imprisonment on each count.",
          "Quite recently, in Republic vs Opoku,[^18] the accused person parted with an amount of GHS 15,000.00 under the pretext of providing “pragia” to the complainant. After conviction, the accused person was sentenced to a fine of 80 penalty units or in default eight (8) months imprisonment.",
          "From a comparative analysis for cases involving the same offence as Agradaa’s case, the result is that the initial sentence imposed in The Agradaa case focused too heavily on her personality as a well-known individual as opposed to ensuring proportionality among deterrence, precedent and established facts. Her status as an offender to an extent was a factor when the trial judge considered the custodial sentence, as it “would send a clear message to deter all would be offender”.[^19] It was, therefore, unsurprising that the sentence was reduced on appeal.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "It is common to hear that something is awry with the legal system in Ghana since well-known personalities who commit criminal offences appear to be treated with light gloves. The analysis made indicate that contrary to the assertion that well-known personalities are immune to prison terms, well-known personalities are not above the law and are made to face the full price for their actions.",
          "These well-known personalities are rather used as scapegoats, in order to illustrate a point. The Courts know and understand how much society idolizes these personalities. Subjecting them to severe punishment for their crimes, the courts hope to deter the ordinary citizen from committing such crimes.",
          "To the best of my knowledge, Agradaa’s status seems to have played a role in her sentencing when she was before the trial judge. If Agradaa was not well-known, it is probable that she would have been subjected to the standard punishment applicable to any other citizen or to a large extent been sentenced to pay a fine or in default, serve some months prison term just like “Patrick”[^20]. Agradaa’s influence made it easier for her to be used as a sacrificial lamb, however, just as the angel of the Lord intervened at the last moment for Isaac on Mount Moriah,[^21] Agradaa perhaps on a different mountain was saved from 15 years imprisonment.",
          "Although it difficult to deny that well-known personalities may receive preferential treatment or judicial favour, I am clear in my mind, based on the analysis that preferential treatment did not seep over into the outcome of the High Court decision in The Agradaa case.",
        ],
      },
    ],
    footnotes: [
      "The opinion expressed in this article is that of the author alone and do not necessarily reflect the views of his clients, employer or institution.",
      "Suit No. F/CRA/AHC/16/2025 (HC, 5 February, 2026).",
      "1992 Constitution of Ghana, art 17(1).",
      "The Republic vs Baffoe Bonnie and Others, Suit No. CR/904/2017 (HC, 12 May, 2020).",
      "The Republic vs Philip Assibit & Abuga Pele, Suit No. FTRM 122/14, (HC, 23 February, 2018).",
      "The Republic vs Selormey [2001-2002] 2 GLR 424.",
      "The Republic vs Mallam Ali Yusuf Issah, Suit No. FR/MISC/2001, (HC, 20 July, 2001); See also, The Republic vs Adam & Others [2003-2005] 2 GLR 661, where a former Minister for Agriculture was convicted and sentenced to two years imprisonment.",
      "The Republic vs William Ato Essien, Suit No. CR/0014/2020, (HC, 12 October, 2023).",
      "The Republic vs Sedina Tamakloe, Suit No. CR 241/2019, (HC, 16 April, 2024).",
      "Sima Ibrahim vs The Republic, Criminal Appeal No. H2/27/12 (CA, 14 March, 2013).",
      "Agyeman @Geeman & Nyame @Jaggerpee vs The Republic No. 7/98 (CA, 18 November, 1998).",
      "Raphael Nii Otu vs The Republic, Suit No. CR/0261/2025, (HC, 26 May, 2025).",
      "Blay vs The Republic [1968] GLR 1040.",
      "Darkurugu vs The Republic [1989-1990] 1 GLR 308.",
      "Republic v Bright Opare Appiah, Case No. D6/062/24, (CC, 20 March, 2025).",
      "Republic vs Nyambu Damian & Samuel Ablaya @large, Suit No. D2/168/2023, (CC, 15 February, 2024).",
      "Republic vs Prof. Nii Odartey Mills, Suit No. D6/197/2022, (CC, 16 January, 2025).",
      "Republic vs Ursla Opoku, CC No. B7/05/2025, (DC, 24 June, 2025).",
      "Republic vs Mohammed Libabatu & 2 Others, Suit No. FTRM 15/16, (HC, 24 March, 2016).",
      "The Republic vs Patrick Adu Asante, Suit No. CC/121/21, (DC, 24 July, 2024), where the accused person, Patrick Adu Asante, was found guilty of the offence of defrauding by false pretences and sentenced to pay a fine of 350 penalty units or in default, he should serve one-year prison term.",
      "The Bible (New Living Translation), Genesis 22:12.",
    ],
  },
  {
    id: "1",
    title: "Force majeure and energy supply contracts in the Hormuz crisis",
    slug: "force-majeure-energy-hormuz",
    image: getInsightImage("force-majeure-energy-hormuz"),
    excerpt:
      "Crude prices have surged amid disruption in the Strait of Hormuz, with producers reportedly issuing force majeure notices on oil and LNG shipments. For companies operating in the region, key considerations include contractual triggers, notice requirements, and mitigation.",
    date: "2026-03-09",
    category: "Energy & Infrastructure",
    section: "publications",
    featured: true,
    content: [
      {
        paragraphs: [
          "Crude prices have surged amid disruption in the Strait of Hormuz, with producers reportedly issuing force majeure notices on oil and LNG shipments. For companies operating in the region, key considerations include contractual triggers, notice requirements, and mitigation.",
          "This briefing sets out the principal legal and practical issues for parties to energy supply contracts, and suggests steps that buyers and sellers can take to protect their position and manage exposure.",
        ],
      },
      {
        heading: "When can force majeure be invoked?",
        paragraphs: [
          "Force majeure clauses vary widely. Many require the relying party to prove that (i) an event beyond its reasonable control has occurred, (ii) that event has prevented or delayed performance, and (iii) the party has complied with any notice and mitigation obligations.",
          "Disruption to shipping routes, closure of ports, or government action affecting supply may qualify depending on the drafting. Parties should check whether the clause lists specific events (e.g. war, blockade, acts of government) and whether there is a catch-all. Some clauses require the event to be unforeseeable; others do not.",
        ],
      },
      {
        heading: "Notice and mitigation",
        paragraphs: [
          "Contracts almost always require prompt notice of a force majeure event. Failure to give notice in time can be a bar to relief. Notice should describe the event, its impact on performance, and (if required) the expected duration. Keep evidence of when and how notice was given.",
          "Many clauses also require the affected party to use reasonable endeavours to mitigate. That can include seeking alternative supply or routes, and keeping the counterparty informed. Document all steps taken.",
        ],
      },
      {
        heading: "Next steps",
        paragraphs: [
          "If you are party to energy supply contracts that may be affected by disruption in the region, we recommend reviewing the force majeure and related provisions (including termination and suspension rights), assessing whether notice or mitigation obligations have been triggered, and ensuring that internal and external communications are consistent with your legal position.",
          "Our energy and dispute resolution teams advise on force majeure, supply chain disruption, and related contractual and regulatory issues. For further information, please contact us.",
        ],
      },
    ],
  },
  {
    id: "2",
    title:
      "Ohene-Bekoe & Partners expands dispute resolution and regulatory advisory capacity in Accra",
    slug: "dispute-regulatory-expansion-accra-2026",
    image: getInsightImage("dispute-regulatory-expansion-accra-2026"),
    excerpt:
      "The firm has grown its litigation, arbitration, and company secretarial teams to support clients on complex Ghanaian and cross-border matters, with additional senior capacity across maritime, energy, and regulatory compliance.",
    date: "2026-02-23",
    category: "Firm News",
    section: "firm-news",
    featured: false,
    content: [
      {
        paragraphs: [
          "Ohene-Bekoe & Partners has expanded its dispute resolution and regulatory advisory offering in Accra, adding senior lawyer capacity across litigation, arbitration, and company secretarial mandates.",
          "The investment reflects sustained client demand for high-stakes commercial and public-law disputes, international arbitration with a Ghana and West Africa connection, and day-to-day regulatory and compliance support for corporates and institutions.",
        ],
      },
      {
        heading: "What clients can expect",
        paragraphs: [
          "Teams are structured to support instructions from early risk assessment and pre-action strategy through to trial, arbitration, and enforcement, including coordination with counsel in other jurisdictions where matters span multiple forums.",
          "The firm’s company secretarial and regulatory group continues to work closely with dispute lawyers on investigations, regulatory engagement, and governance issues that may arise alongside litigation or arbitration.",
        ],
      },
      {
        heading: "Comment",
        paragraphs: [
          "Daniel Arthur Ohene-Bekoe, Founding & Managing Partner, said: 'Our clients operate in demanding sectors—maritime, energy, financial services, and regulated industries—and they need advisers who can move quickly and think across disputes and compliance. Deepening our bench in Accra is central to how we serve them.'",
          "For further information about the firm’s capabilities or to discuss a new matter, please contact us through the details on our website.",
        ],
      },
    ],
  },
  {
    id: "3",
    title:
      "Ohene-Bekoe & Partners recognised in Chambers Global Guide for 2026",
    slug: "chambers-global-2026",
    image: getInsightImage("chambers-global-2026"),
    excerpt:
      "We are pleased to share Ohene-Bekoe & Partners' recognition in the Chambers and Partners Global 2026 guide, which reflects the global standing of our international arbitration practice.",
    date: "2026-02-12",
    category: "Recognition",
    section: "firm-news",
    featured: false,
    content: [
      {
        paragraphs: [
          "We are pleased to share Ohene-Bekoe & Partners's recognition in the Chambers and Partners Global 2026 guide. The firm is ranked in the areas of International Arbitration and Commercial Litigation, and several of our partners are ranked as leading individuals.",
          "Chambers Global is one of the leading legal directories, with rankings based on research and feedback from clients and peers. Recognition in the guide reflects the quality of our work and the trust that our clients place in us.",
        ],
      },
      {
        heading: "Rankings and feedback",
        paragraphs: [
          "Ohene-Bekoe & Partners is ranked in Band 2 for International Arbitration (Global-wide) and in Band 3 for Commercial Litigation (England). Feedback cited in the guide describes the firm as 'an astoundingly good unit of top litigators' and 'exceptional across the board,' with clients noting our 'strategic approach' and 'ability to handle the most complex disputes.'",
          "Partners Daniel Arthur Ohene-Bekoe, Ama Serwaa, and Abena Akoto are ranked in International Arbitration and/or Commercial Litigation. The directory notes their experience in high-value commercial and investment arbitration, and in multi-jurisdictional litigation.",
        ],
      },
      {
        heading: "Thank you",
        paragraphs: [
          "We would like to thank our clients and peers for their continued support and for the feedback that contributes to these rankings. We remain committed to delivering the highest standard of advice and representation in our core practice areas.",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Regulatory outlook for digital assets in 2026",
    slug: "regulatory-digital-assets-2026",
    image: getInsightImage("regulatory-digital-assets-2026"),
    excerpt:
      "An overview of expected regulatory developments for digital assets and crypto-asset service providers in the UK and EU, and implications for financial institutions.",
    date: "2026-01-28",
    category: "Regulatory & Compliance",
    section: "client-updates",
    featured: false,
    content: [
      {
        paragraphs: [
          "The regulatory landscape for digital assets and crypto-asset service providers continues to evolve in the UK and EU. This note summarises key developments expected in 2026 and their implications for firms that issue, hold, or facilitate trading in crypto-assets.",
          "Firms should monitor policy statements, draft legislation, and regulatory guidance, and ensure that their governance, systems, and documentation are aligned with current and anticipated requirements.",
        ],
      },
      {
        heading: "UK developments",
        paragraphs: [
          "In the UK, the Financial Conduct Authority (FCA) has expanded its regime for crypto-asset activities. The marketing regime for crypto-assets is in force, and the FCA has indicated that it will continue to focus on anti-money laundering (AML) compliance and consumer protection.",
          "Further legislation may bring additional activities within the regulatory perimeter. Firms that are in scope or may be in scope should maintain close engagement with legal and compliance advisers and with the FCA where appropriate.",
        ],
      },
      {
        heading: "EU MiCA and beyond",
        paragraphs: [
          "In the EU, the Markets in Crypto-Assets Regulation (MiCA) is being phased in. Key provisions apply to issuers of asset-referenced tokens and e-money tokens, and to crypto-asset service providers (CASPs). Requirements cover authorisation, capital, governance, disclosure, and conduct of business.",
          "National competent authorities are implementing MiCA and publishing guidance. Firms with an EU presence or serving EU clients should ensure that they are compliant with the applicable MiCA and national rules, and should plan for any further EU initiatives in 2026.",
        ],
      },
      {
        heading: "Implications for financial institutions",
        paragraphs: [
          "Banks and other financial institutions that provide custody, clearing, or other services in relation to crypto-assets may be subject to overlapping regimes. They should map their activities to the applicable regulatory requirements and maintain a clear view of how the UK and EU frameworks apply.",
          "For further information on the regulatory treatment of digital assets and on compliance programmes, please contact our regulatory and compliance team.",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Dispute resolution trends in West Africa",
    slug: "dispute-resolution-trends-west-africa",
    image: getInsightImage("dispute-resolution-trends-west-africa"),
    excerpt:
      "Arbitration and litigation across the region continue to evolve. We consider recent developments and what they mean for international investors and local parties.",
    date: "2026-01-15",
    category: "Dispute Resolution",
    section: "publications",
    featured: false,
    content: [
      {
        paragraphs: [
          "Arbitration and litigation across West Africa continue to evolve, with new legislation, institutional developments, and a growing body of case law. This note highlights recent trends and their implications for international investors and local parties.",
          "The region remains an important destination for investment in energy, infrastructure, mining, and finance. Disputes in these sectors often involve cross-border elements, choice of law and seat, and enforcement across jurisdictions. Understanding the local and international framework is essential.",
        ],
      },
      {
        heading: "Arbitration law and institutions",
        paragraphs: [
          "Several jurisdictions in the region have adopted or updated arbitration legislation based on the UNCITRAL Model Law. Ghana, Nigeria, and Senegal are among the states that have sought to create a more predictable environment for international arbitration.",
          "Regional and international institutions, including the Lagos Chamber of Commerce International Arbitration Centre (LACIAC), the OHADA CCJA, and the ICC, are frequently chosen for disputes with a West African connection. Seat selection, enforceability of awards, and the availability of interim relief remain key considerations for parties and their advisers.",
        ],
      },
      {
        heading: "Enforcement and courts",
        paragraphs: [
          "Enforcement of arbitral awards in the region has improved in many jurisdictions, though local advice is often needed to navigate procedural requirements and any challenges. The New York Convention is in force in a number of West African states, and courts have shown increasing willingness to uphold awards that meet the convention's criteria.",
          "Commercial courts or dedicated divisions have been established in some jurisdictions to handle complex commercial and arbitration-related matters. Their decisions are contributing to a more consistent and transparent body of law.",
        ],
      },
      {
        heading: "Practical considerations",
        paragraphs: [
          "Parties drafting contracts with a West African connection should consider the choice of governing law, seat of arbitration, and institution; the availability of interim measures; and the ease of enforcement in the relevant jurisdictions. Local counsel can assist with due diligence and with any court proceedings.",
          "Ohene-Bekoe & Partners advises clients on international arbitration and litigation with a West African dimension, including under OHADA, English law, and other applicable laws. For further information, please contact us.",
        ],
      },
    ],
  },
];

export function getInsightsBySection(section: InsightSection): Insight[] {
  return insights.filter((i) => i.section === section);
}

export const industries: Industry[] = [
  {
    id: "1",
    name: "Financial Institutions",
    description: "Banks, asset managers, and financial services",
  },
  {
    id: "2",
    name: "Energy & Natural Resources",
    description: "Oil, gas, mining, and renewables",
  },
  {
    id: "3",
    name: "Technology & Telecommunications",
    description: "Tech companies and telecoms operators",
  },
  {
    id: "4",
    name: "Real Estate Development",
    description: "Developers, investors, and funds",
  },
  {
    id: "5",
    name: "Government & Public Sector",
    description: "State entities and public bodies",
  },
];
