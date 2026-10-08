export const servicesCategoryData = [
  {
    id: "fetal-medicine",
    title: "Fetal Medicine",
    shortDescription: "Specialised fetal assessment and pregnancy care.",
    image: "/images/fetal_medicine_scan.jpg",
    filterGroup: "fetal-medicine",
    serviceIds: ["nt-scan", "tiffa-scan", "anomaly-scan", "antenatal-sonography"]
  },
  {
    id: "fetal-growth-doppler",
    title: "Fetal Growth & Doppler",
    shortDescription: "Detailed fetal growth assessment and Doppler evaluation.",
    image: "/images/fetal_growth_doppler_scan.jpg",
    filterGroup: "fetal-medicine",
    serviceIds: ["fetal-growth-doppler-hemodynamics"]
  },
  {
    id: "pregnancy-ultrasound",
    title: "Pregnancy Ultrasound",
    shortDescription: "Pregnancy imaging for monitoring fetal development and wellbeing.",
    image: "/images/pregnancy_ultrasound_scan.jpg",
    filterGroup: "fetal-medicine",
    serviceIds: ["antenatal-sonography"]
  },
  {
    id: "general-ultrasound",
    title: "General Ultrasound",
    shortDescription: "Advanced ultrasound imaging for accurate diagnostic evaluation.",
    image: "/images/general_ultrasound_scan.jpg",
    filterGroup: "diagnostics",
    serviceIds: ["general-diagnostic-ultrasound", "2d-3d-sonography", "doppler-3d-4d-imaging"]
  },
  {
    id: "womens-imaging",
    title: "Women's Imaging",
    shortDescription: "Specialised imaging for women's diagnostic care.",
    image: "/images/womens_imaging_suite.jpg",
    filterGroup: "diagnostics",
    serviceIds: ["transvaginal-sonography", "transvaginal-ultrasound"]
  },
  {
    id: "diabetes-care",
    title: "Diabetes Care",
    shortDescription: "Personalised diabetes evaluation, monitoring and management.",
    image: "/images/diabetes_care_clinical.jpg",
    filterGroup: "diabetes-care",
    serviceIds: [
      "comprehensive-diabetes-consultation",
      "hba1c-fasting-glycemic-profiling",
      "gestational-diabetes-care",
      "preventive-vascular-neuropathy-screening"
    ]
  },
  {
    id: "vascular-doppler",
    title: "Vascular Doppler",
    shortDescription: "Doppler and vascular imaging for detailed blood-flow assessment.",
    image: "/images/vascular_doppler_scan.jpg",
    filterGroup: "diagnostics",
    serviceIds: ["renal-doppler", "peripheral-arterial-venous-doppler", "vascular-imaging"]
  },
  {
    id: "mens-health",
    title: "Men's Health",
    shortDescription: "Specialised prostate imaging for diagnostic evaluation.",
    image: "/images/mens_health_diagnostic.jpg",
    filterGroup: "diagnostics",
    serviceIds: ["ultrasonography-prostate"]
  }
];

export const allServicesMap = {
  "nt-scan": {
    id: "nt-scan",
    title: "First Trimester NT Scan & Anomaly Risk",
    categoryTitle: "Fetal Medicine",
    shortDescription: "Early pregnancy scan evaluating nuchal translucency and first-trimester screening marker risk.",
    image: "/images/fetal_medicine_scan.jpg",
    whatIsIt: "A specialized ultrasound scan performed between 11 weeks 0 days and 13 weeks 6 days to measure the nuchal translucency (fluid-filled space behind fetal neck), assess nasal bone presence, and examine early organ development.",
    whyPerformed: "Evaluates early anatomical progress and provides accurate risk assessment for chromosomal variations (such as Trisomy 21, 18, 13) when combined with maternal biochemical screening markers.",
    whenPerformed: "Optimal window: 11+0 to 13+6 weeks of gestation (Fetal Crown-Rump Length 45mm to 84mm).",
    clinicalDetails: "Performed with high-definition transducer probe according to Fetal Medicine Foundation (FMF) international standards. Includes early nasal bone assessment and ductus venosus flow check."
  },
  "tiffa-scan": {
    id: "tiffa-scan",
    title: "Targeted Anomaly Scan (TIFFA / Level II)",
    categoryTitle: "Fetal Medicine",
    shortDescription: "Detailed anatomical evaluation examining fetal brain, spine, heart, abdomen, and limbs.",
    image: "/images/hero-fetal-scan.jpg",
    whatIsIt: "Targeted Imaging for Fetal Anomalies (TIFFA) or Level II scan is a comprehensive structural assessment of the developing baby from head to toe.",
    whyPerformed: "Screens for physical structural variations across organ systems, checks fetal cardiac four-chamber views, evaluates placental placement, umbilical cord vessel insertion, and amniotic fluid volume.",
    whenPerformed: "Optimal window: 18 to 22 weeks of gestation.",
    clinicalDetails: "Detailed systemic audit of fetal neurosonography, facial profile, cardiac chambers, stomach bubble, renal pelves, spinal alignment, and limb digits."
  },
  "anomaly-scan": {
    id: "anomaly-scan",
    title: "Anomaly Scan",
    categoryTitle: "Fetal Medicine",
    shortDescription: "Systematic structural ultrasound examination to verify fetal anatomical development.",
    image: "/images/fetal_medicine_scan.jpg",
    whatIsIt: "A thorough mid-trimester structural scan evaluating overall fetal growth, internal organs, and anatomical integrity.",
    whyPerformed: "To confirm normal organ formation, verify placental location relative to the internal os, and measure amniotic fluid index (AFI).",
    whenPerformed: "Typically performed between 18 and 22 weeks of pregnancy.",
    clinicalDetails: "Provides detailed structural baseline imaging for maternal-fetal records."
  },
  "antenatal-sonography": {
    id: "antenatal-sonography",
    title: "Antenatal Sonography",
    categoryTitle: "Fetal Medicine & Pregnancy Ultrasound",
    shortDescription: "Routine prenatal ultrasound monitoring pregnancy progression, gestational age, and fetal health.",
    image: "/images/pregnancy_ultrasound_scan.jpg",
    whatIsIt: "Comprehensive ultrasound evaluation performed at regular intervals during pregnancy to track fetal development.",
    whyPerformed: "Confirms cardiac activity, establishes precise gestational age, monitors growth velocity, and checks maternal wellbeing.",
    whenPerformed: "Conducted across 1st, 2nd, and 3rd trimesters as requested by your consulting specialist.",
    clinicalDetails: "Includes biometry measurements (BPD, HC, AC, FL) and estimated fetal weight (EFW) calculation."
  },
  "fetal-growth-doppler-hemodynamics": {
    id: "fetal-growth-doppler-hemodynamics",
    title: "Fetal Growth & Doppler Hemodynamics",
    categoryTitle: "Fetal Growth & Doppler",
    shortDescription: "Detailed fetal growth assessment and Doppler evaluation.",
    image: "/images/hero-fetal-scan.jpg",
    whatIsIt: "Serial biometry growth scan integrated with quantitative color Doppler blood flow velocity studies of fetal and maternal vessels.",
    whyPerformed: "Monitors growth trajectory in Fetal Growth Restriction (FGR), evaluates placental vascular resistance, and assesses fetal cerebral auto-regulation and oxygenation.",
    whenPerformed: "Third trimester (28 to 38+ weeks) or as indicated for high-risk maternal conditions.",
    clinicalDetails: "Includes Pulsatility Index (PI) and Resistive Index (RI) measurements of Umbilical Artery, Middle Cerebral Artery (MCA), and Ductus Venosus."
  },
  "general-diagnostic-ultrasound": {
    id: "general-diagnostic-ultrasound",
    title: "General Diagnostic Ultrasound",
    categoryTitle: "General Ultrasound",
    shortDescription: "Advanced ultrasound imaging for accurate diagnostic evaluation.",
    image: "/images/fetal_ultrasound_suite.jpg",
    whatIsIt: "High-resolution non-invasive ultrasound examination of abdominal and pelvic organs including liver, gallbladder, kidneys, pancreas, and spleen.",
    whyPerformed: "Investigates abdominal pain, gallstones, kidney stones, fatty liver changes, organomegaly, and soft tissue pathology.",
    whenPerformed: "As requested by consulting physician. Fasting (6-8 hours) may be required for upper abdominal studies.",
    clinicalDetails: "High-frequency real-time grayscale B-mode sonography."
  },
  "2d-3d-sonography": {
    id: "2d-3d-sonography",
    title: "2D and 3D Sonography",
    categoryTitle: "General Ultrasound",
    shortDescription: "Multi-dimensional ultrasound imaging producing detailed spatial volume rendering.",
    image: "/images/fetal_ultrasound_suite.jpg",
    whatIsIt: "Advanced volumetric sonography capturing cross-sectional and 3D surface rendered images of internal organ structures.",
    whyPerformed: "Offers enhanced spatial representation for complex pelvic, abdominal, or fetal structural evaluations.",
    whenPerformed: "Available upon clinical recommendation.",
    clinicalDetails: "Combines standard 2D diagnostic accuracy with 3D spatial volumetric reconstruction."
  },
  "doppler-3d-4d-imaging": {
    id: "doppler-3d-4d-imaging",
    title: "Doppler with 3D and 4D Imaging Services",
    categoryTitle: "General Ultrasound",
    shortDescription: "Real-time volumetric 4D imaging combined with color Doppler blood flow analysis.",
    image: "/images/fetal_ultrasound_suite.jpg",
    whatIsIt: "State-of-the-art 4D dynamic surface imaging integrated with spectral and color Doppler hemodynamics.",
    whyPerformed: "Allows real-time motion viewing of anatomical structures alongside precise vascular flow velocity measurements.",
    whenPerformed: "Conducted as requested for detailed clinical evaluation.",
    clinicalDetails: "Utilizes dynamic multi-beam acoustic processing."
  },
  "transvaginal-sonography": {
    id: "transvaginal-sonography",
    title: "Transvaginal Sonography",
    categoryTitle: "Women's Imaging",
    shortDescription: "Specialised imaging for women's diagnostic care.",
    image: "/images/womens_imaging_suite.jpg",
    whatIsIt: "An internal pelvic ultrasound using a specialized high-frequency endovaginal transducer probe.",
    whyPerformed: "Evaluates uterine echo-pattern, endometrial thickness, ovarian morphology, follicular tracking, fibroids, cysts, and early pregnancy (under 10 weeks).",
    whenPerformed: "Optimal for early first trimester or pelvic diagnostic evaluations.",
    clinicalDetails: "Requires an empty urinary bladder. Provides superior high-resolution near-field image resolution."
  },
  "transvaginal-ultrasound": {
    id: "transvaginal-ultrasound",
    title: "Transvaginal Ultrasound",
    categoryTitle: "Women's Imaging",
    shortDescription: "Targeted diagnostic vaginal ultrasound for detailed endometrial and adnexal evaluation.",
    image: "/images/womens_imaging_suite.jpg",
    whatIsIt: "High-magnification internal ultrasound scan focusing on cervical length, uterine lining, and adnexal structures.",
    whyPerformed: "Assesses deep pelvic pain, abnormal uterine bleeding (AUB), polycystic ovaries (PCOS), and early pregnancy viability.",
    whenPerformed: "As advised by gynaecology consultant.",
    clinicalDetails: "Performed in a private, gentle clinical setting with full patient comfort care."
  },
  "comprehensive-diabetes-consultation": {
    id: "comprehensive-diabetes-consultation",
    title: "Comprehensive Diabetes Consultation",
    categoryTitle: "Diabetes Care",
    shortDescription: "Personalised diabetes evaluation, monitoring and management.",
    image: "/images/diabetes-care-template.png",
    whatIsIt: "Detailed physician evaluation led by diabetology specialists covering blood sugar trends, lifestyle guidance, and therapeutic adjustments.",
    whyPerformed: "Ensures tight glycemic control, prevents long-term microvascular and macrovascular complications.",
    whenPerformed: "Initial diagnosis, quarterly follow-ups, or when blood glucose targets are unmet.",
    clinicalDetails: "Includes blood pressure check, BMI assessment, treatment protocol optimization, and personalized diet plan."
  },
  "hba1c-fasting-glycemic-profiling": {
    id: "hba1c-fasting-glycemic-profiling",
    title: "HbA1c & Fasting Glycemic Profiling",
    categoryTitle: "Diabetes Care",
    shortDescription: "Precision laboratory blood glucose analysis and 3-month glycated hemoglobin measurement.",
    image: "/images/diabetes_care_consultation.jpg",
    whatIsIt: "Diagnostic blood testing measuring glycated hemoglobin (HbA1c) alongside fasting and postprandial plasma glucose concentrations.",
    whyPerformed: "Provides an objective measurement of average blood sugar levels over the preceding 2 to 3 months.",
    whenPerformed: "Recommended every 3 to 6 months for diabetic patients.",
    clinicalDetails: "NABL-aligned laboratory accuracy for confident clinical monitoring."
  },
  "gestational-diabetes-care": {
    id: "gestational-diabetes-care",
    title: "Gestational Diabetes Care (GDM)",
    categoryTitle: "Diabetes Care",
    shortDescription: "Specialized maternal-fetal glycemic monitoring for pregnancy-induced diabetes.",
    image: "/images/diabetes-care-template.png",
    whatIsIt: "Dedicated care protocol including Oral Glucose Tolerance Test (OGTT), self-monitoring blood glucose (SMBG) guidance, and insulin management.",
    whyPerformed: "Protects maternal health and ensures optimal fetal growth while preventing gestational hyperglycemia risks and birth complications.",
    whenPerformed: "Screening at 24 to 28 weeks of pregnancy, or earlier for high-risk pregnancies.",
    clinicalDetails: "Coordinated care between Fetal Medicine Specialist and Diabetologist."
  },
  "preventive-vascular-neuropathy-screening": {
    id: "preventive-vascular-neuropathy-screening",
    title: "Preventive Vascular & Neuropathy Screening",
    categoryTitle: "Diabetes Care",
    shortDescription: "Early detection of diabetic foot neuropathy, peripheral circulation, and arterial health.",
    image: "/images/diabetes-care-template.png",
    whatIsIt: "Comprehensive diabetic foot examination, 10g monofilament sensory testing, vibration perception threshold (VPT), and peripheral pulse checks.",
    whyPerformed: "Prevents diabetic foot ulcers, loss of protective sensation, peripheral neuropathy, and vascular complications.",
    whenPerformed: "Annual screening for all diabetic individuals.",
    clinicalDetails: "Includes skin structural check, reflex evaluation, and sensory threshold mapping."
  },
  "renal-doppler": {
    id: "renal-doppler",
    title: "Renal Doppler",
    categoryTitle: "Vascular Doppler",
    shortDescription: "Color Doppler ultrasound evaluating renal arteries, blood flow velocity, and kidney perfusion.",
    image: "/images/vascular_doppler_scan.jpg",
    whatIsIt: "Targeted vascular duplex ultrasound measuring flow velocities and waveforms in main renal arteries and intrarenal branches.",
    whyPerformed: "Investigates renovascular hypertension, renal artery stenosis (RAS), and unexplained kidney dysfunction.",
    whenPerformed: "Upon physician referral for resistant hypertension or renal vascular workup.",
    clinicalDetails: "Measures Peak Systolic Velocity (PSV) and Renal Aortic Ratio (RAR)."
  },
  "peripheral-arterial-venous-doppler": {
    id: "peripheral-arterial-venous-doppler",
    title: "Peripheral Arterial and Venous Doppler",
    categoryTitle: "Vascular Doppler",
    shortDescription: "Doppler and vascular imaging for detailed blood-flow assessment.",
    image: "/images/vascular_doppler_scan.jpg",
    whatIsIt: "Duplex ultrasound mapping arterial lumen patency and venous valvular flow in upper or lower extremities.",
    whyPerformed: "Detects peripheral arterial disease (PAD), arterial narrowing, venous valvular incompetence, varicose veins, and Deep Vein Thrombosis (DVT).",
    whenPerformed: "Indicated for limb pain, swelling, claudication, non-healing foot ulcers, or suspected thrombosis.",
    clinicalDetails: "Evaluates triphasic/biphasic arterial signals and venous compressibility."
  },
  "vascular-imaging": {
    id: "vascular-imaging",
    title: "Vascular Imaging",
    categoryTitle: "Vascular Doppler",
    shortDescription: "Comprehensive non-invasive Doppler vascular screening of major vessels.",
    image: "/images/vascular_doppler_scan.jpg",
    whatIsIt: "Color duplex Doppler study examining major arterial and venous vascular networks.",
    whyPerformed: "Screens for vascular disease, vessel lumen narrowing, plaque accumulation, and circulatory impairment.",
    whenPerformed: "As requested for cardiovascular risk assessment.",
    clinicalDetails: "Provides detailed spectral analysis and vessel wall anatomical mapping."
  },
  "ultrasonography-prostate": {
    id: "ultrasonography-prostate",
    title: "Ultrasonography of the Prostate",
    categoryTitle: "Men's Health",
    shortDescription: "Specialised prostate imaging for diagnostic evaluation.",
    image: "/images/mens_health_diagnostic.jpg",
    whatIsIt: "Diagnostic pelvic ultrasound evaluating prostate gland volume, echotexture, median lobe enlargement, and urinary bladder post-void residual.",
    whyPerformed: "Investigates lower urinary tract symptoms (LUTS), urinary hesitancy, frequency, Benign Prostatic Hyperplasia (BPH), and bladder emptying.",
    whenPerformed: "Recommended for men experiencing urinary difficulties or upon clinical referral.",
    clinicalDetails: "Calculates total prostate volume (cc) and pre/post-void urine volume."
  }
};
