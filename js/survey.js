// Survey state
const surveyData = {
  name: '', age: 0, gender: '', height: 0, weight: 0,
  goal: '', level: '', days: 0,
  diet: '', cuisine: '', allergies: 'none',
  activity: '', sleep: '', water: '',
  email: ''
};

let currentStep = 1;
const totalSteps = 4;

function selectOption(el, key) {
  const parent = el.parentElement;
  parent.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  surveyData[key] = el.dataset.value;
}

function updateProgress() {
  const pct = (currentStep / totalSteps) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
}

function showStep(step) {
  document.querySelectorAll('.survey-step').forEach(s => s.classList.remove('active'));
  document.getElementById('step' + step).classList.add('active');
  currentStep = step;
  updateProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateStep(step) {
  if (step === 1) {
    const ageVal = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const heightVal = document.getElementById('height').value;
    const weightVal = document.getElementById('weight').value;
    if (!ageVal || !gender || !heightVal || !weightVal) {
      alert('Please fill in all required fields.');
      return false;
    }
    const age = parseInt(ageVal);
    const height = parseFloat(heightVal);
    const weight = parseFloat(weightVal);
    if (age < 14 || age > 80) { alert('Please enter a valid age (14–80).'); return false; }
    if (height < 100 || height > 250) { alert('Please enter a valid height (100–250 cm).'); return false; }
    if (weight < 30 || weight > 250) { alert('Please enter a valid weight (30–250 kg).'); return false; }
    surveyData.name = document.getElementById('name').value || 'Champion';
    surveyData.email = document.getElementById('email').value || '';
    surveyData.age = age;
    surveyData.gender = gender;
    surveyData.height = height;
    surveyData.weight = weight;
    return true;
  }
  if (step === 2) {
    if (!surveyData.goal || !surveyData.level || !surveyData.days) {
      alert('Please select all options.');
      return false;
    }
    surveyData.days = parseInt(surveyData.days);
    return true;
  }
  if (step === 3) {
    if (!surveyData.diet || !surveyData.cuisine) {
      alert('Please select your diet type and cuisine preference.');
      return false;
    }
    surveyData.allergies = document.getElementById('allergies').value;
    return true;
  }
  if (step === 4) {
    if (!surveyData.activity) {
      alert('Please select your activity level.');
      return false;
    }
    surveyData.sleep = document.getElementById('sleep').value;
    surveyData.water = document.getElementById('water').value;
    return true;
  }
  return true;
}

function nextStep(current) {
  if (!validateStep(current)) return;
  showStep(current + 1);
}

function prevStep(current) {
  showStep(current - 1);
}

function subscribeToMailchimp(email, name) {
  if (!email) return;
  window._mcCb = function() {};
  const params = `EMAIL=${encodeURIComponent(email)}&FNAME=${encodeURIComponent(name)}&c=_mcCb`;
  const script = document.createElement('script');
  script.src = `https://ne-ev.us14.list-manage.com/subscribe/post-json?u=2babd735cc9a86cb5368f156d&id=77e5b18ef0&${params}`;
  document.body.appendChild(script);
}

function submitSurvey() {
  if (!validateStep(4)) return;
  localStorage.setItem('neev_survey', JSON.stringify(surveyData));
  subscribeToMailchimp(surveyData.email, surveyData.name);
  window.location.href = 'results.html';
}
