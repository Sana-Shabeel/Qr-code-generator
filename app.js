"use strict";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const qrContainer = document.querySelector(".qr-code-container");
const img = document.createElement("img");

btn.addEventListener("click", () => {
  const inputValue = input.value;
  img.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=
    ${inputValue}`;
  qrContainer.appendChild(img);
});
