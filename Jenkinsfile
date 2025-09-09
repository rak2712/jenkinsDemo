pipeline {
    agent any

    environment {
        DEPLOY_DIR = 'C:\\xampp\\htdocs'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/rak2712/Jenkins.git'
            }
        }

        stage('Deploy to XAMPP') {
            steps {
                echo "Deploying files to ${env.DEPLOY_DIR}..."

                bat """
                if not exist "${env.DEPLOY_DIR}" (
                    echo ERROR: Deployment directory does not exist!
                    exit 1
                )

                xcopy /Y /F index.html "${env.DEPLOY_DIR}\\"
                xcopy /Y /F style.css "${env.DEPLOY_DIR}\\"
                xcopy /Y /F script.js
