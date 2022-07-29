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
    error: Error | null
}

export type CategoriesMap = {
    [key: string]: Product[]
}