export function isNotEmpty(value: string) {
    return value.trim() !== "";
}

export function isEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isPhoneNumber(value: string) {
    return /^[0-9]+$/.test(value);
}

export function isPositiveNumber(value: string) {
    return Number(value) > 0;
}

export function hasMinLength(value: string, minLength: number) {
    return value.length >= minLength;
}

export function isSelected(value: string) {
    return value.trim() !== "";
}