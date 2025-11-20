// BMI Hesaplama
export function calculateBMI(weight: number, height: number): {
  bmi: number;
  category: string;
  description: string;
} {
  const bmi = weight / Math.pow(height / 100, 2);
  
  let category = '';
  let description = '';
  
  if (bmi < 18.5) {
    category = 'Zayıf';
    description = 'Normal kilonun altındasınız. Dengeli beslenme ile ideal kilonuza ulaşabilirsiniz.';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal';
    description = 'İdeal kilo aralığındasınız. Sağlıklı beslenme alışkanlıklarınızı sürdürün.';
  } else if (bmi >= 25 && bmi < 30) {
    category = 'Fazla Kilolu';
    description = 'Normal kilonun üzerindesiniz. Uzman diyetisyen desteği ile sağlıklı kilo verebilirsiniz.';
  } else if (bmi >= 30 && bmi < 35) {
    category = 'Obez (1. Derece)';
    description = 'Obezite sınırındasınız. Profesyonel destek almanız önerilir.';
  } else if (bmi >= 35 && bmi < 40) {
    category = 'Obez (2. Derece)';
    description = 'Ciddi obezite probleminiz var. Mutlaka uzman diyetisyen desteği almalısınız.';
  } else {
    category = 'Morbid Obez';
    description = 'Acil profesyonel yardım almanız gerekiyor.';
  }
  
  return { bmi: Number(bmi.toFixed(1)), category, description };
}

// BMR Hesaplama (Harris-Benedict)
export function calculateBMR(
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female'
): number {
  if (gender === 'male') {
    return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    return 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
  }
}

// Günlük Kalori İhtiyacı
export function calculateDailyCalories(
  bmr: number,
  activityLevel: string
): {
  maintenance: number;
  weightLoss: number;
  weightGain: number;
} {
  const activityMultipliers: Record<string, number> = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9,
  };
  
  const maintenance = bmr * (activityMultipliers[activityLevel] || 1.2);
  const weightLoss = maintenance - 500;
  const weightGain = maintenance + 500;
  
  return {
    maintenance: Math.round(maintenance),
    weightLoss: Math.round(weightLoss),
    weightGain: Math.round(weightGain),
  };
}

// İdeal Kilo Hesaplama
export function calculateIdealWeight(
  height: number,
  gender: 'male' | 'female'
): {
  devine: number;
  hamwi: number;
  robinson: number;
  average: number;
} {
  const heightInInches = height / 2.54;
  
  let devine, hamwi, robinson;
  
  if (gender === 'male') {
    devine = 50 + 2.3 * (heightInInches - 60);
    hamwi = 48 + 2.7 * (heightInInches - 60);
    robinson = 52 + 1.9 * (heightInInches - 60);
  } else {
    devine = 45.5 + 2.3 * (heightInInches - 60);
    hamwi = 45.5 + 2.2 * (heightInInches - 60);
    robinson = 49 + 1.7 * (heightInInches - 60);
  }
  
  const average = (devine + hamwi + robinson) / 3;
  
  return {
    devine: Number(devine.toFixed(1)),
    hamwi: Number(hamwi.toFixed(1)),
    robinson: Number(robinson.toFixed(1)),
    average: Number(average.toFixed(1)),
  };
}

// Su İhtiyacı Hesaplama
export function calculateWaterIntake(
  weight: number,
  activityLevel: 'low' | 'moderate' | 'high'
): {
  liters: number;
  glasses: number;
  description: string;
} {
  let baseWater = weight * 0.033;
  
  const activityMultipliers = {
    low: 1,
    moderate: 1.2,
    high: 1.5,
  };
  
  const totalWater = baseWater * activityMultipliers[activityLevel];
  const glasses = totalWater / 0.25;
  
  const descriptions = {
    low: 'Hafif aktivite seviyesi için günlük su ihtiyacınız.',
    moderate: 'Orta aktivite seviyesi için günlük su ihtiyacınız.',
    high: 'Yoğun aktivite seviyesi için günlük su ihtiyacınız.',
  };
  
  return {
    liters: Number(totalWater.toFixed(1)),
    glasses: Math.round(glasses),
    description: descriptions[activityLevel],
  };
}
