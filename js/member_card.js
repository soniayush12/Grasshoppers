document.addEventListener('DOMContentLoaded', function() {

    function createCard(member) {
        return `
            <div class="wrapper">
                <div class="card">
                    <div class="front">
                        <img src="${member.image}" alt="${member.name}" style="width:100%; border-radius: 10px;">
                        <h2>${member.name}</h2>
                        <p><strong>${member.batch}</strong></p>
                        <p>${member.description}</p>
                    </div>
                    <div class="right">
                        <h2>${member.name}</h2>
                        <p>${member.characteristics}</p>
                        <div class="social-links">
                            <a href="${member.social.twitter}" target="_blank">Twitter</a>
                            <a href="${member.social.facebook}" target="_blank">Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    const container = document.getElementById('cards-container');
    members.forEach(member => {
        container.innerHTML += createCard(member);
    });
});
