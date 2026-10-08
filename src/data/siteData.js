export const siteConfig = {
  brand: {
    name: "VASUNDHARA",
    tagline: "Diagnostics & Fetal Medicine Centre",
    fullName: "Vasundhara Diagnostics & Fetal Medicine Centre",
    association: "with SAI KIRAN DIABETIC CLINIC",
    motto: "Specialized Care. One Trusted Centre.",
    subMotto: "Advanced fetal medicine, diagnostics and dedicated diabetes care designed around clearer answers, informed decisions and compassionate care.",
    logoUrl: "/images/vasundhara_logo.png",
    buildingImage: "/images/vasundhara_building.jpg",
    fetalHeroImage: "/images/fetal_ultrasound_suite.jpg",
    diabetesHeroImage: "/images/diabetes_care_consultation.jpg",
    interiorImage: "/images/about_clinic_interior.jpg",
    fetalFeatureImage: "/images/fetal_feature_care.jpg",
  },
  contact: {
    address: "Sai Nagar, Anantapur, Andhra Pradesh – 515001, India",
    landmark: "Sai Nagar Main Double Road Avenue",
    area: "Sai Nagar",
    city: "Anantapur",
    state: "Andhra Pradesh",
    pincode: "515001",
    phoneDesk: "79893 30974",
    phoneDeskRaw: "7989330974",
    hotline: "+91 93912 51558",
    hotlineRaw: "9391251558",
    whatsappNumber: "917989330974",
    whatsappUrl: "https://wa.me/917989330974?text=Hello%20Vasundhara%20Diagnostics%20%26%20Sai%20Kiran%20Diabetic%20Clinic,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.",
    email: "contact@vasundharadiagnostics.com",
    timings: "Mon–Sat: 9:00 AM – 8:00 PM | Sun: 9:00 AM – 1:00 PM",
    opdLive: "CLINIC OPEN TODAY",
    googleMapsEmbed: "https://maps.google.com/maps?q=Vasundhara%20Diagnostics%20Fetal%20Medicine%20Centre%20Sai%20Nagar%20Anantapur&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Vasundhara+Diagnostics+Fetal+Medicine+Centre+Sai+Nagar+Anantapur",
  },
  divisions: {
    fetal: {
      id: "fetal-medicine",
      badge: "SPECIALIZED CARE DIVISION",
      title: "FETAL MEDICINE & DIAGNOSTICS",
      shortTitle: "Fetal Medicine",
      tagline: "Specialized pregnancy imaging, fetal assessment and diagnostic care.",
      route: "/fetal-medicine",
      accent: "teal",
      leadDoctor: "Dr. N. Vasundhara",
      credentials: "MBBS, MD Radiology, Fellow in Fetal Medicine",
      description: "Dedicated prenatal assessment, high-resolution 3D/4D ultrasound, anomaly screening, and compassionate maternal guidance throughout pregnancy."
    },
    diabetes: {
      id: "diabetes-care",
      badge: "SPECIALIZED CARE DIVISION",
      title: "SAI KIRAN DIABETIC CLINIC",
      shortTitle: "Diabetes Care",
      subtitle: "Specialized Diabetes Care & Evaluation",
      tagline: "Dedicated diabetes evaluation, monitoring and ongoing care.",
      route: "/diabetes-care",
      accent: "navy",
      leadDoctor: "Dr. V. Sai Kiran Reddy",
      credentials: "MBBS, DNB (General Medicine), DFID (Fellowship in Diabetes), Ex-Registrar CMC Vellore",
      description: "Structured diabetes evaluation, HbA1c tracking, personalized management plans, complication screening, and continuous follow-up care."
    }
  },
  trustItems: [
    "Fetal Medicine",
    "Advanced Diagnostics",
    "Pregnancy Imaging",
    "Diabetes Care",
    "Patient-Centred Care"
  ],
  whyChooseUs: [
    {
      num: "01",
      title: "Fetal Medicine Expertise",
      desc: "Focused care for pregnancy and fetal assessment led by a dedicated radiologist with specialized fellowship training in fetal medicine."
    },
    {
      num: "02",
      title: "Diagnostic Support",
      desc: "Reliable diagnostic information, high-resolution ultrasound, and structured reporting to support patient decisions and clinical care."
    },
    {
      num: "03",
      title: "Modern Imaging",
      desc: "Technology-supported diagnostic and fetal imaging with comfortable patient-viewing monitors and clear visual explanations."
    },
    {
      num: "04",
      title: "Compassionate Care",
      desc: "Clear communication, calm environment, step-free access, and a comfortable experience for expectant parents and diabetes patients alike."
    }
  ],
  patientJourney: [
    {
      step: "01",
      name: "BOOK",
      label: "Schedule",
      desc: "Reserve your appointment online, by telephone, or via WhatsApp at your preferred time slot."
    },
    {
      step: "02",
      name: "VISIT",
      label: "Arrival & Welcome",
      desc: "Step-free arrival at our Sai Nagar centre with a welcoming reception and minimal waiting time."
    },
    {
      step: "03",
      name: "ASSESS",
      label: "Care & Evaluation",
      desc: "Receive the recommended consultation, high-resolution scan, or comprehensive diagnostic evaluation."
    },
    {
      step: "04",
      name: "UNDERSTAND",
      label: "Review & Next Steps",
      desc: "Receive clear, timely reports and review findings directly with your healthcare specialist for confident next steps."
    }
  ],
  fetalJourney: [
    { stage: "Early Pregnancy", period: "6–10 Weeks", desc: "Viability, dating scan, and initial maternal reassurance." },
    { stage: "First Trimester Assessment", period: "11–13+6 Weeks", desc: "NT Scan, early anatomical evaluation, and risk assessment." },
    { stage: "Detailed Anomaly Imaging", period: "18–22 Weeks", desc: "Comprehensive structural evaluation and organ development review." },
    { stage: "Fetal Evaluation & Growth", period: "28–36 Weeks", desc: "Growth assessment, amniotic fluid evaluation, and Fetal Doppler studies." },
    { stage: "Pre-Delivery Follow-up", period: "Term", desc: "Wellbeing assessment and clinical communication with your obstetrician." }
  ],
  diabetesJourney: [
    { step: "SCREEN", desc: "Blood glucose evaluation, HbA1c screening, and clinical risk evaluation." },
    { step: "ASSESS", desc: "Comprehensive physician consultation, lifestyle review, and metabolic assessment." },
    { step: "PLAN", desc: "Personalized medical management, diet structure, and daily monitoring guidance." },
    { step: "MONITOR", desc: "Regular glycemic tracking, scheduled check-ins, and complication prevention." },
    { step: "FOLLOW-UP", desc: "Continuous physician guidance for long-term health stability and confidence." }
  ],
  doctors: [
    {
      id: "vasundhara",
      name: "Dr. N. Vasundhara",
      division: "Fetal Medicine & Diagnostics",
      divisionTag: "Vasundhara Diagnostics & Fetal Medicine",
      photo: "/images/vasundhara_building.jpg", // fallback/placeholder
      credentials: [
        { text: "MBBS", type: "primary" },
        { text: "MD (Radiology)", type: "primary" },
        { text: "Fellow in Fetal Medicine", type: "highlight-teal" }
      ],
      designation: "Consultant Radiologist & Fetal Medicine Specialist",
      specialization: "Radiology, Fetal Medicine, Pregnancy Ultrasound & Anomaly Scans",
      focusAreas: [
        "First Trimester NT Screening",
        "Detailed Fetal Anomaly (TIFFA) Scan",
        "Fetal Doppler & Growth Assessment",
        "3D/4D Obstetric Ultrasound",
        "General Diagnostic Ultrasound & Pelvic Imaging"
      ],
      bio: "Dr. N. Vasundhara is a medical radiologist with specialized fellowship training in fetal medicine. She is dedicated to high-precision prenatal ultrasound imaging, detailed fetal assessments, and clear, compassionate communication with expectant parents.",
      approach: "Every pregnancy is unique. We provide a calm, reassuring environment where scans are conducted thoroughly and findings are explained clearly so parents and referring obstetricians have complete clarity.",
      schedule: "Mon – Sat: 9:30 AM – 2:00 PM & 4:30 PM – 7:30 PM",
      bookingRoute: "/book-appointment?division=fetal"
    },
    {
      id: "saikiran",
      name: "Dr. V. Sai Kiran Reddy",
      division: "Sai Kiran Diabetic Clinic",
      divisionTag: "Sai Kiran Diabetic Clinic",
      photo: "/images/diabetes_care_consultation.jpg", // fallback/placeholder
      credentials: [
        { text: "MBBS", type: "primary" },
        { text: "DNB (General Medicine)", type: "primary" },
        { text: "DFID (Fellowship in Diabetes)", type: "highlight-navy" },
        { text: "Ex-Registrar, CMC Vellore", type: "sub" }
      ],
      designation: "Consultant Physician & Diabetes Specialist",
      specialization: "General Medicine, Diabetes Care & Metabolic Evaluation",
      focusAreas: [
        "Comprehensive Diabetes Evaluation",
        "Blood Glucose & HbA1c Monitoring",
        "Type 1 & Type 2 Diabetes Management",
        "Gestational Diabetes (Pregnancy-Related)",
        "Preventive Diabetes Screening & Lifestyle Care"
      ],
      bio: "Dr. V. Sai Kiran Reddy completed his post-graduation in General Medicine (DNB) and specialized Fellowship in Diabetes (DFID), having served as Ex-Registrar at the renowned Christian Medical College (CMC), Vellore. He brings extensive clinical expertise in comprehensive diabetes care and evidence-based physician medicine.",
      approach: "Effective diabetes care is built on partnership, education, and consistent monitoring. We work with each patient to develop achievable management strategies tailored to their daily life.",
      schedule: "Mon – Sat: 10:00 AM – 1:30 PM & 5:00 PM – 8:00 PM",
      bookingRoute: "/book-appointment?division=diabetes"
    }
  ],
  services: [
    {
      id: "pregnancy-ultrasound",
      slug: "pregnancy-ultrasound",
      division: "Fetal Medicine",
      title: "Pregnancy Ultrasound & 3D/4D Imaging",
      shortDesc: "High-resolution prenatal ultrasound scans from early pregnancy confirmation to late third-trimester growth scans.",
      category: "Pregnancy Imaging",
      route: "/services/pregnancy-ultrasound",
      iconName: "Baby",
      badge: "Fetal Medicine",
      details: [
        "Early Pregnancy / Dating & Viability Scan (6–10 weeks)",
        "Nuchal Translucency (NT) & First Trimester Anomaly Scan (11–13+6 weeks)",
        "Targeted Imaging for Fetal Anomalies (TIFFA / Level II Scan)",
        "3D & 4D Obstetric Surface Imaging",
        "Fetal Growth, Wellbeing & Biophysical Profile",
        "Amniotic Fluid Index (AFI) Assessment"
      ],
      preparation: "Please drink adequate water 30–45 minutes prior for early scans if instructed. Bring all prior scan reports.",
      turnaround: "Report and high-resolution images provided immediately post-scan."
    },
    {
      id: "fetal-assessment",
      slug: "fetal-assessment",
      division: "Fetal Medicine",
      title: "Specialized Fetal Assessment & Doppler",
      shortDesc: "Comprehensive maternal-fetal surveillance, placental evaluation, uterine Doppler, and fetal cardiovascular assessment.",
      category: "Fetal Assessment",
      route: "/services/fetal-assessment",
      iconName: "HeartPulse",
      badge: "Fetal Medicine",
      details: [
        "Fetal Umbilical & Middle Cerebral Artery (MCA) Doppler",
        "Uterine Artery Doppler for Preeclampsia Risk Evaluation",
        "Multiple Gestation (Twin / Triplet) Monitoring",
        "Fetal Cardiac Assessment & Rhythm Evaluation",
        "Cervical Length Monitoring & Preterm Assessment",
        "Detailed Fetal Anatomical Re-evaluation"
      ],
      preparation: "Comfortable two-piece clothing recommended. No fasting required.",
      turnaround: "Detailed clinical report provided with comprehensive parameter metrics."
    },
    {
      id: "diagnostic-services",
      slug: "diagnostic-services",
      division: "Diagnostics",
      title: "General Diagnostic Ultrasound & Screening",
      shortDesc: "Precise diagnostic abdominal, pelvic, thyroid, and musculoskeletal ultrasound imaging for adults and children.",
      category: "Diagnostic Investigations",
      route: "/services/diagnostic-services",
      iconName: "Scan",
      badge: "Diagnostics",
      details: [
        "Whole Abdomen & Pelvis Ultrasound",
        "Kidney, Ureter & Bladder (KUB) Sonography",
        "Thyroid & Neck Soft Tissue Ultrasound",
        "Scrotal & Testicular Doppler Imaging",
        "Breast Ultrasound Screening",
        "Musculoskeletal & Soft Tissue Imaging"
      ],
      preparation: "Abdomen scans require 4–6 hours fasting. Pelvic scans require a comfortably full bladder.",
      turnaround: "Reports prepared and verified by Dr. N. Vasundhara."
    },
    {
      id: "diabetes-care",
      slug: "diabetes-care",
      division: "Diabetes Care",
      title: "Comprehensive Diabetes Care & Monitoring",
      shortDesc: "Specialized diabetes evaluation, ongoing glucose monitoring, HbA1c assessment, and personalized management by Dr. V. Sai Kiran Reddy.",
      category: "Sai Kiran Diabetic Clinic",
      route: "/services/diabetes-care",
      iconName: "Activity",
      badge: "Sai Kiran Diabetic Clinic",
      details: [
        "Initial Comprehensive Diabetes Evaluation",
        "HbA1c Testing & Glycemic Profile Analysis",
        "Fasting & Post-Prandial Blood Sugar Monitoring",
        "Gestational Diabetes Management for Expectant Mothers",
        "Diabetic Foot & Neuropathy Preventive Screening",
        "Personalized Dietary Structure & Lifestyle Counseling",
        "Structured Follow-up & Treatment Adjustment"
      ],
      preparation: "For fasting blood sugar, 8–10 hours overnight fasting is required. Continue prescribed medications unless advised.",
      turnaround: "Immediate point-of-care consultation & structured care plan."
    }
  ],
  reviews: [
    {
      id: 1,
      author: "Lakshmi P.",
      location: "Anantapur",
      rating: 5,
      date: "Verified Patient",
      division: "Fetal Medicine",
      comment: "Dr. Vasundhara is remarkably gentle and explained every detail of our 20-week anomaly scan on the screen. The clinic environment is exceptionally clean and peaceful.",
      service: "TIFFA Anomaly Scan"
    },
    {
      id: 2,
      author: "Ramesh K.",
      location: "Anantapur",
      rating: 5,
      date: "Verified Patient",
      division: "Sai Kiran Diabetic Clinic",
      comment: "Dr. Sai Kiran Reddy explained my blood sugar readings with immense patience. His structured diet guidance and medication review helped stabilize my numbers within weeks.",
      service: "Diabetes Consultation & HbA1c"
    },
    {
      id: 3,
      author: "Sowmya G.",
      location: "Dharmavaram / Anantapur",
      rating: 5,
      date: "Verified Patient",
      division: "Fetal Medicine",
      comment: "We travelled for the NT scan and fetal doppler. The clarity of images and the calm consultation gave us immense reassurance. Highly recommended centre in Anantapur.",
      service: "NT Scan & Fetal Doppler"
    },
    {
      id: 4,
      author: "Venkatnarayana M.",
      location: "Anantapur",
      rating: 5,
      date: "Verified Patient",
      division: "Sai Kiran Diabetic Clinic",
      comment: "Very professional consultation with minimal waiting time. Step-free ground floor access was extremely convenient for my senior mother.",
      service: "Comprehensive Diabetes Care"
    }
  ],
  faqs: [
    {
      category: "Fetal Medicine & Scans",
      questions: [
        {
          q: "What is Fetal Medicine and why is it important during pregnancy?",
          a: "Fetal medicine focuses on assessing the health, growth, and development of the baby inside the womb. Using specialized ultrasound technology and clinical expertise, fetal medicine specialists can evaluate fetal anatomy, screen for developmental conditions, monitor placenta and fluid levels, and support obstetricians with vital clinical insight."
        },
        {
          q: "When should I have my pregnancy ultrasound scans?",
          a: "Standard key scans include: Early Pregnancy Dating Scan (6–10 weeks), NT Scan & First Trimester Risk Assessment (11–13+6 weeks), Targeted Anomaly Scan / TIFFA (18–22 weeks), and Growth & Doppler scans in the third trimester (28–36 weeks) or as recommended by your obstetrician."
        },
        {
          q: "Are ultrasound scans safe for the baby and mother?",
          a: "Yes. Diagnostic ultrasound uses high-frequency sound waves, not ionizing radiation. It is widely recognized as safe when performed by qualified medical professionals adhering to standard clinical guidelines."
        },
        {
          q: "Who conducts the fetal ultrasound scans at Vasundhara?",
          a: "All fetal medicine consultations and advanced ultrasound diagnostic scans are personally evaluated by Dr. N. Vasundhara (MBBS, MD Radiology, Fellow in Fetal Medicine)."
        }
      ]
    },
    {
      category: "Sai Kiran Diabetes Care",
      questions: [
        {
          q: "What services are offered at Sai Kiran Diabetic Clinic?",
          a: "Sai Kiran Diabetic Clinic provides comprehensive diabetes evaluations, blood glucose and HbA1c monitoring, personalized medication management, gestational diabetes care for pregnant women, lifestyle counseling, and complication screening."
        },
        {
          q: "How should I prepare for fasting blood sugar tests?",
          a: "Overnight fasting of 8 to 10 hours is typically required. You may drink plain water. Please bring your list of current medications and previous blood reports."
        },
        {
          q: "Can diabetes care and fetal medicine be coordinated for pregnant mothers?",
          a: "Yes. Mothers experiencing gestational diabetes or pre-existing diabetes during pregnancy benefit from seamless coordination under one roof: fetal growth monitoring with Dr. N. Vasundhara and glycemic management with Dr. V. Sai Kiran Reddy."
        }
      ]
    },
    {
      category: "Appointments & Reports",
      questions: [
        {
          q: "How do I book an appointment?",
          a: "You can book directly through our online Book Appointment page, call our desk at 79893 30974, or message us on WhatsApp. Prior booking is recommended to ensure minimal waiting."
        },
        {
          q: "How soon are scan and lab reports delivered?",
          a: "Ultrasound scan reports with high-resolution image documentation are provided shortly after completion of your examination. Fasting/routine laboratory reports are generated with prompt turnaround."
        },
        {
          q: "Is there parking and wheelchair accessibility?",
          a: "Yes. The centre features spacious vehicle parking directly in front of the clinic in Sai Nagar with step-free ground floor access and wheelchair support."
        }
      ]
    }
  ],
  galleryCategories: [
    {
      id: "all",
      name: "All Photos"
    },
    {
      id: "centre",
      name: "Centre & Environment"
    },
    {
      id: "fetal",
      name: "Fetal Medicine & Scans"
    },
    {
      id: "diabetes",
      name: "Sai Kiran Diabetic Clinic"
    },
    {
      id: "technology",
      name: "Diagnostic Technology"
    }
  ],
  galleryItems: [
    {
      id: 1,
      title: "Vasundhara Centre Exterior & Reception",
      category: "centre",
      image: "/images/vasundhara_building.jpg",
      description: "Conveniently located clinic facade in Sai Nagar, Anantapur with dedicated step-free entrance."
    },
    {
      id: 2,
      title: "Advanced Fetal Ultrasound Suite",
      category: "fetal",
      image: "/images/fetal_ultrasound_suite.jpg",
      description: "High-resolution prenatal imaging monitor and comfortable patient consultation setting."
    },
    {
      id: 3,
      title: "Sai Kiran Diabetes Consultation Room",
      category: "diabetes",
      image: "/images/diabetes_care_consultation.jpg",
      description: "Dedicated physician consultation room for comprehensive diabetes review and counseling."
    },
    {
      id: 4,
      title: "Patient Waiting & Reception Lounge",
      category: "centre",
      image: "/images/about_clinic_interior.jpg",
      description: "Serene, air-conditioned patient lounge designed for maternal comfort and calm experience."
    },
    {
      id: 5,
      title: "High-Resolution Maternal-Fetal Imaging",
      category: "technology",
      image: "/images/fetal_feature_care.jpg",
      description: "Clear visual display enabling parents to view their baby's scan in real time."
    }
  ]
};
