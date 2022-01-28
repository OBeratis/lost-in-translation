import { useForm } from "react-hook-form"

const TranslationForm = () => {
    const { register, handleSubmit } = useForm()
 
    // Event Handlers
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <input type="text" {...register('translationText')} placeholder="Enter text" />
                </fieldset>

                <button type="submit">Show...</button>
            </form>
        </>
    )
}

export default TranslationForm