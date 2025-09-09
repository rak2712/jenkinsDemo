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
                bat 'npm install'
            }
        }
        stage('Check scripts') {
            steps {
                script {
                    def pkg = readJSON file: 'package.json'
                    env.LINT_EXISTS = pkg.scripts?.lint ? 'true' : 'false'
                    env.TEST_EXISTS = pkg.scripts?.test ? 'true' : 'false'
                }
            }
        }
        stage('Lint Code') {
            when {
                expression { env.LINT_EXISTS == 'true' }
            }
            steps {
                bat 'npm run lint'
            }
        }
        stage('Run Tests') {
            when {
                expression { env.TEST_EXISTS == 'true' }
            }
            steps {
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Build stage - add your commands here'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy stage - add your commands here'
            }
        }
    }
}
