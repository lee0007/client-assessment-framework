// Client data (would be loaded from questionnaire responses)
let clientData = {
    type: 'ENTJ',
    dimensions: {
        ie: 6,    // Internal (+) / External (-) score
        sn: -4,   // Sensing (+) / Intuition (-) score  
        tf: 8,    // Thinking (+) / Feeling (-) score
        jp: 5     // Judging (+) / Perceiving (-) score
    },
    riskFactors: {
        baseRisk: 1,
        contradictory: 0,
        neutral: 0,
        unclearProblem: 0
    }
};

// Client types reference data
const clientTypes = {
    'ISTJ': { description: 'Internal, detail-focused, logical, structured', riskLevel: 'Low' },
    'ISFJ': { description: 'Internal, detail-focused, consensus-oriented, structured', riskLevel: 'Low-Medium' },
    'INFJ': { description: 'Internal, big-picture, consensus-oriented, structured', riskLevel: 'Medium' },
    'INTJ': { description: 'Internal, big-picture, logical, structured', riskLevel: 'Low' },
    'ISTP': { description: 'Internal, detail-focused, logical, flexible', riskLevel: 'Medium' },
    'ISFP': { description: 'Internal, detail-focused, consensus-oriented, flexible', riskLevel: 'Medium-High' },
    'INFP': { description: 'Internal, big-picture, consensus-oriented, flexible', riskLevel: 'High' },
    'INTP': { description: 'Internal, big-picture, logical, flexible', riskLevel: 'Medium' },
    'ESTJ': { description: 'External, detail-focused, logical, structured', riskLevel: 'Low' },
    'ESFJ': { description: 'External, detail-focused, consensus-oriented, structured', riskLevel: 'Low-Medium' },
    'ENFJ': { description: 'External, big-picture, consensus-oriented, structured', riskLevel: 'Medium' },
    'ENTJ': { description: 'External, big-picture, logical, structured', riskLevel: 'Low' },
    'ESTP': { description: 'External, detail-focused, logical, flexible', riskLevel: 'Medium-High' },
    'ESFP': { description: 'External, detail-focused, consensus-oriented, flexible', riskLevel: 'High' },
    'ENFP': { description: 'External, big-picture, consensus-oriented, flexible', riskLevel: 'High' },
    'ENTP': { description: 'External, big-picture, logical, flexible', riskLevel: 'Medium' }
};

// Recommended approaches
const recommendedApproaches = {
    'ISTJ': 'Direct technical approach, come prepared with specifics',
    'ISFJ': 'Focus on practical impact for team, provide clear process',
    'INFJ': 'Connect solution to vision and values, structured approach',
    'INTJ': 'Strategic focus, emphasize innovation within structure',
    'ISTP': 'Hands-on, practical demonstrations, technical depth',
    'ISFP': 'Emphasize impact on people, flexible implementation',
    'INFP': 'Connect to values and mission, creative collaboration',
    'INTP': 'Logical frameworks, conceptual depth, respect expertise',
    'ESTJ': 'Structured process, clear deliverables, efficiency focus',
    'ESFJ': 'Harmony-focused, practical outcomes, clear communications',
    'ENFJ': 'Relationship-building, strategic vision, consensus focus',
    'ENTJ': 'Strategic planning, decision-oriented, efficiency',
    'ESTP': 'Action-oriented, immediate results, flexible approach',
    'ESFP': 'People-focused, enthusiasm, practical benefits',
    'ENFP': 'Possibilities, enthusiasm, connection to mission',
    'ENTP': 'Innovation, strategic possibilities, intellectual challenge'
};

// DOM elements
const editBtn = document.getElementById('editBtn');
const updateBtn = document.getElementById('updateBtn');
const clientTypeDisplay = document.getElementById('clientTypeDisplay');
const editForm = document.getElementById('editForm');
const clientTypeEl = document.getElementById('clientType');
const typeDescriptionEl = document.getElementById('typeDescription');
const recommendedApproachEl = document.getElementById('recommendedApproach');
const totalRiskEl = document.getElementById('totalRisk');
const riskLevelEl = document.getElementById('riskLevel');
const riskProgressEl = document.getElementById('riskProgress');
const radarChartCanvas = document.getElementById('radarChart');

// Sliders and inputs
const ieSlider = document.getElementById('ieSlider');
const ieSliderValue = document.getElementById('ieSliderValue');
const ieValue = document.getElementById('ieValue');
const ieProgress = document.getElementById('ieProgress');
const baseRiskInput = document.getElementById('baseRisk');

// Initialize the dashboard
function initDashboard() {
    // Set initial values
    updateClientTypeDisplay();
    updateRiskDisplay();
    populateTypeTable();
    createRadarChart();
    
    // Event listeners
    editBtn.addEventListener('click', toggleEditMode);
    updateBtn.addEventListener('click', updateClientData);
    
    // Slider change event
    ieSlider.addEventListener('input', function() {
        ieSliderValue.textContent = this.value;
    });
}

// Toggle between display and edit modes
function toggleEditMode() {
    if (clientTypeDisplay.classList.contains('hidden')) {
        clientTypeDisplay.classList.remove('hidden');
        editForm.classList.add('hidden');
        editBtn.textContent = 'Edit';
    } else {
        clientTypeDisplay.classList.add('hidden');
        editForm.classList.remove('hidden');
        editBtn.textContent = 'Cancel';
        
        // Set form values to current client data
        ieSlider.value = clientData.dimensions.ie;
        ieSliderValue.textContent = clientData.dimensions.ie;
        baseRiskInput.value = clientData.riskFactors.baseRisk;
    }
}

// Update client data from form inputs
function updateClientData() {
    // Get values from form
    const newIe = parseInt(ieSlider.value);
    const newBaseRisk = parseInt(baseRiskInput.value);
    
    // Update client data
    clientData.dimensions.ie = newIe;
    clientData.riskFactors.baseRisk = newBaseRisk;
    
    // Recalculate client type
    clientData.type = calculateType(clientData.dimensions);
    
    // Update displays
    updateClientTypeDisplay();
    updateRiskDisplay();
    createRadarChart(); // Recreate chart with new data
    
    // Switch back to display mode
    toggleEditMode();
}

// Calculate client type from dimension scores
function calculateType(dimensions) {
    const letters = [
        dimensions.ie >= 0 ? 'I' : 'E',
        dimensions.sn >= 0 ? 'S' : 'N',
        dimensions.tf >= 0 ? 'T' : 'F',
        dimensions.jp >= 0 ? 'J' : 'P'
    ];
    return letters.join('');
}

// Calculate total risk
function calculateTotalRisk() {
    return clientData.riskFactors.baseRisk + 
           clientData.riskFactors.contradictory +
           clientData.riskFactors.neutral +
           clientData.riskFactors.unclearProblem;
}

// Determine risk level
function getRiskLevel(score) {
    if (score > 7) return "HIGH";
    if (score > 4) return "MEDIUM";
    return "LOW";
}

// Update client type display
function updateClientTypeDisplay() {
    clientTypeEl.textContent = clientData.type;
    typeDescriptionEl.textContent = clientTypes[clientData.type]?.description || 'Unknown type';
    
    // Update dimension bars
    updateDimensionBar(ieProgress, ieValue, clientData.dimensions.ie);
    
    // For simplicity, we're only implementing the I-E dimension fully
    // In a complete implementation, you would do this for all dimensions
}

// Update risk display
function updateRiskDisplay() {
    const totalRisk = calculateTotalRisk();
    const riskLevel = getRiskLevel(totalRisk);
    
    totalRiskEl.textContent = totalRisk;
    riskLevelEl.textContent = riskLevel + ' RISK';
    riskLevelEl.className = 'risk-level ' + riskLevel.toLowerCase();
    
    // Update risk progress bar
    const riskPercentage = (totalRisk / 15) * 100;
    riskProgressEl.style.width = riskPercentage + '%';
    
    if (riskLevel === 'HIGH') {
        riskProgressEl.className = 'progress-bar high';
    } else if (riskLevel === 'MEDIUM') {
        riskProgressEl.className = 'progress-bar medium';
    } else {
        riskProgressEl.className = 'progress-bar low';
    }
    
    // Update recommended approach
    recommendedApproachEl.textContent = recommendedApproaches[clientData.type] || 'No recommendation available';
}

// Update dimension bar display
function updateDimensionBar(progressEl, valueEl, value) {
    valueEl.textContent = value;
    
    // Calculate percentage (we have -10 to +10 range, so transform to 0-100%)
    let percentage, position;
    
    if (value >= 0) {
        percentage = (value / 10) * 50;
        position = 50;
    } else {
        percentage = (Math.abs(value) / 10) * 50;
        position = 50 - percentage;
    }
    
    progressEl.style.width = percentage + '%';
    progressEl.style.marginLeft = position + '%';
    
    if (value >= 0) {
        progressEl.className = 'progress-bar positive';
    } else {
        progressEl.className = 'progress-bar negative';
    }
}

// Populate type table
function populateTypeTable() {
    const tableBody = document.querySelector('#typeTable tbody');
    
    Object.entries(clientTypes).forEach(([type, data]) => {
        const row = document.createElement('tr');
        row.className = clientData.type === type ? 'highlight' : '';
        
        const typeCell = document.createElement('td');
        typeCell.textContent = type;
        
        const descCell = document.createElement('td');
        descCell.textContent = data.description;
        
        const riskCell = document.createElement('td');
        riskCell.textContent = data.riskLevel;
        
        row.appendChild(typeCell);
        row.appendChild(descCell);
        row.appendChild(riskCell);
        
        tableBody.appendChild(row);
    });
}

// Create radar chart using Chart.js
function createRadarChart() {
    // Check if chart already exists and destroy it
    if (window.radarChart) {
        window.radarChart.destroy();
    }
    
    const dimensionValues = [
        getNormalizedValue(clientData.dimensions.ie),  // I-E
        getNormalizedValue(clientData.dimensions.sn),  // S-N
        getNormalizedValue(clientData.dimensions.tf),  // T-F
        getNormalizedValue(clientData.dimensions.jp)   // J-P
    ];
    
    window.radarChart = new Chart(radarChartCanvas, {
        type: 'radar',
        data: {
            labels: ['I/E', 'S/N', 'T/F', 'J/P'],
            datasets: [{
                label: 'Client Profile',
                data: dimensionValues,
                backgroundColor: 'rgba(59, 130, 246, 0.5)',
                borderColor: 'rgb(59, 130, 246)',
                pointBackgroundColor: 'rgb(59, 130, 246)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(59, 130, 246)'
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: 10
                }
            }
        }
    });
}

// Convert -10 to 10 values to 0 to 10 for the radar chart
function getNormalizedValue(value) {
    // For positive values, return as is (0 to 10)
    if (value >= 0) {
        return value;
    } 
    // For negative values, return 0
    // Note: In a more sophisticated visualization, you might want to represent
    // negative values differently, but for simplicity, we're showing only the 
    // dominant pole in each dimension
    return 0;
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initDashboard);
