import React from "react";
import { Button } from "../ui/button";
import { Bell } from "lucide-react";
type Props = {};

const Notifycation = (props: Props) => {
    return (
        <Button size="icon" variant="ghost">
            <Bell size={20} />
        </Button>
    );
};

export default Notifycation;
