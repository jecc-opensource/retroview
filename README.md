# retroview
Interview retrospective and study tracking app


## Architecture
```mermaid
graph TD;
  C("Browser") -.-> |"HTTP Request"| N[["Next.js Server"]];
  N --> |"REST API Request"| A[["Node.js API Server"]];
  A --> |"SQL Query"| D("Embedded SQLite3 DB");
  A --> |"REST API Response"| N;
  N -.-> |"HTTP Response"| C;
```

## Node.js Server
```mermaid
graph TD;
  E["Express.js"] --> RA{"API Router"};
  RA --> RI{"Interviews Router"};
  RA --> RS{"Skills Router"};
  RS --> SC[["Create Skill"]];
  RS --> SD[["Delete Skill By ID"]];
  RS --> SU[["Update Skill By ID"]];
  RS --> SG[["Get Skill By ID"]];
  RS --> SGA[["Get All Skills"]];
  RA --> RI{"Interviews Router"};
  RI --> IC[["Create Interview"]];
  RI --> ID[["Delete Interview By ID"]];
  RI --> IU[["Update Interview By ID"]];
  RI --> IG[["Get Interview By ID"]];
  RI --> IGA[["Get All Interviews"]];
  IC --> IM("Interview Model");
  ID --> IM("Interview Model");
  IU --> IM("Interview Model");
  IG --> IM("Interview Model");
  IGA --> IM("Interview Model");
  SC --> SM("Skill Model");
  SD --> SM
  SU --> SM
  SG --> SM
  SGA --> SM
  SM --> D(("Database"));
  IM --> D;
```


## Scale It!
```mermaid
graph TD;
  C("Browser") -.-> LB1{{"Load Balancer"}};
  LB1 --> N1[["Next.js Server 1"]];
  LB1 --> N2[["Next.js Server 2"]];
  N1 --> LB2{{"Load Balancer"}};
  N2 --> LB2;
  LB2 --> A1[["Node.js API Server 1"]];
  LB2 --> A2[["Node.js API Server 2"]];
  A1 --> |"SQL Query"| D("PostgreSQL DB");
  A2 --> |"SQL Query"| D("PostgresQL DB");
```
