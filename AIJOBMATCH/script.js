// Replace this with the actual Gemini API endpoint
const GEMINI_API_URL = "https://api.gemini.example/job-match";

document.getElementById("submit-button").addEventListener("click", async () => {
    const jobDescription = document.getElementById("job-description").value;
    const qualifications = document.getElementById("qualifications").value;

    if (!jobDescription || !qualifications) {
        alert("Please fill in both fields.");
        return;
    }

    // Prepare the data for API request
    const data = {
        job_description: jobDescription,
        qualifications: qualifications
    };

    try {
        // Call the Gemini API
        const response = await fetch(GEMINI_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_API_KEY" // Replace with your actual API key
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("Error calling the Gemini API.");
        }

        const result = await response.json();

        // Assuming the API returns a `match_percentage` field
        document.getElementById("match-percentage").innerText = result.match_percentage.toFixed(2);
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to calculate match. Please try again.");
    }
});
