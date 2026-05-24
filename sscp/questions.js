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
  }
];
