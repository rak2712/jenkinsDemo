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

        stage('Deploy to XAMPP') {
            steps {
                echo "Copying files to ${env.DEPLOY_DIR}"
                bat """
                    if not exist "${env.DEPLOY_DIR}" (
                        echo ERROR: XAMPP htdocs directory not found!
                        exit 1
                    )

                    xcopy /Y /F index.html "${env.DEPLOY_DIR}\\"
                    xcopy /Y /F style.css "${env.DEPLOY_DIR}\\"
                    xcopy /Y /F script.js "${env.DEPLOY_DIR}\\"

                    echo ✅ Deployment complete. Visit http://localhost/
                """
            }
        }
    }
}
