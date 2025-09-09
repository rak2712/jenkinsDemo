pipeline {
    agent any

    environment {
        DEPLOY_DIR = 'C:\\xampp\\htdocs\\'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo '📥 Cloning repository...'
                git url: 'https://github.com/rak2712/Jenkins.git', branch: 'main'
            }
        }

        stage('Deploy to Apache htdocs (ra folder)') {
            steps {
                echo '🚀 Deploying to Apache htdocs (ra)...'

                bat """
                if exist "%DEPLOY_DIR%" (
                    rmdir /s /q "%DEPLOY_DIR%"
                )
                mkdir "%DEPLOY_DIR%"
                xcopy * "%DEPLOY_DIR%" /s /e /y /i
                """
            }
        }

        stage('Done') {
            steps {
                echo '✅ Deployed successfully!'
                echo '🌐 Open your app: http://localhost/'
            }
        }
    }
}
