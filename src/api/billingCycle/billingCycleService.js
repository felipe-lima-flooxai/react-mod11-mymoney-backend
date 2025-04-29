const billingCycle = require("./billingCycle")

billingCycle.methods(["get", "post", "put", "delete"])
billingCycle.updateOptions({new: true, runValidator: true})

module.exports = billingCycle