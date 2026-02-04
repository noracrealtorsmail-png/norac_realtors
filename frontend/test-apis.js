async function testFeaturedListings() {
    console.log("Testing GET /api/home/featured...");
    try {
        const res = await fetch("http://localhost:3000/api/home/featured");
        const data = await res.json();
        console.log("Status:", res.status);
        console.log("Data count:", Array.isArray(data) ? data.length : "Not an array");
        if (Array.isArray(data) && data.length > 0) {
            console.log("First item:", data[0].title);
            return data[0].id;
        }
    } catch (err) {
        console.error("Featured API Error:", err);
    }
    return null;
}

async function testListingDetail(id) {
    console.log(`Testing GET /api/listing/${id}...`);
    try {
        const res = await fetch(`http://localhost:3000/api/listing/${id}`);
        const data = await res.json();
        console.log("Status:", res.status);
        console.log("Title:", data.title);
    } catch (err) {
        console.error("Listing Detail API Error:", err);
    }
}

async function testSignup() {
    console.log("Testing POST /api/auth/signup...");
    const testUser = {
        name: "Test Runner",
        email: `test-${Date.now()}@norac.co.ke`,
        password: "password123",
        role: "USER"
    };
    try {
        const res = await fetch("http://localhost:3000/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(testUser)
        });
        const data = await res.json();
        console.log("Status:", res.status);
        console.log("Response:", data);
    } catch (err) {
        console.error("Signup API Error:", err);
    }
}

async function runTests() {
    const featuredId = await testFeaturedListings();
    if (featuredId) {
        await testListingDetail(featuredId);
    }
    await testSignup();
}

runTests();
