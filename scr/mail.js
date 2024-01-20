// ... (previous code)

async function listRepositoriesAndPackages() {
  // Set your Google Cloud project ID
  const projectId = 'pawsguard-79aa0'; // Correct project ID
  const location = 'us-central1'; // Set your desired location

  const client = new ArtifactRegistryClient();

  try {
    // Example: List repositories
    const repositories = await client.listRepositories({
      parent: `projects/${projectId}/locations/${location}`,
    });
    console.log('Repositories:');
    repositories[0].forEach(repository => {
      console.log(repository.name);
    });

    // Example: List packages in a repository
    const repositoryName = 'Codefest_2024'; // Replace with your actual repository name
    const packages = await client.listPackages({
      parent: `projects/${projectId}/locations/${location}/repositories/${repositoryName}`,
    });
    console.log(`Packages in repository ${repositoryName}:`);
    packages[0].forEach(package => {
      console.log(package.name);
    });
  } finally {
    // Close the client when done
    client.close();
  }
}

// Run the function
listRepositoriesAndPackages();
