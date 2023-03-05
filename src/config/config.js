import { instructions } from "./constants";

export const formConfig = [
  {
    type: "information",
    label: "",
    name: "info",
    text: instructions,
    buttonText: "네, 신청합니다",
    options: {
      attrs: {},
    },
    validation: {
      required: false,
    },
  },
  {
    type: "information",
    label: "",
    name: "info",
    text: `건강보험 적용됩니다.<p class="instructions">본인부담 진료비(0원~6,000원)있습니다. 접수 안내 <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"/></svg><strong>계좌이체(수납)</strong><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"/></svg>비대면 진료...순서로 진행됩니다</p>`,
    buttonText: "네, 알겠습니다",
    options: {
      attrs: {},
    },
    validation: {
      required: false,
    },
  },
  {
    type: "radio",
    label: "마트의원 진료 받은적 있으신가요?",
    name: "hasSuperpower",
    // buttonText: "What's next",
    options: {
      choices: ["네", "아니오", "아마도, 기억 안나요"],
    },
    validation: {
      required: true,
    },
  },
  {
    type: "checkbox",
    label: "Select applicable superpowers.",
    name: "superpowers",
    buttonText: "Okay, cool!",
    options: {
      choices: [
        "Creativity",
        "Analytical",
        "Logical",
        "Strategic",
        "Problem solver",
      ],
    },
    validation: {
      required: true,
      minLength: 2,
    },
  },
  {
    type: "textarea",
    label: "Tell us a little bit about your kryptonite.",
    name: "weakness",
    buttonText: "Next...",
    options: {
      attrs: {
        placeholder: "Write here...",
      },
    },
    validation: {
      required: false,
    },
  },
  {
    type: "text",
    label: "Describe yourself in one word!",
    name: "oneWord",
    buttonText: "Next...",
    options: {
      attrs: {
        placeholder: "One word to describe yourself...",
      },
    },
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    type: "text",
    label: "Have you thought of your superhero name?",
    name: "superheroName",
    buttonText: "What do we call you?",
    options: {
      attrs: {
        placeholder: "Superhero name",
      },
    },
    validation: {
      required: false,
      minLength: 5,
    },
  },
  {
    type: "information",
    label: "",
    name: "info",
    text: `If you are the right fit for being a superhero, tell us how can we reach you?`,
    buttonText: "Sure...",
    options: {
      attrs: {},
    },
    validation: {
      required: false,
    },
  },
  {
    type: "text",
    label: "Your Email",
    name: "email",
    // buttonText: "Let's do this!",
    options: {
      attrs: {
        placeholder: "Your Email",
      },
    },
    validation: {
      required: true,
      email: true,
    },
  },
  {
    type: "text",
    label: "Your phone Number",
    name: "phone",
    buttonText: "Done!",
    options: {
      attrs: {
        placeholder: "Your Contact",
      },
    },
    validation: {
      required: true,
      numeric: true,
      minLength: 10,
    },
  },
];
