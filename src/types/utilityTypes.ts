export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type PropsWithChildren<T> = T & { children: React.ReactNode };
export type PropsWithOptionalChildren<T> = T & { children?: React.ReactNode };
