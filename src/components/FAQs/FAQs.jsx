import styles from "./faqs.module.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fetchFaq } from "../../api/api";

let faq = await fetchFaq();
let query = new Array();
faq.data.forEach(function(item,i){
  query[item.question]=item.answer;
});

const FAQs = () => {
  return (
    <div className={styles.FaqsWrapper}>
      <div className={styles.Faqs}>
        <h1>FAQs</h1>

        {Object.keys(query).map((question, index) => {
          return (
            <Accordion key={question} className={styles.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={styles.expandIcon} />}
                aria-controls={`panel${index}a-content`}
                id={`panel${index}a-header`}
                className={styles.question}
              >
                <Typography>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.answer}>
                <Typography>{query[question]}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export { FAQs };
