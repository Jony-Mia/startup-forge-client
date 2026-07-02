import { Button } from "@heroui/react";

const EditButton = ({children}) => {
    return (
        <Button type="submit">
            {children}
        </Button>
    );
};

export default EditButton;