interface dividerProps {
    color?: "primary" | "secondary" | "tertiary";
    classes?: string;
}
export default function Divider({ color = "secondary", classes }: dividerProps): JSX.Element {
    return (
        <div className={`mx-auto my-3 w-10/12 h-[1px] bg-${color} &{classes}}`}>
        </div>
    )
}
