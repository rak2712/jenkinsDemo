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
                        echo 'Installing dependencies...'
                        bat 'npm install'
                    } else {
                        echo 'package.json not found, skipping npm install.'
                    }
                }
            }
        }
        stage('Lint Code') {
            steps {
                script {
                    def packageJson = readJSON file: 'package.json'
                    if (packageJson.scripts?.lint) {
                        echo 'Lint script found, running lint...'
                        bat 'npm run lint'
                    } else {
                        echo 'No lint script found, skipping lint stage.'
                    }
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    def packageJson = readJSON file: 'package.json'
                    if (packageJson.scripts?.test) {
                        echo 'Test script found, running tests...'
                        bat 'npm test'
                    } else {
                        echo 'No test script found, skipping tests.'
                    }
                }
            }
        }
        // Add Build, Deploy stages similarly
    }
}
