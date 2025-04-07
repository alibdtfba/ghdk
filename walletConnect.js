async function connectWallet(wallet) {
    const loading = document.getElementById('loading');
    const message = document.getElementById('message');
    loading.style.display = 'block';
    message.textContent = `Connecting to ${wallet}...`;
  
    try {
      if (wallet === "MetaMask") {
        if (typeof window.ethereum !== 'undefined') {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(window.ethereum);
          const accounts = await web3.eth.getAccounts();
          message.textContent = `Connected to MetaMask: ${accounts[0]}`;
        } else {
          message.textContent = "MetaMask is not installed.";
        }
      } else if (wallet === "WalletConnect") {
        const provider = new WalletConnectProvider.default({
          infuraId: "1f260faaa5e94bfcaa13c6a840f0ed79" // You can replace this with your own Infura ID
        });
  
        await provider.enable();
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        message.textContent = `Connected via WalletConnect: ${accounts[0]}`;
  
        // Optionally handle disconnect
        provider.on("disconnect", (code, reason) => {
          message.textContent = "Disconnected from WalletConnect.";
        });
      } else {
        message.textContent = `${wallet} does not support direct connection in-browser yet.`;
      }
    } catch (error) {
      message.textContent = `Connection failed: ${error.message}`;
    } finally {
      loading.style.display = 'none';
    }
  }