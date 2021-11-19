import Client from "../models/client.model";

export const findAllClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

export const createClient = async (req, res) => {
  const newCLient = new Client({
    Name: req.body.Name,
    LastName: req.body.LastName,
    Email: req.body.Email,
  });
  const clientSaved = await newCLient.save();
  res.json(clientSaved);
  // console.log('saving a new client');
};

export const finOneClient = async (req, res) => {
  const newCLient = await Client.findById(req.params.id);
  res.json(newCLient);
};

export const deleteClient = async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.json({
    message: "client was deleted succesfully",
  });
};

export const findByName = async (req, res) => {
  const clientByName = await Client.find({ Name: req.params.name });
  res.json(clientByName);
};

export const updateClient = async (req, res) => {
  await Client.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Client was updated successful" });
};
