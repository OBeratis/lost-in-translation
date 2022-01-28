import withAuth from "../hoc/withAuth"
import TranslationForm from "../components/Translations/TranslationForm"
import TranslationButton from "../components/Translations/TranslationButton"
import { useState } from "react";

// Object to store the translation information
function TranslationObject() {
    this.id = 1;
    this.text = "";
    this.translatedText = "";
};

const translationObject = new TranslationObject();

const Translation = () => {
    const handleTranslationClicked = (translationId) => {
        console.log(translationObject);
    }

    return (
        <>
            <h1>Lost in Translation</h1>

            <section id="translate-options">
                <TranslationButton key={ translationObject.id } translationObj={ translationObject } onSelect={ handleTranslationClicked }/>
            </section>

            <section id="translate-notes">
                <TranslationForm />    
            </section>

            <h4>Translation Box</h4>
            { translationObject && <p>Translation: { translationObject.id }</p>}
        </>
    )
}

export default withAuth(Translation)

