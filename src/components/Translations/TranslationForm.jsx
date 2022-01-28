import { useForm } from "react-hook-form"

const TranslationForm = ({ onTranslation }) => {
    const { register, handleSubmit } = useForm()
 
    // Event Handlers
    const onSubmit = ({ translationText }) => {
        onTranslation( translationText )
    }

    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <input type="text" {...register('translationText')} placeholder="Enter text" />
                </fieldset>

                <button type="submit">Translate</button>
            </form>
        </>
    )
}

export default TranslationForm