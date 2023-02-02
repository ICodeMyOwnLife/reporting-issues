let value: number | undefined | null;

export const getValue = (defaultValue: number) => (value ??= defaultValue);
