const mongoose = require('mongoose');

const fiberNodeSchema = new mongoose.Schema({
  node: {
    type: String,
  },
  type: {
    type: String,
  },
  otherValue: {
    type: String,
  }
});

const incidentSchema = new mongoose.Schema({
  incidentNumber: {
    type: String,
  },
  notificationNumber: {
    type: String,
  },
  startDate: {
    type: String,
  },
  startTime: {
    type: String,
  },
  endDate: {
    type: String,
  },
  endTime: {
    type: String,
  },
  durationHours: {
    type: String,
  },
  informedBy: {
    value: {
      type: String,
    },
    otherValue: {
      type: String
    }
  },
  informedTime: {
    type: String,
  },
  fiberNodes: {
    type: [fiberNodeSchema],
  },
  area: {
    value: {
      type: String,
    },
    otherValue: {
      type: String
    }
  },
  owner: {
    value: {
      type: String,
    },
    otherValue: {
      type: String
    }
  },
  longitude: {
    type: String,
  },
  latitude: {
    type: String,
  },
  rca: {
    value: {
      type: String,
    },
    otherValue: {
      type: String
    }
  },
  serviceImpact: {
    value: {
      type: String,
    },
    otherValue: {
      type: String
    }
  },
  informedTeams: {
    value: {
      type: String,
    },
    otherValue: {
      type: String
    }
  },
  loggedBy: {
    value: {
      type: String,
    },
    otherValue: {
      type: String
    }
  }
});

const Incident = mongoose.model('Incident', incidentSchema);

module.exports = Incident;
