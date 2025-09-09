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
                echo 'Installing dependencies...'
                bat '''
                    if exist package.json (
                        npm install
                    ) else (
                        echo No package.json found. Skipping npm install.
                    )
                '''
            }
        }

        stage('Lint Code') {
            steps {
                echo 'Linting code...'
                bat '''
                    if exist package.json (
                        npm run lint || echo "Lint script not found or failed, skipping..."
                    ) else (
                        echo No package.json found. Skipping lint.
                    )
                '''
            }
        }

        stage('Deploy to XAMPP') {
            steps {
                echo "Deploying files to ${env.DEPLOY_DIR}..."
                bat """
                    if not exist "${env.DEPLOY_DIR}" (
                        echo ERROR: Directory ${env.DEPLOY_DIR} does not exist.
                        exit 1
                    )
                    xcopy /Y /F index.html "${env.DEPLOY_DIR}\\"
                    xcopy /Y /F style.css "${env.DEPLOY_DIR}\\"
                    xcopy /Y /F script.js "${env.DEPLOY_DIR}\\"
                    echo Deployment complete.
                """
            }
        }

        stage('Finish') {
            steps {
                echo '✅ Done. Open http://localhost/ in your browser.'
            }
        }
    }
}
