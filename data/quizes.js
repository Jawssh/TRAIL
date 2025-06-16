const QUIZES = [
  "",
  {
    instruction: "Match the correct answer in each definition",
    questions: [
      {
        question: "1. Fundamental concepts accepted without formal definition",
        answer: "b",
      },
      {
        question: "2. Fundamental concepts accepted with formal definition",
        answer: "c",
      },
      {
        question:
          "3. Statements accepted as true without proof; the foundational assumptions of a system",
        answer: "a",
      },
      {
        question:
          "4. Statements proven true using undefined terms, definitions, and postulates.  They are logical consequences of the system's foundation.",
        answer: "d",
      },
    ],
    choices: [
      "A. Postulates/Axioms",
      "B. Undefined",
      "C. Defined",
      "D. Theorems",
    ],
  },
  {
    instruction: "Choose the best answer",
    questions: [
      {
        question:
          "Which of the following best describes the relationship between undefined terms, axioms, definitions, and theorems in an axiomatic system? ",
        answer: "d",
      },
    ],
    choices: [
      "A. Undefined terms are proven using axioms; definitions illustrates theorem; theorems originate from undefined terms.",
      "B. Axioms define undefined terms; definitions are built upon axioms; theorems are proven using axioms and definitions.",
      "C. Theorems form the foundation; definitions explain theorems; axioms are based on undefined terms.",
      "D. Undefined terms are foundational; axioms are accepted truths; definitions build upon them; theorems use axioms and definitions.",
    ],
  },
  {
    instruction:
      "Determine which triangle is congruent to the given illustration by filling the blanks.",
    questions: [
      {
        question: `Triangle <input type="text" class="answer-input"/> is congruent to triangle <input type="text" class="answer-input"/> because its corresponding sides are <input type="text" class="answer-input"/> in length.`,
        answer: "a,d,equal",
      },
    ],
    image: "/assets/image/quiz-images/quiz3.png",
  },
  {
    instruction:
      "Choose among the choices to determine the definition of each congruence postulate.",
    questions: [
      {
        question: "1. ASA (Angle-Side-Angle)",
        answer: "y",
      },
      {
        question: "2. SAS (Side-Angle-Side)",
        answer: "x",
      },
      {
        question: "3. SSS (Side-Side-Side)",
        answer: "z",
      },
    ],
    choices: [
      "X: If two sides and an included angle of one triangle are congruent to the corresponding two sides and the included angle of another triangle, then the triangles are congruent.",
      "Y: If two angles and the included side of one triangle are congruent to the corresponding two angles and an included side of another triangle, then the triangles are congruent.",
      "Z: If three sides of one triangle are congruent to the corresponding three sides of another triangle, then the triangles are congruent.",
    ],
  },
  {
    questions: [
      {
        instruction: "Analyze and choose the best answer for each question.",
        question: `What does CPCTC stand for in geometry?`,
        answer: "c",
        choices: [
          "A. Corresponding Points of Congruent Triangles are Congruent",
          "B. Congruent Parts of Corresponding Triangles are Congruent",
          "C. Corresponding Parts of Congruent Triangles are Congruent",
          "D. Congruent Positions of Corresponding Triangles Combine",
        ],
      },
      {
        instruction: "Study the given figures below. Fill in the blanks.",
        question: `If ΔXYZ is congruent to Δ<input type="text" class="answer-input"/>, then ∠Y corresponds to ∠<input type="text" class="answer-input"/>`,
        answer: "abc,b",
        hasMultipleAnswer: true,
        image: "/assets/image/quiz-images/quiz5_1.jpg",
      },
      {
        instruction: "Study the triangles below.",
        question: `What type of motion will verify that ΔCAT is congruent to ΔDOG?`,
        answer: "reflection",
        image: "/assets/image/quiz-images/quiz5_2.jpg",
      },
    ],
  },

  {
    questions: [
      {
        instruction: "Choose the best answer among the choices.",
        question: `1. Which of the following is not a valid method for proving two triangles are congruent?`,
        answer: "c",
        choices: ["A. SSS", "B. SAS", "C. SSA", "D. ASA"],
      },
      {
        instruction: "Choose the best answer among the choices.",
        answer: "d",
        image: "/assets/image/quiz-images/quiz6_1.png",
      },
    ],
  },
  {
    instruction: "Choose the best answer",
    questions: [
      {
        question:
          "1. What tool is essential for constructing a perpendicular bisector?",
        choices: ["A. Ruler", "B. Compass", "C. Protractor", "D. Calculator"],
        answer: "b",
      },
      {
        question:
          "2. Which construction results in two angles of equal measure from one angle?",
        choices: [
          "A. Perpendicular bisector",
          "B. Angle bisector",
          "C. Parallel line",
          "D. Median",
        ],
        answer: "b",
      },
      {
        question:
          "3. Which of the following shows the correct order of steps to construct a perpendicular to a line from a point not on the line?",
        choices: [
          `A.
            <p>1. Draw a straight line</p>
            <p>2. Draw arcs from the point to intersect the line</p>
            <p>3. Draw a circle</p>
            <p>4. Measure the angle</p>`,

          `B.
            <p>1. Measure the angle</p>
            <p>2. Draw a circle</p>
            <p>3. Draw arcs from the point to intersect the line</p>
            <p>4. Draw a straight line</p>`,

          `C.
            <p>1. Draw arcs from the point to intersect the line</p>
            <p>2. Draw arcs from the intersection points</p>
            <p>3. Mark the intersection of those arcs</p>
            <p>4. Draw a straight line through the original point and the new intersection</p>`,
          `D.
            <p>1. Draw a circle</p>
            <p>2. Measure the angle</p>
            <p>3. Draw arcs from the point to intersect the line</p>
            <p>4. Draw a straight line</p>`,
        ],
        answer: "c",
      },
    ],
  },
];
