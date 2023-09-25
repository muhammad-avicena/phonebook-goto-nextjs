/* eslint-disable react-hooks/rules-of-hooks */
import { listContainer, listItem, spaceBetwenStyle, Button, addButtonStyles } from "@/shared/styles";
import { useMutation } from "@apollo/client";
import { ADD_NEW_CONTACT } from "@/lib/queries";
import { ContactData } from "@/types";
import { AddContactForm } from "@/components"
import Swal from "sweetalert2";
import { useRouter } from "next/router";


const formcontact = () => {

    const router = useRouter();
    const [addContactMutation] = useMutation(ADD_NEW_CONTACT);

    const handleSubmit = async (values: ContactData) => {
        try {
            const { data } = await addContactMutation({
                variables: {
                    first_name: values.first_name,
                    last_name: values.last_name,
                    phones: values.phones.map((phone) => ({ number: phone })),
                },
            });

            console.log("Contact added:", data.insert_contact.returning);
            Swal.fire({
                title: "Success",
                text: "The contact was added successfully.",
                icon: "success",
                confirmButtonText: "Ok",
            })
        } catch (error: any) {
            console.error("Error adding contact:", error.message);
            Swal.fire({
                title: "Error",
                text: `An error occurred while adding the contact. ${error.message}`,
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };
    return (
        <div css={listContainer}>
            <div css={listItem}>
                <div css={spaceBetwenStyle}>
                    <Button css={addButtonStyles} onClick={() => router.push('/listcontact')}>List Contact</Button>
                    <Button onClick={() => router.push('/')}>Back</Button>
                </div>
                <h1>Add Contact</h1>
                <AddContactForm onAddContact={handleSubmit} />
            </div>
        </div>
    );
}

export default formcontact;