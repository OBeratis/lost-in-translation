import withAuth from "../hoc/withAuth"
import TranslationForm from "../components/Translations/TranslationForm"
import TranslationButton from "../components/Translations/TranslationButton"
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { translationAdd } from "../api/store";

// Object to store the translation information
function TranslationObject() {
    this.id = 1;
    this.text = "";
    this.translatedText = "";
};

const Translation = () => {
    const [ translation, setTranslation ] = useState(new TranslationObject())
    const { user } = useUser()

    const handleTranslationClicked = (translationId) => {
        setTranslation(translation, new TranslationObject())
    }

    const handleShowClicked = async (text) => {
        setTranslation(translation, translation.text = text)
        console.log(translation)
        console.log(user)

        const [ error, result ] = await translationAdd(user, text)

        console.log('Error: ', error)
        console.log('Result: ', result)
    }

    return (
        <>
            <h1>Lost in Translation</h1>

            <section id="translate-options">
                <TranslationButton key={ translation.id } translationObj={ translation } onSelect={ handleTranslationClicked }/>
            </section>

            <section id="translate-notes">
                <TranslationForm onTranslation={ handleShowClicked }/>    
            </section>

            <h4>Translation Box</h4>
            { translation && <p>Translation: { translation.id }</p>}
        </>
    )
}

export default withAuth(Translation)

