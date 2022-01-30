import TranslationBoxImagesItem from "./TranslationBoxImagesItem"

const TranslationBox = ({ translation, translatedNotes = '' }) => {
    // Prepare to ignore special characters and spaces 
    const arrTextSplit = translation.text.split(" ")
    const joinTranslationText = arrTextSplit.map((word, index) => {return word}).join('').toLowerCase()
    const arrOfLetters = Array.from(joinTranslationText)

    // Create alphabet with lower letters
    let arrAlphabet = Array.from(Array(26)).map((l, i) => String.fromCharCode(i + 97))
    // Eliminate non alphabet characters
    const checkedListOfLetters = arrOfLetters.filter(letter => arrAlphabet.includes(letter))
    console.log(checkedListOfLetters)

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