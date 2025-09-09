import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ComplianceCalculator() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    operationType: "",
    employeeCount: "",
    annualRevenue: "",
    environmentalIncidents: "",
    safetyIncidents: "",
    complianceAudits: "",
    trainingHours: ""
  });

  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const operationTypes = [
    { value: "mining", label: "Mining Operations", risk: "high" },
    { value: "industrial", label: "Industrial Manufacturing", risk: "medium" },
    { value: "construction", label: "Construction", risk: "medium" },
    { value: "agriculture", label: "Agriculture", risk: "low" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateCompliance = () => {
    // Simulate compliance calculation
    const employeeCount = parseInt(formData.employeeCount) || 0;
    const incidents = parseInt(formData.environmentalIncidents) + parseInt(formData.safetyIncidents) || 0;
    const audits = parseInt(formData.complianceAudits) || 0;
    const training = parseInt(formData.trainingHours) || 0;

    // Simple scoring algorithm
    let score = 100;
    
    // Deduct points for incidents
    score -= incidents * 10;
    
    // Deduct points for lack of audits
    if (audits < 2) score -= 20;
    
    // Deduct points for insufficient training
    if (training < employeeCount * 8) score -= 15;
    
    // Ensure score doesn't go below 0
    score = Math.max(0, score);

    const riskLevel = score >= 80 ? "low" : score >= 60 ? "medium" : "high";
    const recommendations = generateRecommendations(score, formData);

    setResults({
      score: Math.round(score),
      riskLevel,
      recommendations,
      estimatedCost: calculateEstimatedCost(score, employeeCount)
    });
    setShowResults(true);
  };

  const generateRecommendations = (score: number, data: any) => {
    const recommendations = [];
    
    if (score < 70) {
      recommendations.push("Implement comprehensive environmental management system");
      recommendations.push("Conduct immediate safety audit and risk assessment");
    }
    
    if (parseInt(data.environmentalIncidents) > 0) {
      recommendations.push("Develop incident response and prevention protocols");
    }
    
    if (parseInt(data.trainingHours) < parseInt(data.employeeCount) * 8) {
      recommendations.push("Increase safety training hours for all employees");
    }
    
    if (parseInt(data.complianceAudits) < 2) {
      recommendations.push("Schedule quarterly compliance audits");
    }
    
    return recommendations;
  };

  const calculateEstimatedCost = (score: number, employees: number) => {
    const baseCost = employees * 50; // Base cost per employee
    const multiplier = score < 60 ? 2.5 : score < 80 ? 1.8 : 1.2;
    return Math.round(baseCost * multiplier);
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "low": return "text-green-600 bg-green-100";
      case "medium": return "text-yellow-600 bg-yellow-100";
      case "high": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-[#30B4F2]/10 text-[#30B4F2] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <i className="fas fa-calculator mr-2"></i>
              Free Assessment Tool
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Environmental & Safety Compliance Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get an instant assessment of your operation's compliance status and receive 
              personalized recommendations to improve your environmental and safety performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tell us about your operation
              </h3>
              
              <form className="space-y-6">
                {/* Operation Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Type of Operation *
                  </label>
                  <select
                    name="operationType"
                    value={formData.operationType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent transition-all"
                  >
                    <option value="">Select operation type</option>
                    {operationTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Employee Count */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Number of Employees *
                  </label>
                  <input
                    type="number"
                    name="employeeCount"
                    value={formData.employeeCount}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent transition-all"
                    placeholder="e.g., 150"
                  />
                </div>

                {/* Annual Revenue */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Annual Revenue (USD)
                  </label>
                  <select
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent transition-all"
                  >
                    <option value="">Select revenue range</option>
                    <option value="under-1m">Under $1M</option>
                    <option value="1m-10m">$1M - $10M</option>
                    <option value="10m-50m">$10M - $50M</option>
                    <option value="50m-100m">$50M - $100M</option>
                    <option value="over-100m">Over $100M</option>
                  </select>
                </div>

                {/* Environmental Incidents */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Environmental Incidents (Last 12 months)
                  </label>
                  <input
                    type="number"
                    name="environmentalIncidents"
                    value={formData.environmentalIncidents}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent transition-all"
                    placeholder="0"
                  />
                </div>

                {/* Safety Incidents */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Safety Incidents (Last 12 months)
                  </label>
                  <input
                    type="number"
                    name="safetyIncidents"
                    value={formData.safetyIncidents}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent transition-all"
                    placeholder="0"
                  />
                </div>

                {/* Compliance Audits */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Compliance Audits (Last 12 months)
                  </label>
                  <input
                    type="number"
                    name="complianceAudits"
                    value={formData.complianceAudits}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent transition-all"
                    placeholder="0"
                  />
                </div>

                {/* Training Hours */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Total Safety Training Hours (Last 12 months)
                  </label>
                  <input
                    type="number"
                    name="trainingHours"
                    value={formData.trainingHours}
                    onChange={handleInputChange}
                    min="0"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#30B4F2] focus:border-transparent transition-all"
                    placeholder="0"
                  />
                </div>

                <button
                  type="button"
                  onClick={calculateCompliance}
                  className="w-full bg-gradient-to-r from-[#30B4F2] to-[#228CBF] hover:from-[#228CBF] hover:to-[#1a7aa3] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-calculator mr-2"></i>
                  Calculate My Compliance Score
                </button>
              </form>
            </div>

            {/* Results Display */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {!showResults ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-chart-line text-3xl text-gray-400"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Your Results Will Appear Here
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form and click "Calculate" to see your compliance score, 
                    risk assessment, and personalized recommendations.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Score Display */}
                  <div className="text-center">
                    <div className={`text-6xl font-bold mb-2 ${getScoreColor(results.score)}`}>
                      {results.score}
                    </div>
                    <div className="text-xl text-gray-600 mb-4">Compliance Score</div>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${getRiskColor(results.riskLevel)}`}>
                      <i className={`fas fa-${results.riskLevel === 'low' ? 'check-circle' : results.riskLevel === 'medium' ? 'exclamation-triangle' : 'times-circle'} mr-2`}></i>
                      {results.riskLevel.charAt(0).toUpperCase() + results.riskLevel.slice(1)} Risk Level
                    </div>
                  </div>

                  {/* Estimated Cost */}
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Estimated Compliance Investment
                    </h4>
                    <div className="text-3xl font-bold text-[#30B4F2] mb-2">
                      ${results.estimatedCost.toLocaleString()}
                    </div>
                    <p className="text-sm text-gray-600">
                      Annual investment needed to achieve optimal compliance
                    </p>
                  </div>

                  {/* Recommendations */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Priority Recommendations
                    </h4>
                    <div className="space-y-3">
                      {results.recommendations.map((rec: string, index: number) => (
                        <div key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-[#30B4F2] rounded-full flex items-center justify-center mr-3 mt-0.5">
                            <i className="fas fa-check text-white text-xs"></i>
                          </div>
                          <span className="text-gray-700">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-r from-[#30B4F2] to-[#228CBF] rounded-lg p-6 text-white text-center">
                    <h4 className="text-lg font-semibold mb-2">
                      Need Help Implementing These Recommendations?
                    </h4>
                    <p className="text-white/90 mb-4">
                      Our experts can help you achieve full compliance
                    </p>
                    <a
                      href="#contact"
                      className="inline-block bg-white text-[#30B4F2] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Get Expert Consultation
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
