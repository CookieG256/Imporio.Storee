const WHATSAPP_NUMBER = "56954128230";
const CURRENCY = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
});

// Add or update products here. A null price or measurement is shown as
// "Consultar" until the store confirms the current product information.
const PRODUCTS = [
    {
        id: "polera-basica-soft",
        name: "Polera básica 100% algodón (soft)",
        category: "poleras",
        categoryLabel: "Poleras",
        collection: "01 / ESENCIALES",
        description: "100% algodón · Suave al tacto",
        price: 8000,
        image: "img/polera-basica.svg",
        imageAlt: "Ilustración de polera básica de algodón",
        colors: [
            { name: "Negro", hex: "#171717" },
            { name: "Blanco", hex: "#e9e6de" },
            { name: "Gris", hex: "#88877f" },
            { name: "Melange", hex: "#aaa9a3" },
            { name: "Beige", hex: "#c7b99f" },
            { name: "Rosa", hex: "#c98491" },
            { name: "Rojo", hex: "#a83232" },
            { name: "Verde", hex: "#586b55" },
            { name: "Azul", hex: "#415d7e" },
            { name: "Otro tono", hex: "#756849" },
        ],
        sizes: [
            { size: "2", label: "2 · Niño", width: null, length: null },
            { size: "4", label: "4 · Niño", width: null, length: null },
            { size: "6", label: "6 · Niño", width: null, length: null },
            { size: "8", label: "8 · Niño", width: null, length: null },
            { size: "10", label: "10 · Niño", width: null, length: null },
            { size: "12", label: "12 · Niño", width: null, length: null },
            { size: "14", label: "14 · Niño", width: null, length: null },
            { size: "16", label: "16 · Niño", width: null, length: null },
            { size: "S", label: "S · Adulto", width: null, length: null },
            { size: "M", label: "M · Adulto", width: null, length: null },
            { size: "L", label: "L · Adulto", width: null, length: null },
            { size: "XL", label: "XL · Adulto", width: null, length: null },
            { size: "XXL", label: "XXL · Adulto", width: null, length: null },
        ],
        offers: [
            { quantity: 1, total: 8000, label: "1 polera" },
            { quantity: 2, total: 14000, label: "Pack de 2" },
            { quantity: 4, total: 25000, label: "Pack de 4" },
        ],
    },
    {
        id: "polera-slim-fit",
        name: "Polera manga corta Slim fit (hombre)",
        category: "poleras",
        categoryLabel: "Poleras",
        collection: "02 / ESENCIALES",
        description: "Calce Slim fit · Manga corta · Hombre",
        price: 8000,
        image: "img/polera-basica.svg",
        imageAlt: "Ilustración referencial de polera manga corta",
        colors: [{ name: "Consultar color disponible", hex: "#756849" }],
        sizes: [
            { size: "S", width: 46, length: 70.5 },
            { size: "M", width: 51, length: 73 },
            { size: "L", width: 56, length: 75.5 },
            { size: "XL", width: 61, length: 78 },
            { size: "XXL", width: 66, length: 80.5 },
        ],
        offers: [
            { quantity: 1, total: 8000, label: "1 polera" },
            { quantity: 2, total: 14000, label: "Pack de 2" },
            { quantity: 4, total: 25000, label: "Pack de 4" },
        ],
    },
    {
        id: "polera-oversize",
        name: "Polera oversize 100% algodón (soft)",
        category: "poleras",
        categoryLabel: "Poleras",
        collection: "03 / OVERSIZE",
        description: "100% algodón · Silueta oversize",
        price: 13000,
        image: "img/polera-basica.svg",
        imageAlt: "Ilustración referencial de polera oversize",
        colors: [{ name: "Consultar color disponible", hex: "#756849" }],
        sizes: [
            { size: "S", width: 59, length: 71.5 },
            { size: "M", width: 64, length: 74 },
            { size: "L", width: 69, length: 76.5 },
            { size: "XL", width: 74, length: 79 },
            { size: "XXL", width: 79, length: 81.5 },
        ],
        offers: [
            { quantity: 1, total: 13000, label: "1 polera" },
            { quantity: 2, total: 24000, label: "Pack de 2" },
        ],
    },
    {
        id: "poleron-canguro-unisex",
        name: "Polerón canguro unisex",
        category: "polerones",
        categoryLabel: "Polerones",
        collection: "04 / CAPAS",
        description: "Un esencial abrigado para cualquier plan",
        price: 19990,
        image: "img/poleron-canguro.svg",
        imageAlt: "Ilustración de polerón canguro unisex",
        colors: [{ name: "Consultar color disponible", hex: "#756849" }],
        sizes: [
            { size: "XS", width: 50, length: 68 },
            { size: "S", width: 53, length: 70 },
            { size: "M", width: 56, length: 72 },
            { size: "L", width: 59, length: 75 },
            { size: "XL", width: 62, length: 77 },
            { size: "2XL", width: 65, length: 79 },
        ],
        offers: [],
    },
    {
        id: "canguro-nino",
        name: "Canguro niño",
        category: "polerones",
        categoryLabel: "Polerones",
        collection: "05 / NIÑOS",
        description: "Polerón canguro infantil",
        price: null,
        image: "img/poleron-canguro.svg",
        imageAlt: "Ilustración referencial de polerón infantil",
        colors: [{ name: "Consultar color disponible", hex: "#756849" }],
        sizes: [
            { size: "4", width: 38, length: 47 },
            { size: "6", width: 41, length: 49 },
            { size: "8", width: 42, length: 53 },
            { size: "10", width: 44, length: 56 },
            { size: "12", width: 46, length: 59 },
            { size: "14", width: 49, length: 63 },
            { size: "16", width: 53, length: 65 },
        ],
        offers: [],
    },
    {
        id: "poleron-full-zip",
        name: "Polerón con cierre metálico (Full Zip unisex)",
        category: "polerones",
        categoryLabel: "Polerones",
        collection: "06 / FULL ZIP",
        description: "Unisex · Cierre metálico · Gramaje 340",
        price: 21990,
        image: "img/poleron-zip.svg",
        imageAlt: "Ilustración referencial de polerón con cierre",
        colors: [{ name: "Consultar color disponible", hex: "#756849" }],
        sizes: [
            { size: "XS", width: 50, length: 68 },
            { size: "S", width: 53, length: 70 },
            { size: "M", width: 56, length: 72 },
            { size: "L", width: 59, length: 75 },
            { size: "XL", width: 62, length: 77 },
            { size: "XXL", width: 65, length: 79 },
        ],
        offers: [],
    },
    {
        id: "poleron-crew-hombre",
        name: "Polerón crew hombre (cuello redondo)",
        category: "polerones",
        categoryLabel: "Polerones",
        collection: "07 / CREW",
        description: "Hombre · Cuello redondo",
        price: null,
        image: "img/poleron-crew.svg",
        imageAlt: "Ilustración referencial de polerón cuello redondo",
        colors: [{ name: "Consultar color disponible", hex: "#756849" }],
        sizes: [
            { size: "XS", width: 50, length: 68 },
            { size: "S", width: 53, length: 70.5 },
            { size: "M", width: 56, length: 73 },
            { size: "L", width: 59, length: 75.5 },
            { size: "XL", width: 62, length: 78 },
            { size: "2XL", width: 65, length: 80.5 },
        ],
        offers: [],
    },
    {
        id: "poleron-crop-mujer",
        name: "Polerón crop top mujer 100% algodón (soft)",
        category: "polerones",
        categoryLabel: "Polerones",
        collection: "08 / CROP",
        description: "100% algodón · Corte crop top",
        price: 16990,
        image: "img/poleron-crop.svg",
        imageAlt: "Ilustración referencial de polerón crop top",
        colors: [{ name: "Consultar color disponible", hex: "#756849" }],
        sizes: ["XS", "S", "M", "L", "XL"].map((size) => ({
            size, width: null, length: null,
        })),
        offers: [],
    },
    {
        id: "conjunto-shorts-polera",
        name: "Conjunto shorts + polera",
        category: "conjuntos",
        categoryLabel: "Conjuntos",
        collection: "09 / CONJUNTOS",
        description: "Colores y tallas a elección, combinables",
        price: 15990,
        image: "img/conjunto-shorts.svg",
        imageAlt: "Ilustración de conjunto de shorts y polera",
        colors: [
            { name: "Negro", hex: "#171717" },
            { name: "Blanco", hex: "#e9e6de" },
            { name: "Gris", hex: "#88877f" },
            { name: "Melange", hex: "#aaa9a3" },
            { name: "Beige", hex: "#c7b99f" },
            { name: "Rosa", hex: "#c98491" },
            { name: "Rojo", hex: "#a83232" },
            { name: "Verde", hex: "#586b55" },
            { name: "Azul", hex: "#415d7e" },
        ],
        sizes: ["S", "M", "L", "XL", "XXL"].map((size) => ({
            size, width: null, length: null,
        })),
        components: [
            {
                name: "Polera",
                colors: [
                    { name: "Negro", hex: "#171717" },
                    { name: "Blanco", hex: "#e9e6de" },
                    { name: "Gris", hex: "#88877f" },
                    { name: "Melange", hex: "#aaa9a3" },
                    { name: "Beige", hex: "#c7b99f" },
                    { name: "Rosa", hex: "#c98491" },
                    { name: "Rojo", hex: "#a83232" },
                    { name: "Verde", hex: "#586b55" },
                    { name: "Azul", hex: "#415d7e" },
                ],
                sizes: ["S", "M", "L", "XL", "XXL"],
            },
            {
                name: "Shorts",
                colors: [
                    { name: "Negro", hex: "#171717" },
                    { name: "Blanco", hex: "#e9e6de" },
                    { name: "Gris", hex: "#88877f" },
                    { name: "Melange", hex: "#aaa9a3" },
                    { name: "Beige", hex: "#c7b99f" },
                    { name: "Rosa", hex: "#c98491" },
                    { name: "Rojo", hex: "#a83232" },
                    { name: "Verde", hex: "#586b55" },
                    { name: "Azul", hex: "#415d7e" },
                ],
                sizes: ["S", "M", "L", "XL", "XXL"],
            },
        ],
        offers: [],
    },
    {
        id: "buzo-baggy",
        name: "Buzo baggy 100% algodón (hombre y mujer)",
        category: "pantalones",
        categoryLabel: "Pantalones / Buzos",
        collection: "10 / BAGGY",
        description: "100% algodón · Hombre y mujer",
        price: 17990,
        image: "img/buzo-baggy.svg",
        imageAlt: "Ilustración referencial de buzo baggy",
        colors: [{ name: "Consultar color disponible", hex: "#756849" }],
        sizes: ["XS", "S", "M", "L", "XL", "XXL"].map((size) => ({
            size, width: null, length: null,
        })),
        offers: [],
    },
];

const productGrid = document.querySelector("#product-grid");
const productSearch = document.querySelector("#product-search");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const resultsCount = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const modal = document.querySelector("#product-modal");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalCategory = document.querySelector("#modal-category");
const modalDescription = document.querySelector("#modal-description");
const modalPrice = document.querySelector("#modal-price");
const modalPacks = document.querySelector("#modal-packs");
const modalColors = document.querySelector("#modal-colors");
const modalSizes = document.querySelector("#modal-sizes");
const modalSizeOptions = document.querySelector("#modal-size-options");
const standardColorsSection = document.querySelector("#standard-colors-section");
const standardSizeField = document.querySelector("#standard-size-field");
const standardColorField = document.querySelector("#standard-color-field");
const componentPicker = document.querySelector("#component-picker");
const orderColor = document.querySelector("#order-color");
const orderQuantity = document.querySelector("#order-quantity");
const modalOrder = document.querySelector("#modal-order");
const closeModalButton = document.querySelector(".modal-close");

let activeCategory = "all";
let activeProduct = null;
let selectedSize = "";
let selectedComponents = [];

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    })[character]);
}

function formatPrice(amount) {
    return CURRENCY.format(amount);
}

function displayPrice(amount) {
    return amount == null ? "Consultar" : formatPrice(amount);
}

function productMatches(product, query) {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const searchableText = [
        product.name,
        product.description,
        product.categoryLabel,
        ...product.colors.map((color) => color.name),
        ...product.sizes.map((size) => size.size),
    ].join(" ").toLocaleLowerCase("es");

    return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
}

function renderProductCard(product, index) {
    return `
        <article class="product-card" data-product-id="${escapeHtml(product.id)}" tabindex="0" aria-label="Ver ficha de ${escapeHtml(product.name)}">
            <div class="product-visual">
                <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.imageAlt)}" width="720" height="900" ${index > 0 ? 'loading="lazy"' : ""}>
                <span class="product-number">${escapeHtml(product.collection)}</span>
            </div>
            <div class="product-info">
                <div class="product-title-row">
                    <h3>${escapeHtml(product.name)}</h3>
                    <span class="product-price">${escapeHtml(displayPrice(product.price))}${product.price == null ? "" : " CLP"}</span>
                </div>
                <p class="product-detail">${escapeHtml(product.description)}</p>
                <div class="card-meta">
                    <span class="card-category">${escapeHtml(product.categoryLabel)}</span>
                    <button class="card-details-button" type="button" data-open-product="${escapeHtml(product.id)}">Ver ficha y medidas ↗</button>
                </div>
            </div>
        </article>`;
}

function renderCatalog() {
    const visibleProducts = PRODUCTS.filter((product) => productMatches(product, productSearch.value));

    productGrid.innerHTML = visibleProducts.map(renderProductCard).join("");
    resultsCount.textContent = `${visibleProducts.length} ${visibleProducts.length === 1 ? "prenda" : "prendas"}`;
    emptyState.hidden = visibleProducts.length !== 0;
}

function buildQuantityOptions(product) {
    if (product.offers.length) {
        return product.offers.map((offer) => ({
            quantity: offer.quantity,
            label: `${offer.label} · ${formatPrice(offer.total)}`,
            total: offer.total,
        }));
    }

    return Array.from({ length: 10 }, (_, index) => {
        const quantity = index + 1;
        return {
            quantity,
            label: `${quantity} ${quantity === 1 ? "unidad" : "unidades"} · ${displayPrice(product.price == null ? null : product.price * quantity)}`,
            total: product.price == null ? "" : product.price * quantity,
        };
    });
}

function renderProductModal(product) {
    activeProduct = product;
    selectedComponents = (product.components || []).map((component) => ({
        name: component.name,
        size: component.sizes[0],
        color: component.colors[0].name,
    }));
    modalImage.src = product.image;
    modalImage.alt = product.imageAlt;
    modalTitle.textContent = product.name;
    modalCategory.textContent = product.categoryLabel;
    modalDescription.textContent = product.description;
    modalPrice.textContent = product.price == null ? "Consultar precio" : `${formatPrice(product.price)} CLP`;

    const offers = product.offers.length
        ? product.offers
        : product.price == null
            ? []
            : [{ quantity: 1, total: product.price, label: "1 unidad" }];
    modalPacks.innerHTML = offers.length ? offers.map((offer) => `
        <div class="modal-pack">
            <span>${escapeHtml(offer.label)}</span>
            <strong>${escapeHtml(formatPrice(offer.total))}</strong>
        </div>`).join("") : '<p class="modal-empty-note">Sin ofertas informadas.</p>';

    const hasComponents = Boolean(product.components?.length);
    standardColorsSection.hidden = hasComponents;
    standardSizeField.hidden = hasComponents;
    standardColorField.hidden = hasComponents;
    componentPicker.hidden = !hasComponents;
    componentPicker.innerHTML = hasComponents
        ? product.components.map((component, componentIndex) => `
            <fieldset class="component-choice">
                <legend>${escapeHtml(component.name)} · Talla</legend>
                <div class="size-options">
                    ${component.sizes.map((size, sizeIndex) => `
                        <button class="size-chip${sizeIndex === 0 ? " is-selected" : ""}" type="button" data-component-size="${componentIndex}" data-size="${escapeHtml(size)}" aria-pressed="${sizeIndex === 0}" aria-label="${escapeHtml(component.name)} talla ${escapeHtml(size)}">${escapeHtml(size)}</button>`
                    ).join("")}
                </div>
                <span class="component-color-label">${escapeHtml(component.name)} · Color (confirmar stock)</span>
                <div class="color-options">
                    ${component.colors.map((color, colorIndex) => `
                        <button class="color-chip${colorIndex === 0 ? " is-selected" : ""}" type="button" data-component-color="${componentIndex}" data-color-index="${colorIndex}" aria-pressed="${colorIndex === 0}" aria-label="${escapeHtml(component.name)}: seleccionar color ${escapeHtml(color.name)}">
                            <span class="color-swatch" style="--swatch-color: ${escapeHtml(color.hex)}" aria-hidden="true"></span>
                            ${escapeHtml(color.name)}
                        </button>`
                    ).join("")}
                </div>
            </fieldset>`).join("")
        : "";

    modalSizes.innerHTML = product.sizes.map((size) => `
        <tr><th scope="row">${escapeHtml(size.label || size.size)}</th><td>${size.width == null ? "Consultar" : `${escapeHtml(size.width)} cm`}</td><td>${size.length == null ? "Consultar" : `${escapeHtml(size.length)} cm`}</td></tr>`).join("");

    selectedSize = product.sizes[0]?.label || product.sizes[0]?.size || "";
    modalSizeOptions.innerHTML = product.sizes.map((size, index) => `
        <button class="size-chip${index === 0 ? " is-selected" : ""}" type="button" data-size="${escapeHtml(size.label || size.size)}" aria-pressed="${index === 0}" aria-label="Seleccionar talla ${escapeHtml(size.label || size.size)}">${escapeHtml(size.label || size.size)}</button>`
    ).join("");
    orderColor.innerHTML = product.colors.map((color) =>
        `<option value="${escapeHtml(color.name)}">${escapeHtml(color.name)}</option>`
    ).join("");
    orderQuantity.innerHTML = buildQuantityOptions(product).map((option) =>
        `<option value="${option.quantity}" data-total="${option.total}">${escapeHtml(option.label)}</option>`
    ).join("");

    updateWhatsAppLink();
    if (!modal.open) modal.showModal();
}

function updateWhatsAppLink() {
    if (!activeProduct) return;
    const selectedOption = orderQuantity.selectedOptions[0];
    const quantity = Number(orderQuantity.value);
    const total = selectedOption?.dataset.total
        ? formatPrice(Number(selectedOption.dataset.total))
        : "A confirmar";
    const selectionLines = activeProduct.components?.length
        ? selectedComponents.map((component) =>
            `${component.name}: talla ${component.size}, color ${component.color}`
        )
        : [`Talla: ${selectedSize}`, `Color: ${orderColor.value}`];
    const message = [
        "Hola, quiero consultar/pedir esta prenda de IMPORIO.STOREE:",
        `Prenda: ${activeProduct.name}`,
        ...selectionLines,
        `Cantidad: ${quantity}`,
        `Precio referencial: ${total}${total === "A confirmar" ? "" : " CLP"}`,
        "¿Me confirman disponibilidad y medidas?",
    ].join("\n");

    modalOrder.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

modalSizeOptions.addEventListener("click", (event) => {
    const sizeButton = event.target.closest("[data-size]");
    if (!sizeButton) return;
    selectedSize = sizeButton.dataset.size;
    modalSizeOptions.querySelectorAll(".size-chip").forEach((button) => {
        const selected = button === sizeButton;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
    updateWhatsAppLink();
});

componentPicker.addEventListener("click", (event) => {
    const sizeButton = event.target.closest("[data-component-size]");
    const colorButton = event.target.closest("[data-component-color]");
    const selectedButton = sizeButton || colorButton;
    if (!selectedButton) return;

    const componentIndex = Number(selectedButton.dataset.componentSize ?? selectedButton.dataset.componentColor);
    const component = selectedComponents[componentIndex];
    if (!component) return;

    if (sizeButton) {
        component.size = sizeButton.dataset.size;
        componentPicker.querySelectorAll(`[data-component-size="${componentIndex}"]`).forEach((button) => {
            const selected = button === sizeButton;
            button.classList.toggle("is-selected", selected);
            button.setAttribute("aria-pressed", String(selected));
        });
    } else {
        const colorIndex = Number(colorButton.dataset.colorIndex);
        component.color = activeProduct.components[componentIndex].colors[colorIndex].name;
        componentPicker.querySelectorAll(`[data-component-color="${componentIndex}"]`).forEach((button) => {
            const selected = button === colorButton;
            button.classList.toggle("is-selected", selected);
            button.setAttribute("aria-pressed", String(selected));
        });
    }
    updateWhatsAppLink();
});

function syncColorSelection() {
    const selectedIndex = orderColor.selectedIndex;
    modalColors.querySelectorAll(".color-chip").forEach((button, index) => {
        const selected = index === selectedIndex;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.category;
        filterButtons.forEach((item) => {
            const selected = item === button;
            item.classList.toggle("is-active", selected);
            item.setAttribute("aria-pressed", String(selected));
        });
        renderCatalog();
    });
});

productSearch.addEventListener("input", renderCatalog);

productGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-product-id]");
    if (!card) return;
    const product = PRODUCTS.find((item) => item.id === card.dataset.productId);
    if (product) renderProductModal(product);
});

productGrid.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key) || event.target !== event.currentTarget && event.target.closest("button")) return;
    const card = event.target.closest("[data-product-id]");
    if (!card) return;
    event.preventDefault();
    const product = PRODUCTS.find((item) => item.id === card.dataset.productId);
    if (product) renderProductModal(product);
});

modalColors.addEventListener("click", (event) => {
    const colorButton = event.target.closest("[data-color-index]");
    if (!colorButton || !activeProduct) return;

    const colorIndex = Number(colorButton.dataset.colorIndex);
    orderColor.selectedIndex = colorIndex;
    modalColors.querySelectorAll(".color-chip").forEach((button) => {
        const selected = button === colorButton;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
    updateWhatsAppLink();
});

[orderColor, orderQuantity].forEach((control) => {
    control.addEventListener("change", () => {
        if (control === orderColor) syncColorSelection();
        updateWhatsAppLink();
    });
});

closeModalButton.addEventListener("click", () => modal.close());
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.open) {
        event.preventDefault();
        modal.close();
    }
}, true);
modal.addEventListener("cancel", (event) => {
    event.preventDefault();
    modal.close();
});
modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
});

renderCatalog();
