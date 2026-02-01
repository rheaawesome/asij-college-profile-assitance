function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function selectChip(button, category) {
    // Deselect others in the same group
    const siblings = button.parentElement.querySelectorAll('.chip');
    siblings.forEach(s => s.classList.remove('active'));
    // Select clicked
    button.classList.add('active');
}

function startLoading() {
    // Scroll to loading area
    document.getElementById('form-section').classList.add('hidden');
    const loading = document.getElementById('loading-section');
    loading.classList.remove('hidden');
    loading.scrollIntoView({ behavior: 'smooth' });

    // Wait 3 seconds, then show results
    setTimeout(() => {
        loading.classList.add('hidden');
        const results = document.getElementById('results-section');
        results.classList.remove('hidden');
        results.scrollIntoView({ behavior: 'smooth' });
        
        // Example dynamic response
        document.getElementById('recommendations-list').innerHTML = `
            <div class="info-card" style="padding:20px;">
                <h3>Based on your profile:</h3>
                <p>We recommend looking into the <strong>ASIJ Innovation Lab</strong> and <strong>AP Capstone</strong> programs!</p>
            </div>
        `;
    }, 3000);
}
