const apm = require('elastic-apm-node').start({
  serviceName: process.env.APP,
  serviceVersion: process.env.VERSION || '1.0',
  serverUrl: process.env.APM_URL,
  active: process.env.NODE_ENV === "production"
});
export { apm };
