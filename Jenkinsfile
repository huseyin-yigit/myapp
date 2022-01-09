pipeline {  
  environment {
    registry = "997795103726.dkr.ecr.us-east-1.amazonaws.com/digitalproducts-boosters"
    registryCredential = 'f83b61f6-d8eb-4162-9b83-9d7f3eb0c5fd'
    AWS_ECS_CLUSTER = 'digitalproducts-boosters'
    AWS_ECS_SERVICE = 'digitalproducts-boosters-serv'
    AWS_ECS_TASK_DEFINITION = "digitalproducts-boosters-tg"
  }  
  agent { label 'docker-compose' }
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
    stage ('Update ECS service') {
      steps{
        withAWS(credentials:'f83b61f6-d8eb-4162-9b83-9d7f3eb0c5fd',  region: 'us-east-1') {
        sh "aws ecs update-service --cluster ${AWS_ECS_CLUSTER} --desired-count 2 --service ${AWS_ECS_SERVICE} --task-definition ${AWS_ECS_TASK_DEFINITION}:5"
      }
      }
    }  
  }
}
