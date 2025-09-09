// Product Data
const products = [
  // Fruits
  { name: "Guava", price: 100, img: "https://media.istockphoto.com/id/171575811/photo/guava.jpg?s=612x612&w=0&k=20&c=cjVDpisFrT8JlqFbSEImkfsXgQbtrNCdSTILGAzIj2Q=" },
  { name: "Mango", price: 150, img: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg" },
  { name: "Banana", price: 60, img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },

  // Vegetables
  { name: "Tomato", price: 30, img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" },
  { name: "Carrot", price: 40, img: "https://media.istockphoto.com/id/1388403435/photo/fresh-carrots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XmrTb_nASc7d-4zVKUz0leeTT4fibDzWi_GpIun0Tlc=" },
  { name: "Onion", price: 35, img: "https://t4.ftcdn.net/jpg/06/43/53/25/240_F_643532526_XPMxjFk3XDwRa8UCUC04iC2BJ0HSMsDd.jpg" },
  { name: "Cauliflower", price: 25, img: "https://t3.ftcdn.net/jpg/00/68/10/58/240_F_68105885_hf9yIAhaAoa69xgSnwviKsomIh9blBJJ.jpg" },
  { name: "Cabbage", price: 40, img: "https://t3.ftcdn.net/jpg/03/74/46/68/240_F_374466842_siU3zJ6Iyw9nlNk4ABnF5AhzRE2q8U0q.jpg" },

  // Grains / Crops
  { name: "Wheat", price: 22, img: "https://t3.ftcdn.net/jpg/01/60/57/36/240_F_160573622_vXgBJ0sou1iFZbPNCodTkCde4SkC5v8r.jpg" },
  { name: "Rice", price: 45, img: "https://t4.ftcdn.net/jpg/00/41/17/37/240_F_41173708_CcPLJf4vZBAfMUSD2HpxARQ4Zh3ClZxn.jpg" },
  { name: "Maize", price: 30, img: "https://t4.ftcdn.net/jpg/12/36/25/91/240_F_1236259172_nIsxhVJ192krRVOPAz4Tp2TmPFOHZFKD.jpg" },
  { name: "Kopra (Dried Coconut)", price: 220, img: "https://akshayakalpa.org/wp-content/uploads/2024/07/copra-1.jpg" },

  // Pulses
  { name: "Chickpeas", price: 70, img: "https://t3.ftcdn.net/jpg/02/83/97/16/240_F_283971637_l01oKnCdtSDjeSrr0HzsK35wQtx91CNc.jpg" },
  { name: "Green Gram", price: 85, img: "https://t4.ftcdn.net/jpg/15/37/86/19/240_F_1537861932_SAHMmTYrpJ0M7DgV5bIcpGe25ZxPKyVa.jpg" },

  // Flowers
  { name: "Marigold", price: 80, img: "https://t3.ftcdn.net/jpg/05/53/48/64/240_F_553486488_qZFLDYqfOWoUHMqZKwY1rAYIz2zDJ8wZ.jpg" },
  { name: "Rose", price: 150, img: "https://t4.ftcdn.net/jpg/02/45/59/53/240_F_245595382_zqUoYggkhYxBIyCOnTBcWKzEHqVJCCL1.jpg" },
  { name: "Jasmine", price: 120, img: "https://t3.ftcdn.net/jpg/02/75/01/74/240_F_275017431_kmxr1zOS8QQ9NoPcfxHjPMG9jL3JYYi9.jpg" }
];


const WASTAGE_PERCENTAGE = 0.05;

// Elements
const productListEl = document.getElementById("product-list");
const sellModal = document.getElementById("sellModal");
const closeModalBtn = document.getElementById("closeModal");
const sellForm = document.getElementById("sellForm");
const productNameInput = document.getElementById("productName");
const quantityInput = document.getElementById("quantity");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const bankNameInput = document.getElementById("bankName");
const accountNoInput = document.getElementById("accountNo");
const ifscInput = document.getElementById("ifsc");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const estimateResult = document.getElementById("estimateResult");
const finalMessage = document.getElementById("finalMessage");

let chosenProduct = null;

function renderProducts() {
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>₹${product.price}/kg</p>
      <button class="sell" data-index="${index}">Sell Product</button>
    `;
    productListEl.appendChild(card);
  });
}

function openSellModal(index) {
  chosenProduct = products[index];
  productNameInput.value = chosenProduct.name;
  sellModal.classList.add("show");
  step1.style.display = "block";
  step2.style.display = "none";
  finalMessage.style.display = "none";
}

function closeSellModal() {
  sellModal.classList.remove("show");
  sellForm.reset();
}

function calculateEstimate(qty) {
  const wastage = qty * WASTAGE_PERCENTAGE;
  const netQty = qty - wastage;
  const amount = netQty * chosenProduct.price;
  return { wastage, netQty, amount };
}

nextBtn.onclick = () => {
  const qty = Number(quantityInput.value);
  if (qty <= 0) return alert("Enter valid quantity.");
  const { wastage, netQty, amount } = calculateEstimate(qty);
  estimateResult.textContent = 
    `Wastage: ${wastage.toFixed(2)} kg\nNet: ${netQty.toFixed(2)} kg\nEstimated Amount: ₹${amount.toFixed(2)}`;
  step1.style.display = "none";
  step2.style.display = "block";
};

backBtn.onclick = () => {
  step2.style.display = "none";
  step1.style.display = "block";
};

sellForm.onsubmit = async (e) => {
  e.preventDefault();
  const qty = Number(quantityInput.value);
  const { wastage, netQty, amount } = calculateEstimate(qty);

  const data = {
    product: chosenProduct.name,
    quantity: qty,
    farmer_name: nameInput.value.trim(),
    phone: phoneInput.value.trim(),
    bank_name: bankNameInput.value.trim(),
    account_no: accountNoInput.value.trim(),
    ifsc: ifscInput.value.trim(),
    price_per_kg: chosenProduct.price
  };

  await fetch("http://localhost:8000/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  finalMessage.textContent = `Thank you, ${data.farmer_name}. We will contact you at ${data.phone}.`;
  finalMessage.style.display = "block";

  setTimeout(() => {
    closeSellModal();
  }, 3000);
};

closeModalBtn.onclick = closeSellModal;
sellModal.onclick = (e) => { if (e.target === sellModal) closeSellModal(); };
productListEl.onclick = (e) => {
  if (e.target.classList.contains("sell")) {
    openSellModal(Number(e.target.dataset.index));
  }
};

renderProducts();
document.getElementById('logoutBtn').addEventListener('click', function () {
  // Optionally clear any session/local storage here
  // localStorage.clear();
  // sessionStorage.clear();

  // Redirect to login page
  window.location.href = 'login.html'; // change to actual login page path
});
const playVideoBtn = document.getElementById('playVideoBtn');
const videoModal = document.getElementById('videoModal');
const closeVideo = document.getElementById('closeVideo');
const agriVideo = document.getElementById('agriVideo');

// Embed URL with autoplay
const videoURL = "https://www.youtube.com/embed/K105xluiB8s?autoplay=1";

playVideoBtn.addEventListener('click', () => {
  agriVideo.src = videoURL;
  videoModal.style.display = 'block';
});

closeVideo.addEventListener('click', () => {
  videoModal.style.display = 'none';
  agriVideo.src = ""; // Reset to stop playback
});

