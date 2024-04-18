async function fetchTokenPrice() {
  const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));
  const tokenMintAddress = 'AAXzWyHFErx9MzgiDKSxRZ14VAYjW7Pv6xEqpnSLXPL9';
  const tokenPriceApiUrl = 'https://cf-ipfs.com/ipfs/QmTGZD656AojRd9FWPgdSRQKqz65x5rkSh59PHGikJmxaA' + tokenMintAddress; // Hypothetical API

  try {
      const response = await fetch(tokenPriceApiUrl);
      const data = await response.json();
      const price = data.price; // Adjust according to actual API response structure
      document.getElementById('tokenPrice').innerText = `Current price: $${price}`;
  } catch (error) {
      console.error('Failed to fetch token price:', error);
      document.getElementById('tokenPrice').innerText = 'Failed to load price';
  }
}

fetchTokenPrice();
