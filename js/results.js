// Results page — reads survey data from localStorage and renders personalized plan

document.addEventListener('DOMContentLoaded', () => {
  const raw = localStorage.getItem('neev_survey');
  if (!raw) {
    window.location.href = 'survey.html';
    return;
  }

  const data = JSON.parse(raw);
  renderResults(data);
});

function renderResults(data) {
  // Name
  document.getElementById('userName').textContent = data.name || 'Champion';

  // Calculate numbers
  const tdee = calculateTDEE(data.weight, data.height, data.age, data.gender, data.activity);
  const targetCalories = calculateTargetCalories(tdee, data.goal);
  const macros = calculateMacros(targetCalories, data.weight, data.goal);

  // Stats cards
  document.getElementById('tdeeValue').innerHTML = tdee + ' <span class="stat-unit">kcal</span>';
  document.getElementById('targetValue').innerHTML = targetCalories + ' <span class="stat-unit">kcal</span>';
  document.getElementById('goalValue').textContent = getGoalLabel(data.goal);

  // Workout plan
  const workout = getWorkoutPlan(data.level, data.days);
  document.getElementById('splitValue').textContent = workout.name;

  // Macro bar — use fat.percent directly so segments always sum to 100%
  document.getElementById('macroBar').innerHTML = `
    <div class="protein" style="width:${macros.protein.percent}%"></div>
    <div class="carbs" style="width:${macros.carbs.percent}%"></div>
    <div class="fat" style="width:${macros.fat.percent}%"></div>
  `;

  // Macro legend
  document.getElementById('macroLegend').innerHTML = `
    <div class="macro-legend-item"><div class="dot" style="background:var(--green)"></div>Protein ${macros.protein.percent}%</div>
    <div class="macro-legend-item"><div class="dot" style="background:#f59e0b"></div>Carbs ${macros.carbs.percent}%</div>
    <div class="macro-legend-item"><div class="dot" style="background:#ef4444"></div>Fat ${macros.fat.percent}%</div>
  `;

  // Macro cards
  document.getElementById('macroCards').innerHTML = `
    <div class="card" style="text-align:center;padding:20px;">
      <div style="font-size:2rem;font-weight:800;color:var(--green);font-family:var(--font-heading);">${macros.protein.grams}g</div>
      <div style="font-size:0.85rem;color:var(--text-muted);margin-top:4px;">Protein</div>
      <div style="font-size:0.8rem;color:var(--text-dim);">${macros.protein.calories} kcal</div>
    </div>
    <div class="card" style="text-align:center;padding:20px;">
      <div style="font-size:2rem;font-weight:800;color:#f59e0b;font-family:var(--font-heading);">${macros.carbs.grams}g</div>
      <div style="font-size:0.85rem;color:var(--text-muted);margin-top:4px;">Carbs</div>
      <div style="font-size:0.8rem;color:var(--text-dim);">${macros.carbs.calories} kcal</div>
    </div>
    <div class="card" style="text-align:center;padding:20px;">
      <div style="font-size:2rem;font-weight:800;color:#ef4444;font-family:var(--font-heading);">${macros.fat.grams}g</div>
      <div style="font-size:0.85rem;color:var(--text-muted);margin-top:4px;">Fat</div>
      <div style="font-size:0.8rem;color:var(--text-dim);">${macros.fat.calories} kcal</div>
    </div>
  `;

  // Diet plan
  const mealPlan = generateMealPlan(targetCalories, macros, data.diet, data.cuisine, data.allergies);
  let mealHTML = '';
  mealPlan.forEach((day, i) => {
    mealHTML += `
      <div class="meal-day">
        <h3>${dayNames[i]}</h3>
        <table class="meal-table">
          <thead>
            <tr><th>Meal</th><th>Food</th><th>Cal</th><th>P</th><th>C</th><th>F</th></tr>
          </thead>
          <tbody>
            <tr><td>🌅 Breakfast</td><td>${day.breakfast.name}</td><td>${day.breakfast.calories}</td><td>${day.breakfast.protein}g</td><td>${day.breakfast.carbs}g</td><td>${day.breakfast.fat}g</td></tr>
            <tr><td>☀️ Lunch</td><td>${day.lunch.name}</td><td>${day.lunch.calories}</td><td>${day.lunch.protein}g</td><td>${day.lunch.carbs}g</td><td>${day.lunch.fat}g</td></tr>
            <tr><td>🍎 Snack</td><td>${day.snacks.name}</td><td>${day.snacks.calories}</td><td>${day.snacks.protein}g</td><td>${day.snacks.carbs}g</td><td>${day.snacks.fat}g</td></tr>
            <tr><td>🌙 Dinner</td><td>${day.dinner.name}</td><td>${day.dinner.calories}</td><td>${day.dinner.protein}g</td><td>${day.dinner.carbs}g</td><td>${day.dinner.fat}g</td></tr>
            <tr style="font-weight:600;border-top:2px solid var(--card-border);">
              <td></td><td>Daily Total</td><td>${day.totals.calories}</td><td>${day.totals.protein}g</td><td>${day.totals.carbs}g</td><td>${day.totals.fat}g</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
  });
  document.getElementById('mealPlanContainer').innerHTML = mealHTML;

  // Workout plan
  document.getElementById('workoutName').innerHTML = `<strong>${workout.name}</strong>`;
  document.getElementById('workoutDesc').textContent = workout.description;

  let workoutHTML = '';
  workout.days.forEach(day => {
    workoutHTML += `
      <div class="workout-day">
        <h3>${day.name}</h3>
        <div class="day-label">${day.label}</div>
        <div class="exercise-row header">
          <div>Exercise</div><div>Sets</div><div>Reps</div>
        </div>
    `;
    day.exercises.forEach(ex => {
      workoutHTML += `
        <div class="exercise-row">
          <div>${ex.name}</div><div>${ex.sets}</div><div>${ex.reps}</div>
        </div>
      `;
    });
    workoutHTML += '</div>';
  });
  document.getElementById('workoutContainer').innerHTML = workoutHTML;

  // Lifestyle tips
  const tips = [];
  if (data.sleep === 'less6') tips.push({ icon: '😴', title: 'Prioritize Sleep', text: 'You\'re sleeping under 6 hours. Aim for 7-8 hours — sleep is when your muscles actually grow and recover.' });
  else tips.push({ icon: '😴', title: 'Sleep is Great', text: 'You\'re getting good sleep. Keep it consistent — go to bed and wake up at the same time daily.' });

  if (data.water === 'less2') tips.push({ icon: '💧', title: 'Drink More Water', text: 'Aim for at least 3L daily. Dehydration kills performance, recovery, and can be confused with hunger.' });
  else tips.push({ icon: '💧', title: 'Hydration On Point', text: 'Good water intake! Keep a bottle with you at all times. Add electrolytes on heavy training days.' });

  tips.push({ icon: '📈', title: 'Progressive Overload', text: 'Increase weight or reps every 1-2 weeks. This is the #1 driver of muscle growth. Track your lifts.' });
  tips.push({ icon: '🔄', title: 'Consistency > Perfection', text: 'Missing one meal or workout won\'t ruin your progress. Missing a whole week will. Show up even on bad days.' });

  if (data.goal === 'fat_loss') tips.push({ icon: '⚖️', title: 'Track Your Food', text: 'Weigh your food for the first 2 weeks to calibrate portions. After that, you\'ll be able to eyeball it.' });
  if (data.goal === 'muscle_gain') tips.push({ icon: '🍽️', title: 'Eat Enough', text: 'If you\'re not gaining weight after 2 weeks, add 200 more calories. Muscle doesn\'t grow without fuel.' });

  document.getElementById('lifestyleTips').innerHTML = tips.map(t => `
    <div class="card" style="padding:20px;">
      <h3>${t.icon} ${t.title}</h3>
      <p style="font-size:0.9rem;margin-top:8px;">${t.text}</p>
    </div>
  `).join('');

}

function printPlan() {
  // Force all animated sections visible before printing so nothing renders blank
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  // Brief delay lets the browser repaint before the print dialog opens
  setTimeout(() => window.print(), 300);
}

function shareNeev() {
  const shareData = { title: 'Neev — Build Your Fitness Foundation', text: 'I just got my free personalized workout & diet plan from Neev! Check it out:', url: window.location.origin };
  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.origin).then(() => alert('Link copied to clipboard!')).catch(() => {});
  }
}
