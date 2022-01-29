import ProfileTranslationHistoryItem  from './ProfileTranslationHistoryItem'

const ProfileTranslationHistory = ({ translations }) => {

    const translationList = translations.map(
        (translation, index) => 
        <ProfileTranslationHistoryItem key={ index + '-' + translation } item={ translation } />
    )

    return (
        <section>
            <h4>Your translations history</h4>

            { translationList.length === 0 && <p>You have no translation entries.</p>}

            <ul>
                { translationList }
            </ul>
        </section>

    )
}

export default ProfileTranslationHistory