// ===== DATA =====
const workoutsData = [
  {
    id: 1, name: "Upper Body Blast", emoji: "💪",
    type: "strength", tag: "tag-strength", tagLabel: "Strength",
    duration: 40, calories: 320, difficulty: "Intermediate",
    bg: "linear-gradient(135deg, #1a0a00, #2a1500)",
    desc: "Build serious upper body strength with this focused chest, back, and shoulder workout.",
    exercises: [
      { name: "Push Ups", detail: "4 sets × 15 reps" },
      { name: "Pull Ups", detail: "3 sets × 10 reps" },
      { name: "Dumbbell Shoulder Press", detail: "3 sets × 12 reps" },
      { name: "Tricep Dips", detail: "3 sets × 12 reps" },
      { name: "Bicep Curls", detail: "3 sets × 15 reps" },
      { name: "Bent Over Rows", detail: "3 sets × 12 reps" },
      { name: "Lateral Raises", detail: "3 sets × 15 reps" },
      { name: "Plank Hold", detail: "3 × 45 seconds" }
    ]
  },
  {
    id: 2, name: "HIIT Burn", emoji: "🔥",
    type: "cardio", tag: "tag-cardio", tagLabel: "Cardio",
    duration: 20, calories: 280, difficulty: "Advanced",
    bg: "linear-gradient(135deg, #1a1a00, #0a1500)",
    desc: "High-intensity interval training to torch calories and boost metabolism in just 20 minutes.",
    exercises: [
      { name: "Jumping Jacks", detail: "45 sec on / 15 sec rest" },
      { name: "Burpees", detail: "45 sec on / 15 sec rest" },
      { name: "High Knees", detail: "45 sec on / 15 sec rest" },
      { name: "Mountain Climbers", detail: "45 sec on / 15 sec rest" },
      { name: "Jump Squats", detail: "45 sec on / 15 sec rest" },
      { name: "Box Jumps", detail: "45 sec on / 15 sec rest" }
    ]
  },
  {
    id: 3, name: "Leg Day Power", emoji: "🦵",
    type: "strength", tag: "tag-strength", tagLabel: "Strength",
    duration: 45, calories: 380, difficulty: "Intermediate",
    bg: "linear-gradient(135deg, #100a1a, #1a0a2a)",
    desc: "Crush leg day with squats, lunges, and deadlifts for maximum lower body strength.",
    exercises: [
      { name: "Back Squats", detail: "4 sets × 12 reps" },
      { name: "Romanian Deadlift", detail: "3 sets × 10 reps" },
      { name: "Lunges", detail: "3 sets × 12 each leg" },
      { name: "Leg Press", detail: "3 sets × 15 reps" },
      { name: "Calf Raises", detail: "4 sets × 20 reps" },
      { name: "Leg Extensions", detail: "3 sets × 15 reps" },
      { name: "Hamstring Curls", detail: "3 sets × 15 reps" }
    ]
  },
  {
    id: 4, name: "Morning Yoga Flow", emoji: "🧘",
    type: "yoga", tag: "tag-yoga", tagLabel: "Yoga",
    duration: 30, calories: 120, difficulty: "Beginner",
    bg: "linear-gradient(135deg, #0a0a1a, #10001a)",
    desc: "Start your day with this energizing yoga flow to improve flexibility, balance, and mindfulness.",
    exercises: [
      { name: "Child's Pose", detail: "Hold 60 seconds" },
      { name: "Downward Dog", detail: "Hold 45 seconds" },
      { name: "Warrior I", detail: "Hold 30 sec each side" },
      { name: "Warrior II", detail: "Hold 30 sec each side" },
      { name: "Tree Pose", detail: "Hold 30 sec each side" },
      { name: "Cobra Pose", detail: "Hold 30 seconds" },
      { name: "Seated Forward Bend", detail: "Hold 60 seconds" },
      { name: "Savasana", detail: "5 minutes" }
    ]
  },
  {
    id: 5, name: "5K Runner Prep", emoji: "🏃",
    type: "cardio", tag: "tag-cardio", tagLabel: "Cardio",
    duration: 35, calories: 340, difficulty: "Beginner",
    bg: "linear-gradient(135deg, #001a0a, #00150a)",
    desc: "Progressive running workout to build your cardio base and prepare for a 5K run.",
    exercises: [
      { name: "Warm-up Walk", detail: "5 minutes" },
      { name: "Easy Jog", detail: "8 minutes" },
      { name: "Speed Intervals", detail: "6 × 1 min fast / 1 min slow" },
      { name: "Steady Run", detail: "10 minutes" },
      { name: "Cool Down Walk", detail: "5 minutes" },
      { name: "Stretching", detail: "5 minutes" }
    ]
  },
  {
    id: 6, name: "Core Crusher", emoji: "⚡",
    type: "strength", tag: "tag-strength", tagLabel: "Strength",
    duration: 25, calories: 200, difficulty: "Intermediate",
    bg: "linear-gradient(135deg, #1a0000, #0a0000)",
    desc: "Intense core workout to build a strong, defined midsection and improve posture.",
    exercises: [
      { name: "Plank", detail: "4 × 60 seconds" },
      { name: "Crunches", detail: "3 sets × 20 reps" },
      { name: "Leg Raises", detail: "3 sets × 15 reps" },
      { name: "Russian Twists", detail: "3 sets × 20 reps" },
      { name: "Bicycle Crunches", detail: "3 sets × 20 reps" },
      { name: "Dead Bug", detail: "3 sets × 10 reps" }
    ]
  }
];

const dietPlans = {
  weightloss: [
    { time: "Breakfast 7AM", name: "Protein Power Bowl", items: "2 boiled eggs, oats with almond milk, banana, black coffee", cal: "380 kcal" },
    { time: "Mid Morning 10AM", name: "Light Snack", items: "1 apple, 10 almonds, green tea", cal: "150 kcal" },
    { time: "Lunch 1PM", name: "Grilled Chicken Salad", items: "150g grilled chicken, mixed greens, cucumber, tomato, lemon dressing", cal: "420 kcal" },
    { time: "Evening 4PM", name: "Pre-Workout Snack", items: "1 banana, protein shake or curd", cal: "200 kcal" },
    { time: "Dinner 7PM", name: "Lean Protein & Veggies", items: "150g fish/paneer, 1 cup brown rice, steamed broccoli", cal: "480 kcal" }
  ],
  muscle: [
    { time: "Breakfast 7AM", name: "Muscle Builder Plate", items: "4 eggs scrambled, 2 slices whole wheat toast, 1 cup milk, 1 banana", cal: "620 kcal" },
    { time: "Mid Morning 10AM", name: "Mass Snack", items: "Peanut butter sandwich, 1 glass whole milk", cal: "380 kcal" },
    { time: "Lunch 1PM", name: "Rice & Protein Combo", items: "200g chicken/paneer, 2 cups rice, dal, mixed vegetables", cal: "720 kcal" },
    { time: "Pre-Workout 4PM", name: "Energy Boost", items: "Banana, 30g protein powder shake", cal: "280 kcal" },
    { time: "Dinner 7PM", name: "Protein Rich Dinner", items: "200g fish or chicken, 1 cup quinoa, salad, yogurt", cal: "580 kcal" },
    { time: "Before Bed 9PM", name: "Casein Snack", items: "1 cup Greek yogurt, handful of nuts", cal: "220 kcal" }
  ],
  maintain: [
    { time: "Breakfast 7AM", name: "Balanced Start", items: "2 eggs, 1 cup oats, fruits, tea or coffee", cal: "450 kcal" },
    { time: "Mid Morning 10AM", name: "Fruit Break", items: "Seasonal fruits, handful of nuts", cal: "180 kcal" },
    { time: "Lunch 1PM", name: "Complete Meal", items: "Dal, 1.5 cups rice, sabzi, curd, salad", cal: "550 kcal" },
    { time: "Evening 4PM", name: "Light Snack", items: "Poha or upma, green tea", cal: "200 kcal" },
    { time: "Dinner 7PM", name: "Light Dinner", items: "2 rotis, dal, sabzi, yogurt", cal: "480 kcal" }
  ]
};

// ===== STATE =====
let stats = JSON.parse(localStorage.getItem('fitstats')) || { workouts: 0, calories: 0, streak: 0, minutes: 0 };
let logEntries = JSON.parse(localStorage.getItem('fitlog')) || [];
let calConsumed = parseInt(localStorage.getItem('fitcal')) || 0;
let currentFilter = 'all';
let currentDietPlan = 'weightloss';
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let currentWorkout = null;
let activeWorkoutCalories = 0;
let activeWorkoutMinutes = 0;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  updateStats();
  renderWorkouts();
  renderDietPlan('weightloss');
  renderLog();
  updateCalDisplay();
  setupNavigation();
  setupFilters();
  setupDietTabs();
  setupModal();
  setupTimer();
});

// ===== NAVIGATION =====
function setupNavigation() {
  // All nav buttons (desktop + mobile + bottom + hero)
  document.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const page = btn.getAttribute('data-page');
      goToPage(page);
    });
  });

  // Hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });
}

function goToPage(pageName) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Show target page
  const target = document.getElementById('page-' + pageName);
  if (target) target.classList.add('active');

  // Update nav active states
  document.querySelectorAll('.nav-btn, .mob-btn, .bnav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-page') === pageName);
  });

  // Close mobile menu
  document.getElementById('mobileMenu').classList.remove('open');

  // Scroll top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== STATS =====
function updateStats() {
  document.getElementById('totalWorkouts').textContent = stats.workouts;
  document.getElementById('totalCalories').textContent = stats.calories;
  document.getElementById('currentStreak').textContent = stats.streak;
  document.getElementById('totalMinutes').textContent = stats.minutes;
}

function saveStats() {
  localStorage.setItem('fitstats', JSON.stringify(stats));
}

// ===== WORKOUTS =====
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderWorkouts();
    });
  });
}

function renderWorkouts() {
  const grid = document.getElementById('workoutGrid');
  const filtered = currentFilter === 'all'
    ? workoutsData
    : workoutsData.filter(w => w.type === currentFilter);

  grid.innerHTML = filtered.map(w => `
    <div class="workout-card" onclick="openWorkout(${w.id})">
      <div class="wc-banner" style="background:${w.bg}">${w.emoji}</div>
      <div class="wc-body">
        <div class="wc-tag ${w.tag}">${w.tagLabel}</div>
        <div class="wc-name">${w.name}</div>
        <div class="wc-meta">
          <span>⏱ ${w.duration} min</span>
          <span>📶 ${w.difficulty}</span>
        </div>
        <div class="wc-cal">🔥 ${w.calories} kcal</div>
      </div>
    </div>
  `).join('');
}

function openWorkout(id) {
  const w = workoutsData.find(x => x.id === id);
  if (!w) return;
  currentWorkout = w;
  activeWorkoutCalories = w.calories;
  activeWorkoutMinutes = w.duration;

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-emoji">${w.emoji}</div>
    <div class="modal-name">${w.name}</div>
    <div class="modal-tags">
      <span class="wc-tag ${w.tag}">${w.tagLabel}</span>
      <span class="wc-tag" style="background:rgba(255,255,255,0.05);color:var(--muted)">${w.difficulty}</span>
      <span class="wc-tag" style="background:rgba(255,255,255,0.05);color:var(--muted)">⏱ ${w.duration} min</span>
      <span class="wc-tag" style="background:rgba(255,255,255,0.05);color:var(--muted)">🔥 ${w.calories} kcal</span>
    </div>
    <div class="modal-desc">${w.desc}</div>
    <div class="exercise-list">
      ${w.exercises.map((ex, i) => `
        <div class="exercise-item">
          <div class="ex-num">${i + 1}</div>
          <div>
            <div class="ex-name">${ex.name}</div>
            <div class="ex-detail">${ex.detail}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  document.getElementById('workoutModal').classList.add('open');
}

function setupModal() {
  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('workoutModal').classList.remove('open');
  });
  document.getElementById('workoutModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('workoutModal')) {
      document.getElementById('workoutModal').classList.remove('open');
    }
  });
  document.getElementById('startWorkoutBtn').addEventListener('click', () => {
    document.getElementById('workoutModal').classList.remove('open');
    startTimer();
  });
}

// ===== TIMER =====
function setupTimer() {
  document.getElementById('timerPause').addEventListener('click', toggleTimer);
  document.getElementById('timerStop').addEventListener('click', stopTimer);
}

function startTimer() {
  timerSeconds = 0;
  timerRunning = true;
  document.getElementById('timerBar').classList.add('active');
  document.getElementById('timerWorkoutName').textContent = currentWorkout ? currentWorkout.name : 'Workout';
  document.getElementById('timerPause').textContent = '⏸';

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timerRunning) {
      timerSeconds++;
      updateTimerDisplay();
    }
  }, 1000);
}

function toggleTimer() {
  timerRunning = !timerRunning;
  document.getElementById('timerPause').textContent = timerRunning ? '⏸' : '▶';
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  document.getElementById('timerBar').classList.remove('active');

  // Update stats
  const minutesDone = Math.round(timerSeconds / 60);
  stats.workouts++;
  stats.calories += activeWorkoutCalories;
  stats.minutes += minutesDone;
  if (minutesDone > 5) stats.streak++;
  saveStats();
  updateStats();

  timerSeconds = 0;
  timerRunning = false;

  alert(`🎉 Workout Complete!\n+${activeWorkoutCalories} calories burned\n+${minutesDone} minutes tracked`);
}

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
  const secs = (timerSeconds % 60).toString().padStart(2, '0');
  document.getElementById('timerClock').textContent = `${mins}:${secs}`;
}

// ===== TRACKER =====
function logWorkout() {
  const exercise = document.getElementById('logExercise').value.trim();
  const sets = document.getElementById('logSets').value;
  const reps = document.getElementById('logReps').value;
  const duration = document.getElementById('logDuration').value;
  const calories = document.getElementById('logCalories').value;

  if (!exercise) { alert('Exercise name daalo!'); return; }

  const entry = {
    id: Date.now(),
    exercise,
    sets: sets || '-',
    reps: reps || '-',
    duration: duration || 0,
    calories: calories || 0,
    date: new Date().toLocaleDateString('en-IN')
  };

  logEntries.unshift(entry);
  localStorage.setItem('fitlog', JSON.stringify(logEntries));

  // Clear form
  document.getElementById('logExercise').value = '';
  document.getElementById('logSets').value = '';
  document.getElementById('logReps').value = '';
  document.getElementById('logDuration').value = '';
  document.getElementById('logCalories').value = '';

  renderLog();
}

function renderLog() {
  const container = document.getElementById('logHistory');
  if (logEntries.length === 0) {
    container.innerHTML = '<div class="empty-state">No workouts logged yet. Start tracking! 💪</div>';
    return;
  }
  container.innerHTML = logEntries.map(e => `
    <div class="log-entry">
      <div class="log-left">
        <div class="log-name">${e.exercise}</div>
        <div class="log-meta">
          ${e.sets !== '-' ? `Sets: ${e.sets} • Reps: ${e.reps} • ` : ''}
          Duration: ${e.duration} min • ${e.date}
        </div>
      </div>
      <div class="log-right">
        <div class="log-cal">${e.calories}</div>
        <div class="log-cal-label">kcal</div>
      </div>
      <button class="log-del" onclick="deleteLog(${e.id})">🗑</button>
    </div>
  `).join('');
}

function deleteLog(id) {
  logEntries = logEntries.filter(e => e.id !== id);
  localStorage.setItem('fitlog', JSON.stringify(logEntries));
  renderLog();
}

// ===== BMI CALCULATOR =====
function calculateBMI() {
  const height = parseFloat(document.getElementById('bmiHeight').value);
  const weight = parseFloat(document.getElementById('bmiWeight').value);
  const age = parseInt(document.getElementById('bmiAge').value);

  if (!height || !weight || height < 50 || weight < 10) {
    alert('Sahi height aur weight daalo!');
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  const rounded = Math.round(bmi * 10) / 10;

  let label, color, advice, markerPos;

  if (bmi < 18.5) {
    label = 'Underweight'; color = '#5b9cf6';
    markerPos = Math.min((bmi / 18.5) * 20, 20);
    advice = `Tumhara BMI ${rounded} hai jo underweight range mein hai. Calorie intake badhao, protein rich foods khao, aur strength training karo. Doctor se bhi consult karo.`;
  } else if (bmi < 25) {
    label = 'Normal Weight ✓'; color = '#00e676';
    markerPos = 20 + ((bmi - 18.5) / 6.5) * 30;
    advice = `Bahut badhiya! Tumhara BMI ${rounded} hai jo normal healthy range mein hai. Aise hi healthy diet aur regular exercise jari rakho!`;
  } else if (bmi < 30) {
    label = 'Overweight'; color = '#ffd600';
    markerPos = 50 + ((bmi - 25) / 5) * 25;
    advice = `Tumhara BMI ${rounded} hai jo thoda overweight hai. Daily 30 min cardio karo, sugar aur junk food kam karo, portions control karo.`;
  } else {
    label = 'Obese'; color = '#ff3b3b';
    markerPos = Math.min(75 + ((bmi - 30) / 10) * 20, 92);
    advice = `Tumhara BMI ${rounded} hai jo obese range mein hai. Please ek doctor ya nutritionist se consult karo. Daily walk se shuru karo aur diet improve karo.`;
  }

  document.getElementById('bmiValue').textContent = rounded;
  document.getElementById('bmiValue').style.color = color;
  document.getElementById('bmiLabel').textContent = label;
  document.getElementById('bmiLabel').style.color = color;
  document.getElementById('meterMarker').style.left = markerPos + '%';
  document.getElementById('bmiAdvice').textContent = advice;
  document.getElementById('bmiResult').style.display = 'block';
}

// ===== DIET =====
function setupDietTabs() {
  document.querySelectorAll('.diet-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.diet-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const plan = tab.getAttribute('data-plan');
      renderDietPlan(plan);
    });
  });
}

function renderDietPlan(plan) {
  const meals = dietPlans[plan];
  document.getElementById('dietPlanContent').innerHTML = meals.map(m => `
    <div class="meal-card">
      <div class="meal-time">${m.time}</div>
      <div class="meal-name">${m.name}</div>
      <div class="meal-items">${m.items}</div>
      <div class="meal-cal">🔥 ${m.cal}</div>
    </div>
  `).join('');
}

// ===== CALORIE TRACKER =====
function addCalories() {
  const val = parseInt(document.getElementById('calInput').value);
  if (!val || val <= 0) { alert('Valid calories daalo!'); return; }
  calConsumed += val;
  localStorage.setItem('fitcal', calConsumed);
  document.getElementById('calInput').value = '';
  updateCalDisplay();
}

function resetCalories() {
  calConsumed = 0;
  localStorage.setItem('fitcal', 0);
  updateCalDisplay();
}

function updateCalDisplay() {
  const goal = 2000;
  const pct = Math.min((calConsumed / goal) * 100, 100);
  document.getElementById('calDisplay').textContent = `${calConsumed} / ${goal} kcal`;
  document.getElementById('calBarFill').style.width = pct + '%';
  if (pct >= 100) {
    document.getElementById('calBarFill').style.background = 'var(--red)';
  } else {
    document.getElementById('calBarFill').style.background = 'linear-gradient(90deg, var(--accent), var(--accent2))';
  }
}
