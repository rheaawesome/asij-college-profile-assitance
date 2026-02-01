function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
    // In a real version, you'd trigger your recommendation logic here
    setTimeout(() => {
        alert("Recommendations Generated! (In a real app, you would see the results list now)");
        document.getElementById('loading').classList.add('hidden');
    }, 3000);
}
