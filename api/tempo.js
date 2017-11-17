"use strict";

module.exports = TempoClient;

/**
 * Used to access Jira REST endpoints in '/rest/tempo-timesheets/3/'
 * @param {JiraClient} jiraClient
 * @constructor TempoClient
 */
function TempoClient(jiraClient) {
    this.jiraClient = jiraClient;

    /**
     * Returns tempo worklogs
     *
     * @method getWorkLogs
     * @memberOf TempoClient#
     * @param opts The request options sent to the Jira Tempo API.
     * @param [callback] Called when the projects have been retrieved.
     * @return {Promise} Resolved when worklogs have been retrieved.
     */
    this.getWorkLogs = function (opts, callback) {
       var options = {
          method: 'GET',
          uri: this.jiraClient.buildTempoURL('/worklogs/'),
          json: true,
          followAllRedirects: true,
          qs: opts
       };

      return this.jiraClient.makeRequest(options, callback);
    };
};

