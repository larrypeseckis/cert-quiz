window.QUESTIONS = [
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes structured data?",
    "options": [
      "Free-form text without organization",
      "Data organized into predefined rows and columns with a schema",
      "Audio and video files only",
      "Random binary data"
    ],
    "answer": 1,
    "explanation": "Structured data fits a predefined schema (rows/columns, tables) and is easily queried with languages like SQL. Examples: relational database tables, spreadsheets."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is an example of unstructured data?",
    "options": [
      "A database table of customers",
      "Free-form email messages and PDF documents",
      "A CSV export of sales",
      "An XML invoice"
    ],
    "answer": 1,
    "explanation": "Unstructured data lacks a predefined data model: emails, documents, audio, video, images. It often requires specialized processing (NLP, image recognition) to extract value."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which format is BEST described as semi-structured?",
    "options": [
      "A relational table",
      "A JSON document with nested fields and varying keys",
      "A scanned image",
      "A raw audio recording"
    ],
    "answer": 1,
    "explanation": "Semi-structured data has self-describing structure (tags, keys) but no rigid schema. JSON, XML, and YAML are typical examples."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes the CSV file format?",
    "options": [
      "A binary format optimized for analytics",
      "A plain-text format with rows on separate lines and values separated by a delimiter",
      "A proprietary spreadsheet format",
      "A graph database format"
    ],
    "answer": 1,
    "explanation": "CSV (Comma-Separated Values) stores tabular data in plain text. Simple, portable, but lacks type information, nesting, and efficient compression."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes JSON?",
    "options": [
      "A tabular row/column format",
      "A human-readable text format using key/value pairs and nested objects/arrays",
      "A columnar binary format",
      "A graph format only"
    ],
    "answer": 1,
    "explanation": "JSON (JavaScript Object Notation) is widely used for APIs and config files. Supports strings, numbers, booleans, null, objects, and arrays."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes XML?",
    "options": [
      "A row-oriented database format",
      "A text-based markup format using nested tags, often used for enterprise data exchange",
      "A binary serialization format",
      "A streaming protocol"
    ],
    "answer": 1,
    "explanation": "XML uses opening/closing tags to mark up data hierarchically. More verbose than JSON; common in older enterprise integrations and configuration."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a defining characteristic of the Parquet file format?",
    "options": [
      "Row-oriented plain text",
      "Columnar binary format optimized for analytics workloads",
      "A NoSQL document format",
      "A relational SQL dialect"
    ],
    "answer": 1,
    "explanation": "Parquet stores data column-by-column, enabling efficient compression and queries that scan only needed columns. Widely used in data lakes and analytics platforms."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a key feature of the Avro file format?",
    "options": [
      "Schema embedded with the data, supporting evolution",
      "Row-by-row plain text",
      "Only stores integers",
      "Exclusively used in spreadsheets"
    ],
    "answer": 0,
    "explanation": "Avro is a binary format that embeds its schema with the data, supporting schema evolution. Common in Kafka pipelines and Hadoop ecosystems."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a defining characteristic of a relational database (RDBMS)?",
    "options": [
      "Schemaless data only",
      "Data organized into tables with defined relationships, queried with SQL",
      "Storage in plain text files only",
      "Designed only for graph traversal"
    ],
    "answer": 1,
    "explanation": "RDBMS uses tables with rows, columns, and defined keys/relationships. Examples: PostgreSQL, MySQL, SQL Server, Oracle. ACID transactions are typical."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which type of NoSQL database stores data as JSON-like documents and is commonly represented by MongoDB?",
    "options": [
      "Graph database",
      "Document database",
      "Columnar database",
      "Key-value store"
    ],
    "answer": 1,
    "explanation": "Document databases store flexible JSON-like documents. MongoDB, Couchbase, and Firestore are examples. Schema can vary per document."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which NoSQL category is best represented by Redis and is optimized for fast lookups by key?",
    "options": [
      "Document database",
      "Graph database",
      "Key-value store",
      "Time-series database"
    ],
    "answer": 2,
    "explanation": "Key-value stores map keys to values with minimal overhead. Redis, Memcached, and DynamoDB (in basic mode) are examples. Excellent for caching."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which NoSQL category is best suited for analyzing relationships between entities and is represented by Neo4j?",
    "options": [
      "Document database",
      "Key-value store",
      "Graph database",
      "Time-series database"
    ],
    "answer": 2,
    "explanation": "Graph databases store nodes and edges, optimized for traversing relationships. Neo4j and Amazon Neptune are common examples. Strong for fraud detection, social networks, recommendations."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which database type stores data by column rather than by row, optimizing analytical queries?",
    "options": [
      "Document database",
      "Wide-column / columnar database",
      "Key-value store",
      "Graph database"
    ],
    "answer": 1,
    "explanation": "Columnar stores (Cassandra, HBase, ClickHouse) organize data by column, accelerating analytical queries that aggregate over many rows but few columns."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a defining characteristic of OLTP systems?",
    "options": [
      "Batch-oriented workloads over months of history",
      "High-volume short transactions with strict consistency",
      "Read-only analytical workloads",
      "Manual data entry only"
    ],
    "answer": 1,
    "explanation": "Online Transaction Processing systems handle high-volume short transactions (insert/update/delete) with strong consistency. Examples: payment processors, e-commerce order systems."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a defining characteristic of OLAP systems?",
    "options": [
      "Optimized for single-record updates",
      "Optimized for complex analytical queries over large historical datasets",
      "Real-time mobile transactions",
      "Embedded device storage"
    ],
    "answer": 1,
    "explanation": "Online Analytical Processing systems serve complex aggregations over historical data, supporting reporting, dashboards, and analytics. Often columnar-stored."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST distinguishes OLTP from OLAP workloads?",
    "options": [
      "OLTP is analytical, OLAP is transactional",
      "OLTP focuses on transactional reads/writes; OLAP focuses on analytical queries over aggregated data",
      "They are identical",
      "Only OLTP supports SQL"
    ],
    "answer": 1,
    "explanation": "OLTP optimizes for many small transactions with low latency. OLAP optimizes for fewer, more complex queries scanning large data. Data warehouses bridge them via ETL."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is the PRIMARY purpose of a data warehouse?",
    "options": [
      "Process individual transactions in real time",
      "Centralize integrated, historical data optimized for analytics and reporting",
      "Replace operational systems",
      "Store unstructured social media data"
    ],
    "answer": 1,
    "explanation": "Data warehouses centralize cleaned, integrated, historical data structured for analytical queries. They typically receive data via ETL from operational sources."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes a data lake?",
    "options": [
      "A highly normalized RDBMS",
      "A storage repository holding raw data in its native format until needed",
      "A single OLTP database",
      "A spreadsheet"
    ],
    "answer": 1,
    "explanation": "Data lakes store raw structured, semi-structured, and unstructured data at scale, typically on cheap object storage. Schema is applied on read (schema-on-read)."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "What does a data lakehouse combine?",
    "options": [
      "A lake without any structure",
      "Data lake storage flexibility with data warehouse structure, transactions, and SQL performance",
      "Two physical lakes",
      "Only relational tables"
    ],
    "answer": 1,
    "explanation": "Lakehouses (Databricks Delta Lake, Apache Iceberg, Apache Hudi) add ACID transactions, schemas, and warehouse-class performance on top of cheap data lake storage."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes a data mart?",
    "options": [
      "A storefront for selling data",
      "A subset of a data warehouse focused on a specific business unit or subject area",
      "A backup of a data lake",
      "A graph database"
    ],
    "answer": 1,
    "explanation": "Data marts narrow the scope of a warehouse to a specific audience (e.g., marketing, finance), making queries simpler and faster for that team."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "What does ETL stand for in data integration?",
    "options": [
      "Encode, Transmit, Log",
      "Extract, Transform, Load",
      "Edit, Test, Launch",
      "Extract, Translate, Link"
    ],
    "answer": 1,
    "explanation": "Extract (from source), Transform (clean and reshape), Load (into destination). Classic for loading data warehouses from operational systems."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "How does ELT differ from ETL in sequence?",
    "options": [
      "ELT loads data before transforming it, leveraging destination compute",
      "ELT transforms before extracting",
      "ELT does not load data",
      "They are sequence-independent"
    ],
    "answer": 0,
    "explanation": "ELT loads raw data into the destination first (often a powerful warehouse), then transforms in place. Common with modern cloud warehouses (Snowflake, BigQuery)."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a key advantage of ELT over traditional ETL with modern cloud warehouses?",
    "options": [
      "No transformation needed at all",
      "Leverages the destination warehouse's compute, enabling faster iteration and flexibility",
      "Requires less storage in the destination",
      "Eliminates the need for source data"
    ],
    "answer": 1,
    "explanation": "ELT pushes transformation into elastic warehouse compute, supporting raw data preservation and faster iteration. Tools like dbt embody this pattern."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a defining feature of a star schema?",
    "options": [
      "Multiple normalized dimension tables",
      "A central fact table linked directly to denormalized dimension tables",
      "Only one table for all data",
      "Tree-structured hierarchies"
    ],
    "answer": 1,
    "explanation": "Star schemas place a central fact table (measurements) surrounded by denormalized dimension tables. Simple, fast for analytical queries."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes a snowflake schema?",
    "options": [
      "Like a star schema but with normalized dimension tables forming branching hierarchies",
      "A schema with no dimensions",
      "A schema with no fact table",
      "A graph database design"
    ],
    "answer": 0,
    "explanation": "Snowflake schemas normalize dimensions into sub-dimensions, reducing redundancy but adding joins. Trades query simplicity for storage and update consistency."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is the PRIMARY requirement of First Normal Form (1NF)?",
    "options": [
      "No redundant columns",
      "Each column holds atomic (indivisible) values; no repeating groups",
      "All tables joined into one",
      "Foreign keys removed"
    ],
    "answer": 1,
    "explanation": "1NF requires atomic values in each cell — no lists or repeating groups in a single column."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is the PRIMARY requirement of Second Normal Form (2NF)?",
    "options": [
      "Must include indexes",
      "Already 1NF; all non-key attributes fully depend on the entire primary key",
      "All columns must be text",
      "No foreign keys allowed"
    ],
    "answer": 1,
    "explanation": "2NF eliminates partial dependencies on composite keys: every non-key column must depend on the whole key, not part of it."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is the PRIMARY requirement of Third Normal Form (3NF)?",
    "options": [
      "Already 2NF; non-key columns depend only on the key, not on other non-key columns",
      "All columns can be NULL",
      "No primary keys allowed",
      "Tables must contain only numeric data"
    ],
    "answer": 0,
    "explanation": "3NF eliminates transitive dependencies: non-key attributes must not depend on other non-key attributes. A common practical target for OLTP design."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a common reason to denormalize data?",
    "options": [
      "Improve read/query performance at the cost of more update complexity and storage",
      "Reduce overall storage to zero",
      "Eliminate the need for queries",
      "Make all data unique"
    ],
    "answer": 0,
    "explanation": "Denormalization duplicates data to avoid joins, accelerating analytical reads. Common in data warehouses and reporting layers where reads vastly outnumber writes."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a defining characteristic of the Snowflake cloud data platform?",
    "options": [
      "Open-source on-premises database",
      "Cloud-native warehouse with separated storage and compute, scalable per workload",
      "Embedded database for mobile",
      "Block storage system"
    ],
    "answer": 1,
    "explanation": "Snowflake separates storage and compute, letting different workloads scale independently on shared data. Multi-cluster compute and time-travel are notable features."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a defining characteristic of Google BigQuery?",
    "options": [
      "Requires servers to provision",
      "Serverless, columnar, distributed query engine billed on data scanned",
      "Only supports on-prem deployment",
      "Designed for transactional workloads"
    ],
    "answer": 1,
    "explanation": "BigQuery is serverless: no infrastructure to manage, automatic scaling, pay per query (bytes scanned). Columnar storage and parallel execution drive analytical performance."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a defining characteristic of Amazon Redshift?",
    "options": [
      "NoSQL key-value store",
      "Cloud data warehouse based on PostgreSQL with massively parallel processing (MPP) architecture",
      "Embedded mobile database",
      "Stream processing engine"
    ],
    "answer": 1,
    "explanation": "Redshift is AWS's columnar MPP data warehouse, PostgreSQL-derived dialect. Recent serverless and Spectrum features extend its capabilities."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a defining characteristic of object storage like Amazon S3?",
    "options": [
      "File-system semantics with directories and inodes",
      "Flat key-based storage of objects with metadata, accessed via APIs",
      "Block-level access only",
      "In-memory caching only"
    ],
    "answer": 1,
    "explanation": "Object storage stores objects with unique keys and metadata, accessed via HTTP-based APIs. Highly scalable and durable; common foundation for data lakes."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a key difference between a file system and object storage?",
    "options": [
      "Object storage uses block-level access; file systems use HTTP",
      "File systems use hierarchical directories and POSIX semantics; object storage uses a flat key space accessed via APIs",
      "They are identical",
      "Object storage stores only text files"
    ],
    "answer": 1,
    "explanation": "File systems offer hierarchical directories and POSIX semantics. Object storage exposes a flat namespace via API, scales massively, and trades fine-grained semantics for durability and cost."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "What does Master Data Management (MDM) PRIMARILY address?",
    "options": [
      "Backing up servers nightly",
      "Maintaining a single, consistent, authoritative view of core business entities across systems",
      "Encrypting databases",
      "Running real-time analytics"
    ],
    "answer": 1,
    "explanation": "MDM creates a single source of truth for core entities (customers, products, suppliers), reducing duplication and inconsistency across operational systems."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes reference data?",
    "options": [
      "High-volume transactional records",
      "Slowly-changing standardized values used to classify or constrain other data (e.g., country codes, currency codes)",
      "Customer purchase history",
      "Real-time sensor data"
    ],
    "answer": 1,
    "explanation": "Reference data is curated, relatively static, and used to classify or constrain other data. ISO country codes, currency codes, and status code lists are typical examples."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST distinguishes batch from stream processing?",
    "options": [
      "Batch processes records one at a time as they arrive; stream processes in bulk on a schedule",
      "Batch processes in bulk on a schedule; stream processes records continuously as they arrive",
      "They are the same",
      "Only batch can use SQL"
    ],
    "answer": 1,
    "explanation": "Batch processes data in scheduled chunks (nightly, hourly). Stream processes events as they arrive in near-real time. Many modern platforms support both (lambda/kappa architectures)."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes a data pipeline?",
    "options": [
      "A single database",
      "A series of automated steps that move and transform data from source(s) to destination(s)",
      "A backup process only",
      "Manual data entry"
    ],
    "answer": 1,
    "explanation": "Data pipelines automate movement and transformation across systems. Tools include Airflow, Prefect, Dagster, and cloud-native equivalents (AWS Glue, Azure Data Factory)."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "What does a primary key do in a relational table?",
    "options": [
      "Encrypts the row's data",
      "Uniquely identifies each row and cannot contain NULL values",
      "Speeds up only specific JOIN types",
      "Allows duplicate values"
    ],
    "answer": 1,
    "explanation": "Primary keys uniquely identify rows and are required to be NOT NULL. Often used as targets for foreign keys in related tables."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "What does a foreign key enforce?",
    "options": [
      "Mandatory NULL values",
      "Referential integrity by requiring its values to match a primary key in another table (or NULL)",
      "Encrypted column storage",
      "Automatic indexing"
    ],
    "answer": 1,
    "explanation": "Foreign keys enforce referential integrity: an order's customer_id must reference an existing customer (or be NULL if optional). They prevent orphaned records."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "What is the PRIMARY purpose of a database index?",
    "options": [
      "Encrypt rows for confidentiality",
      "Speed up data retrieval at the cost of slower writes and more storage",
      "Replace primary keys",
      "Eliminate the need for foreign keys"
    ],
    "answer": 1,
    "explanation": "Indexes accelerate queries by providing fast lookup structures (B-tree, hash). Trade-offs: extra storage, slower inserts/updates as indexes maintain themselves."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a defining characteristic of time-series data?",
    "options": [
      "Random unordered records",
      "Each record is associated with a timestamp, typically arriving in chronological order",
      "No timestamps used",
      "Always categorical only"
    ],
    "answer": 1,
    "explanation": "Time-series data has timestamps central to its meaning. Examples: sensor readings, stock prices, application metrics. Specialized stores (InfluxDB, TimescaleDB, Prometheus) optimize for it."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes batch data ingestion?",
    "options": [
      "Records processed continuously as they arrive",
      "Data loaded in scheduled bulk groups on a defined interval",
      "Manual data entry only",
      "API responses only"
    ],
    "answer": 1,
    "explanation": "Batch ingestion runs on a schedule (hourly, daily, etc.) loading bulk data. Simpler to operate; introduces latency between event and availability."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes streaming data ingestion?",
    "options": [
      "Bulk loads on a daily schedule",
      "Continuous near-real-time ingestion of records as they are produced",
      "Quarterly file uploads",
      "Manual copying"
    ],
    "answer": 1,
    "explanation": "Streaming ingests records as they happen via systems like Kafka, Kinesis, or Pub/Sub. Enables low-latency analytics, alerting, and reactive applications."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "What does Change Data Capture (CDC) provide?",
    "options": [
      "A full reload of all data each run",
      "An ongoing stream of inserts, updates, and deletes from a source system",
      "Manual data entry forms",
      "A user authentication mechanism"
    ],
    "answer": 1,
    "explanation": "CDC captures row-level changes (often from transaction logs) and streams them downstream, enabling efficient near-real-time replication without bulk reloads."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is a common method for ingesting data from a SaaS application?",
    "options": [
      "Direct disk-level read of the SaaS provider's storage",
      "Calling the SaaS provider's REST API and persisting responses",
      "Manual screenshots only",
      "Web search scraping only"
    ],
    "answer": 1,
    "explanation": "REST APIs are the standard integration point for SaaS data. Many SaaS providers also support webhooks, exports, or partner integrations for bulk needs."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "What is the PRIMARY purpose of a webhook for data ingestion?",
    "options": [
      "The source system pushes event notifications to a configured URL when events occur",
      "A periodic poll of the source database",
      "A manual data entry form",
      "A user authentication token"
    ],
    "answer": 0,
    "explanation": "Webhooks are push-based: the source calls your endpoint when something happens. Push avoids polling overhead but requires your endpoint to be reachable."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is a MAJOR consideration when web scraping data from a third-party site?",
    "options": [
      "Encryption strength of the scraper",
      "Terms of service, robots.txt, and applicable laws regarding access and use",
      "Color of the scraper's UI",
      "File format used for storage"
    ],
    "answer": 1,
    "explanation": "Scraping may violate terms of service or laws (CFAA in the U.S., similar laws elsewhere). Check robots.txt, ToS, and licensing — and prefer official APIs when available."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is a common pattern for ingesting files dropped into cloud storage?",
    "options": [
      "Polling every microsecond from the database",
      "Event-driven processing triggered when new objects appear in the storage bucket",
      "Manual upload to a desktop drive",
      "Email-based file transfer only"
    ],
    "answer": 1,
    "explanation": "Cloud storage events (S3 events, GCS Pub/Sub notifications) trigger downstream processing (Lambda, Cloud Functions). Efficient and scalable for file-based ingestion."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is the PRIMARY purpose of a message queue in a data pipeline?",
    "options": [
      "Replace the database",
      "Decouple producers and consumers, buffer load spikes, and provide reliable delivery",
      "Encrypt all data",
      "Manage user authentication"
    ],
    "answer": 1,
    "explanation": "Queues (Kafka, RabbitMQ, SQS) decouple components, absorb spikes, and provide reliability/ordering guarantees that simple synchronous calls don't."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST distinguishes pull from push ingestion?",
    "options": [
      "They are the same",
      "Pull means the consumer requests data on its schedule; push means the producer sends data as it's available",
      "Pull is faster than push",
      "Push requires no destination"
    ],
    "answer": 1,
    "explanation": "Pull (polling) gives the consumer control over timing. Push (webhooks, queues, CDC) reduces latency but requires the consumer to be ready to accept."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is a key consideration when ingesting from a production OLTP database?",
    "options": [
      "Maximize parallel queries to test capacity",
      "Avoid impacting production performance by reading from replicas or using CDC",
      "Always query during peak hours",
      "Disable transactions"
    ],
    "answer": 1,
    "explanation": "Heavy analytical queries against a primary OLTP database can degrade performance. Replicas, CDC, or scheduled off-peak extraction are common mitigations."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is a common ETL/data integration tool?",
    "options": [
      "Microsoft Word",
      "Apache Airflow (orchestration commonly paired with transformations)",
      "Adobe Photoshop",
      "Microsoft Outlook"
    ],
    "answer": 1,
    "explanation": "Airflow orchestrates data workflows. Other common tools: dbt (transformations), Fivetran/Stitch (ELT extractors), AWS Glue, Azure Data Factory, Talend, Informatica."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes an idempotent data load operation?",
    "options": [
      "Running it once produces a different result than running it many times",
      "Running it multiple times produces the same end state as running it once",
      "It only runs once per year",
      "It cannot be retried"
    ],
    "answer": 1,
    "explanation": "Idempotent operations are safe to retry. Important for reliable pipelines where transient failures and reruns are normal. Often implemented via upserts or deterministic IDs."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "What is the PRIMARY purpose of a data pipeline orchestrator?",
    "options": [
      "Encrypt all pipeline data",
      "Schedule, sequence, monitor, and retry pipeline steps with defined dependencies",
      "Replace databases",
      "Build dashboards"
    ],
    "answer": 1,
    "explanation": "Orchestrators (Airflow, Prefect, Dagster) define dependencies between tasks, schedule runs, handle retries and alerting, and provide visibility into pipeline state."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST distinguishes an incremental load from a full load?",
    "options": [
      "Incremental reloads everything; full loads only changes",
      "Incremental loads only new or changed records; full loads the entire dataset each run",
      "They are the same",
      "Incremental is always faster regardless of context"
    ],
    "answer": 1,
    "explanation": "Incremental loads reduce volume by processing only changes since the last run. Full loads are simpler but expensive at scale. Choice depends on source capabilities and freshness needs."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "What is a 'backfill' in data pipeline operations?",
    "options": [
      "A new feature deployment",
      "Running a pipeline over historical data ranges to populate missing or corrected data",
      "A type of database index",
      "An access control list"
    ],
    "answer": 1,
    "explanation": "Backfills reprocess past data — common when adding new transformations, fixing bugs, or onboarding new sources with historical scope."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is a typical first step when investigating data quality?",
    "options": [
      "Encrypt all columns",
      "Profile the data to find missing values, outliers, and inconsistencies",
      "Drop all rows immediately",
      "Visualize without any cleaning"
    ],
    "answer": 1,
    "explanation": "Data profiling characterizes each column (counts, nulls, distinct values, ranges, distributions) and surfaces the issues to address before analysis."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "What is mean imputation for missing values?",
    "options": [
      "Deleting all rows with any missing values",
      "Replacing missing numeric values with the column's mean",
      "Encrypting the missing values",
      "Marking them as outliers"
    ],
    "answer": 1,
    "explanation": "Mean imputation is simple but can distort distributions and underestimate variance. Median or model-based imputation often performs better for skewed data."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Why might median imputation be preferred over mean imputation?",
    "options": [
      "Median is faster to compute",
      "Median is robust to outliers and skewed distributions, where the mean can be misleading",
      "Median works only with categorical data",
      "Median requires no data"
    ],
    "answer": 1,
    "explanation": "Median is the middle value, unaffected by extreme outliers. For skewed distributions (income, prices), median often represents typical values better than the mean."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which type of variables is mode imputation typically used for?",
    "options": [
      "Continuous numeric variables",
      "Categorical (nominal) variables",
      "Date/time variables only",
      "Free-form text only"
    ],
    "answer": 1,
    "explanation": "Mode (most frequent value) is the natural imputation strategy for categorical variables, where mean/median don't apply."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "How does K-Nearest Neighbors (K-NN) imputation work?",
    "options": [
      "Replaces missing values with the global mean",
      "Replaces missing values based on the values of the K most similar rows",
      "Removes any row with a missing value",
      "Encrypts missing values"
    ],
    "answer": 1,
    "explanation": "K-NN imputation finds K similar rows (by distance over non-missing features) and uses their values to estimate the missing one. More sophisticated than constant imputation."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes an outlier?",
    "options": [
      "A duplicate row",
      "An observation that differs significantly from the rest of the data",
      "A null value",
      "A correctly typed value"
    ],
    "answer": 1,
    "explanation": "Outliers are observations far from the bulk of the data, potentially due to genuine extreme cases, measurement errors, or data entry mistakes. Detection methods include Z-score and IQR rules."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which rule commonly defines outliers using the interquartile range (IQR)?",
    "options": [
      "Values within Q1 to Q3 are outliers",
      "Values below Q1 - 1.5*IQR or above Q3 + 1.5*IQR are outliers",
      "Values equal to the median are outliers",
      "Values within one standard deviation are outliers"
    ],
    "answer": 1,
    "explanation": "The classic IQR rule flags values beyond 1.5 IQR from the quartiles. Useful especially for non-normal distributions where Z-score assumptions don't hold."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "What does a Z-score above 3 commonly indicate?",
    "options": [
      "A perfectly typical value",
      "A potential outlier more than three standard deviations from the mean",
      "A duplicate row",
      "A formatting error"
    ],
    "answer": 1,
    "explanation": "Z-score = (value - mean) / std. |Z| > 3 is a common threshold for outliers under normality assumptions, capturing values in the extreme tails."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is a common method to deduplicate records?",
    "options": [
      "Encrypt every column",
      "Compare records on key fields (exact match, fuzzy match, or hash) and remove duplicates",
      "Convert all columns to uppercase",
      "Delete every other row"
    ],
    "answer": 1,
    "explanation": "Deduplication typically uses exact matches on natural keys, fuzzy matches for variations (whitespace, casing), or hashes of normalized fields."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is a common type of data validation rule?",
    "options": [
      "Encrypting the column",
      "Checking that values fall within an expected range, format, or set of allowed values",
      "Removing all data",
      "Renaming columns randomly"
    ],
    "answer": 1,
    "explanation": "Validation rules check types, ranges, formats (regex), referential integrity, and business logic. Common in ingestion pipelines and tools like Great Expectations."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is an example of data type conversion (casting)?",
    "options": [
      "Renaming a column",
      "Converting a column from string '123' to integer 123",
      "Encrypting a column",
      "Indexing a column"
    ],
    "answer": 1,
    "explanation": "Type conversion (casting) changes how a value is represented — e.g., string '2024-01-01' to a date, '123' to integer, '12.5' to float."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes standardization (Z-score normalization) of a numeric feature?",
    "options": [
      "Scaling values to between 0 and 1",
      "Transforming values to have mean 0 and standard deviation 1",
      "Encrypting all numbers",
      "Replacing all values with the median"
    ],
    "answer": 1,
    "explanation": "Standardization centers each feature at zero with unit variance. Useful for algorithms sensitive to feature scale (PCA, K-means, regularized regression)."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes min-max normalization?",
    "options": [
      "Scaling values to a fixed range, typically [0, 1]",
      "Subtracting the mean only",
      "Encrypting values",
      "Setting all values to the same number"
    ],
    "answer": 0,
    "explanation": "Min-max scaling: (x - min) / (max - min). Bounds values to a known range; sensitive to outliers because extreme values determine min/max."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes one-hot encoding of a categorical variable with K categories?",
    "options": [
      "Replace each category with the integer 1",
      "Create K binary columns, one per category, with 1 indicating membership",
      "Compute the average across categories",
      "Sort the categories alphabetically"
    ],
    "answer": 1,
    "explanation": "One-hot encoding creates a column per category. Avoids implying an ordinal relationship that label encoding can introduce. Can produce wide datasets for high-cardinality features."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes label encoding for a categorical variable?",
    "options": [
      "Each category is assigned a unique integer",
      "Each category becomes a separate binary column",
      "The mean of the target is used as the encoding",
      "The category is removed entirely"
    ],
    "answer": 0,
    "explanation": "Label encoding maps each category to a unique integer. Compact but implies ordering, which can mislead tree models less than linear models — appropriate uses vary by algorithm."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "When is ordinal encoding appropriate?",
    "options": [
      "For nominal categories with no order",
      "When the category genuinely has a meaningful order (e.g., S, M, L, XL)",
      "For continuous numeric data only",
      "Only for binary categories"
    ],
    "answer": 1,
    "explanation": "Ordinal encoding maps ordered categories to integers preserving the order. Inappropriate when no real ordering exists (e.g., colors, countries)."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes an INNER JOIN of two tables?",
    "options": [
      "All rows from both tables",
      "Only rows that have matching keys in both tables",
      "All rows from the left table only",
      "All rows from the right table only"
    ],
    "answer": 1,
    "explanation": "INNER JOIN returns only rows where the join condition matches in both tables. Non-matching rows from either side are excluded."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes a LEFT OUTER JOIN of A and B?",
    "options": [
      "All rows from B; matched rows from A or NULLs",
      "All rows from A; matched rows from B where matches exist, NULL otherwise",
      "Only rows present in both",
      "Cartesian product of all rows"
    ],
    "answer": 1,
    "explanation": "LEFT OUTER JOIN returns every row from the left table, with matching right-table data or NULLs when no match. Used when the left side is the primary set."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes a FULL OUTER JOIN of A and B?",
    "options": [
      "Only matched rows",
      "All rows from both tables, with NULLs where no match exists on either side",
      "Cartesian product of A and B",
      "Rows present in A and not in B"
    ],
    "answer": 1,
    "explanation": "FULL OUTER JOIN returns every row from both tables, joining on matches and filling NULLs where no match exists. Useful for comprehensive comparison."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes a CROSS JOIN of A and B?",
    "options": [
      "Returns only matching rows",
      "Returns the Cartesian product: every row of A paired with every row of B",
      "Removes duplicates",
      "Discards all NULLs"
    ],
    "answer": 1,
    "explanation": "CROSS JOIN produces every combination of rows from both tables (a × b rows). Useful for generating combinations or as a starting point with explicit filters."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes a SQL UNION between two query results?",
    "options": [
      "Returns all common rows",
      "Combines results, eliminating duplicate rows by default (UNION ALL keeps duplicates)",
      "Joins on a key",
      "Filters rows by predicate"
    ],
    "answer": 1,
    "explanation": "UNION stacks two result sets and removes duplicates. UNION ALL keeps duplicates (faster). Both require matching column counts and compatible types."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes the SQL INTERSECT operator?",
    "options": [
      "Returns rows in both result sets only",
      "Returns the difference of two result sets",
      "Joins tables on a key",
      "Generates a Cartesian product"
    ],
    "answer": 0,
    "explanation": "INTERSECT returns rows present in both result sets (with duplicates removed). Useful for finding overlap between two queries."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes the SQL EXCEPT (sometimes called MINUS) operator?",
    "options": [
      "Returns rows in the left result set that are NOT in the right",
      "Combines and deduplicates",
      "Multiplies the result sets together",
      "Counts the rows in each set"
    ],
    "answer": 0,
    "explanation": "EXCEPT returns rows from the left query that don't appear in the right. Useful for finding entries missing from one source."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes a pivot operation?",
    "options": [
      "Renaming columns randomly",
      "Reshaping data from long (rows) to wide (columns), often using categorical values as new column names",
      "Encrypting columns",
      "Deleting NULL rows"
    ],
    "answer": 1,
    "explanation": "Pivoting turns row values into column headers, aggregating measurements. Common in reporting (e.g., months across columns instead of as a row dimension)."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes an unpivot (melt) operation?",
    "options": [
      "Adds new columns randomly",
      "Reshaping data from wide (many columns) to long (rows), often consolidating multiple measurement columns into one",
      "Joining tables",
      "Sorting rows alphabetically"
    ],
    "answer": 1,
    "explanation": "Unpivoting turns wide data into long form. Useful for normalizing data into a format suitable for many BI tools and machine learning."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is a typical output of data profiling for a numeric column?",
    "options": [
      "Only the column name",
      "Count, null count, min, max, mean, standard deviation, and distinct value count",
      "A list of users who accessed it",
      "An encryption key"
    ],
    "answer": 1,
    "explanation": "Profiling produces summary statistics and metadata that surface data quality issues, anomalies, and characteristics for downstream pipeline design."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes simple random sampling?",
    "options": [
      "Choose every nth record systematically",
      "Each record has an equal probability of being chosen",
      "Choose only the largest records",
      "Choose only records from a specific group"
    ],
    "answer": 1,
    "explanation": "Simple random sampling gives each record equal probability. Easy to implement; can miss small subgroups if the population is heterogeneous."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "What is the PRIMARY purpose of stratified sampling?",
    "options": [
      "Speed up the sampling process",
      "Ensure representation of subgroups (strata) in proportions matching the population",
      "Eliminate random number generation",
      "Encrypt the sample"
    ],
    "answer": 1,
    "explanation": "Stratified sampling divides the population into strata (e.g., regions, classes) and samples within each, ensuring representation even of small but important groups."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes systematic sampling?",
    "options": [
      "Select records randomly with replacement",
      "Select every kth record after a random start",
      "Sample only the most recent records",
      "Choose by hand"
    ],
    "answer": 1,
    "explanation": "Systematic sampling picks every kth record from an ordered list. Easy and quick, but if order has a pattern matching k, sampling can be biased."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes cluster sampling?",
    "options": [
      "Sample individual records randomly across the population",
      "Divide the population into groups and sample entire selected groups",
      "Choose only one group regardless",
      "Choose only the largest records"
    ],
    "answer": 1,
    "explanation": "Cluster sampling treats groups (clusters) as the unit of sampling. Cost-effective when individual sampling is expensive (e.g., geographic clusters)."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is the MAIN risk of convenience sampling?",
    "options": [
      "Higher cost than random sampling",
      "Selection bias because the sample may not represent the broader population",
      "Excessive randomness",
      "Inability to compute statistics"
    ],
    "answer": 1,
    "explanation": "Convenience sampling picks who/what is easy to reach. The resulting bias often undermines generalization (e.g., surveying only your social circle)."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which task is typically part of data cleansing?",
    "options": [
      "Building dashboards",
      "Detecting and correcting inaccurate, incomplete, or improperly formatted data",
      "Provisioning servers",
      "Encrypting backups"
    ],
    "answer": 1,
    "explanation": "Data cleansing addresses quality issues: missing values, duplicates, format inconsistencies, outliers, and inconsistencies across sources."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes feature engineering?",
    "options": [
      "Replacing values randomly",
      "Creating new input variables from existing data to improve a model's predictive performance",
      "Removing all variables",
      "Encrypting features"
    ],
    "answer": 1,
    "explanation": "Feature engineering derives meaningful inputs from raw data — ratios, time-of-day features, aggregations, interactions, encodings — to help models learn signal more effectively."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes binning (discretization) of a continuous variable?",
    "options": [
      "Encrypting the variable",
      "Grouping continuous values into discrete bins (e.g., age groups, income brackets)",
      "Removing the variable",
      "Sorting values"
    ],
    "answer": 1,
    "explanation": "Binning converts continuous values into categorical groups. Useful for non-linear effects, reducing noise, or matching business reporting (e.g., age ranges)."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes a key consideration in choosing sample size?",
    "options": [
      "Always use 10 records",
      "Larger samples reduce sampling error but cost more; size should match the precision and power needed for the analysis",
      "Always use all data regardless",
      "Sample size has no impact on results"
    ],
    "answer": 1,
    "explanation": "Sample size influences precision (margin of error) and statistical power. Balance with cost and timeliness; tools like power analysis help determine adequate size."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is an example of format standardization in data cleaning?",
    "options": [
      "Encrypting all phone numbers",
      "Reformatting phone numbers and dates to a single consistent representation",
      "Deleting all rows",
      "Random shuffling"
    ],
    "answer": 1,
    "explanation": "Standardizing formats normalizes representations (e.g., '+1-555-0100' vs '5550100', '2024-01-01' vs '1/1/24') so downstream analysis treats them consistently."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is an example of data aggregation in preparation?",
    "options": [
      "Listing each row individually",
      "Summarizing transactions into daily totals per customer",
      "Encrypting transaction details",
      "Deleting all transactions"
    ],
    "answer": 1,
    "explanation": "Aggregation summarizes detail rows into higher-level metrics (counts, sums, averages by group), supporting reporting and feature engineering."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is a benefit of enforcing a schema on ingested data?",
    "options": [
      "Eliminates the need for data",
      "Catches type and structure errors early and provides consistent downstream usage",
      "Speeds up unrelated systems",
      "Removes the need for security controls"
    ],
    "answer": 1,
    "explanation": "Schema enforcement validates incoming data against an expected structure, catching upstream issues at ingestion rather than letting bad data propagate."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which BEST describes a data quality SLA?",
    "options": [
      "A backup schedule",
      "An agreement defining quality measures (freshness, completeness, accuracy) for a dataset",
      "An encryption standard",
      "A user-account policy"
    ],
    "answer": 1,
    "explanation": "Quality SLAs commit to specific freshness windows, completeness thresholds, and accuracy bars for datasets, with consequences when violated."
  },
  {
    "domain": "2: Data Acquisition and Preparation",
    "question": "Which is a common reason to use stratified sampling when splitting data for ML model training?",
    "options": [
      "To make training slower",
      "To preserve class proportions in train/test splits, important for imbalanced classes",
      "To delete minority classes",
      "To duplicate the majority class"
    ],
    "answer": 1,
    "explanation": "Imbalanced classes can be lost from small test sets via random sampling. Stratified splits preserve class proportions, supporting reliable evaluation."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which is the formula for the arithmetic mean?",
    "options": [
      "The middle value when sorted",
      "The sum of values divided by the count of values",
      "The most frequent value",
      "The largest minus the smallest"
    ],
    "answer": 1,
    "explanation": "Mean = sum / count. Simple measure of central tendency, but sensitive to extreme values (outliers can pull the mean significantly)."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST defines the median?",
    "options": [
      "The most frequent value",
      "The middle value when data are sorted (or average of the two middle values)",
      "The average of all values",
      "The largest value"
    ],
    "answer": 1,
    "explanation": "Median splits sorted data in half. Robust to outliers — useful for skewed distributions like income or house prices."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST defines the mode of a dataset?",
    "options": [
      "The middle value",
      "The most frequently occurring value",
      "The largest value",
      "The mean rounded"
    ],
    "answer": 1,
    "explanation": "Mode is the most common value. Data can be unimodal, bimodal, or multimodal. The only measure of central tendency that applies to nominal categorical data."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST defines the range of a dataset?",
    "options": [
      "Sum minus average",
      "Maximum value minus minimum value",
      "Square root of variance",
      "Middle value"
    ],
    "answer": 1,
    "explanation": "Range = max - min. Simplest measure of spread, but highly sensitive to outliers because it depends on the two extremes only."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes variance?",
    "options": [
      "The average value of the dataset",
      "The average of the squared deviations from the mean",
      "The most frequent value",
      "The middle value"
    ],
    "answer": 1,
    "explanation": "Variance measures spread. Sample variance often divides by n-1 (Bessel's correction) for an unbiased estimator of population variance."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which is the relationship between variance and standard deviation?",
    "options": [
      "They are unrelated",
      "Standard deviation is the square root of variance",
      "Variance is the square root of standard deviation",
      "They are always equal"
    ],
    "answer": 1,
    "explanation": "Standard deviation = sqrt(variance). It's in the same units as the original data, making it more interpretable than variance."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which percentile corresponds to the third quartile (Q3)?",
    "options": [
      "25th percentile",
      "75th percentile",
      "50th percentile",
      "100th percentile"
    ],
    "answer": 1,
    "explanation": "Q1 = 25th percentile, Q2 = median = 50th, Q3 = 75th. Quartiles divide sorted data into four equal parts."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "How is the Interquartile Range (IQR) calculated?",
    "options": [
      "Q1 - Q3",
      "Q3 - Q1",
      "Q2 only",
      "Maximum - Minimum"
    ],
    "answer": 1,
    "explanation": "IQR = Q3 - Q1, the spread of the middle 50% of the data. Robust to outliers, often used in box plots and outlier detection rules."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "A distribution with a long right tail is described as:",
    "options": [
      "Negatively skewed (left-skewed)",
      "Positively skewed (right-skewed)",
      "Symmetric",
      "Bimodal"
    ],
    "answer": 1,
    "explanation": "Right-skewed (positive skew) distributions have a long right tail. Mean > Median > Mode typically. Income and house prices commonly show this pattern."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "A distribution with a long left tail is described as:",
    "options": [
      "Positively skewed",
      "Negatively (left) skewed",
      "Symmetric",
      "Uniform"
    ],
    "answer": 1,
    "explanation": "Left-skewed (negative skew) distributions have a long left tail. Mean < Median < Mode typically. Age at death in developed countries often shows this."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes the normal distribution?",
    "options": [
      "Skewed right with no symmetry",
      "Symmetric, bell-shaped, defined by mean and standard deviation",
      "Uniform across all values",
      "Bimodal by definition"
    ],
    "answer": 1,
    "explanation": "The normal distribution is symmetric, bell-shaped, and fully characterized by its mean (location) and standard deviation (spread). Many natural phenomena approximate it."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "In a normal distribution, approximately what percent of values fall within one standard deviation of the mean?",
    "options": [
      "About 50%",
      "About 68%",
      "About 95%",
      "About 99.7%"
    ],
    "answer": 1,
    "explanation": "Empirical rule: ~68% within 1σ, ~95% within 2σ, ~99.7% within 3σ. Useful rule of thumb for spotting outliers and gauging normality."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "What does kurtosis measure?",
    "options": [
      "Skewness of the distribution",
      "The 'tailedness' of the distribution (how heavy or light the tails are)",
      "The mean of the data",
      "The median absolute deviation"
    ],
    "answer": 1,
    "explanation": "Kurtosis measures tail heaviness. High kurtosis (leptokurtic) = heavier tails, more outliers. Low (platykurtic) = lighter tails."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST distinguishes a population from a sample?",
    "options": [
      "Population is smaller; sample is larger",
      "Population is the entire group of interest; sample is a subset drawn from it",
      "They are the same",
      "Sample includes more variables"
    ],
    "answer": 1,
    "explanation": "Population = the whole. Sample = a subset used to estimate population characteristics. Statistical inference uses samples to draw conclusions about populations."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Why is median often preferred over mean for reporting typical income?",
    "options": [
      "Median is easier to compute",
      "Median is robust to extreme high earners that pull the mean upward",
      "Mean cannot be calculated for income",
      "Mean represents the smallest value"
    ],
    "answer": 1,
    "explanation": "Income distributions are right-skewed with extreme high earners. Median (middle person's income) describes typical experience better than mean."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which is a discrete probability distribution?",
    "options": [
      "Normal",
      "Binomial",
      "Exponential",
      "Uniform continuous"
    ],
    "answer": 1,
    "explanation": "Binomial models outcomes of n independent yes/no trials. Other discrete: Poisson, Bernoulli, geometric. Normal, exponential, beta are continuous."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which scenario is BEST modeled by a Poisson distribution?",
    "options": [
      "Continuous measurements like height",
      "Counts of events occurring in a fixed interval with a known average rate",
      "Daily stock returns",
      "Outcomes of coin flips"
    ],
    "answer": 1,
    "explanation": "Poisson models event counts per fixed interval (e.g., calls per hour, visits per day) with a constant mean rate. Distinguished from binomial by no fixed number of trials."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes a uniform distribution?",
    "options": [
      "All values have equal probability over a defined range",
      "Probabilities concentrated near the mean",
      "All outcomes are zero",
      "Used only for time-series"
    ],
    "answer": 0,
    "explanation": "Uniform distributions assign equal probability across the range. Discrete uniform: equal probability per discrete outcome. Continuous uniform: constant density."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes a Bernoulli trial?",
    "options": [
      "An experiment with two possible outcomes (success/failure)",
      "An experiment with many continuous outcomes",
      "A type of survey",
      "Only used in time-series"
    ],
    "answer": 0,
    "explanation": "A single trial with two outcomes (often labeled 1/0 or success/failure). Multiple independent Bernoulli trials with the same probability give a binomial distribution."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "What does the Central Limit Theorem state?",
    "options": [
      "Every distribution is normal",
      "The distribution of sample means tends toward normal as sample size grows, regardless of population distribution",
      "The mean equals the median",
      "Skewness is always zero"
    ],
    "answer": 1,
    "explanation": "CLT explains why normal-based inference works on sample means even when the underlying data isn't normal — provided samples are large enough and independent."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "What does a Z-score represent?",
    "options": [
      "The mean of the data",
      "How many standard deviations a value is from the mean",
      "The number of records",
      "The minimum value"
    ],
    "answer": 1,
    "explanation": "Z = (x - μ) / σ. Standardizes values to a common scale. Z-scores enable comparison across different distributions and underlie many statistical tests."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "If two events A and B are independent, the probability of both occurring is:",
    "options": [
      "P(A) + P(B)",
      "P(A) × P(B)",
      "P(A) - P(B)",
      "P(A) / P(B)"
    ],
    "answer": 1,
    "explanation": "Independent events: P(A and B) = P(A) × P(B). For union (either A or B): P(A) + P(B) - P(A and B)."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "What does P(A | B) represent?",
    "options": [
      "The probability of both A and B",
      "The probability of A given that B has occurred",
      "The probability of A union B",
      "The complement of A"
    ],
    "answer": 1,
    "explanation": "P(A | B) is the conditional probability of A given B occurred. Bayes' theorem connects conditionals: P(A|B) = P(B|A) × P(A) / P(B)."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes the null hypothesis (H0) in hypothesis testing?",
    "options": [
      "The conclusion we want to prove",
      "The default assumption that there is no effect or no difference",
      "The opposite of the alternative",
      "The probability of error"
    ],
    "answer": 1,
    "explanation": "H0 is the default position assuming no effect or no difference. The test seeks evidence to reject H0 in favor of H1 (alternative)."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes the alternative hypothesis (H1 or Ha)?",
    "options": [
      "The same as H0",
      "The hypothesis that contradicts H0, representing the effect or difference of interest",
      "The probability of being wrong",
      "The mean of the data"
    ],
    "answer": 1,
    "explanation": "H1 represents what we suspect is true. Tests yield evidence to either reject H0 in favor of H1, or fail to reject H0."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes a p-value?",
    "options": [
      "The probability that H0 is true",
      "The probability of observing data at least as extreme as the sample, assuming H0 is true",
      "The effect size",
      "The sample mean"
    ],
    "answer": 1,
    "explanation": "p-value is computed assuming H0. Small p-values suggest the data are unlikely under H0, supporting rejection. Common thresholds: 0.05, 0.01, 0.001."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "What does the significance level α typically represent?",
    "options": [
      "The probability that H1 is true",
      "The threshold p-value at which H0 is rejected (Type I error probability)",
      "The sample mean",
      "The standard deviation"
    ],
    "answer": 1,
    "explanation": "α is the maximum acceptable probability of a Type I error (rejecting H0 when it's true). Set before the analysis to avoid p-hacking."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes a Type I error?",
    "options": [
      "Failing to reject H0 when H1 is true",
      "Rejecting H0 when H0 is true (false positive)",
      "Drawing the wrong sample",
      "Choosing the wrong distribution"
    ],
    "answer": 1,
    "explanation": "Type I = false positive: rejecting a true null. α controls Type I error rate."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes a Type II error?",
    "options": [
      "Rejecting a true H0",
      "Failing to reject H0 when H1 is true (false negative)",
      "Sampling error",
      "Coding error"
    ],
    "answer": 1,
    "explanation": "Type II = false negative: failing to detect a real effect. β is the Type II rate; power = 1 - β. Larger samples and bigger effects reduce Type II errors."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "What does a 95% confidence interval mean?",
    "options": [
      "95% of the data are within the interval",
      "If we repeated sampling many times, ~95% of constructed intervals would contain the true population parameter",
      "There is a 95% probability the true parameter is in this specific interval",
      "The mean is exactly 95"
    ],
    "answer": 1,
    "explanation": "Strictly, the procedure produces intervals capturing the true parameter 95% of the time. The common shorthand 'we're 95% confident' is informal but conveys the practical meaning."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "What is statistical power?",
    "options": [
      "The probability of correctly rejecting a false H0",
      "The size of the dataset",
      "The mean of the sample",
      "The significance level"
    ],
    "answer": 0,
    "explanation": "Power = 1 - β. Higher power means a higher chance of detecting a real effect. Increased by larger samples, larger effects, lower variance, or higher α."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes effect size?",
    "options": [
      "The p-value of a test",
      "A standardized measure of the magnitude of an effect, separate from sample size",
      "The total number of samples",
      "The mean alone"
    ],
    "answer": 1,
    "explanation": "Effect size (Cohen's d, r, odds ratio) quantifies the magnitude of an effect independent of sample size. Statistical significance can be misleading without it."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which does Pearson's correlation coefficient measure?",
    "options": [
      "Strength and direction of a linear relationship between two numeric variables",
      "Causation between two variables",
      "Probability of an event",
      "Skewness of a distribution"
    ],
    "answer": 0,
    "explanation": "Pearson's r ranges from -1 to +1. Measures linear relationship strength. Insensitive to non-linear monotonic relationships, where Spearman is more appropriate."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "What range can Pearson's correlation coefficient take?",
    "options": [
      "0 to 1 only",
      "-1 to +1, inclusive",
      "0 to 100",
      "Any real number"
    ],
    "answer": 1,
    "explanation": "Pearson's r is bounded between -1 and +1. -1 = perfect negative linear, 0 = no linear relationship, +1 = perfect positive linear."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which is a typical use of Spearman correlation over Pearson?",
    "options": [
      "When data are normally distributed",
      "When relationships are monotonic but not necessarily linear, or for ordinal data",
      "Only for categorical data",
      "Only for time-series"
    ],
    "answer": 1,
    "explanation": "Spearman computes correlation on ranks, capturing monotonic relationships. Robust to outliers and works with ordinal data."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which is a CRITICAL caveat when interpreting correlation between two variables?",
    "options": [
      "Correlation implies causation by default",
      "Correlation does not imply causation; confounding variables or reverse causality may exist",
      "Correlation can only be measured experimentally",
      "Correlation always indicates a linear relationship"
    ],
    "answer": 1,
    "explanation": "The classic warning: 'correlation ≠ causation.' Establishing causality requires experiments (RCTs) or careful causal inference methods."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "What does simple linear regression model?",
    "options": [
      "Multiple categorical outcomes",
      "The relationship between a single numeric predictor and a numeric outcome via a straight line",
      "Probability of class membership",
      "Cluster boundaries"
    ],
    "answer": 1,
    "explanation": "Linear regression fits y = β0 + β1x + ε. Estimates coefficients via least squares. Foundation for many statistical and ML methods."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes multiple regression?",
    "options": [
      "Regression with categorical outcomes",
      "Regression with multiple predictor variables for a single numeric outcome",
      "Regression with no outcome",
      "A type of clustering"
    ],
    "answer": 1,
    "explanation": "Multiple linear regression: y = β0 + β1x1 + β2x2 + ... + ε. Extends simple regression to multiple predictors, requiring care with multicollinearity and interpretation."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "What does R-squared (R²) measure in a regression model?",
    "options": [
      "The number of predictors",
      "The proportion of variance in the outcome explained by the model",
      "The p-value",
      "The sample size"
    ],
    "answer": 1,
    "explanation": "R² ranges from 0 to 1 (in linear regression). Higher means more variance explained. Adjusted R² penalizes overfitting from extra predictors."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST defines a residual in regression?",
    "options": [
      "The predicted value",
      "The difference between an observed value and the model's prediction",
      "The slope of the line",
      "The intercept"
    ],
    "answer": 1,
    "explanation": "Residual = observed - predicted. Analyzing residuals (patterns, normality, homoscedasticity) reveals model assumptions and fit quality."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "What problem does logistic regression typically address?",
    "options": [
      "Predicting a continuous numeric outcome",
      "Predicting the probability of a binary (or multinomial) outcome",
      "Clustering similar records",
      "Detecting outliers"
    ],
    "answer": 1,
    "explanation": "Logistic regression models probability of class membership via the logit transform. Outputs probabilities mapped to classes via a threshold (often 0.5)."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes overfitting?",
    "options": [
      "The model is too simple to capture patterns",
      "The model fits training data too closely and fails to generalize to new data",
      "The model has no parameters",
      "The model encrypts the data"
    ],
    "answer": 1,
    "explanation": "Overfit models memorize training noise. Detected via high training accuracy but poor validation/test performance. Mitigations: regularization, more data, simpler models."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes underfitting?",
    "options": [
      "The model captures noise too well",
      "The model is too simple and fails to capture the underlying pattern in the data",
      "The model has too many features",
      "The model lacks an outcome variable"
    ],
    "answer": 1,
    "explanation": "Underfit models perform poorly on both training and test data. Often addressed by adding features, increasing model capacity, or reducing regularization."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST distinguishes supervised from unsupervised learning?",
    "options": [
      "Supervised has no labels; unsupervised has labels",
      "Supervised uses labeled training data to predict outcomes; unsupervised finds structure without labels",
      "They are the same",
      "Only supervised uses algorithms"
    ],
    "answer": 1,
    "explanation": "Supervised: labeled examples (regression, classification). Unsupervised: no labels (clustering, dimensionality reduction). Semi-supervised and self-supervised exist between them."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST distinguishes classification from regression?",
    "options": [
      "Classification is unsupervised; regression is supervised",
      "Classification predicts discrete categories; regression predicts continuous numeric values",
      "They are the same",
      "Classification predicts dates only"
    ],
    "answer": 1,
    "explanation": "Classification outputs class labels (email is spam/not spam). Regression outputs continuous numbers (house price). Both are supervised."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes clustering?",
    "options": [
      "A supervised prediction task",
      "An unsupervised method grouping similar observations together",
      "A linear regression technique",
      "A data validation step"
    ],
    "answer": 1,
    "explanation": "Clustering algorithms (k-means, hierarchical, DBSCAN) group similar points without labels. Used for customer segmentation, anomaly detection, exploratory analysis."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes k-means clustering?",
    "options": [
      "Predicts a binary outcome",
      "Iteratively assigns points to k clusters and updates cluster centers until convergence",
      "Sorts data alphabetically",
      "Computes correlation"
    ],
    "answer": 1,
    "explanation": "K-means partitions data into k clusters by minimizing within-cluster sum of squares. Requires choosing k and is sensitive to initialization and outliers."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes a decision tree?",
    "options": [
      "A linear regression with one variable",
      "A tree of conditional rules that splits data and predicts outcomes at leaf nodes",
      "A clustering algorithm",
      "An unsupervised method"
    ],
    "answer": 1,
    "explanation": "Decision trees recursively partition data using feature thresholds, predicting class or value at leaves. Interpretable but prone to overfitting (mitigated by pruning or ensembles)."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes a random forest?",
    "options": [
      "A single deep decision tree",
      "An ensemble of many decision trees whose predictions are aggregated for improved accuracy and robustness",
      "An unsupervised clustering method",
      "A linear regression with regularization"
    ],
    "answer": 1,
    "explanation": "Random forests train many decision trees on bootstrap samples with feature subsampling, then vote/average. Strong baseline; reduces overfitting compared to single trees."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "What is the PRIMARY purpose of A/B testing?",
    "options": [
      "Train a machine learning model",
      "Compare two versions of something by randomly assigning users to test the impact of a change",
      "Cluster users into segments",
      "Anonymize data"
    ],
    "answer": 1,
    "explanation": "A/B tests randomly assign subjects to control (A) and variant (B), measuring the change's causal effect on a metric. Foundation of evidence-based product changes."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes statistical significance in an A/B test?",
    "options": [
      "The observed effect is larger than the largest user",
      "The observed difference is unlikely to be due to chance under the null hypothesis",
      "100% of users converted",
      "The test ran for one day"
    ],
    "answer": 1,
    "explanation": "Statistical significance (small p-value) means the observed difference is unlikely under H0 (no real effect). Doesn't say the difference is meaningful — effect size and business context matter."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Why is determining sample size BEFORE an A/B test important?",
    "options": [
      "To make the test slower",
      "To ensure adequate power to detect the smallest effect that matters; avoids peeking and false positives",
      "Eliminates the need for randomization",
      "Reduces the variant's quality"
    ],
    "answer": 1,
    "explanation": "Pre-determining sample size (via power analysis) prevents early-stopping bias and inflated false positives. Tools like sequential testing can adjust if peeking is needed."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes descriptive analytics?",
    "options": [
      "Forecasting future outcomes",
      "Summarizing what has happened (e.g., reports, dashboards of past KPIs)",
      "Recommending specific actions",
      "Explaining root causes"
    ],
    "answer": 1,
    "explanation": "Descriptive analytics answers 'what happened?' — KPIs, summary stats, dashboards. Foundation for higher-tier analytics."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes diagnostic analytics?",
    "options": [
      "Predicting future outcomes",
      "Exploring why something happened (root cause analysis, drill-down, correlations)",
      "Recommending actions",
      "Only summarizing past KPIs"
    ],
    "answer": 1,
    "explanation": "Diagnostic analytics answers 'why did it happen?' — drill-downs, correlations, segmentation. Goes beyond what to causal-style exploration."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes predictive analytics?",
    "options": [
      "Summarizing past KPIs",
      "Using historical patterns and models to forecast future outcomes",
      "Recommending what action to take",
      "Encrypting data"
    ],
    "answer": 1,
    "explanation": "Predictive analytics forecasts (sales next quarter, customer churn likelihood). Uses statistical models or ML. Doesn't prescribe action — just forecasts."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes prescriptive analytics?",
    "options": [
      "Summarizing what happened",
      "Recommending actions or optimal decisions, often via optimization or simulation",
      "Just predicting outcomes",
      "Building dashboards only"
    ],
    "answer": 1,
    "explanation": "Prescriptive analytics recommends actions — 'do X to optimize Y.' Often uses optimization, simulation, or reinforcement learning."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes survivorship bias?",
    "options": [
      "Bias toward records that survive a process, ignoring those that didn't make it (e.g., studying successful companies only)",
      "A type of database index",
      "Bias toward older customers",
      "A type of encryption"
    ],
    "answer": 0,
    "explanation": "Survivorship bias systematically distorts conclusions by ignoring failures. Classic examples: studying surviving companies, planes returning from missions."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes a confounding variable?",
    "options": [
      "A direct cause of the outcome",
      "A variable that influences both the predictor and the outcome, distorting the apparent relationship",
      "A variable unrelated to the outcome",
      "An encrypted variable"
    ],
    "answer": 1,
    "explanation": "Confounders create spurious associations. Classic: ice cream sales correlate with drowning, but both are driven by hot weather. Control via randomization or stratification."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a typical use of a bar chart?",
    "options": [
      "Showing continuous trends over time",
      "Comparing values across discrete categories",
      "Showing a single value",
      "Encrypting categorical data"
    ],
    "answer": 1,
    "explanation": "Bar charts compare values across categories. Horizontal bars suit long category names. Length should encode the value (avoid 3D effects that distort)."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a typical use of a line chart?",
    "options": [
      "Comparing two unrelated categorical values",
      "Showing trends in a continuous variable over time or another ordered axis",
      "Showing parts of a whole",
      "Displaying geographic boundaries"
    ],
    "answer": 1,
    "explanation": "Line charts emphasize trends and changes over an ordered axis (most often time). The connecting line implies continuity between adjacent points."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a KEY limitation of pie charts?",
    "options": [
      "They can show only continuous variables",
      "Humans are poor at comparing angles/areas, so they become hard to read with many slices",
      "Pie charts cannot show categories",
      "Pie charts require 3D rendering"
    ],
    "answer": 1,
    "explanation": "Pie charts work for a few categories with clearly distinct sizes. With many slices or similar values, bar charts are usually clearer."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a typical use of a scatter plot?",
    "options": [
      "Showing parts of a whole",
      "Examining the relationship between two numeric variables",
      "Showing a single time series",
      "Encrypting categorical data"
    ],
    "answer": 1,
    "explanation": "Scatter plots reveal correlation, clusters, outliers, and the shape of relationships between two numeric variables. Add color/size for additional dimensions."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "What does a histogram visualize?",
    "options": [
      "A categorical comparison",
      "The distribution (frequency by bin) of a single numeric variable",
      "Geographic locations",
      "Network topology"
    ],
    "answer": 1,
    "explanation": "Histograms show how a numeric variable is distributed by binning values and counting. Choice of bin width affects perception of the distribution."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is conveyed by a box plot?",
    "options": [
      "Median, quartiles, and outliers of a numeric variable",
      "Pie-slice proportions",
      "Geographic locations",
      "Network throughput only"
    ],
    "answer": 0,
    "explanation": "Box plots show min/max (often as whiskers), Q1, median, Q3, and outliers. Compact way to compare distributions across categories."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a typical use of a heatmap?",
    "options": [
      "Showing a single value over time",
      "Encoding values via color across two categorical or ordered dimensions",
      "Showing parts of a whole",
      "Visualizing network protocols"
    ],
    "answer": 1,
    "explanation": "Heatmaps display matrix values via color. Useful for correlation matrices, calendar plots, and dense two-dimensional comparisons."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "What is a treemap used for?",
    "options": [
      "Showing trends over time",
      "Visualizing hierarchical part-to-whole relationships via nested rectangles whose area encodes value",
      "Encrypting categorical data",
      "Network packet capture"
    ],
    "answer": 1,
    "explanation": "Treemaps show hierarchical data as nested rectangles sized by a measure. Great for visualizing portfolios, file system sizes, or category drilldowns."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a typical use of a Sankey diagram?",
    "options": [
      "Showing a categorical comparison",
      "Visualizing flows between nodes, with band widths proportional to flow magnitude",
      "Showing a single KPI",
      "Encrypting transactions"
    ],
    "answer": 1,
    "explanation": "Sankey diagrams show how a quantity flows through stages (energy budgets, user journeys, funding). Width = magnitude."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a typical use of a funnel chart?",
    "options": [
      "Geographic data",
      "Showing progression through stages of a process, with drop-off between stages",
      "A multivariate regression",
      "Encrypting metrics"
    ],
    "answer": 1,
    "explanation": "Funnel charts visualize sequential conversion through stages (e.g., visitors → signups → trial → purchase), making drop-off at each step visible."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "When is a choropleth map appropriate?",
    "options": [
      "When data lacks geographic component",
      "When showing values aggregated by geographic regions via shading",
      "When showing 3D structures",
      "When comparing two unrelated metrics"
    ],
    "answer": 1,
    "explanation": "Choropleth maps shade regions (states, countries, ZIPs) by a metric value. Be cautious with raw counts — area can mislead; rates per capita are often better."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a KEY difference between an area chart and a line chart?",
    "options": [
      "They are the same",
      "Area charts fill the region under the line, emphasizing magnitude; useful for stacked variants showing parts of a whole",
      "Area charts cannot show time",
      "Line charts use color and area charts do not"
    ],
    "answer": 1,
    "explanation": "Area charts emphasize cumulative magnitude. Stacked area charts show parts of a whole over time. Risk: stacked areas can mislead about individual series trends."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a common pitfall of stacked bar charts?",
    "options": [
      "Cannot show multiple categories",
      "Harder to compare values of non-baseline series across bars because their baselines vary",
      "They cannot use color",
      "They require 3D rendering"
    ],
    "answer": 1,
    "explanation": "Stacked bars make total comparisons easy but middle/top series are visually hard to compare across bars. Grouped (clustered) bars or small multiples may serve better."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "What does a 100% stacked bar chart emphasize?",
    "options": [
      "Absolute totals",
      "Proportional composition (parts of a whole) across categories",
      "Time of day",
      "Just one value"
    ],
    "answer": 1,
    "explanation": "100% stacked bars normalize each bar to 100%, emphasizing composition over absolute size. Useful when proportions matter more than totals."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a typical use of a bullet chart?",
    "options": [
      "Drawing diagrams of arrows",
      "Comparing a measured value against a target and qualitative ranges (good/satisfactory/poor)",
      "Showing geographic data",
      "Encrypting reports"
    ],
    "answer": 1,
    "explanation": "Bullet charts (Stephen Few) replace gauges with a compact, information-dense alternative for performance against a target. Great for KPI dashboards."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which BEST describes a Pareto chart?",
    "options": [
      "A scatter plot of two variables",
      "A combined bar chart sorted in descending order with a cumulative-percentage line",
      "A pie chart",
      "A line chart with confidence bands"
    ],
    "answer": 1,
    "explanation": "Pareto charts highlight the 'vital few' contributors to a problem. Bars sorted descending; line shows cumulative percentage."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is the PRIMARY purpose of a sparkline?",
    "options": [
      "Large standalone analytical chart",
      "A small inline chart embedded in text or tables to show a trend at a glance",
      "Encrypting numeric values",
      "Generating reports"
    ],
    "answer": 1,
    "explanation": "Sparklines (Edward Tufte) embed compact trend information directly in tables or text. Useful for dashboards showing many KPIs."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a KEY limitation of word clouds?",
    "options": [
      "Cannot represent text data",
      "Size and color encode imprecise quantitative information; poor for accurate comparison",
      "Always require live data feeds",
      "Are illegal in many jurisdictions"
    ],
    "answer": 1,
    "explanation": "Word clouds are visually engaging but imprecise. Bar charts of term frequencies are usually more informative for analysis."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is the PRIMARY purpose of a dashboard?",
    "options": [
      "Replace all analytical reports",
      "Present at-a-glance KPIs and visualizations supporting a specific audience and decisions",
      "Store raw data",
      "Execute data pipelines"
    ],
    "answer": 1,
    "explanation": "Dashboards present curated KPIs and visuals tailored to an audience's decisions. Effective dashboards have a clear purpose and minimal noise."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which BEST distinguishes an operational dashboard from a strategic one?",
    "options": [
      "They are identical",
      "Operational dashboards focus on real-time/near-real-time monitoring; strategic dashboards focus on longer-term trends and goals",
      "Operational dashboards require no data",
      "Strategic dashboards use only pie charts"
    ],
    "answer": 1,
    "explanation": "Operational dashboards monitor live operations (call center queues, server health). Strategic dashboards track progress toward goals over weeks/months/quarters."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which BEST defines a Key Performance Indicator (KPI)?",
    "options": [
      "Any data point on a dashboard",
      "A measurable value reflecting how well an objective is being achieved",
      "A type of database table",
      "A visualization software package"
    ],
    "answer": 1,
    "explanation": "KPIs are aligned to objectives, measurable, and actionable. Vanity metrics (impressions, downloads alone) can mislead without context."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a BEST practice when designing a dashboard?",
    "options": [
      "Include every possible metric",
      "Design for a specific audience and the decisions they need to make",
      "Always use 3D visuals",
      "Hide axis labels for cleanliness"
    ],
    "answer": 1,
    "explanation": "Dashboards designed without an audience and decision in mind become noisy. Start with the questions users need answered, then design."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a typical refresh rate for an operational monitoring dashboard?",
    "options": [
      "Once per year",
      "Real-time or near-real-time (seconds to minutes)",
      "Once per decade",
      "Manually on demand only"
    ],
    "answer": 1,
    "explanation": "Operational dashboards need fresh data (often sub-minute). Strategic dashboards may refresh daily/weekly. Match refresh cadence to decision cadence."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "What is the PRIMARY purpose of dashboard filters?",
    "options": [
      "Encrypt the data",
      "Let viewers narrow displayed data to a slice of interest (date range, region, category)",
      "Replace KPIs",
      "Change the visualization tool"
    ],
    "answer": 1,
    "explanation": "Filters empower self-service exploration within bounds, letting users slice the dashboard to their needs without separate reports."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which BEST distinguishes drill-down from drill-through?",
    "options": [
      "They are identical",
      "Drill-down expands detail within the same view; drill-through navigates to a separate detailed view tied to the selected context",
      "Drill-down deletes data",
      "Drill-through prints reports"
    ],
    "answer": 1,
    "explanation": "Drill-down: progressively reveal more detail in place (year → quarter → month). Drill-through: jump to a separate detailed report for the selected element."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which BEST describes cross-filtering on a dashboard?",
    "options": [
      "A search bar across all dashboards",
      "Clicking a chart element filters other charts on the same dashboard to that selection",
      "Encrypting filter inputs",
      "Removing all filters"
    ],
    "answer": 1,
    "explanation": "Cross-filtering links visuals: clicking a region on a map filters the bar chart and time series to that region. Speeds exploration significantly."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a BEST practice for accessible dashboard color choices?",
    "options": [
      "Use red and green as the only differentiators",
      "Choose color palettes that remain distinguishable to color-blind users; combine with shape, label, or position cues",
      "Use the brightest possible colors",
      "Always disable color"
    ],
    "answer": 1,
    "explanation": "About 8% of men have some color vision deficiency (typically red-green). Use color-blind-friendly palettes (viridis, ColorBrewer) and don't rely on color alone."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which BEST describes Edward Tufte's 'data-ink ratio' principle?",
    "options": [
      "Maximize decorative ink",
      "Maximize the proportion of ink representing data; minimize chart junk",
      "Use red ink only",
      "Print all dashboards"
    ],
    "answer": 1,
    "explanation": "Maximize ink encoding data; minimize gridlines, borders, 3D effects, and decoration that doesn't carry information. Improves clarity and analytical focus."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which BEST defines 'chart junk'?",
    "options": [
      "Useful chart annotations",
      "Visual elements that don't carry information and may distract or mislead (3D effects, heavy gridlines, decorative backgrounds)",
      "Required legends",
      "Axis titles"
    ],
    "answer": 1,
    "explanation": "Chart junk distracts from the data without adding meaning. Removing it usually improves clarity and signal-to-noise ratio."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a common way visualizations mislead viewers about magnitude of change?",
    "options": [
      "Including a complete y-axis from zero",
      "Truncating the y-axis so small differences appear dramatic",
      "Using clear labels",
      "Including a legend"
    ],
    "answer": 1,
    "explanation": "Truncated axes exaggerate small differences. For bar charts especially, starting at zero is the convention. Line charts may legitimately truncate when changes matter, with clear labeling."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a common pitfall of dual-axis charts?",
    "options": [
      "They are easier to read than single-axis charts",
      "They can mislead by suggesting correlation between series whose axes are scaled differently",
      "They cannot use color",
      "Modern tools don't support them"
    ],
    "answer": 1,
    "explanation": "Dual axes invite spurious comparisons because each axis's scale is chosen independently. Use sparingly; small multiples often work better."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a typical pitfall of 3D pie or bar charts?",
    "options": [
      "They are more accurate than 2D versions",
      "Perspective distortion makes accurate value comparison harder",
      "They use less ink",
      "They are required by standards"
    ],
    "answer": 1,
    "explanation": "3D effects distort perceived size based on perspective. Slices in the front look larger; bars in back look smaller. Stick to 2D for accurate comparison."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a common technique to mislead with time-series visualizations?",
    "options": [
      "Showing the full historical range",
      "Cherry-picking a short time window that supports a desired narrative",
      "Labeling axes clearly",
      "Including context annotations"
    ],
    "answer": 1,
    "explanation": "Selecting a flattering time window can hide longer-term trends. Always show enough context to honestly characterize the trend."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a common visualization pitfall related to aggregation?",
    "options": [
      "Always showing daily detail",
      "Aggregating data in ways that hide important variance (e.g., averaging masks bimodality)",
      "Using too many filters",
      "Adding too many labels"
    ],
    "answer": 1,
    "explanation": "Aggregations can hide critical structure: mean income masks inequality; daily totals hide hourly patterns. Show distributions and disaggregations where they matter."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a pitfall when sizing bubbles in a bubble chart?",
    "options": [
      "Sizing by diameter rather than area, exaggerating differences",
      "Sizing by area",
      "Using a legend",
      "Including labels"
    ],
    "answer": 0,
    "explanation": "Bubble area should encode the value, not diameter. Sizing by diameter (radius) makes a 2x value appear 4x larger by area. Most tools do this correctly by default."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a common color-scale pitfall in visualizations?",
    "options": [
      "Using a sequential palette for sequential data",
      "Using a diverging palette when no meaningful center value exists, or vice versa",
      "Including a color legend",
      "Distinguishing positive from negative changes"
    ],
    "answer": 1,
    "explanation": "Match palette type to data: sequential for ordered values, diverging for data centered on a meaningful midpoint, qualitative for categorical."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "What is Tableau?",
    "options": [
      "An open-source statistical language",
      "A commercial business intelligence (BI) and visualization platform",
      "A NoSQL database",
      "A Python data manipulation library"
    ],
    "answer": 1,
    "explanation": "Tableau is a leading commercial BI platform (now part of Salesforce). Common alternatives: Power BI (Microsoft), Looker (Google), Qlik."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "What is Power BI?",
    "options": [
      "A Linux distribution",
      "Microsoft's business intelligence and visualization platform integrated with the Microsoft data stack",
      "A NoSQL database",
      "An open-source web framework"
    ],
    "answer": 1,
    "explanation": "Power BI is Microsoft's BI suite, deeply integrated with Microsoft data sources (SQL Server, Azure, Excel). Common in Microsoft-centric organizations."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "What is Looker?",
    "options": [
      "A NoSQL document store",
      "A modern BI platform (now part of Google Cloud) modeling data with LookML on top of a SQL warehouse",
      "A network monitoring tool",
      "An OS distribution"
    ],
    "answer": 1,
    "explanation": "Looker models semantic layer (LookML) over a SQL warehouse and lets users explore with governed metrics. Acquired by Google in 2019."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "What is Qlik (QlikView/Qlik Sense)?",
    "options": [
      "A database engine",
      "A BI platform known for associative in-memory analytics and exploration",
      "A version control system",
      "A Linux distribution"
    ],
    "answer": 1,
    "explanation": "Qlik's associative engine lets users freely explore data without predefined drill paths. Qlik Sense is the modern product line."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is an open-source data-visualization library commonly used in Python?",
    "options": [
      "NumPy",
      "Matplotlib (also Plotly and Seaborn)",
      "Pytest",
      "PyPI"
    ],
    "answer": 1,
    "explanation": "Matplotlib is foundational; Seaborn (built on it) gives higher-level statistical plots; Plotly creates interactive visualizations. Other ecosystems: ggplot2 (R), D3.js (web)."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which BEST describes self-service BI?",
    "options": [
      "Reports written only by IT and delivered to business users",
      "Business users can build their own analyses and dashboards on governed data, with guard rails",
      "All analyses must be done in spreadsheets",
      "Analytics is outsourced entirely"
    ],
    "answer": 1,
    "explanation": "Self-service BI empowers business users with curated, governed data sources and tools. Reduces IT bottleneck while requiring careful governance to avoid 'wild west' proliferation."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which BEST describes 'storytelling with data'?",
    "options": [
      "Hiding inconvenient findings",
      "Structuring data presentations with narrative, context, and clear takeaways for the audience",
      "Avoiding any narrative",
      "Using only words and no visuals"
    ],
    "answer": 1,
    "explanation": "Effective data storytelling combines context, visuals, and narrative to help audiences understand findings and take action. Cole Nussbaumer Knaflic and others have popularized the discipline."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Why is understanding the audience critical when designing a visualization?",
    "options": [
      "It is not",
      "Different audiences (executives, analysts, public) need different levels of detail, context, and complexity",
      "Audiences should adapt to the visualization",
      "Audience matters only for color choices"
    ],
    "answer": 1,
    "explanation": "Executives want headline insights; analysts want detail and the ability to slice; public audiences need plain-language framing. The same data may need three different presentations."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "What is the PRIMARY purpose of annotations on a chart?",
    "options": [
      "Decoration",
      "Highlight key events, thresholds, or insights to guide the viewer's attention",
      "Encrypt data points",
      "Slow down rendering"
    ],
    "answer": 1,
    "explanation": "Annotations call out the why behind notable points (a launch, an outage, a policy change), giving the audience context that raw data alone doesn't convey."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a BEST practice for chart titles?",
    "options": [
      "Use the column name as-is",
      "Use a clear, action-oriented title that summarizes the takeaway (e.g., 'Conversion fell 12% after redesign')",
      "Avoid titles",
      "Use generic 'Chart 1' style titles"
    ],
    "answer": 1,
    "explanation": "Descriptive titles summarize the insight. 'Sales by month' is bland; 'Q4 sales hit record on holiday promotion' guides interpretation."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is an example of using pre-attentive visual attributes effectively?",
    "options": [
      "Cluttering the chart with extra elements",
      "Using a contrasting color to highlight a single data point of interest",
      "Removing all color",
      "Hiding the axes"
    ],
    "answer": 1,
    "explanation": "Pre-attentive attributes (color, size, motion, position) are processed in under 250ms. Use sparingly to draw attention to what matters most."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a KEY difference between static and interactive dashboards?",
    "options": [
      "Static dashboards refresh more frequently",
      "Interactive dashboards let users filter and drill; static dashboards are fixed snapshots (e.g., PDF, image)",
      "Static dashboards always use color",
      "Interactive dashboards cannot be shared"
    ],
    "answer": 1,
    "explanation": "Interactive dashboards let users explore. Static (PDF, slide, image) is appropriate for compliance reports, formal communication, or audiences without dashboard access."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a typical operational dashboard metric?",
    "options": [
      "Annual revenue forecast",
      "Current open support tickets per agent",
      "5-year strategic plan progress",
      "Lifetime customer value"
    ],
    "answer": 1,
    "explanation": "Operational metrics measure live state for immediate action: open tickets, server load, ride wait times. Strategic metrics span longer horizons."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a typical strategic dashboard metric?",
    "options": [
      "CPU usage right now",
      "Quarterly net retention rate against the annual target",
      "Number of HTTP requests per second",
      "Active sessions in last minute"
    ],
    "answer": 1,
    "explanation": "Strategic metrics track progress toward business goals over quarters/years. They inform planning and resourcing rather than minute-by-minute decisions."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a typical use of a multi-line time-series chart?",
    "options": [
      "Showing parts of a whole",
      "Comparing trends across multiple series over the same time axis",
      "Showing categorical proportions",
      "Visualizing geographic boundaries"
    ],
    "answer": 1,
    "explanation": "Multi-line time series compare trends across categories or metrics. Use color and labels carefully; too many lines (spaghetti) becomes unreadable — consider small multiples."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which BEST describes 'small multiples' as a visualization pattern?",
    "options": [
      "One large chart per dataset",
      "A grid of small charts with the same scale/axes, showing the same chart for different categories",
      "Many overlapping series in one chart",
      "Pie charts only"
    ],
    "answer": 1,
    "explanation": "Small multiples (trellis charts) repeat the same chart structure for different categories, supporting comparison across many groups without overload."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a trade-off of using pre-aggregated data on dashboards?",
    "options": [
      "Always slower than live queries",
      "Faster load times at the cost of less flexibility for ad-hoc breakdowns not pre-built",
      "Less accurate by design",
      "Requires more storage than live data"
    ],
    "answer": 1,
    "explanation": "Pre-aggregation accelerates common queries. Trade-off: flexibility — questions outside the pre-built aggregations need recalculation or detailed re-querying."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Why is showing the sample size with visualized survey results important?",
    "options": [
      "It always reduces credibility",
      "Small samples produce wide confidence intervals; transparency helps audiences gauge reliability",
      "Sample size is irrelevant to visualization",
      "It is required only for animations"
    ],
    "answer": 1,
    "explanation": "A bar chart of '67%' from n=10 is very different from n=10000. Showing N (or confidence intervals) gives the audience appropriate confidence in the result."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "If a bar chart starts the y-axis at 90% to make small differences look large, this is an example of:",
    "options": [
      "Best practice for compact charts",
      "A misleading visualization technique that exaggerates the magnitude of differences",
      "Required convention",
      "An accessibility improvement"
    ],
    "answer": 1,
    "explanation": "Truncating the y-axis of a bar chart misleads about magnitude. Bar charts should typically start at zero, or include a clear break indicator if truncating."
  },
  {
    "domain": "4: Visualization and Reporting",
    "question": "Which is a common pitfall when overlaying multiple metrics with different units?",
    "options": [
      "Using a single shared axis",
      "Plotting them on the same axis without appropriate scaling, distorting perceived relationships",
      "Using different colors",
      "Adding a legend"
    ],
    "answer": 1,
    "explanation": "Different units on the same axis distort comparisons. Use dual axes with caution, small multiples, or normalize to a common scale (index)."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which data quality dimension measures whether data correctly reflects the real-world entity it describes?",
    "options": [
      "Completeness",
      "Accuracy",
      "Timeliness",
      "Uniqueness"
    ],
    "answer": 1,
    "explanation": "Accuracy = correctness against the real world. Completeness = no missing values. Consistency = no contradictions across systems. Timeliness = up to date. Uniqueness = no unintended duplicates."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which data quality dimension measures whether all required values are present?",
    "options": [
      "Accuracy",
      "Completeness",
      "Validity",
      "Uniqueness"
    ],
    "answer": 1,
    "explanation": "Completeness asks whether expected data is present. Examples: every customer has an email; every order has a customer_id."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which data quality dimension measures whether data agrees across systems and over time?",
    "options": [
      "Timeliness",
      "Consistency",
      "Uniqueness",
      "Validity"
    ],
    "answer": 1,
    "explanation": "Consistency: same fact, same value, across systems and time. Example: customer name is the same in CRM and billing. MDM efforts address consistency."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which data quality dimension measures whether data is sufficiently current for its intended use?",
    "options": [
      "Accuracy",
      "Timeliness",
      "Uniqueness",
      "Validity"
    ],
    "answer": 1,
    "explanation": "Timeliness (or freshness) measures how current the data is. Required freshness depends on use: real-time for trading, monthly for some reports."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which data quality dimension measures whether data conforms to defined formats, types, and ranges?",
    "options": [
      "Accuracy",
      "Validity",
      "Uniqueness",
      "Completeness"
    ],
    "answer": 1,
    "explanation": "Validity checks conformance to rules: email regex, date in range, value in an allowed list. Distinct from accuracy (correctly reflecting reality)."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which data quality dimension measures whether records are not unintentionally duplicated?",
    "options": [
      "Accuracy",
      "Uniqueness",
      "Completeness",
      "Timeliness"
    ],
    "answer": 1,
    "explanation": "Uniqueness flags unintended duplicates. Customer 'John Smith' appearing twice (with slight spelling variations) violates uniqueness. Deduplication and fuzzy matching address it."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which data quality dimension addresses referential and relational consistency (e.g., orphan records)?",
    "options": [
      "Integrity",
      "Validity",
      "Completeness",
      "Timeliness"
    ],
    "answer": 0,
    "explanation": "Integrity: relationships and constraints hold (no orphan foreign keys, sums match, parent-child relations intact). Often enforced at the database level."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST distinguishes data profiling from data cleansing?",
    "options": [
      "They are the same",
      "Profiling discovers and quantifies data quality issues; cleansing corrects them",
      "Profiling encrypts data; cleansing decrypts",
      "Cleansing comes before profiling"
    ],
    "answer": 1,
    "explanation": "Profile to know what you have, then cleanse what needs fixing. The cycle is iterative as new sources or issues surface."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "What does data lineage track?",
    "options": [
      "Customer purchase history",
      "The origin and movement of data through systems and transformations",
      "Employee org charts",
      "Network traffic"
    ],
    "answer": 1,
    "explanation": "Lineage shows how data flows from source to target through transformations, supporting trust, impact analysis, and regulatory traceability."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "What does a data catalog primarily provide?",
    "options": [
      "A backup of source data",
      "Searchable inventory and metadata for data assets (sources, schemas, owners, sensitivity)",
      "Encrypted storage only",
      "A networking tool"
    ],
    "answer": 1,
    "explanation": "Data catalogs (Alation, Collibra, Atlan, DataHub) inventory data assets, their owners, descriptions, lineage, and sensitivity, supporting discovery and governance."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST describes the data steward role?",
    "options": [
      "Day-to-day execution of data quality, lineage, and compliance work for a defined data domain",
      "Strategic ownership of all data",
      "Sole authority over all access decisions",
      "Network engineering"
    ],
    "answer": 0,
    "explanation": "Stewards are domain experts responsible for hands-on data quality, definitions, classifications, and policy compliance within their scope. They report up to owners."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST describes the data owner role?",
    "options": [
      "Day-to-day data cleaning operator",
      "Senior-role accountability for a data domain, including decisions on classification, access, and policy",
      "External vendor support",
      "DBA-only function"
    ],
    "answer": 1,
    "explanation": "Data owners (often senior business leaders) are accountable for the data domain — its value, classification, and access policies. Stewards execute the day-to-day work."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST describes the data custodian role?",
    "options": [
      "The business owner of the data",
      "The IT role implementing and maintaining controls (storage, backup, access) for data",
      "An external auditor",
      "The data subject"
    ],
    "answer": 1,
    "explanation": "Custodians (typically IT/DBAs) implement and maintain the technical controls owners and stewards require: storage, backup, access enforcement, security."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which type of metadata describes the meaning and business context of data (e.g., definition of 'customer')?",
    "options": [
      "Technical metadata",
      "Business metadata",
      "Operational metadata",
      "Network metadata"
    ],
    "answer": 1,
    "explanation": "Business metadata: definitions, owners, sensitivity classifications. Technical metadata: schemas, types, lineage. Operational metadata: pipeline run times, error counts."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which is an example of technical metadata?",
    "options": [
      "A column's plain-English business definition",
      "A column's data type and the schema it belongs to",
      "The data owner's name",
      "Whether the data is regulated"
    ],
    "answer": 1,
    "explanation": "Technical metadata describes structure: types, schemas, table sizes, indexes, partitioning, lineage edges."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which is an example of operational metadata?",
    "options": [
      "A column's data type",
      "Last pipeline run timestamp, success/failure status, row counts processed",
      "Business definition",
      "Encryption key length"
    ],
    "answer": 1,
    "explanation": "Operational metadata tracks data movement and processing: when, by what pipeline, with what result. Critical for SLAs and troubleshooting."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST defines PII (Personally Identifiable Information)?",
    "options": [
      "Any data stored in a database",
      "Information that could identify a specific individual (alone or in combination)",
      "Only health records",
      "Only payment card data"
    ],
    "answer": 1,
    "explanation": "PII includes direct identifiers (name, SSN, email) and quasi-identifiers that, in combination, can re-identify individuals (ZIP + birthdate + gender, etc.)."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST distinguishes PHI from general PII?",
    "options": [
      "They are the same concept",
      "PHI is health-related individually identifiable information protected under HIPAA, a subset of PII",
      "PHI is broader than PII",
      "PHI is not regulated"
    ],
    "answer": 1,
    "explanation": "PHI is a HIPAA-defined subset of PII relating to health, treatment, or payment for healthcare. PHI receives specific protections under HIPAA's rules."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which is considered cardholder data under PCI DSS?",
    "options": [
      "Employee badge numbers",
      "Primary Account Number (PAN), cardholder name, expiration, service code",
      "Network IP addresses",
      "Email subject lines"
    ],
    "answer": 1,
    "explanation": "PCI scope: cardholder data (PAN + cardholder name, expiration, service code) and sensitive authentication data (CVV, magnetic stripe). Strict storage rules apply."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST describes the scope of the EU GDPR?",
    "options": [
      "Applies only to EU companies",
      "Applies to processing personal data of individuals in the EU, regardless of where the processor is located",
      "Applies only to government agencies",
      "Applies only to children's data"
    ],
    "answer": 1,
    "explanation": "GDPR has extraterritorial reach: organizations anywhere processing EU residents' personal data must comply. Fines can reach 4% of global turnover."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which is a right granted to data subjects under the GDPR?",
    "options": [
      "Right to a tax refund",
      "Right to access, rectify, erase, and port their personal data",
      "Right to publish anyone's data",
      "Right to free Wi-Fi"
    ],
    "answer": 1,
    "explanation": "GDPR grants individuals rights including access, rectification, erasure ('right to be forgotten'), portability, restriction, and objection. Organizations must support these requests."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST describes the scope of the California Consumer Privacy Act (CCPA/CPRA)?",
    "options": [
      "Federal U.S. law applying nationwide",
      "California state law granting California residents rights over their personal data held by qualifying businesses",
      "Applies only to government",
      "Applies to children's data only"
    ],
    "answer": 1,
    "explanation": "CCPA/CPRA grants California residents rights to know, delete, correct, and opt out of sale/sharing of their personal data. Triggers based on revenue, data volume, or sale of data."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST describes the scope of HIPAA?",
    "options": [
      "EU privacy regulation",
      "U.S. federal law governing privacy and security of protected health information by covered entities and business associates",
      "Banking regulation",
      "Cybersecurity standard for utilities"
    ],
    "answer": 1,
    "explanation": "HIPAA's Privacy and Security Rules apply to covered entities (providers, plans, clearinghouses) and their business associates handling PHI. Breach notification rule defines required disclosures."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which is a typical limitation on the GDPR right to erasure?",
    "options": [
      "Always absolute with no exceptions",
      "Does not apply where data is needed for legal obligations, public interest, or freedom of expression",
      "Applies only to children under 5",
      "Requires payment to exercise"
    ],
    "answer": 1,
    "explanation": "Right to erasure has exceptions: legal obligation to retain (tax, employment), public interest, freedom of expression, and other narrowly-defined cases."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST describes the data minimization principle in privacy frameworks?",
    "options": [
      "Collect as much data as possible",
      "Collect and retain only personal data necessary for the stated purpose",
      "Encrypt all data",
      "Anonymize after 100 years"
    ],
    "answer": 1,
    "explanation": "Data minimization (GDPR Article 5) limits collection to what's necessary for the purpose. Reduces breach impact and compliance burden."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST describes the purpose limitation principle?",
    "options": [
      "Data can be used for any purpose",
      "Data collected for one purpose should not be used for incompatible purposes without lawful basis",
      "Purpose has no legal meaning",
      "Purpose is decided after collection"
    ],
    "answer": 1,
    "explanation": "Purpose limitation (GDPR principle) requires that data collected for one purpose isn't repurposed without new lawful basis or consent."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which is a typical requirement for valid consent under GDPR?",
    "options": [
      "Pre-ticked checkboxes are acceptable",
      "Freely given, specific, informed, and unambiguous; able to be withdrawn",
      "Verbal nodding only",
      "Default opt-in is acceptable"
    ],
    "answer": 1,
    "explanation": "Valid GDPR consent requires affirmative, specific, informed action. Pre-ticked boxes, bundled consent, and indirect indications are not sufficient."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST describes data anonymization?",
    "options": [
      "Reversibly masking some fields",
      "Irreversibly transforming data so individuals cannot be re-identified",
      "Adding an encryption layer",
      "Renaming columns randomly"
    ],
    "answer": 1,
    "explanation": "True anonymization is irreversible — outside GDPR scope. Difficult in practice because indirect identifiers can re-identify individuals; k-anonymity, differential privacy techniques help."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST distinguishes pseudonymization from anonymization?",
    "options": [
      "They are identical",
      "Pseudonymization replaces identifiers with surrogates while keeping a key for re-identification; remains personal data under GDPR",
      "Pseudonymization makes data unreadable to all",
      "Anonymization is reversible"
    ],
    "answer": 1,
    "explanation": "Pseudonymized data can be re-identified using a separately held key, so it remains personal data under GDPR (with reduced risk). True anonymization can't be reversed."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "What does data masking PRIMARILY accomplish?",
    "options": [
      "Replace data with placeholder values to hide originals from unauthorized viewers (e.g., XXX-XX-1234)",
      "Encrypt files at rest",
      "Permanently delete data",
      "Add a digital signature"
    ],
    "answer": 0,
    "explanation": "Masking displays partial or obfuscated values to authorized viewers while protecting the original. Common in customer-service screens and non-production environments."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "What does tokenization replace sensitive data with?",
    "options": [
      "A digital signature",
      "A non-sensitive surrogate value (token) that can be exchanged back via a secure vault",
      "An encrypted hash",
      "A QR code"
    ],
    "answer": 1,
    "explanation": "Tokenization swaps sensitive values (credit cards) for tokens; the mapping lives in a secure vault. Reduces PCI scope and limits exposure if downstream systems are breached."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which is a typical mechanism for transferring personal data from the EU to a country without an adequacy decision?",
    "options": [
      "Doing nothing",
      "Standard Contractual Clauses (SCCs) or Binding Corporate Rules (BCRs)",
      "Posting on social media",
      "Sending via fax only"
    ],
    "answer": 1,
    "explanation": "SCCs and BCRs are the primary GDPR mechanisms for transfers outside the EEA absent an adequacy decision. Schrems II added supplementary measure requirements."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST distinguishes data residency from data sovereignty?",
    "options": [
      "They are identical",
      "Residency refers to where data is physically stored; sovereignty refers to which jurisdiction's laws apply",
      "Residency is technical; sovereignty is fictional",
      "Both apply only to U.S. data"
    ],
    "answer": 1,
    "explanation": "Data residency: where data physically resides. Data sovereignty: which government has legal jurisdiction over it. Cloud providers offer residency options but sovereignty depends on legal context."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST describes a data retention policy?",
    "options": [
      "A schedule for backups",
      "Defined periods and rules for keeping and then disposing of records, based on legal, regulatory, and business needs",
      "Encryption configuration",
      "An access control list"
    ],
    "answer": 1,
    "explanation": "Retention policies define how long records must be kept and when they should be destroyed. Balances legal/regulatory mandates with risk and storage cost."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Within how long must GDPR controllers typically notify the supervisory authority of a personal data breach?",
    "options": [
      "Within 72 hours of becoming aware",
      "Within 24 hours",
      "Within 30 days",
      "Within one year"
    ],
    "answer": 0,
    "explanation": "GDPR Article 33: notification 'without undue delay and, where feasible, not later than 72 hours' of becoming aware. Affected individuals must be notified if high risk."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "What is the PRIMARY purpose of audit logging access to sensitive data?",
    "options": [
      "Increase storage costs",
      "Establish accountability and support investigation by recording who accessed what data when",
      "Replace access controls",
      "Encrypt the data automatically"
    ],
    "answer": 1,
    "explanation": "Audit logs are foundational for accountability, detection, and forensic investigation. Logs themselves must be protected to prevent tampering."
  },
  {
    "domain": "5: Data Governance, Quality, and Compliance",
    "question": "Which BEST describes 'privacy by design'?",
    "options": [
      "Privacy considered after deployment",
      "Privacy considerations integrated into systems, processes, and defaults from the start",
      "Privacy ignored",
      "Privacy decided by users only"
    ],
    "answer": 1,
    "explanation": "Privacy by design (a principle in GDPR Article 25) builds in privacy from the start — minimization, default-protective settings, encryption — rather than bolting on later."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST distinguishes Artificial Intelligence from Machine Learning?",
    "options": [
      "They are the same thing",
      "AI is the broad goal of machines performing intelligent tasks; ML is a subset where machines learn patterns from data",
      "ML is broader than AI",
      "AI is only used in robotics"
    ],
    "answer": 1,
    "explanation": "AI is the umbrella term for systems that perform tasks requiring intelligence. ML is an AI approach where models learn patterns from data rather than being explicitly programmed."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST distinguishes generative AI from predictive AI?",
    "options": [
      "Both produce identical outputs",
      "Generative AI creates new content (text, images, code); predictive AI forecasts outcomes from inputs",
      "Generative AI cannot use neural networks",
      "Predictive AI is always rule-based"
    ],
    "answer": 1,
    "explanation": "Generative AI (LLMs, image generators) creates new content. Predictive AI (classifiers, regressors) forecasts an outcome (label or value) from given inputs."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes a Large Language Model (LLM)?",
    "options": [
      "A small statistical model trained on a few sentences",
      "A neural network trained on large text corpora to generate and reason about language",
      "A relational database for storing text",
      "A spreadsheet macro"
    ],
    "answer": 1,
    "explanation": "LLMs (e.g., GPT family, Claude, Llama) are large neural networks (often transformers) trained on extensive text. They generate text, answer questions, and reason within limits."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes Natural Language Processing (NLP)?",
    "options": [
      "A type of relational database design",
      "A field of AI concerned with enabling computers to understand and generate human language",
      "A networking protocol",
      "A graphics rendering technique"
    ],
    "answer": 1,
    "explanation": "NLP covers text and speech tasks: tokenization, parsing, sentiment, translation, summarization, question answering. Modern NLP is dominated by deep learning and transformers."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a typical NLP task?",
    "options": [
      "Encrypting message bodies",
      "Sentiment analysis (classifying text as positive, negative, or neutral)",
      "Calculating disk usage",
      "Defragmenting a hard drive"
    ],
    "answer": 1,
    "explanation": "Common NLP tasks: sentiment analysis, named entity recognition (NER), text classification, machine translation, summarization, question answering, topic modeling."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is the goal of Named Entity Recognition (NER)?",
    "options": [
      "Generate new sentences",
      "Identify and classify entities like people, organizations, and locations in text",
      "Encrypt PII automatically",
      "Translate text between languages"
    ],
    "answer": 1,
    "explanation": "NER extracts named entities (PERSON, ORG, LOCATION, DATE, MONEY) from unstructured text, supporting downstream analytics, search, and PII detection."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes Robotic Process Automation (RPA)?",
    "options": [
      "Physical robots assembling cars",
      "Software bots automating repetitive rule-based tasks across business applications",
      "A type of network protocol",
      "A graphics card technology"
    ],
    "answer": 1,
    "explanation": "RPA tools (UiPath, Automation Anywhere, Power Automate) automate repetitive tasks across desktop and web applications via UI interactions and API calls — no physical robots."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST distinguishes RPA from traditional scripted automation?",
    "options": [
      "RPA cannot interact with applications",
      "RPA typically works with existing application UIs without requiring code-level integration",
      "Traditional automation never uses code",
      "They are the same"
    ],
    "answer": 1,
    "explanation": "RPA interacts with applications as a user would (mouse clicks, keystrokes, screen reading), enabling automation of systems without APIs or for legacy systems."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a common source of bias in AI systems?",
    "options": [
      "Always random number generators",
      "Training data that reflects historical inequalities or unrepresentative samples",
      "Lower-cost hardware",
      "Use of any neural networks"
    ],
    "answer": 1,
    "explanation": "AI models learn from training data. Historical biases or unrepresentative samples are encoded into models, producing biased predictions (e.g., hiring algorithms favoring traits of past hires)."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes AI explainability (XAI)?",
    "options": [
      "Hiding model details for IP protection",
      "Methods that help humans understand why an AI model made a particular prediction",
      "Encrypting model weights",
      "Making models smaller automatically"
    ],
    "answer": 1,
    "explanation": "Explainability methods (SHAP, LIME, feature importance, attention visualization) help stakeholders understand model behavior, supporting trust, debugging, and regulatory requirements."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "What is meant by 'hallucination' in the context of large language models?",
    "options": [
      "The model crashes during inference",
      "The model generates plausible-sounding but factually incorrect or fabricated content",
      "The model refuses to respond",
      "The model uses too much memory"
    ],
    "answer": 1,
    "explanation": "LLMs sometimes produce confident but incorrect outputs — invented citations, false 'facts'. Mitigations: retrieval-augmented generation (RAG), fact checking, prompting techniques, and human review."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST distinguishes AI model training from inference?",
    "options": [
      "They are the same step",
      "Training adjusts model parameters from data; inference uses a trained model to produce outputs for new inputs",
      "Inference always requires GPU",
      "Training only happens once per minute"
    ],
    "answer": 1,
    "explanation": "Training is the resource-intensive phase that produces the model weights. Inference uses those weights to make predictions on new data. Inference is typically much cheaper per request."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes prompt engineering for large language models?",
    "options": [
      "Re-training the model from scratch",
      "Crafting inputs (prompts) to elicit desired model behavior without changing model weights",
      "Compressing the model file size",
      "Encrypting the model parameters"
    ],
    "answer": 1,
    "explanation": "Prompt engineering shapes model behavior via input wording, examples, and structure. Techniques include few-shot examples, chain-of-thought prompting, role assignments, and explicit constraints."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which BEST describes Retrieval-Augmented Generation (RAG)?",
    "options": [
      "A way to train models faster",
      "Augmenting an LLM's prompt with retrieved relevant documents so it can ground answers in external data",
      "A type of encryption for AI models",
      "An image generation technique"
    ],
    "answer": 1,
    "explanation": "RAG retrieves relevant context (via vector search) and adds it to the LLM's prompt, reducing hallucinations and letting the model answer based on proprietary or current data without retraining."
  },
  {
    "domain": "1: Data Concepts and Environments",
    "question": "Which is a KEY ethical consideration when deploying AI in decisions that affect people?",
    "options": [
      "Maximum throughput on GPUs",
      "Fairness, transparency, accountability, and the right to human review",
      "Color of the AI's UI",
      "Number of GPUs used"
    ],
    "answer": 1,
    "explanation": "AI in consequential decisions (hiring, lending, healthcare, criminal justice) raises fairness, transparency, and accountability concerns. Many jurisdictions are introducing regulations (EU AI Act, sector-specific rules)."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which BEST describes multicollinearity in multiple regression?",
    "options": [
      "Multiple unrelated outcomes",
      "High correlation among predictor variables, which inflates coefficient variance and makes interpretation unreliable",
      "Using multiple datasets",
      "A type of overfitting only"
    ],
    "answer": 1,
    "explanation": "Multicollinearity makes individual coefficients unstable. Detect via Variance Inflation Factor (VIF). Mitigations: drop redundant variables, combine them, or use regularization (ridge)."
  },
  {
    "domain": "3: Data Analysis and Statistical Methods",
    "question": "Which principle reminds analysts that low-quality inputs produce low-quality analytical outputs?",
    "options": [
      "The garbage-in, garbage-out (GIGO) principle",
      "The CAP theorem",
      "Moore's law",
      "The Pareto principle"
    ],
    "answer": 0,
    "explanation": "GIGO: no amount of sophisticated analysis fixes bad input data. Investing in data quality upstream is consistently more valuable than tuning downstream models."
  }
];
