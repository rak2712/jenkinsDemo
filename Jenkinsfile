pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
        stage('Lint Code') {
            steps {
                echo 'Linting code...'
                bat 'npm run lint'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Your deploy commands here
            }
        }
    }
}
