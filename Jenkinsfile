pipeline {
  agent any
  stages {
    stage('prepare') {
      steps {
        sh 'yarn install'
      }
    }

  }
  environment {
    CC = '\'clang\''
  }
}