function checkName(name) {
    if (typeof name !== "string") {
        return "Invalid";
    } else {
        const letters = ["a", "y", "i", "e", "o", "u", "w"];

        const lastChar = name.charAt(name.length - 1).toLowerCase();
        if (letters.includes(lastChar)) {
            return "Good Name";
        } else {
            return "Bad Name";
        }
    }
}
