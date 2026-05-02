// Workout Plan Database — Jeff Nippard Style
// Low volume, high intensity, compound-first, evidence-based
// Typically 2-3 hard sets per exercise, taken close to failure (RPE 8-10)
// ~10-20 sets per muscle group per week

const workoutDB = {
  // BEGINNER 3-DAY: Full Body
  beginner_3: {
    name: 'Full Body (3-Day)',
    description: 'Evidence-based full body program. 2-3 hard sets per exercise, each taken close to failure. Focus on progressive overload — add weight or reps each session.',
    days: [
      {
        name: 'Full Body A',
        label: 'Day 1 — Monday',
        exercises: [
          { name: 'Barbell Squat', sets: 3, reps: '6-8' },
          { name: 'Flat Barbell Bench Press', sets: 3, reps: '6-8' },
          { name: 'Barbell Row', sets: 3, reps: '8-10' },
          { name: 'Dumbbell Lateral Raise', sets: 2, reps: '12-15' },
          { name: 'Incline Dumbbell Curl', sets: 2, reps: '10-12' },
          { name: 'Overhead Tricep Extension', sets: 2, reps: '10-12' },
        ]
      },
      {
        name: 'Full Body B',
        label: 'Day 2 — Wednesday',
        exercises: [
          { name: 'Romanian Deadlift', sets: 3, reps: '8-10' },
          { name: 'Overhead Press', sets: 3, reps: '6-8' },
          { name: 'Lat Pulldown', sets: 3, reps: '8-10' },
          { name: 'Leg Press', sets: 2, reps: '10-12' },
          { name: 'Face Pulls', sets: 2, reps: '15-20' },
          { name: 'Hammer Curls', sets: 2, reps: '10-12' },
        ]
      },
      {
        name: 'Full Body C',
        label: 'Day 3 — Friday',
        exercises: [
          { name: 'Leg Press', sets: 3, reps: '8-10' },
          { name: 'Incline Dumbbell Press', sets: 3, reps: '8-10' },
          { name: 'Seated Cable Row', sets: 3, reps: '10-12' },
          { name: 'Leg Curl', sets: 2, reps: '10-12' },
          { name: 'Cable Lateral Raise', sets: 2, reps: '12-15' },
          { name: 'Tricep Pushdown', sets: 2, reps: '10-12' },
        ]
      }
    ]
  },

  // BEGINNER 4-DAY: Upper/Lower
  beginner_4: {
    name: 'Upper/Lower (4-Day)',
    description: 'Each muscle hit 2x/week. Compound-focused with minimal isolation. All sets taken 1-2 reps from failure. Track your weights and aim to beat last session.',
    days: [
      {
        name: 'Upper A (Strength)',
        label: 'Day 1 — Monday',
        exercises: [
          { name: 'Flat Barbell Bench Press', sets: 3, reps: '5-7' },
          { name: 'Barbell Row', sets: 3, reps: '6-8' },
          { name: 'Seated Dumbbell OHP', sets: 2, reps: '8-10' },
          { name: 'Lat Pulldown', sets: 2, reps: '8-10' },
          { name: 'Dumbbell Lateral Raise', sets: 2, reps: '12-15' },
          { name: 'Barbell Curl', sets: 2, reps: '8-10' },
          { name: 'Tricep Pushdown', sets: 2, reps: '10-12' },
        ]
      },
      {
        name: 'Lower A (Strength)',
        label: 'Day 2 — Tuesday',
        exercises: [
          { name: 'Barbell Back Squat', sets: 3, reps: '5-7' },
          { name: 'Romanian Deadlift', sets: 3, reps: '8-10' },
          { name: 'Leg Press', sets: 2, reps: '10-12' },
          { name: 'Leg Curl', sets: 2, reps: '10-12' },
          { name: 'Standing Calf Raises', sets: 3, reps: '10-15' },
        ]
      },
      {
        name: 'Upper B (Volume)',
        label: 'Day 3 — Thursday',
        exercises: [
          { name: 'Incline Dumbbell Press', sets: 3, reps: '8-10' },
          { name: 'Seated Cable Row', sets: 3, reps: '10-12' },
          { name: 'Overhead Press (Barbell)', sets: 2, reps: '8-10' },
          { name: 'Pull-ups or Assisted Pull-ups', sets: 2, reps: '6-10' },
          { name: 'Face Pulls', sets: 2, reps: '15-20' },
          { name: 'Incline Dumbbell Curl', sets: 2, reps: '10-12' },
          { name: 'Overhead Tricep Extension', sets: 2, reps: '10-12' },
        ]
      },
      {
        name: 'Lower B (Volume)',
        label: 'Day 4 — Friday',
        exercises: [
          { name: 'Conventional Deadlift', sets: 3, reps: '5-6' },
          { name: 'Bulgarian Split Squat', sets: 2, reps: '8-10/leg' },
          { name: 'Leg Extension', sets: 2, reps: '12-15' },
          { name: 'Seated Leg Curl', sets: 2, reps: '10-12' },
          { name: 'Seated Calf Raises', sets: 3, reps: '12-15' },
        ]
      }
    ]
  },

  // INTERMEDIATE 5-DAY: Upper/Lower/Push/Pull/Legs
  intermediate_5: {
    name: 'ULPPL (5-Day)',
    description: 'Jeff Nippard-style high frequency program. Low volume per session, high intensity. Every set should be within 1-2 reps of failure. Focus on progressive overload.',
    days: [
      {
        name: 'Upper Body',
        label: 'Day 1 — Monday',
        exercises: [
          { name: 'Flat Barbell Bench Press', sets: 3, reps: '5-7' },
          { name: 'Weighted Pull-ups', sets: 3, reps: '6-8' },
          { name: 'Seated Dumbbell OHP', sets: 2, reps: '8-10' },
          { name: 'Cable Row', sets: 2, reps: '10-12' },
          { name: 'Dumbbell Lateral Raise', sets: 2, reps: '12-15' },
          { name: 'Barbell Curl', sets: 2, reps: '8-10' },
          { name: 'Skull Crushers', sets: 2, reps: '8-10' },
        ]
      },
      {
        name: 'Lower Body',
        label: 'Day 2 — Tuesday',
        exercises: [
          { name: 'Barbell Back Squat', sets: 3, reps: '5-7' },
          { name: 'Romanian Deadlift', sets: 3, reps: '8-10' },
          { name: 'Leg Press', sets: 2, reps: '10-12' },
          { name: 'Leg Curl', sets: 2, reps: '10-12' },
          { name: 'Standing Calf Raises', sets: 3, reps: '10-15' },
        ]
      },
      {
        name: 'Push',
        label: 'Day 3 — Thursday',
        exercises: [
          { name: 'Incline Barbell Press', sets: 3, reps: '6-8' },
          { name: 'Flat Dumbbell Press', sets: 2, reps: '8-10' },
          { name: 'Cable Lateral Raise', sets: 3, reps: '12-15' },
          { name: 'Pec Deck Flyes', sets: 2, reps: '12-15' },
          { name: 'Tricep Pushdown', sets: 2, reps: '10-12' },
          { name: 'Overhead Tricep Extension', sets: 2, reps: '10-12' },
        ]
      },
      {
        name: 'Pull',
        label: 'Day 4 — Friday',
        exercises: [
          { name: 'Conventional Deadlift', sets: 2, reps: '5' },
          { name: 'Weighted Pull-ups', sets: 3, reps: '6-8' },
          { name: 'Seated Cable Row', sets: 2, reps: '10-12' },
          { name: 'Face Pulls', sets: 2, reps: '15-20' },
          { name: 'Barbell Curl', sets: 2, reps: '8-10' },
          { name: 'Hammer Curls', sets: 2, reps: '10-12' },
        ]
      },
      {
        name: 'Legs',
        label: 'Day 5 — Saturday',
        exercises: [
          { name: 'Front Squat', sets: 3, reps: '6-8' },
          { name: 'Bulgarian Split Squat', sets: 2, reps: '8-10/leg' },
          { name: 'Leg Extension', sets: 2, reps: '12-15' },
          { name: 'Leg Curl', sets: 2, reps: '10-12' },
          { name: 'Seated Calf Raises', sets: 3, reps: '12-15' },
        ]
      }
    ]
  },

  // INTERMEDIATE 6-DAY: PPL x2 (Nippard style)
  intermediate_6: {
    name: 'Push/Pull/Legs x2 (6-Day)',
    description: 'Classic PPL ran twice a week. Jeff Nippard-style: 2-3 hard sets per exercise, compound-first, every set close to failure. Lower volume, higher effort.',
    days: [
      {
        name: 'Push A',
        label: 'Day 1 — Monday',
        exercises: [
          { name: 'Flat Barbell Bench Press', sets: 3, reps: '5-7' },
          { name: 'Seated Dumbbell OHP', sets: 3, reps: '8-10' },
          { name: 'Incline Dumbbell Press', sets: 2, reps: '8-10' },
          { name: 'Cable Lateral Raise', sets: 3, reps: '12-15' },
          { name: 'Tricep Pushdown', sets: 2, reps: '10-12' },
          { name: 'Overhead Tricep Extension', sets: 2, reps: '10-12' },
        ]
      },
      {
        name: 'Pull A',
        label: 'Day 2 — Tuesday',
        exercises: [
          { name: 'Conventional Deadlift', sets: 2, reps: '5' },
          { name: 'Weighted Pull-ups', sets: 3, reps: '6-8' },
          { name: 'Barbell Row', sets: 3, reps: '8-10' },
          { name: 'Face Pulls', sets: 2, reps: '15-20' },
          { name: 'Barbell Curl', sets: 2, reps: '8-10' },
          { name: 'Hammer Curls', sets: 2, reps: '10-12' },
        ]
      },
      {
        name: 'Legs A',
        label: 'Day 3 — Wednesday',
        exercises: [
          { name: 'Barbell Back Squat', sets: 3, reps: '5-7' },
          { name: 'Romanian Deadlift', sets: 3, reps: '8-10' },
          { name: 'Leg Press', sets: 2, reps: '10-12' },
          { name: 'Leg Curl', sets: 2, reps: '10-12' },
          { name: 'Standing Calf Raises', sets: 3, reps: '10-15' },
        ]
      },
      {
        name: 'Push B',
        label: 'Day 4 — Thursday',
        exercises: [
          { name: 'Incline Barbell Press', sets: 3, reps: '6-8' },
          { name: 'Flat Dumbbell Press', sets: 2, reps: '8-10' },
          { name: 'Dumbbell Lateral Raise', sets: 3, reps: '12-15' },
          { name: 'Pec Deck Flyes', sets: 2, reps: '12-15' },
          { name: 'Rope Tricep Pushdown', sets: 2, reps: '12-15' },
        ]
      },
      {
        name: 'Pull B',
        label: 'Day 5 — Friday',
        exercises: [
          { name: 'Lat Pulldown', sets: 3, reps: '8-10' },
          { name: 'Seated Cable Row', sets: 3, reps: '10-12' },
          { name: 'Dumbbell Shrugs', sets: 2, reps: '12-15' },
          { name: 'Rear Delt Flyes', sets: 2, reps: '15-20' },
          { name: 'Incline Dumbbell Curl', sets: 2, reps: '10-12' },
          { name: 'Preacher Curl', sets: 2, reps: '10-12' },
        ]
      },
      {
        name: 'Legs B',
        label: 'Day 6 — Saturday',
        exercises: [
          { name: 'Front Squat', sets: 3, reps: '6-8' },
          { name: 'Bulgarian Split Squat', sets: 2, reps: '10-12/leg' },
          { name: 'Leg Extension', sets: 2, reps: '12-15' },
          { name: 'Seated Leg Curl', sets: 2, reps: '12-15' },
          { name: 'Seated Calf Raises', sets: 3, reps: '12-15' },
        ]
      }
    ]
  }
};

function getWorkoutPlan(level, days) {
  const key = level + '_' + days;
  if (workoutDB[key]) return workoutDB[key];

  if (level === 'beginner') {
    return days <= 3 ? workoutDB.beginner_3 : workoutDB.beginner_4;
  }
  if (level === 'intermediate') {
    if (days <= 3) return workoutDB.beginner_3;
    if (days <= 4) return workoutDB.beginner_4;
    if (days <= 5) return workoutDB.intermediate_5;
    return workoutDB.intermediate_6;
  }
  // advanced
  if (days <= 4) return workoutDB.beginner_4;
  if (days <= 5) return workoutDB.intermediate_5;
  return workoutDB.intermediate_6;
}
