const formatDate = (date: string): string => {
    const dateFormatted = new Date(date);
    const fullDate = dateFormatted.toLocaleDateString();
    return fullDate;
}

export default formatDate;