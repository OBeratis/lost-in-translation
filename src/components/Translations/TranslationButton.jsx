const TranslationButton = ({ translationObj, onSelect }) => {

    return (
        <>
            <button hidden="{true}" onClick={ () => onSelect( translationObj.id ) }></button>
        </>        
    )
}

export default TranslationButton