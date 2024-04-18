async function fetchTokenPrice(retryCount = 0) {
    const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));
    const tokenMintAddress = 'AAXzWyHFErx9MzgiDKSxRZ14VAYjW7Pv6xEqpnSLXPL9';
    const tokenPriceApiUrl = 'https://cf-ipfs.com/ipfs/QmTGZD656AojRd9FWPgdSRQKqz65x5rkSh59PHGikJmxaA' + tokenMintAddress; // Hypothetical API

    try {
        const response = await fetch(tokenPriceApiUrl);
        if (!response.ok) throw new Error('Failed to fetch, server responded with an error');
        const data = await response.json();
        const price = data.price; // Adjust according to actual API response structure
        document.getElementById('tokenPrice').innerText = `Current price: $${price}`;
    } catch (error) {
        console.error('Failed to fetch token price:', error);
        document.getElementById('tokenPrice').innerText = 'Attempt failed, retrying...';
        if (retryCount < 3) {
            setTimeout(() => fetchTokenPrice(retryCount + 1), 2000);
        } else {
            document.getElementById('tokenPrice').innerText = 'Failed to load price after multiple attempts';
        }
    }
}

fetchTokenPrice();
