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
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }

        stage('Lint Code') {
            steps {
                script {
                    def pkg = readJSON file: 'package.json'
                    if (pkg.scripts?.lint) {
                        echo 'Running lint script...'
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
                    def pkg = readJSON file: 'package.json'
                    if (pkg.scripts?.test && !pkg.scripts.test.contains('exit 1')) {
                        echo 'Running test script...'
                        bat 'npm test'
                    } else {
                        echo 'No valid test script found, skipping tests.'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage - add your build commands here if any.'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage - add your deploy commands here if any.'
            }
        }
    }
}
