window.saveResult = function(studentName, level, subject, score, totalQuestions) {
    const results = JSON.parse(localStorage.getItem('examResults') || '[]');
    const timestamp = new Date().toISOString();
    results.push({
      studentName,
      level,
      subject,
      score,
      totalQuestions,
      timestamp
    });
    localStorage.setItem('examResults', JSON.stringify(results));
  };
  
  window.getAllResults = function() {
    return JSON.parse(localStorage.getItem('examResults') || '[]');
  };
  
  window.clearResults = function() {
    localStorage.setItem('examResults', '[]');
  };