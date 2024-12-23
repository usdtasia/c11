import React from "react";
import AskedQline from "./AskedQline";
import { Trans } from "react-i18next";

function AskedQuestions() {
  return (
    <section className="askedQuestions footer_container container">
      <h3 className="askedQuestions_h3">
        ANSWERS TO FREQUENTLY ASKED QUESTIONS
      </h3>
      <section className="askedQuestions_container">
        <AskedQline
          p={<Trans i18nKey="HomeQuestionsBlock1" />}
          underTxt={<Trans i18nKey="HomeAnswersBlock1" />}
        />
        <AskedQline
          p={<Trans i18nKey="HomeQuestionsBlock2" />}
          underTxt={
            <Trans i18nKey="HomeAnswersBlock2" components={{ br: <br /> }} />
          }
          blue
        />
        <AskedQline
          p={<Trans i18nKey="HomeQuestionsBlock3" />}
          underTxt={<Trans i18nKey="HomeAnswersBlock3" />}
        />
        <AskedQline
          p={<Trans i18nKey="HomeQuestionsBlock4" />}
          underTxt={<Trans i18nKey="HomeAnswersBlock4" />}
          blue
        />
        <AskedQline
          p={<Trans i18nKey="HomeQuestionsBlock5" />}
          underTxt={<Trans i18nKey="HomeAnswersBlock5" />}
        />
      </section>
    </section>
  );
}

export default AskedQuestions;
