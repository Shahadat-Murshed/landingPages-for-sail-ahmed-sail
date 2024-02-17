function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Input is not an array";
    } else {
        const number = array.filter((item) => typeof item === "number" && !isNaN(item));
        return number;
    }
}
