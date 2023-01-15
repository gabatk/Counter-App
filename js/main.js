const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.image-section__btn');
const imageSection = document.querySelector('.image-section');
const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');
const eventImage = document.querySelector('#event-image');
const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');
const saveBtn = document.querySelector('.save ');
const eventSpan = document.querySelector('.event ');

let usersTime;

const handleSettings = () => {
	settings.classList.toggle('active');
};

const setTime = () => {
	const currentTime = new Date();
	const result = usersTime - currentTime;

	const days = Math.floor(result / 1000 / 60 / 60 / 24);
	const hours = Math.floor(result / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(result / 1000 / 60) % 60;
	const seconds = Math.floor(result / 1000) % 60;

	daysCount.textContent = days;
	hoursCount.textContent = hours;
	minutesCount.textContent = minutes;
	secondsCount.textContent = seconds;
};

const updateApp = () => {
	eventSpan.textContent = eventName.value;
	if (eventImage.value != 'default.jpg') {
		imageSection.style.backgroundImage = `url('${eventImage.value}')`;
	}
	usersTime = new Date(
		`${eventMonth.value} ${eventDay.value} ${eventYear.value}`
	);
	setTime();
};

updateApp();
setInterval(setTime, 1000);

settingsBtn.addEventListener('click', handleSettings);
saveBtn.addEventListener('click', updateApp);
