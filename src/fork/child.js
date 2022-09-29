const challenge = (query) => {
    const array = [];
    if (query === undefined) {
        for(let i = 0; i < 10; i++) {
            let randomNum = 1 + Math.floor(Math.random() * 1000);
            array.push(randomNum);
        }
        return array;
    } else {
        for(let i = 0; i < query; i++) {
            let randomNum = 1 + Math.floor(Math.random() * 1000);
            array.push(randomNum);
        };
        return array;
    };
};

process.on("message", (quant) => {
    console.log("first", quant)
    if (quant) {
        console.log("second", quant)
        const random = challenge(quant);
        process.send(random);
    }
});