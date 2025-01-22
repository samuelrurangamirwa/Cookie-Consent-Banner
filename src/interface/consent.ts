// export interface for action button
export interface ActionButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
    style?: React.CSSProperties;
}

// export interface for layout
export interface LayoutProps {
    children: React.ReactNode;
  }