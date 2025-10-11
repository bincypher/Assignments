function secretMessage(secret) {
    return function() {
        return secret;
    }
}

const secret = secretMessage("The eagle has landed.");
console.log(secret());