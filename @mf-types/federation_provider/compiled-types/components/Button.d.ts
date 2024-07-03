import "./botao.css";
interface ButtonProps {
    click: any;
    botao: string;
    triple?: boolean;
    double?: boolean;
    operation?: boolean;
}
export default function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
