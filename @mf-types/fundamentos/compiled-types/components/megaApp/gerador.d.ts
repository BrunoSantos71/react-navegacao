import { Component } from "react";
import "./mega.css";
export interface GeradorProps {
    qntd: number;
}
export interface GeradorState {
    qntd: number;
    numeros: number[];
}
export default class Gerador extends Component<GeradorProps, GeradorState> {
    gerador(qntd: number): number[];
    iniciar: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
