const { ConstructLibraryCdk8s, Semver } = require('projen');
const PROJECT_DESCRIPTION = 'cdk8s-aws-alb-ingress-controller is an CDK8S construct library that provides AWS Alb Ingress Controller Deplyment Configure.';
const CDK_VERSION = '1.70.0';
const project = new ConstructLibraryCdk8s({
  description: PROJECT_DESCRIPTION,
  authorAddress: "guan840912@gmail.com",
  authorName: "Neil Kuan",
  cdk8sVersion: "0.30.0",
  name: "cdk8s-aws-alb-ingress-controller",
  repository: "https://github.com/guan840912/cdk8s-aws-alb-ingress-controller.git",
  keywords: ['aws', 'cdk8s', 'alb-ingress-controller'],
  defaultReleaseBranch: 'main',
  releaseBranches: ['main'],
  catalog: {
    twitter: 'neil_kuan',
    announce: true,
  },
  python: {
    distName: 'cdk8s-aws-alb-ingress-controller',
    module: 'cdk8s_aws_alb_ingress_controller',
  },
});
project.addPeerDependencies({
  'constructs': Semver.caret('3.1.3'),
  '@aws-cdk/aws-iam': Semver.caret(CDK_VERSION),
  '@aws-cdk/core': Semver.caret(CDK_VERSION),
});

const common_exclude = ['cdk.out', 'cdk.context.json', 'image', 'yarn-error.log','coverage'];
project.gitignore.exclude(...common_exclude);

project.npmignore.exclude(...common_exclude);
project.synth();