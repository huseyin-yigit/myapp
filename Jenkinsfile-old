pipeline {
    agent any
    stages {
        stage('Build Application') {
            steps {
                sh 'docker build -t mydemo .'
                
            }
        }
            stage('Run Application') {
            steps {
                
                sh 'docker run -dp 9090:3000 mydemo'
            }
            
        }
        
    }
}
