var config = {};
function setConfiguration(clientId, jobId, interviewId, configName, value) {
    if (!config[clientId]) {
        config[clientId] = {};
    }
    if (!config[clientId][jobId]) {
        config[clientId][jobId] = {};
    }
    if (!config[clientId][jobId][interviewId]) {
        config[clientId][jobId][interviewId] = {};
    }
    config[clientId][jobId][interviewId][configName] = value;
}
function getConfiguration(clientId, jobId, interviewId, configName) {
    if (config[clientId] && config[clientId][jobId] && config[clientId][jobId][interviewId]) {
        return config[clientId][jobId][interviewId][configName];
    }
    else {
        return null;
    }
}
setConfiguration('client1', 'job1', 'interview1', 'CandidateMobileSupport', true);
setConfiguration('client1', 'job1', 'interview1', 'InterviewRecording', false);
console.log(getConfiguration('client1', 'job1', 'interview1', 'CandidateMobileSupport'));
console.log(getConfiguration('client1', 'job1', 'interview1', 'InterviewRecording'));
