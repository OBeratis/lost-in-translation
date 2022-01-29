import TranslationBoxImagesItem from "./TranslationBoxImagesItem"

const TranslationBox = ({ translation, translatedNotes = '' }) => {

    console.log(`Inside box: ${translation.text} ${typeof translation}`)
    
    const listOfLetters = Array.from(translation.text)
    console.log(listOfLetters)
    const signTranslationList = listOfLetters.map(
        (letter, index) => 
        <TranslationBoxImagesItem key={ index + '-' + letter } item={ "images/" + letter + ".png" } />
    )

    return (
        <section>
            <h4>Translation Box</h4>
            <section id="images-sign-language">
                { signTranslationList }
            </section>

            { translatedNotes && <p>translated to: { translatedNotes } </p>}
        </section>
    )
}

export default TranslationBox