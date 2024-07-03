import { Component } from "react";
import './app.css';
interface CalculatorProps {
}
interface CalculatorState {
    displayValue: string;
    clearDisplay: boolean;
    operation: string;
    values: number[];
    current: number;
}
export default class Calculator extends Component<CalculatorProps, CalculatorState> {
    state: {
        displayValue: string;
        clearDisplay: boolean;
        operation: string;
        values: number[];
        current: number;
    };
    constructor(props: CalculatorProps);
    cleanMemory(): void;
    setOperation(operation: string): void;
    addDigit(botao: any): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
