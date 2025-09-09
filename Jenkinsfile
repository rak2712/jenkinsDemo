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

        stage('Check package.json scripts') {
            steps {
                script {
                    // Read package.json as text and parse JSON
                    def jsonText = readFile 'package.json'
                    echo "package.json content: ${jsonText}"

                    def pkg = readJSON text: jsonText
                    echo "Parsed package.json scripts: ${pkg.scripts}"

                    // Store scripts info to env variables for use in later stages
                    env.LINT_EXISTS = pkg.scripts?.lint ? 'true' : 'false'
                    env.TEST_EXISTS = pkg.scripts?.test ? 'true' : 'false'
                    env.TEST_IS_DEFAULT_FAIL = (pkg.scripts?.test?.contains('exit 1')) ? 'true' : 'false'
                }
            }
        }

        stage('Lint Code') {
            when {
                expression { env.LINT_EXISTS == 'true' }
            }
            steps {
                echo 'Running lint script...'
                bat 'npm run lint'
            }
        }

        stage('Run Tests') {
            when {
                expression { env.TEST_EXISTS == 'true' && env.TEST_IS_DEFAULT_FAIL == 'false' }
            }
            steps {
                echo 'Running test script...'
                bat 'npm test'
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
