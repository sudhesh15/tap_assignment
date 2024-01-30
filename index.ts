const config: {[clientId: string]: {[jobId: string]: {[interviewId: string]: {[configName: string]: boolean}}}} = {};    

function setConfiguration(clientId: string, jobId: string, interviewId: string, configName: string, value: boolean): void {
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

function getConfiguration(clientId: string, jobId: string, interviewId: string, configName: string): boolean | null {
    if (config[clientId] && config[clientId][jobId] && config[clientId][jobId][interviewId]) {
        return config[clientId][jobId][interviewId][configName];
    } else {
        return null;
    }
}

setConfiguration('client1', 'job1', 'interview1', 'CandidateMobileSupport', true);
setConfiguration('client1', 'job1', 'interview1', 'InterviewRecording', false);

console.log(getConfiguration('client1', 'job1', 'interview1', 'CandidateMobileSupport')); 
console.log(getConfiguration('client1', 'job1', 'interview1', 'InterviewRecording'));
