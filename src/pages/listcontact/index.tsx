import { Animated, bounce, listContainer, listItem, Button, centerStyle, favouriteButtonStyles, HeaderContainer } from '../../shared/styles';
import { ContactPhone } from '@mui/icons-material';
import { useQuery, useMutation, ApolloError, Reference, StoreObject } from '@apollo/client';
import { GET_CONTACT_LIST, DELETE_CONTACT } from '../../lib/queries';
import { DataListContact } from '@/types';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { SearchComponents, DropdownComponents } from '@/components';
import { addButtonStyles, deleteButtonStyles } from '@/shared/styles';
import { useFavorites } from '../../context/useFavourite';
import Swal from 'sweetalert2';

const Users = () => {

    const [page, setPage] = useState(0);
    const [searchData, setSearchData] = useState<DataListContact[] | null>(null);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const isFavorite = (contact: number) => (favorites.includes(contact))

    console.log(favorites)

    const router = useRouter();

    const { data: allData, loading: loadingAllData, error: errorAllData } = useQuery(GET_CONTACT_LIST);

    const onCompleted = (data: { delete_contact_by_pk: number; }) => {
        console.log('Contact deleted:', data.delete_contact_by_pk);
    };


    const onError = (error: ApolloError) => {
        console.error('Error deleting contact:', error);
        Swal.fire({
            title: 'Error',
            text: 'An error occurred while deleting the contact.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    };

    const [deleteContact] = useMutation(DELETE_CONTACT, {
        onCompleted,
        onError
    });

    const handleDelete = (id: number | undefined) => {
        deleteContact({
            variables: {
                id: id,
            },
            update(cache) {
                cache.modify({
                    fields: {
                        contact(existingContacts = [], { readField }) {
                            return existingContacts.filter((contactRef: Reference | StoreObject | undefined) => {
                                return id !== readField('id', contactRef);
                            });
                        },
                    },
                });
            },
        });
    };

    const handleSearch = (filteredData: DataListContact[]) => {
        setSearchData(filteredData);
    };

    if (loadingAllData) return (
        <div css={listContainer}>
            <div css={listItem}>Loading...</div>
        </div>
    );
    if (errorAllData) return (
        <div css={listContainer}>
            <div css={listItem}>Error while fetching data...</div>
        </div>
    );

    const sourceData = searchData || allData?.contact;
    const totalPages = Math.ceil(sourceData.length / itemsPerPage);

    const favoriteContacts = sourceData.filter((contact: any) => favorites.includes(contact.id));
    const nonFavoriteContacts = sourceData.filter((contact: any) => !favorites.includes(contact.id));

    const getCurrentPageData = (nonFavoriteContacts: DataListContact[]) => {
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return nonFavoriteContacts.slice(startIndex, endIndex);
    };


    return (
        <>
            <div css={listContainer}>
                <Animated animation={bounce}>
                    <ContactPhone /> List Contact Page
                </Animated>
                <div css={centerStyle}>
                    <DropdownComponents
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                        setPage={setPage} />
                    <Button style={{ margin: "0.5rem 0.5rem" }} onClick={() => router.push('/')}>Back</Button>
                </div>
                <HeaderContainer>
                    <SearchComponents data={allData?.contact} onChange={handleSearch} />
                    <Button onClick={() => router.push('/formcontact')} css={addButtonStyles} style={{ margin: "0.3rem 0.3rem" }}>Add Contact</Button>
                    <Button css={favouriteButtonStyles} style={{ margin: "0.3rem 0.3rem" }} onClick={() => router.push('/listcontact/favourite')}>List favourite ({favoriteContacts.length})</Button>
                </HeaderContainer>
                {getCurrentPageData(nonFavoriteContacts).length > 0 ? (
                    getCurrentPageData(nonFavoriteContacts).map((contact: DataListContact) => (
                        <div key={contact.id} css={listItem}>
                            <p><strong>ID:</strong> {contact.id}</p>
                            <p><strong>First Name:</strong> {contact.first_name}</p>
                            <p><strong>Last name:</strong>  {contact.last_name}</p>
                            <p><strong>Phone:</strong></p>
                            <ul>
                                {contact.phones.map((phone: any, index) => (
                                    < li key={index} >
                                        {phone.number}
                                    </li>
                                ))}
                            </ul>
                            {isFavorite(contact.id || 0) ? (
                                <Button css={favouriteButtonStyles} onClick={() => removeFavorite(contact.id || 0)}>Remove Favorites</Button>
                            ) : (
                                <Button css={favouriteButtonStyles} onClick={() => addFavorite(contact.id || 0)}>Add to Favorites</Button>
                            )}
                            <Button style={{ margin: "0.5rem 0.5rem" }}>Edit</Button>
                            <Button css={deleteButtonStyles} onClick={() => handleDelete(contact.id)}>Delete</Button>
                        </div>
                    ))
                ) : (
                    <>
                        <div css={listItem}>
                            <h3>List Regular is empty!</h3>
                            <br></br>
                            <p>Not looking for what you need? Try to add a new contact.</p>
                        </div>
                    </>
                )}
            </div >

            <div css={centerStyle}>
                <Button
                    disabled={page === 0}
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </Button>
                <span style={{ color: "white", padding: "0.5rem 1rem 0 1rem" }}>{page + 1}/{totalPages}</span>
                <Button
                    disabled={page === totalPages - 1}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </Button>
            </div>
        </>
    );
};

export default Users;
