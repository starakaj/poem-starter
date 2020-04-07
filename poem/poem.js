async function makePoem() {
    return [
        "This is the first line",
        "And this, the second"
    ];
}

if (require.main === module) {
    makePoem().then(res => console.log(res));
}

module.exports = {
    makePoem
};
