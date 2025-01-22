import { ActionButtonProps } from "@/interface/consent";
import { Button } from "@heroui/react";

// Make a reusable component for button

export const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick, className, style }) => {
    return (
        <Button onClick={onClick} className={className || ''} style={style}>
            {label}
        </Button>
    )
}