const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["Frizzy Izzy", "Prince of Courage", "Burna Boy jr"],
        [
            "./images/Frizzy Izzy.png", // Images
            "./images/Prince of Courage.png",
            "./images/Burna Boy jr.png",
        ],
        [100, 200, 300],
        [100, 50, 2],
        "Patrice O'Neal",
        "https://images.nymag.com/news/features/oneal120521_560.jpg",
        10000,
        50
    );
    await gameContract.deployed();
    console.log("contract deployed to:", gameContract.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

runMain();