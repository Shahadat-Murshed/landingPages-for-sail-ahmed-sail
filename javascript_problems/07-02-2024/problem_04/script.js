function password(obj) {
    if (
        !obj.hasOwnProperty("name") ||
        !obj.hasOwnProperty("birthYear") ||
        !obj.hasOwnProperty("siteName") ||
        typeof obj.birthYear != "number" ||
        obj.birthYear.toString().length !== 4
    ) {
        return "invalid";
    } else {
        const siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
        const name = obj.name;
        const year = obj.birthYear;
        return `${siteName}#${name}@${year}`;
    }
}
