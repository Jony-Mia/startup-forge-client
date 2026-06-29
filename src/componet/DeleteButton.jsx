"use client";
import { Button } from "@heroui/react";
import { deleteOpportunities } from "@/api/actionRoutes";
import { TrashBin } from "@gravity-ui/icons";

const DeleteButton = ({ id }) => {
    //  deleteID(id);
    let deleteID = async (id) => await deleteOpportunities(id);

    return (
        <>
            <Button
                onClick={() => deleteID(id)}
                variant="danger"
                size="sm"
            >
                <TrashBin />
            </Button>
        </>
    );
};

export default DeleteButton;