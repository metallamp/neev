// Meal Plan Database & Generator

const mealDB = {
  indian: {
    vegetarian: {
      breakfast: [
        { name: 'Paneer Paratha + Curd', calories: 420, protein: 18, carbs: 45, fat: 18 },
        { name: 'Moong Dal Chilla + Chutney', calories: 300, protein: 20, carbs: 35, fat: 8 },
        { name: 'Poha with Peanuts + Banana', calories: 350, protein: 10, carbs: 55, fat: 10 },
        { name: 'Oats Upma + Milk', calories: 380, protein: 14, carbs: 52, fat: 12 },
        { name: 'Besan Chilla + Curd', calories: 320, protein: 16, carbs: 38, fat: 10 },
        { name: 'Idli (4) + Sambar + Coconut Chutney', calories: 340, protein: 12, carbs: 56, fat: 6 },
        { name: 'Masala Dosa + Chutney', calories: 400, protein: 10, carbs: 58, fat: 14 },
      ],
      lunch: [
        { name: 'Rajma + Rice + Salad', calories: 520, protein: 22, carbs: 72, fat: 14 },
        { name: 'Paneer Bhurji + 3 Roti + Raita', calories: 580, protein: 28, carbs: 55, fat: 24 },
        { name: 'Chole + 2 Roti + Curd', calories: 500, protein: 20, carbs: 62, fat: 16 },
        { name: 'Dal Tadka + Rice + Sabji', calories: 480, protein: 18, carbs: 68, fat: 12 },
        { name: 'Soya Chunk Curry + 3 Roti', calories: 540, protein: 32, carbs: 58, fat: 14 },
        { name: 'Palak Paneer + 2 Roti + Salad', calories: 500, protein: 24, carbs: 48, fat: 20 },
        { name: 'Kadhi Chawal + Aloo Sabji', calories: 460, protein: 14, carbs: 66, fat: 14 },
      ],
      snacks: [
        { name: 'Protein Shake (whey + banana + milk)', calories: 280, protein: 30, carbs: 30, fat: 6 },
        { name: 'Roasted Chana + Apple', calories: 220, protein: 12, carbs: 32, fat: 4 },
        { name: 'Greek Yogurt + Nuts', calories: 250, protein: 16, carbs: 18, fat: 12 },
        { name: 'Peanut Butter Toast (2 slices)', calories: 320, protein: 14, carbs: 30, fat: 16 },
        { name: 'Sprouts Chaat', calories: 200, protein: 14, carbs: 28, fat: 4 },
        { name: 'Makhana (Fox Nuts) + Green Tea', calories: 160, protein: 6, carbs: 22, fat: 4 },
        { name: 'Paneer Tikka (4 pcs)', calories: 280, protein: 20, carbs: 8, fat: 18 },
      ],
      dinner: [
        { name: 'Dal + 2 Roti + Sabji', calories: 440, protein: 18, carbs: 56, fat: 12 },
        { name: 'Paneer Tikka + Salad + 1 Roti', calories: 400, protein: 26, carbs: 30, fat: 18 },
        { name: 'Mixed Veg Curry + Rice', calories: 420, protein: 12, carbs: 62, fat: 12 },
        { name: 'Tofu Stir Fry + 2 Roti', calories: 380, protein: 22, carbs: 40, fat: 14 },
        { name: 'Moong Dal Khichdi + Curd', calories: 400, protein: 18, carbs: 58, fat: 8 },
        { name: 'Palak Dal + 2 Roti', calories: 380, protein: 16, carbs: 50, fat: 10 },
        { name: 'Stuffed Capsicum + Roti + Raita', calories: 360, protein: 14, carbs: 42, fat: 14 },
      ]
    },
    eggetarian: {
      breakfast: [
        { name: 'Egg Bhurji (3 eggs) + 2 Toast', calories: 400, protein: 24, carbs: 30, fat: 20 },
        { name: 'Boiled Eggs (4) + Banana + Toast', calories: 380, protein: 28, carbs: 35, fat: 14 },
        { name: 'Omelette (3 eggs) + Paratha', calories: 450, protein: 26, carbs: 35, fat: 22 },
        { name: 'Egg Dosa + Chutney', calories: 380, protein: 18, carbs: 42, fat: 14 },
        { name: 'Moong Dal Chilla + 2 Boiled Eggs', calories: 360, protein: 28, carbs: 30, fat: 12 },
        { name: 'French Toast (3 eggs) + Honey', calories: 420, protein: 22, carbs: 48, fat: 14 },
        { name: 'Poha + 2 Boiled Eggs', calories: 380, protein: 22, carbs: 45, fat: 10 },
      ],
      lunch: [
        { name: 'Egg Curry (3) + Rice + Salad', calories: 540, protein: 28, carbs: 62, fat: 18 },
        { name: 'Paneer Bhurji + 3 Roti + Raita', calories: 580, protein: 28, carbs: 55, fat: 24 },
        { name: 'Chole + 2 Roti + 2 Boiled Eggs', calories: 560, protein: 30, carbs: 56, fat: 20 },
        { name: 'Rajma Rice + Egg Salad', calories: 550, protein: 26, carbs: 68, fat: 16 },
        { name: 'Soya Chunk Curry + 3 Roti', calories: 540, protein: 32, carbs: 58, fat: 14 },
        { name: 'Dal Fry + Rice + Omelette', calories: 560, protein: 28, carbs: 66, fat: 16 },
        { name: 'Anda Biryani + Raita', calories: 580, protein: 26, carbs: 70, fat: 18 },
      ],
      snacks: [
        { name: 'Protein Shake + Boiled Egg', calories: 300, protein: 36, carbs: 24, fat: 8 },
        { name: 'Egg Sandwich (whole wheat)', calories: 320, protein: 20, carbs: 32, fat: 12 },
        { name: 'Greek Yogurt + Almonds', calories: 250, protein: 16, carbs: 18, fat: 12 },
        { name: 'Peanut Butter Toast + Banana', calories: 340, protein: 14, carbs: 38, fat: 16 },
        { name: 'Sprouts + Boiled Egg Chaat', calories: 240, protein: 20, carbs: 26, fat: 6 },
        { name: 'Egg White Omelette + Apple', calories: 180, protein: 18, carbs: 22, fat: 2 },
        { name: 'Roasted Chana + Banana', calories: 240, protein: 12, carbs: 38, fat: 4 },
      ],
      dinner: [
        { name: 'Egg Curry (2) + 2 Roti + Salad', calories: 440, protein: 22, carbs: 42, fat: 18 },
        { name: 'Paneer Tikka + 2 Boiled Eggs + Salad', calories: 420, protein: 34, carbs: 16, fat: 24 },
        { name: 'Dal + 2 Roti + Omelette', calories: 480, protein: 26, carbs: 50, fat: 16 },
        { name: 'Egg Fried Rice + Raita', calories: 460, protein: 22, carbs: 58, fat: 14 },
        { name: 'Moong Dal Khichdi + Egg Bhurji', calories: 460, protein: 28, carbs: 52, fat: 14 },
        { name: 'Stuffed Omelette + 2 Roti', calories: 420, protein: 26, carbs: 38, fat: 18 },
        { name: 'Palak Dal + Rice + Boiled Egg', calories: 440, protein: 22, carbs: 56, fat: 12 },
      ]
    },
    nonveg: {
      breakfast: [
        { name: 'Egg Bhurji (3 eggs) + 2 Toast', calories: 400, protein: 24, carbs: 30, fat: 20 },
        { name: 'Chicken Sandwich (grilled)', calories: 380, protein: 30, carbs: 32, fat: 12 },
        { name: 'Omelette (3 eggs) + Paratha', calories: 450, protein: 26, carbs: 35, fat: 22 },
        { name: 'Boiled Eggs (4) + Oats + Banana', calories: 420, protein: 30, carbs: 45, fat: 12 },
        { name: 'Chicken Keema Paratha + Curd', calories: 480, protein: 28, carbs: 40, fat: 22 },
        { name: 'Egg Dosa + Chicken Chutney', calories: 420, protein: 24, carbs: 40, fat: 16 },
        { name: 'Moong Dal Chilla + 3 Boiled Eggs', calories: 400, protein: 32, carbs: 30, fat: 14 },
      ],
      lunch: [
        { name: 'Chicken Curry + Rice + Salad', calories: 580, protein: 38, carbs: 58, fat: 18 },
        { name: 'Chicken Biryani + Raita', calories: 620, protein: 34, carbs: 72, fat: 18 },
        { name: 'Fish Curry + Rice + Dal', calories: 540, protein: 36, carbs: 56, fat: 14 },
        { name: 'Tandoori Chicken + 2 Roti + Salad', calories: 520, protein: 42, carbs: 38, fat: 18 },
        { name: 'Egg Curry (3) + Rice + Sabji', calories: 540, protein: 28, carbs: 62, fat: 18 },
        { name: 'Chicken Tikka + 3 Roti + Raita', calories: 560, protein: 40, carbs: 50, fat: 16 },
        { name: 'Mutton Curry + 2 Roti + Salad', calories: 580, protein: 36, carbs: 42, fat: 24 },
      ],
      snacks: [
        { name: 'Protein Shake (whey + banana)', calories: 280, protein: 30, carbs: 30, fat: 6 },
        { name: 'Grilled Chicken Wrap', calories: 340, protein: 28, carbs: 30, fat: 12 },
        { name: 'Boiled Eggs (3) + Apple', calories: 280, protein: 22, carbs: 20, fat: 12 },
        { name: 'Peanut Butter Toast + Banana', calories: 340, protein: 14, carbs: 38, fat: 16 },
        { name: 'Greek Yogurt + Almonds', calories: 250, protein: 16, carbs: 18, fat: 12 },
        { name: 'Chicken Tikka (5 pcs)', calories: 260, protein: 32, carbs: 4, fat: 12 },
        { name: 'Tuna Sandwich', calories: 300, protein: 26, carbs: 28, fat: 10 },
      ],
      dinner: [
        { name: 'Grilled Chicken + 2 Roti + Salad', calories: 480, protein: 40, carbs: 36, fat: 16 },
        { name: 'Fish Tikka + Rice + Raita', calories: 460, protein: 34, carbs: 48, fat: 12 },
        { name: 'Chicken Curry + 2 Roti', calories: 500, protein: 36, carbs: 42, fat: 18 },
        { name: 'Tandoori Fish + Salad + 1 Roti', calories: 380, protein: 36, carbs: 26, fat: 12 },
        { name: 'Egg Fried Rice + Chicken Soup', calories: 460, protein: 28, carbs: 52, fat: 14 },
        { name: 'Chicken Stir Fry + 2 Roti', calories: 440, protein: 34, carbs: 38, fat: 14 },
        { name: 'Mutton Keema + 2 Roti + Salad', calories: 520, protein: 34, carbs: 40, fat: 22 },
      ]
    }
  },
  international: {
    vegetarian: {
      breakfast: [
        { name: 'Overnight Oats + Berries + PB', calories: 400, protein: 16, carbs: 52, fat: 14 },
        { name: 'Avocado Toast + Banana Smoothie', calories: 420, protein: 12, carbs: 50, fat: 18 },
        { name: 'Granola + Greek Yogurt + Honey', calories: 380, protein: 16, carbs: 48, fat: 14 },
        { name: 'Veggie Smoothie Bowl', calories: 350, protein: 14, carbs: 52, fat: 10 },
        { name: 'Peanut Butter Banana Pancakes', calories: 440, protein: 18, carbs: 52, fat: 18 },
        { name: 'Tofu Scramble + Toast', calories: 360, protein: 20, carbs: 34, fat: 16 },
        { name: 'Protein Oatmeal + Almonds', calories: 400, protein: 24, carbs: 48, fat: 12 },
      ],
      lunch: [
        { name: 'Quinoa Buddha Bowl + Tahini', calories: 520, protein: 20, carbs: 62, fat: 20 },
        { name: 'Pasta Primavera + Side Salad', calories: 540, protein: 16, carbs: 72, fat: 18 },
        { name: 'Black Bean Burrito Bowl', calories: 500, protein: 22, carbs: 64, fat: 14 },
        { name: 'Veggie Stir Fry + Brown Rice', calories: 460, protein: 14, carbs: 66, fat: 14 },
        { name: 'Falafel Wrap + Hummus', calories: 520, protein: 18, carbs: 56, fat: 22 },
        { name: 'Lentil Soup + Whole Wheat Bread', calories: 420, protein: 22, carbs: 56, fat: 8 },
        { name: 'Greek Salad + Pita + Feta', calories: 440, protein: 16, carbs: 42, fat: 22 },
      ],
      snacks: [
        { name: 'Protein Shake + Banana', calories: 280, protein: 30, carbs: 30, fat: 6 },
        { name: 'Trail Mix (40g)', calories: 220, protein: 8, carbs: 22, fat: 14 },
        { name: 'Hummus + Carrot Sticks', calories: 180, protein: 8, carbs: 20, fat: 8 },
        { name: 'Apple + Almond Butter', calories: 240, protein: 6, carbs: 28, fat: 14 },
        { name: 'Protein Bar', calories: 250, protein: 20, carbs: 26, fat: 8 },
        { name: 'Cottage Cheese + Berries', calories: 200, protein: 18, carbs: 16, fat: 6 },
        { name: 'Rice Cakes + PB', calories: 220, protein: 8, carbs: 28, fat: 10 },
      ],
      dinner: [
        { name: 'Veggie Pasta + Parmesan', calories: 480, protein: 18, carbs: 62, fat: 16 },
        { name: 'Tofu Stir Fry + Noodles', calories: 440, protein: 22, carbs: 50, fat: 16 },
        { name: 'Mushroom Risotto + Salad', calories: 460, protein: 14, carbs: 60, fat: 16 },
        { name: 'Stuffed Bell Peppers + Quinoa', calories: 400, protein: 16, carbs: 52, fat: 12 },
        { name: 'Vegetable Curry + Coconut Rice', calories: 480, protein: 12, carbs: 64, fat: 18 },
        { name: 'Bean & Cheese Quesadilla + Salsa', calories: 440, protein: 20, carbs: 46, fat: 18 },
        { name: 'Lentil Bolognese + Spaghetti', calories: 460, protein: 22, carbs: 62, fat: 10 },
      ]
    },
    nonveg: {
      breakfast: [
        { name: 'Scrambled Eggs (3) + Avocado Toast', calories: 440, protein: 24, carbs: 30, fat: 26 },
        { name: 'Protein Oatmeal + Banana', calories: 400, protein: 28, carbs: 48, fat: 10 },
        { name: 'Greek Yogurt Parfait + Granola', calories: 380, protein: 20, carbs: 46, fat: 12 },
        { name: 'Egg & Turkey Wrap', calories: 400, protein: 30, carbs: 32, fat: 16 },
        { name: 'Smoked Salmon + Cream Cheese Bagel', calories: 420, protein: 24, carbs: 38, fat: 18 },
        { name: 'Protein Pancakes + Berries', calories: 380, protein: 26, carbs: 42, fat: 10 },
        { name: 'Chicken Sausage + Eggs + Toast', calories: 440, protein: 32, carbs: 28, fat: 20 },
      ],
      lunch: [
        { name: 'Grilled Chicken Salad + Quinoa', calories: 520, protein: 40, carbs: 42, fat: 16 },
        { name: 'Chicken Pasta (penne) + Veggies', calories: 560, protein: 36, carbs: 62, fat: 14 },
        { name: 'Turkey & Avocado Wrap', calories: 480, protein: 32, carbs: 38, fat: 20 },
        { name: 'Salmon Bowl + Brown Rice', calories: 540, protein: 36, carbs: 50, fat: 18 },
        { name: 'Chicken Burrito Bowl', calories: 560, protein: 38, carbs: 58, fat: 16 },
        { name: 'Tuna Salad Sandwich + Soup', calories: 480, protein: 32, carbs: 42, fat: 16 },
        { name: 'Steak + Sweet Potato + Veggies', calories: 580, protein: 42, carbs: 48, fat: 20 },
      ],
      snacks: [
        { name: 'Protein Shake + Banana', calories: 280, protein: 30, carbs: 30, fat: 6 },
        { name: 'Chicken Breast Strips + Hummus', calories: 260, protein: 30, carbs: 14, fat: 10 },
        { name: 'Greek Yogurt + Almonds', calories: 250, protein: 18, carbs: 16, fat: 12 },
        { name: 'Protein Bar', calories: 250, protein: 20, carbs: 26, fat: 8 },
        { name: 'Hard Boiled Eggs (3)', calories: 220, protein: 18, carbs: 2, fat: 15 },
        { name: 'Apple + Peanut Butter', calories: 240, protein: 6, carbs: 28, fat: 14 },
        { name: 'Tuna + Crackers', calories: 240, protein: 22, carbs: 20, fat: 8 },
      ],
      dinner: [
        { name: 'Grilled Salmon + Asparagus + Rice', calories: 500, protein: 38, carbs: 42, fat: 16 },
        { name: 'Chicken Stir Fry + Noodles', calories: 480, protein: 34, carbs: 48, fat: 14 },
        { name: 'Beef Tacos (3) + Salsa + Guac', calories: 520, protein: 32, carbs: 44, fat: 22 },
        { name: 'Baked Chicken Thigh + Sweet Potato', calories: 460, protein: 36, carbs: 40, fat: 14 },
        { name: 'Shrimp Pasta + Garlic Bread', calories: 520, protein: 30, carbs: 58, fat: 16 },
        { name: 'Turkey Meatballs + Spaghetti', calories: 480, protein: 34, carbs: 52, fat: 12 },
        { name: 'Grilled Fish + Veggies + Quinoa', calories: 440, protein: 36, carbs: 40, fat: 12 },
      ]
    }
  }
};

mealDB.international.eggetarian = {
  breakfast: [
    { name: 'Scrambled Eggs (3) + Avocado Toast', calories: 440, protein: 24, carbs: 30, fat: 26 },
    { name: 'Veggie Omelette (3 eggs) + Toast', calories: 380, protein: 24, carbs: 26, fat: 20 },
    { name: 'Greek Yogurt Parfait + Granola + Boiled Egg', calories: 420, protein: 24, carbs: 46, fat: 14 },
    { name: 'Protein Pancakes (egg-based) + Berries', calories: 380, protein: 26, carbs: 42, fat: 10 },
    { name: 'Overnight Oats + Boiled Eggs (2)', calories: 420, protein: 24, carbs: 48, fat: 14 },
    { name: 'Egg White Omelette + Whole Wheat Toast', calories: 340, protein: 26, carbs: 28, fat: 10 },
    { name: 'Tofu Scramble + Fried Egg + Toast', calories: 400, protein: 26, carbs: 34, fat: 18 },
  ],
  lunch: [
    { name: 'Egg Salad Wrap + Side Salad', calories: 480, protein: 24, carbs: 42, fat: 22 },
    { name: 'Quinoa Buddha Bowl + Poached Eggs (2)', calories: 520, protein: 28, carbs: 54, fat: 18 },
    { name: 'Pasta Primavera + Fried Egg', calories: 520, protein: 22, carbs: 64, fat: 18 },
    { name: 'Veggie Stir Fry + Brown Rice + Egg', calories: 480, protein: 20, carbs: 60, fat: 16 },
    { name: 'Greek Salad + Pita + Hard Boiled Eggs (2)', calories: 460, protein: 22, carbs: 40, fat: 22 },
    { name: 'Lentil Soup + Bread + Boiled Eggs (2)', calories: 480, protein: 28, carbs: 52, fat: 12 },
    { name: 'Black Bean Bowl + Fried Eggs (2)', calories: 520, protein: 28, carbs: 58, fat: 16 },
  ],
  snacks: [
    { name: 'Protein Shake + Boiled Egg', calories: 300, protein: 36, carbs: 24, fat: 8 },
    { name: 'Hard Boiled Eggs (2) + Apple', calories: 220, protein: 16, carbs: 18, fat: 10 },
    { name: 'Greek Yogurt + Almonds', calories: 250, protein: 16, carbs: 18, fat: 12 },
    { name: 'Cottage Cheese + Berries', calories: 200, protein: 18, carbs: 16, fat: 6 },
    { name: 'Egg Muffins (2) + Fruit', calories: 240, protein: 18, carbs: 20, fat: 10 },
    { name: 'Hummus + Carrot Sticks + Boiled Egg', calories: 220, protein: 14, carbs: 18, fat: 10 },
    { name: 'Rice Cakes + PB + Banana', calories: 280, protein: 10, carbs: 38, fat: 12 },
  ],
  dinner: [
    { name: 'Shakshuka (2 eggs) + Pita Bread', calories: 420, protein: 22, carbs: 42, fat: 18 },
    { name: 'Egg Fried Rice + Stir-Fried Veggies', calories: 460, protein: 20, carbs: 58, fat: 16 },
    { name: 'Veggie Pasta + Parmesan + Fried Egg', calories: 520, protein: 24, carbs: 60, fat: 18 },
    { name: 'Stuffed Bell Peppers + Egg + Quinoa', calories: 420, protein: 22, carbs: 48, fat: 14 },
    { name: 'Frittata + Side Salad + Bread', calories: 400, protein: 24, carbs: 32, fat: 18 },
    { name: 'Mushroom & Egg Stir Fry + Brown Rice', calories: 440, protein: 20, carbs: 52, fat: 16 },
    { name: 'Lentil Bolognese + Spaghetti + Fried Egg', calories: 480, protein: 28, carbs: 60, fat: 12 },
  ]
};

const ALLERGEN_KEYWORDS = {
  dairy: ['curd', 'paneer', 'milk', 'yogurt', 'cream', 'cheese', 'whey', 'raita', 'butter'],
  gluten: ['paratha', 'roti', 'toast', 'bread', 'wrap', 'pasta', 'noodles', 'sandwich', 'bagel', 'quesadilla', 'crackers', 'pita']
};

function filterByAllergens(meals, allergies) {
  if (!allergies || allergies === 'none') return meals;
  const keywords = [];
  if (allergies === 'dairy' || allergies === 'both') keywords.push(...ALLERGEN_KEYWORDS.dairy);
  if (allergies === 'gluten' || allergies === 'both') keywords.push(...ALLERGEN_KEYWORDS.gluten);
  const filtered = meals.filter(m => {
    const name = m.name.toLowerCase();
    return !keywords.some(kw => name.includes(kw));
  });
  return filtered.length > 0 ? filtered : meals;
}

function generateMealPlan(targetCalories, macros, diet, cuisine, allergies) {
  const dietKey = diet;
  const plan = [];
  const mealTypes = ['breakfast', 'lunch', 'snacks', 'dinner'];

  for (let day = 0; day < 7; day++) {
    const dayPlan = {};
    const useCuisine = (cuisine === 'both') ? (day % 2 === 0 ? 'indian' : 'international') : cuisine;
    const dayMeals = mealDB[useCuisine][dietKey] || mealDB[useCuisine].nonveg;

    mealTypes.forEach(type => {
      const options = filterByAllergens(dayMeals[type], allergies);
      dayPlan[type] = options[day % options.length];
    });

    // Calculate day totals
    dayPlan.totals = {
      calories: mealTypes.reduce((sum, t) => sum + dayPlan[t].calories, 0),
      protein: mealTypes.reduce((sum, t) => sum + dayPlan[t].protein, 0),
      carbs: mealTypes.reduce((sum, t) => sum + dayPlan[t].carbs, 0),
      fat: mealTypes.reduce((sum, t) => sum + dayPlan[t].fat, 0)
    };

    plan.push(dayPlan);
  }

  return plan;
}

const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
