export const home = (req, res) => {
  const { id_client, name } = req.authClient;

  res.status(200).json({
    msg: "Sesión iniciada correctamente.",
    ok: true,
    authClient: { id_client, name },
  });
};
