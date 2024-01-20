import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDFDBFWWWLTpD6kqaOrf3i49xB9t-bxLrI",
  authDomain: "pawsguard-79aa0.firebaseapp.com",
  databaseURL: "https://pawsguard-79aa0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pawsguard-79aa0",
  storageBucket: "pawsguard-79aa0.appspot.com",
  messagingSenderId: "778272185845",
  appId: "1:778272185845:web:1a90ab3c72d7fad1ee54bc",
  measurementId: "G-E3ES908TZF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storageRef = ref(storage);
const { ArtifactRegistryClient } = require('@google-cloud/artifact-registry');

async function listRepositoriesAndPackages() {
  // Set your Google Cloud project ID
  const projectId = 'your-project-id';
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
    const repositoryName = 'your-repository';
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


