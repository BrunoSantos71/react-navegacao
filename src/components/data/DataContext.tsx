import React from "react";

export type data = {
    number: number;
    text: string;
}

export type DataContext = {

    data: data;
    saveData: (data: data) => void;
    // updateData: (id: number) => void;

}

export const DEFAULT_VALUE = {

        number: 200,
        text: "aaaa"
    
}

const DataContext = React.createContext<DataContext | null>(null);

export default DataContext