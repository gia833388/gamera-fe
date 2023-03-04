pipline {
    agent any

    stages {
        stage('Prepare') {
            steps {
                sh 'yarn install'
                sh 'yarn run build'
            }
        }

        stage('Build') {
            steps {
                echo 'Buiding'
            }
        }
    
        stage('Test') {
            steps {
                echo 'Testing'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Depoying'
            }
        }
    }
}
