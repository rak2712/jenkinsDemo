pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    if (fileExists('package.json')) {
                        echo 'package.json found, installing dependencies...'
                        bat 'npm install'
                    } else {
                        echo 'package.json not found, skipping npm install.'
                    }
                }
            }
        }
        // Add other stages like Lint, Test, Build, Deploy as needed
    }
}
