import withAuth from "../hoc/withAuth"
import TranslationForm from "../components/Translations/TranslationForm"
import TranslationButton from "../components/Translations/TranslationButton"
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { translationAdd } from "../api/store";
import { STORAGE_KEY_USER } from '../../src/const/storageKeys'
import { storageSave } from '../../src/utils/Storage'
import TranslationBox from "../components/Translations/TranslationBox";

// Object to store the translation information
function TranslationObject() {
    this.id = 1;
    this.text = "";
    this.translatedText = "";
};

const Translation = () => {
    const [ translation, setTranslation ] = useState(new TranslationObject())
    const { user, setUser } = useUser()

    const handleTranslationClicked = (translationId) => {
        setTranslation(translation, new TranslationObject())
    }

    const handleShowClicked = async (text) => {
        setTranslation(translation, translation.text = text)

        const [ error, updatedUser ] = await translationAdd(user, text)
        if (error !== null){
            return
        }

        // Keep UI state and Server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)
        // Update context state
        setUser( updatedUser )

        console.log('Error: ', error)
        console.log('UpdatedUser: ', updatedUser)
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

            {/* <h4>Translation Box</h4>
            { translation && <p>Translation: { translation.id }</p>} */}
            { translation && <TranslationBox translation={ translation } />} 
        </>
    )
}

export default withAuth(Translation)

