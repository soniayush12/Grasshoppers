document.addEventListener('DOMContentLoaded', function() {
    const timelineContainer = document.querySelector('.custom-timeline');

    timelineData.forEach(item => {
        const eventItem = document.createElement('li');
        eventItem.classList.add('custom-event');
        eventItem.setAttribute('data-date', item.date);

        const eventTitle = document.createElement('h3');
        eventTitle.textContent = item.event;

        const eventDescription = document.createElement('p');
        eventDescription.innerHTML = item.description;

        eventItem.appendChild(eventTitle);
        eventItem.appendChild(eventDescription);

        if (item.imgSrc) {
            const eventImage = document.createElement('img');
            eventImage.src = item.imgSrc;
            eventImage.alt = item.event;
            eventImage.classList.add('custom-timeline-img');
            eventItem.appendChild(eventImage);
        }

        timelineContainer.appendChild(eventItem);
    });
});
