import withAuth from "../hoc/withAuth"
import TranslationForm from "../components/Translations/TranslationForm"

const Translation = () => {
    return (
        <>
            <TranslationForm />
        </>
    )
}

export default withAuth(Translation)

