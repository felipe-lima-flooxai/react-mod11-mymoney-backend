const BillingCycle = require("./billingCycle")

// CRUD completo
module.exports = {
    getAll: async (req, res) => {
      try {
        const docs = await BillingCycle.find({});
        res.send(docs);
      } catch (err) {
        res.status(500).send(err);
      }
    },
  
    create: async (req, res) => {
      try {
        const obj = new BillingCycle(req.body);
        const saved = await obj.save();
        res.status(201).send(saved);
      } catch (err) {
        res.status(400).send(err);
      }
    },
  
    update: async (req, res) => {
      try {
        const updated = await BillingCycle.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true, runValidators: true }
        );
        res.send(updated);
      } catch (err) {
        res.status(400).send(err);
      }
    },
  
    delete: async (req, res) => {
      try {
        await BillingCycle.findByIdAndDelete(req.params.id);
        res.send({ message: "Registro removido com sucesso" });
      } catch (err) {
        res.status(400).send(err);
      }
    },

    count: async (req, res) => {
      try {
        const count = await BillingCycle.countDocuments();
        res.send({ count });
      } catch (err) {
        res.status(500).send({ error: err });
      }
    },


    getSummary: async (req, res) => {
      try {
        const result = await BillingCycle.aggregate([
          {
            $project: {
              totalCredits: { $sum: "$credits.value" },
              totalDebts: { $sum: "$debts.value" }
            }
          },
          {
            $group: {
              _id: null,
              credits: { $sum: "$totalCredits" },
              debts: { $sum: "$totalDebts" },
              balance: { $sum: { $subtract: ["$totalCredits", "$totalDebts"] } }
            }
          }
        ]);
  
        const summary = result[0] || { credits: 0, debts: 0, balance: 0 };
        res.send(summary);
      } catch (err) {
        res.status(500).send({ error: err });
      }
    }
  };