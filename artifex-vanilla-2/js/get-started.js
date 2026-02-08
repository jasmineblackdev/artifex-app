// Get Started Form Logic
let currentStep = 1;
const totalSteps = 3;

const formData = {
  projectName: '',
  industry: '',
  platform: '',
  audience: '',
  tone: [],
  goals: []
};

// DOM Elements
const stepLabel = document.getElementById('step-label');
const progressSteps = document.querySelectorAll('.progress-step');
const formSteps = document.querySelectorAll('.form-step');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const resultsView = document.getElementById('results');
const navButtons = document.getElementById('nav-buttons');
const projectNameResult = document.getElementById('project-name-result');
const createAnotherBtn = document.getElementById('create-another');

// Initialize
function init() {
  // Single-select tag handlers
  setupSingleSelectTags('industry-tags');
  setupSingleSelectTags('platform-tags');
  
  // Multi-select tag handlers
  setupMultiSelectTags('tone-tags', 'tone');
  setupMultiSelectTags('goals-tags', 'goals');
  
  // Button handlers
  backBtn.addEventListener('click', prevStep);
  nextBtn.addEventListener('click', nextStep);
  createAnotherBtn.addEventListener('click', resetForm);
  
  // Input handler
  document.getElementById('project-name').addEventListener('input', (e) => {
    formData.projectName = e.target.value;
  });
  
  document.getElementById('audience').addEventListener('input', (e) => {
    formData.audience = e.target.value;
  });
}

function setupSingleSelectTags(containerId) {
  const container = document.getElementById(containerId);
  const tags = container.querySelectorAll('.tag');
  const field = containerId.replace('-tags', '');
  
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      // Deselect all others
      tags.forEach(t => t.classList.remove('active'));
      // Select this one
      tag.classList.add('active');
      formData[field] = tag.dataset.value;
    });
  });
}

function setupMultiSelectTags(containerId, field) {
  const container = document.getElementById(containerId);
  const tags = container.querySelectorAll('.tag');
  
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('active');
      const value = tag.dataset.value;
      
      if (formData[field].includes(value)) {
        formData[field] = formData[field].filter(v => v !== value);
      } else {
        formData[field].push(value);
      }
    });
  });
}

function updateUI() {
  // Update step label
  stepLabel.textContent = `Step ${currentStep} of ${totalSteps}`;
  
  // Update progress steps
  progressSteps.forEach((step, index) => {
    if (index < currentStep) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
  
  // Show/hide form steps
  formSteps.forEach((step, index) => {
    if (index === currentStep - 1) {
      step.classList.remove('hidden');
    } else {
      step.classList.add('hidden');
    }
  });
  
  // Show/hide back button
  if (currentStep === 1) {
    backBtn.classList.add('hidden');
  } else {
    backBtn.classList.remove('hidden');
  }
  
  // Update next button text
  if (currentStep === totalSteps) {
    nextBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
      Generate Directions
    `;
    nextBtn.classList.add('shadow-glow');
  } else {
    nextBtn.textContent = 'Next →';
    nextBtn.classList.remove('shadow-glow');
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateUI();
  }
}

function nextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
    updateUI();
  } else {
    // Generate results
    showResults();
  }
}

function showResults() {
  // Hide form steps and nav buttons
  formSteps.forEach(step => step.classList.add('hidden'));
  navButtons.classList.add('hidden');
  document.getElementById('progress-steps').parentElement.classList.add('hidden');
  
  // Show results
  resultsView.classList.remove('hidden');
  projectNameResult.textContent = formData.projectName || 'Your Project';
}

function resetForm() {
  // Reset state
  currentStep = 1;
  formData.projectName = '';
  formData.industry = '';
  formData.platform = '';
  formData.audience = '';
  formData.tone = [];
  formData.goals = [];
  
  // Reset inputs
  document.getElementById('project-name').value = '';
  document.getElementById('audience').value = '';
  
  // Reset tags
  document.querySelectorAll('.tag').forEach(tag => {
    tag.classList.remove('active');
  });
  
  // Show form, hide results
  resultsView.classList.add('hidden');
  navButtons.classList.remove('hidden');
  document.getElementById('progress-steps').parentElement.classList.remove('hidden');
  
  updateUI();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
