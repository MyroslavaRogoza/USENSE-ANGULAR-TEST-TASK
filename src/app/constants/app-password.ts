export const alphanumericSymbols = /^[a-zA-Z]+$|^\d+$|^[^a-zA-Z\d]+$/;

export const combination = /^[a-zA-Z\d]+$|^[a-zA-Z^\W_]+$|^[\d^\W_]+$/;

export const lsnRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\W_]).+$/;
