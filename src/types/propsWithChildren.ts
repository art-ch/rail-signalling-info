export type PropsWithChild<T> = T & {
  children: React.ReactNode;
};

export type PropsWithOptionalChild<T> = T & {
  children?: React.ReactNode;
};

export type PropsWithChildren<T> = T & {
  children: React.ReactNode | React.ReactNode[];
};
export type PropsWithOptionalChildren<T> = T & {
  children?: React.ReactNode | React.ReactNode[];
};
