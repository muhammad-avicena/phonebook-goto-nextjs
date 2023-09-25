/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { listContainer, listItem, Button, rightStyle } from "@/shared/styles";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_CONTACT, GET_CONTACT_DETAILS } from "@/lib/queries";
import { ContactData } from "@/types";
import { EditContactForm } from "@/components"
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const editcontact = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data: contactData, loading: loadingContact, error: errorContact } = useQuery(GET_CONTACT_DETAILS, {
        variables: {
            id: id,
        },
    });

    const [updateContactMutation] = useMutation(UPDATE_CONTACT);

    const handleSubmit = async (values: ContactData) => {
        console.log(values)

        try {
            const { data } = await updateContactMutation({
                variables: {
                    id: id,
                    _set: {
                        first_name: values.first_name,
                        last_name: values.last_name,
                    },
                },
            });
            console.log("Contact updated:", data);
            Swal.fire({
                title: "Success",
                text: "The contact was updated successfully.",
                icon: "success",
                confirmButtonText: "Ok",
            });
            router.push('/listcontact')
        } catch (error: any) {
            console.error("Error updating contact:", error.message);
            Swal.fire({
                title: "Error",
                text: `An error occurred while updating the contact. ${error.message}`,
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    if (loadingContact) return <div>Loading...</div>;
    if (errorContact) return <div>Error while fetching contact details...</div>;

    return (
        <div css={listContainer}>
            <div css={listItem}>
                <h1>Edit Contact</h1>
                <Button css={rightStyle} style={{ marginBottom: 20 }} onClick={() => router.push('/listcontact')}>List Contact</Button>
                <EditContactForm onEditContact={handleSubmit} initialValuesData={contactData.contact_by_pk} />
            </div>
        </div>
    );
}

export default editcontact;
