pipeline {
    agent any

    environment {
        APACHE_HTDOCS = 'C:\\xampp\\htdocs\\calculator-app'  // Folder inside htdocs
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning repository...'
                git url: 'https://github.com/rak2712/Jenkins.git', branch: 'main'
            }
        }

        stage('Deploy to htdocs') {
            steps {
                echo 'Deploying files to Apache htdocs...'
                
                bat """
                if exist "%APACHE_HTDOCS%" (
                    rmdir /s /q "%APACHE_HTDOCS%"
                )
                mkdir "%APACHE_HTDOCS%"
                xcopy * "%APACHE_HTDOCS%" /s /e /y
                """
            }
        }

        stage('Completed') {
            steps {
                echo 'Deployment completed. Open http://localhost/calculator-app in browser.'
            }
        }
    }
}
