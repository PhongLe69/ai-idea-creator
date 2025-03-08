export default [
  {
    "name": "Quiz Generation",
    "desc": "An AI tool that generates questions for quizzes and tests.",
    "category": "quiz",
    "icon": "https://cdn-icons-png.flaticon.com/128/3407/3407024.png",
    "slug": "quiz",
    "aiPrompt": "You are an exam generator for internationally standardized tests. You must output exam content with **no introductions, opening remarks, closing statements, or any commentary** beyond the exam content itself. The exam content must adhere strictly to the following requirements:\n\n1. **Exam Information:** Include the following items (without any further explanation):\n   - Exam Title\n   - Subject\n   - Exam Date/Session (leave blank with dots for filling in: \"........\")\n   - Instructions\n\n2. **Question Content:**\n   - Create a list of questions in a standard exam format.\n   - Each question must be numbered sequentially (e.g., \"1. ...\").\n   - The questions must be multiple-choice with answer options labeled with letters (e.g., \"A. ...\", \"B. ...\", \"C. ...\", \"D. ...\").\n   - **Do NOT include the correct answer or any explanations** for the questions.\n\n3. **Output Format:**\n   - The output must contain **ONLY** the exam content in the specified format, with no additional text or descriptive lines.\n   - You will receive further instructions regarding the specific output format: \"LaTeX\" or \"Unicode\".\n     - If the output format is \"LaTeX\", output the content as a valid LaTeX document (including commands such as \\documentclass{...}, \\begin{document}, and \\end{document}).\n     - If the output format is \"Unicode\", output the content in plain text while maintaining the required exam structure.\n\nOutput only the exam content following these exact instructions and do not add any additional content.",
    "form": [
      // {
      //   "label": "Choose the type of test you want to create",
      //   "field": "select",
      //   "name": "testType",
      //   "options": [
      //     { "label": "Quiz", "value": "quiz" },
      //     { "label": "Midterm", "value": "midterm" },
      //     { "label": "Final Exam", "value": "finalExam" }
      //   ],
      //   "required": true
      // },
      {
        "label": "Choose the subject",
        "field": "select",
        "name": "subject",
        "options": [
          { "label": "Math", "value": "math" },
          { "label": "English", "value": "english" },
          { "label": "Physics", "value": "physics" }
        ],
        "required": true
      },
      {
        "label": "Choose topics for the test",
        "field": "input",
        "name": "topics",
        "required": true
      },
      // {
      //   "label": "Choose the duration of the test",
      //   "field": "select",
      //   "name": "duration",
      //   "options": [
      //     { "label": "15 minutes", "value": "15m" },
      //     { "label": "45 minutes", "value": "45m" },
      //     { "label": "60 minutes", "value": "60m" },
      //     { "label": "90 minutes", "value": "90m" },
      //     { "label": "120 minutes", "value": "120m" }
      //   ],
      //   "required": true
      // },
      {
        "label": "Choose the number of questions",
        "field": "select",
        "name": "numQuestions",
        "options": [
          { "label": "1 Question", "value": 2 },
          { "label": "5 Questions", "value": 5 },
          { "label": "10 Questions", "value": 10 }
        ],
        "required": true
      },
      {
        "label": "Choose the type of questions",
        "field": "select",
        "name": "questionType",
        "options": [
          { "label": "Multiple Choice", "value": "multipleChoice" },
          { "label": "Essay", "value": "essay" },
          { "label": "True/False", "value": "trueFalse" },
          { "label": "Mix", "value": "Multiple Choice, Essay, and True/False" }
        ],
        "required": true
      },
      {
        "label": "Choose the format for the test",
        "field": "select",
        "name": "format",
        "options": [
          { "label": "Unicode format", "value": "unicode" },
          { "label": "Latex format", "value": "latex" }
        ],
        "required": true
      }
    ]
  },
  {
    "name": "Generate Quiz",
    "desc": "Tool to generate test questions in LaTeX format following standardized test formatting, based on the subject name, topic, number of questions, and question type provided by the user.",
    "category": "quizz",
    "icon": "https://cdn-icons-png.flaticon.com/128/18969/18969413.png",
    "slug": "quizz",
    "aiPrompt": "You are an exam generator for internationally standardized tests. You must output exam content with **no introductions, opening remarks, closing statements, or any commentary** beyond the exam content itself. The exam content must adhere strictly to the following requirements:\n\n1. **Exam Information must be bold, large font, centered on the paper:** Include the following items (without any further explanation):\n   - Exam Title\n   - Subject\n   - Exam Date/Session in normal font size (leave blank with dots for filling in: \".........................\")\n   - Instructions\n\n2. **Question Content:**\n   - Create a list of questions in a standard exam format.\n   - Each question must be numbered sequentially (e.g., \"1. ...\").\n   - The questions must be multiple-choice with answer options labeled with letters (e.g., \"A. ...\", \"B. ...\", \"C. ...\", \"D. ...\").\n   - **Do NOT include the correct answer or any explanations** for the questions. Create test questions in LaTeX format following standardized test formatting. Use the provided subject name, topic, number of questions, and question type exactly as specified by the user. Do not include any introduction, conclusion, or extra information – only output the test questions in LaTeX.",
    "form": [
      {
        "label": "Enter the subject name (e.g., Mathematics, Physics)",
        "field": "input",
        "name": "subject",
        "required": true
      },
      {
        "label": "Enter the main topic or content (e.g., Algebra, Calculus)",
        "field": "input",
        "name": "topic",
        "required": true
      },
      {
        "label": "Enter the total number of questions to generate",
        "field": "input",
        "name": "num_questions",
        "required": true
      },
      {
        "label": "Select the question type (e.g., multiple choice, constructed-response, true/false)",
        "field": "input",
        "name": "question_type",
        "required": true
      }
    ]
  },
  {
    name: "Mathematic",
    desc: "An AI tool that generate questions for quiz, test of Maths.",
    category: "maths",
    icon: "https://cdn-icons-png.flaticon.com/256/7288/7288734.png",
    slug: "maths",
    aiPrompt:
"Generate Calculus 1, 2, or 3 test questions (multiple choice, essay, or true/false) in LaTeX format for a PDF, following academic standards. For multiple choice, present questions numerically and choices alphabetically without answers. Output plain LaTeX code only, no Markdown syntax or additional instructions.",    
    form: [
      {
        label: "Enter your required and the type of test you want to create, for example: multiple choice, constructed-response, or true or false",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter total number of question you want to create",
        // aiPrompt: 
        // "If the user selects more than 2 question types and the number of questions is large, divide the number of questions equally for each question type." ,
        field: "input",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "English Grammer Check",
    desc: "AI Model to Correct your english grammer by providing the text",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",

    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammer",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "write-code",
    aiPrompt:
      "Depends on user codeDescription write a code and give output in rich text editor format in code block ",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model to explain programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",

    slug: "explain-code",
    aiPrompt:
      "Depends on user codeDescription explain code line by line and give output in code block ",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",

    slug: "code-bug-detector",
    aiPrompt:
      "Depends on user codeInput find bug in code and give solution and give output in code block ",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Email Writeup",
    //Email writer AI for interviewers and job seekers. Generate professional email templates for various scenarios, such as job applications, follow-ups, and networking.
    desc: "An AI tool that serves as your professional email writer, generating catchy and viral-worthy titles in your chosen language.",
    catergory: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "email-writeup",
    aiPrompt:
      "Generate Email Writeup based on topic and outline",
    form: [
      {
        label: "Enter your Email topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter Email Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite give article without any Plagiarism",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammar mistake and professionally",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate Blog Content based on topic and outline",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on yout blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "LinkedIn Post",
    desc: "An AI tool that serves as your LinkedIn post writer, generating catchy and professional posts in your chosen language.",
    category: "post",
    icon: "/linkedin-375.png",
    slug: "linkedin-post-generation",
    aiPrompt:
      "Generate LinkedIn Post with emojis based on topic and outline",
    form: [
      {
        label: "Enter your LinkedIn topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter a description here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Twitter Post",
    desc: "An AI tool that serves as your Twitter post writer, generating short and professional posts in your chosen language.",
    category: "post",
    icon: "/twitter-circled-375.png",
    slug: "twitter-post-generation",
    aiPrompt:
      "Generate Twitter Post with emojis based on topic and outline",
    form: [
      {
        label: "Enter your Twitter topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter a brief description here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate Youtube description with emoji under 4-5 lines based on topic and outline",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",

    aiPrompt:
      "Generate 10 Youtube tags in bullet point based on title and outline",

    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add Emoji to outline text depends on outline and rewrite it",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",

    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post depends on a given keywords.",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",

    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hash tag depends on a given keywords",
    form: [
      {
        label: "Enter Keywords for your instagram hastag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generate New and trending instagram idea depends on your niche",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram idea depends on niche with latest trend",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",

    slug: "tagline-generator",
    aiPrompt:
      "Depends on user productName and outline generate catchy 5-10 tagline for the business product.",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketting",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",

    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commer business.",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-articles",
    aiPrompt:
      "Create multiple choice or essay or true or false questions for Calculus 1 or 2 or 3 exam and export the results in LaTeX format for translation into a complete pdf file. Please provide accurate LaTeX results relevant to the question [question name or question description]. Design a visually appealing, professionally formatted test with clear sections, numbered questions, easy to read font, following academic standards for the exam. Include only necessary content in LaTeX, no additional instructions or descriptions. Returns only plain text excluding Markdown syntax",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },

  {
    name: "History",
    desc: "An AI tool that generates questions for History quizzes and tests.",
    category: "history",
    icon: "https://cdn-icons-png.flaticon.com/256/7288/7288734.png",
    slug: "history",
    aiPrompt:
      "Create multiple choice or essay or true or false questions for World History test, and output the result in LaTeX format for translation to a complete PDF file. If the user requests multiple choice (the questions must be presented in numerical order and the results must be presented in alphabetical order, do not give answers at the last page). Please provide the exact LaTeX code relevant to the question [question name or question description]. Design a visually appealing, professionally formatted test with clear sections, numbered questions, readable fonts, and follows academic standards for exams. Include only the necessary content in LaTeX, without any additional instructions or descriptions. Remove ```latex and the last symbol ``` ",
    form: [
      {
        label: "Enter the type of test you want to create, for example: multiple choice, constructed-response, or true or false",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter the total number of questions you want to create",
        field: "input",
        name: "outline",
        required: true,
      },
    ],
  },

  // {
  //   "name": "Custom Prompt Generator",
  //   "desc": "Create your own AI prompt for quizzes, tests, and more.",
  //   "category": "custom",
  //   "icon": "https://cdn-icons-png.flaticon.com/256/889/889135.png",
  //   "slug": "custom-prompt",
  //   "aiPrompt": "Please enter your custom AI prompt here. The prompt will be used to generate questions or content based on your requirements.",
  //   "form": [
  //     {
  //       "label": "Enter a custom prompt for your AI tool",
  //       "field": "textarea",
  //       "name": "customPrompt",
  //       "required": true
  //     },
  //     {
  //       "label": "Enter the category or type of questions you want to generate (e.g., Maths, Science, etc.)",
  //       "field": "input",
  //       "name": "category",
  //       "required": true
  //     },
  //     {
  //       "label": "Enter any additional instructions or settings for the prompt",
  //       "field": "textarea",
  //       "name": "instructions"
  //     }
  //   ]
  // },
];
