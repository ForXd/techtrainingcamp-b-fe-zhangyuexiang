module.exports = {
  apps : [{
    script: './koa-backend/index.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'root',
      host : '47.96.156.66',
      ref  : 'origin/master',
      repo : 'https://github.com/ForXd/techtrainingcamp-b-fe-zhangyuexiang.git',
      path : '/home',
      'pre-deploy-local': '',
      'post-deploy' : 'cd koa-backend && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
