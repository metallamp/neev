// TDEE & Macro Calculator — Mifflin-St Jeor Equation

function calculateBMR(weight, height, age, gender) {
  // Mifflin-St Jeor
  if (gender === 'male') {
    return (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    return (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }
}

function getActivityMultiplier(activity) {
  const multipliers = {
    'sedentary': 1.2,
    'light': 1.375,
    'moderate': 1.55,
    'very_active': 1.725
  };
  return multipliers[activity] || 1.3;
}

function calculateTDEE(weight, height, age, gender, activity) {
  const bmr = calculateBMR(weight, height, age, gender);
  return Math.round(bmr * getActivityMultiplier(activity));
}

function calculateTargetCalories(tdee, goal) {
  switch (goal) {
    case 'fat_loss': return Math.round(tdee * 0.8); // 20% deficit
    case 'muscle_gain': return Math.round(tdee * 1.15); // 15% surplus
    case 'recomp': return Math.round(tdee * 0.95); // slight deficit
    case 'maintain': return tdee;
    default: return tdee;
  }
}

function calculateMacros(targetCalories, weight, goal) {
  let proteinMultiplier, fatPercent;

  switch (goal) {
    case 'fat_loss':
      proteinMultiplier = 2.2;
      fatPercent = 0.25;
      break;
    case 'muscle_gain':
      proteinMultiplier = 2.0;
      fatPercent = 0.25;
      break;
    case 'recomp':
      proteinMultiplier = 2.2;
      fatPercent = 0.25;
      break;
    default:
      proteinMultiplier = 1.8;
      fatPercent = 0.3;
  }

  const proteinGrams = Math.round(weight * proteinMultiplier);
  const proteinCalories = proteinGrams * 4;
  const fatCalories = Math.round(targetCalories * fatPercent);
  const fatGrams = Math.round(fatCalories / 9);
  const rawCarbCalories = targetCalories - proteinCalories - fatCalories;
  const carbCalories = Math.max(rawCarbCalories, 200);
  const carbGrams = Math.max(Math.round(carbCalories / 4), 50);

  // Use actual total as denominator so percentages always sum to 100%
  const totalCalories = proteinCalories + fatCalories + carbCalories;
  const proteinPct = Math.round((proteinCalories / totalCalories) * 100);
  const carbsPct = Math.round((carbCalories / totalCalories) * 100);
  const fatPct = 100 - proteinPct - carbsPct;

  return {
    protein: { grams: proteinGrams, calories: proteinCalories, percent: proteinPct },
    carbs: { grams: carbGrams, calories: carbCalories, percent: carbsPct },
    fat: { grams: fatGrams, calories: fatCalories, percent: fatPct }
  };
}

function getGoalLabel(goal) {
  const labels = { 'fat_loss': 'Fat Loss', 'muscle_gain': 'Muscle Gain', 'recomp': 'Body Recomposition', 'maintain': 'Maintenance' };
  return labels[goal] || goal;
}

function getLevelLabel(level) {
  const labels = { 'beginner': 'Beginner', 'intermediate': 'Intermediate', 'advanced': 'Advanced' };
  return labels[level] || level;
}
