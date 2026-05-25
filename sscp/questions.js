window.QUESTIONS = [
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which three properties make up the classic CIA triad of information security?",
    "options": [
      "Confidentiality, Integrity, Availability",
      "Control, Identity, Authority",
      "Confidentiality, Identity, Auditing",
      "Capability, Integrity, Authorization"
    ],
    "answer": 0,
    "explanation": "The CIA triad — Confidentiality, Integrity, and Availability — is the foundational model used to evaluate security objectives."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which of the following is a violation of the ISC2 Code of Ethics?",
    "options": [
      "Protecting society and the common good",
      "Acting honorably, honestly, and lawfully",
      "Disclosing client vulnerabilities publicly without authorization",
      "Advancing and protecting the profession"
    ],
    "answer": 2,
    "explanation": "ISC2 members must protect society, act honorably, provide diligent service to principals, and advance the profession. Publicly disclosing a client's vulnerabilities without authorization violates obligations to principals."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which document type provides a high-level statement of management intent and direction for security?",
    "options": [
      "Standard",
      "Procedure",
      "Policy",
      "Guideline"
    ],
    "answer": 2,
    "explanation": "A policy is the highest-level governance document describing management's intent and direction. Standards, procedures, and guidelines support and implement policies."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which type of document is a step-by-step instruction for performing a specific task?",
    "options": [
      "Policy",
      "Standard",
      "Procedure",
      "Baseline"
    ],
    "answer": 2,
    "explanation": "Procedures are detailed, step-by-step instructions. Policies are intent, standards are mandatory rules, baselines define minimum configurations."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which document type is recommended but not mandatory?",
    "options": [
      "Policy",
      "Standard",
      "Procedure",
      "Guideline"
    ],
    "answer": 3,
    "explanation": "Guidelines are recommended best practices and are advisory, not mandatory. Policies and standards are mandatory."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which principle states that a user should be granted the minimum access necessary to perform their job?",
    "options": [
      "Need to know",
      "Separation of duties",
      "Least privilege",
      "Defense in depth"
    ],
    "answer": 2,
    "explanation": "Least privilege restricts access rights to the minimum required for the job. Need to know is a related concept that restricts access to specific information based on requirement."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which control divides a critical task between two or more people so no single person can complete it alone?",
    "options": [
      "Least privilege",
      "Separation of duties",
      "Mandatory vacation",
      "Background check"
    ],
    "answer": 1,
    "explanation": "Separation of duties (SoD) splits critical tasks so collusion would be required to perform them maliciously, reducing fraud risk."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which administrative control requires that two people simultaneously authorize a particularly sensitive action?",
    "options": [
      "Job rotation",
      "Dual control (two-person integrity)",
      "Mandatory vacation",
      "Least privilege"
    ],
    "answer": 1,
    "explanation": "Dual control (or two-person integrity) requires two individuals together to perform a sensitive action, like activating a master key."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Why is mandatory vacation a recommended administrative control?",
    "options": [
      "It improves employee morale",
      "Detects fraud when another employee covers",
      "It reduces salaries",
      "It prevents burnout only"
    ],
    "answer": 1,
    "explanation": "Mandatory vacation forces another person to perform the duties, increasing the chance that ongoing fraud or misconduct will be detected."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "What is the PRIMARY purpose of job rotation as a security control?",
    "options": [
      "Cross-training",
      "Detects fraud and reduces single-person dependence",
      "Boosting productivity",
      "Speeding up promotions"
    ],
    "answer": 1,
    "explanation": "Job rotation helps detect fraud (a different person sees the work) and reduces single points of human dependence; cross-training is a secondary benefit."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the PRIMARY purpose of security awareness training?",
    "options": [
      "Comply with marketing requirements",
      "Change user behavior toward recognizing threats",
      "Replace technical controls",
      "Document policies"
    ],
    "answer": 1,
    "explanation": "Security awareness training aims to change behavior so users can recognize threats (phishing, social engineering) and follow secure practices."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which of the following BEST distinguishes 'training' from 'awareness'?",
    "options": [
      "Training builds skills; awareness builds recognition",
      "Training is online only; awareness is in person",
      "They are identical",
      "Awareness is required quarterly; training annually"
    ],
    "answer": 0,
    "explanation": "Awareness changes attitudes and recognition; training builds specific skills (e.g., how to handle PII). Education is the deepest, role-based level."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which document is signed by an employee to formally acknowledge their understanding of acceptable use of organizational systems?",
    "options": [
      "Non-disclosure agreement (NDA)",
      "Acceptable Use Policy (AUP)",
      "Service Level Agreement (SLA)",
      "Memorandum of Understanding (MOU)"
    ],
    "answer": 1,
    "explanation": "An AUP defines acceptable use of organizational systems and is typically acknowledged by users. NDAs cover confidentiality of information."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the BEST description of asset classification?",
    "options": [
      "Labeling data by value to drive handling rules",
      "Storing assets in physical drawers",
      "Encrypting all assets equally",
      "Listing assets in a CMDB"
    ],
    "answer": 0,
    "explanation": "Classification assigns sensitivity labels so the right protection level can be applied. Inventory and labeling support classification."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the PRIMARY role of a data owner?",
    "options": [
      "Manage backups",
      "Sets classification and approves access",
      "Apply patches",
      "Configure firewalls"
    ],
    "answer": 1,
    "explanation": "Data owners are responsible for the classification, value, and access decisions for data. Custodians implement the controls."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which role is responsible for the day-to-day maintenance, backups, and integrity of data on behalf of the data owner?",
    "options": [
      "Data owner",
      "Data custodian",
      "Data user",
      "Data subject"
    ],
    "answer": 1,
    "explanation": "Data custodians (typically IT staff) implement and maintain the technical controls (backups, storage, restoration, access enforcement) for the owner's data."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which of the following is the PRIMARY goal of a change management process?",
    "options": [
      "Increase paperwork",
      "Reviews, tests, and approves changes to reduce risk",
      "Make changes faster without oversight",
      "Replace configuration management"
    ],
    "answer": 1,
    "explanation": "Change management controls how changes are introduced (review, test, approve, document, communicate, monitor) to reduce risk and disruption."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the BEST description of configuration management?",
    "options": [
      "Securely disposing of media",
      "Tracks and controls component state over time",
      "Patching the OS",
      "Encrypting backups"
    ],
    "answer": 1,
    "explanation": "Configuration management establishes baselines, identifies configuration items, tracks changes, and audits compliance to maintain known-good state."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is BEST described as a minimum security configuration that all similar systems must meet?",
    "options": [
      "Guideline",
      "Baseline",
      "Procedure",
      "Standard"
    ],
    "answer": 1,
    "explanation": "A baseline is a defined minimum configuration applied consistently across systems of the same type (e.g., hardened Windows server build)."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which type of physical control prevents tailgating into a secured area by allowing only one authenticated person to enter at a time?",
    "options": [
      "Bollard",
      "Mantrap (interlocking door)",
      "Turnstile",
      "Security camera"
    ],
    "answer": 1,
    "explanation": "A mantrap is an interlocking double-door system designed to force one authenticated person at a time and thwart tailgating."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is a PRIMARY purpose of a security awareness program for new hires?",
    "options": [
      "Reduce training budget",
      "Establish policies and reporting from day one",
      "Replace background checks",
      "Reduce headcount"
    ],
    "answer": 1,
    "explanation": "Onboarding awareness ensures new staff understand policies, responsibilities, expected behaviors, and how to report concerns."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which background check element is MOST commonly performed for new hires?",
    "options": [
      "Sealed juvenile records",
      "Identity and criminal history checks per role",
      "DNA testing",
      "Polygraph for all roles"
    ],
    "answer": 1,
    "explanation": "Background checks typically cover identity, employment history, education, and criminal history scaled to the sensitivity of the role and applicable laws."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which control BEST mitigates the risk of orphaned accounts after employees leave?",
    "options": [
      "Long passwords",
      "Automated de-provisioning tied to HR offboarding",
      "Annual password rotation",
      "Security cameras at workstations"
    ],
    "answer": 1,
    "explanation": "Tying de-provisioning to HR offboarding and promptly disabling accounts is the most effective way to prevent orphaned accounts."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the BEST type of physical control to detect after-hours intrusion in a server room?",
    "options": [
      "Fence",
      "Motion alarms with CCTV recording",
      "Sign on door",
      "Locked drawer"
    ],
    "answer": 1,
    "explanation": "Motion alarms and CCTV provide detection (and evidence) of intrusion. Fences and locks are preventive controls."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the MOST appropriate fire suppression for a data center?",
    "options": [
      "Water sprinklers everywhere",
      "Clean-agent gaseous suppression (e.g., FM-200)",
      "Foam",
      "Sand buckets"
    ],
    "answer": 1,
    "explanation": "Clean-agent gaseous systems suppress fires without damaging electronics. Wet-pipe sprinklers can be used in non-equipment areas; pre-action systems are common as a backup."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the BEST description of a 'control objective'?",
    "options": [
      "A specific configuration setting",
      "A statement of what a control should achieve",
      "A SLA metric",
      "A vendor SKU"
    ],
    "answer": 1,
    "explanation": "Control objectives state what a control should accomplish (e.g., 'prevent unauthorized access to production'). Implementations vary."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which of the following BEST describes 'defense in depth'?",
    "options": [
      "Implementing a single strong control",
      "Layered controls so one failure doesn't compromise",
      "Encrypting all traffic",
      "Hiding the architecture"
    ],
    "answer": 1,
    "explanation": "Defense in depth applies multiple complementary layers of controls (technical, administrative, physical) so a single failure does not lead to compromise."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which control category includes policies, procedures, training, and background checks?",
    "options": [
      "Technical (logical)",
      "Physical",
      "Administrative",
      "Compensating"
    ],
    "answer": 2,
    "explanation": "Administrative (managerial) controls are people- and process-oriented: policies, procedures, training, screening. Technical controls are implemented in hardware/software."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which control type is implemented in hardware or software, such as encryption or access control lists?",
    "options": [
      "Administrative",
      "Technical (logical)",
      "Physical",
      "Operational"
    ],
    "answer": 1,
    "explanation": "Technical (logical) controls are implemented via technology, including encryption, ACLs, IDS, and authentication systems."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which functional control type discourages an actor from violating policy, often via posted signs or visible cameras?",
    "options": [
      "Preventive",
      "Detective",
      "Deterrent",
      "Corrective"
    ],
    "answer": 2,
    "explanation": "Deterrent controls aim to discourage attempts (e.g., warning banners, visible cameras). Preventive stops; detective discovers; corrective restores."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which functional control type discovers an incident after it has occurred?",
    "options": [
      "Preventive",
      "Detective",
      "Compensating",
      "Corrective"
    ],
    "answer": 1,
    "explanation": "Detective controls identify and report incidents — examples include IDS, audit logs, and CCTV review."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which functional control type restores systems or processes after an incident has occurred?",
    "options": [
      "Preventive",
      "Detective",
      "Corrective",
      "Deterrent"
    ],
    "answer": 2,
    "explanation": "Corrective controls remediate damage and restore operations after an incident (e.g., backups restore, patches applied)."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the BEST description of a 'compensating control'?",
    "options": [
      "A control that adds redundancy",
      "An alternative that meets the same control intent",
      "A control that compensates the security team financially",
      "A control that has been disabled"
    ],
    "answer": 1,
    "explanation": "Compensating controls are alternatives that achieve the intent of a required control when the standard one is not feasible (often referenced in PCI DSS)."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is a fundamental purpose of records retention policies?",
    "options": [
      "Keep everything forever",
      "Define how long records are kept, then destroy",
      "Increase storage costs",
      "Replace backups"
    ],
    "answer": 1,
    "explanation": "Retention policies balance legal/regulatory requirements, business need, and risk, defining how long records are kept and when they are securely destroyed."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the MOST appropriate disposal method for a hard drive containing sensitive data being decommissioned?",
    "options": [
      "Format the drive",
      "Crypto-erasure or physical destruction (shredding)",
      "Delete files using OS delete command",
      "Reformat and donate"
    ],
    "answer": 1,
    "explanation": "Reliable destruction methods include crypto-erasure (where applicable), degaussing (for magnetic media), or physical destruction. Simple delete/format does not remove data."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the BEST description of 'data labeling'?",
    "options": [
      "Encrypting the data",
      "Marking data with classification for handling",
      "Compressing the data",
      "Hashing the data"
    ],
    "answer": 1,
    "explanation": "Data labeling attaches classification markings (e.g., 'Confidential') to data so users and systems handle it according to the appropriate rules."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the FIRST step in establishing an effective asset management program?",
    "options": [
      "Buy more storage",
      "Inventory the assets to be managed",
      "Set up logging",
      "Apply encryption"
    ],
    "answer": 1,
    "explanation": "You cannot manage or protect what you don't know exists. An accurate inventory is the foundation of asset management."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which security principle is illustrated when a system administrator cannot also be the auditor of their own work?",
    "options": [
      "Least privilege",
      "Separation of duties",
      "Need to know",
      "Defense in depth"
    ],
    "answer": 1,
    "explanation": "Separation of duties ensures the person performing an action is different from the person reviewing or auditing it, reducing the risk of fraud or undetected error."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which of the following is a key responsibility of senior management with respect to information security?",
    "options": [
      "Configuring firewalls",
      "Setting direction and accountability for the program",
      "Triaging help-desk tickets",
      "Writing detection rules"
    ],
    "answer": 1,
    "explanation": "Senior management owns the security program — setting direction, allocating resources, and accepting accountability — even though execution is delegated."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which formal agreement is signed by an employee to protect company-confidential information?",
    "options": [
      "AUP",
      "NDA",
      "SLA",
      "MOU"
    ],
    "answer": 1,
    "explanation": "A Non-Disclosure Agreement (NDA) binds the employee to confidentiality. The AUP governs use of systems. SLAs and MOUs relate to services and inter-org agreements."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which of the following terms refers to the process of confirming a claimed identity?",
    "options": [
      "Identification",
      "Authentication",
      "Authorization",
      "Accountability"
    ],
    "answer": 1,
    "explanation": "Identification is the claim (e.g., username). Authentication proves the claim (e.g., password + token). Authorization grants access; accountability ties actions to identities."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which AAA element ensures that actions can be traced back to a specific individual?",
    "options": [
      "Authentication",
      "Accountability (auditing)",
      "Authorization",
      "Availability"
    ],
    "answer": 1,
    "explanation": "Accountability is established via auditing and logging that ties actions to identified principals."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which authentication factor is BEST described as 'something you have'?",
    "options": [
      "Password",
      "PIN",
      "Smart card or hardware token",
      "Fingerprint"
    ],
    "answer": 2,
    "explanation": "Authentication factors are Knowledge (something you know), Possession (something you have — token, smart card), and Inherence (something you are — biometric)."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is an example of multi-factor authentication?",
    "options": [
      "Password and security question",
      "Password plus a one-time code from a token",
      "Two passwords",
      "Username and password"
    ],
    "answer": 1,
    "explanation": "MFA requires factors from different categories. Password + token combines knowledge and possession; two passwords are the same category."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which biometric error metric represents the rate at which the system incorrectly accepts an unauthorized person?",
    "options": [
      "False Rejection Rate (FRR / Type I)",
      "False Acceptance Rate (FAR / Type II)",
      "Crossover Error Rate (CER)",
      "Throughput rate"
    ],
    "answer": 1,
    "explanation": "FAR (Type II) is the rate of incorrect acceptances. FRR (Type I) is incorrect rejections. CER is where FAR and FRR meet and is a common comparative metric."
  },
  {
    "domain": "2: Access Controls",
    "question": "A biometric system with a lower Crossover Error Rate is generally:",
    "options": [
      "Less accurate",
      "More accurate",
      "Slower",
      "More expensive only"
    ],
    "answer": 1,
    "explanation": "A lower CER indicates that the system can be tuned to achieve a better balance between false accepts and false rejects, indicating better overall accuracy."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which authentication protocol uses tickets and a Key Distribution Center (KDC) to enable single sign-on within a realm, commonly used by Microsoft Active Directory?",
    "options": [
      "RADIUS",
      "TACACS+",
      "Kerberos",
      "LDAP"
    ],
    "answer": 2,
    "explanation": "Kerberos uses a KDC (Authentication Server + TGS) to issue tickets, enabling SSO within a realm without sending passwords across the network."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which AAA protocol is commonly used to authenticate remote network access (VPN, Wi-Fi) and uses UDP for transport?",
    "options": [
      "TACACS+",
      "RADIUS",
      "Kerberos",
      "LDAP"
    ],
    "answer": 1,
    "explanation": "RADIUS (Remote Authentication Dial-In User Service) uses UDP and is widely used for network access (Wi-Fi, VPN). TACACS+ is a Cisco protocol using TCP."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is a key difference between RADIUS and TACACS+?",
    "options": [
      "RADIUS encrypts the entire packet; TACACS+ encrypts only the password",
      "TACACS+ encrypts payload and splits AAA; RADIUS only the password",
      "They are identical",
      "RADIUS uses TCP; TACACS+ uses UDP"
    ],
    "answer": 1,
    "explanation": "TACACS+ encrypts the entire payload and separates A/A/A; RADIUS encrypts only the password and combines authentication with authorization."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which protocol is commonly used to query directory services for users and groups?",
    "options": [
      "RADIUS",
      "LDAP",
      "SMTP",
      "DNS"
    ],
    "answer": 1,
    "explanation": "LDAP is the standard protocol for querying and modifying directory services such as Active Directory and OpenLDAP."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which standard is XML-based and commonly used for federated SSO between enterprises?",
    "options": [
      "SAML 2.0",
      "OAuth 2.0",
      "RADIUS",
      "TACACS+"
    ],
    "answer": 0,
    "explanation": "SAML 2.0 exchanges signed XML assertions between an Identity Provider and Service Provider, enabling federated SSO."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which protocol is an OPEN authorization framework that allows third-party apps to access resources on a user's behalf without sharing credentials?",
    "options": [
      "LDAP",
      "OAuth 2.0",
      "Kerberos",
      "RADIUS"
    ],
    "answer": 1,
    "explanation": "OAuth 2.0 delegates authorization via tokens, allowing third-party apps limited access to a user's data without seeing their credentials."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which authentication layer is built on top of OAuth 2.0 to add identity and SSO functions?",
    "options": [
      "SAML",
      "OpenID Connect (OIDC)",
      "RADIUS",
      "Kerberos"
    ],
    "answer": 1,
    "explanation": "OpenID Connect adds an identity layer on top of OAuth 2.0, providing standardized ID tokens and user information endpoints for authentication."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which access control model assigns access based on roles such as 'accountant' or 'nurse'?",
    "options": [
      "DAC",
      "MAC",
      "RBAC",
      "ABAC"
    ],
    "answer": 2,
    "explanation": "Role-Based Access Control (RBAC) assigns permissions to roles, and users gain permissions through role assignment. Simplifies administration."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which access control model uses system-enforced labels (such as Secret or Top Secret) and is common in government and military environments?",
    "options": [
      "DAC",
      "MAC",
      "RBAC",
      "ABAC"
    ],
    "answer": 1,
    "explanation": "Mandatory Access Control (MAC) uses labels assigned by the system based on policy. Subjects' clearances are compared to object labels, and users cannot override."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which access control model allows the owner of a resource to grant access at their discretion?",
    "options": [
      "DAC",
      "MAC",
      "RBAC",
      "ABAC"
    ],
    "answer": 0,
    "explanation": "Discretionary Access Control (DAC) places access decisions in the hands of the resource owner (e.g., NTFS file permissions in Windows)."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which access control model uses attributes (of subjects, resources, actions, environment) evaluated by policies for fine-grained decisions?",
    "options": [
      "DAC",
      "MAC",
      "RBAC",
      "ABAC"
    ],
    "answer": 3,
    "explanation": "Attribute-Based Access Control (ABAC) evaluates many attributes via policy rules (e.g., 'user.dept = HR AND time IS business_hours')."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which access control model uses sets of rules (often if-then statements) applied uniformly, such as 'no external IPs may access admin pages'?",
    "options": [
      "RuBAC",
      "DAC",
      "MAC",
      "RBAC"
    ],
    "answer": 0,
    "explanation": "Rule-Based Access Control applies global rules (often configured in firewalls or access lists) that are not user-specific."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the MOST significant disadvantage of using passwords as the sole authentication factor?",
    "options": [
      "They are too long",
      "Susceptible to guessing, phishing, and reuse",
      "Inability to be encrypted",
      "They cannot be revoked"
    ],
    "answer": 1,
    "explanation": "Passwords have well-known weaknesses: guessing, reuse across services, phishing, and credential stuffing. MFA mitigates many of these."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the BEST practice for storing user passwords?",
    "options": [
      "Plaintext",
      "Hashed with a fast hash like MD5",
      "Hashed with a salted slow algorithm like bcrypt",
      "Encrypted with a single global key"
    ],
    "answer": 2,
    "explanation": "Modern best practice uses purpose-built, salted, slow hashing algorithms (bcrypt, scrypt, Argon2, PBKDF2) to resist offline brute force."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the BEST way to handle service accounts used by applications?",
    "options": [
      "Use a regular user's credentials",
      "Use dedicated, least-privileged, vaulted accounts",
      "Share credentials between teams via email",
      "Embed credentials in source code"
    ],
    "answer": 1,
    "explanation": "Service accounts should be unique, least-privileged, non-interactive, and have credentials managed in a vault with rotation."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the BEST description of identity federation?",
    "options": [
      "A central directory handles authentication",
      "Cross-domain trust enabling SSO between organizations",
      "Identity is determined by IP address",
      "Requires on-premises Active Directory"
    ],
    "answer": 1,
    "explanation": "Federation establishes trust between identity domains, enabling SSO and cross-organization access without duplicating credentials."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the PRIMARY purpose of an access review (recertification)?",
    "options": [
      "Confirm access still matches current role",
      "Issue new passwords",
      "Replace MFA",
      "Increase access by default"
    ],
    "answer": 0,
    "explanation": "Periodic access reviews catch accumulated privileges (privilege creep) by re-validating that each user's access is still appropriate."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the BEST description of Privileged Access Management (PAM)?",
    "options": [
      "A spam filter",
      "Vaults, rotates, and brokers privileged credentials",
      "A web application firewall",
      "A SIEM"
    ],
    "answer": 1,
    "explanation": "PAM solutions vault privileged credentials, rotate them, broker access (often with session recording), and require approvals for sensitive actions."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the BEST control to prevent attackers from brute-forcing passwords against an online login portal?",
    "options": [
      "Increase TLS cipher strength",
      "Enforce account lockout, throttling, and MFA",
      "Require longer URLs",
      "Disable HTTPS"
    ],
    "answer": 1,
    "explanation": "Lockout, throttling, and MFA collectively make online brute force impractical. Hash-strengthening protects offline attacks but not online ones."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the PRIMARY purpose of an account lockout policy?",
    "options": [
      "Slow down legitimate users",
      "Mitigate online password guessing attacks",
      "Reduce login speed during peak hours",
      "Enable SSO"
    ],
    "answer": 1,
    "explanation": "Account lockout limits how many failed attempts can be made before access is locked, defeating sustained online guessing."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which of the following BEST describes a Single Sign-On (SSO) deployment?",
    "options": [
      "Each app has its own account",
      "Authenticate once for access to multiple apps",
      "Passwords must be reused across apps",
      "MFA is bypassed"
    ],
    "answer": 1,
    "explanation": "SSO authenticates the user once at an identity provider, then issues assertions/tokens to multiple service providers. MFA still applies."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the GREATEST security risk introduced by SSO?",
    "options": [
      "Better user experience",
      "One compromised credential exposes many systems",
      "Higher infrastructure cost",
      "Bigger logs"
    ],
    "answer": 1,
    "explanation": "SSO concentrates risk: compromise of one credential or session can yield access to all federated apps, so SSO is best paired with strong MFA and conditional access."
  },
  {
    "domain": "2: Access Controls",
    "question": "What is the BEST description of 'just-in-time' (JIT) access?",
    "options": [
      "Permanent admin access for selected staff",
      "Temporary, time-bound privileges granted on demand",
      "A new authentication factor",
      "A type of MFA"
    ],
    "answer": 1,
    "explanation": "JIT access grants elevated permissions only for the duration needed, reducing the risk of standing privileges."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which access control concept ensures that subjects can access only the information they need to perform their assigned tasks?",
    "options": [
      "Need to know",
      "Separation of duties",
      "Dual control",
      "Mandatory vacation"
    ],
    "answer": 0,
    "explanation": "Need-to-know is a complementary principle to least privilege, restricting access to information based on requirement rather than position."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which type of token generates a value that changes at fixed intervals, often every 30-60 seconds?",
    "options": [
      "HOTP",
      "TOTP",
      "Smart card",
      "Biometric"
    ],
    "answer": 1,
    "explanation": "Time-based One-Time Password (TOTP) tokens (RFC 6238) generate codes that change on a clock interval and are synchronized with the server."
  },
  {
    "domain": "2: Access Controls",
    "question": "What is the difference between HOTP and TOTP?",
    "options": [
      "HOTP is event-based (counter); TOTP is time-based",
      "HOTP is time-based; TOTP is event-based",
      "There is no difference",
      "HOTP uses SMS"
    ],
    "answer": 0,
    "explanation": "HOTP (HMAC-Based) is event-based using a counter. TOTP is time-based, advancing automatically with time."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is a key advantage of FIDO2/WebAuthn over SMS-based MFA?",
    "options": [
      "FIDO2 is easier to phish",
      "Public-key auth bound to origin resists phishing",
      "SMS is hardware-backed",
      "FIDO2 requires no devices"
    ],
    "answer": 1,
    "explanation": "FIDO2/WebAuthn uses asymmetric cryptography with origin binding, defeating phishing kits and avoiding SMS-based attack vectors."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the BEST control to ensure that a terminated employee's access is removed promptly?",
    "options": [
      "Manual review at the next access certification",
      "Automated tie-in between HR offboarding and IdM",
      "Annual password rotation",
      "Adding more MFA tokens"
    ],
    "answer": 1,
    "explanation": "An automated tie-in (HR system → IdM) ensures access is removed close to real time upon termination, eliminating the gap."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which structure represents access in a table form with subjects as rows, objects as columns, and entries as permissions?",
    "options": [
      "Access Control List",
      "Capability List",
      "Access Control Matrix",
      "Role Matrix"
    ],
    "answer": 2,
    "explanation": "The access control matrix is the conceptual model. ACLs are stored per-object (columns) and capability lists are stored per-subject (rows)."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is an example of an access control list (ACL)?",
    "options": [
      "Firewall rules allowing/denying traffic per port",
      "User passwords",
      "Backup schedule",
      "Account name format"
    ],
    "answer": 0,
    "explanation": "ACLs attach to objects (files, ports, network interfaces) and enumerate which subjects can perform which actions."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is a primary benefit of identity provisioning automation?",
    "options": [
      "Eliminates the need for HR",
      "Consistent, auditable account lifecycle changes",
      "Removes need for monitoring",
      "Disables MFA"
    ],
    "answer": 1,
    "explanation": "Automated provisioning reduces errors, accelerates onboarding/offboarding, and produces a strong audit trail."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which authentication factor is MOST susceptible to phishing when used by itself?",
    "options": [
      "FIDO2 security key",
      "TOTP entered into a website",
      "Username and password",
      "Biometric on the device"
    ],
    "answer": 2,
    "explanation": "Passwords entered into a website are easily phished. TOTP can be phished but is harder; FIDO2 keys resist phishing by design due to origin binding."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the BEST definition of 'risk'?",
    "options": [
      "A weakness in a system",
      "Likelihood of a threat exploiting a vulnerability, times impact",
      "An identified attacker",
      "An impact only"
    ],
    "answer": 1,
    "explanation": "Risk = likelihood (a threat exploiting a vulnerability) x impact. It captures both probability and consequence."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which BEST defines a 'vulnerability'?",
    "options": [
      "A potential cause of an incident",
      "A weakness that could be exploited",
      "An attacker's tool",
      "A risk treatment"
    ],
    "answer": 1,
    "explanation": "A vulnerability is a weakness that a threat could exploit. Without a threat, a vulnerability poses no risk; without a vulnerability, a threat has no foothold."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which BEST defines a 'threat'?",
    "options": [
      "Existing damage to a system",
      "A potential cause of an unwanted incident",
      "An installed control",
      "A residual risk"
    ],
    "answer": 1,
    "explanation": "Threats are potential causes of harm. Threat agents (or threat actors) carry out threats; threats target vulnerabilities."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which risk analysis method assigns numerical values to assets, exposure factor, and frequency to produce monetary loss estimates?",
    "options": [
      "Qualitative",
      "Quantitative",
      "Subjective",
      "Heuristic"
    ],
    "answer": 1,
    "explanation": "Quantitative analysis uses numbers to compute SLE, ARO, and ALE, producing monetary risk estimates."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which formula correctly defines Annualized Loss Expectancy (ALE)?",
    "options": [
      "AV x EF",
      "SLE x ARO",
      "ARO - EF",
      "AV / ARO"
    ],
    "answer": 1,
    "explanation": "ALE = SLE x ARO. SLE = Asset Value x Exposure Factor. ARO is the Annualized Rate of Occurrence."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "If an asset is worth $200,000 and a particular incident would destroy 25% of it, what is the SLE?",
    "options": [
      "$5,000",
      "$25,000",
      "$50,000",
      "$200,000"
    ],
    "answer": 2,
    "explanation": "SLE = AV x EF = $200,000 x 0.25 = $50,000."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "If the SLE is $50,000 and the incident is expected to occur twice per year, what is the ALE?",
    "options": [
      "$25,000",
      "$50,000",
      "$75,000",
      "$100,000"
    ],
    "answer": 3,
    "explanation": "ALE = SLE x ARO = $50,000 x 2 = $100,000."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which risk treatment option involves doing nothing because the cost of mitigation exceeds the potential loss, and management agrees to accept the consequences?",
    "options": [
      "Risk avoidance",
      "Risk transference",
      "Risk acceptance",
      "Risk mitigation"
    ],
    "answer": 2,
    "explanation": "Risk acceptance is a formal, documented decision to live with the risk because treatment isn't justified."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Buying cyber insurance is an example of which risk treatment?",
    "options": [
      "Risk acceptance",
      "Risk transference",
      "Risk avoidance",
      "Risk mitigation"
    ],
    "answer": 1,
    "explanation": "Insurance shifts (transfers) the financial impact of a risk to another party. Note: it does not transfer reputational impact."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Choosing not to engage in a business activity because the risk is too high is an example of which treatment?",
    "options": [
      "Risk acceptance",
      "Risk avoidance",
      "Risk transference",
      "Risk mitigation"
    ],
    "answer": 1,
    "explanation": "Risk avoidance eliminates the activity that creates the risk."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Applying additional controls to reduce the likelihood or impact of a risk is an example of:",
    "options": [
      "Risk mitigation",
      "Risk acceptance",
      "Risk avoidance",
      "Risk transference"
    ],
    "answer": 0,
    "explanation": "Risk mitigation reduces residual risk by applying additional controls to reduce likelihood, impact, or both."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which document captures identified risks, their analysis, owners, treatments, and status?",
    "options": [
      "Risk register",
      "Audit log",
      "Configuration baseline",
      "Asset list"
    ],
    "answer": 0,
    "explanation": "A risk register tracks risks (description, likelihood, impact, treatment, owner, status) and is the central artifact of the risk management process."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the PRIMARY purpose of vulnerability scanning?",
    "options": [
      "Exploit systems",
      "Identify known weaknesses via automated checks",
      "Replace patch management",
      "Manage user identities"
    ],
    "answer": 1,
    "explanation": "Vulnerability scanners enumerate known weaknesses (missing patches, misconfigurations) using a database of checks; they do not generally exploit vulnerabilities."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the BEST difference between vulnerability scanning and penetration testing?",
    "options": [
      "They are the same",
      "Scans find weaknesses; pen tests exploit them",
      "Pen tests are only automated",
      "Vulnerability scans are illegal"
    ],
    "answer": 1,
    "explanation": "Scanning identifies vulnerabilities. Penetration tests attempt to exploit them (with authorization) to demonstrate real-world risk."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the MOST important prerequisite for a penetration test?",
    "options": [
      "Recent backups",
      "Written authorization with scope and rules of engagement",
      "Use of a specific tool",
      "Use of a specific operating system"
    ],
    "answer": 1,
    "explanation": "A pen test must have explicit written authorization (and scope/RoE) to avoid legal and operational issues. Backups are good hygiene but not the foremost requirement."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which type of test gives the testers full knowledge of the environment, including source code and architecture?",
    "options": [
      "Black box",
      "White box",
      "Gray box",
      "Crystal box only"
    ],
    "answer": 1,
    "explanation": "White-box testing provides testers with detailed knowledge (source, architecture, credentials), simulating an insider or thorough audit."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which type of test gives the tester no prior knowledge, simulating an external attacker?",
    "options": [
      "White box",
      "Gray box",
      "Black box",
      "Open box"
    ],
    "answer": 2,
    "explanation": "Black-box testing simulates an external attacker with no inside information, often used to verify discoverability of vulnerabilities."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is a key element of an effective vulnerability management process?",
    "options": [
      "Scan once a year",
      "Continuous discovery, prioritization, and remediation",
      "Disable patching to maintain stability",
      "Ignore false positives"
    ],
    "answer": 1,
    "explanation": "Continuous discovery and risk-based prioritization (severity, exploitability, exposure, asset criticality) followed by remediation and verification is core to effective VM."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which scoring system is widely used to rank vulnerability severity (e.g., 0-10)?",
    "options": [
      "CVSS",
      "CVE",
      "CWE",
      "CCE"
    ],
    "answer": 0,
    "explanation": "CVSS provides a numeric severity score. CVE is an identifier; CWE catalogues weakness types; CCE catalogues configuration items."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "What does CVE stand for?",
    "options": [
      "Common Vulnerability Estimator",
      "Critical Vulnerability Enumerator",
      "Common Vulnerabilities and Exposures",
      "Cyber Vulnerability Examiner"
    ],
    "answer": 2,
    "explanation": "CVE = Common Vulnerabilities and Exposures: a catalogue of unique identifiers for publicly known cybersecurity vulnerabilities."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the PRIMARY purpose of logging?",
    "options": [
      "Fill up disk space",
      "Audit trail for accountability and investigation",
      "Replace MFA",
      "Eliminate the need for backups"
    ],
    "answer": 1,
    "explanation": "Logs provide the audit trail used for accountability, detection, and post-incident analysis. They must be retained, protected, and reviewed."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which type of log should be centrally collected and protected to prevent tampering by an attacker who compromises a system?",
    "options": [
      "Forward all security logs to a write-protected store",
      "Local logs only",
      "No logs",
      "Audit log printed on paper"
    ],
    "answer": 0,
    "explanation": "Forwarding logs to a separate log management/SIEM platform prevents attackers from covering their tracks by deleting local logs on compromised hosts."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is BEST described as 'an artifact observed in a system that, with high confidence, indicates an intrusion'?",
    "options": [
      "Key performance indicator (KPI)",
      "Key risk indicator (KRI)",
      "Indicator of compromise",
      "A scheduled vendor patch"
    ],
    "answer": 2,
    "explanation": "An Indicator of Compromise (IOC) is an artifact (hash, IP, domain, registry key) that indicates intrusion. KPIs measure performance; KRIs indicate risk levels."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the BEST definition of a Key Risk Indicator (KRI)?",
    "options": [
      "A metric tracking current risk level in an area",
      "A measure of operational success",
      "A type of malware",
      "A vulnerability score"
    ],
    "answer": 0,
    "explanation": "KRIs are metrics that signal changing levels of risk, supporting proactive risk management (e.g., percentage of overdue critical patches)."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the BEST description of a Security Information and Event Management (SIEM) system?",
    "options": [
      "A backup system",
      "Aggregates and correlates security events for alerts",
      "A web application firewall",
      "An endpoint antivirus"
    ],
    "answer": 1,
    "explanation": "SIEM systems collect logs, normalize and correlate events, and support detection, alerting, dashboards, and investigation."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which monitoring approach detects deviations from established baselines of normal behavior?",
    "options": [
      "Signature-based detection",
      "Anomaly-based detection",
      "Allow-list filtering",
      "Hash matching"
    ],
    "answer": 1,
    "explanation": "Anomaly-based detection compares observed activity against learned baselines; it can detect novel attacks but is more prone to false positives."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which detection method matches observed activity against known patterns (e.g., malware byte sequences or attack strings)?",
    "options": [
      "Signature-based detection",
      "Anomaly-based detection",
      "Statistical analysis",
      "Honeypot deployment"
    ],
    "answer": 0,
    "explanation": "Signature-based detection matches known patterns; it's accurate for known threats but blind to novel ones."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the BEST description of continuous monitoring?",
    "options": [
      "Monthly audits",
      "Ongoing observation of controls and risk indicators",
      "Annual penetration test",
      "Reading reports once a year"
    ],
    "answer": 1,
    "explanation": "Continuous monitoring (per NIST SP 800-137) provides ongoing visibility into controls, threats, and posture rather than periodic check-ins."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is a fundamental property required for log evidence to be useful in investigations or legal proceedings?",
    "options": [
      "Random log format",
      "Logs must be tamper-resistant; changes detectable",
      "Logs must be exposed to all employees",
      "Logs must be compressed"
    ],
    "answer": 1,
    "explanation": "Logs must be tamper-evident or tamper-resistant (write-once storage, hashing, central forwarding) to be trusted as evidence."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the BEST description of 'baseline' in monitoring?",
    "options": [
      "Hardened configuration only",
      "Measured normal operations for deviation detection",
      "An initial backup",
      "An ACL"
    ],
    "answer": 1,
    "explanation": "A monitoring baseline captures 'normal' so deviations can be detected. Configuration baselines are a related but distinct concept."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the GREATEST risk associated with a high false-positive rate in detections?",
    "options": [
      "Increased license cost",
      "Alert fatigue causing real incidents to be missed",
      "Slow network",
      "Higher RPO"
    ],
    "answer": 1,
    "explanation": "High false positives cause alert fatigue, leading analysts to dismiss or delay legitimate alerts. Tuning is essential."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which of the following is the BEST step to take BEFORE deploying a new control?",
    "options": [
      "Wait for an incident",
      "Define success metrics and document risk addressed",
      "Disable monitoring",
      "Remove documentation"
    ],
    "answer": 1,
    "explanation": "Defining the risk addressed and what success looks like (metrics) enables evaluation of the control's effectiveness over time."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which type of test focuses on simulating an attacker's view from outside the network without prior knowledge?",
    "options": [
      "Internal audit",
      "External black-box penetration test",
      "Code review",
      "Tabletop"
    ],
    "answer": 1,
    "explanation": "External black-box pen tests simulate Internet-based attackers with no inside knowledge, evaluating exposed services and discoverability."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the BEST practice for vulnerability prioritization?",
    "options": [
      "Fix critical first by CVSS only",
      "Combine severity, exploitability, criticality, exposure",
      "Fix oldest first regardless of severity",
      "Ignore CVSS"
    ],
    "answer": 1,
    "explanation": "Prioritization should be risk-based: severity, known exploitation in the wild, exposure, and asset criticality together determine remediation order."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the BEST description of 'threat intelligence'?",
    "options": [
      "Anti-virus signatures only",
      "Curated info on adversaries' tools and indicators",
      "A type of firewall",
      "A patch"
    ],
    "answer": 1,
    "explanation": "Threat intelligence describes adversaries (TTPs, indicators) and informs detection, response, and risk decisions."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is a recommended way to validate that controls are still effective over time?",
    "options": [
      "Hope for the best",
      "Periodic control testing, audits, and assessments",
      "Disable controls",
      "Defer to vendor confidence"
    ],
    "answer": 1,
    "explanation": "Controls drift. Periodic testing, audits, and assessments validate that controls remain in place and effective."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the BEST description of 'risk appetite'?",
    "options": [
      "Maximum technical impact possible",
      "The risk an organization accepts to meet objectives",
      "Number of incidents per year",
      "ALE x 2"
    ],
    "answer": 1,
    "explanation": "Risk appetite is the organization's declared willingness to accept risk in pursuit of objectives. Risk tolerance describes acceptable variation around objectives."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which of the following is the FIRST phase of the NIST SP 800-61 incident response lifecycle?",
    "options": [
      "Detection & Analysis",
      "Preparation",
      "Containment",
      "Post-Incident Activity"
    ],
    "answer": 1,
    "explanation": "NIST defines four phases: Preparation; Detection & Analysis; Containment, Eradication & Recovery; Post-Incident Activity."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which IR phase focuses on isolating affected systems to stop further damage while preserving evidence?",
    "options": [
      "Detection",
      "Containment",
      "Recovery",
      "Lessons learned"
    ],
    "answer": 1,
    "explanation": "Containment limits damage and preserves evidence. Short-term containment may differ from longer-term remediation."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the PRIMARY purpose of post-incident activity (lessons learned)?",
    "options": [
      "Assign blame",
      "Identify control and process improvements; update docs",
      "Pay invoices",
      "Decommission systems"
    ],
    "answer": 1,
    "explanation": "Post-incident reviews focus on improvement: what worked, what didn't, what changes are needed in controls, processes, and training."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the BEST description of 'eradication' in the incident response process?",
    "options": [
      "Removing the attacker's foothold so it cannot return",
      "Documenting findings",
      "Restoring backups",
      "Updating SLAs"
    ],
    "answer": 0,
    "explanation": "Eradication removes the threat from systems — deleting malware, eliminating attacker accounts, closing exploited vulnerabilities."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is BEST described as 'the order of volatility' in evidence collection?",
    "options": [
      "Logical and irrelevant",
      "Collect most-volatile evidence first (e.g., RAM, then disk)",
      "An order to disable network first",
      "An order to call lawyers first"
    ],
    "answer": 1,
    "explanation": "Order of volatility (RFC 3227) suggests capturing memory and ephemeral state first because it disappears quickly when systems are powered down or rebooted."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the BEST description of 'chain of custody'?",
    "options": [
      "The path of an attacker through the network",
      "Documentation tracking every handoff of evidence",
      "A list of vulnerabilities",
      "Insurance documentation"
    ],
    "answer": 1,
    "explanation": "Chain of custody documents every handoff and action taken with evidence, supporting its integrity and admissibility."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which cryptographic technique BEST proves that a forensic disk image was not modified between collection and analysis?",
    "options": [
      "Encryption with AES",
      "Hash at acquisition and verify at each subsequent use",
      "Compressing the image",
      "Renaming the file"
    ],
    "answer": 1,
    "explanation": "Hashing (e.g., SHA-256) provides a fingerprint that changes if the image is altered. Recording and verifying hashes proves integrity."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the BEST description of 'computer forensics'?",
    "options": [
      "Encrypting evidence",
      "Identify, collect, preserve, analyze, and present evidence",
      "Patching systems",
      "Performing user training"
    ],
    "answer": 1,
    "explanation": "Computer forensics applies investigative techniques to digital evidence with attention to integrity, repeatability, and admissibility."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is a key reason to use write-blockers when imaging a hard drive for forensic analysis?",
    "options": [
      "Faster imaging",
      "Prevents modification of source media during imaging",
      "Compress data",
      "Encrypt during imaging"
    ],
    "answer": 1,
    "explanation": "Write-blockers prevent any writes to the source, ensuring the original evidence is not altered while it is imaged."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which document outlines the strategy and procedures to keep critical business functions operating during a disruption?",
    "options": [
      "Disaster Recovery Plan",
      "Business Continuity Plan",
      "Incident Response Plan",
      "Change Management Plan"
    ],
    "answer": 1,
    "explanation": "The BCP addresses overall business operations during disruption. The DRP focuses more narrowly on restoring IT systems."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which document focuses specifically on restoring IT systems and data after a disaster?",
    "options": [
      "Disaster Recovery Plan (DRP)",
      "Business Continuity Plan (BCP)",
      "Incident Response Plan (IRP)",
      "Acceptable Use Policy (AUP)"
    ],
    "answer": 0,
    "explanation": "The DRP describes how IT systems are restored. It typically supports the broader BCP."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which analysis identifies the criticality of business processes and the impact of their disruption, supporting BCP and DRP planning?",
    "options": [
      "BIA",
      "Risk Assessment",
      "Vulnerability Scan",
      "Audit"
    ],
    "answer": 0,
    "explanation": "The BIA identifies critical business functions, dependencies, and impact of disruption, producing RTO and RPO targets."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which BCP/DRP metric represents the maximum acceptable time to restore a service?",
    "options": [
      "MTBF",
      "MTTR",
      "RTO",
      "RPO"
    ],
    "answer": 2,
    "explanation": "Recovery Time Objective (RTO) is the targeted maximum downtime before a function must be restored."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which BCP/DRP metric represents the maximum acceptable data loss measured in time?",
    "options": [
      "RTO",
      "RPO",
      "MTD",
      "WRT"
    ],
    "answer": 1,
    "explanation": "Recovery Point Objective (RPO) is the maximum allowable data loss (e.g., RPO of 4 hours means backups must occur at least every 4 hours)."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which metric represents the absolute longest time the business can be down before unacceptable consequences occur?",
    "options": [
      "MTD",
      "RPO",
      "MTBF",
      "WRT"
    ],
    "answer": 0,
    "explanation": "MTD is the outer limit a process can be inoperable. RTO must be less than MTD."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which BCP/DRP metric reflects the time needed to verify the restored system before resuming normal operations?",
    "options": [
      "WRT",
      "RTO",
      "RPO",
      "MTD"
    ],
    "answer": 0,
    "explanation": "Work Recovery Time is the time after technical restoration that is needed to verify systems, validate data, and resume business. RTO + WRT must be less than MTD."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which backup type captures all data each time it runs?",
    "options": [
      "Full backup",
      "Incremental backup",
      "Differential backup",
      "Snapshot only"
    ],
    "answer": 0,
    "explanation": "A full backup copies all selected data. It is the simplest to restore but takes the most time and storage."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which backup type captures only data changed since the most recent backup of ANY type and clears the archive bit?",
    "options": [
      "Full",
      "Incremental",
      "Differential",
      "Snapshot"
    ],
    "answer": 1,
    "explanation": "Incremental backups capture only data changed since the previous backup of any kind. To restore, you need the last full plus all subsequent incrementals."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which backup type captures all data changed since the last FULL backup (without clearing the archive bit)?",
    "options": [
      "Full",
      "Incremental",
      "Differential",
      "Snapshot"
    ],
    "answer": 2,
    "explanation": "Differential backups capture all changes since the last full backup. Restores need only the last full and the last differential, but backup time grows over the week."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which type of alternate site is fully equipped with hardware, software, and current data, capable of taking over operations almost immediately?",
    "options": [
      "Hot site",
      "Warm site",
      "Cold site",
      "Mobile site"
    ],
    "answer": 0,
    "explanation": "A hot site is fully equipped and ready for near-immediate failover. It is the most expensive option but provides the lowest RTO."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which type of alternate site provides facility, power, and basic infrastructure but no servers or current data?",
    "options": [
      "Hot site",
      "Warm site",
      "Cold site",
      "Reciprocal site"
    ],
    "answer": 2,
    "explanation": "Cold sites provide the basic facility only. They are the cheapest but have the longest recovery time."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which type of alternate site has the hardware and infrastructure but requires recent data restoration before going live?",
    "options": [
      "Hot site",
      "Warm site",
      "Cold site",
      "Mirrored site"
    ],
    "answer": 1,
    "explanation": "Warm sites have equipment but not current data — they trade some recovery speed for lower cost compared to hot sites."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the simplest BCP/DRP test, in which participants verbally walk through their roles in a scenario?",
    "options": [
      "Tabletop / walkthrough",
      "Simulation",
      "Parallel",
      "Full interruption"
    ],
    "answer": 0,
    "explanation": "A tabletop / walkthrough is discussion-based and the least disruptive form of testing."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the MOST realistic and riskiest BCP/DRP test, in which the primary site is actually taken offline?",
    "options": [
      "Walkthrough",
      "Simulation",
      "Parallel test",
      "Full interruption"
    ],
    "answer": 3,
    "explanation": "Full-interruption tests fail over to the alternate site by taking the primary offline; they are the most realistic but disruptive."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which BCP/DRP test runs operations at both the primary site and the alternate site simultaneously to verify the alternate can handle production workload?",
    "options": [
      "Walkthrough",
      "Simulation",
      "Parallel test",
      "Full interruption"
    ],
    "answer": 2,
    "explanation": "Parallel tests run alternate-site systems alongside production to verify functionality without disrupting business."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the BEST description of an 'incident' in security operations?",
    "options": [
      "A successful business outcome",
      "Confirmed or suspected violation of security policy",
      "A scheduled change",
      "A user complaint"
    ],
    "answer": 1,
    "explanation": "An incident is a confirmed or suspected violation/threat to confidentiality, integrity, or availability. Events become incidents when they meet criteria."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the BEST first action upon discovering a possible major security incident?",
    "options": [
      "Re-image the machine immediately",
      "Notify the IR team and follow the documented plan",
      "Tell your manager via personal email",
      "Power off all servers"
    ],
    "answer": 1,
    "explanation": "Follow the documented IR plan — that includes timely notification of the IR team, preserving evidence, and coordinated decision-making."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which group is typically responsible for executing the incident response process?",
    "options": [
      "CSIRT / IRT",
      "Sales team",
      "Finance team",
      "External auditors"
    ],
    "answer": 0,
    "explanation": "The Computer Security Incident Response Team (CSIRT) or IR team coordinates and executes the response."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is a primary purpose of 'lessons learned' meetings after an incident?",
    "options": [
      "Punish staff",
      "Identify gaps in controls, detection, and response",
      "End the project",
      "Increase headcount"
    ],
    "answer": 1,
    "explanation": "Lessons learned focus on improvement, not blame. They should result in concrete updates to controls, runbooks, and training."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the BEST description of 'eradication' confirmation?",
    "options": [
      "The attacker's last login time",
      "Confirm via scanning that attacker access is removed",
      "Confirming the firewall is on",
      "Verifying licenses"
    ],
    "answer": 1,
    "explanation": "Before recovery, the IR team must confirm with high confidence that the attacker has been removed — otherwise restoration may re-introduce compromise."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the BEST reason to maintain pre-staged communication templates as part of incident response preparation?",
    "options": [
      "They are required by law",
      "Consistent messaging under stress with fewer delays",
      "Replace press releases entirely",
      "Eliminate the need to involve legal"
    ],
    "answer": 1,
    "explanation": "Pre-staged messaging for known incident types (with placeholders) avoids ad-hoc communication errors during stressful events."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the GREATEST risk if forensic evidence is not collected properly?",
    "options": [
      "Evidence may be inadmissible, undermining the case",
      "The firewall may stop working",
      "Backups will fail",
      "Logs become smaller"
    ],
    "answer": 0,
    "explanation": "Improper collection breaks chain of custody or modifies evidence, making it inadmissible and impairing analysis."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which kind of backup BEST protects against ransomware encrypting backups along with primary data?",
    "options": [
      "Backups stored on the same file share",
      "Offline, air-gapped, or immutable backups",
      "Hourly local snapshots only",
      "Daily local incremental backups"
    ],
    "answer": 1,
    "explanation": "Offline, air-gapped, or immutable (WORM) backups cannot be encrypted by attackers that compromise the primary environment."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the BEST way to ensure a recovery plan actually works?",
    "options": [
      "Don't change anything in production",
      "Regularly test restorations and run BCP/DRP drills",
      "Reduce backup frequency",
      "Encrypt backups twice"
    ],
    "answer": 1,
    "explanation": "Untested plans and backups frequently fail when needed. Regular testing validates procedures and reveals gaps before a real event."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the BEST description of 'reconstitution' in incident recovery?",
    "options": [
      "Reissue user IDs",
      "Restore to known-good, validate, and re-enable monitoring",
      "Adding new firewalls",
      "Sending email"
    ],
    "answer": 1,
    "explanation": "Reconstitution restores systems (often from clean images and recent good backups) and validates them, with enhanced monitoring to ensure the attacker doesn't return."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the BEST way to handle a system suspected of being compromised when evidence preservation is needed?",
    "options": [
      "Reboot immediately to refresh memory",
      "Isolate from network but preserve power and state",
      "Format the drive",
      "Apply patches and continue using"
    ],
    "answer": 1,
    "explanation": "Powering down loses volatile evidence. Isolating from the network while preserving power and state allows forensic capture of memory and disk."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which type of cipher uses the SAME key for encryption and decryption?",
    "options": [
      "Symmetric",
      "Asymmetric",
      "Hashing",
      "Steganographic"
    ],
    "answer": 0,
    "explanation": "Symmetric algorithms (e.g., AES) use a single shared secret key for both encryption and decryption."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which symmetric algorithm is the current standard for protecting data at rest in most modern systems?",
    "options": [
      "DES",
      "3DES",
      "AES",
      "RC4"
    ],
    "answer": 2,
    "explanation": "AES (Advanced Encryption Standard) is the modern symmetric standard. DES is broken and obsolete; 3DES is deprecated; RC4 is broken."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which of the following key lengths is NOT supported by AES?",
    "options": [
      "128 bits",
      "192 bits",
      "256 bits",
      "512 bits"
    ],
    "answer": 3,
    "explanation": "AES supports 128, 192, and 256-bit keys. 512-bit keys are not a standard AES key length."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which asymmetric algorithm is widely used for both encryption and digital signatures, based on the difficulty of factoring large integers?",
    "options": [
      "AES",
      "RSA",
      "DES",
      "MD5"
    ],
    "answer": 1,
    "explanation": "RSA is a widely deployed asymmetric algorithm based on the difficulty of factoring large semi-prime numbers."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which algorithm is used for KEY EXCHANGE — allowing two parties to derive a shared secret over an insecure channel — but cannot encrypt or sign by itself?",
    "options": [
      "AES",
      "Diffie-Hellman",
      "SHA-256",
      "RC4"
    ],
    "answer": 1,
    "explanation": "Diffie-Hellman key exchange (and its variants like ECDH) lets two parties derive a shared secret over an insecure channel; it doesn't perform encryption or signing itself."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which asymmetric algorithm is based on the difficulty of the discrete logarithm problem over elliptic curves and offers strong security at smaller key sizes?",
    "options": [
      "RSA",
      "DES",
      "AES",
      "ECC"
    ],
    "answer": 3,
    "explanation": "Elliptic Curve Cryptography (ECC) provides comparable security at much smaller key sizes than RSA, making it efficient for constrained devices."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which property of a cryptographic hash function ensures it is computationally infeasible to find two different inputs that produce the same hash?",
    "options": [
      "Pre-image resistance",
      "Collision resistance",
      "Reversibility",
      "Determinism"
    ],
    "answer": 1,
    "explanation": "Collision resistance is the property that you cannot feasibly find two inputs producing the same hash output."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which hash function is currently considered broken for collision resistance and should NOT be used for digital signatures or certificates?",
    "options": [
      "SHA-256",
      "SHA-3",
      "MD5",
      "BLAKE2"
    ],
    "answer": 2,
    "explanation": "MD5 has known practical collision attacks and must not be used for security-critical purposes. SHA-1 is similarly deprecated."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which output length does SHA-256 produce?",
    "options": [
      "128 bits",
      "160 bits",
      "256 bits",
      "512 bits"
    ],
    "answer": 2,
    "explanation": "SHA-256 produces a 256-bit (32-byte) digest. SHA-1 produces 160 bits; SHA-512 produces 512 bits."
  },
  {
    "domain": "5: Cryptography",
    "question": "What does a digital signature provide?",
    "options": [
      "Confidentiality only",
      "Authentication, integrity, non-repudiation",
      "Faster encryption",
      "Compression"
    ],
    "answer": 1,
    "explanation": "A digital signature, made with the signer's private key, provides proof of origin (authentication), unmodified content (integrity), and non-repudiation."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which key is used to verify a digital signature?",
    "options": [
      "The signer's private key",
      "The signer's public key",
      "The receiver's private key",
      "A symmetric session key"
    ],
    "answer": 1,
    "explanation": "A signature is created with the signer's private key and verified with the signer's public key."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which is the MAIN purpose of a Public Key Infrastructure (PKI)?",
    "options": [
      "Distribute symmetric keys via email",
      "Issues, manages, and revokes digital certificates",
      "Encrypt data at rest",
      "Replace passwords"
    ],
    "answer": 1,
    "explanation": "PKI provides the framework (CAs, RAs, repositories, CRLs/OCSP, policies) to issue, manage, and revoke digital certificates and establish trust."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which PKI component is responsible for digitally signing certificates after verifying the identity of the requester?",
    "options": [
      "Registration Authority (RA)",
      "Certificate Authority (CA)",
      "Validation Authority (VA)",
      "End Entity"
    ],
    "answer": 1,
    "explanation": "The CA signs certificates after the identity is verified (often by an RA). The CA's signature is the basis of trust in PKI."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which mechanism allows a relying party to check whether a certificate has been revoked in near real time?",
    "options": [
      "CRL only",
      "OCSP",
      "DNSSEC",
      "X.500 directory"
    ],
    "answer": 1,
    "explanation": "OCSP provides real-time status checking. CRLs are downloadable lists with latency between revocation and effective enforcement."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which is BEST described as a list of certificates that have been revoked before their scheduled expiration?",
    "options": [
      "CRL",
      "OCSP response",
      "CSR",
      "PKCS#12 archive"
    ],
    "answer": 0,
    "explanation": "The CRL is a signed list of revoked certificates published by the CA. Relying parties consult it before trusting a certificate."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which is the BEST description of 'key escrow'?",
    "options": [
      "Copies of keys held by a third party for recovery",
      "Encrypting keys with another key",
      "Storing keys on a USB drive",
      "Destroying keys at end of life"
    ],
    "answer": 0,
    "explanation": "Key escrow places copies of keys with a trusted third party so they can be recovered (e.g., legal access, employee departure)."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which protocol provides confidentiality and integrity for IP traffic, supporting both transport and tunnel modes and using AH and ESP?",
    "options": [
      "TLS",
      "IPsec",
      "SSH",
      "PPTP"
    ],
    "answer": 1,
    "explanation": "IPsec secures IP traffic. AH provides authentication/integrity; ESP provides confidentiality (plus optional auth/integrity). Transport vs tunnel mode covers payload vs whole packet."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which IPsec protocol provides confidentiality (encryption) of the payload?",
    "options": [
      "AH",
      "ESP",
      "ISAKMP",
      "IKE"
    ],
    "answer": 1,
    "explanation": "ESP encrypts the payload (and optionally authenticates). AH provides authentication and integrity but does not encrypt."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which is the BEST description of TLS?",
    "options": [
      "An IP-layer encryption protocol",
      "Authenticated, encrypted sessions over TCP",
      "A type of firewall",
      "A backup protocol"
    ],
    "answer": 1,
    "explanation": "TLS provides authenticated, encrypted, integrity-protected sessions over TCP, used for HTTPS, SMTPS, IMAPS, and many other services."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which is the PRIMARY purpose of S/MIME?",
    "options": [
      "Secure file transfer",
      "Encrypt and sign email via X.509 certificates",
      "Authenticate to web servers",
      "Sign software"
    ],
    "answer": 1,
    "explanation": "S/MIME uses X.509 certificates to encrypt and digitally sign email messages, providing confidentiality, integrity, and non-repudiation."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which type of cryptanalytic attack relies on observing physical signals such as power, timing, or electromagnetic emissions to extract keys?",
    "options": [
      "Known plaintext",
      "Chosen ciphertext",
      "Side-channel attack",
      "Birthday attack"
    ],
    "answer": 2,
    "explanation": "Side-channel attacks exploit unintended physical information leakage (power, timing, EM, cache behavior) to recover secrets."
  },
  {
    "domain": "5: Cryptography",
    "question": "Why is a unique Initialization Vector (IV) important when encrypting multiple messages with the same key under block cipher modes like CBC?",
    "options": [
      "It shortens the ciphertext",
      "Identical plaintexts produce different ciphertexts",
      "It speeds up encryption",
      "It compresses data"
    ],
    "answer": 1,
    "explanation": "Unique IVs ensure semantic security: identical plaintexts under the same key produce different ciphertexts, preventing pattern-based attacks."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which OSI layer is responsible for end-to-end transport with reliable delivery and includes TCP and UDP?",
    "options": [
      "Network (Layer 3)",
      "Transport (Layer 4)",
      "Session (Layer 5)",
      "Data Link (Layer 2)"
    ],
    "answer": 1,
    "explanation": "The Transport layer (Layer 4) provides end-to-end transport. TCP is connection-oriented and reliable; UDP is connectionless and unreliable."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which OSI layer is responsible for logical addressing and routing between networks?",
    "options": [
      "Physical (Layer 1)",
      "Data Link (Layer 2)",
      "Network (Layer 3)",
      "Transport (Layer 4)"
    ],
    "answer": 2,
    "explanation": "The Network layer handles logical addressing (e.g., IP) and routing decisions between networks."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which OSI layer handles MAC addressing, framing, and operates with switches?",
    "options": [
      "Physical (Layer 1)",
      "Data Link (Layer 2)",
      "Network (Layer 3)",
      "Transport (Layer 4)"
    ],
    "answer": 1,
    "explanation": "The Data Link layer (Layer 2) handles MAC addressing and framing; switches operate primarily at this layer."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which step in the TCP three-way handshake follows the client's initial SYN?",
    "options": [
      "FIN",
      "ACK only",
      "SYN-ACK from the server",
      "RST from the server"
    ],
    "answer": 2,
    "explanation": "TCP three-way handshake: SYN (client) → SYN-ACK (server) → ACK (client)."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which port is used by HTTPS?",
    "options": [
      "80",
      "443",
      "21",
      "22"
    ],
    "answer": 1,
    "explanation": "HTTPS uses TCP port 443. HTTP uses 80; FTP uses 21; SSH uses 22."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which port is used by SSH?",
    "options": [
      "22",
      "23",
      "25",
      "443"
    ],
    "answer": 0,
    "explanation": "SSH defaults to TCP port 22. Telnet uses 23; SMTP uses 25; HTTPS uses 443."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which port is used by Telnet, a protocol that should NOT be used because it transmits credentials in cleartext?",
    "options": [
      "21",
      "22",
      "23",
      "443"
    ],
    "answer": 2,
    "explanation": "Telnet uses TCP port 23 and is insecure (cleartext). SSH (port 22) is the secure replacement."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which protocol provides domain-name to IP-address resolution?",
    "options": [
      "DHCP",
      "DNS",
      "SMTP",
      "ARP"
    ],
    "answer": 1,
    "explanation": "DNS resolves names to IPs. DHCP assigns IPs. ARP resolves IPs to MAC addresses on local networks."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which protocol assigns IP configuration to clients automatically?",
    "options": [
      "DNS",
      "DHCP",
      "FTP",
      "SMTP"
    ],
    "answer": 1,
    "explanation": "DHCP dynamically assigns IP, mask, default gateway, DNS, and other parameters to clients."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which protocol resolves IPv4 addresses to MAC addresses on a local network?",
    "options": [
      "ARP",
      "NDP",
      "ICMP",
      "RIP"
    ],
    "answer": 0,
    "explanation": "ARP maps IPv4 addresses to MAC addresses on a LAN. In IPv6, NDP (Neighbor Discovery Protocol) fulfills the equivalent role."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which attack involves an attacker sending spoofed ARP replies to redirect traffic between two hosts through the attacker?",
    "options": [
      "DNS poisoning",
      "ARP poisoning / spoofing",
      "TCP SYN flood",
      "Smurf attack"
    ],
    "answer": 1,
    "explanation": "ARP poisoning sends spoofed ARP messages so that victims map a target IP to the attacker's MAC, enabling MITM on the LAN."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which attack involves overwhelming a target with traffic from many compromised sources to disrupt availability?",
    "options": [
      "DoS",
      "DDoS",
      "MITM",
      "Replay"
    ],
    "answer": 1,
    "explanation": "A Distributed Denial of Service uses many sources (often a botnet) to amplify volume and complicate mitigation."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which attack captures legitimate traffic and re-sends it later to gain unauthorized access?",
    "options": [
      "Replay",
      "Smurf",
      "Cross-site scripting",
      "ARP poisoning"
    ],
    "answer": 0,
    "explanation": "Replay attacks reuse captured legitimate traffic to bypass authentication. Defenses include timestamps, nonces, and session tokens."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which type of firewall examines packet headers (source/destination IP, ports) and tracks state of TCP connections?",
    "options": [
      "Stateless packet filter",
      "Stateful inspection firewall",
      "Application proxy",
      "Web application firewall"
    ],
    "answer": 1,
    "explanation": "Stateful inspection firewalls track connection state in a table and can make decisions based on whether a packet is part of an existing flow."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which type of firewall makes decisions only on individual packet headers without tracking flows?",
    "options": [
      "Stateful",
      "Stateless packet filter",
      "Application proxy",
      "NGFW"
    ],
    "answer": 1,
    "explanation": "Stateless packet filters evaluate each packet independently, with no awareness of connection context."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which firewall type understands and filters specific application protocols, often acting as an intermediary between client and server?",
    "options": [
      "Stateless filter",
      "Stateful firewall",
      "Proxy / application-layer firewall",
      "Layer-2 filter"
    ],
    "answer": 2,
    "explanation": "Application/proxy firewalls operate at the application layer, terminating client connections and making their own requests to servers, enforcing protocol- and content-level rules."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which next-generation firewall (NGFW) capability inspects application traffic regardless of port?",
    "options": [
      "Stateful inspection",
      "Application identification regardless of port",
      "DHCP relay",
      "STP"
    ],
    "answer": 1,
    "explanation": "NGFWs identify applications regardless of port (e.g., distinguishing SSH-on-443 from HTTPS), enabling fine-grained policy."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the BEST distinction between IDS and IPS?",
    "options": [
      "IDS prevents; IPS detects",
      "IDS alerts only; IPS actively blocks inline",
      "There is no difference",
      "IPS is host-only; IDS is network-only"
    ],
    "answer": 1,
    "explanation": "An IDS is passive (alerts only). An IPS is inline and can drop or modify traffic to actively prevent attacks."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which type of VPN technology operates at the network layer and is commonly used for site-to-site VPNs?",
    "options": [
      "TLS VPN",
      "IPsec VPN",
      "PPTP",
      "L2TP without IPsec"
    ],
    "answer": 1,
    "explanation": "IPsec operates at Layer 3 and is widely used for site-to-site VPNs (and many remote-access VPNs)."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the GREATEST issue with WEP for wireless security?",
    "options": [
      "Strong encryption is too slow",
      "Weak key scheduling and small IVs; trivially broken",
      "Requires too many devices",
      "It is too complex to deploy"
    ],
    "answer": 1,
    "explanation": "WEP is broken due to RC4 weaknesses and a 24-bit IV — it can be cracked in minutes. It should not be used."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which wireless security protocol provides the strongest security currently and uses Simultaneous Authentication of Equals (SAE) to replace PSK handshake weaknesses?",
    "options": [
      "WEP",
      "WPA",
      "WPA2",
      "WPA3"
    ],
    "answer": 3,
    "explanation": "WPA3 introduces SAE, providing stronger protection against offline password guessing and improved forward secrecy compared to WPA2-PSK."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which protocol provides port-based network access control on wired or wireless networks, using EAP for authentication?",
    "options": [
      "802.1X",
      "802.11",
      "802.3",
      "802.1Q"
    ],
    "answer": 0,
    "explanation": "802.1X provides port-based NAC. EAP (multiple flavors) is the authentication framework used to authenticate users/devices before granting access."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the BEST description of a VLAN?",
    "options": [
      "A type of VPN",
      "Logical segmentation of switched broadcast domains",
      "A wireless mode",
      "A storage protocol"
    ],
    "answer": 1,
    "explanation": "VLANs create separate broadcast domains within the same switching infrastructure, enabling logical segmentation without separate hardware."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the BEST defense against unauthorized devices being plugged into a network port?",
    "options": [
      "Disable DHCP",
      "802.1X / NAC to authenticate devices on connect",
      "Use static IPs",
      "Block all multicast"
    ],
    "answer": 1,
    "explanation": "802.1X / NAC authenticates devices and users before allowing network access, preventing rogue device connections."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which network device extends a network by connecting multiple network segments and operates primarily at Layer 2?",
    "options": [
      "Router",
      "Switch",
      "Hub",
      "Modem"
    ],
    "answer": 1,
    "explanation": "Switches forward frames based on MAC addresses at Layer 2. Routers operate at Layer 3; hubs are obsolete Layer 1 devices."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the BEST description of a 'DMZ' (or screened subnet) in network design?",
    "options": [
      "A trusted internal LAN",
      "Buffer zone for public-facing services behind firewalls",
      "A wireless network",
      "A backup site"
    ],
    "answer": 1,
    "explanation": "A DMZ exposes only public-facing services with a controlled boundary, isolating them from the internal trusted network."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which technology translates internal private IP addresses to a public address as traffic leaves the network?",
    "options": [
      "NAT",
      "ARP",
      "VLAN",
      "MPLS"
    ],
    "answer": 0,
    "explanation": "Network Address Translation (NAT) maps internal private addresses to public ones, conserving IPv4 space and adding a measure of hiding."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is BEST described as a system designed to attract attackers in order to detect and study their actions?",
    "options": [
      "WAF",
      "Sandbox",
      "Honeypot",
      "Bastion host"
    ],
    "answer": 2,
    "explanation": "A honeypot is a decoy designed to attract attackers, generate alerts on any access, and gather information on attacker techniques."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which class of attack involves an attacker inserting themselves between two communicating parties to read or alter traffic?",
    "options": [
      "DDoS",
      "Man-in-the-middle (MITM)",
      "Buffer overflow",
      "Phishing"
    ],
    "answer": 1,
    "explanation": "In a MITM attack, the attacker relays/alters communications between two parties who believe they are talking directly."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the BEST control against MITM attacks on web traffic?",
    "options": [
      "TLS with verified certificates plus HSTS enforcement",
      "Disable HTTPS",
      "Use HTTP instead",
      "Use longer passwords only"
    ],
    "answer": 0,
    "explanation": "Properly configured TLS with strict certificate validation and HSTS prevents downgrade and impersonation attacks at the network layer."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which protocol provides authentication and integrity for DNS records to prevent cache poisoning?",
    "options": [
      "DNSSEC",
      "DKIM",
      "SPF",
      "DMARC"
    ],
    "answer": 0,
    "explanation": "DNSSEC signs DNS records so that resolvers can verify their authenticity and integrity, mitigating cache poisoning."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which email security mechanism allows a domain owner to specify which mail servers are authorized to send mail for the domain?",
    "options": [
      "SPF",
      "DKIM",
      "DMARC",
      "STARTTLS"
    ],
    "answer": 0,
    "explanation": "Sender Policy Framework (SPF) publishes authorized sending hosts via DNS. DKIM signs messages; DMARC aligns and provides reporting."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which email security mechanism digitally signs outbound mail using DNS-published public keys?",
    "options": [
      "SPF",
      "DKIM",
      "DMARC",
      "PGP"
    ],
    "answer": 1,
    "explanation": "DomainKeys Identified Mail (DKIM) attaches a cryptographic signature; recipients verify using the public key published in DNS."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which policy framework builds on SPF and DKIM to specify how to handle mail that fails authentication, and provides reporting?",
    "options": [
      "DMARC",
      "DNSSEC",
      "STARTTLS",
      "TLS-RPT"
    ],
    "answer": 0,
    "explanation": "DMARC ties SPF/DKIM to From-header alignment, instructs receivers on handling failures, and provides aggregate/forensic reporting."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the BEST description of network segmentation as a security control?",
    "options": [
      "Use of a single network for everything",
      "Dividing a network into zones with controls between",
      "Disabling Wi-Fi",
      "Using only IPv6"
    ],
    "answer": 1,
    "explanation": "Network segmentation isolates systems by purpose (e.g., user, server, OT) and enforces controls between zones to limit blast radius."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which type of attack tricks DNS resolvers into caching false records, redirecting users to attacker-controlled sites?",
    "options": [
      "DNS poisoning",
      "ARP spoofing",
      "SYN flood",
      "Smurf attack"
    ],
    "answer": 0,
    "explanation": "DNS cache poisoning manipulates resolvers into caching incorrect mappings, redirecting victims. DNSSEC validation mitigates this."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which Bluetooth security threat involves an attacker sending unsolicited messages to nearby devices?",
    "options": [
      "Bluejacking",
      "Bluesnarfing",
      "Bluebugging",
      "Bluesmacking"
    ],
    "answer": 0,
    "explanation": "Bluejacking sends unsolicited messages. Bluesnarfing steals data. Bluebugging takes control. Bluesmacking is a DoS."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which Bluetooth attack involves unauthorized access to information on a Bluetooth device?",
    "options": [
      "Bluejacking",
      "Bluesnarfing",
      "Bluebugging",
      "BlueBorne"
    ],
    "answer": 1,
    "explanation": "Bluesnarfing accesses information (contacts, calendar, files) on a victim's Bluetooth-enabled device without authorization."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the BEST first step when designing a network for defense?",
    "options": [
      "Implement an IDS",
      "Identify what to protect; design zones and controls",
      "Buy the most expensive firewall",
      "Encrypt all traffic"
    ],
    "answer": 1,
    "explanation": "Sound network defense begins with knowing what to protect and designing zones, choke points, and controls intentionally — not by buying products first."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the BEST description of a 'jump server' (jump host)?",
    "options": [
      "A storage server",
      "Hardened intermediary for all admin access",
      "A backup target",
      "A DNS resolver"
    ],
    "answer": 1,
    "explanation": "Jump hosts (bastions) concentrate admin access into a controlled, hardened path that can be audited and protected with MFA."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the BEST protocol replacement for FTP when secure file transfer is required?",
    "options": [
      "Telnet",
      "FTPS or SFTP",
      "TFTP",
      "Echo"
    ],
    "answer": 1,
    "explanation": "FTP transmits credentials and data in cleartext. FTPS adds TLS; SFTP runs over SSH. Either is acceptable depending on environment."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the BEST description of a 'zero trust' network approach?",
    "options": [
      "Trust everything inside the corporate network",
      "Treat every request as untrusted; verify explicitly",
      "Eliminate firewalls",
      "Allow only IPv6"
    ],
    "answer": 1,
    "explanation": "Zero trust assumes no implicit trust based on network location and requires explicit verification (identity, device posture, context) for every request."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the BEST control to prevent rogue access points connecting to an enterprise network?",
    "options": [
      "802.1X port auth combined with rogue AP detection",
      "Hide the SSID only",
      "Use longer passwords on Wi-Fi",
      "Disable IPv6"
    ],
    "answer": 0,
    "explanation": "802.1X prevents unauthorized devices from connecting wired ports; wireless rogue AP detection identifies unauthorized broadcasts."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the BEST defense against TCP SYN flood attacks?",
    "options": [
      "Enforce SSL/TLS on application endpoints",
      "SYN cookies plus upstream DDoS rate-limiting",
      "Disable TCP across the network",
      "Block UDP traffic at the edge"
    ],
    "answer": 1,
    "explanation": "SYN cookies allow servers to handle half-open connections without exhausting resources. Upstream DDoS protection scrubs large floods."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which type of malware spreads from system to system without requiring user interaction or a host file?",
    "options": [
      "Virus",
      "Worm",
      "Trojan",
      "Rootkit"
    ],
    "answer": 1,
    "explanation": "A worm propagates autonomously across systems by exploiting vulnerabilities or weak configurations. Viruses attach to host files; Trojans require execution by a user."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which type of malware disguises itself as legitimate software to trick users into executing it?",
    "options": [
      "Worm",
      "Virus",
      "Trojan horse",
      "Rootkit"
    ],
    "answer": 2,
    "explanation": "A Trojan presents itself as something useful or harmless to trick the user into running it, providing the attacker with access or capabilities."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which type of malware grants stealthy persistent access, often modifying the OS to hide its presence?",
    "options": [
      "Virus",
      "Worm",
      "Rootkit",
      "Adware"
    ],
    "answer": 2,
    "explanation": "Rootkits hide themselves and provide persistent privileged access, often hooking OS calls or running in the kernel."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which type of malware encrypts victim data and demands payment for the decryption key?",
    "options": [
      "Ransomware",
      "Spyware",
      "Adware",
      "Worm"
    ],
    "answer": 0,
    "explanation": "Ransomware encrypts data (and sometimes exfiltrates it) and demands payment, frequently in cryptocurrency."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which BEST describes 'spyware'?",
    "options": [
      "Encrypts user data",
      "Collects user activity covertly",
      "Generates ad impressions",
      "Locks the screen with a ransom note"
    ],
    "answer": 1,
    "explanation": "Spyware secretly gathers information (keystrokes, browsing, credentials) and transmits it to attackers."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the PRIMARY purpose of running suspicious files in a sandbox?",
    "options": [
      "Speed them up",
      "Run in isolation to safely observe behavior",
      "Increase efficiency",
      "Replace antivirus"
    ],
    "answer": 1,
    "explanation": "Sandboxes provide isolated execution so suspicious files can be detonated and observed without harming production systems."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which endpoint security technology continuously monitors endpoints, records telemetry, and supports detection and response actions?",
    "options": [
      "Antivirus only",
      "EDR",
      "DLP",
      "WAF"
    ],
    "answer": 1,
    "explanation": "EDR captures rich endpoint telemetry, applies analytics for detection, and supports investigation and response (isolate, kill, rollback)."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which web vulnerability allows an attacker to inject script into pages viewed by other users, often stealing cookies or performing actions?",
    "options": [
      "SQL injection",
      "Cross-Site Scripting (XSS)",
      "CSRF",
      "SSRF"
    ],
    "answer": 1,
    "explanation": "XSS injects malicious script into pages displayed to other users. Defenses include contextual output encoding and Content Security Policy."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which web vulnerability tricks a logged-in user's browser into submitting an action they didn't intend, leveraging the user's authentication?",
    "options": [
      "XSS",
      "CSRF",
      "SQL injection",
      "Buffer overflow"
    ],
    "answer": 1,
    "explanation": "CSRF abuses ambient authentication (e.g., cookies) to cause a victim's browser to perform unintended actions. Anti-CSRF tokens and SameSite cookies mitigate it."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST defense against SQL injection?",
    "options": [
      "Parameterized queries / prepared statements",
      "Stronger password complexity rules",
      "TLS at the network edge",
      "Endpoint antivirus scanning"
    ],
    "answer": 0,
    "explanation": "Parameterized queries (and ORM equivalents) keep code and data separate, eliminating most injection classes."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which class of vulnerability allows a program to overwrite memory beyond a buffer's bounds, sometimes leading to code execution?",
    "options": [
      "Buffer overflow",
      "XSS",
      "CSRF",
      "Logic flaw"
    ],
    "answer": 0,
    "explanation": "Buffer overflows occur when input exceeds a buffer's size and overwrites adjacent memory; defenses include bounds checking, ASLR, DEP, stack canaries."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST general defense against many input-related application vulnerabilities?",
    "options": [
      "Input validation with contextual output encoding",
      "Use of plaintext protocols",
      "Disable logging",
      "Avoid testing"
    ],
    "answer": 0,
    "explanation": "Validating input (allow-list where possible) and encoding output for the destination context defeat many injection and XSS issues."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of 'secure coding standards'?",
    "options": [
      "A list of programming languages to avoid",
      "Documented rules that minimize common defects",
      "Encryption requirements",
      "Patch schedule"
    ],
    "answer": 1,
    "explanation": "Secure coding standards define rules and practices (e.g., CERT, SEI) developers follow to reduce common defect classes like injection, memory safety errors, and improper authentication."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of a 'patch management' process?",
    "options": [
      "Apply all patches as soon as they are released, everywhere",
      "Inventory, identify, test, stage, deploy, verify",
      "Wait until incidents force patching",
      "Avoid patching to keep stability"
    ],
    "answer": 1,
    "explanation": "Effective patch management is structured: identify assets/patches, test, stage deployment, verify, and monitor — balancing risk and stability."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of OS hardening?",
    "options": [
      "Painting the server",
      "Disable unnecessary services and apply secure configs",
      "Replacing the OS yearly",
      "Encrypting only certain files"
    ],
    "answer": 1,
    "explanation": "Hardening applies secure configurations and removes unnecessary services/accounts. CIS Benchmarks are widely used references."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of 'application allowlisting' (whitelisting)?",
    "options": [
      "Allow only approved apps; block everything else",
      "Allow everything except a list of known-bad",
      "Block only viruses by signature",
      "A type of antivirus"
    ],
    "answer": 0,
    "explanation": "Allowlisting permits only known-good applications to execute, blocking everything else by default — strong against malware but requires careful management."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which type of security testing involves analyzing source code without executing the application?",
    "options": [
      "DAST",
      "SAST",
      "IAST",
      "Fuzzing"
    ],
    "answer": 1,
    "explanation": "Static Application Security Testing (SAST) examines source or binaries without execution to find defects and security issues."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which type of security testing probes a running application by sending unexpected inputs and observing responses?",
    "options": [
      "SAST",
      "DAST",
      "Code review",
      "Threat modeling"
    ],
    "answer": 1,
    "explanation": "Dynamic Application Security Testing (DAST) tests running applications, often via HTTP, sending crafted inputs and analyzing responses."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of 'fuzz testing'?",
    "options": [
      "A code style review",
      "Random or malformed input to trigger crashes",
      "Encrypting test data",
      "Generating user manuals"
    ],
    "answer": 1,
    "explanation": "Fuzzing sends random or malformed input to expose crashes, memory errors, and unexpected behavior that may indicate exploitable defects."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which mobile device management (MDM) capability removes data from a lost or stolen device?",
    "options": [
      "GPS tagging",
      "Remote wipe",
      "Screen mirroring",
      "Push notification"
    ],
    "answer": 1,
    "explanation": "Remote wipe is a key MDM capability allowing administrators to remove corporate data (or perform a full wipe) on lost or stolen devices."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the GREATEST security concern with Bring Your Own Device (BYOD)?",
    "options": [
      "Higher device cost",
      "Mixed personal/corporate data with limited oversight",
      "Better performance",
      "More frequent updates"
    ],
    "answer": 1,
    "explanation": "BYOD blurs corporate/personal boundaries and reduces direct control, requiring MDM/MAM, containerization, and clear policies."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which technology isolates corporate applications and data on a personal device, often used to enable BYOD without full device control?",
    "options": [
      "Containerization / Mobile Application Management",
      "VLAN trunking on switches",
      "DNSSEC on the resolver",
      "Web application firewall (WAF)"
    ],
    "answer": 0,
    "explanation": "Containerization or MAM isolates corporate apps/data on personal devices, supporting BYOD scenarios where full MDM is unacceptable."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of 'virtualization security' concerns?",
    "options": [
      "Air conditioning",
      "Hypervisor security, VM isolation, snapshots, sprawl",
      "Backup tape rotation",
      "Cable management"
    ],
    "answer": 1,
    "explanation": "Virtualization introduces hypervisor security, VM isolation, snapshot lifecycle, and sprawl as central concerns that don't exist in purely physical environments."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of a 'container'?",
    "options": [
      "A storage volume",
      "Isolated software unit sharing the host OS kernel",
      "A virtual machine with a separate kernel",
      "A network appliance"
    ],
    "answer": 1,
    "explanation": "Containers share the host kernel and isolate processes via namespaces and cgroups. They are lighter than VMs but have a smaller isolation boundary."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is a key container-specific security concern compared to virtual machines?",
    "options": [
      "Higher heat output per host",
      "Shared kernel; one compromise affects all containers",
      "Smaller available storage volume",
      "Noticeably longer boot times"
    ],
    "answer": 1,
    "explanation": "Because containers share the host kernel, kernel-level vulnerabilities can compromise the host and all containers running on it."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST control for protecting container images in the supply chain?",
    "options": [
      "Sign images, verify on deploy, scan, use trusted registries",
      "Use the largest possible image",
      "Don't update base images",
      "Use only Windows containers"
    ],
    "answer": 0,
    "explanation": "Image signing/verification, vulnerability scanning, and use of trusted registries are core supply-chain controls for containers."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of 'least functionality' as applied to system hardening?",
    "options": [
      "Reduce the number of users",
      "Provide only essential capabilities; disable extras",
      "Reduce documentation",
      "Slow CPU speeds"
    ],
    "answer": 1,
    "explanation": "Least functionality (NIST 800-53 CM-7) ensures only necessary capabilities are enabled, reducing the attack surface."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST control to mitigate the risk of stolen laptops exposing data?",
    "options": [
      "Better laptop cases",
      "Full-disk encryption with strong pre-boot auth",
      "Anti-virus only",
      "Lighter laptops"
    ],
    "answer": 1,
    "explanation": "Full-disk encryption with strong pre-boot authentication protects data confidentiality if the device is lost or stolen."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which security concept addresses IoT devices that may lack patching, default credentials, and weak protocols?",
    "options": [
      "Segment, change defaults, patch firmware, monitor",
      "Restrict IoT to Wi-Fi networks",
      "Avoid encryption on devices",
      "Permit USB connectivity"
    ],
    "answer": 0,
    "explanation": "IoT security focuses on segmenting devices, changing default credentials, patching firmware, and monitoring traffic, given common limitations of these devices."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of 'secure baseline' for an OS?",
    "options": [
      "Minimum secure config applied to similar systems",
      "An emergency backup",
      "An ACL",
      "A patch"
    ],
    "answer": 0,
    "explanation": "A secure baseline defines a standardized minimum configuration (hardening) for similar systems, often guided by CIS Benchmarks or DISA STIGs."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the PRIMARY purpose of code signing?",
    "options": [
      "Compress executables",
      "Lets users verify software origin and integrity",
      "Encrypt data files",
      "Replace certificates"
    ],
    "answer": 1,
    "explanation": "Code signing uses digital signatures to assure users that software came from the claimed publisher and has not been altered since signing."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of a 'logic bomb'?",
    "options": [
      "A type of physical bomb",
      "Code that triggers on specific conditions",
      "A patch",
      "A firewall rule"
    ],
    "answer": 1,
    "explanation": "A logic bomb is dormant code that activates when a trigger condition is met (e.g., on a specific date, or when a user is removed)."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of an APT (Advanced Persistent Threat)?",
    "options": [
      "A type of antivirus",
      "Sustained adversary maintaining stealthy access",
      "A SIEM module",
      "A backup category"
    ],
    "answer": 1,
    "explanation": "APTs combine resources, patience, and sophistication to maintain access over extended periods, often targeting specific organizations."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of 'social engineering'?",
    "options": [
      "Configuring a SIEM",
      "Manipulating people via trust, urgency, or fear",
      "Patching servers",
      "Backing up data"
    ],
    "answer": 1,
    "explanation": "Social engineering targets humans rather than systems, exploiting trust, fear, urgency, or authority to obtain information or actions."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST defense against phishing aimed at credential theft?",
    "options": [
      "Stronger passwords alone",
      "Phishing-resistant MFA plus training and filtering",
      "Disable email",
      "Use HTTP"
    ],
    "answer": 1,
    "explanation": "Phishing-resistant MFA, mail filtering, link inspection, and user training collectively reduce credential-theft phishing risk."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of 'security through obscurity'?",
    "options": [
      "Effective primary security strategy",
      "Relying on secrecy of design as the main defense",
      "Use of encryption",
      "A patching method"
    ],
    "answer": 1,
    "explanation": "Security through obscurity (relying on hidden design as the main control) is widely discouraged as a primary defense, though some obscurity can layer on real controls."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of 'principle of least privilege' applied to applications?",
    "options": [
      "Applications should run with maximum admin rights",
      "Apps run with only the privileges they need",
      "Applications should run as root for stability",
      "Applications should not authenticate"
    ],
    "answer": 1,
    "explanation": "Applications should be granted only the privileges necessary, limiting damage if the application is compromised."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST description of an SDLC's 'requirements' phase from a security perspective?",
    "options": [
      "Skip security to save time",
      "Identify security needs early so they're designed in",
      "Add security at the end of development",
      "Use functional requirements"
    ],
    "answer": 1,
    "explanation": "Identifying security and privacy requirements early supports 'shift left' — building security into the design rather than retrofitting it later."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the FIRST canon of the ISC2 Code of Ethics?",
    "options": [
      "Act honorably, honestly, justly, responsibly, and legally",
      "Provide diligent and competent service to principals",
      "Advance and protect the profession",
      "Protect society, the common good, and public trust"
    ],
    "answer": 3,
    "explanation": "The four canons are ordered by priority. Canon I (highest) is to protect society and the common good. Conflicts between canons are resolved by canon order."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "When two canons of the ISC2 Code of Ethics appear to conflict, how should the conflict be resolved?",
    "options": [
      "By the consensus of peers in the field",
      "By following the canon listed first in order",
      "By choosing the option with the least cost",
      "By deferring to the employer's instructions"
    ],
    "answer": 1,
    "explanation": "When canons conflict, the canon listed earlier takes precedence. Protecting society outranks duty to a principal."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "A complaint that an ISC2 member violated the Code of Ethics may result in which outcome after committee review?",
    "options": [
      "Automatic certification renewal",
      "Revocation of the member's certification",
      "Government criminal prosecution",
      "Mandatory new training only"
    ],
    "answer": 1,
    "explanation": "Substantiated Code of Ethics violations can result in revocation of the credential by the ISC2 Ethics Committee."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Crime Prevention Through Environmental Design (CPTED) primarily relies on which approach?",
    "options": [
      "Hiring more security guards per shift",
      "Shaping the physical environment to discourage criminal acts",
      "Adding cryptographic controls to facilities",
      "Issuing pepper spray to staff"
    ],
    "answer": 1,
    "explanation": "CPTED uses environmental design — sightlines, lighting, landscaping, access paths — to discourage criminal behavior and increase the perception of risk to offenders."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which physical control is BEST suited to stop a vehicle from being driven into the side of a building?",
    "options": [
      "Surveillance cameras",
      "Bollards or vehicle barriers",
      "Visitor sign-in sheet",
      "Motion-detection alarms"
    ],
    "answer": 1,
    "explanation": "Bollards are designed to absorb or stop vehicle impact. Cameras and alarms detect; they don't physically prevent a vehicle attack."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the BEST practice when admitting a visitor into a sensitive facility area?",
    "options": [
      "Issue a temporary access badge and require escort",
      "Provide an employee badge for the day",
      "Let them sign in and walk freely",
      "Allow access if they know an employee's name"
    ],
    "answer": 0,
    "explanation": "Visitors should receive distinct, time-limited badges and be escorted in sensitive areas. This both controls access and creates an audit trail."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "An attacker follows an authorized employee through a badge-controlled door without their own badge. This is BEST described as:",
    "options": [
      "Phishing",
      "Tailgating (piggybacking)",
      "Shoulder surfing",
      "Dumpster diving"
    ],
    "answer": 1,
    "explanation": "Tailgating (or piggybacking) is unauthorized physical access by following an authenticated person. Mantraps and turnstiles are common countermeasures."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the PRIMARY security purpose of a clean desk policy?",
    "options": [
      "Increase office aesthetics",
      "Reduce exposure of sensitive information to unauthorized eyes",
      "Improve cleaning crew productivity",
      "Reduce paper costs"
    ],
    "answer": 1,
    "explanation": "Clean desk policies reduce the chance that confidential documents, sticky-note credentials, or screens with sensitive data are seen by unauthorized parties."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which control BEST mitigates the risk of an attacker plugging an unauthorized USB device into a workstation?",
    "options": [
      "Antivirus updates",
      "Endpoint USB device control / port blocking",
      "Stronger Wi-Fi passwords",
      "Increased password complexity"
    ],
    "answer": 1,
    "explanation": "Endpoint USB controls (allowlist/blocklist by device class, vendor/product ID) directly address unauthorized USB devices. Antivirus may catch payloads but not the connection itself."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "When a laptop reaches end of life and is being decommissioned, which step is MOST important from a data-protection standpoint?",
    "options": [
      "Re-image with a fresh OS",
      "Securely sanitize or destroy the storage media",
      "Update the asset tag color",
      "Return the keyboard to inventory"
    ],
    "answer": 1,
    "explanation": "Decommissioning must include secure sanitization or destruction of storage media to prevent data leakage. Re-imaging alone does not reliably erase residual data, especially on SSDs."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which NIST SP 800-88 sanitization category renders data infeasible to recover using laboratory techniques?",
    "options": [
      "Clear",
      "Purge",
      "Destroy",
      "Format"
    ],
    "answer": 2,
    "explanation": "NIST 800-88 defines Clear, Purge, and Destroy. Destroy renders the media itself unusable and data infeasible to recover even with lab techniques."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which media is degaussing effective against?",
    "options": [
      "Solid-state drives",
      "Magnetic media such as HDDs and tape",
      "Optical discs",
      "Flash drives"
    ],
    "answer": 1,
    "explanation": "Degaussing uses a strong magnetic field to disrupt magnetic media. It is not effective against SSDs, flash, or optical media."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Why is overwriting an entire SSD less reliable than overwriting a traditional HDD for data sanitization?",
    "options": [
      "SSDs operate at higher temperatures",
      "Wear-leveling may leave data in cells not exposed via the logical interface",
      "SSDs use different file systems",
      "Overwrites do not work at all on SSDs"
    ],
    "answer": 1,
    "explanation": "Wear-leveling and over-provisioning on SSDs mean physically present data may not be visible through normal logical addresses, so overwrites cannot guarantee complete erasure. Crypto-erase or destruction is preferred."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which data classification scheme is MOST commonly used in U.S. government environments?",
    "options": [
      "Public / Internal / Confidential / Restricted",
      "Unclassified / Confidential / Secret / Top Secret",
      "Tier 1 / Tier 2 / Tier 3 / Tier 4",
      "Bronze / Silver / Gold / Platinum"
    ],
    "answer": 1,
    "explanation": "U.S. government uses Unclassified, Confidential, Secret, and Top Secret with possible compartments. Commercial schemes vary but commonly use Public/Internal/Confidential/Restricted."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "When labeling physical printouts of classified material, the marking should appear:",
    "options": [
      "Only on the cover sheet",
      "On every page, typically top and bottom",
      "Only on the document's last page",
      "Only on the digital original"
    ],
    "answer": 1,
    "explanation": "Classification markings should appear on every page (often top and bottom) so the classification level is clear regardless of which page is viewed."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Health insurance claim records that include patient name, treatment codes, and provider would BEST be classified as:",
    "options": [
      "PII only",
      "PHI (protected health information)",
      "PCI data",
      "Public information"
    ],
    "answer": 1,
    "explanation": "Protected Health Information (PHI) covers individually identifiable health information held or transmitted by covered entities under HIPAA. The records described include both identifiers and health data."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the PRIMARY purpose of a privacy notice provided to customers?",
    "options": [
      "Replace the terms of service",
      "Disclose what personal data is collected, why, and how it is used",
      "Eliminate the need for encryption",
      "Authorize secondary uses without restriction"
    ],
    "answer": 1,
    "explanation": "Privacy notices inform individuals about data practices — collection, purpose, sharing, retention, rights — and are foundational to consent and most privacy frameworks."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which behavior is MOST suggestive of a potential insider threat warranting investigation?",
    "options": [
      "Working approved overtime occasionally",
      "Repeatedly accessing data well outside the employee's normal role and hours",
      "Asking for cross-training opportunities",
      "Reporting suspicious emails to security"
    ],
    "answer": 1,
    "explanation": "Unusual access patterns — broad data access outside job role, off-hours activity, large downloads — are classic insider-threat indicators that warrant further analysis."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which statement BEST reflects organizational handling of whistleblowers reporting policy violations?",
    "options": [
      "Whistleblowers should be terminated for disloyalty",
      "Reporters should have a protected, retaliation-free channel",
      "Reports are best ignored to avoid drama",
      "Reports should be made public immediately"
    ],
    "answer": 1,
    "explanation": "Mature programs offer protected reporting channels (often anonymous) and prohibit retaliation, which encourages disclosure of misconduct and reduces fraud risk."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the PRIMARY difference between cross-training and job rotation as security controls?",
    "options": [
      "Cross-training rotates people; rotation trains people",
      "Cross-training prepares others to perform a role; rotation periodically reassigns roles to detect issues",
      "They are interchangeable terms",
      "Job rotation only applies to executives"
    ],
    "answer": 1,
    "explanation": "Cross-training builds backup skills (continuity); job rotation reassigns staff periodically and can expose long-running issues like ongoing fraud."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which step in the employee onboarding process is MOST important from an access-control perspective?",
    "options": [
      "Issuing a parking pass",
      "Provisioning accounts with role-appropriate least-privilege access",
      "Assigning a desk location",
      "Adding the employee to a company calendar"
    ],
    "answer": 1,
    "explanation": "Onboarding should provision accounts based on the role's required access — least privilege from day one — to limit exposure and reduce later cleanup."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which background check element typically requires explicit candidate consent and may have legal limits on use?",
    "options": [
      "Identity verification",
      "Credit history check",
      "Reference checks",
      "Education verification"
    ],
    "answer": 1,
    "explanation": "Credit checks are subject to specific legal limits (e.g., FCRA in the U.S., similar laws elsewhere) and generally require explicit candidate consent and a permissible purpose."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is a typical security justification for pre-employment drug testing?",
    "options": [
      "Reduces office equipment costs",
      "Helps mitigate insider risk in safety- or trust-sensitive roles",
      "Replaces background checks entirely",
      "Eliminates the need for training"
    ],
    "answer": 1,
    "explanation": "Drug testing is often justified in safety-critical or trust-sensitive roles as part of broader workforce risk management. Legal/regulatory frameworks vary by jurisdiction."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "A RACI matrix in a security context primarily identifies which of the following for each task?",
    "options": [
      "Tools, dependencies, and budget",
      "Who is Responsible, Accountable, Consulted, and Informed",
      "Risk, Asset, Compliance, and Impact",
      "Roles, Auditors, Customers, Investors"
    ],
    "answer": 1,
    "explanation": "RACI is a responsibility assignment chart — Responsible (does the work), Accountable (owns the outcome), Consulted (provides input), Informed (kept aware)."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the correct order from most general to most specific in security documentation?",
    "options": [
      "Procedure, standard, policy, guideline",
      "Policy, standard, procedure, guideline",
      "Standard, guideline, procedure, policy",
      "Guideline, policy, procedure, standard"
    ],
    "answer": 1,
    "explanation": "Policies set intent; standards are mandatory requirements; procedures describe how; guidelines are recommended practices. Each layer derives from the layer above."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which BEST indicates a healthy security culture in an organization?",
    "options": [
      "Security incidents are hidden to protect careers",
      "Staff feel safe reporting near-misses without fear of blame",
      "Security training happens once at hire only",
      "Only the security team thinks about security"
    ],
    "answer": 1,
    "explanation": "A blameless reporting environment encourages disclosure of near-misses and mistakes, surfacing risks before they become incidents."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which metric is commonly used to measure the effectiveness of a phishing awareness program?",
    "options": [
      "Number of policies published",
      "Click-through rate on simulated phishing campaigns",
      "Average employee tenure",
      "Number of awareness videos posted"
    ],
    "answer": 1,
    "explanation": "Simulated phishing click-through rate is a direct behavioral metric showing whether training is reducing susceptibility over time."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is a BEST practice for conducting an internal phishing simulation?",
    "options": [
      "Surprise leadership with a high-pressure scenario",
      "Coordinate with HR and provide just-in-time training when users click",
      "Publicly post which users clicked",
      "Use only easy-to-spot test messages"
    ],
    "answer": 1,
    "explanation": "Effective simulations are coordinated with HR/comms, escalate difficulty over time, and provide immediate just-in-time training when users click — without publicly shaming individuals."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which BEST describes role-based security training?",
    "options": [
      "The same training given to everyone annually",
      "Training tailored to the specific risks of each role (developer, admin, exec)",
      "Training in physical security only",
      "Training in cybersecurity only"
    ],
    "answer": 1,
    "explanation": "Role-based training addresses the specific threats and responsibilities of each role: developers learn secure coding, admins learn hardening, executives learn social-engineering targeting."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the PRIMARY purpose of a vendor security assessment before signing a contract?",
    "options": [
      "Evaluate the vendor's marketing materials",
      "Identify and address security risks introduced by the third-party relationship",
      "Compare vendor pricing structures",
      "Schedule the implementation roadmap"
    ],
    "answer": 1,
    "explanation": "Vendor risk assessments aim to surface and remediate security/compliance risks introduced by the vendor before commitment, scoped to the data and access involved."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "When an employee violates the Acceptable Use Policy, which action is MOST appropriate?",
    "options": [
      "Immediate termination regardless of severity",
      "Investigate, apply progressive consequences per policy, and document",
      "Ignore the violation if the employee is senior",
      "Make the violation public on internal forums"
    ],
    "answer": 1,
    "explanation": "Documented investigation and proportional consequences per policy (warning, suspension, training, termination depending on severity) are standard. Consistent application is critical for fairness and legal defensibility."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which scenario BEST illustrates a conflict of interest that should be disclosed?",
    "options": [
      "A staff member uses the company lunchroom",
      "A security manager evaluating vendors has a financial stake in one of the vendors",
      "An employee attends an industry conference",
      "An auditor reviews the same documents twice"
    ],
    "answer": 1,
    "explanation": "A financial stake in a vendor being evaluated creates clear bias and must be disclosed. Many organizations require recusal in such situations."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Who is ultimately responsible for assigning a classification to a piece of organizational data?",
    "options": [
      "The IT operations team",
      "The data owner",
      "The legal department",
      "Any employee handling the data"
    ],
    "answer": 1,
    "explanation": "The data owner — typically a business leader for that data — is accountable for classification, access decisions, and approving handling requirements."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which is the PRIMARY purpose of a tamper-evident seal on a server case or evidence bag?",
    "options": [
      "Prevent any access to the contents",
      "Provide visible indication if the seal has been disturbed",
      "Encrypt the contents inside",
      "Cool the equipment"
    ],
    "answer": 1,
    "explanation": "Tamper-evident seals do not prevent tampering — they make it visible, supporting chain of custody and detection of unauthorized access."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which lock type provides the BEST audit trail of who entered and when?",
    "options": [
      "Traditional pin-tumbler key lock",
      "Electronic lock integrated with an access control system",
      "Combination padlock",
      "Cipher lock with shared code"
    ],
    "answer": 1,
    "explanation": "Electronic locks tied to access control systems record per-user entry events with timestamps. Mechanical locks and shared codes lack per-user auditing."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which BEST distinguishes split knowledge from dual control?",
    "options": [
      "They mean the same thing",
      "Split knowledge divides a secret between people; dual control requires two people to act together",
      "Split knowledge applies only to admins",
      "Dual control requires three or more people"
    ],
    "answer": 1,
    "explanation": "Split knowledge: no single person knows the full secret (e.g., half the key). Dual control: two people must both act to perform the action. They can be combined."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "A maker-checker process in security operations BEST exemplifies which principle?",
    "options": [
      "Least privilege",
      "Separation of duties",
      "Defense in depth",
      "Need to know"
    ],
    "answer": 1,
    "explanation": "Maker-checker (one person initiates, another approves) is a classic separation of duties pattern that reduces single-point fraud or error risk."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "How often should security policies typically be reviewed and updated?",
    "options": [
      "Only when an incident occurs",
      "On a defined cadence (e.g., annually) and when material changes happen",
      "Every ten years",
      "Whenever leadership changes"
    ],
    "answer": 1,
    "explanation": "Policies should be reviewed on a defined regular cadence plus event-driven (regulatory change, incident, business change) to remain relevant and accurate."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Which BEST describes 'configuration drift'?",
    "options": [
      "Configurations being deliberately rotated for security",
      "Systems gradually deviating from their approved baseline over time",
      "Changes documented in the change management system",
      "Network latency variability"
    ],
    "answer": 1,
    "explanation": "Configuration drift is the gradual divergence from documented baselines due to ad-hoc changes. Drift is a primary risk addressed by configuration management."
  },
  {
    "domain": "1: Security Operations and Administration",
    "question": "Why is separation of development, test, and production environments important?",
    "options": [
      "Reduces the cost of hardware",
      "Prevents untested changes and test data from impacting live systems and users",
      "Improves developer morale only",
      "Eliminates the need for backups"
    ],
    "answer": 1,
    "explanation": "Separating environments contains the impact of testing and developer activity, prevents accidental production changes, and reduces risk of test data or credentials leaking to production."
  },
  {
    "domain": "2: Access Controls",
    "question": "NIST Identity Assurance Levels (IAL) describe the strength of which process?",
    "options": [
      "The cryptographic strength of the password hash",
      "The identity proofing process used to bind a credential to a real person",
      "The complexity of the authentication factors",
      "The encryption strength of the session"
    ],
    "answer": 1,
    "explanation": "IAL describes how confident we can be that a credential belongs to a specific real-world person. AAL describes the authenticator's strength. FAL describes federation assertion protection."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which assurance level under NIST SP 800-63B requires phishing-resistant authentication for the highest assurance?",
    "options": [
      "AAL1",
      "AAL2",
      "AAL3",
      "AAL0"
    ],
    "answer": 2,
    "explanation": "AAL3 requires hardware-based authenticators with verifier impersonation resistance (phishing-resistant). AAL2 requires MFA but not necessarily phishing-resistant. AAL1 allows single-factor."
  },
  {
    "domain": "2: Access Controls",
    "question": "Federation Assurance Levels (FAL) primarily describe the protection of what?",
    "options": [
      "The user's biometric template",
      "The federation assertion passed between identity provider and relying party",
      "The encryption of stored credentials",
      "The physical security of token vendors"
    ],
    "answer": 1,
    "explanation": "FAL describes how well the federation assertion (e.g., a SAML response or OIDC ID token) is protected against tampering, replay, and disclosure between IdP and RP."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is a typical step in identity proofing for a higher assurance level?",
    "options": [
      "Self-attestation only via web form",
      "Verification of a government-issued ID and a supplementary identity record",
      "Email confirmation alone",
      "Phone number lookup"
    ],
    "answer": 1,
    "explanation": "Higher assurance proofing requires evidence such as a government ID plus a corroborating record (financial, utility, biometric comparison), often in person or via remote video proofing."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the primary weakness of static knowledge-based authentication (e.g., 'mother's maiden name')?",
    "options": [
      "It is computationally expensive",
      "Answers are often discoverable via public records or social media",
      "It requires hardware tokens",
      "It cannot be used over the internet"
    ],
    "answer": 1,
    "explanation": "Static KBA answers are frequently exposed through breaches, public records, or social media, making them weak for recovery or step-up authentication."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which security property of the Bell-LaPadula model prevents a subject from reading data classified above their clearance?",
    "options": [
      "Star property (no write down)",
      "Simple security property (no read up)",
      "Discretionary security property",
      "Tranquility property"
    ],
    "answer": 1,
    "explanation": "Bell-LaPadula's simple security property states 'no read up' — a subject cannot read objects at a higher classification. The * property is 'no write down'. Both protect confidentiality."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which model is designed to protect integrity, with rules 'no read down, no write up'?",
    "options": [
      "Bell-LaPadula",
      "Biba",
      "Clark-Wilson",
      "Brewer-Nash"
    ],
    "answer": 1,
    "explanation": "Biba protects integrity by preventing low-integrity data from contaminating high-integrity data: no read down (prevents reading lower-integrity data) and no write up (prevents writing to higher-integrity)."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which security model focuses on well-formed transactions and separation of duties to protect data integrity?",
    "options": [
      "Bell-LaPadula",
      "Biba",
      "Clark-Wilson",
      "Take-Grant"
    ],
    "answer": 2,
    "explanation": "Clark-Wilson focuses on commercial integrity, defining constrained data items, transformation procedures, and integrity verification procedures, with explicit separation of duties."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which model is specifically designed to prevent conflicts of interest by dynamically restricting access based on what the subject has previously accessed?",
    "options": [
      "Bell-LaPadula",
      "Biba",
      "Brewer-Nash",
      "Clark-Wilson"
    ],
    "answer": 2,
    "explanation": "Brewer-Nash (Chinese Wall) restricts access based on previous accesses to prevent conflicts of interest — common in legal, consulting, and financial firms serving competitors."
  },
  {
    "domain": "2: Access Controls",
    "question": "The Take-Grant protection model uses which primitive operations to analyze rights propagation?",
    "options": [
      "Read, write, execute, delete",
      "Take, grant, create, remove (revoke)",
      "Encrypt, sign, hash, verify",
      "Allow, deny, log, alert"
    ],
    "answer": 1,
    "explanation": "Take-Grant uses take, grant, create, and remove/revoke primitives to model how access rights propagate through a system, supporting formal analysis of safety properties."
  },
  {
    "domain": "2: Access Controls",
    "question": "Per current NIST SP 800-63B guidance, which password practice is now DISCOURAGED?",
    "options": [
      "Allowing long passphrases of 64+ characters",
      "Routine forced password rotation in the absence of compromise",
      "Checking new passwords against breach corpora",
      "Allowing the user to paste passwords"
    ],
    "answer": 1,
    "explanation": "Modern NIST guidance discourages periodic forced rotation (which tends to produce weaker, predictable patterns) and recommends rotation only on suspected compromise."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the PRIMARY security benefit of using a password manager?",
    "options": [
      "Single password is reused across all sites",
      "Enables unique, high-entropy passwords per site without memorization",
      "Eliminates the need for MFA",
      "Makes accounts immune to phishing"
    ],
    "answer": 1,
    "explanation": "Password managers let users adopt unique, long, random passwords per site (eliminating reuse) without memorization overhead. They do not eliminate the need for MFA."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which technology BEST enables passwordless authentication while remaining phishing-resistant?",
    "options": [
      "Strong text-based passwords",
      "FIDO2 / WebAuthn with platform or roaming authenticators",
      "Knowledge-based answers",
      "Security questions"
    ],
    "answer": 1,
    "explanation": "FIDO2/WebAuthn supports passwordless flows where the authenticator (built-in or external) proves possession with origin-bound public-key cryptography, resisting phishing by design."
  },
  {
    "domain": "2: Access Controls",
    "question": "Smart cards using PIV/CAC standards primarily authenticate by:",
    "options": [
      "Sharing a long static password",
      "Proving possession of a private key and a PIN protecting it",
      "Sending a fingerprint hash",
      "Echoing a server-issued nonce in plaintext"
    ],
    "answer": 1,
    "explanation": "PIV/CAC smart cards store private keys protected by a PIN. Authentication proves possession of the card AND knowledge of the PIN — two factors."
  },
  {
    "domain": "2: Access Controls",
    "question": "Mutual TLS (mTLS) is most commonly used in cloud architectures to:",
    "options": [
      "Replace HTTPS for browsers",
      "Authenticate workloads to each other in service-to-service communication",
      "Eliminate the need for any certificates",
      "Provide passwordless user login to web apps"
    ],
    "answer": 1,
    "explanation": "mTLS verifies both sides of a TLS connection using certificates and is widely used for service-to-service authentication in service meshes, zero-trust architectures, and API gateways."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which OAuth 2.0 grant type is recommended for confidential web applications acting on behalf of a user?",
    "options": [
      "Implicit flow",
      "Authorization code flow (often with PKCE)",
      "Resource owner password credentials",
      "Client credentials"
    ],
    "answer": 1,
    "explanation": "Authorization code flow (with PKCE for public clients) is the recommended modern flow for user-delegated authorization. Implicit is deprecated. ROPC is discouraged."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which OAuth 2.0 grant type is appropriate when a service acts on its own behalf, with no end user involved?",
    "options": [
      "Authorization code",
      "Implicit",
      "Client credentials",
      "Device code"
    ],
    "answer": 2,
    "explanation": "Client credentials grant is for machine-to-machine scenarios where the client itself owns the resource access, not delegating from a user."
  },
  {
    "domain": "2: Access Controls",
    "question": "What is the PRIMARY purpose of an OAuth refresh token?",
    "options": [
      "Authorize a single API call",
      "Obtain a new access token without requiring the user to re-authenticate",
      "Encrypt the access token in transit",
      "Replace the user's password"
    ],
    "answer": 1,
    "explanation": "Refresh tokens allow the client to obtain new short-lived access tokens after expiration without prompting the user, while supporting revocation by the authorization server."
  },
  {
    "domain": "2: Access Controls",
    "question": "A JWT (JSON Web Token) consists of which three parts separated by dots?",
    "options": [
      "Username, password, signature",
      "Header, payload, signature",
      "Issuer, subject, audience",
      "Algorithm, key, content"
    ],
    "answer": 1,
    "explanation": "A JWT has three base64url-encoded segments separated by '.': header (algorithm/type), payload (claims), and signature. Claims like iss/sub/aud go inside the payload."
  },
  {
    "domain": "2: Access Controls",
    "question": "What is the JWT 'alg: none' vulnerability?",
    "options": [
      "The token is encrypted twice",
      "An accepting library treats an unsigned token as valid because alg is 'none'",
      "The token expires immediately",
      "The token uses excessive CPU"
    ],
    "answer": 1,
    "explanation": "Some libraries historically accepted tokens whose header specified 'alg: none' as valid without signature verification, allowing trivial forgery. Always reject 'none' or unexpected algorithms."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the BEST way to handle compromise of a long-lived API token?",
    "options": [
      "Wait for natural expiration",
      "Revoke the token immediately and rotate the secret",
      "Inform users via blog post",
      "Reduce the token's permission set in place"
    ],
    "answer": 1,
    "explanation": "Compromised tokens must be revoked promptly and replaced. Waiting for expiration leaves a window of exploitation. Some token systems support immediate invalidation via blocklists or short-lived tokens with revocation lists."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the GREATEST security advantage of a hardware token over a software-based authenticator app?",
    "options": [
      "Cheaper to deploy at scale",
      "Private key never leaves the tamper-resistant hardware",
      "Faster authentication time",
      "Works offline"
    ],
    "answer": 1,
    "explanation": "Hardware tokens keep the private key inside tamper-resistant hardware, so malware on the user's device cannot extract it. Software tokens are more exposed to endpoint compromise."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which attack is SMS-based one-time-passcode MFA MOST susceptible to compared to FIDO2?",
    "options": [
      "Buffer overflow",
      "SIM swap attacks intercepting the SMS",
      "Side-channel attacks on the cell tower",
      "Cryptographic key fatigue"
    ],
    "answer": 1,
    "explanation": "SIM-swap (and SS7 routing) attacks can divert SMS to an attacker-controlled device, intercepting OTPs. FIDO2 origin-bound keys are not vulnerable to this."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which attack technique spams a user with MFA push notifications hoping they will accidentally approve one?",
    "options": [
      "Brute force",
      "MFA fatigue (prompt bombing)",
      "Pass-the-hash",
      "Golden ticket"
    ],
    "answer": 1,
    "explanation": "MFA fatigue attacks rely on users approving an unexpected push to make the prompts stop. Mitigations: number matching, context display, and rate limiting."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is a BEST practice for handling MFA recovery (backup) codes?",
    "options": [
      "Store them in plaintext in email",
      "Store them securely offline or in a vault, treat as sensitive credentials",
      "Share with one trusted colleague",
      "Use the same code for all users"
    ],
    "answer": 1,
    "explanation": "Recovery codes can bypass MFA and must be treated with the same care as the primary credential — stored offline or in an encrypted password manager."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is an example of behavioral biometrics?",
    "options": [
      "Iris scan",
      "Keystroke dynamics and mouse movement patterns",
      "Fingerprint capture",
      "Facial structure measurement"
    ],
    "answer": 1,
    "explanation": "Behavioral biometrics measure how a user interacts with a device — keystroke timing, mouse patterns, swipe behavior — to provide continuous identity signals."
  },
  {
    "domain": "2: Access Controls",
    "question": "Continuous authentication BEST refers to:",
    "options": [
      "Authenticating once at login and assuming identity for the session",
      "Continuously re-evaluating signals during the session to detect identity changes",
      "Requiring a password every minute",
      "Disabling MFA after first login"
    ],
    "answer": 1,
    "explanation": "Continuous authentication uses ongoing signals (location, biometric behavior, device posture) to detect identity changes mid-session and trigger re-authentication when risk increases."
  },
  {
    "domain": "2: Access Controls",
    "question": "Step-up authentication BEST describes:",
    "options": [
      "Replacing the user's password",
      "Requesting a stronger factor when a higher-risk action is attempted",
      "Disabling MFA after initial login",
      "Granting permanent elevated access"
    ],
    "answer": 1,
    "explanation": "Step-up auth keeps initial sign-in low-friction but requires a stronger factor (push, FIDO2, biometric) when the user attempts sensitive actions (wire transfer, admin change)."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is a reasonable account lockout policy aligned with current NIST guidance?",
    "options": [
      "Permanent lockout after one failed attempt",
      "Temporary lockout with throttling and exponential backoff after repeated failures",
      "No lockout at all to avoid disruption",
      "Lockout requires manual admin reset for all users"
    ],
    "answer": 1,
    "explanation": "Modern guidance favors throttling and temporary lockouts (rather than permanent), often with notification and exponential backoff, balancing brute-force defense and availability."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which type of privileged account is typically used by an automated service to authenticate to other systems?",
    "options": [
      "Root account",
      "Standard user account",
      "Service account",
      "Guest account"
    ],
    "answer": 2,
    "explanation": "Service accounts are non-human accounts used by applications/services to authenticate. They typically have specific, scoped privileges and credential lifecycle management requirements."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is a critical hardening step for default accounts on new systems?",
    "options": [
      "Leave them as-is for vendor support access",
      "Rename or disable, and change default credentials immediately",
      "Add them to admin groups by default",
      "Document the default credentials publicly"
    ],
    "answer": 1,
    "explanation": "Default accounts and credentials are widely known and a common attack vector. Hardening: rename/disable where possible and rotate credentials before exposure to networks."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the MAIN security risk associated with guest accounts on a system?",
    "options": [
      "High licensing costs",
      "They are often anonymous and may persist with weak controls",
      "They cannot be monitored",
      "They consume excessive CPU"
    ],
    "answer": 1,
    "explanation": "Guest accounts often allow anonymous or weakly authenticated access. They should be disabled by default and only enabled with explicit, monitored purpose."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is the GREATEST security weakness of shared accounts?",
    "options": [
      "They cost more to license",
      "They eliminate individual accountability and traceability",
      "They are slower at authentication",
      "They cannot use MFA"
    ],
    "answer": 1,
    "explanation": "Shared accounts break the accountability chain — you cannot tie actions to a specific person. PAM tools that broker access while logging individual users help mitigate this."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which is a BEST practice for service account credentials?",
    "options": [
      "Never rotate them to avoid breaking services",
      "Automate rotation through a secrets manager",
      "Print and store in a binder",
      "Use the same credentials across all services"
    ],
    "answer": 1,
    "explanation": "Service account credentials should be rotated automatically through a secrets management platform, ideally with applications fetching credentials at runtime rather than storing them locally."
  },
  {
    "domain": "2: Access Controls",
    "question": "Identity Governance and Administration (IGA) tools primarily provide which capability?",
    "options": [
      "Antivirus protection for endpoints",
      "Lifecycle management, access reviews, and policy enforcement for identities",
      "Network packet inspection",
      "Backup orchestration"
    ],
    "answer": 1,
    "explanation": "IGA platforms manage the identity lifecycle (provisioning, role management, certification), enforce SoD, and produce audit-ready reports across many connected systems."
  },
  {
    "domain": "2: Access Controls",
    "question": "A user successfully logs in but cannot access a particular file. This is BEST described as a failure of:",
    "options": [
      "Authentication",
      "Authorization",
      "Identification",
      "Encryption"
    ],
    "answer": 1,
    "explanation": "Authentication confirms who you are; authorization decides what you can do. Successful login then denied access is an authorization decision."
  },
  {
    "domain": "2: Access Controls",
    "question": "Which BEST distinguishes Identity Assurance Level from Authenticator Assurance Level?",
    "options": [
      "IAL is about the credential, AAL is about the person",
      "IAL is about confidence in identity proofing; AAL is about authenticator strength",
      "IAL and AAL are the same concept",
      "IAL applies to organizations, AAL to individuals"
    ],
    "answer": 1,
    "explanation": "IAL measures how confident we are the credential belongs to the real-world person it claims to. AAL measures how strongly the authenticator proves possession during sign-in."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "What does CWE catalog?",
    "options": [
      "Vulnerability instances in specific products",
      "Common Weakness Enumeration — types of software weaknesses",
      "Cloud Workload Events",
      "Cybersecurity Workforce Education topics"
    ],
    "answer": 1,
    "explanation": "CWE (Common Weakness Enumeration) is a catalog of software and hardware weakness types (e.g., CWE-79 = XSS). CVE catalogs specific vulnerability instances."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Common Configuration Enumeration (CCE) catalogs:",
    "options": [
      "Vulnerability instances",
      "System configuration items used in security assessments",
      "Cipher suite identifiers",
      "Cybersecurity certifications"
    ],
    "answer": 1,
    "explanation": "CCE provides unique identifiers for system configuration items, supporting consistent configuration assessment across tools and benchmarks like CIS and DISA STIGs."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which CVSS metric group describes characteristics of a vulnerability that change over time as exploits emerge or patches release?",
    "options": [
      "Base metrics",
      "Temporal metrics",
      "Environmental metrics",
      "Behavioral metrics"
    ],
    "answer": 1,
    "explanation": "CVSS Base metrics describe intrinsic characteristics that don't change. Temporal metrics account for changing factors (exploit maturity, remediation). Environmental metrics reflect the user's specific environment."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "A CVSS vector string captures:",
    "options": [
      "The user's location",
      "The metric values used to calculate the score",
      "The vulnerability scanner's IP address",
      "The CVE assignment date"
    ],
    "answer": 1,
    "explanation": "CVSS vector strings encode the specific metric values used to derive the score (e.g., AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H), enabling reproducibility and adjustment."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "EPSS (Exploit Prediction Scoring System) provides what?",
    "options": [
      "A measure of vulnerability severity",
      "A probability that a vulnerability will be exploited in the wild in the next 30 days",
      "A patch release schedule",
      "A vendor reputation score"
    ],
    "answer": 1,
    "explanation": "EPSS produces a 0-1 probability score predicting exploitation in the wild. Used alongside CVSS, it helps prioritize remediation based on actual exploitation likelihood."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "The CISA KEV (Known Exploited Vulnerabilities) catalog lists vulnerabilities that:",
    "options": [
      "Have been publicly disclosed but not patched",
      "Are confirmed to be actively exploited in the wild",
      "Have the highest CVSS scores",
      "Are likely to be discovered next year"
    ],
    "answer": 1,
    "explanation": "CISA's KEV catalog lists vulnerabilities confirmed to be actively exploited. Federal agencies must remediate within specified timeframes; private organizations use it for prioritization."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Responsible (coordinated) vulnerability disclosure typically includes:",
    "options": [
      "Immediate public posting of the exploit",
      "Private notification to the vendor with a reasonable remediation window before public disclosure",
      "Selling the vulnerability to the highest bidder",
      "Never disclosing the finding"
    ],
    "answer": 1,
    "explanation": "Coordinated disclosure gives the vendor a reasonable window to patch (often 90 days) before public disclosure. This balances researcher recognition with defender preparation."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the PRIMARY purpose of a bug bounty program?",
    "options": [
      "Reduce internal engineering staff",
      "Incentivize external researchers to report vulnerabilities through a defined process",
      "Eliminate the need for internal testing",
      "Generate marketing material"
    ],
    "answer": 1,
    "explanation": "Bug bounty programs offer monetary or recognition incentives for vulnerability reports through defined scope and rules, channeling researcher effort into safe, productive disclosure."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "A typical responsible disclosure timeline gives the vendor approximately:",
    "options": [
      "24 hours before publication",
      "90 days (or vendor-agreed extension) before publication",
      "5 years before publication",
      "Indefinite delay until vendor approves publication"
    ],
    "answer": 1,
    "explanation": "90 days is a common industry default (popularized by Google Project Zero), balancing time to patch with risk of indefinite delay. Extensions are negotiated for complex fixes."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "A qualitative risk matrix typically plots:",
    "options": [
      "Cost vs schedule",
      "Likelihood vs impact, with severity in the resulting cells",
      "Number of users vs number of assets",
      "Vendor name vs product version"
    ],
    "answer": 1,
    "explanation": "Qualitative risk matrices use likelihood (e.g., rare → almost certain) on one axis and impact (insignificant → catastrophic) on the other, producing severity zones (low/medium/high/critical)."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which BEST describes a 'risk owner'?",
    "options": [
      "The vendor whose product introduced the risk",
      "The person accountable for making decisions about and treating a specific risk",
      "The auditor who identifies the risk",
      "Every employee equally"
    ],
    "answer": 1,
    "explanation": "Risk owners are accountable for risk-treatment decisions and the residual outcome. Control owners are responsible for designing/operating specific mitigating controls."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is typically NOT included in a risk register entry?",
    "options": [
      "Risk description and category",
      "Risk owner and treatment status",
      "Marketing budget allocation",
      "Likelihood and impact ratings"
    ],
    "answer": 2,
    "explanation": "Risk registers track risk descriptions, ratings, owners, treatments, status, and review dates. Marketing budget is unrelated."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Return on Security Investment (ROSI) helps justify a control by comparing:",
    "options": [
      "The control's CapEx versus OpEx",
      "Expected loss avoidance against the cost of the control",
      "The control's color scheme to the corporate brand",
      "Vendor reputation against market share"
    ],
    "answer": 1,
    "explanation": "ROSI compares the expected reduction in loss exposure (avoided ALE) to the cost of implementing the control. Positive ROSI suggests the control is financially justified."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Net Present Value (NPV) of a multi-year security investment helps evaluate:",
    "options": [
      "The total nominal cost regardless of timing",
      "The discounted value of future benefits and costs in today's dollars",
      "The brand equity of the vendor",
      "The control's color contrast ratio"
    ],
    "answer": 1,
    "explanation": "NPV discounts future cash flows back to present value, allowing fair comparison of investments with different timing of costs and benefits."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is NOT one of the original five functions of the NIST Cybersecurity Framework?",
    "options": [
      "Identify",
      "Protect",
      "Govern",
      "Defend"
    ],
    "answer": 3,
    "explanation": "The original NIST CSF functions are Identify, Protect, Detect, Respond, Recover. CSF 2.0 adds Govern. 'Defend' is not one of the framework functions."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "MITRE ATT&CK is BEST described as:",
    "options": [
      "A vulnerability scanner",
      "A knowledge base of adversary tactics, techniques, and procedures based on real-world observations",
      "A penetration testing certification",
      "An incident reporting form"
    ],
    "answer": 1,
    "explanation": "MITRE ATT&CK catalogs adversary TTPs across the attack lifecycle. Defenders use it for detection coverage analysis, threat modeling, and red/blue team alignment."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "The Lockheed Martin Cyber Kill Chain ends with which phase?",
    "options": [
      "Reconnaissance",
      "Delivery",
      "Actions on objectives",
      "Weaponization"
    ],
    "answer": 2,
    "explanation": "The Kill Chain phases: Reconnaissance, Weaponization, Delivery, Exploitation, Installation, Command & Control, Actions on Objectives (the final phase where the adversary achieves their goal)."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "The Diamond Model of Intrusion Analysis describes intrusion events using which four core features?",
    "options": [
      "Adversary, Capability, Infrastructure, Victim",
      "Asset, Threat, Vulnerability, Control",
      "Identify, Protect, Detect, Respond",
      "Confidentiality, Integrity, Availability, Authentication"
    ],
    "answer": 0,
    "explanation": "The Diamond Model connects Adversary, Capability, Infrastructure, and Victim as a structured way to analyze and pivot through intrusion events."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "STRIDE is a threat modeling framework that classifies threats into which categories?",
    "options": [
      "Strength, Threat, Risk, Impact, Damage, Exploit",
      "Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege",
      "Surveillance, Theft, Reconnaissance, Intrusion, Damage, Escape",
      "Static, Tactical, Risky, Internal, Dynamic, External"
    ],
    "answer": 1,
    "explanation": "STRIDE categorizes threats by what security property they violate: authentication, integrity, non-repudiation, confidentiality, availability, and authorization."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "PASTA is a threat modeling methodology that stands for:",
    "options": [
      "Process for Attack Simulation and Threat Analysis",
      "Predictive Analysis of System Threats and Attackers",
      "Penetration Assessment for Systems and Applications",
      "Protocol Analysis for Security Threats and Attacks"
    ],
    "answer": 0,
    "explanation": "PASTA (Process for Attack Simulation and Threat Analysis) is a seven-stage, risk-centric threat modeling methodology aligning business and technical analysis."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "LINDDUN is a threat modeling framework focused on:",
    "options": [
      "Cloud-native architectures",
      "Privacy threats",
      "Network protocols only",
      "Mobile applications only"
    ],
    "answer": 1,
    "explanation": "LINDDUN models privacy threats: Linkability, Identifiability, Non-repudiation, Detectability, Disclosure, Unawareness, Non-compliance."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "An attack tree models:",
    "options": [
      "The corporate org chart",
      "Hierarchical decomposition of how an attacker could achieve a specific goal",
      "Network packet flow",
      "Audit log retention"
    ],
    "answer": 1,
    "explanation": "Attack trees decompose a high-level attacker goal into sub-goals and steps, supporting analysis of possible paths and prioritization of defenses."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which syslog severity level indicates the MOST critical condition?",
    "options": [
      "Notice",
      "Warning",
      "Emergency",
      "Informational"
    ],
    "answer": 2,
    "explanation": "Syslog levels (0-7): Emergency (0, system unusable) is most critical, then Alert, Critical, Error, Warning, Notice, Info, Debug (7, least critical)."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which log retention period is typically required under PCI DSS for security event logs?",
    "options": [
      "At least 30 days",
      "At least one year, with three months immediately available",
      "Indefinite retention",
      "No specific requirement"
    ],
    "answer": 1,
    "explanation": "PCI DSS requires audit log retention of at least one year, with the most recent three months immediately available for analysis."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Log normalization in a SIEM refers to:",
    "options": [
      "Compressing log files",
      "Converting logs from different sources into a common schema",
      "Deleting redundant log entries",
      "Encrypting logs at rest"
    ],
    "answer": 1,
    "explanation": "Normalization standardizes diverse log formats into a common schema (timestamps, sources, fields), enabling correlation across heterogeneous sources."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "A SIEM correlation rule typically:",
    "options": [
      "Encrypts logs before storage",
      "Triggers an alert when a defined pattern of events occurs across one or more sources",
      "Rotates log files daily",
      "Sends logs to backup"
    ],
    "answer": 1,
    "explanation": "Correlation rules look for patterns across log sources (e.g., multiple failed logins followed by a successful one from a different IP) to detect attack patterns that single events miss."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "A SOAR platform PRIMARILY adds which capability beyond a SIEM?",
    "options": [
      "More storage for raw logs",
      "Orchestration and automation of response playbooks across security tools",
      "Faster network connectivity",
      "Endpoint antivirus"
    ],
    "answer": 1,
    "explanation": "SOAR (Security Orchestration, Automation and Response) codifies response runbooks and automates actions across the security stack — case management, enrichment, and response — speeding response."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "User and Entity Behavior Analytics (UEBA) primarily detects:",
    "options": [
      "Known malware signatures",
      "Behavioral anomalies relative to a learned baseline",
      "Network bandwidth utilization",
      "Patch compliance gaps"
    ],
    "answer": 1,
    "explanation": "UEBA establishes baselines of normal behavior per user/entity and surfaces statistically significant deviations, useful for detecting compromised accounts and insider threats."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which BEST distinguishes hypothesis-driven threat hunting from data-driven hunting?",
    "options": [
      "They are the same activity",
      "Hypothesis-driven starts with a specific theory; data-driven starts from anomalies in data",
      "Hypothesis-driven uses only automated tools",
      "Data-driven requires no data at all"
    ],
    "answer": 1,
    "explanation": "Hypothesis-driven hunts begin with an analyst's specific theory (e.g., 'we may have been targeted by APT29'). Data-driven hunts start by exploring unusual patterns in the data."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "In MITRE ATT&CK, a 'tactic' represents:",
    "options": [
      "A specific tool used by an adversary",
      "The adversary's high-level objective during an attack phase",
      "A type of vulnerability",
      "A defender's response procedure"
    ],
    "answer": 1,
    "explanation": "Tactics are the why (objectives like Initial Access, Persistence, Exfiltration). Techniques are the how. Procedures are specific implementations of techniques."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which BEST distinguishes NetFlow from full packet capture?",
    "options": [
      "NetFlow includes packet payloads; PCAP does not",
      "NetFlow captures connection metadata; full packet capture records complete packet contents",
      "They are the same technology",
      "NetFlow is encrypted; packet capture is not"
    ],
    "answer": 1,
    "explanation": "NetFlow (and IPFIX, sFlow) provides connection-level metadata at lower storage cost. Full packet capture stores complete payloads for deep analysis but requires far more storage."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is the PRIMARY benefit of full packet capture for incident response?",
    "options": [
      "Lowest storage cost",
      "Ability to reconstruct exactly what was transmitted, including payloads",
      "Reduced legal liability",
      "Faster network speeds"
    ],
    "answer": 1,
    "explanation": "Full packet capture allows reconstruction of file transfers, command-and-control traffic, and exfiltration content — invaluable for retrospective investigation."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "STIX and TAXII are standards for:",
    "options": [
      "Vulnerability scanning",
      "Structured threat intelligence representation (STIX) and its exchange (TAXII)",
      "Network packet inspection",
      "Identity federation"
    ],
    "answer": 1,
    "explanation": "STIX defines a structured language for cyber threat intelligence; TAXII defines the transport/exchange protocol. Together they enable machine-to-machine threat intel sharing."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which is a typical advantage of commercial (closed) threat intelligence feeds over open-source feeds?",
    "options": [
      "They are always free",
      "More timely, curated, and contextual intelligence with vendor support",
      "They never have false positives",
      "They eliminate the need for any internal analysis"
    ],
    "answer": 1,
    "explanation": "Commercial feeds typically offer better timeliness, curation, and context (campaign attribution, victim sectors), at a cost. Open feeds are valuable but require more vetting."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Dwell time in security operations refers to:",
    "options": [
      "Time between patches",
      "Time an attacker remains undetected in the environment",
      "Time spent on training",
      "Time logs are retained"
    ],
    "answer": 1,
    "explanation": "Dwell time measures how long an adversary persists before detection. Lower dwell time means earlier detection and typically less damage."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "An Information Sharing and Analysis Center (ISAC) primarily:",
    "options": [
      "Sells antivirus subscriptions",
      "Facilitates sector-specific threat intelligence sharing among member organizations",
      "Performs penetration tests",
      "Issues digital certificates"
    ],
    "answer": 1,
    "explanation": "ISACs (e.g., FS-ISAC for finance, H-ISAC for healthcare) enable trusted information sharing about threats and incidents among organizations in the same sector."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "A coordinated vulnerability disclosure (CVD) policy primarily benefits:",
    "options": [
      "Only the researcher",
      "Both the vendor (time to remediate) and customers (timely patches)",
      "Only competitors of the vendor",
      "Only government regulators"
    ],
    "answer": 1,
    "explanation": "CVD aligns researcher, vendor, and customer interests: vendors get reasonable patching time, customers receive coordinated patches, and researchers get recognition through ethical channels."
  },
  {
    "domain": "3: Risk Identification, Monitoring, and Analysis",
    "question": "Which combination of inputs provides the BEST prioritization signal for remediation?",
    "options": [
      "CVSS severity alone",
      "CVSS severity, exploit availability (EPSS/KEV), and asset criticality",
      "Date the CVE was published",
      "Number of comments on the CVE record"
    ],
    "answer": 1,
    "explanation": "Multi-factor prioritization (severity, real-world exploitation likelihood, exposure, asset criticality) consistently outperforms single-metric approaches like CVSS alone."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is a typical purpose of an incident severity classification scheme (e.g., P1/P2/P3)?",
    "options": [
      "Replace the need for an IR plan",
      "Drive consistent response speed, escalation, and resource commitment based on impact",
      "Eliminate the need for monitoring",
      "Compress audit logs"
    ],
    "answer": 1,
    "explanation": "Severity tiers (often tied to SLA response times and escalation paths) ensure response intensity matches the actual impact and avoid both under- and over-reaction."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "An incident SLA stating P1 incidents receive response within 15 minutes primarily helps:",
    "options": [
      "Define response speed expectations across the organization",
      "Replace the role of the CSIRT",
      "Eliminate the need for monitoring",
      "Set network bandwidth"
    ],
    "answer": 0,
    "explanation": "Documented response time SLAs by severity set clear expectations for first response and escalation, supporting consistent service and accountability."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which BEST distinguishes a CSIRT from a SOC?",
    "options": [
      "They are the same team with different names",
      "A SOC monitors continuously; a CSIRT focuses on coordinating response to confirmed incidents",
      "A CSIRT only handles physical security",
      "A SOC reports to legal; a CSIRT reports to HR"
    ],
    "answer": 1,
    "explanation": "SOCs typically provide 24x7 monitoring, triage, and initial response. CSIRTs handle deeper response coordination, often pulling in legal, comms, and external partners."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "An incident 'war room' refers to:",
    "options": [
      "A specific cyber weapon",
      "A dedicated space (physical or virtual) for incident coordination during major events",
      "A backup data center",
      "A type of firewall"
    ],
    "answer": 1,
    "explanation": "War rooms (often virtual via video/chat) bring stakeholders together for sustained coordination during major incidents, with shared situational awareness and decision-making."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "The Incident Command System (ICS) is BEST described as:",
    "options": [
      "A protocol for industrial control systems",
      "A standardized command, control, and coordination framework for emergency response",
      "An ISO standard for cryptography",
      "A type of malware"
    ],
    "answer": 1,
    "explanation": "ICS (from emergency management) defines roles like Incident Commander, Planning, Operations, Logistics, Finance. It scales for incidents of varying size and integrates with public-sector responders."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the PRIMARY role of a tabletop exercise facilitator?",
    "options": [
      "Decide outcomes for the participants",
      "Guide the scenario, inject events, and capture observations",
      "Approve all future expenses",
      "Replace the IR team during the exercise"
    ],
    "answer": 1,
    "explanation": "The facilitator drives the scenario forward with injects, keeps discussion productive, and captures gaps and decisions for the after-action report — without dictating outcomes."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is typically NOT included in an after-action report?",
    "options": [
      "Timeline of the event",
      "Root cause and lessons learned",
      "Marketing campaign budget",
      "Recommended improvements"
    ],
    "answer": 2,
    "explanation": "After-action reports cover timeline, root cause, decisions, observations, gaps, and recommendations. Marketing budget is unrelated."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "U.S. state breach notification laws typically require notification:",
    "options": [
      "Within seven days of suspicion",
      "Within a defined timeframe after determining a breach occurred (varies by state)",
      "Only if the breach affects more than 1 million people",
      "Only if the company chooses to disclose"
    ],
    "answer": 1,
    "explanation": "All 50 U.S. states have breach notification laws, with specific timelines and definitions varying. Many use 'without unreasonable delay' or specify days (e.g., 30, 60)."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Under GDPR, controllers must notify the supervisory authority of a personal data breach within what timeframe?",
    "options": [
      "24 hours",
      "72 hours of becoming aware",
      "30 days",
      "Within a year"
    ],
    "answer": 1,
    "explanation": "GDPR Article 33 sets 72 hours from awareness for supervisory authority notification, with reasonable explanation if delayed beyond that."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "HIPAA generally requires notification of affected individuals within what timeframe after a breach is discovered?",
    "options": [
      "72 hours",
      "60 days",
      "One year",
      "10 years"
    ],
    "answer": 1,
    "explanation": "HIPAA's Breach Notification Rule requires notification to affected individuals without unreasonable delay and no later than 60 days after discovery."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Under PCI DSS, an organization experiencing a cardholder data breach typically must:",
    "options": [
      "Wait until annual audit to disclose",
      "Notify the acquirer/card brand and follow the incident response process defined by the standard",
      "Refund all purchases for the year",
      "Replace all customer accounts immediately"
    ],
    "answer": 1,
    "explanation": "PCI requires defined incident response that includes notification to relevant acquirers/card brands and supports forensic investigation by approved investigators (PFIs)."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "When coordinating with law enforcement during a confirmed criminal incident, which is a key consideration?",
    "options": [
      "Do not preserve evidence",
      "Preserve evidence per chain of custody and consult counsel before disclosure",
      "Make the case public immediately",
      "Disable all logging"
    ],
    "answer": 1,
    "explanation": "Pre-coordination with legal counsel and proper evidence preservation are essential. Disclosure decisions and law enforcement involvement should follow the IR plan and legal guidance."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which type of legal evidence is BEST described as a witness's first-hand testimony of what they personally observed?",
    "options": [
      "Documentary",
      "Testimonial",
      "Demonstrative",
      "Real"
    ],
    "answer": 1,
    "explanation": "Testimonial evidence is sworn statements about firsthand knowledge. Documentary (records), real (physical objects), and demonstrative (illustrations) are the other categories."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Spoliation of evidence refers to:",
    "options": [
      "Tampering with packet captures only",
      "Intentional or negligent destruction or alteration of evidence",
      "Backing up evidence to a vault",
      "Encrypting evidence at rest"
    ],
    "answer": 1,
    "explanation": "Spoliation can result in legal sanctions including adverse inferences. Organizations under litigation hold must preserve potentially relevant evidence."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "The 'best evidence rule' in digital forensics generally requires:",
    "options": [
      "A printout of computer evidence",
      "The original evidence or a verifiable forensically sound copy",
      "Only screen recordings",
      "Witness statements only"
    ],
    "answer": 1,
    "explanation": "Courts typically require the original or a forensically sound, verifiable copy (with intact chain of custody and integrity hashes). Modifications can render evidence inadmissible."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is a common hearsay exception applicable to many security logs?",
    "options": [
      "Personal opinion exception",
      "Business records exception (records kept in the regular course of business)",
      "Expert opinion exception",
      "Public broadcast exception"
    ],
    "answer": 1,
    "explanation": "Security logs, when generated and maintained in the regular course of business, often qualify under the business records exception, supporting admissibility in court."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which BEST distinguishes static from dynamic malware analysis?",
    "options": [
      "Static runs the sample; dynamic does not",
      "Static examines the sample without executing; dynamic observes behavior during execution",
      "Static is faster on Windows; dynamic on Linux",
      "They are interchangeable terms"
    ],
    "answer": 1,
    "explanation": "Static analysis (strings, disassembly, packers) doesn't execute the sample. Dynamic analysis runs it in a sandbox to observe behavior, network calls, file modifications, and persistence."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Reverse engineering of malware is typically used to:",
    "options": [
      "Recreate the original source code for redistribution",
      "Understand functionality, indicators, and capabilities for defense",
      "Improve the malware's stealth",
      "Patent the malware"
    ],
    "answer": 1,
    "explanation": "Defensive reverse engineering extracts IOCs, behavior patterns, persistence mechanisms, and capabilities, supporting detection, attribution, and remediation guidance."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which type of tool is commonly used for memory forensics analysis?",
    "options": [
      "Disk imaging suite only",
      "A memory analysis framework (e.g., Volatility) that parses RAM captures",
      "Antivirus signatures only",
      "Backup orchestration tool"
    ],
    "answer": 1,
    "explanation": "Memory analysis frameworks parse RAM captures to extract process lists, network connections, injected code, and other volatile artifacts crucial for IR."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "When creating a forensic disk image, the integrity of the copy is typically verified using:",
    "options": [
      "Compression ratio",
      "Cryptographic hashes (e.g., SHA-256) of source and image",
      "File system labels",
      "Vendor sticker on the drive"
    ],
    "answer": 1,
    "explanation": "Imaging tools compute hashes of source and image; matching hashes prove no bit-level changes during acquisition. Hash logs are kept with the chain of custody."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Network forensics analysis primarily relies on:",
    "options": [
      "Filesystem metadata only",
      "Packet captures (PCAP), flow data, and proxy/firewall logs",
      "Print job records",
      "Phone billing records"
    ],
    "answer": 1,
    "explanation": "Network forensics uses PCAP, flow records, DNS logs, proxy/firewall logs, and IDS alerts to reconstruct lateral movement, C2, and exfiltration."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Mobile device forensics often faces which unique challenge compared to traditional computer forensics?",
    "options": [
      "Devices use no operating system",
      "Strong device encryption and frequent OS updates limit access to data",
      "Mobile devices store no logs",
      "Mobile data is never relevant"
    ],
    "answer": 1,
    "explanation": "Modern mobile OSes use strong full-device encryption by default and frequently update, limiting traditional acquisition. Specialized tools and vendor cooperation are often needed."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is a defining challenge of cloud forensics compared to on-premises forensics?",
    "options": [
      "Inability to use computers",
      "Multi-tenancy and limited physical access to underlying infrastructure",
      "Lack of internet at the provider",
      "Cloud providers do not log anything"
    ],
    "answer": 1,
    "explanation": "Cloud forensics is constrained by multi-tenancy, limited access to the underlying hypervisor and storage, ephemeral resources, and provider-specific APIs for evidence collection."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "An affidavit in the context of digital evidence is BEST described as:",
    "options": [
      "A type of encryption algorithm",
      "A sworn written statement attesting to facts about the evidence",
      "A backup of the evidence",
      "A vendor warranty"
    ],
    "answer": 1,
    "explanation": "Affidavits document who collected, handled, and analyzed evidence, supporting authenticity and chain of custody when introduced in legal proceedings."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which BEST distinguishes an expert witness from a fact witness?",
    "options": [
      "Expert witnesses are paid; fact witnesses are not",
      "Experts may offer opinions based on expertise; fact witnesses testify only to what they observed",
      "Only expert witnesses are sworn in",
      "Fact witnesses must hold certifications"
    ],
    "answer": 1,
    "explanation": "Expert witnesses can opine within their expertise (after qualification). Fact witnesses must limit testimony to direct observations without offering opinions."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the PRIMARY output of a Business Impact Analysis (BIA)?",
    "options": [
      "A vendor list",
      "Criticality of processes with RTO, RPO, MTD, and dependency mapping",
      "Marketing strategy",
      "Office floor plan"
    ],
    "answer": 1,
    "explanation": "A BIA identifies critical processes, their tolerable downtime/data loss, dependencies, and impact of disruption — driving BCP and DRP priorities."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Mapping dependencies as part of BCP planning is important because:",
    "options": [
      "It increases hardware costs",
      "Restoring a service often requires its dependencies (network, identity, databases) to be restored first",
      "It eliminates the need for documentation",
      "It replaces vendor contracts"
    ],
    "answer": 1,
    "explanation": "Recovery sequence matters: a CRM cannot start without its database, identity provider, and network. Dependency mapping drives correct restoration order and surfaces hidden risks."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the BEST way to address a single point of failure (SPOF) in a critical service?",
    "options": [
      "Document it and move on",
      "Add redundancy or failover, or otherwise reduce the SPOF's impact",
      "Encrypt the SPOF",
      "Ignore until it fails"
    ],
    "answer": 1,
    "explanation": "SPOFs are addressed by redundancy, failover, alternate paths, or graceful degradation. Documentation alone doesn't reduce risk."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which RAID level provides striping with distributed parity, tolerating one disk failure?",
    "options": [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 10"
    ],
    "answer": 2,
    "explanation": "RAID 5 stripes data with distributed parity, surviving a single disk failure. RAID 6 tolerates two failures. RAID 0 is striping with no redundancy. RAID 1 is mirroring. RAID 10 is mirrored striping."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which BEST distinguishes a snapshot from a backup?",
    "options": [
      "Snapshots are stored offsite; backups are local",
      "Snapshots are typically point-in-time copies on the same storage; backups are independent copies kept separately",
      "Snapshots are encrypted; backups are not",
      "There is no difference"
    ],
    "answer": 1,
    "explanation": "Snapshots are fast point-in-time references on the same array (vulnerable to underlying storage failure or ransomware on that system). True backups are independent, ideally offsite/immutable."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which BEST distinguishes synchronous from asynchronous replication?",
    "options": [
      "Synchronous is older; asynchronous is newer",
      "Synchronous confirms remote write before acknowledging; asynchronous returns immediately and replicates in background",
      "They are the same",
      "Asynchronous is always more reliable"
    ],
    "answer": 1,
    "explanation": "Synchronous replication has zero RPO but is sensitive to latency. Asynchronous has lower latency impact but allows some data loss on failover."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Grandfather-Father-Son (GFS) backup rotation typically refers to:",
    "options": [
      "Three separate backup vendors",
      "Daily (son), weekly (father), and monthly (grandfather) backup retention tiers",
      "Three encryption layers",
      "Three separate restore tests"
    ],
    "answer": 1,
    "explanation": "GFS rotates daily, weekly, and monthly backups so recent and historical points are available without storing every daily set forever, balancing cost and recoverability."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is the PRIMARY reason to encrypt backups?",
    "options": [
      "Reduce storage size",
      "Protect confidentiality if the backup media or storage is lost or stolen",
      "Speed up restoration",
      "Eliminate the need for retention policies"
    ],
    "answer": 1,
    "explanation": "Encrypted backups protect data confidentiality if media is misplaced or storage is breached. Key management for backups requires careful planning, especially for long retention periods."
  },
  {
    "domain": "4: Incident Response and Recovery",
    "question": "Which is a critical consideration when recovering from a ransomware attack?",
    "options": [
      "Pay the ransom immediately",
      "Validate that backups are clean before restoring (attackers often pre-position)",
      "Restore quickly to the same image without changes",
      "Reuse the same credentials post-incident"
    ],
    "answer": 1,
    "explanation": "Attackers often dwell in environments before triggering encryption, potentially compromising backups too. Validate backup integrity, hunt for backdoors, and rotate credentials before/after restoration."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which BEST distinguishes a stream cipher from a block cipher?",
    "options": [
      "Stream ciphers encrypt one bit/byte at a time; block ciphers encrypt fixed-size blocks",
      "Block ciphers are always slower",
      "Stream ciphers cannot use keys",
      "Block ciphers do not require IVs"
    ],
    "answer": 0,
    "explanation": "Stream ciphers (e.g., ChaCha20) operate on bits/bytes; block ciphers (e.g., AES) operate on fixed-size blocks (typically 128 bits) requiring modes of operation for streams."
  },
  {
    "domain": "5: Cryptography",
    "question": "Why is Electronic Codebook (ECB) mode generally avoided for encrypting structured data?",
    "options": [
      "It is too slow on modern CPUs",
      "Identical plaintext blocks produce identical ciphertext, revealing patterns",
      "It requires more keys",
      "It cannot use AES"
    ],
    "answer": 1,
    "explanation": "ECB encrypts each block independently — identical plaintext blocks yield identical ciphertext, revealing structure in patterned data (the classic 'ECB penguin' image)."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which is required for Cipher Block Chaining (CBC) mode to encrypt securely?",
    "options": [
      "A 24-bit IV at most",
      "A unique, unpredictable Initialization Vector for each message",
      "Reuse of the IV across messages",
      "No IV at all"
    ],
    "answer": 1,
    "explanation": "CBC requires a unique and unpredictable IV per message. Reusing or predicting IVs enables attacks (e.g., chosen-plaintext leakage in TLS BEAST)."
  },
  {
    "domain": "5: Cryptography",
    "question": "Galois/Counter Mode (GCM) provides which property in addition to confidentiality?",
    "options": [
      "Compression",
      "Authenticated encryption with associated data (AEAD)",
      "Lossless transmission",
      "Forward error correction"
    ],
    "answer": 1,
    "explanation": "GCM is an AEAD mode: it provides both confidentiality and authentication (integrity) in a single operation, with optional authenticated-but-not-encrypted associated data."
  },
  {
    "domain": "5: Cryptography",
    "question": "Counter (CTR) mode converts a block cipher into:",
    "options": [
      "A stream cipher",
      "A hash function",
      "A compression algorithm",
      "A public-key cipher"
    ],
    "answer": 0,
    "explanation": "CTR uses the block cipher to encrypt a counter, producing a keystream XORed with plaintext — effectively turning the block cipher into a stream cipher. Requires unique nonces."
  },
  {
    "domain": "5: Cryptography",
    "question": "An AEAD cipher (authenticated encryption with associated data) primarily protects:",
    "options": [
      "Confidentiality only",
      "Confidentiality and integrity in a single operation",
      "Integrity only",
      "Compression ratio"
    ],
    "answer": 1,
    "explanation": "AEAD modes (GCM, ChaCha20-Poly1305, OCB, CCM) provide both confidentiality and integrity in one operation, reducing the risk of misuse compared to separate encrypt-then-MAC."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which BEST distinguishes salt, nonce, and IV?",
    "options": [
      "They are all the same thing",
      "Salt: per-input random value for hashing; nonce: number used once; IV: initialization value for ciphers",
      "All are required to be secret",
      "All are computed from the key"
    ],
    "answer": 1,
    "explanation": "Salts are used in password hashing to defeat rainbow tables. Nonces are 'number used once' values (e.g., in CTR/GCM). IVs initialize cipher modes (CBC). All three serve to diversify."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which is the PRIMARY purpose of a key derivation function (KDF) like PBKDF2, scrypt, or Argon2?",
    "options": [
      "Encrypt files quickly",
      "Stretch and salt low-entropy inputs (e.g., passwords) into strong keys resistant to brute force",
      "Compress data efficiently",
      "Generate true random numbers"
    ],
    "answer": 1,
    "explanation": "KDFs combine slow iteration (and memory hardness for scrypt/Argon2) with salting to make brute-forcing weak passwords computationally expensive."
  },
  {
    "domain": "5: Cryptography",
    "question": "How does HMAC differ from a plain hash like SHA-256 over the same data?",
    "options": [
      "HMAC includes a secret key to provide authentication",
      "HMAC is faster",
      "HMAC eliminates the need for hash functions",
      "HMAC produces a shorter digest"
    ],
    "answer": 0,
    "explanation": "HMAC is a keyed hash construction providing message authentication. Without the secret key, an attacker cannot generate or verify a valid HMAC, unlike a plain hash."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which BEST distinguishes a MAC from a digital signature?",
    "options": [
      "MACs use asymmetric keys; signatures use symmetric keys",
      "MACs use a shared symmetric key (no non-repudiation); signatures use the signer's private key (provides non-repudiation)",
      "MACs are always shorter",
      "Signatures cannot be verified"
    ],
    "answer": 1,
    "explanation": "Because MAC verifiers also have the key, the MAC cannot prove which party generated it (no non-repudiation). Digital signatures use the signer's private key, providing non-repudiation."
  },
  {
    "domain": "5: Cryptography",
    "question": "What is the minimum RSA key size currently considered acceptable for new deployments?",
    "options": [
      "512 bits",
      "1024 bits",
      "2048 bits",
      "128 bits"
    ],
    "answer": 2,
    "explanation": "Current guidance recommends RSA 2048-bit as a minimum, with 3072-bit or larger for long-term protection. 1024-bit RSA is no longer considered safe."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which is a widely-used elliptic curve for modern cryptographic protocols, valued for performance and security?",
    "options": [
      "RC4-curve",
      "Curve25519",
      "MD5-curve",
      "DES-curve"
    ],
    "answer": 1,
    "explanation": "Curve25519 (and its signature counterpart Ed25519) is widely used in modern protocols (TLS 1.3, SSH, Signal) for performance and resistance to common implementation pitfalls."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which property ensures that compromise of a long-term private key does NOT expose past session keys?",
    "options": [
      "Key length",
      "Perfect Forward Secrecy (PFS)",
      "Symmetric encryption",
      "Compression"
    ],
    "answer": 1,
    "explanation": "PFS, achieved through ephemeral key exchanges (DHE/ECDHE), means each session uses unique ephemeral keys. Compromising the long-term key doesn't decrypt past traffic."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which is a significant improvement of TLS 1.3 over TLS 1.2?",
    "options": [
      "Re-introduction of RC4",
      "Reduced handshake latency and removal of obsolete cipher suites",
      "Removal of cipher choices entirely",
      "Use of plaintext"
    ],
    "answer": 1,
    "explanation": "TLS 1.3 reduces handshake to 1-RTT (or 0-RTT with caveats), removes weak/unsafe cipher suites (RC4, 3DES, MD5, SHA-1), and mandates forward secrecy."
  },
  {
    "domain": "5: Cryptography",
    "question": "Why is certificate chain validation important when accepting a TLS server certificate?",
    "options": [
      "To compress the certificate",
      "To verify the certificate ultimately chains to a trusted root CA",
      "To encrypt the connection faster",
      "To rotate the certificate"
    ],
    "answer": 1,
    "explanation": "Clients build the chain from leaf to a trusted root, verifying each signature, validity period, revocation status, and naming constraints. Any failure should reject the certificate."
  },
  {
    "domain": "5: Cryptography",
    "question": "Why do PKI deployments typically issue end-entity certificates from intermediate CAs rather than directly from the root CA?",
    "options": [
      "Roots are slower at signing",
      "Intermediates can be revoked without compromising the root, limiting blast radius",
      "Intermediates use different algorithms",
      "Roots cannot sign"
    ],
    "answer": 1,
    "explanation": "Keeping the root CA offline and signing only intermediates allows compromise of an intermediate to be revoked without disturbing all previously issued roots and their trust anchors."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which X.509 certificate field lists additional valid hostnames for a server certificate beyond the Common Name?",
    "options": [
      "Issuer",
      "Subject Alternative Name (SAN)",
      "Validity",
      "Public Key"
    ],
    "answer": 1,
    "explanation": "Modern certificate validation requires the hostname to match a SAN entry. Common Name is largely deprecated for hostname validation."
  },
  {
    "domain": "5: Cryptography",
    "question": "Which is a notable risk of using a single wildcard certificate (e.g., *.example.com) across many services?",
    "options": [
      "Wildcard certificates do not exist",
      "Compromise of the certificate's private key exposes every host covered by the wildcard",
      "Wildcards cannot be revoked",
      "They cannot be deployed on web servers"
    ],
    "answer": 1,
    "explanation": "A single shared private key behind many hostnames means one compromise affects all. Granular per-service certificates limit blast radius."
  },
  {
    "domain": "5: Cryptography",
    "question": "Certificate Transparency (CT) logs help mitigate which problem?",
    "options": [
      "Slow certificate issuance",
      "Misissued or unauthorized certificates by CAs going undetected",
      "Inability to revoke certificates",
      "Weak random number generation"
    ],
    "answer": 1,
    "explanation": "CT requires CAs to publish issued certificates to public append-only logs, allowing domain owners to detect unauthorized issuance and the community to audit CA behavior."
  },
  {
    "domain": "5: Cryptography",
    "question": "Why are NIST post-quantum cryptography selections (e.g., ML-KEM/Kyber) important?",
    "options": [
      "They are faster than current algorithms",
      "Quantum computers could eventually break RSA and ECC; PQ algorithms aim to resist quantum attacks",
      "They eliminate the need for any keys",
      "They are required for IPv6"
    ],
    "answer": 1,
    "explanation": "Shor's algorithm on sufficiently large quantum computers would break RSA/ECC. NIST's post-quantum standards (ML-KEM for key exchange, ML-DSA for signatures) aim to resist quantum attack."
  },
  {
    "domain": "5: Cryptography",
    "question": "A birthday attack against a hash function exploits which property?",
    "options": [
      "The hash function's compression ratio",
      "The probability of collision growing faster than intuition suggests as more inputs are tried",
      "The hash function being broken",
      "Use of the wrong key"
    ],
    "answer": 1,
    "explanation": "Due to the birthday paradox, collision probability rises sharply at roughly the square root of the output space, so an n-bit hash provides only ~n/2 bits of collision resistance."
  },
  {
    "domain": "5: Cryptography",
    "question": "Rainbow tables are PRIMARILY a threat against:",
    "options": [
      "Properly salted password hashes",
      "Unsalted password hashes",
      "TLS sessions",
      "IPsec tunnels"
    ],
    "answer": 1,
    "explanation": "Rainbow tables precompute hashes for common passwords. Salting (per-user random values) makes precomputed tables useless because every salt produces a different hash space."
  },
  {
    "domain": "5: Cryptography",
    "question": "A padding oracle attack against CBC mode TLS exploits:",
    "options": [
      "A flaw in symmetric key length",
      "Server responses that distinguish padding errors from other errors, allowing decryption",
      "Excessive entropy in the IV",
      "Inability to use HTTP"
    ],
    "answer": 1,
    "explanation": "Padding oracle attacks (POODLE, Lucky 13) exploit different error responses or timing between padding errors and other errors, enabling attackers to recover plaintext one byte at a time."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which OSI layer is concerned with electrical signals, cable specifications, and physical connectors?",
    "options": [
      "Layer 1 (Physical)",
      "Layer 2 (Data Link)",
      "Layer 3 (Network)",
      "Layer 7 (Application)"
    ],
    "answer": 0,
    "explanation": "Layer 1 handles physical transmission media — voltage, timing, cable, connectors. Hubs, repeaters, and cabling are Layer 1 devices."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which OSI layer establishes, manages, and terminates sessions between applications?",
    "options": [
      "Layer 3 (Network)",
      "Layer 5 (Session)",
      "Layer 6 (Presentation)",
      "Layer 7 (Application)"
    ],
    "answer": 1,
    "explanation": "Layer 5 (Session) manages dialog control and synchronization between communicating applications. Examples include RPC and NetBIOS session services."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which OSI layer is responsible for data translation, character encoding, and traditional encryption between application formats?",
    "options": [
      "Layer 4 (Transport)",
      "Layer 6 (Presentation)",
      "Layer 5 (Session)",
      "Layer 7 (Application)"
    ],
    "answer": 1,
    "explanation": "Layer 6 (Presentation) handles formatting, encoding, and historically encryption between application data formats. In practice these often live in the application or session layers in modern stacks."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which OSI layer is closest to the end user and provides application services like HTTP, SMTP, and DNS?",
    "options": [
      "Layer 4 (Transport)",
      "Layer 5 (Session)",
      "Layer 6 (Presentation)",
      "Layer 7 (Application)"
    ],
    "answer": 3,
    "explanation": "Layer 7 (Application) is where end-user services live: HTTP, FTP, SMTP, DNS, SSH, and others. Most modern protocols span multiple OSI layers."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which layer of the TCP/IP model is responsible for end-to-end transport between hosts?",
    "options": [
      "Link",
      "Internet",
      "Transport",
      "Application"
    ],
    "answer": 2,
    "explanation": "The TCP/IP model has four layers: Link, Internet, Transport, Application. The Transport layer (TCP, UDP) provides end-to-end service between hosts."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the KEY difference between TCP and UDP?",
    "options": [
      "TCP is connectionless; UDP is connection-oriented",
      "TCP is connection-oriented and reliable; UDP is connectionless and unreliable",
      "TCP cannot use ports; UDP can",
      "UDP uses sequence numbers; TCP does not"
    ],
    "answer": 1,
    "explanation": "TCP provides reliable, ordered, connection-oriented delivery. UDP is connectionless with no delivery guarantees, used where speed and low overhead matter (DNS, VoIP, gaming)."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which protocol does the 'ping' command primarily rely on?",
    "options": [
      "TCP",
      "UDP",
      "ICMP",
      "ARP"
    ],
    "answer": 2,
    "explanation": "Ping uses ICMP Echo Request and Echo Reply messages. ICMP also carries Time Exceeded (used by traceroute) and Destination Unreachable messages."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which port does SMTP use for unencrypted mail submission between mail servers?",
    "options": [
      "25",
      "143",
      "465",
      "993"
    ],
    "answer": 0,
    "explanation": "TCP 25 is SMTP's classic port for server-to-server mail. Port 587 is for authenticated submission; 465 is legacy SMTP-over-TLS; 143 is IMAP."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which port does DNS primarily use for standard queries?",
    "options": [
      "53",
      "80",
      "443",
      "8080"
    ],
    "answer": 0,
    "explanation": "DNS uses port 53 (UDP for small queries; TCP for zone transfers and large responses). DNS over TLS uses 853, DNS over HTTPS uses 443."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which port does SNMP traditionally use for queries?",
    "options": [
      "161",
      "162",
      "443",
      "22"
    ],
    "answer": 0,
    "explanation": "SNMP uses UDP 161 for queries from manager to agent. UDP 162 is for trap notifications from agents to managers."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which port does Remote Desktop Protocol (RDP) traditionally use?",
    "options": [
      "22",
      "23",
      "443",
      "3389"
    ],
    "answer": 3,
    "explanation": "RDP uses TCP 3389. Exposing 3389 to the internet is a common attack target — restrict via VPN, jump hosts, or geographic ACLs."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which port pair is associated with LDAP and LDAPS?",
    "options": [
      "389 and 636",
      "21 and 22",
      "80 and 443",
      "143 and 993"
    ],
    "answer": 0,
    "explanation": "LDAP uses TCP 389 (unencrypted) and LDAPS uses TCP 636 (TLS-wrapped). StartTLS over 389 is another encrypted option."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "What does the CIDR notation /24 represent?",
    "options": [
      "A network with 256 IP addresses (subnet mask 255.255.255.0)",
      "A network with 16 IP addresses",
      "A single host",
      "A class A network"
    ],
    "answer": 0,
    "explanation": "/24 means 24 mask bits, leaving 8 host bits = 256 addresses (254 usable for hosts in IPv4 after subtracting network and broadcast)."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which of the following is a private IPv4 address range per RFC 1918?",
    "options": [
      "8.0.0.0/8",
      "10.0.0.0/8",
      "100.0.0.0/8",
      "200.0.0.0/8"
    ],
    "answer": 1,
    "explanation": "RFC 1918 private ranges: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. These are not routable on the public internet."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is a fundamental difference between IPv4 and IPv6?",
    "options": [
      "IPv6 uses 32-bit addresses",
      "IPv6 uses 128-bit addresses and removes the practical need for NAT in many deployments",
      "IPv4 has no broadcast address",
      "IPv6 has no addressing scheme"
    ],
    "answer": 1,
    "explanation": "IPv6's 128-bit address space dramatically expands available addresses and changes architectural patterns (autoconfiguration, no NAT typically), but introduces new security considerations."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "How many bits are in a standard IEEE 802 MAC address?",
    "options": [
      "32 bits",
      "48 bits",
      "64 bits",
      "128 bits"
    ],
    "answer": 1,
    "explanation": "MAC addresses are 48 bits (6 bytes), typically displayed as 12 hex digits. The first 24 bits identify the manufacturer (OUI); the remaining 24 identify the device."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which VLAN attack technique exploits trunk-port configurations to send traffic to other VLANs?",
    "options": [
      "DNS poisoning",
      "VLAN hopping (e.g., double tagging or switch spoofing)",
      "MAC flooding",
      "DHCP starvation"
    ],
    "answer": 1,
    "explanation": "VLAN hopping uses double tagging (sending frames with two 802.1Q tags) or switch spoofing (impersonating a switch to negotiate trunking) to access other VLANs."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which protocol tags Ethernet frames with VLAN information for trunk links?",
    "options": [
      "802.11",
      "802.1Q",
      "802.3",
      "802.1X"
    ],
    "answer": 1,
    "explanation": "IEEE 802.1Q inserts a 4-byte tag (including the VLAN ID) into Ethernet frames so trunk ports can carry traffic for multiple VLANs."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "What is the PRIMARY purpose of Spanning Tree Protocol (STP)?",
    "options": [
      "Authenticate users on switches",
      "Prevent Layer 2 loops in switched networks by blocking redundant paths",
      "Encrypt traffic between switches",
      "Assign IP addresses"
    ],
    "answer": 1,
    "explanation": "STP detects loops and blocks redundant links, electing a root bridge and computing a loop-free topology. Variants include RSTP and MSTP for faster convergence."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which routing protocol is primarily used between autonomous systems on the internet?",
    "options": [
      "OSPF (interior gateway protocol)",
      "BGP (exterior gateway protocol)",
      "RIP (interior gateway protocol)",
      "EIGRP (interior gateway protocol)"
    ],
    "answer": 1,
    "explanation": "BGP is the internet's exterior gateway protocol, exchanging routing information between autonomous systems. OSPF, EIGRP, and RIP are interior gateway protocols within an AS."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "BGP hijacking attacks rely on:",
    "options": [
      "Compromising end-user DNS settings",
      "Announcing routes for IP prefixes the attacker doesn't own, redirecting traffic",
      "Brute-forcing user passwords",
      "Exploiting Bluetooth weaknesses"
    ],
    "answer": 1,
    "explanation": "BGP lacks built-in authentication of announcements. RPKI and route-origin validation help mitigate accidental or malicious route hijacks."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "DNS over TLS (DoT) and DNS over HTTPS (DoH) primarily address which concern?",
    "options": [
      "DNS query speed only",
      "Confidentiality and integrity of DNS queries against passive observers and tampering",
      "DNS server costs",
      "IPv6 transition"
    ],
    "answer": 1,
    "explanation": "DoT (port 853) and DoH (port 443) encrypt DNS queries, preventing on-path observers from seeing queried hostnames and protecting against tampering. They introduce centralization concerns."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which BEST distinguishes a recursive DNS resolver from an authoritative DNS server?",
    "options": [
      "Recursive servers answer for specific zones; authoritative servers query others",
      "Recursive resolvers query others on behalf of clients; authoritative servers hold the actual records for specific zones",
      "They are the same",
      "Authoritative servers cannot cache"
    ],
    "answer": 1,
    "explanation": "Recursive resolvers (e.g., a corporate or ISP resolver) query the DNS hierarchy on behalf of clients. Authoritative servers hold the canonical records for the zones they serve."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which BEST distinguishes NetFlow from sFlow?",
    "options": [
      "NetFlow samples packets; sFlow records every flow exhaustively",
      "NetFlow records exhaustively (typically); sFlow uses statistical sampling for scalability",
      "They are identical protocols",
      "Both are obsolete"
    ],
    "answer": 1,
    "explanation": "NetFlow typically aggregates per-flow records. sFlow uses statistical packet sampling, providing good visibility at high throughput with lower overhead but less precision per-flow."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which BEST distinguishes a SPAN/mirror port from a network tap for capturing traffic?",
    "options": [
      "Taps are software; SPAN ports are hardware",
      "SPAN mirrors traffic via switch software (may drop under load); taps are passive hardware that copy every packet",
      "Taps cannot capture encrypted traffic",
      "They are interchangeable"
    ],
    "answer": 1,
    "explanation": "SPAN ports rely on switch resources and may drop frames under heavy load. Network taps physically split signals and capture all traffic without affecting the live path."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Wireshark and tcpdump are PRIMARILY used for:",
    "options": [
      "Encrypting traffic",
      "Capturing and analyzing network packets for troubleshooting and forensics",
      "Patching operating systems",
      "Authenticating users"
    ],
    "answer": 1,
    "explanation": "Both tools capture packets via pcap libraries. Wireshark provides a graphical analyzer with protocol decoders. tcpdump is a command-line capture tool, commonly used on servers."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which proxy sits between internal clients and the internet, often used for filtering and caching outbound traffic?",
    "options": [
      "Reverse proxy",
      "Forward proxy",
      "Transparent proxy without forwarding",
      "Round-robin DNS"
    ],
    "answer": 1,
    "explanation": "Forward proxies front internal clients reaching external services. Reverse proxies front external clients reaching internal services. Transparent proxies act without explicit client config."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which security benefit do Content Delivery Networks (CDNs) typically provide beyond performance?",
    "options": [
      "Replacing internal firewalls",
      "DDoS absorption at the edge and WAF capabilities for protected origins",
      "Stronger encryption keys",
      "Replacement of identity providers"
    ],
    "answer": 1,
    "explanation": "CDNs absorb DDoS at distributed edge nodes and commonly offer WAF features, bot management, and TLS termination, shielding origin infrastructure."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which rule should appear at the END of a properly designed firewall rule set?",
    "options": [
      "Allow all traffic",
      "Deny all traffic (default deny)",
      "Log everything and continue",
      "Allow ICMP from any to any"
    ],
    "answer": 1,
    "explanation": "Defense-in-depth firewalls implement default deny: anything not explicitly allowed by earlier rules is blocked by the final deny-all. Explicit permits come above the deny."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which BEST distinguishes a site-to-site VPN from a remote-access VPN?",
    "options": [
      "Site-to-site is always faster",
      "Site-to-site connects networks; remote-access connects individual user devices to a network",
      "They are the same technology",
      "Remote-access uses UDP only"
    ],
    "answer": 1,
    "explanation": "Site-to-site VPNs (often IPsec) tunnel between gateways at two sites. Remote-access VPNs (IPsec, SSL/TLS, WireGuard) connect individual user devices to a corporate network."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is a security concern with split-tunnel VPN configurations?",
    "options": [
      "VPN traffic is always intercepted",
      "Traffic outside the tunnel bypasses corporate security controls, reducing visibility",
      "VPN performance is always degraded",
      "Split tunneling is illegal"
    ],
    "answer": 1,
    "explanation": "Split tunneling routes only corporate-bound traffic through the VPN; everything else goes directly. This reduces VPN load but exposes the endpoint to threats and bypasses corporate filtering."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which BEST distinguishes WPA2-Enterprise from WPA2-PSK?",
    "options": [
      "Enterprise uses no encryption",
      "Enterprise uses 802.1X with per-user authentication; PSK uses a single shared key",
      "They are identical",
      "PSK is more secure for enterprises"
    ],
    "answer": 1,
    "explanation": "WPA2-Enterprise authenticates each user via 802.1X (often RADIUS-backed) with per-user keys, supporting deprovisioning. PSK shares one key across all users with weaker accountability."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which EAP method uses certificates on both client and server for the strongest mutual authentication?",
    "options": [
      "EAP-PEAP",
      "EAP-TLS",
      "EAP-MD5",
      "EAP-MSCHAPv2"
    ],
    "answer": 1,
    "explanation": "EAP-TLS requires certificates on both sides, providing strong mutual authentication. PEAP and EAP-TTLS typically use a server certificate and inner credential-based authentication."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "Which is the PRIMARY purpose of a wireless site survey?",
    "options": [
      "Replace physical security guards",
      "Plan AP placement, channels, and power levels for adequate coverage and acceptable interference",
      "Generate compliance reports",
      "Select Wi-Fi product vendor"
    ],
    "answer": 1,
    "explanation": "Site surveys (predictive or passive) inform AP placement, channel plans, and power levels to balance coverage, capacity, and interference, including rogue-AP detection scoping."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "An 'evil twin' wireless attack involves:",
    "options": [
      "A malicious VLAN",
      "A rogue access point impersonating a legitimate SSID to lure clients",
      "A DNS poisoning attack",
      "A SYN flood against the AP"
    ],
    "answer": 1,
    "explanation": "Evil twin APs broadcast the SSID of a legitimate network, sometimes with stronger signal, to lure clients into connecting and capturing credentials or man-in-the-middling traffic."
  },
  {
    "domain": "6: Network and Communications Security",
    "question": "The KRACK attack against WPA2 exploited:",
    "options": [
      "A weakness in the WEP cipher",
      "A flaw in the WPA2 four-way handshake allowing key reinstallation",
      "A buffer overflow in the AP firmware",
      "A poor random number generator in the kernel"
    ],
    "answer": 1,
    "explanation": "KRACK (Key Reinstallation Attack) abused the WPA2 four-way handshake's message replay to force nonce reuse, breaking confidentiality. Patches addressed the issue in supplicant code."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "A drive-by download attack typically delivers malware via:",
    "options": [
      "A USB drive left in a parking lot",
      "A compromised or malicious website that exploits the browser on visit",
      "An email phishing message only",
      "A man-in-the-middle on Wi-Fi"
    ],
    "answer": 1,
    "explanation": "Drive-by downloads exploit browser or plugin vulnerabilities to deliver malware when a user visits a compromised or malicious site, often without user interaction beyond the visit."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "A watering hole attack involves:",
    "options": [
      "Sending personalized spear-phishing emails",
      "Compromising a website frequented by the target audience to deliver payloads",
      "Calling targets and impersonating IT",
      "Leaving USB drives in parking lots"
    ],
    "answer": 1,
    "explanation": "Watering hole attacks compromise sites the targets are likely to visit (industry forums, vendor sites), often with payloads that only execute against specific victims."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "A USB drop attack typically relies on:",
    "options": [
      "Drive-by browser exploits",
      "Victims plugging found USB drives into their workstations, executing the payload",
      "Sending phishing emails",
      "Brute-forcing the AP password"
    ],
    "answer": 1,
    "explanation": "Attackers seed USB drives in target areas. Curious finders plug them in, sometimes auto-running payloads via shortcut tricks, HID emulation (BadUSB), or social engineering content."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "A supply chain attack compromises:",
    "options": [
      "The end-user directly via phishing",
      "A trusted upstream vendor, library, or update mechanism to reach downstream targets",
      "Only physical shipping logistics",
      "Only one organization at a time"
    ],
    "answer": 1,
    "explanation": "Supply chain attacks (SolarWinds, dependency confusion, malicious npm packages) compromise upstream trusted components so downstream consumers receive the malicious version through normal update channels."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which BEST distinguishes polymorphic from metamorphic malware?",
    "options": [
      "Polymorphic encrypts itself differently each time; metamorphic rewrites its own code",
      "Polymorphic deletes files; metamorphic does not",
      "Polymorphic is older; metamorphic is newer",
      "Polymorphic is benign; metamorphic is malicious"
    ],
    "answer": 0,
    "explanation": "Polymorphic malware encrypts/obfuscates its payload with different keys each infection but the underlying code is similar. Metamorphic malware rewrites its own code each generation, evading signature detection more aggressively."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Fileless malware (Living off the Land) primarily evades detection by:",
    "options": [
      "Running entirely from disk-based executables",
      "Operating in memory or via legitimate system tools (PowerShell, WMI) without dropping files",
      "Encrypting all files on disk",
      "Requiring administrator install"
    ],
    "answer": 1,
    "explanation": "Fileless techniques avoid traditional file-based detection by living in memory and abusing legitimate tools. EDR with behavioral monitoring is more effective than file-scanning AV here."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which BEST distinguishes heuristic from signature-based antivirus detection?",
    "options": [
      "Heuristics use pattern matching on known samples; signatures use behavioral inference",
      "Heuristics use behavior or generic patterns to detect unknown samples; signatures match known-bad byte patterns",
      "They are identical",
      "Heuristics never produce false positives"
    ],
    "answer": 1,
    "explanation": "Signature detection requires a pre-existing signature for known threats. Heuristics infer maliciousness from behavior or generic patterns, catching variants and novel samples (at the cost of more false positives)."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Behavioral analysis on endpoints can detect attacks that signature-based tools miss because:",
    "options": [
      "It looks only at file hashes",
      "It watches actions (process trees, registry, network) rather than relying on known-bad files",
      "It blocks all unknown software",
      "It requires sandboxing every file"
    ],
    "answer": 1,
    "explanation": "Behavioral analysis flags suspicious sequences (unusual parent/child processes, lateral movement, credential dumping) regardless of file signature, catching novel and fileless attacks."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Data Execution Prevention (DEP) and the NX bit primarily mitigate:",
    "options": [
      "SQL injection",
      "Code execution from data pages (e.g., stack buffer overflows running attacker payloads)",
      "Brute-force password attacks",
      "DNS poisoning"
    ],
    "answer": 1,
    "explanation": "DEP/NX marks memory pages as non-executable, preventing CPU execution of injected payloads in data pages. Combined with ASLR, this raises the bar for memory corruption exploits."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Address Space Layout Randomization (ASLR) primarily defeats exploits that depend on:",
    "options": [
      "Knowing memory addresses of code or data",
      "Weak password complexity",
      "Plaintext network protocols",
      "Lack of patching"
    ],
    "answer": 0,
    "explanation": "ASLR randomizes the base addresses of executables, libraries, stack, and heap each run. Exploits relying on fixed addresses (return-to-libc, ROP gadget chains) fail without an info leak."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Stack canaries primarily detect:",
    "options": [
      "Heap corruption",
      "Stack buffer overflows by placing a known value between local data and the return address",
      "Heap spray attacks",
      "SQL injection"
    ],
    "answer": 1,
    "explanation": "Stack canaries are random values placed before the return address. The compiler verifies the canary before function return; mismatch indicates corruption and the program aborts."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Return-Oriented Programming (ROP) defeats DEP by:",
    "options": [
      "Re-enabling executable stack pages",
      "Chaining together existing executable code snippets ('gadgets') in the program to perform arbitrary operations",
      "Replacing the kernel",
      "Disabling ASLR"
    ],
    "answer": 1,
    "explanation": "ROP chains short instruction sequences (gadgets) ending in returns from existing executable memory to execute attacker-chosen operations without needing to inject new executable code."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "A format string vulnerability arises when:",
    "options": [
      "User input is used as the format string in functions like printf()",
      "Strings are too long",
      "Memory is properly bounded",
      "Encryption keys are reused"
    ],
    "answer": 0,
    "explanation": "When user input controls the format string (e.g., printf(user_input)), attackers can use format specifiers (%x, %n) to read or write arbitrary memory."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "An integer overflow vulnerability arises when:",
    "options": [
      "Two strings are concatenated",
      "An arithmetic operation produces a value outside the variable's representable range, often leading to memory corruption",
      "A file is deleted",
      "Encryption is too strong"
    ],
    "answer": 1,
    "explanation": "Integer overflows can cause smaller-than-expected allocations, bypassed bounds checks, or unexpected program behavior. Often precedes a buffer overflow or other memory safety bug."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "A Time-of-Check to Time-of-Use (TOCTOU) race condition exploits:",
    "options": [
      "A delay between security check and use of a resource, where the resource is modified in between",
      "Slow encryption performance",
      "Weak password reuse",
      "Insufficient backup frequency"
    ],
    "answer": 0,
    "explanation": "TOCTOU bugs allow attackers to change a resource (file, symlink, permission) between the validation step and the operation that uses it, bypassing security checks."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Command injection vulnerabilities arise when:",
    "options": [
      "A user changes their password",
      "User input is concatenated into a shell command without proper sanitization",
      "A backup is encrypted",
      "A network is segmented"
    ],
    "answer": 1,
    "explanation": "Command injection happens when untrusted input is incorporated into a system shell call (e.g., system(\"ping \" + user_input)). Defenses: avoid shell calls, use parameterized exec APIs, validate input."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "LDAP injection vulnerabilities arise when:",
    "options": [
      "LDAP servers are not encrypted",
      "User input is incorporated into LDAP queries without proper escaping",
      "LDAP is used over UDP",
      "LDAP servers run on Windows"
    ],
    "answer": 1,
    "explanation": "LDAP injection lets attackers manipulate the search filter to bypass authentication or extract data. Defenses include parameterized APIs and strict input validation/escaping."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "XML External Entity (XXE) attacks exploit:",
    "options": [
      "Weak XML compression",
      "XML parsers that resolve external entity references, allowing file disclosure or SSRF",
      "Broken XML formatting",
      "Insecure cookies"
    ],
    "answer": 1,
    "explanation": "XXE abuses XML parsers configured to resolve external entities, enabling reading of server files, internal network probing, or DoS. Mitigation: disable external entity resolution."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Server-Side Request Forgery (SSRF) allows an attacker to:",
    "options": [
      "Steal user passwords directly from the browser",
      "Coerce the server into making requests to internal or unintended destinations",
      "Brute-force the AP password",
      "Decrypt TLS traffic"
    ],
    "answer": 1,
    "explanation": "SSRF lets attackers reach internal services, cloud metadata endpoints, or external systems via the vulnerable server. Mitigation: validate URLs, deny private ranges, use allowlists."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "An open redirect vulnerability allows an attacker to:",
    "options": [
      "Encrypt server traffic",
      "Trick users into visiting attacker-controlled URLs via the trusted application's redirect functionality",
      "Decrypt session tokens",
      "Execute code on the server"
    ],
    "answer": 1,
    "explanation": "Open redirects accept untrusted URL parameters and forward users to them, enabling phishing because the initial URL appears to be on a trusted domain. Mitigation: allowlist redirect targets."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Insecure Direct Object Reference (IDOR) vulnerabilities arise when:",
    "options": [
      "URLs are too long",
      "Object identifiers (e.g., user IDs) are exposed and the server fails to enforce authorization checks",
      "Servers use HTTPS",
      "Cookies are too short"
    ],
    "answer": 1,
    "explanation": "IDOR allows attackers to change an identifier (?id=123 to ?id=124) and access another user's data because the application trusts the client-supplied ID without verifying ownership."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Insecure deserialization can lead to:",
    "options": [
      "Improved network performance",
      "Remote code execution by feeding crafted serialized objects to the parser",
      "Better encryption",
      "Reduced storage usage"
    ],
    "answer": 1,
    "explanation": "Deserializing untrusted data can instantiate dangerous gadget chains that execute attacker-chosen code. Mitigations: avoid deserialization of untrusted data, use signed/encrypted formats, or use restrictive parsers."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "A Cross-Origin Resource Sharing (CORS) misconfiguration can lead to:",
    "options": [
      "Improved web performance",
      "Attacker origins being able to read responses from the protected application",
      "Stronger TLS",
      "Faster DNS lookups"
    ],
    "answer": 1,
    "explanation": "Overly permissive CORS (e.g., Access-Control-Allow-Origin reflecting any origin + Allow-Credentials true) lets malicious sites issue authenticated requests and read responses, enabling data theft."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Accepting JWT tokens with 'alg: none' enables:",
    "options": [
      "Better performance",
      "Trivial forgery of tokens because no signature verification occurs",
      "Quantum resistance",
      "Faster authentication"
    ],
    "answer": 1,
    "explanation": "When a parser accepts 'alg: none', attackers can forge tokens with any claims because the signature is empty. Always whitelist expected algorithms server-side."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "A session fixation attack works by:",
    "options": [
      "Brute-forcing session tokens",
      "Forcing a victim to use a session ID the attacker already knows, then hijacking the authenticated session",
      "Encrypting all sessions",
      "Logging out users prematurely"
    ],
    "answer": 1,
    "explanation": "If the application doesn't issue a new session ID after authentication, an attacker who plants a known session ID on the victim can take over the session once the victim logs in."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Clickjacking attacks trick users into clicking on:",
    "options": [
      "A spam email link",
      "Invisible or disguised UI elements rendered over a target application via iframe overlay",
      "Their own desktop wallpaper",
      "A blank page"
    ],
    "answer": 1,
    "explanation": "Clickjacking overlays a target app in an invisible iframe under attacker-controlled UI, so user clicks are routed to the underlying app. Mitigations: X-Frame-Options or CSP frame-ancestors."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "HTTP Strict Transport Security (HSTS) tells browsers to:",
    "options": [
      "Always use HTTP for the site",
      "Only access the site over HTTPS for a specified duration",
      "Disable cookies",
      "Block JavaScript"
    ],
    "answer": 1,
    "explanation": "HSTS instructs browsers to refuse HTTP connections to the site for the declared max-age, preventing downgrade attacks and SSL stripping after first visit."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Subresource Integrity (SRI) protects against:",
    "options": [
      "DNS poisoning of internal hosts",
      "Tampering with third-party scripts or stylesheets loaded via CDN by verifying their cryptographic hash",
      "Brute-force of admin passwords",
      "Buffer overflows in the OS"
    ],
    "answer": 1,
    "explanation": "SRI attaches a hash to <script> and <link> tags loaded from third parties; the browser refuses to load the resource if the content doesn't match the expected hash."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Mobile applications often check for jailbreak/root status because:",
    "options": [
      "Jailbroken/rooted devices may have weakened sandboxing and tampered runtime",
      "Jailbreak detection improves battery life",
      "It speeds up the app",
      "It is required by every app store"
    ],
    "answer": 0,
    "explanation": "Jailbreaking/rooting removes OS protections an app may rely on for secure data storage and tamper resistance. Sensitive apps (banking, healthcare) often refuse to run on such devices."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Mobile OS app sandboxing primarily ensures that:",
    "options": [
      "Apps cannot use the network",
      "Apps cannot directly access another app's data without explicit OS-mediated permission",
      "Apps cannot use the camera",
      "Apps must use a specific language"
    ],
    "answer": 1,
    "explanation": "Both iOS and Android isolate apps with per-app storage and OS-mediated permissions. Apps cannot read another app's private data without going through declared IPC or permissions."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is a BEST practice for handling mobile app permission requests?",
    "options": [
      "Request all possible permissions on install",
      "Request only the minimum required permissions, just-in-time when needed",
      "Hide permission requests from the user",
      "Use undocumented APIs"
    ],
    "answer": 1,
    "explanation": "Least-privilege permission requests, with just-in-time prompts at the point of need, build user trust and reduce attack surface if the app is compromised."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which BEST distinguishes COPE from BYOD?",
    "options": [
      "They are identical",
      "COPE is corporate-owned, personally-enabled (org owns, allows personal use); BYOD is employee-owned",
      "BYOD eliminates security needs",
      "COPE prohibits any personal use"
    ],
    "answer": 1,
    "explanation": "COPE devices are owned by the organization with allowed personal use, simplifying control. BYOD shifts ownership to the employee, reducing capital cost but complicating security. COBO is corporate-owned, business-only."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "A container escape vulnerability allows:",
    "options": [
      "Containers to run faster",
      "Code in a container to break out and execute on the host or other containers",
      "Better container compression",
      "Stronger encryption"
    ],
    "answer": 1,
    "explanation": "Container escapes (kernel vulnerabilities, misconfigured capabilities, privileged containers, host mount abuse) break the isolation boundary, threatening the host and all colocated containers."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Kubernetes RBAC primarily controls:",
    "options": [
      "Container CPU usage",
      "Which subjects (users, service accounts) can perform which actions on which Kubernetes resources",
      "Network bandwidth",
      "Storage encryption"
    ],
    "answer": 1,
    "explanation": "Kubernetes RBAC defines roles (permissions) and bindings (who has them), scoped to namespaces or cluster-wide. Misconfiguration is a leading cause of cluster compromise."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is the BEST practice for handling secrets used by containerized applications?",
    "options": [
      "Bake secrets into the container image",
      "Inject secrets at runtime from a managed secrets store, not into images",
      "Print secrets to container logs",
      "Use the same secret across all environments"
    ],
    "answer": 1,
    "explanation": "Secrets in images leak via image registries, layer history, and CI logs. Runtime injection from a secrets manager (with rotation and audit) is the standard pattern."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is a defining priority of Industrial Control System (ICS / SCADA) security compared to typical IT?",
    "options": [
      "Confidentiality is always paramount",
      "Availability and safety are often the highest priorities; downtime can have physical consequences",
      "Patches can be applied at any time",
      "Vendors only support modern protocols"
    ],
    "answer": 1,
    "explanation": "OT environments prioritize availability and physical safety. Patches often require scheduled maintenance windows, and changes can have life-safety implications, inverting common IT trade-offs."
  },
  {
    "domain": "7: Systems and Application Security",
    "question": "Which is a common challenge with patching embedded IoT or OT devices?",
    "options": [
      "Patches are too frequent to apply",
      "Devices may have limited update mechanisms, no remote management, or lack vendor support for the device's lifetime",
      "Patches are always reversible",
      "Patches improve performance"
    ],
    "answer": 1,
    "explanation": "Many embedded devices lack robust update mechanisms or are abandoned by vendors before reaching end of service life. Network isolation and compensating controls are often required."
  }
];
