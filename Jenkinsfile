pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code from GitHub...'
            }
        }

        stage('Verify Files') {
            steps {
                echo 'Verifying project files...'
                bat 'dir'
            }
        }

        stage('Build & Test') {
            steps {
                echo 'Building and testing PG Finder project...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying project...'
            }
        }
    }

    post {
        always {
            echo 'Pipeline run completed.'
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
