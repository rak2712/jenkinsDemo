pipeline {
    agent any

    environment {
        DEPLOY_DIR = 'C:\\xampp\\htdocs'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo '📥 Cloning from GitHub...'
                git url: 'https://github.com/rak2712/Jenkins.git', branch: 'main'
            }
        }

        stage('Deploy to XAMPP') {
            steps {
                echo "🚀 Copying files to %DEPLOY_DIR%"
                bat """
                    if not exist "%DEPLOY_DIR%" (
                        echo ❌ ERROR: %DEPLOY_DIR% does not exist.
                        exit 1
                    )
                    echo ✅ Copying files...
                    xcopy /Y /F index.html "%DEPLOY_DIR%"
                    xcopy /Y /F style.css "%DEPLOY_DIR%"
                    xcopy /Y /F script.js "%DEPLOY_DIR%"
                """
            }
        }

        stage('Done') {
            steps {
                echo '✅ Deployment complete!'
                echo '🌐 Open http://localhost/ in your browser.'
            }
        }
    }
}
