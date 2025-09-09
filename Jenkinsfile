pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Lint Code') {
            steps {
                echo 'Linting source code...'
                // sh 'npm run lint' // Enable if linting is configured
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Executing tests...'
                // sh 'npm test' // Enable if tests are present
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                sh 'npm run build || echo "No build script, skipping..."'
            }
        }

        stage('Deploy (Placeholder)') {
            steps {
                echo 'Deployment placeholder...'
                // Insert deploy commands here (e.g., Docker, SCP, Heroku, etc.)
            }
        }
    }

    post {
        success {
            echo 'Pipeline finished successfully.'
        }
        failure {
            echo 'Pipeline encountered a failure.'
        }
    }
}
