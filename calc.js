document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("vpa-form");
    const albuminInput = document.getElementById("albumin");
    const totalVpaInput = document.getElementById("totalvpa");
    const resultParagraph = document.getElementById("result");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const albumin = parseFloat(albuminInput.value);
        const totalVPA = parseFloat(totalVpaInput.value);

        // Validation
        if (isNaN(albumin) || isNaN(totalVPA) || albumin <= 0 || totalVPA <= 0) {
            alert("Please enter valid positive numbers for both Albumin and Total VPA.");
            return;
        }

        // Formula from the paper:
        // Adjusted Free VPA = Total VPA / (1 + (4.16 * Albumin / 100))
        const freeVPA = totalVPA / (1 + (4.16 * albumin / 100));
        const freeVPARounded = freeVPA.toFixed(2);

        // Show result with color-coded feedback
        let feedback = "";
        if (freeVPA < 5) {
            feedback = `Low (below therapeutic range).`;
            resultParagraph.style.color = "blue";
        } else if (freeVPA >= 5 && freeVPA <= 15) {
            feedback = `Therapeutic range.`;
            resultParagraph.style.color = "green";
        } else {
            feedback = `High (above therapeutic range). Monitor for toxicity.`;
            resultParagraph.style.color = "red";
        }

        resultParagraph.innerHTML = `Estimated Free VPA: <strong>${freeVPARounded} mg/L</strong><br><em>${feedback}</em>`;
    });
});

