import React, { useState, useEffect } from "react";
import FAQHero from "./FAQHero/FAQHero";
import Questions from "./Questions/Questions";
import FAQFooter from "./FAQFooter/FAQFooter";
import { faq_questions } from "../../../constants";
import SEO from "../../SEO";

const FAQ = () => {
  const allQuestions = faq_questions.flatMap((section) => section.questions);
  const [questionsList, setQuestionsList] = useState(allQuestions);
  const [originalQuestionsList, setOriginalQuestionsList] =
    useState(allQuestions);
  const [userIsSearching, setUserisSearching] = useState(false);

  useEffect(() => {
    setOriginalQuestionsList(allQuestions);
  }, []);

  const searchQuestion = (word) => {
    setUserisSearching(true);
    const lowercaseWord = word.toLowerCase();
    const filteredList = originalQuestionsList.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(lowercaseWord);
      const answerMatch = item.answer.toLowerCase().includes(lowercaseWord);
      return lowercaseWord === "" || titleMatch || answerMatch;
    });
    setUserisSearching(word.length > 0);
    setQuestionsList(filteredList);
  };

  return (
    <div>
      <SEO
        title="Hiqsense | FAQ | Answers to Your Tech Queries"
        description="Find quick and clear answers to common questions about Hiqsense Smart Systems'
        services on our FAQ page. Covering topics from web design, SEO, graphic design, to email hosting and IT support,
        our FAQ section is designed to help small businesses in Canada understand our processes, pricing,
        and how we can tailor our technology solutions to meet their specific needs."
        canonical="https://hiqsense.ca/faq"
        name="Hiqsense Smart Systems LTD"
        type="article"
      />

      <FAQHero onSearchQuestion={searchQuestion} />
      <Questions questions={questionsList} onSearch={userIsSearching} />
      <FAQFooter />
    </div>
  );
};

export default FAQ;
