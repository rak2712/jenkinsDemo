pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Run App (Smoke Test)') {
            steps {
                echo 'Starting app for a quick check...'
                sh 'node app &'
                sh 'sleep 5'
                sh 'pkill -f "node app" || true'
            }
        }

        stage('Lint (Optional)') {
            steps {
                echo 'Linting code...'
                // e.g., sh 'npm run lint' (if lint script exists)
            }
        }

        stage('Test (Optional)') {
            steps {
                echo 'Running tests...'
                // e.g., sh 'npm test' (if test script exists)
            }
        }

        stage('Deploy (Placeholder)') {
            steps {
                echo 'Deploying… this is a placeholder'
                // Insert actual deployment steps here (e.g., SCP, Docker, etc.)
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
