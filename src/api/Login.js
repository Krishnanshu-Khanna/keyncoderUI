// src/api/login.js

const API_URL = "http://localhost:3001"; // Replace with your actual API URL

export const login = async (email, password) => {
	try {
		const response = await fetch(`${API_URL}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});

		if (!response.ok) {
			throw new Error("Login failed, please check your credentials.");
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("An error occurred:", error);
		throw error;
	}
};
