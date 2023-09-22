import { Animated, Basic, bounce, Combined } from '../../shared/styles'

const Users = () => (
    <div>
        <Basic>Test Title</Basic>
        <Combined>
            View Contact.
        </Combined>
        <Combined>
            Edit Contact.
        </Combined>
        <Combined>
            Delete Contact.
        </Combined>
        <Animated animation={bounce}>Lets bounce.</Animated>
    </div>
)

export default Users
