const formValues = document.getElementById("color-form");

formValues.addEventListener("submit", function (e) {
  e.preventDefault();
  const seedColor = document.getElementById("color-pick").value;
  const modeColor = document.getElementById("colors").value;
  const hexValues = [];

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedColor.substring(
      1
    )}&mode=${modeColor}`
  )
    .then((res) => res.json())
    .then((data) => {
      data.colors.map((clr) => hexValues.push(clr.hex.value));
      console.log(hexValues);
      document.getElementById("show-colors").innerHTML = `
                    <div class="clr-1">
                        <p style="background-color:${hexValues[0]};" class="clr"></p>
                        <p style="background-color:${hexValues[1]};" class="clr"></p>
                        <p style="background-color:${hexValues[2]};" class="clr"></p>
                        <p style="background-color:${hexValues[3]};" class="clr"></p>
                        <p style="background-color:${hexValues[4]};" class="clr"></p>
                    </div>
                    <div class="clr-2">
                        <p>${hexValues[0]}</p>
                        <p>${hexValues[1]}</p>
                        <p>${hexValues[2]}</p>
                        <p>${hexValues[3]}</p>
                        <p>${hexValues[4]}</p>
                    </div>
            `;
    });
});
/* console.log(data.colors[0].hex.value) */
