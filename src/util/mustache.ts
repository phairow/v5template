
export const comma = () => ', ';

export const comma_separated_list = () => (text: string, render: Function): string => render(text).replace(/,\s$/, '');