import { Component } from "react";
import "./mega.css";
export interface MegaAppProps {
    qntd: number;
}
export interface MegaAppState {
    qntd: number;
}
export default class MegaApp extends Component<MegaAppProps, MegaAppState> {
    constructor(props: MegaAppProps);
    novaQuantidade: (novaQntd: number) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
