const TranslationButton = ({ translationObj, onSelect }) => {

    return (
        <>
            <button onClick={ () => onSelect( translationObj.id ) }>Translate
                <section>
                    <b>{ translationObj.text }</b>
                </section>
            </button>
        </>        
    )
}

export default TranslationButton