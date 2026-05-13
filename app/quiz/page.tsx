"use client";

import Link from "next/link";
import { useState } from "react";

const questions = [
  {
    question: "Who is this whole little website made for?",
    options: [
      {
        text: "(name)",
        correct: true,
        message: "Correct — obviously you know this story well ",
      },
      {
        text: "Option 2",
        correct: false,
        message: "personalize to your liking",
      },
      {
        text: "Option 3",
        correct: false,
        message:
          "personalize to your liking",
      },
    ],
  },
  {
    question: "What kind of vibe does this site have?",
    options: [
      {
        text: "Option 1",
        correct: false,
        message:
          "personalize to your liking",
      },
      {
        text: "Option 2",
        correct: true,
        message: "personalize to your liking.",
      },
      {
        text: "Option 3",
        correct: false,
        message:
          "personalize to your liking.",
      },
    ],
  },
  {
    question: "What do I want you to feel today?",
    options: [
      {
        text: "Option 1",
        correct: false,
        message:
          "personalize to your liking",
      },
      {
        text: "Option 2",
        correct: true,
        message: "personalize to your liking",
      },
      {
        text: "Option 3",
        correct: false,
        message:
          "personalize to your liking",
      },
    ],
  },
];

type Option = {
  text: string;
  correct: boolean;
  message: string;
};

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [shakingOption, setShakingOption] = useState<string | null>(null);

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleAnswer = (option: Option) => {
    if (isCorrectAnswer) return;

    setSelectedOption(option.text);
    setSelectedMessage(option.message);
    setIsCorrectAnswer(option.correct);

    if (!option.correct) {
      setShakingOption(option.text);
      window.setTimeout(() => {
        setShakingOption(null);
      }, 400);
    } else {
      setShakingOption(null);
    }
  };

  const resetQuestionState = () => {
    setSelectedMessage("");
    setIsCorrectAnswer(false);
    setSelectedOption(null);
    setShakingOption(null);
  };

  const goNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      resetQuestionState();
    }
  };

  return (
    <main className="relative z-10 flex min-h-screen items-center justify-center bg-[#fffaf5] px-6 py-16 soft-fade-up">
      <div className="w-full max-w-2xl rounded-[2rem] border border-[#f1dede] bg-white p-8 shadow-sm transition duration-300 hover:shadow-lg">
        <p className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-[#b07a7a]">
          Cute Quiz
        </p>

        <h1 className="font-heading text-center text-3xl font-bold leading-tight text-[#5c3b3b] md:text-5xl">
          A few questions for you
        </h1>

        <p className="mt-6 text-center leading-8 text-[#7a5c5c]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <div className="mt-10">
          <p className="font-heading text-center text-xl font-semibold text-[#5c3b3b] md:text-2xl">
            {question.question}
          </p>

          <div className="mt-8 grid gap-4">
            {question.options.map((option) => {
              const isSelected = selectedOption === option.text;
              const isShaking = shakingOption === option.text;
              const showCorrectTag = isSelected && option.correct;
              const showWrongTag = isSelected && !option.correct;

              const selectedStyles = isSelected
                ? option.correct
                  ? "border-[#ddb3c4] bg-[#fdf1f7] text-[#5c3b3b] shadow-md"
                  : "border-[#e6b1b1] bg-[#fff1f1] text-[#8a5a5a] shadow-md"
                : "border-[#e9cccc] bg-[#fffafa] text-[#5c3b3b]";

              return (
                <button
                  key={option.text}
                  type="button"
                  onClick={() => handleAnswer(option)}
                  disabled={isCorrectAnswer}
                  className={`rounded-2xl border px-5 py-4 text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-md disabled:cursor-default ${selectedStyles} ${
                    isShaking ? "soft-shake" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span>{option.text}</span>

                    {showCorrectTag && (
                      <span className="rounded-full bg-[#f3d7e2] px-3 py-1 text-xs font-medium text-[#7a4e60]">
                        ✓ Correct
                      </span>
                    )}

                    {showWrongTag && (
                      <span className="rounded-full bg-[#f7d6d6] px-3 py-1 text-xs font-medium text-[#9a5d5d]">
                        Not quite
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {selectedMessage && (
            <div
              className={`mt-8 rounded-2xl p-5 text-center shadow-sm ${
                isCorrectAnswer
                  ? "bg-[#fdf1f7] text-[#7a5c5c]"
                  : "bg-[#fff3f3] text-[#8a5a5a]"
              }`}
            >
              {selectedMessage}
            </div>
          )}

          {isCorrectAnswer && !isLastQuestion && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={goNext}
                className="rounded-full bg-[#e7bcbc] px-6 py-3 font-medium text-[#4a2f2f] shadow-md transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
              >
                Next Question
              </button>
            </div>
          )}

          {isCorrectAnswer && isLastQuestion && (
            <div className="mt-8 text-center">
              <Link
                href="/notes"
                className="inline-block rounded-full bg-[#e7bcbc] px-6 py-3 font-medium text-[#4a2f2f] shadow-md transition duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
              >
                Continue
              </Link>
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/timeline"
            className="rounded-full border border-[#d9b4b4] px-6 py-3 text-[#6d4b4b] transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            Back
          </Link>
        </div>
      </div>
    </main>
  );
}