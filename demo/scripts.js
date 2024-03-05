// Define the API endpoint URL
const apiUrl = "https://openapi.programming-hero.com/api/retro-forum/posts";

// Function to fetch data from the API
async function fetchPosts() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.posts; // Assuming the posts are contained in a property named 'posts'
    } catch (error) {
        console.error("Error fetching posts:", error);
        return null;
    }
}

// Function to display posts in HTML
function displayPosts(posts) {
    const postsContainer = document.getElementById("postsContainer");
    postsContainer.innerHTML = ""; // Clear previous results

    posts.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.description}</p>
      <p>Category: ${post.category}</p>
      <p>Author: ${post.author.name}</p>
      <p>Posted Date: ${new Date(post.createdAt).toLocaleString()}</p>
    `;
        postsContainer.appendChild(postDiv);
    });
}

// Function to search posts by category
function searchPosts(event) {
    event.preventDefault();

    const categoryInput = document.getElementById("categoryInput");
    const searchCategory = categoryInput.value.trim().toLowerCase();
    console.log(searchCategory);

    const spinner = document.getElementById("spinner");
    postsContainer.innerHTML = "";
    spinner.style.display = "block";

    fetchPosts()
        .then((posts) => {
            setTimeout(() => {
                // Hide spinner after 2 seconds
                spinner.style.display = "none";

                if (searchCategory === "") {
                    // If searchCategory is empty, fetch and display all posts
                    if (posts) {
                        displayPosts(posts);
                    } else {
                        const postsContainer = document.getElementById("postsContainer");
                        postsContainer.innerHTML = "<p>No posts available.</p>";
                    }
                } else {
                    // If searchCategory is not empty, filter posts by category
                    if (posts) {
                        const filteredPosts = posts.filter((post) => post.category.toLowerCase() === searchCategory);
                        if (filteredPosts.length > 0) {
                            displayPosts(filteredPosts);
                        } else {
                            const postsContainer = document.getElementById("postsContainer");
                            postsContainer.innerHTML = "<p>No posts found for the specified category.</p>";
                        }
                    } else {
                        const postsContainer = document.getElementById("postsContainer");
                        postsContainer.innerHTML = "<p>No posts available.</p>";
                    }
                }
            }, 2000); // Wait for 2 seconds
        })
        .catch((error) => {
            console.error("Error:", error);
            const postsContainer = document.getElementById("postsContainer");
            postsContainer.innerHTML = "<p>Error fetching posts. Please try again later.</p>";
            // Hide spinner on error
            spinner.style.display = "none";
        });
}

// Initial fetch and display of posts
fetchPosts()
    .then((posts) => {
        if (posts) {
            displayPosts(posts);
        } else {
            const postsContainer = document.getElementById("postsContainer");
            postsContainer.innerHTML = "<p>No posts available.</p>";
        }
    })
    .catch((error) => {
        console.error("Error:", error);
        const postsContainer = document.getElementById("postsContainer");
        postsContainer.innerHTML = "<p>Error fetching posts. Please try again later.</p>";
    });
