pipeline {  
  environment {
    registry = "997795103726.dkr.ecr.us-east-1.amazonaws.com/digitalproducts-boosters"
    registryCredential = 'f83b61f6-d8eb-4162-9b83-9d7f3eb0c5fd'
    AWS_ECS_CLUSTER = 'tradesies-apprentice-workshop-cluster'
    AWS_ECS_SERVICE = 'tradesies-frontend-serv'
    AWS_ECS_TASK_DEFINITION = "tradesies-frontend-tg"
  }  
  agent any
  stages {
    stage('Build and Deploy to ECR') {
      steps{
        script {
          def dockerImage = docker.build registry + ":$BUILD_NUMBER"
          
          docker.withRegistry("https://" + registry, "ecr:us-east-1:" + registryCredential) {
          	dockerImage.push()
            dockerImage.push('latest')
		  }
        }
      }
    
    } 
}
