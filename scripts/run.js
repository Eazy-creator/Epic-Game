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
        "https://static.wikia.nocookie.net/villains/images/2/21/Beatrice_Horseman_Now.png/revision/latest?cb=20200725032320",
        10000,
        50
    );
    await gameContract.deployed();
    console.log("contract deployed to:", gameContract.address);

    let tx;
    tx = await gameContract.mintCharacterNFT(2); // an NFT w/ character at index 2
    await tx.wait();

    tx = await gameContract.attackBoss();
    await tx.wait();

    tx = await gameContract.attackBoss();
    await tx.wait();

    let returnTokenUri = await gameContract.tokenURI(1); // get tokenURI of tokenId 1
    console.log("token uri:", returnTokenUri);
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