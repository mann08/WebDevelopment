// Function signature as per requirements
function calculateGrossSalary(basic) {
    const hra = basic * 0.20; // HRA is 20%
    const da = basic * 0.50;  // DA is 50%
    const gross = basic + hra + da;
    
    return {
        basic: basic,
        hra: hra,
        da: da,
        gross: gross
    };
}

// Currency Formatter
const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(num);
};

document.getElementById('calcBtn').addEventListener('click', function() {
    const basicInput = document.getElementById('basicInput');
    const basicValue = parseFloat(basicInput.value);
    const errorMsg = document.getElementById('errorMsg');
    const spinner = document.getElementById('spinner');
    const resultArea = document.getElementById('resultArea');

    // Validation
    if (isNaN(basicValue) || basicValue < 0) {
        errorMsg.style.display = 'block';
        basicInput.classList.add('is-invalid');
        resultArea.style.display = 'none';
        return;
    }

    // Reset UI for loading
    errorMsg.style.display = 'none';
    basicInput.classList.remove('is-invalid');
    this.disabled = true;
    spinner.classList.remove('d-none');

    // Simulate 0.5s Loading (as per task)
    setTimeout(() => {
        const data = calculateGrossSalary(basicValue);

        // Update Results
        document.getElementById('resBasic').innerText = formatCurrency(data.basic);
        document.getElementById('resHRA').innerText = formatCurrency(data.hra);
        document.getElementById('resDA').innerText = formatCurrency(data.da);
        document.getElementById('resGross').innerText = formatCurrency(data.gross);

        // Show UI
        resultArea.style.display = 'block';
        this.disabled = false;
        spinner.classList.add('d-none');
    }, 500);
});

// Reset Button
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('basicInput').value = '';
    document.getElementById('resultArea').style.display = 'none';
    document.getElementById('errorMsg').style.display = 'none';
    document.getElementById('basicInput').classList.remove('is-invalid');
});