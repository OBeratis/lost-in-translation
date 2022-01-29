const TranslationBox = ({ translation, translatedNotes = 'Sorry! Images for the sign language are not available.' }) => {

    return (
        <section>
            <h4>Translation Box</h4>
            <p>{ translation.text } would be</p>
            { translatedNotes && <p>translated to: { translatedNotes } </p>}
        </section>
    )
}

export default TranslationBox