import { ActionButtonProps } from "@/lib/types";
import { Button } from "@heroui/react";

// Make a reusable component action button

export const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, className, style }) => {
    return (
        <Button onClick={onClick} className={className || ''} style={style}>
            {label}
        </Button>
    )
}