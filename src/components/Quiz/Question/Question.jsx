import React from "react";
import VariantContainer from "./Variant/Variant.jsx";
import classes from './Question.module.css';

const Question = (props) => {

    const { title, variants, correct } = props;

    let variantsItems = variants.map((v, idx) => <VariantContainer
        key={v}
        variant={v}
        index={idx}
        correct={correct}
    />)

    return <div>
        <h3>{title}</h3>
        <div className={classes.quizQuestions}>
            {variantsItems}
        </div>
    </div>
}

export default Question;