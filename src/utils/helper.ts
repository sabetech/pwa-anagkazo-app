export function getServerDateFormat(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function getUserFriendlyDateFormat(date: string): string {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('en-GB', {year: 'numeric', month: 'short', day: 'numeric'});
}