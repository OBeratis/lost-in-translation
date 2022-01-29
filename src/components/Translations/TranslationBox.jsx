import TranslationBoxImagesItem from "./TranslationBoxImagesItem"

const TranslationBox = ({ translation, translatedNotes = '' }) => {
    // Create alphabet with capital letters
    let arrAlphabet = Array.from(Array(26)).map((l, i) => String.fromCharCode(i + 65))
    // concat with lower case letters
    arrAlphabet = arrAlphabet.concat( Array.from(Array(26)).map((l, i) => String.fromCharCode(i + 97)) )
    // Create array of translation letters
    const listOfLetters = Array.from(translation.text)
    // Eliminate non alphabet characters
    const checkedListOfLetters = listOfLetters.filter(letter => arrAlphabet.includes(letter))

    const signTranslationList = checkedListOfLetters.map(
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