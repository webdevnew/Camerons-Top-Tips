const targetDate = new Date("2025-06-18T00:00:00").getTime();
      body = document.querySelector("body"),
      photoToggle = document.querySelector(".photo-toggle"),
      iContainer = document.querySelector(".image-container"),
      toggleIcon = document.querySelector(".toggle"),
      modeToggle = document.querySelector(".mode-switch");
      tips = [
  "Train your cardio with interval sprints.",
  "Warm up properly before every session.",
  "Stretch daily to improve flexibility and prevent injury.",
  "Include strength training 2–3 times per week.",
  "Focus on core workouts for better balance and power.",
  "Stay hydrated throughout the day.",
  "Get 7–9 hours of quality sleep every night.",
  "Track your fitness progress with a journal or app.",
  "Practice agility drills using cones or ladders.",
  "Rest and recover — overtraining leads to burnout.",
  "Set short-term and long-term goals.",
  "Visualize success before games or training.",
  "Build confidence through repetition.",
  "Stay humble — always be open to learning.",
  "Study your mistakes and learn from them.",
  "Stay focused — avoid distractions before training.",
  "Accept criticism and turn it into motivation.",
  "Keep a growth mindset — never stop improving.",
  "Use setbacks as fuel for your next breakthrough.",
  "Stay consistent even when motivation dips.",
  "Practice weak foot passing and shooting daily.",
  "Dribble through cones to improve control.",
  "Work on first touch with wall passes.",
  "Master accurate long passes and through balls.",
  "Practice turning under pressure.",
  "Learn to shield the ball using your body.",
  "Improve crossing by hitting targets in training.",
  "Work on ball control using juggling drills.",
  "Watch pro players in your position and mimic them.",
  "Rehearse free kicks and penalty shots.",
  "Study different formations and how they work.",
  "Learn your role and responsibilities by position.",
  "Communicate constantly with teammates.",
  "Practice positioning without the ball.",
  "Understand when to press and when to hold shape.",
  "Work on timing your runs.",
  "Keep your head up to read the game early.",
  "Track back and support the defense when needed.",
  "Be coachable — understand and follow game plans.",
  "Play in different roles to expand your game IQ.",
  "Fuel your body with lean proteins and complex carbs.",
  "Avoid junk food and sugar crashes.",
  "Eat within 30 minutes after training.",
  "Supplement with vitamins if needed (consult a pro).",
  "Use foam rollers for recovery after workouts.",
  "Try cold plunges or contrast baths if sore.",
  "Avoid energy drinks before training.",
  "Limit screen time before bed for better sleep.",
  "Maintain a regular sleep schedule, even on weekends.",
  "Practice mindfulness or breathing exercises.",
  "Record your matches for self-review.",
  "Build a highlight reel to send to scouts or coaches.",
  "Attend open trials or showcase tournaments.",
  "Join a competitive team or academy.",
  "Network with other players, coaches, and agents.",
  "Keep your social media professional.",
  "Learn basic sports psychology principles.",
  "Take feedback seriously from qualified coaches.",
  "Volunteer to help younger teams (builds leadership).",
  "Stay informed on the business side of football.",
  "Be the hardest worker at every session.",
  "Show up early, leave late.",
  "Be a positive influence on and off the pitch.",
  "Take care of your boots and gear — be professional.",
  "Keep a daily journal to track mood, energy, and training.",
  "Never skip warm-ups or cool-downs.",
  "Embrace competition — it makes you better.",
  "Study famous football autobiographies.",
  "Take criticism as a compliment — it means people care.",
  "Always be ready — your opportunity could come at any moment."
];

function updateCountdown() {
	const now = new Date().getTime();
	const distance = targetDate - now;

	if (distance <= 0) {
		document.getElementById("days").innerText = "00";
		document.getElementById("hours").innerText = "00";
		document.getElementById("minutes").innerText = "00";
		document.getElementById("seconds").innerText = "00";
		return;
	}

	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("days").innerText = String(days).padStart(2, '0');
	document.getElementById("hours").innerText = String(hours).padStart(2, '0');
	document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
	document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

photoToggle.addEventListener("click", () => {
    iContainer.classList.toggle("close");
    toggleIcon.classList.toggle("bx-rotate-180");
});

if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark");
    modeToggle.classList.add("bxs-sun");
    modeToggle.classList.remove("bxs-moon");
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (document.body.classList.contains('dark')) {
        localStorage.setItem("dark-mode", "enabled");
        modeToggle.classList.add('bxs-sun');
        modeToggle.classList.remove('bxs-moon');
    } else {
        localStorage.setItem("dark-mode", "disabled");
        modeToggle.classList.add('bxs-moon');
        modeToggle.classList.remove('bxs-sun');
    }

});

document.getElementById("daily-tip").textContent =
  tips[Math.floor(Math.random() * tips.length)];


