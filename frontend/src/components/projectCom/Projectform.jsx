import React, { useState } from 'react';

export const Projectform = () => {
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliation: "",
    problemStatement: "",
    description: ""
  });

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzcORm01xEYeZ4ecmVip5hCzgeDIGbZxxs7V5onKlS6jt_vkD78vkLtJoFDN1kvDc9B9A/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Convert PDF to Base64 so it can be sent via JSON
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onload = () => {
        setResumeFile({
          name: file.name,
          type: file.type,
          data: reader.result.split(",")[1] // Extracts the base64 string
        });
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid PDF file.");
      e.target.value = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!resumeFile) {
      alert("Please upload a PDF file first.");
      return;
    }

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // This bypasses CORS issues for Apps Script
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({ 
          ...formData, 
          resume: resumeFile 
        }),
      });

      // Since 'no-cors' doesn't allow reading the response, 
      // we assume success if no error is thrown.
      alert("Project submitted successfully!");
      
      // Reset Form
      setFormData({ name: "", email: "", affiliation: "", problemStatement: "", description: "" });
      setResumeFile(null);
      e.target.reset();

    } catch (err) {
      console.error("Submission error:", err);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 md:p-8">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">Project Submission</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
            <input 
              type="text" name="name" required
              value={formData.name} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
            <input 
              type="email" name="email" required
              value={formData.email} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Affiliation *</label>
            <select 
              name="affiliation" required
              value={formData.affiliation} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Affiliation</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="professional">Professional</option>
              <option value="ngo">NGO</option>
              <option value="industry">Industry</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Problem Statement Heading *</label>
            <input 
              type="text" name="problemStatement" required
              placeholder="Brief title of the problem"
              value={formData.problemStatement} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Description *</label>
            <textarea 
              name="description" required
              placeholder="Detailed explanation..."
              value={formData.description} onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg h-32 outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>

          <div className="p-4 rounded-lg border border-blue-100 bg-blue-50">
            <label className="block text-sm font-bold text-blue-800 mb-2">Attach Project PDF *</label>
            <input 
              type="file" accept=".pdf" required
              onChange={handleFile}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer" 
            />
            {resumeFile && <p className="text-blue-600 text-xs mt-2 font-bold">✓ {resumeFile.name} ready</p>}
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold shadow-md hover:bg-blue-700 transition-all disabled:bg-gray-400"
          >
            {loading ? "Submitting..." : "Submit Project"}
          </button>
        </form>
      </div>
    </div>
  );
};