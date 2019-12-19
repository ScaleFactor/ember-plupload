var RSVP = require('rsvp');

module.exports = {
  normalizeEntityName: function () {},

  afterInstall: function () {
    return RSVP.all([
      this.addPackageToProject('plupload', 'v2.1.8'),
      this.addPackageToProject('dinosheets', '0.1.1'),
    ]);
  }
};
