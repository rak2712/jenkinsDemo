pipeline {
    agent any

    environment {
        DEPLOY_DIR = 'C:\\xampp\\htdocs'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/rak2712/Jenkins.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies (if package.json exists)...'
                bat '''
                    if exist package.json (
                        echo Found package.json, running npm install...
                        npm install
                    ) else (
                        echo No package.json, skipping npm install.
                    )
                '''
            }
        }

        stage('Lint Code') {
            steps {
                echo 'Running lint (if defined)...'
                bat '''
                    if exist package.json (
                        echo Running npm run lint...
                        npm run lint || echo "No lint script found, skipping."
                    ) else (
                        echo No package.json, skipping lint.
                    )
                '''
            }
        }

        stage('Deploy to XAMPP') {
            steps {
                echo "Deploying files to ${env.DEPLOY_DIR}"
                bat """
                    if not exist "${env.DEPLOY_DIR}" (
                        echo ERROR: ${env.DEPLOY_DIR} not found
                        exit 1
                    )
                    xcopy /Y /F index.html "${env.DEPLOY_DIR}\\"
                    xcopy /Y /F style.css "${env.DEPLOY_DIR}\\"
                    xcopy /Y /F script.js "${env.DEPLOY_DIR}\\"
                    echo ✅ Deployed successfully!
                """
            }
        }

        stage('Done') {
            steps {
                echo '🌐 Visit http://localhost/ in your browser.'
            }
        }
    }
}
