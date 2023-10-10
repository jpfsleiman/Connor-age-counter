
document.addEventListener("DOMContentLoaded", function() {
    const birthDate = new Date('1998-03-08');
    const targetAgeDate = new Date(birthDate);
    targetAgeDate.setFullYear(birthDate.getFullYear() + 28);

    function updateCounters() {
        const now = new Date();
        const ageInMilliseconds = now - birthDate;
        const ageInSeconds = ageInMilliseconds / 1000;
        const ageInMinutes = ageInSeconds / 60;
        const ageInHours = ageInMinutes / 60;
        const ageInDays = ageInHours / 24;
        const ageInYears = ageInDays / 365.25;

        const timeUntil28Milliseconds = targetAgeDate - now;
        const timeUntil28Seconds = timeUntil28Milliseconds / 1000;
        const timeUntil28Minutes = timeUntil28Seconds / 60;
        const timeUntil28Hours = timeUntil28Minutes / 60;
        const timeUntil28Days = timeUntil28Hours / 24;
        const timeUntil28Years = timeUntil28Days / 365.25;

        document.getElementById('ageCounter').innerText = ageInYears.toFixed(10) + " years";
        document.getElementById('yearsUntil28').innerText = timeUntil28Years.toFixed(2) + " years";
        document.getElementById('daysUntil28').innerText = Math.floor(timeUntil28Days) + " days";
        document.getElementById('secondsUntil28').innerText = Math.floor(timeUntil28Seconds) + " seconds";
    }

    setInterval(updateCounters, 1000);
});
