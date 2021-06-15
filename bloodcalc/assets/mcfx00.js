
var Vordialysis = "or dialysis";
var nlmpmlink = "<a href=http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?itool=abstractplus&db=pubmed&cmd=Retrieve&dopt=abstractplus&list_uids="; 
var nlmpmlink2 =  " target=_blank class=hbp>";


/////////pbhdb125 = new mdxp_o("Low Density Lipoprotein Cholesterol","LDL",sm_endos,"chol-((TG/5)+(HDL))","ooxsttaaycxe","pbhdb125","S","60","130","mg/dL","0.0259","mmol/L","0","3000","");
pbhdd232 = new mdxp_o("Very Low Density Lipoprotein Cholesterol","VLDL",sm_endos,"TG/5","ooxsttaaycxe","pbhdd232","S","12","30","mg/dL","0.0259","mmol/L","0","1000","");
pbhdh366 = new mdxp_o("Non-HDL Cholesterol","NonHDL-C",sm_endos,"chol-HDL","ooxsttaaycxe","pbhdh366","S","110","155","mg/dL","0.0259","mmol/L","0","4000","");
pbhgr049 = new mdxp_o("Cholesterol : HDL Ratio","Chol:HDL",sm_endos,"chol/HDL","oexnttaaycxe","pbhgr049","S","3","5",vratio,"","","0","30","");
pbhhr154 = new mdxp_o("LDL : HDL Ratio","LDL:HDL",sm_endos,"LDL/HDL","oexnttaaycxe","pbhhr154","S","0","3",vratio,"","","0","30","");
pblgb013 = new mdxp_o("Glucose (estimated average)","eAG",sm_endos,"eAG = (28.7 * HbA1c) - 46.7","ooxsttaaycxe","pblgb013","P","75","110","mg/dL","0.0555","mmol/L","0","3000","");								
////////pndmb015 = new mdxp_o("Body Surface Area","BSA",sm_nutrs,"(Wt\^0.425)*(Ht\^0.725)*(0.007184)","oexnttnayc","pndmb015","","1.3","2.5","m2","","","1","3","");
////////pndfb115 = new mdxp_o("Ideal Body Weight","IBW",sm_nutrs,"(Ht^2)*23","ooxsttnays","pndfb115","","110","220","lb","0.454","kg","55","440","");
pndfg122 = new mdxp_o("% of Ideal Body Weight","%IBW",sm_nutrs,"(Wt*100)/IBW","oowsttaaysxe","pndfg122","","90","110","%","0.01",vfraction,"25","500","");
pndfj043 = new mdxp_o("Excess/deficit of Body Weight","BW xsdef",sm_nutrs,"Wt-IBW","ooxsttaaysxe","pndfj043","","-15.4","15.4","lb","0.454","kg","-125","660","");
pndfk259 = new mdxp_o("Target Body Weight BMI25","T-BW-bmi25",sm_nutrs,"(Ht^2)*25","ooxsttaaysxe","pndfk259","","110","220","lb","0.454","kg","55","440","");
pndfk306 = new mdxp_o("Target Body Weight BMI30","T-BW-bmi30",sm_nutrs,"(Ht^2)*30","ooxsttaaysxe","pndfk306","","110","220","lb","0.454","kg","55","440","");
////////pndhb225 = new mdxp_o("Body Mass Index","BMI",sm_nutrs,"Wt/Ht^2","oexnttnayc","pndhb225","","18.5","25","kg*m2","","","10","80","");
pndhg016 = new mdxp_o("Overweight & Obesity Classification","BMI class",sm_nutrs,"NHLBI Classification","mflnttaazx","pndhg016","","normal","","","","","","","");
pnpfg016 = new mdxp_o("Body Fat Classification","Fat Class",sm_nutrs,"Body Fat Classification","mflnttaazxxe","pnpfg016","","Acceptable","","","","","","","");

pndjb082 = new mdxp_o("Waist to Hip Ratio","WHR",sm_nutrs,"Waist/Hip","oexnttaaycxe","pndjb082","","0.9","1.1",vratio,"","","0.33","4","");
pnfdb015 = new mdxp_o("Basal Energy Expenditure","BEE",sm_nutrs,"655+(9.6*Wt)+(1.8*Ht)-(4.7*age)","ooxsttaaycxe","pnfdb015","","1200","2500","kcal/d","4.186","kJ/d","0","10000","");

////////prdgg001 = new mdxp_o("A-a Gradient","PA-aO2",sm_pulms,"(((FIO2)*(PB-PH2O))-(PaCO2/R))-(PaO2)","ooxsttnaycxe","prdgg001","","5","25","mmHg","0.1333","kPa","-760","760","");
prdgk108 = new mdxp_o("A-a Gradient, age-corrected","PA-aO2_c",eb16,"2.5+(0.25*age)","ooxsttaaycxe","prdgk108","","5","25","mmHg","0.1333","kPa","-760","760","");
prdhl235 = new mdxp_o("Alveolar Oxygen Tension","PAO2",sm_pulms,"((FIO2)*(PB-PH2O))-(PaCO2/R)","ooxsttaaycxe","prdhl235","","95","105","mmHg","0.1333","kPa","0","760","");
prdkc088 = new mdxp_o("arterial Oxygen Tension","PaO2",sm_pulms,"measured","ooxsttaaycxe","prdkc088","","80","100","mmHg","0.1333","kPa","0","760","");
prdkg153 = new mdxp_o("arterial Oxygen Tension (estimated)","PaO2_e",sm_pulms,"100-(0.33*age)","ooxsttaaycxe","prdkg153","","80","100","mmHg","0.1333","kPa","0","760","");
prdkp275 = new mdxp_o("arterial Oxygen Tension (estimated)","PaO2 (pos)",sm_pulms,"103.5-(0.42*age) | 104.2-(0.42*age)","ooxsttaaycxe","prdkp275","","80","100","mmHg","0.1333","kPa","0","760","");
/////prdkr022 = new mdxp_o("arterial O2 tension/Fraction of inspired O2 Ratio","PaO2/FiO2",sm_pulms,"(PaO2/FIO2)","oexnttaaycxe","prdkr022","","381","526",vratio,"","","0","5000","");
prdkr022 = new mdxp_o("arterial O2 tension/Fraction of inspired O2 Ratio","PaO2/FiO2",sm_pulms,"(PaO2/FIO2)","ooxkttaaycxe","prdkr022","","381","526",vratio + " (mmHg:%)","0.1333",vratio + " (kPa:%)","0","5000","");


prdmb243 = new mdxp_o("Inspired Oxygen Tension","PIO2",sm_pulms,"(FIO2)*(PB-PH2O)","ooxsttaaycxe","prdmb243","","100","150","mmHg","0.1333","kPa","0","760","");
///////prgdb276 = new mdxp_o("arterial Oxygen Content","CaO2",sm_pulms,"((Hb*1.36)*(SaO2))+(PaO2*0.0031)","ooxsttaaycxe","prgdb276","","17","20","mL/dL","1","vol%","0","100","");
///////prgdv334 = new mdxp_o("mixed venous Oxygen Content","CvO2",sm_pulms,"((Hb*1.36)*(SvO2))+(PvO2*0.0031)","ooxsttaaycxe","prgdv334","","12","15","mL/dL","1","vol%","0","100","");
///////prghc187 = new mdxp_o("Oxygen Content Difference, arterial-venous","Ca-vO2",sm_pulms,"(((Hb*1.36)*(SaO2))+(PaO2*0.0031)) - (((Hb*1.36)*(SvO2))+(PvO2*0.0031))","ooxsttaaycxe","prghc187","","4","5","mL/dL","1","vol%","-50","100","");

///////psdgb014 = new mdxp_o("Glomerular Filtration Rate (Cockcroft)","GFR_cg",sm_nephs,"((140-age)*Wt)/(72*Cr)","ooxsttaaycxe","psdgb014","","90","131","mL/min","0.0167","mL/s","0","300","");
///////psdgp182 = new mdxp_o("Glomerular Filtration Rate (MDRD-4)","GFR_mdrd4",sm_nephs,"(186.3)*(Cr^-1.154)*(age^-0.203)*(GNF)*(ETF)","ooxsttaaycxe","psdgp182","","90","131","mL/min","0.0167","mL/s","0","300","");
psdqr016 = new mdxp_o("Chronic Kidney Disease Classification","CKD class",sm_nephs,"NKF K/DOQI Classification","mflnttaazx","psdqr016","","normal","","",""," ","","","");
psdqs016 = new mdxp_o("GFR categories in CKD (KDIGO)","GFR in KDIGO",sm_nephs,"KDIGO Staging of CKD","mflnttaazx","psdqs016","","normal","","","","","","","");

psdqc016 = new mdxp_o("Albuminuria Categories in CKD (KDIGO)","Alb in CKD",sm_nephs,"KDIGO Staging of CKD","mflnttaazx","psdqc016"," ","normal"," "," "," "," "," "," ","");									
psdqf016 = new mdxp_o("Proteinuria Categories in CKD","Prot in CKD",sm_nephs,"Staging of CKD","mflnttaazx","psdqf016","","normal","","","","","","","");											

///////pbxlc621 = new mdxp_o("Glucose","gluc",ebx,"","iovsttnayc","pbxlc621","S","75","115","mg/dL","0.0555","mmol/L","0","4000","");



//////////////////////////////////////////////////////////HRA
phqcc220 = new mdxp_o("Coronary Heart Disease (10y Risk)","CHD 10y Risk (chol)",sm_cards,"Framingham algorithm","oevnftaayc","phqcc220","","1","16","%","","","-2","53","");
phqdd220 = new mdxp_o("Metabolic Syndrome","MetS",sm_cards,"NCEP Definition","oevntcaayczz","phqdd220","","0","2",vpoints,"","","0","5","");
phqff330 = new mdxp_o("NCEP Major Risk factors","NCEP Major RF",sm_cards,"algorithm","oevnttaayc","phqff330","","0","1",vpoints,"","","-1","5","");
phqgg440 = new mdxp_o("Reynolds Risk Score","RRS",sm_cards,"Reynold's algorithm","oevntcaayczz","phqgg440","","0","10","%","","","0","100","");
phqgh460 = new mdxp_o("Reynolds Risk Score (optimal)","RRS (optimal)",eb16,"Reynold's algorithm","oevnttaayc","phqgh460","","0","20","%","","","0","100","");

phqfg331 = new mdxp_o("Cigarrette Smoking","Smoking",eb16,"","oevnttaayc","phqfg331","","0","0",vpoints,"","","0","1","");
phqfh332 = new mdxp_o("HTN or on HTN meds","HTN (or on meds)",eb16,"","oevnttaayc","phqfh332","","0","0",vpoints,"","","0","1","");
phqfj333 = new mdxp_o("High Density Lipoprotein","HDL",eb16,"","oevnttaayc","phqfj333","","0","0",vpoints,"","","-1","1","");
phqfk334 = new mdxp_o("Family History of Premature CHD","FH premature CHD",eb16,"","oevnttaayc","phqfk334","","0","0",vpoints,"","","0","1","");
phqfl335 = new mdxp_o("Age","Age",eb16,"","oevnttaayc","phqfl335","","0","0",vpoints,"","","0","1","");

phqcd221 = new mdxp_o("Coronary Heart Disease (10y Risk, LDL)","CHD 10y Risk (LDL)",sm_cards,"Framingham algorithm","oevnftaaycxz","phqcd221","","1","16","%","","","1","56","");
phqcy222 = new mdxp_o("Average CHD 10-year Risk","Avg 10y CHD Risk",sm_cards,"Framingham algorithm","oevnftaayc","phqcy222","","-1","30","%","","","-1","100","");
phqcz222 = new mdxp_o("Low CHD 10-year Risk","Low 10y CHD Risk",sm_cards,"Framingham algorithm","oevnftaayc","phqcz222","","-1","14","%","","","-1","100","");

phqkc440 = new mdxp_o("Atherosclerotic Cardiovascular Disease Risk (10y)","ASCVD Risk (10y)",sm_cards,"Pooled Cohort Risk Equations","oevntcaayczz","phqkc440","","0","7.5","%","","","0","96.5","");
phqkm310 = new mdxp_o("Multi-Ethnic Study of Atherosclerosis, Coronary Heart Disease Risk (10y)","MESA CHD Risk (10y)",sm_cards,"MESA algorithm","oevntcaayc","phqkm310","","0","7.5","%","","","0","100","");																		
phqkq410 = new mdxp_o("Multi-Ethnic Study of Atherosclerosis with Coronary Artery Calcification, Coronary Heart Disease Risk (10y)","MESA-CAC CHD Risk (10y)",sm_cards,"MESA-CAC algorithm","oevntcaayczz","phqkq410","","0","7.5","%","","","0","100","");																		

phqhb550 = new mdxp_o("TIMI Risk Score (UA/NSTEMI)","TIMI (nstemi)",sm_cards,"TIMI NSTEMI algorithm","oevntcaayczz","phqhb550","","0","1","points","","","0","7","");
phqhf660 = new mdxp_o("TIMI Risk Score (STEMI)","TIMI (stemi)",sm_cards,"TIMI STEMI algorithm","oevntcaayczz","phqhf660","","0","3","points","","","0","14","");
phqhj880 = new mdxp_o("TIMI Risk Index","TIMI RI",sm_cards,"HR*(Age/10)^2/SBP","oevnttaaycxe","phqhj880","","4","28","points","","","0","500","");
phqlk030 = new mdxp_o("HEART Score for Major Cardiac Events","HEART Score",sm_cards,"HEART Score algorithm","oevntcaayczz","phqlk030","","0","2","points","","","0","10","");

phqlm041 = new mdxp_o("GRACE ACS Risk Score","GRACE Score",sm_cards,"GRACE ACS algorithm","oevnttaayczz","phqlm041","","","","","","","","","");					
phqln051 = new mdxp_o("GRACE ACS Risk Score for in-Hospital Mortality","GRACE in",sm_cards,"GRACE ACS algorithm","oevntcaayczz","phqln051","","0","108","points","","","0","372","");										
phqlr061 = new mdxp_o("GRACE ACS Risk and Mortality (post-discharge to 6 Months)","GRACE post",sm_cards,"GRACE ACS algorithm","oevntcaayczz","phqlr061","","0","88","points","","","0","263","");										


phqjb122 = new mdxp_o("CHADS2 Master","CHADS2 Master",sm_cards,"","mflnttaazxz","phqjb122","","","","","","","","","");					
phqjc133 = new mdxp_o("CHADS 2 Score for Atrial Fibrillation Stroke Risk","CHADS2 Score",sm_cards,"Chads2 Algorithm","oevntcaayczz","phqjc133","","0","0","points","","","0","6","");
phqjj144 = new mdxp_o("CHA2DS2-VASc Score for Atrial Fibrillation Stroke Risk","CHA2DS2-VASc",sm_cards,"CHA2DS2-VASc Algorithm","oevntcaayczz","phqjj144","","0","0","points","","","0","9","");								
phqjm155 = new mdxp_o("San Francisco Syncope Rule","SF Syncope",sm_cards,"SF Syncope algorithm","oevntcaayczz","phqjm155","","0","0","points","","","0","5","");
phqjp166 = new mdxp_o("HAS-BLED Score for Bleeding Risk in Atrial Fibrillation","HAS-BLED",sm_cards,"HAS-BLED Algorithm","oevntcaayczz","phqjp166","","0","0","points","","","0","9","");
phqjs770 = new mdxp_o("Atrial Fibrillation Master","A Fib mstr",sm_cards,"","","phqjs770","","","","","","","","","");			

phqmc880 = new mdxp_o("MAGGIC Heart Failure Survival Risk Score","MAGGIC HF Risk",sm_cards,"","oevnttaayc","phqmc880","","","","","","","","","");						
phqmd811 = new mdxp_o("MAGGIC (Heart Failure Point Score)","MAGGIC HF",sm_cards,"MAGGIC algorithm","oevntwaayczz","phqmd811","","0","0","points","","","0","54","");						
phqmf822 = new mdxp_o("Maggic Mortality Risk (within 1 y)","Mortality risk (1y)",eb16,"","oevnttaayc","phqmf822","","0","0","%","","","0","100","");			
phqmg833 = new mdxp_o("Maggic Mortality Risk (within 3 y)","Mortality risk (3y)",eb16,"","oevnttaayc","phqmg833","","0","0","%","","","0","100","");			

phqmj244 = new mdxp_o("New York Heart Association (Heart Failure Class)","NYHA HF",sm_cards,"NYHA class","oevnttaayczz","phqmj244","","","","Class","","","I","IV","");

pcfrc122 = new mdxp_o("Ranson's Criteria for Pancreatitis","Ranson",sm_gasts,"Ranson's algorithm","oevntcaayczz","pcfrc122","","0","2","points","","","0","11","");
pcfrf135 = new mdxp_o("Glasgow's Criteria for Pancreatitis","Glasgow",sm_gasts,"Glasgow's algorithm","oevntcaayczz","pcfrf135","","0","2","points","","","0","8","");
phqlb733 = new mdxp_o("ESCAPE Risk Score","ESCAPE Score",sm_cards,"ESCAPE Algorithm","oevntcaayczz","phqlb733","","0","1","points","","","0","13","");

prwck220 = new mdxp_o("MMRC Dyspnea Severity Scale","MMRC Dyspnea SS",sm_pulms,"MMRC Scale","oevntcaayczz","prwck220","","0","0","points","","","0","4","");

//////////////////////////////////
hkdcbcb1 = new mdxp_o("Cigarrette Smoking","Smoking",mdc6,"","iiznttaayc","hkdcbcb1","","","","No","","Yes","","","");
hgpjhhc0 = new mdxp_o("Hypertension","HTN",mdc6,"","iiznttnayc","hgpjhhc0","","pagelinx","","No","","Yes","","","");
hgpjhkb1 = new mdxp_o("On Hypertension Meds","On HTN meds",mdc6,"","iiznttaayc","hgpjhkb1","","pagelinx","","No","","Yes","","","");
hlphffb4 = new mdxp_o("Coronary Heart Disease (premature)","FH premature CHD",mdc6," +FH of premature CHD (CHD in male first degree relative <55y; CHD in female first degree relative  < 65years)","iiznttaayc","hlphffb4","","pagelinx","","No","","Yes","","","");

hgprddc2 = new mdxp_o("Chronic Obstructive Pulmonary Disease","COPD",mdc6,"","iiznttaayc","hgprddc2","","","","No","","Yes","","","");			


//////////////////////////////////
pnxdd111 = new mdxp_o("Patient Age","Age",ebx,"","iehztsnnnc","pnxdd111","","0","90","years","","","0","110","");
pnxdg222 = new mdxp_o("Gender","Sex",ebx,"","iizztsnnnc","pnxdg222","","","","Male","","Female","","","");
pnxdw333 = new mdxp_o("Body Weight","Wt",ebx,"","iavnttnays","pnxdw333","","110","220","lb","0.454","kg","55","880","");
pnxdy444 = new mdxp_o("Body Height","Ht",ebx,"","iavnttnays","pnxdy444","","60","80",in_a,"2.54","cm","40","96","");

pnxgb257 = new mdxp_o("Ethnicity Factor","ETF",ebx,"","iiznttnayc","pnxgb257","","","","white (non-black)","","black","","","");
phxgb018 = new mdxp_o("Albumin","Alb",ebx,"","iorsttnayc","phxgb018","S","3.5","5.5","g/dL","10","g/L","0","50","");
psxff047 = new mdxp_o("Blood Urea Nitrogen","BUN",ebx,"","ioxsttaayc","psxff047","B","10","20","mg/dL","0.3571","mmol/L","0","1000","");

pfxdq210 = new mdxp_o("Hemoglobin","Hb",ebx,"","iorsttnayc","pfxdq210","B","12","18","g/dL","0.6206","mmol/L","0","40","");
pbxlh321 = new mdxp_o("Hemoglobin A1c","HbA1c",ebx,"","ioxsttnayc","pbxlh321","S","4.5","6.5","%","0.01",vfraction,"1","30","");			

pbxhb016 = new mdxp_o("Cholesterol","Chol",ebx,"","ioxstsnayc","pbxhb016","S","140","240","mg/dL","0.0259","mmol/L","0","4000","");
pbxhc357 = new mdxp_o("High Density Lipoprotein","HDL",ebx,"","ioxstsaayc","pbxhc357","S","30","85","mg/dL","0.0259","mmol/L","0","2000","");
pbxhd419 = new mdxp_o("Triglycerides","TG",ebx,"","ioxstsnayc","pbxhd419","S","60","150","mg/dL","0.0113","mmol/L","0","5000","");
pbxhf125 = new mdxp_o("Low Density Lipoprotein","LDL",eby,"","ioxstsaayc","pbxhf125","S","60","130","mg/dL","0.0259","mmol/L","0","3000","");

prxdf026 = new mdxp_o("Fraction of inspired O2","FIO2",ebx,"","iowsttaays","prxdf026","","19","21","%","0.01",vfraction,"0","100","");
prxdp076 = new mdxp_o("Water vapor (partial pressure)","PH2O",ebx,"","iorsttaayc","prxdp076","","47","47","mmHg","1","torr","0","150","");
prxdk098 = new mdxp_o("Barometric Pressure","PB",ebx,"","iorsttaayc","prxdk098","","500","760","mmHg","1","torr","0","760","");
prxdv042 = new mdxp_o("Respiratory Quotient","R",ebx,"","iorsttaayc","prxdv042","","0.7","1.0",vfraction,"100","%","0","5","");
prxfq307 = new mdxp_o("arterial CO2 Tension","PaCO2",ebx,"","iorsttaayc","prxfq307","","35","45","mmHg","0.1333","kPa","0","200","");
prxfb259 = new mdxp_o("arterial Oxygen Tension","PaO2",ebx,"","iorsttaayc","prxfb259","","80","100","mmHg","0.1333","kPa","0","760","");
prxfd296 = new mdxp_o("arterial Oxygen Saturation","SaO2",ebx,"","iowsttaayc","prxfd296","","96","99","%","0.01",vfraction,"0","100","");
prxfm284 = new mdxp_o("capillary Oxygen Saturation","ScO2",ebx,"","iowsttaayc","prxfm284","","100","100","%","0.01",vfraction,"0","100","");
prxfj243 = new mdxp_o("mixed venous Oxygen Saturation","SvO2",ebx,"","iowsttaayc","prxfj243","","60","80","%","0.01",vfraction,"0","100","");
prxfg279 = new mdxp_o("mixed venous Oxygen Tension","PvO2",ebx,"","ioxsttaayc","prxfg279","","35","45","mmHg","0.1333","kPa","0","760","");
prxgg771 = new mdxp_o("6 Minute Walk Distance","6MWD",ebx,"measured","ioxsttaayc","prxgg771","","350","950","m","0.9144","yd","0","3000","");

psxdf212 = new mdxp_o("Creatinine","Cr",ebx,"","iovsttnayc","psxdf212","S","0.5","1.5","mg/dL","88.42","umol/L","0","50","");
psxdg019 = new mdxp_o("Creatinine","Cr",ebx,"","ioxsttnayc","psxdg019","U","40","120","mg/dL","0.0884","mmol/L","0","30000","");
psxgb065 = new mdxp_o("Sodium","Na+",ebx,"","ioxsttaayc","psxgb065","S","136","145","mEq/L","1","mmol/L","80","200","");
psxgc103 = new mdxp_o("Sodium","Na+",ebx,"","ioxsttaayc","psxgc103","U","25","150","mEq/L","1","mmol/L","0","3000","");
psxgg083 = new mdxp_o("Chloride","Cl-",ebx,"","ioxsttaayc","psxgg083","S","98","106","mEq/L","1","mmol/L","50","150","");
psxhb265 = new mdxp_o("Bicarbonate","HCO3-",ebx,"","ioxsttaayc","psxhb265","S","21","29","mEq/L","1","mmol/L","0","200","");
pbxlc621 = new mdxp_o("Glucose","gluc",ebx,"","iovsttnayc","pbxlc621","S","75","115","mg/dL","0.0555","mmol/L","0","3000","");
psxkb173 = new mdxp_o("potential Hydrogen","pH",ebx,"","iexnttaayc","psxkb173","aB","7.36","7.44","pH units","","","6","7.8","");

phxdf213 = new mdxp_o("Heart Rate","HR",ebx,"","iehnttnayc","phxdf213","","60","90","bpm","","","0","500","");
phxgd125 = new mdxp_o("Systolic Blood Pressure","SBP",ebx,"","iehnttaayc","phxgd125","","100","140","mmHg","","","0","300","");
phxgf086 = new mdxp_o("Diastolic Blood Pressure","DBP",ebx,"","iehnttaayc","phxgf086","","60","90","mmHg","","","0","300","");

pnxfg202 = new mdxp_o("Waist","waist",ebx,"","iowsttnayc","pnxfg202","","20","39",in_a,"2.54","cm","10","80","");
pnxfh303 = new mdxp_o("Hip","hip",ebx,"","iowsttnayc","pnxfh303","","20","39",in_a,"2.54","cm","10","80","");

////////////
hgpbgcb1 = new mdxp_o("Diabetes Mellitus","DM",mdc6,"","iiznttnayc","hgpbgcb1","","","","No","","Yes","","","");

prwch220 = new mdxp_o("BODE Index (BMI, Obstruction, Dyspnea, Exercise Index in COPD)","BODE Index",sm_pulms,"BODE algorithm","oevntwaayczz","prwch220","","0","1","points","","","0","10","");
prrfg722 = new mdxp_o("Forced Expiratory Volume 1s (% of predicted)","FEV1, % predicted",sm_pulms,"FEV1 measured/FEV1 predicted","oowsttaaycxe","prrfg722","","80","120","%","0.01","fraction","0","300","");

hgpvgdf3 = new mdxp_o("Cerebro-Vascular Disease","CVD",mdc6,"","iiznttaayc","hgpvgdf3"	,"","","","No","","Yes","","","");
hgpgyyy0 = new mdxp_o("Neoplasm","",mdc6,"","iiznttnayc","hgpgyyy0","","","","No","","Yes","","","");
hgpsyyy0 = new mdxp_o("Renal Disease","Renal Dz",mdc6,"","iiznttaayc","hgpsyyy0","","","","No","","Yes","","","");
hgpcyyy0 = new mdxp_o("Liver Disease","Liver Dz",mdc6,"","iiznttaayc","hgpcyyy0",""," ","","No","","Yes","","","");



/////////////////////////////////////
vaddtimgphqff330 = " * Note: in ATP III, diabetes is regarded as a CHD risk equivalent. <br> **HDL cholesterol >60 mg/dL counts as a \'negative\' risk factor; its presence removes one risk factor from the total count. <br> CHD = Coronary Heart Disease"; 




//////////////////////////////////////////////////
function CalXpbhdb125(sna, snb, snc){
	rslt =  (   (sna) - ( (snc/5.0) + (snb) )   );
	return rslt;
}
function CalXpbhdd232(sna){
	rslt =  (sna/5.0);
	return rslt;
}
function CalXpbhgr049(sna,snb){
	rslt =  (sna/snb);
	return rslt;
}
function CalXpbhhr154(sna, snb, snc){
	rslt = ( ((sna)-((snc/5.0)+(snb))) / (snb)  );
	return rslt;
}
function CalXpbhhr154b(sna,snb){
	rslt =  (sna/snb);
	return rslt;
}
function CalXpblgb013(sna){
	rslt =  ( (28.7*sna) - (46.7) );
	return rslt;
}



function CalXpbhdh366(sna,snb){
	rslt =  (sna - snb);
	return rslt;
}
function CalXpndmb015(sna, snb){
	rslt =  (  (Math.pow(sna, 0.425)) * (Math.pow(snb, 0.725)) * (0.007184)  );
	return rslt;
}
function CalXpndfb115Y(sna){
	rslt =  (Math.pow(sna/100, 2))*(23) ;
	return rslt;
}
function CalXpndfb115X(sna){
	rslt =  (Math.pow(sna/100, 2))*(21.5) ;
	return rslt;
}

function CalXpndfb115(gen,sna){
	if (gen == 0){rslt = (Math.pow(sna/100,2))*(23);}
	else{rslt = (Math.pow(sna/100,2))*(21.5);}
	return rslt;
}	


function CalXpndfg122(wt, ibw){
	rslt =  (wt * 100) / ibw;
	return rslt;
}
function CalXpndfg122Y(sr35906, sr35908){
	rslt =  (sr35906 * 100) / ((Math.pow(sr35908/100, 2))*(23));
	return rslt;
}
function CalXpndfg122X(sr35906, sr35908){
	rslt =  (sr35906 * 100) / ((Math.pow(sr35908/100, 2))*(21.5));
	return rslt;
}
function CalXpndfj043Y(sr35906, sr35908){
	rslt = (  (sr35906) - ((Math.pow(sr35908/100, 2))*(23))    );
	return rslt;
}
function CalXpndfj043X(sr35906, sr35908){
	rslt = (  (sr35906) - ((Math.pow(sr35908/100, 2))*(21.5))    );
	return rslt;
}
function CalXpndfk259(sna){
	rslt =  (Math.pow(sna/100, 2))*(25) ;
	return rslt;
}
function CalXpndfk306(sna){
	rslt =  (Math.pow(sna/100, 2))*(30) ;
	return rslt;
}
function CalXpndhb225(wt, ht){
	rslt =  (wt / Math.pow(ht/100, 2) );
	return rslt;
}
function CalXpndhg016(snk, snq){
	var lttrrslt = "";
	vrslto =  (snk / Math.pow(snq/100, 2) );
	vrslt = roundtd(vrslto,2)
	if (vrslt < 18.5) {lttrrslt = vUnderweight;} 
	else if (vrslt >= 18.5 && vrslt < 25.0) {lttrrslt = vNormal;}
	else if (vrslt >= 25.0 && vrslt < 30.0) {lttrrslt = vOverweight;}
	else if (vrslt >= 30.0 && vrslt < 35.0) {lttrrslt = vObesity + " (" + vClass + " I)";}
	else if (vrslt >= 35.0 && vrslt < 40.0) {lttrrslt = vObesity + " (" + vClass + " II)";}
	else if (vrslt >= 40.0) {lttrrslt = vObesity + " (" + vClass + " III)";}
	return lttrrslt;
}

function CalXprdgg001(fio2,pb,ph2o,paco2,rrr,pao2){
	var rslt = (((fio2)*(pb - ph2o)) - (paco2/rrr)) - (pao2);   
	return rslt;
}
function CalXprdgk108(sna){
	var rslt = 2.5+(0.25*sna);   
	return rslt;
}
function CalXprdhl235(fio2,pb,ph2o,paco2,rrr){
	var rslt = (((fio2)*(pb - ph2o)) - (paco2/rrr));   
	return rslt;
}
function CalXprdkg153(sna){
	var rslt = 100-(0.33*sna);   
	return rslt;
}
function CalXprdkr022(pao2,fio2){
	var rslt = (pao2/fio2);   
	return rslt;
}
function CalXprdmb243(fio2,pb,ph2o){
	var rslt = (fio2)*(pb - ph2o);   
	return rslt;
}
function CalXprgcc770(hb,so2,po2){
	var rslt = (((1.36*hb)*(so2/100))+(po2*0.0031)); 
	return rslt;
}
function CalXprghd298(cao2,cvo2){
	var rslt = (cao2-cvo2); 
	return rslt;
}
function CalXpsdgb014(age, wt, crs){
	var rslt = (((140-age)*(wt))/(72*crs));   
	return rslt;
}
function CalXpsdgp182(crs,age,gnf,etf){
	var rslt = ((186.3)*(Math.pow(crs,-1.154))*(Math.pow(age,-0.203))*(gnf)*(etf));   
	return rslt;
}
function CalXpsdgq277(crs,age,gnf,etf,sun,alb){
	var rslt = ( (170)*(Math.pow(crs,-0.999))*(Math.pow(age,-0.176))*(gnf)*(etf)*(Math.pow(sun,-0.17))*(Math.pow(alb,0.318)) );   
	return rslt;
}
function CalXpndjb082(nps,npt){
	rslt =   (nps)/(npt) ;
	return rslt;
}
function CalXpnfdb015X(age, wt, ht){
	rslt =  (   655.0955 + (9.4634*wt) + (1.8496*ht) - (4.6756*age)  );
	return rslt;
}	
function CalXpnfdb015Y(age, wt, ht){
	rslt =  (   66.473 + (13.751*wt) + (5.0033*ht) - (6.755*age)  );
	return rslt;
}	

function CalXpnfdd219(age, gen, wt, ht){
	if (gen == 0){
		rslt =  (66.473 + (13.751*wt) + (5.0033*ht) - (6.755*age));
	}else{
		rslt =  (655.0955 + (9.4634*wt) + (1.8496*ht) - (4.6756*age));
	}
	return rslt;
}	

function CalXpsdqr016(vgfr){
	var vr_psdqr016 = "";
	var vrslt = roundtd(vgfr,1);
	if (vrslt >= 90.0) {vr_psdqr016 = vstage + " 1 " + "("+vnormal+")";} 
	else if (vrslt >= 60.0 && vrslt < 90.0) {vr_psdqr016 = vstage + " 2 " + "("+vmild+")";}
	else if (vrslt >= 30.0 && vrslt < 60.0) {vr_psdqr016 = vstage + " 3 " + "("+vmoderate+")";}
	else if (vrslt >= 15.0 && vrslt < 30.0) {vr_psdqr016 = vstage + " 4 " + "("+vsevere+")";}
	else if (vrslt < 15.0) {vr_psdqr016 = vstage + " 5 " + "("+vfailure+")";}
	return vr_psdqr016;
}
//////////////////////////CKD-EPI 
function CalXpsdqs016(vgfr){
	var vr_psdqs016 = "";
	var vrslt = roundtd(vgfr,1);
	if (vrslt >= 90.0) {vr_psdqs016 = vstage + " G1 " + "("+vnormal+")";} 
	else if (vrslt >= 60.0 && vrslt < 90.0) {vr_psdqs016 = vstage + " G2 " + "("+vmild+")";}
	else if (vrslt >= 45.0 && vrslt < 60.0) {vr_psdqs016 = vstage + " G3a " + "("+vmild2mod+")";}
	else if (vrslt >= 30.0 && vrslt < 45.0) {vr_psdqs016 = vstage + " G3b " + "("+vmod2sev+")";}
	else if (vrslt >= 15.0 && vrslt < 30.0) {vr_psdqs016 = vstage + " G4 " + "("+vsevere+")";}
	else if (vrslt > 0.0 && vrslt < 15.0) {vr_psdqs016 = vstage + " G5 " + "("+vfailure+")";}
	else if (vrslt <= 0 && vrslt >= 150) {}
	return vr_psdqs016;
}


function CalXpsfdb034(nas, cls, hco3s){
	var rslt =  (nas) - (cls + hco3s); 
	return rslt;
}
function CalXpshdb101(nas, nau, crs, cru){
	var rslt =   ((nau*crs)/(nas*cru)) * 100 ; 
	return rslt;
}
function CalXpspdf361(nas, nau, crs, cru){
	var rslt =   ((nau*crs)/(nas*cru)) * 100 ; 
	return rslt;
}
function CalXpspdj228(nas, nau, crs, cru){
	var rslt =   ((nau*crs)/(nas*cru)) * 100 ; 
	return rslt;
}






/////////////
function checkpnxdd111(form) {
	nptStr = Number(smnxform.vpnxdd111.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.pnxdd111.name + msgN);
			smnxform.vpnxdd111.value = "";
			smnxform.vpnxdd111.focus();
	}
	
	if (nptStr < Number(pnxdd111.limcu_lw) || nptStr > Number(pnxdd111.limcu_hgh)) {
			alert( this.pnxdd111.bjctvals() )
			smnxform.vpnxdd111.value = "";
			smnxform.vpnxdd111.focus();
			return false;
			}
	return true;
}

/////////////
function checkpnxdw333(form) {
	nptStr = Number(smnxform.vpnxdw333.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.pnxdw333.name + msgN);
			smnxform.vpnxdw333.value = "";
			smnxform.vpnxdw333.focus();
	}
	else if (smnxform.vpnxdw333nts[0].checked) {
			if (nptStr < Number(this.pnxdw333.limcu_lw) || nptStr > Number(this.pnxdw333.limcu_hgh)) {
			alert( this.pnxdw333.bjctvals() )
			smnxform.vpnxdw333.value = "";
			smnxform.vpnxdw333.focus();
			return false;
			}
	}
	else if (smnxform.vpnxdw333nts[1].checked) {
			if (nptStr < Number(this.pnxdw333.limcu_lw*this.pnxdw333.cf_cusi) || nptStr > Number(this.pnxdw333.limcu_hgh*this.pnxdw333.cf_cusi)) {
			alert( this.pnxdw333.bjctvals() )
			smnxform.vpnxdw333.value = "";
			smnxform.vpnxdw333.focus();
			return false;
			}
	}
	return true;
}



/////////////
function checkpnxdy444(form) {
	nptStr = Number(smnxform.vpnxdy444.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.pnxdy444.name + msgN);
			smnxform.vpnxdy444.value = "";
			smnxform.vpnxdy444.focus();
	}
	else if (smnxform.vpnxdy444nts[0].checked) {
			if (nptStr < Number(this.pnxdy444.limcu_lw) || nptStr > Number(this.pnxdy444.limcu_hgh)) {
			alert( this.pnxdy444.bjctvals() )
			smnxform.vpnxdy444.value = "";
			smnxform.vpnxdy444.focus();
			return false;
			}
	}
	else if (smnxform.vpnxdy444nts[1].checked) {
			if (nptStr < Number(this.pnxdy444.limcu_lw*this.pnxdy444.cf_cusi) || nptStr > Number(this.pnxdy444.limcu_hgh*this.pnxdy444.cf_cusi)) {
			alert( this.pnxdy444.bjctvals() )
			smnxform.vpnxdy444.value = "";
			smnxform.vpnxdy444.focus();
			return false;
			}
	}
	return true;
}


/////////////
function checkpbxhb016(form) {
	nptStr = Number(smnxform.vpbxhb016.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.pbxhb016.name + msgN);
			smnxform.vpbxhb016.value = "";
			smnxform.vpbxhb016.focus();
	}
	else if (smnxform.vpbxhb016nts.options[0].selected) {
			if (nptStr < Number(pbxhb016.limcu_lw) || nptStr > Number(pbxhb016.limcu_hgh)) {
			alert( this.pbxhb016.bjctvals() )
			smnxform.vpbxhb016.value = "";
			this.smnxform.vpbxhb016.focus();
			return false;
			}
	}
	else if (smnxform.vpbxhb016nts.options[1].selected) {
			if (nptStr < Number(pbxhb016.limcu_lw*this.pbxhb016.cf_cusi) || nptStr > Number(pbxhb016.limcu_hgh*this.pbxhb016.cf_cusi)) {
			alert( this.pbxhb016.bjctvals() )
			smnxform.vpbxhb016.value = "";
			this.smnxform.vpbxhb016.focus();
			return false;
			}
	}
	return true;
}



/////////////
function checkpbxhc357(form) {
	nptStr = Number(smnxform.vpbxhc357.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.pbxhc357.name + msgN);
			smnxform.vpbxhc357.value = "";
			smnxform.vpbxhc357.focus();
	}
	else if (smnxform.vpbxhc357nts.options[0].selected) {
			if (nptStr < Number(pbxhc357.limcu_lw) || nptStr > Number(pbxhc357.limcu_hgh)) {
			alert( this.pbxhc357.bjctvals() )
			smnxform.vpbxhc357.value = "";
			this.smnxform.vpbxhc357.focus();
			return false;
			}
	}
	else if (smnxform.vpbxhc357nts.options[1].selected) {
			if (nptStr < Number(pbxhc357.limcu_lw*this.pbxhc357.cf_cusi) || nptStr > Number(pbxhc357.limcu_hgh*this.pbxhc357.cf_cusi)) {
			alert( this.pbxhc357.bjctvals() )
			smnxform.vpbxhc357.value = "";
			this.smnxform.vpbxhc357.focus();
			return false;
			}
	}
	return true;
}
/////////////
function checkpbxhd419(form) {
	nptStr = Number(smnxform.vpbxhd419.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.pbxhd419.name + msgN);
			smnxform.vpbxhd419.value = "";
			smnxform.vpbxhd419.focus();
	}
	else if (smnxform.vpbxhd419nts.options[0].selected) {
			if (nptStr < Number(pbxhd419.limcu_lw) || nptStr > Number(pbxhd419.limcu_hgh)) {
			alert( this.pbxhd419.bjctvals() )
			smnxform.vpbxhd419.value = "";
			this.smnxform.vpbxhd419.focus();
			return false;
			}
	}
	else if (smnxform.vpbxhd419nts.options[1].selected) {
			if (nptStr < Number(pbxhd419.limcu_lw*this.pbxhd419.cf_cusi) || nptStr > Number(pbxhd419.limcu_hgh*this.pbxhd419.cf_cusi)) {
			alert( this.pbxhd419.bjctvals() )
			smnxform.vpbxhd419.value = "";
			this.smnxform.vpbxhd419.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkpbxhf125(form) {
	nptStr = Number(smnxform.vpbxhf125.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.pbxhf125.name + msgN);
			smnxform.vpbxhf125.value = "";
			smnxform.vpbxhf125.focus();
	}
	else if (smnxform.vpbxhf125nts.options[0].selected) {
			if (nptStr < Number(pbxhf125.limcu_lw) || nptStr > Number(pbxhf125.limcu_hgh)) {
			alert( this.pbxhf125.bjctvals() )
			smnxform.vpbxhf125.value = "";
			this.smnxform.vpbxhf125.focus();
			return false;
			}
	}
	else if (smnxform.vpbxhf125nts.options[1].selected) {
			if (nptStr < Number(pbxhf125.limcu_lw*this.pbxhf125.cf_cusi) || nptStr > Number(pbxhf125.limcu_hgh*this.pbxhf125.cf_cusi)) {
			alert( this.pbxhf125.bjctvals() )
			smnxform.vpbxhf125.value = "";
			this.smnxform.vpbxhf125.focus();
			return false;
			}
	}
	return true;
}


/////////////
function checkpsxdf212(form) {
	nptStr = Number(smnxform.vpsxdf212.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.psxdf212.name + msgN);
			smnxform.vpsxdf212.value = "";
			smnxform.vpsxdf212.focus();
	}
	else if (smnxform.vpsxdf212nts.options[0].selected) {
			if (nptStr < Number(psxdf212.limcu_lw) || nptStr > Number(psxdf212.limcu_hgh)) {
			alert( this.psxdf212.bjctvals() )
			smnxform.vpsxdf212.value = "";
			this.smnxform.vpsxdf212.focus();
			return false;
			}
	}
	else if (smnxform.vpsxdf212nts.options[1].selected) {
			if (nptStr < Number(psxdf212.limcu_lw*this.psxdf212.cf_cusi) || nptStr > Number(psxdf212.limcu_hgh*this.psxdf212.cf_cusi)) {
			alert( this.psxdf212.bjctvals() )
			smnxform.vpsxdf212.value = "";
			this.smnxform.vpsxdf212.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkpsxdg019(form) {
	nptStr = Number(smnxform.vpsxdg019.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.psxdg019.name + msgN);
			smnxform.vpsxdg019.value = "";
			smnxform.vpsxdg019.focus();
	}
	else if (smnxform.vpsxdg019nts.options[0].selected) {
			if (nptStr < Number(psxdg019.limcu_lw) || nptStr > Number(psxdg019.limcu_hgh)) {
			alert( this.psxdg019.bjctvals() )
			smnxform.vpsxdg019.value = "";
			this.smnxform.vpsxdg019.focus();
			return false;
			}
	}
	else if (smnxform.vpsxdg019nts.options[1].selected) {
			if (nptStr < Number(psxdg019.limcu_lw*this.psxdg019.cf_cusi) || nptStr > Number(psxdg019.limcu_hgh*this.psxdg019.cf_cusi)) {
			alert( this.psxdg019.bjctvals() )
			smnxform.vpsxdg019.value = "";
			this.smnxform.vpsxdg019.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkpsxgb065(form) {
	nptStr = Number(smnxform.vpsxgb065.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.psxgb065.name + msgN);
			smnxform.vpsxgb065.value = "";
			smnxform.vpsxgb065.focus();
	}
	else if (smnxform.vpsxgb065nts.options[0].selected) {
			if (nptStr < Number(psxgb065.limcu_lw) || nptStr > Number(psxgb065.limcu_hgh)) {
			alert( this.psxgb065.bjctvals() )
			smnxform.vpsxgb065.value = "";
			this.smnxform.vpsxgb065.focus();
			return false;
			}
	}
	else if (smnxform.vpsxgb065nts.options[1].selected) {
			if (nptStr < Number(psxgb065.limcu_lw*this.psxgb065.cf_cusi) || nptStr > Number(psxgb065.limcu_hgh*this.psxgb065.cf_cusi)) {
			alert( this.psxgb065.bjctvals() )
			smnxform.vpsxgb065.value = "";
			this.smnxform.vpsxgb065.focus();
			return false;
			}
	}
	return true;
}
/////////////
function checkpsxgc103(form) {
	nptStr = Number(smnxform.vpsxgc103.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.psxgc103.name + msgN);
			smnxform.vpsxgc103.value = "";
			smnxform.vpsxgc103.focus();
	}
	else if (smnxform.vpsxgc103nts.options[0].selected) {
			if (nptStr < Number(psxgc103.limcu_lw) || nptStr > Number(psxgc103.limcu_hgh)) {
			alert( this.psxgc103.bjctvals() )
			smnxform.vpsxgc103.value = "";
			this.smnxform.vpsxgc103.focus();
			return false;
			}
	}
	else if (smnxform.vpsxgc103nts.options[1].selected) {
			if (nptStr < Number(psxgc103.limcu_lw*this.psxgc103.cf_cusi) || nptStr > Number(psxgc103.limcu_hgh*this.psxgc103.cf_cusi)) {
			alert( this.psxgc103.bjctvals() )
			smnxform.vpsxgc103.value = "";
			this.smnxform.vpsxgc103.focus();
			return false;
			}
	}
	return true;
}
/////////////
function checkprxdf026(form) {
	nptStr = Number(smnxform.vprxdf026.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.prxdf026.name + msgN);
			smnxform.vprxdf026.value = "";
			smnxform.vprxdf026.focus();
	}
	else if (smnxform.vprxdf026nts.options[0].selected) {
			if (nptStr < Number(prxdf026.limcu_lw) || nptStr > Number(prxdf026.limcu_hgh)) {
			alert( this.prxdf026.bjctvals() )
			smnxform.vprxdf026.value = "";
			this.smnxform.vprxdf026.focus();
			return false;
			}
	}
	else if (smnxform.vprxdf026nts.options[1].selected) {
			if (nptStr < Number(prxdf026.limcu_lw*this.prxdf026.cf_cusi) || nptStr > Number(prxdf026.limcu_hgh*this.prxdf026.cf_cusi)) {
			alert( this.prxdf026.bjctvals() )
			smnxform.vprxdf026.value = "";
			this.smnxform.vprxdf026.focus();
			return false;
			}
	}
	return true;
}


/////////////
function checkprxdk098(form) {
	nptStr = Number(smnxform.vprxdk098.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.prxdk098.name + msgN);
			smnxform.vprxdk098.value = "";
			smnxform.vprxdk098.focus();
	}
	else if (smnxform.vprxdk098nts.options[0].selected) {
			if (nptStr < Number(prxdk098.limcu_lw) || nptStr > Number(prxdk098.limcu_hgh)) {
			alert( this.prxdk098.bjctvals() )
			smnxform.vprxdk098.value = "";
			this.smnxform.vprxdk098.focus();
			return false;
			}
	}
	else if (smnxform.vprxdk098nts.options[1].selected) {
			if (nptStr < Number(prxdk098.limcu_lw*this.prxdk098.cf_cusi) || nptStr > Number(prxdk098.limcu_hgh*this.prxdk098.cf_cusi)) {
			alert( this.prxdk098.bjctvals() )
			smnxform.vprxdk098.value = "";
			this.smnxform.vprxdk098.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkprxdp076(form) {
	nptStr = Number(smnxform.vprxdp076.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.prxdp076.name + msgN);
			smnxform.vprxdp076.value = "";
			smnxform.vprxdp076.focus();
	}
	else if (smnxform.vprxdp076nts.options[0].selected) {
			if (nptStr < Number(prxdp076.limcu_lw) || nptStr > Number(prxdp076.limcu_hgh)) {
			alert( this.prxdp076.bjctvals() )
			smnxform.vprxdp076.value = "";
			this.smnxform.vprxdp076.focus();
			return false;
			}
	}
	else if (smnxform.vprxdp076nts.options[1].selected) {
			if (nptStr < Number(prxdp076.limcu_lw*this.prxdp076.cf_cusi) || nptStr > Number(prxdp076.limcu_hgh*this.prxdp076.cf_cusi)) {
			alert( this.prxdp076.bjctvals() )
			smnxform.vprxdp076.value = "";
			this.smnxform.vprxdp076.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkprxdv042(form) {
	nptStr = Number(smnxform.vprxdv042.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.prxdv042.name + msgN);
			smnxform.vprxdv042.value = "";
			smnxform.vprxdv042.focus();
	}
	else if (smnxform.vprxdv042nts.options[0].selected) {
			if (nptStr < Number(prxdv042.limcu_lw) || nptStr > Number(prxdv042.limcu_hgh)) {
			alert( this.prxdv042.bjctvals() )
			smnxform.vprxdv042.value = "";
			this.smnxform.vprxdv042.focus();
			return false;
			}
	}
	else if (smnxform.vprxdv042nts.options[1].selected) {
			if (nptStr < Number(prxdv042.limcu_lw*this.prxdv042.cf_cusi) || nptStr > Number(prxdv042.limcu_hgh*this.prxdv042.cf_cusi)) {
			alert( this.prxdv042.bjctvals() )
			smnxform.vprxdv042.value = "";
			this.smnxform.vprxdv042.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkprxfq307(form) {
	nptStr = Number(smnxform.vprxfq307.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.prxfq307.name + msgN);
			smnxform.vprxfq307.value = "";
			smnxform.vprxfq307.focus();
	}
	else if (smnxform.vprxfq307nts.options[0].selected) {
			if (nptStr < Number(prxfq307.limcu_lw) || nptStr > Number(prxfq307.limcu_hgh)) {
			alert( this.prxfq307.bjctvals() )
			smnxform.vprxfq307.value = "";
			this.smnxform.vprxfq307.focus();
			return false;
			}
	}
	else if (smnxform.vprxfq307nts.options[1].selected) {
			if (nptStr < Number(prxfq307.limcu_lw*this.prxfq307.cf_cusi) || nptStr > Number(prxfq307.limcu_hgh*this.prxfq307.cf_cusi)) {
			alert( this.prxfq307.bjctvals() )
			smnxform.vprxfq307.value = "";
			this.smnxform.vprxfq307.focus();
			return false;
			}
	}
	return true;
}


/////////////
function checkprxfb259(form) {
	nptStr = Number(smnxform.vprxfb259.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.prxfb259.name + msgN);
			smnxform.vprxfb259.value = "";
			smnxform.vprxfb259.focus();
	}
	else if (smnxform.vprxfb259nts.options[0].selected) {
			if (nptStr < Number(prxfb259.limcu_lw) || nptStr > Number(prxfb259.limcu_hgh)) {
			alert( this.prxfb259.bjctvals() )
			smnxform.vprxfb259.value = "";
			this.smnxform.vprxfb259.focus();
			return false;
			}
	}
	else if (smnxform.vprxfb259nts.options[1].selected) {
			if (nptStr < Number(prxfb259.limcu_lw*this.prxfb259.cf_cusi) || nptStr > Number(prxfb259.limcu_hgh*this.prxfb259.cf_cusi)) {
			alert( this.prxfb259.bjctvals() )
			smnxform.vprxfb259.value = "";
			this.smnxform.vprxfb259.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkpfxdq210(form) {
	inputStr = Number(smnxform.vpfxdq210.value);
	if ( (isNaN(inputStr)) ){
	    	alert(msgPN + this.pfxdq210.name + msgN);
			smnxform.vpfxdq210.value = "";
			smnxform.vpfxdq210.focus();
	}
	else if (smnxform.vpfxdq210nts.options[0].selected) {
			if (inputStr < Number(pfxdq210.limcu_lw) || inputStr > Number(pfxdq210.limcu_hgh)) {
			alert( this.pfxdq210.bjctvals() )
			smnxform.vpfxdq210.value = "";
			this.smnxform.vpfxdq210.focus();
			return false;
			}
	}
	else if (smnxform.vpfxdq210nts.options[1].selected) {
			if (inputStr < Number(pfxdq210.limcu_lw*this.pfxdq210.cf_cusi) || inputStr > Number(pfxdq210.limcu_hgh*this.pfxdq210.cf_cusi)) {
			alert( this.pfxdq210.bjctvals() )
			smnxform.vpfxdq210.value = "";
			this.smnxform.vpfxdq210.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkpbxlh321(form) {
	inputStr = Number(smnxform.vpbxlh321.value);
	if ( (isNaN(inputStr)) ){
	    	alert(msgPN + this.pbxlh321.name + msgN);
			smnxform.vpbxlh321.value = "";
			smnxform.vpbxlh321.focus();
	}
	else if (smnxform.vpbxlh321nts.options[0].selected) {
			if (inputStr < Number(pbxlh321.limcu_lw) || inputStr > Number(pbxlh321.limcu_hgh)) {
			alert( this.pbxlh321.bjctvals() )
			smnxform.vpbxlh321.value = "";
			this.smnxform.vpbxlh321.focus();
			return false;
			}
	}
	else if (smnxform.vpbxlh321nts.options[1].selected) {
			if (inputStr < Number(pbxlh321.limcu_lw*this.pbxlh321.cf_cusi) || inputStr > Number(pbxlh321.limcu_hgh*this.pbxlh321.cf_cusi)) {
			alert( this.pbxlh321.bjctvals() )
			smnxform.vpbxlh321.value = "";
			this.smnxform.vpbxlh321.focus();
			return false;
			}
	}
	return true;
}
/////////////
function checkprxfd296(form) {
	nptStr = Number(smnxform.vprxfd296.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.prxfd296.name + msgN);
			smnxform.vprxfd296.value = "";
			smnxform.vprxfd296.focus();
	}
	else if (smnxform.vprxfd296nts.options[0].selected) {
			if (nptStr < Number(prxfd296.limcu_lw) || nptStr > Number(prxfd296.limcu_hgh)) {
			alert( this.prxfd296.bjctvals() )
			smnxform.vprxfd296.value = "";
			this.smnxform.vprxfd296.focus();
			return false;
			}
	}
	else if (smnxform.vprxfd296nts.options[1].selected) {
			if (nptStr < Number(prxfd296.limcu_lw*this.prxfd296.cf_cusi) || nptStr > Number(prxfd296.limcu_hgh*this.prxfd296.cf_cusi)) {
			alert( this.prxfd296.bjctvals() )
			smnxform.vprxfd296.value = "";
			this.smnxform.vprxfd296.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkprxfm284(form) {
	nptStr = Number(smnxform.vprxfm284.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.prxfm284.name + msgN);
			smnxform.vprxfm284.value = "";
			smnxform.vprxfm284.focus();
	}
	else if (smnxform.vprxfm284nts.options[0].selected) {
			if (nptStr < Number(prxfm284.limcu_lw) || nptStr > Number(prxfm284.limcu_hgh)) {
			alert( this.prxfm284.bjctvals() )
			smnxform.vprxfm284.value = "";
			this.smnxform.vprxfm284.focus();
			return false;
			}
	}
	else if (smnxform.vprxfm284nts.options[1].selected) {
			if (nptStr < Number(prxfm284.limcu_lw*this.prxfm284.cf_cusi) || nptStr > Number(prxfm284.limcu_hgh*this.prxfm284.cf_cusi)) {
			alert( this.prxfm284.bjctvals() )
			smnxform.vprxfm284.value = "";
			this.smnxform.vprxfm284.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkprxfj243(form) {
	nptStr = Number(smnxform.vprxfj243.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.prxfj243.name + msgN);
			smnxform.vprxfj243.value = "";
			smnxform.vprxfj243.focus();
	}
	else if (smnxform.vprxfj243nts.options[0].selected) {
			if (nptStr < Number(prxfj243.limcu_lw) || nptStr > Number(prxfj243.limcu_hgh)) {
			alert( this.prxfj243.bjctvals() )
			smnxform.vprxfj243.value = "";
			this.smnxform.vprxfj243.focus();
			return false;
			}
	}
	else if (smnxform.vprxfj243nts.options[1].selected) {
			if (nptStr < Number(prxfj243.limcu_lw*this.prxfj243.cf_cusi) || nptStr > Number(prxfj243.limcu_hgh*this.prxfj243.cf_cusi)) {
			alert( this.prxfj243.bjctvals() )
			smnxform.vprxfj243.value = "";
			this.smnxform.vprxfj243.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkprxfg279(form) {
	nptStr = Number(smnxform.vprxfg279.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.prxfg279.name + msgN);
			smnxform.vprxfg279.value = "";
			smnxform.vprxfg279.focus();
	}
	else if (smnxform.vprxfg279nts.options[0].selected) {
			if (nptStr < Number(prxfg279.limcu_lw) || nptStr > Number(prxfg279.limcu_hgh)) {
			alert( this.prxfg279.bjctvals() )
			smnxform.vprxfg279.value = "";
			this.smnxform.vprxfg279.focus();
			return false;
			}
	}
	else if (smnxform.vprxfg279nts.options[1].selected) {
			if (nptStr < Number(prxfg279.limcu_lw*this.prxfg279.cf_cusi) || nptStr > Number(prxfg279.limcu_hgh*this.prxfg279.cf_cusi)) {
			alert( this.prxfg279.bjctvals() )
			smnxform.vprxfg279.value = "";
			this.smnxform.vprxfg279.focus();
			return false;
			}
	}
	return true;
}

///////////////////////////////////////////////////////////////////////////////////
function checkphxgb018(form) {
	nptStr = Number(smnxform.vphxgb018.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.phxgb018.name + msgN);
			smnxform.vphxgb018.value = "";
			smnxform.vphxgb018.focus();
	}
	else if (smnxform.vphxgb018nts.options[0].selected) {
			if (nptStr < Number(phxgb018.limcu_lw) || nptStr > Number(phxgb018.limcu_hgh)) {
			alert( this.phxgb018.bjctvals() );
			smnxform.vphxgb018.value = "";
			this.smnxform.vphxgb018.focus();
			return false;
			}
	}
	else if (smnxform.vphxgb018nts.options[1].selected) {
			if (nptStr < Number(phxgb018.limcu_lw*this.phxgb018.cf_cusi) || nptStr > Number(phxgb018.limcu_hgh*this.phxgb018.cf_cusi)) {
			alert( this.phxgb018.bjctvals() );
			smnxform.vphxgb018.value = "";
			this.smnxform.vphxgb018.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkpsxff047(form) {
	nptStr = Number(smnxform.vpsxff047.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.psxff047.name + msgN);
			smnxform.vpsxff047.value = "";
			smnxform.vpsxff047.focus();
	}
	else if (smnxform.vpsxff047nts.options[0].selected) {
			if (nptStr < Number(psxff047.limcu_lw) || nptStr > Number(psxff047.limcu_hgh)) {
			alert( this.psxff047.bjctvals() )
			smnxform.vpsxff047.value = "";
			this.smnxform.vpsxff047.focus();
			return false;
			}
	}
	else if (smnxform.vpsxff047nts.options[1].selected) {
			if (nptStr < Number(psxff047.limcu_lw*this.psxff047.cf_cusi) || nptStr > Number(psxff047.limcu_hgh*this.psxff047.cf_cusi)) {
			alert( this.psxff047.bjctvals() )
			smnxform.vpsxff047.value = "";
			this.smnxform.vpsxff047.focus();
			return false;
			}
	}
	return true;
}
////////////
function checkpnxfg202(form) {
	nptStr = Number(smnxform.vpnxfg202.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.pnxfg202.name + msgN);
			smnxform.vpnxfg202.value = "";
			smnxform.vpnxfg202.focus();
	}
	else if (smnxform.vpnxfg202nts.options[0].selected) {
			if (nptStr < Number(pnxfg202.limcu_lw) || nptStr > Number(pnxfg202.limcu_hgh)) {
			alert( this.pnxfg202.bjctvals() )
			smnxform.vpnxfg202.value = "";
			this.smnxform.vpnxfg202.focus();
			return false;
			}
	}
	else if (smnxform.vpnxfg202nts.options[1].selected) {
			if (nptStr < Number(pnxfg202.limcu_lw*this.pnxfg202.cf_cusi) || nptStr > Number(pnxfg202.limcu_hgh*this.pnxfg202.cf_cusi)) {
			alert( this.pnxfg202.bjctvals() )
			smnxform.vpnxfg202.value = "";
			this.smnxform.vpnxfg202.focus();
			return false;
			}
	}
	return true;
}

////////////////
function checkpnxfh303(form) {
	nptStr = Number(smnxform.vpnxfh303.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.pnxfh303.name + msgN);
			smnxform.vpnxfh303.value = "";
			smnxform.vpnxfh303.focus();
	}
	else if (smnxform.vpnxfh303nts.options[0].selected) {
			if (nptStr < Number(pnxfh303.limcu_lw) || nptStr > Number(pnxfh303.limcu_hgh)) {
			alert( this.pnxfh303.bjctvals() )
			smnxform.vpnxfh303.value = "";
			this.smnxform.vpnxfh303.focus();
			return false;
			}
	}
	else if (smnxform.vpnxfh303nts.options[1].selected) {
			if (nptStr < Number(pnxfh303.limcu_lw*this.pnxfh303.cf_cusi) || nptStr > Number(pnxfh303.limcu_hgh*this.pnxfh303.cf_cusi)) {
			alert( this.pnxfh303.bjctvals() )
			smnxform.vpnxfh303.value = "";
			this.smnxform.vpnxfh303.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkpsxgg083(form) {
	nptStr = Number(smnxform.vpsxgg083.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.psxgg083.name + msgN);
			smnxform.vpsxgg083.value = "";
			smnxform.vpsxgg083.focus();
	}
	else if (smnxform.vpsxgg083nts.options[0].selected) {
			if (nptStr < Number(psxgg083.limcu_lw) || nptStr > Number(psxgg083.limcu_hgh)) {
			alert( this.psxgg083.bjctvals() )
			smnxform.vpsxgg083.value = "";
			this.smnxform.vpsxgg083.focus();
			return false;
			}
	}
	else if (smnxform.vpsxgg083nts.options[1].selected) {
			if (nptStr < Number(psxgg083.limcu_lw*this.psxgg083.cf_cusi) || nptStr > Number(psxgg083.limcu_hgh*this.psxgg083.cf_cusi)) {
			alert( this.psxgg083.bjctvals() )
			smnxform.vpsxgg083.value = "";
			this.smnxform.vpsxgg083.focus();
			return false;
			}
	}
	return true;
}
/////////////
function checkpsxhb265(form) {
	nptStr = Number(smnxform.vpsxhb265.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.psxhb265.name + msgN);
			smnxform.vpsxhb265.value = "";
			smnxform.vpsxhb265.focus();
	}
	else if (smnxform.vpsxhb265nts.options[0].selected) {
			if (nptStr < Number(psxhb265.limcu_lw) || nptStr > Number(psxhb265.limcu_hgh)) {
			alert( this.psxhb265.bjctvals() )
			smnxform.vpsxhb265.value = "";
			this.smnxform.vpsxhb265.focus();
			return false;
			}
	}
	else if (smnxform.vpsxhb265nts.options[1].selected) {
			if (nptStr < Number(psxhb265.limcu_lw*this.psxhb265.cf_cusi) || nptStr > Number(psxhb265.limcu_hgh*this.psxhb265.cf_cusi)) {
			alert( this.psxhb265.bjctvals() )
			smnxform.vpsxhb265.value = "";
			this.smnxform.vpsxhb265.focus();
			return false;
			}
	}
	return true;
}

/////////////
function checkpbxlc621(form) {
	nptStr = Number(smnxform.vpbxlc621.value);
	if ( (isNaN(nptStr)) ){
	    	alert(msgPN + this.pbxlc621.name + msgN);
			smnxform.vpbxlc621.value = "";
			smnxform.vpbxlc621.focus();
	}
	else if (smnxform.vpbxlc621nts.options[0].selected) {
			if (nptStr < Number(pbxlc621.limcu_lw) || nptStr > Number(pbxlc621.limcu_hgh)) {
			alert( this.pbxlc621.bjctvals() )
			smnxform.vpbxlc621.value = "";
			this.smnxform.vpbxlc621.focus();
			return false;
			}
	}
	else if (smnxform.vpbxlc621nts.options[1].selected) {
			if (nptStr < Number(pbxlc621.limcu_lw*this.pbxlc621.cf_cusi) || nptStr > Number(pbxlc621.limcu_hgh*this.pbxlc621.cf_cusi)) {
			alert( this.pbxlc621.bjctvals() )
			smnxform.vpbxlc621.value = "";
			this.smnxform.vpbxlc621.focus();
			return false;
			}
	}
	return true;
}

////////////////////////////////////////////////////////////////////////
///////////// to apeace the compiler
function checkphxgd125(form) {
	return true;
}
function checkphxgf086(form) {
	return true;
}

////////////////////////////////////////////////////
var vaddtimgpbhdb125 = "*Friedewald Equation."
var vaddtimgpbhdd232 = vaddimgfn;
var vaddtimgpbhdh366 = msgS;
var vaddtimgpbhgr049 = msgS;
var vaddtimgpbhhr154 = msgS;

var vaddtimgpndfb115 = "Units adjust dividing cm by 100 (to obtain meters)."
var vaddtimgpndhb225 = "The equation takes Wt in kg and Ht in m. <br> Also: BMI = (weight, lb * 704) / (height, in)^2 ";
var vaddtimgprdpb394 = "*PB = 760 mmHg at sea level. PH2O = 47 mmHg (average)."
var vaddtimgpndhg016 = "";
var vaddtimgpndmb015 = "";

var vaddtimgpsdgb014 = "*Cockcroft Equation. <br>(Female value= multiply result by 0.85).";
var vaddtimgpsdgk197 = "*Cockcroft Equation. <br>Female value= GFR input is multiplied by 1.1765 ";
var vaddtimgpsdgp182 = "*MDRD Equation (4 inputs, simplified), also Levey equation. <br> GNF = gender factor (Male = 1.0; Female = 0.742).<br> ETF = ethnicity factor (White, non-black = 1.0; Black race = 1.212).";   
var vaddtimgpsdgq277 = "*MDRD Equation (6 inputs), also Levey equation. <br> GNF = gender factor (Male = 1.0; Female = 0.762).<br> ETF = ethnicity factor (White, non-black = 1.0; Black race = 1.18).";   
var vaddtimgpsdqr016 = "";

var vaddtimgpshdb101 = "FENa+ > 1% (> 0.01 fraction) indicates renal causes.<br>FENa+ < 1% (< 0.01 fraction) indicates prerenal causes.<br>(used to differentiate between renal and prerenal ARF).";




////open so that it draws in ccalx
var vaddtimgphqhj880 = " ";
var vaddtimgphqhb550 = " ";
var vaddtimgphqhf660 = " ";


var	psdgq277_ref = "Levey AS, Bosch JP, Lewis JB, Greene T, Rogers N and Roth D.<br>";
psdgq277_ref += "A more accurate method to estimate glomerular filtration rate from serum creatinine: a new prediction equation. Modification of Diet in Renal Disease Study Group.<br>";
psdgq277_ref +=	nlmpmlink+"10075613"+nlmpmlink2+" Ann Intern Med 1999 Mar 16; 130 (6): 461-70</a> <br>[PMID: 10075613]<br><br>";

var	psdqr016_ref = "Levey AS, Coresh J, Balk E, Kausz AT, Levin A, Steffes MW, Hogg RJ, Perrone RD, Lau J, Eknoyan G;<br>";
psdqr016_ref += "National Kidney Foundation practice guidelines for chronic kidney disease: evaluation, classification, and stratification.<br>";
psdqr016_ref += nlmpmlink+"12859163"+nlmpmlink2+" Ann Intern Med. 2003 Jul 15;139(2):137-47</a> <br>[PMID: 12859163]<br><br>";

///////////////
var prdgg001_ref = "Mellemgaard, K. The alveolar-arterial oxygen difference. Size and components in normal man.<br>";
prdgg001_ref += "Acta Physiol Scand 1966; 67:10.<br><br>"; 
prdgg001_ref += "Kanber, GJ, King, FW, Eshchar, YR, Sharp, JT. The alveolar-arterial oxygen gradient in young and ";
prdgg001_ref += "elderly men during air and oxygen breathing. <br>Am Rev Respir Dis 1968; 97:376. <br><br>";









//////////////////////////////////////////////////////////////////////////////////////////////////// Common FX
//////////////////////////////////////////////////////////////////////////////////////////////////// Common FX
//////////////////////////////////////////////////////////////////////////////////////////////////// Common FX
var smTab11T = " <table width=100% border=0 valign=top align=left cellspacing=1 cellpadding=3><tr><td>";
var smTab11Blk = " <table width=100% border=0 valign=top align=left cellspacing=1 cellpadding=2 bgcolor=#000000>";
var vsmMDCNT_wrprS = smTab1 + "<tr valign=top><td width=1%></td><td width=98%><hr>";
var vsmMDCNT_wrprE = "</td><td width=1%></td></tr></table><br><br>";

var TR_TD25 = "</td><td width=25% align=left><font class=h13pps><b>&#160; "


/////Master Structure//////////////two cols///////////////////txt outside if no references, otherwise inside
////////////Metabolic Sx////CKD  
var TR_TDF650 = " <tr align=left bgcolor=#F6F6F6><td width=50%><font class=h13pps><b>&#160;";
var TR_TDE650 = " <tr align=left bgcolor=#E6E6E6><td width=50%><font class=h13pps><b>&#160;";
var TD_TD50 = " </td><td width=50% align=left><font class=h13pps><b>&#160; ";
var TR_TDbluCOL2 = "<tr align=left valign=top bgcolor=#99b3CC><td colspan=2><font class=h14ppe><b>&#160;"
var TR_TDbgrCOL2 = "<tr align=left valign=top bgcolor=#d3d9df><td colspan=2><font class=h13pps><b>&#160;"

var TR_TDF685 = " <tr align=left bgcolor=#F6F6F6><td width=85%><font class=h13pps><b>&#160;";
var TR_TDE685 = " <tr align=left bgcolor=#E6E6E6><td width=85%><font class=h13pps><b>&#160;";
var TD_TD15 = " </td><td width=15% align=left><font class=h13pps><b>&#160; ";

var TRTDF650 = " align=left bgcolor=#F6F6F6><td width=50%><font class=h13pps><b>&#160;";
var TRTDE650 = " align=left bgcolor=#E6E6E6><td width=50%><font class=h13pps><b>&#160;";

var TRTDF660 = " align=left bgcolor=#F6F6F6><td width=50%><font class=h13pps><b>&#160;";
var TRTDE660 = " align=left bgcolor=#E6E6E6><td width=50%><font class=h13pps><b>&#160;";
var TD_TD40 = " </td><td width=40% align=left><font class=h13pps><b>&#160; ";


var TRTDF640 = " align=left bgcolor=#F6F6F6><td width=40%><font class=h13pps><b>&#160;";
var TRTDE640 = " align=left bgcolor=#E6E6E6><td width=40%><font class=h13pps><b>&#160;";
var TD_TD20 = " </td><td width=20% align=left><font class=h13pps><b>&#160; ";


//////////////////////////////////////////////////////////////////////////////////////////////////// Common FX

/////BMI Class//////////////////////////////////////////////////////////////////////////////////////  
var smTab01BlkX = "<table width=100% border=0 valign=top align=center cellspacing=0 cellpadding=0 bgcolor=#000000 hspace=0 vspace=0>";	
var smTab01Blk = "<table width=100% border=0 valign=top align=center cellspacing=0 cellpadding=1 bgcolor=#000000 hspace=0 vspace=0>";	
var smTab01LG = " <table width=100% border=0 valign=top align=center cellspacing=0 cellpadding=1 bgcolor=#d3d9df hspace=0 vspace=0>";										
var tr_LghtBl = "<tr align=left valign=top  bgcolor=#99b3CC><td height=2 colspan=7></td></tr>";
var tr_CCC67 = "<tr align=left valign=top  bgcolor=#CCCFCE><td height=6 colspan=7></td></tr>";										

///////////////////// 
var smnxpn10_ref = this.sm_rf.blt+" <b>Obesity Education Initiative (NHLBI), Guidelines</b><br>";
smnxpn10_ref += "  Clinical Guidelines on the Identification, Evaluation, and Treatment of Overweight and Obesity in Adults.  Executive Summary.<br>"; 
smnxpn10_ref += "NHLBI Obesity Education Initiative<br>National Institutes of Health<br>National Heart, Lung, and Blood Institute <br>";
smnxpn10_ref += "<a href=http://www.nhlbi.nih.gov/files/docs/guidelines/prctgd_c.pdf target=_blank>PDF format</a> (NHLBI website)";


function smMDCNT_pndhg016(){
document.write("<div id=pndhg016_Tdiv>"+smTab01Blk + "<tr><td>" + smTab01LG + tr_LghtBl);									
document.write("<tr align=left valign=top  bgcolor=#99b3CC><td width=1%></td><td colspan=5><font class=h14ppe><b>"+ sm_nutrs.blt +" "+this.pndhg016.name+" "+varby+" "+pndhb225.name_a.toUpperCase()+"</b></font></td><td width=1%></td></tr>");
document.write(tr_LghtBl + tr_CCC67	);									
document.write("<tr align=left valign=top><td width=1%></td><td width=34%></td><td width=1%></td><td width=30% align=center><font class=h14pp><b><font color=#003366>" + vObesity + " " + vClass + "</td><td width=1%></td><td width=32% align=center><font class=h14pp><b><font color=#003366>" + pndhb225.name_a + " (kg/m<sup>2</sup>)</td><td width=1%></td></tr>");		
document.write(tr_CCC67);
document.write("<tr id=pndhg0_R0 align=left bgcolor=#F6F6F6><td width=1%></td><td width=34%><font class=h13pps><b>&#160;" + vUnderweight +"</td><td width=1%></td><td width=30% align=center><font class=t8bb></td><td width=1%></td><td width=32% align=center><font class=h13pps><b> <18.5 </td><td width=1%></td></tr>");
document.write("<tr id=pndhg0_R1 align=left bgcolor=#E6E6E6><td width=1%></td><td width=34%><font class=h13pps><b>&#160;" + vNormal +     "</td><td width=1%></td><td width=30% align=center><font class=t8bb></td><td width=1%></td><td width=32% align=center><font class=h13pps><b>	18.5 - 24.9	</td><td width=1%></td></tr>");
document.write("<tr id=pndhg0_R2 align=left bgcolor=#F6F6F6><td width=1%></td><td width=34%><font class=h13pps><b>&#160;" + vOverweight + "</td><td width=1%></td><td width=30% align=center><font class=t8bb></td><td width=1%></td><td width=32% align=center><font class=h13pps><b>25.0 - 29.9</td><td width=1%></td></tr>");	
document.write("<tr id=pndhg0_R3 align=left bgcolor=#E6E6E6><td width=1%></td><td width=34%><font class=h13pps><b>&#160;" + vObesity + "</td><td width=1%></td><td width=30% align=center><font class=h13ppb><b> I </td><td width=1%></td><td width=32% align=center><font class=h13pps><b> 30.0 - 34.9</td><td width=1%></td></tr>");
document.write("<tr id=pndhg0_R4 align=left bgcolor=#F6F6F6><td width=1%></td><td width=34%><font class=h13pps><b>&#160;                </td><td width=1%></td><td width=30% align=center><font class=h13ppb><b> II </td><td width=1%></td><td width=32% align=center><font class=h13pps><b> 35.0 - 39.9</td><td width=1%></td></tr>	");
document.write("<tr id=pndhg0_R5 align=left bgcolor=#E6E6E6><td width=1%></td><td width=34%><font class=h13pps><b>&#160;" + vExtremeOb +"</td><td width=1%></td><td width=30% align=center><font class=h13ppb><b> III </td><td width=1%></td><td width=32% align=center><font class=h13pps><b>" +sm_blt_gtoet_i.blt +" 40 </td><td width=1%></td></tr>");

document.write("<tr align=left valign=top><td height=4 colspan=7></td></tr></table>	</td></tr></table>");										
document.write(smTab11Blk );
document.write("<tr align=left bgcolor=#FFFFFF><td colspan=2><font class=h9b>" +smnxpn10_ref+"  </font>" +sm_scymdsR.blt+"</td></tr></table> </div>"); 
}
function smMDCNT_pndhb225(){
document.write("<div id=pndhb225_Tdiv>");
smMDCNT_pndhg016();
document.write("</div>");
}




/////CKD/////////////////////////////////////////////////////////////////////////////////////////////  
var vsmMDCNT_psdqr016fn = "*CKD is defined as either kidney damage or GFR <60 mL/min/m2 for 3 months. <br> Kidney damage is defined as pathologic ";
vsmMDCNT_psdqr016fn += "abnormalities or markers of damage, including abnormalities in blood or urine tests or imaging studies. <br>";
vsmMDCNT_psdqr016fn += "SOURCE: <A HREF=../smrefs/mc/psdqr016_ref2.htm target=_blank> K/DOQI Guidelines for CKD </a></font>"; 
///////////////////// 
function smMDCNT_psdqr016(){
document.write("<div id=psdqr016_Tdiv>"+smTab01Blk + "<tr><td>" + smTab01LG + tr_LghtBl);									
document.write("<tr align=left valign=top  bgcolor=#99b3CC><td colspan=7><font class=h14ppe><b>&#160;"+ sm_nephs.blt +" "+this.psdqr016.name+"<br>&#160;&#160; ("+this.psdqr016.name_sp+")</b></font></td></tr>");
document.write(tr_LghtBl + tr_CCC67	);									
document.write("<tr align=left valign=top><td width=50%><font class=h14pp><b><font color=#003366>&#160;&#160;" + vStage + "</td><td width=45% align=left><font class=h14pp><b><font color=#003366>" + vGFR + "</b><font class=h13pps><b><font color=#003366> (mL/min/1.73m<sup>2</sup>)</td><td colspan=5></td></tr>");		
document.write(tr_CCC67 + "</table></td></tr></table>");

document.write(smTab11Blk );
document.write("<tr id=psdqr0_R0" +TRTDF650 + sm_rfs.blt +" 1 (" + vnormal_a +" " +vor_var+" " + sm_arr_up_i.blt + vGFR + ")"+TD_TD50+" "+sm_blt_gtoet_i.blt +"90 </td></tr>");
document.write("<tr id=psdqr0_R1" +TRTDE650 + sm_rfs.blt +" 2 (" + vmild +" " + sm_arr_dwn_i.blt + vGFR + ")"				+TD_TD50+" 60 - 89 </td></tr>");
document.write("<tr id=psdqr0_R2" +TRTDF650 + sm_rfs.blt +" 3 (" + vmoderate +"  " + sm_arr_dwn_i.blt + vGFR + ")"			+TD_TD50+" 30 - 59 </td></tr>");
document.write("<tr id=psdqr0_R3" +TRTDE650 + sm_rfs.blt +" 4 (" + vsevere +" " + sm_arr_dwn_i.blt + vGFR + ")"				+TD_TD50+" 15 - 29 </td></tr>");
document.write("<tr id=psdqr0_R4" +TRTDF650 + sm_rfs.blt +" 5 (" + vkidneyfailure+ ")"										+TD_TD50+" <15 "+Vordialysis+ " </td></tr>");
document.write("</table> " );
document.write(smTab11Blk );
document.write("<tr align=left bgcolor=#FFFFFF><td><font class=h9b>" +vsmMDCNT_psdqr016fn+"  </font>" +sm_scymdsR.blt+"</td></tr></table> </div>"); 
}
function smMDCNT_psdgq277(){
document.write("<div id=psdgq277_Tdiv>");
smMDCNT_psdqr016();
document.write("</div>");
}


/////CKD//NEW CLASS///////////////////////////////////////////////////////////////////////////////////////////  
var vsmMDCNT_psdqs016fn = "*CKD is defined as either kidney damage or GFR <60 mL/min/m2 for 3 months. <br> Kidney damage is defined as pathologic "; 
vsmMDCNT_psdqs016fn += "abnormalities or markers of damage, including abnormalities in blood or urine tests or imaging studies. <br>";
vsmMDCNT_psdqs016fn += "CKD = Chronic Kidney Disease. GFR = Glomerular Filtration Rate. <br> SOURCE: ";
vsmMDCNT_psdqs016fn += "<A HREF=http://www.kdigo.org/clinical_practice_guidelines/pdf/CKD/KDIGO_2012_CKD_GL.pdf target=_blank> KDIGO Guidelines for CKD 2012</a></font>"; 
///////////////////// 

function smMDCNT_psdqs016(){
/////document.write(smTab01BlkX + "<tr><td>");									
document.write("<div id=psdqs016_Tdiv>"+smTab01Blk + "<tr><td>" + smTab01LG + tr_LghtBl);									
document.write("<tr align=left valign=top  bgcolor=#99b3CC><td colspan=7><font class=h14ppe><b>&#160;"+ sm_nephs.blt +" "+this.psdqs016.name+"<br>&#160;&#160; ("+this.psdqs016.name_sp+")</b></font></td></tr>");
document.write(tr_LghtBl + tr_CCC67	);									
document.write("<tr align=left valign=top><td width=55%><font class=h14pp><b><font color=#003366>&#160;&#160;" + vStage + "</td><td width=40% align=left><font class=h14pp><b><font color=#003366>" + vGFR + "</b><font class=h13pps><b><font color=#003366> (mL/min/1.73m<sup>2</sup>)</td><td colspan=5></td></tr>");		
document.write(tr_CCC67 + "</table></td></tr></table>");
document.write(smTab11Blk );
document.write("<tr id=psdqs0_R0" +TRTDF660 + sm_rfs.blt +" G1 (" + vnormal_a +" " +vor_var+" " + sm_arr_up_i.blt + vGFR + ")"+TD_TD40+" "+sm_blt_gtoet_i.blt +"90 </td></tr>");
document.write("<tr id=psdqs0_R1" +TRTDE660 + sm_rfs.blt +" G2 (" + vmild +" " + sm_arr_dwn_i.blt + vGFR + ")"				+TD_TD40+" 60 - 89 </td></tr>");
document.write("<tr id=psdqs0_R2" +TRTDF660 + sm_rfs.blt +" G3a (" +vmild2mod+"  " + sm_arr_dwn_i.blt + vGFR + ")"			+TD_TD40+" 45 - 59 </td></tr>");
document.write("<tr id=psdqs0_R3" +TRTDE660 + sm_rfs.blt +" G3b (" +vmod2sev+"  " + sm_arr_dwn_i.blt + vGFR + ")"			+TD_TD40+" 30 - 44 </td></tr>");
document.write("<tr id=psdqs0_R4" +TRTDF660 + sm_rfs.blt +" G4 (" + vsevere +" " + sm_arr_dwn_i.blt + vGFR + ")"				+TD_TD40+" 15 - 29 </td></tr>");
document.write("<tr id=psdqs0_R5" +TRTDE660 + sm_rfs.blt +" G5 (" + vkidneyfailure+ ")"										+TD_TD40+" <15 "+Vordialysis+ " </td></tr>");
document.write("</table> " );
document.write(smTab11Blk );
document.write("<tr align=left bgcolor=#FFFFFF><td><font class=h9b>" +vsmMDCNT_psdqs016fn+"  </font>" +sm_scymdsR.blt+"</td></tr></table>  </div>"); 
/////document.write("</td></tr></table> "); 
}
function smMDCNT_psdgt313(){
document.write("<div id=psdgt313_Tdiv>");
smMDCNT_psdqs016();
document.write("</div>");
}

 //////////////////////////////
var vsmMDCNT_pnpfg016fn = "<br>*  % figures represent the percentage of Body Fat (as percentage of the total body weight). <br> <br> </font>"; 

function smMDCNT_pnpfg016(){
document.write(smTab01Blk + "<tr><td>" + smTab01LG + tr_LghtBl);									
document.write("<tr align=left valign=top  bgcolor=#99b3CC><td width=1%></td><td colspan=5><font class=h14ppe><b>"+ sm_nutrs.blt +" "+this.pnpfg016.name+"</b></font></td><td width=1%></td></tr>");
document.write(tr_LghtBl + tr_CCC67	);									
document.write("<tr align=left valign=top><td width=1%></td><td width=34%></td><td width=1%></td><td width=30% align=center><font class=h14pp><b><font color=#003366> Women</td><td width=1%></td><td width=32% align=center><font class=h14pp><b><font color=#003366> Men</td><td width=1%></td></tr>");		
document.write(tr_CCC67);
document.write("<tr id=pnpfg0_R0 align=left bgcolor=#F6F6F6><td width=1%></td><td width=34%><font class=h13ppb><b>Essential Fat</td><td width=1%></td><td width=30% align=center><font class=h13pps><b> < 14%</td><td width=1%>  </td><td width=32% align=center><font class=h13pps><b> < 6% </td><td width=1%></td></tr>");
document.write("<tr id=pnpfg0_R1 align=left bgcolor=#E6E6E6><td width=1%></td><td width=34%><font class=h13ppb><b>Athletes</td><td width=1%></td><td width=30% align=center><font class=h13pps><b> 14% – 20%</td><td width=1%></td><td width=32% align=center><font class=h13pps><b>	6% – 13%	</td><td width=1%></td></tr>");
document.write("<tr id=pnpfg0_R2 align=left bgcolor=#F6F6F6><td width=1%></td><td width=34%><font class=h13ppb><b>Fitness</td><td width=1%></td><td width=30% align=center><font class=h13pps><b> 21% – 24%</td><td width=1%> </td><td width=32% align=center><font class=h13pps><b> 14% – 17%</td><td width=1%></td></tr>");	
document.write("<tr id=pnpfg0_R3 align=left bgcolor=#E6E6E6><td width=1%></td><td width=34%><font class=h13ppb><b>Acceptable</td><td width=1%></td><td width=30% align=center><font class=h13pps><b> 25% – 31% </td><td width=1%></td><td width=32% align=center><font class=h13pps><b> 18% – 24%</td><td width=1%></td></tr>");
document.write("<tr id=pnpfg0_R4 align=left bgcolor=#F6F6F6><td width=1%></td><td width=34%><font class=h13ppb><b>Obesity</td><td width=1%></td><td width=30% align=center><font class=h13pps><b> " +sm_blt_gtoet_i.blt +" 32%   </td><td width=1%></td><td width=32% align=center><font class=h13pps><b>" +sm_blt_gtoet_i.blt +" 25% </td><td width=1%></td></tr>");

document.write("<tr align=left valign=top><td height=4 colspan=7></td></tr></table>	</td></tr></table>");										
document.write(smTab11Blk );
document.write("<tr align=left bgcolor=#FFFFFF><td><font class=h9b>" +vsmMDCNT_pnpfg016fn+"  </font>" +sm_scymdsR.blt+"</td></tr></table> "); 
}	

var TR_TDF640 = " <tr align=left bgcolor=#F6F6F6><td width=40%><font class=h13pps><b>&#160;";
var TR_TDE640 = " <tr align=left bgcolor=#e6e6e6><td width=40%><font class=h13pps><b>&#160;";
var TD_TD20 = " </td><td width=20% align=left><font class=h13pps><b>&#160; ";





