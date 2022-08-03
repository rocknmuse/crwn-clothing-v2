import { SerializedError } from "@reduxjs/toolkit";
import { Key } from "react";

export type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

export type Category = {
    title: string;
    items: Product[]
}

export type CategoriesState = {
    categories: Category[],
    isLoading: boolean,
    error: SerializedError | null
}

export type CategoriesMap = {
    [key: string]: Product[]
}

export type CategoryDirectory = {
    id: Key,
    title: string,
    imageUrl: string,
    route: string,
}